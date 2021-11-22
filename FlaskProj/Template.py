from pdf2image import convert_from_path
from pathlib import Path
import json



class Template:
    def __init__(self,fileName=None, fontName=None, configPath=None):
        self.fileName = fileName
        self.fontName = fontName
        self.__setTemplateInfo(configPath)

    def __setTemplateInfo(self,configPath=None):
        config = json.load(open(configPath))
        self.numPage = config.get("numPage")
        self.size = config.get("size")
        self.numCol = config.get("numCol")
        self.numRow = config.get("numRow")
        self.initX = config.get("initX")
        self.initY = config.get("initY")
        self.rowGap = config.get("rowGap")
        self.unicodes = config.get("chars")

    def crop(self):
        pages = convert_from_path(
              pdf_path='C:\\Users\\96032\\PycharmProjects\\flask-dmfont\\Capstone-project\\web1\\public\\' + self.fileName
            , poppler_path=r'C:\Users\96032\PycharmProjects\flask-dmfont\ProgramFiles\poppler-0.68.0\bin'
        )

        savePath = self.fontName+"/in/pngs/"
        Path(savePath).mkdir(parents=True, exist_ok=True)

        for (i, page) in enumerate(pages):
            if i ==self.numPage:
                break
            pageString = self.unicodes[i]
            for row in range(self.numRow):
                rowString = pageString[row]
                corY = self.initY + row * self.size + (row+1) * self.rowGap
                for col in range(self.numCol):
                    targetCode = rowString[col]
                    corX = self.initX + col * self.size
                    croppedImage = page.crop((corX,corY,corX+self.size,corY+self.size))
                    char = "0x"+hex(ord(targetCode))[2:].upper()
                    croppedImage.save(savePath+self.fontName+"_"+char+'.png')
