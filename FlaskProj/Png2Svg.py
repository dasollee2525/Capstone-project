import os
from pathlib import Path

from flask import Flask, jsonify, request
from flask_restx import Resource, Api, reqparse

import subprocess

# define BACKSLASH '\\'

app = Flask(__name__)
api = Api(app)

####################################Modify the localPath with your own Path#############################################

localPath = "C:/Users/96032/PycharmProjects/"

########################################################################################################################



class Png2Svg:
    def __init__(self,fontName=None, num=None, is_in=False, As=False):
        self.fontName = fontName
        self.num = num
        self.magicPath = localPath+'flask-dmfont/ProgramFiles/ImageMagick/magick.exe'
        self.potracePath = localPath+'flask-dmfont/ProgramFiles/potrace/potrace.exe'
        if(As) :
            AS_check = "/as/"
        else :
            AS_check = "/"

        if (is_in):
            self.pref = "/in"
            self.pngPath = fontName +AS_check+ num+ self.pref + "/pngs/"
            self.pnmPath = fontName +AS_check+ num+ self.pref + "/pnms/"
            self.svgPath = fontName +AS_check+ num+ self.pref + "/svgs/"
        else:
            self.pref = "/out"
            self.pngPath = localPath+"flask-dmfont/dmfont/generated_font_png/withPTH-200000/"
            self.pnmPath = localPath+"flask-dmfont/dmfont/generated_font_png/withPTH-200000/pnms/"
            self.svgPath = localPath+"flask-dmfont/dmfont/generated_font_png/withPTH-200000/svgs/"

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

        cmd = "{0} -s -o {1} {2}".format(self.potracePath,svg, pnm);
        os.system(cmd)
