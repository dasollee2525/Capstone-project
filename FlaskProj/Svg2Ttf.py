import json
import os
import shutil
from pathlib import Path

####################################Modify the localPath with your own Path#############################################

localPath = "C:/Users/96032/PycharmProjects/"

########################################################################################################################

class Svg2Ttf:
    def __init__(self,fontName=None, num=None, style="Regular", is_in=False, As=False):
        self.As = As
        if(As) :
            AS_check = "/as/"
        else :
            AS_check = "/"
        if (is_in):
            self.pref = "/in"
            self.fontPath = fontName +AS_check+num+ self.pref + "/"
            self.svgPath = fontName +AS_check+num + self.pref + "/svgs/"
        else:
            self.pref = "/out"
            self.fontPath = localPath+"flask-dmfont/dmfont/generated_font_png/"
            self.svgPath = localPath+"flask-dmfont/dmfont/generated_font_png/withPTH-200000/svgs/"

        self.fontName = fontName
        self.num = num
        self.style = style


    def proc(self):
        jsonPath = self.writeJson(self.fontName,self.style)
        self.svg2ttf(jsonPath)

    def writeJson(self,fontName, style):
        with open('config/svg2ttf_json_template.json', 'r') as f:
            json_data = json.load(f)
            prop = json_data["props"]
            prop["style"] = style
            prop["familyname"] = fontName
            prop["fontname"] = fontName+"-"+style
            prop["fullname"] = fontName+"-"+style

            glyphs = json_data["glyphs"]
            for svg in os.listdir(self.svgPath):
                if(svg.endswith(".svg")):
                    unicode = os.path.splitext(svg)[0].split('_')[-1]
                    if (unicode[0] != 0) and (unicode[1] != 'x'):
                        unicode = "0x" + unicode
                    glyphs[unicode] = svg

            json_data["output"] = [fontName+".ttf"]

            jsonPath = self.svgPath+fontName+".json"
            with open(jsonPath, "w") as dump:
                json.dump(json_data, dump, indent=4, sort_keys=True)

            return jsonPath

    def svg2ttf(self,jsonPath):

        if(self.As) :
            AS_check = "\\as\\"
        else :
            AS_check = "\\"

        if(self.pref[1]=='i'):
            self.pref = "in"
            cmd = "ffpython .\svgs2ttf.py " + ".\\" + self.fontName + AS_check + self.num+ "\\"+self.pref+"\\svgs\\"+self.fontName+".json"
            print(cmd)
            os.system(cmd)
            orig = self.svgPath+self.fontName+".ttf"
            dest = localPath+'flask-dmfont/dmfont/data/fonts_dir/'+self.fontName+self.num+".ttf"
            #dest = self.fontPath+self.fontName+".ttf"

            shutil.move(orig, dest)
        else:
            self.pref="out"
            os.chdir(localPath+'flask-dmfont/dmfont')

            cmd = "ffpython .\svgs2ttf.py " + ".\\generated_font_png\\withPTH-200000\\svgs\\" + self.fontName + ".json"
            print(cmd)
            os.system(cmd)
            orig = self.svgPath + self.fontName + ".ttf"
            dest = self.fontPath + self.fontName + ".ttf"

            shutil.move(orig, dest)


