from pdf2image import convert_from_path
from pathlib import Path
import json
import os


####################################Modify the localPath with your own Path#############################################

localPath = "C:Users/96032/PycharmProjects/"
webPublicPath=r'C:\Users\96032\PycharmProjects\flask-dmfont\Capstone-project\web1\public'
popplerPath =r'C:\Users\96032\PycharmProjects\flask-dmfont\ProgramFiles\poppler-0.68.0\bin'
########################################################################################################################

class Template:

    def __init__(self,fileName=None, fontName=None, configPath=None, num=None, As=None, lastPage_numRow=None, modified=None):
        self.fileName = fileName
        self.fontName = fontName
        self.__setTemplateInfo(configPath)
        self.num = num
        self.As = As
        self.lastPage_numRow = lastPage_numRow
        self.modified = modified

    def __setTemplateInfo(self,configPath=None):
        config = json.load(open(configPath))
        self.numPage = config.get("numPage")
        self.size = config.get("size")
        self.numCol = config.get("numCol")
        self.numRow = config.get("numRow")
        self.initX = config.get("initX")
        self.initY = config.get("initY")
        self.rowGap = config.get("rowGap")
        self.colGap = config.get("colGap")
        self.unicodes = config.get("chars")

    def crop(self):
        # pages = convert_from_path(
        #     pdf_path='C:\\Users\\96032\\PycharmProjects\\flask-dmfont\\Capstone-project\\web1\\public\\' + self.fileName
        #     , poppler_path=r'C:\Users\96032\PycharmProjects\flask-dmfont\ProgramFiles\poppler-0.68.0\bin'
        # )
        pages = convert_from_path(
            pdf_path=webPublicPath + "\\"+self.fileName
            , poppler_path=popplerPath
        )

        if(self.As) :
            AS_check = "/as/"
        else :
            AS_check = "/"

        savePath = self.fontName+AS_check+self.num+"/in/pngs/"
        Path(savePath).mkdir(parents=True, exist_ok=True)

        for i in range(self.numPage):
            page = pages[i]
            print("i : "+str(i))
            current_numRow = self.numRow
            if i == self.numPage-1 and i is not 0:
                current_numRow = self.lastPage_numRow
            print("unicode : " + str(len(self.unicodes)))
            pageString = self.unicodes[i]
            for row in range(current_numRow):
                rowString = pageString[row]
                corY = self.initY + row * self.size + (row+1) * self.rowGap
                for col in range(self.numCol):
                    print(row,col)
                    targetCode = rowString[col]
                    corX = self.initX + col * self.size + (col) * self.colGap

                    croppedImage = page.crop((corX,corY,corX+self.size,corY+self.size))
                    char = "0x"+hex(ord(targetCode))[2:].upper()
                    croppedImage.save(savePath+self.fontName+"_"+char+'.png')

