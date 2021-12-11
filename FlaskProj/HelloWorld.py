from flask import Flask, jsonify, request
from flask_restx import Resource, Api, reqparse
import os, shutil
from Template import Template
from Png2Svg import Png2Svg
from Svg2Ttf import Svg2Ttf
import subprocess
import json
import sys
# define BACKSLASH '\\'

app = Flask(__name__)
api = Api(app)
####################################Modify the localPath with your own Path#############################################

localPath = "C:/Users/96032/PycharmProjects/"

########################################################################################################################

fileName = []
fontName = ""
userNum = ""
part = []
As = ""
AsLetter = [[],[],[]]
modified = []
webPublicPath = localPath + "flask-dmfont/Capstone-project/web1/public/"
@api.route('/step1')
class one_API(Resource):
    def post(self):
        os.chdir(localPath+'flask-dmfont/Capstone-project/FlaskProj')
        userNum = request.json.get('content').get('check')
        fontName = request.json.get('content').get('fontName')
        part = request.json.get('content').get('fontpart')

        modified = request.json.get('content').get('modified')
        As = request.json.get('content').get('font_as')


        #part = [초성 파일, 중성 파일, 종성 파일]
        #part = [1(=initial에 파일1 사용), 0(=파일0), 2(=파일2)]

        AsLetter = [[], [], []]
        num_col = 0
        if(As == "1"):
            AsLetter = request.json.get('content').get('font_code')
            print("AsLetter")
            print(AsLetter)

            bs = []
            ds = []
            for idx in range(3):
                for i in range(len(AsLetter[idx])):
                    bs.append(AsLetter[idx][i])

            for j in range(len(bs)):
                cs = []
                for j in range(0, 10, 1):
                    k = bs[i][j:j + 1]
                    cs.append(k)
                ds.append(cs)
            print(ds)
            num_col = len(ds)
            with open("config/AStemplate.json", "r") as f:
                data = json.load(f)
                data['chars'].append(ds)
            with open("config/AStemplate.json", "w") as wf:
                json.dump(data, wf, indent=4)

            print("AS 받을 json 수정 완료")

        for i in range(int(userNum)):
            fileName.append(request.json.get('content').get('filelst')[i])
            step1(fileName[i], fontName, str(i), int(As), part=part, num_col=num_col, modified=modified[i], AsLetter=AsLetter)
            print("Running"+fontName+str(i)+" on progress...")

        print("you done?")
        return "step1 success"
        
@api.route('/step2')
class two_API(Resource):
    def post(self):
        print("before post")
        fontName = request.json.get('content').get('fontName')
        part = request.json.get('content').get('fontpart')
        userNum = request.json.get('content').get('check')
        As = request.json.get('content').get('font_as')
        AsLetter = []
        modified = request.json.get('content').get('modified')
        if (As == "1"):
            AsLetter = request.json.get('content').get('font_code')
        step2(fileName, fontName, part, userNum, As, AsLetter, modified)
        #fileName은 리스트 형태이며, 원소의 수는 1에서 3 사이의 값 [파일1, 파일2, 파일3]
        return "step2 success"


@api.route('/step3')
class three_API(Resource):
    def post(self):
        fontName = request.json.get('content').get('fontName')
        As = request.json.get('content').get('font_as')
        userNum = request.json.get('content').get('check')
        step3(fontName, None, int(As))
        print("-------------------------")
        return "step3 success"


def step1(fileName=None, fontName=None, num=None, As=None, part=None, num_col=None, modified=None, AsLetter=None):
    #Template -> pngs
    os.chdir(localPath+'flask-dmfont/Capstone-project/FlaskProj')

    if As:
        print("AS template")
        print("lastPage_numRow = "+str(num_col))

        t = Template(fileName=fileName,
                     fontName=fontName,
                     configPath="./config/AStemplate.json",
                     num=num,
                     As=As,
                     lastPage_numRow=num_col,
                     modified=modified)


    else:
        print("template croping with non-AS")
        t = Template(fileName=fileName,
                 fontName=fontName,
                 configPath ="./config/template.json",
                 num=num,
                 As=As,
                 lastPage_numRow=num_col,
                 modified=modified)
    t.crop()

    # pngs -> svgs
    png2svg = Png2Svg(fontName=fontName, num=num, is_in=True, As=As)
    png2svg.proc()

    # svgs -> TTF
    svg2ttf = Svg2Ttf(fontName=fontName, num=num, is_in=True, As=As)
    svg2ttf.proc()

    return "png2ttf success!"

def step2(fileName=None, fontName=None, part=None, num=None, As=None, AsLetter=None, modified=None):
    #part = [1(=초성에 fileName[1] 사용), 0(=중성에 fileName[0]), 2(=종성에 fileName[2])]
    #As = 0(=False), 1(=True)
    #AsLetter = [[초성 as 대상 유니코드],[중성 as 대상 유니코드],[종성 as 대상 유니코드]]]

    ##part와 AS 에 따른 dm-font json file 수정

    print("applying dmfont(ttf->hdf5)...")
    os.chdir(localPath+'flask-dmfont/dmfont')

    ##dmfont/meta/kor_split.json --> train{fonts:[+add]}
    ##dmfont/met/kor-unrefined.json -->{fonts:[초,중,종]}, -->{style_chars:""+"+add"}
    fonts = os.listdir("data/fonts_dir")
    fonts.remove("UhBee yoonjaa.ttf")
    fonts.remove("UhBee yul.ttf")
    fonts.remove("Uhbee NaHyun.ttf")

    with open("meta/kor_split.json", "r") as f:
        data = json.load(f)
        data['train']['fonts'] = fonts
    with open("meta/kor_split.json", "w") as wf:
        json.dump(data, wf)


    arg1 = "python -m scripts.prepare_dataset kor data/fonts_dir meta/kor_split.json data/fonts_hdf5"

    p = subprocess.Popen(arg1, stdout=subprocess.PIPE, shell=True)
    p.wait()

    print("applying dmfont(pngs)...")


    if As == "1":
        styleCharAppend = ""
        fonts = []
        for i in range(3):
            fonts.append(fontName + str(part[i]) + ".ttf")
        for i in range(3):
            for j in range(len(AsLetter[i])):
                styleCharAppend += AsLetter[i][j]
        with open("meta/kor-unrefined.json", "r") as f:
            data = json.load(f)
            data['style_chars'] += styleCharAppend
            data['fonts'] = fonts
        with open("meta/kor-unrefined.json", "w") as wf:
            json.dump(data, wf)

    else:
        fonts = []
        for i in range(3):
            fonts.append(fontName + str(part[i]) + ".ttf")
        with open("meta/kor-unrefined.json", "r") as f:
            data = json.load(f)
            data['fonts'] = fonts
        with open("meta/kor-unrefined.json", "w") as wf:
            json.dump(data, wf)
    print("applying dmfont(pngs)...")

    arg2 = "python evaluator.py withPTH checkpoints/korean-handwriting.pth generated_font_png cfgs/gandan.yaml --mode user-study-save"
    q = subprocess.Popen(arg2, stdout=subprocess.PIPE, shell=True)
    q.wait()
    print("dmfonting done!")

    if As != "1":
        pngPath = localPath+"flask-dmfont/dmfont/generated_font_png/withPTH-200000/"
        pngFrontName = "font_name_"
        shutil.copy(pngPath + pngFrontName + "B2E4.png", webPublicPath +fontName+"1.png")
        shutil.copy(pngPath + pngFrontName + "B78C.png", webPublicPath +fontName+ "2.png")
        shutil.copy(pngPath + pngFrontName + "C950.png", webPublicPath + fontName+"3.png")
        shutil.copy(pngPath + pngFrontName + "D5CC.png", webPublicPath +fontName+ "4.png")
        shutil.copy(pngPath + pngFrontName + "CCC7.png", webPublicPath + fontName+"5.png")
        shutil.copy(pngPath + pngFrontName + "BC14.png", webPublicPath +fontName+ "6.png")
        shutil.copy(pngPath + pngFrontName + "D034.png", webPublicPath + fontName+"7.png")
        shutil.copy(pngPath + pngFrontName + "C5D0.png", webPublicPath + fontName+"8.png")
        shutil.copy(pngPath + pngFrontName + "D0C0.png", webPublicPath + fontName+"9.png")
        shutil.copy(pngPath + pngFrontName + "ACE0.png", webPublicPath + fontName+"10.png")
        shutil.copy(pngPath + pngFrontName + "D30C.png", webPublicPath + fontName+"11.png")
        shutil.copy(pngPath + pngFrontName + "C694.png", webPublicPath + fontName + "12.png")
        print("pngs sent to Web Public")
        As = "1"
    else:
        As = "0"
        return "DMfont success!"



    return "DMfont success!"

def step3(fontName=None, num=None, As=None):
    os.chdir(localPath+'flask-dmfont/Capstone-project/FlaskProj')

    print("pngs->svgs(after dmfont)")
    # pngs -> svgs
    png2svg = Png2Svg(fontName=fontName, num=num, is_in=False, As=As)
    png2svg.proc()
    print("svgs->ttf(after dmfont)")
    # svgs -> TTF
    svg2ttf = Svg2Ttf(fontName=fontName, num=num, is_in=False, As=As)
    svg2ttf.proc()

    ttfPath = localPath+"flask-dmfont/dmfont/generated_font_png/"
    shutil.copy(ttfPath+fontName+".ttf", webPublicPath + fontName + ".ttf")

    # TODO - Inform DONE
    return "png2ttf success!"


if __name__ == '__main__':
    app.run(debug=True)
