import os
from pathlib import Path


class Png2Svg:
    def __init__(self,fontName=None, is_in=False):
        self.fontName = fontName
        self.magicPath = 'C:/utils/ImageMagick/magick.exe'
        if(is_in) :
            pref="/in"
        else :
            pref ="/out"
        self.pngPath = fontName + pref+"/pngs/"
        self.pnmPath = fontName + pref+"/pnms/"
        self.svgPath = fontName + pref+"/svgs/"

    def proc(self):
        Path(self.pnmPath).mkdir(parents=True, exist_ok=True)
        Path(self.svgPath).mkdir(parents=True, exist_ok=True)

        for png in os.listdir(self.pngPath):
            self.png2pnm(png)

        for pnm in os.listdir(self.pnmPath):
            self.pnm2svg(pnm)

    def png2pnm(self, png):
        pnm =self.pnmPath + png.split(".")[0] + ".pnm"
        png = self.pngPath + png;

        cmd = self.magicPath+" convert {0} {1}".format(png,pnm)
        os.system(cmd)

    def pnm2svg(self,pnm):
        svg= self.svgPath + os.path.basename(pnm).split(".")[0] + ".svg"
        pnm= self.pnmPath + pnm

        cmd = "potrace -s -o {0} {1}".format(svg, pnm);
        os.system(cmd)


