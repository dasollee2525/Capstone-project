import os
from pathlib import Path


class Png2Svg:
    def __init__(self,fontName=None, is_in=False) -> object:
        self.fontName = fontName
        self.magicPath = 'C:/Users/96032/PycharmProjects/flask-dmfont/ProgramFiles/ImageMagick/magick.exe'
        self.potracePath = 'C:/Users/96032/PycharmProjects/flask-dmfont/ProgramFiles/potrace/potrace.exe'

        if(is_in) :
            self.pref="/in"
            self.pngPath = fontName + self.pref + "/pngs/"
            self.pnmPath = fontName + self.pref + "/pnms/"
            self.svgPath = fontName + self.pref + "/svgs/"
        else :
            self.pref ="/out"
            self.pngPath = "C:/Users/96032/PycharmProjects/flask-dmfont/dmfont/generated_font_png/withPTH-200000/seongbin.ttf/"
            self.pnmPath = "C:/Users/96032/PycharmProjects/flask-dmfont/dmfont/generated_font_png/withPTH-200000/pnms/"
            self.svgPath = "C:/Users/96032/PycharmProjects/flask-dmfont/dmfont/generated_font_png/withPTH-200000/svgs/"

    def proc(self):
        Path(self.pngPath).mkdir(parents=True, exist_ok=True)
        Path(self.pnmPath).mkdir(parents=True, exist_ok=True)
        Path(self.svgPath).mkdir(parents=True, exist_ok=True)

        for png in os.listdir(self.pngPath):
            self.png2pnm(png)

        for pnm in os.listdir(self.pnmPath):
            self.pnm2svg(pnm)

    def png2pnm(self, png):
        if self.pref != "/out":
            print(self.pref)
            pnm =self.pnmPath + png.split(".")[0] + ".pnm"
            print(pnm)
            png = self.pngPath + png;
        else:
            pnm= self.pnmPath + png.split(".")[0]+"_"+png.split(".")[1] + ".pnm"

            png = self.pngPath + png;

        cmd = self.magicPath+" convert {0} {1}".format(png,pnm)
        os.system(cmd)

    def pnm2svg(self,pnm):
        if self.pref !='\out':
            svg = self.svgPath + os.path.basename(pnm).split(".")[0] + ".svg"
            pnm = self.pnmPath + pnm
        else:
            svg = self.svgPath + os.path.basename(pnm).split(".")[1] + ".svg"
            pnm = self.pnmPath + pnm


        cmd = self.potracePath+" -s -o {0} {1}".format(svg, pnm);
        os.system(cmd)


