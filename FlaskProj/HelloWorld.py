from flask import Flask, jsonify, request
from flask_restx import Resource, Api, reqparse
import subprocess
import os, shutil
from Template import Template
from Png2Svg import Png2Svg
from Svg2Ttf import Svg2Ttf

# define BACKSLASH '\\'

app = Flask(__name__)
api = Api(app)

@api.route('/test')
class doAPI(Resource):
    def post(self):
        fileName = request.json.get('content').get('fileName') + "0.pdf"
        fontName = request.json.get('content').get('fontName')
        reply = proc(fileName, fontName);
        return reply


def proc(fileName=None, fontName=None):
    # Template -> pngs
    print("crops pdf to images...")
    t = Template(fileName=fileName,
                 fontName=fontName,
                 configPath ="./config/template.json")
    t.crop()

    # pngs -> svgs
    print("png2svg starts")
    png2svg = Png2Svg(fontName=fontName, is_in=True)
    png2svg.proc()

    # svgs -> TTF
    print("png2svg ends, svg2ttf starts")
    svg2ttf = Svg2Ttf(fontName=fontName, is_in=True)
    svg2ttf.proc()

    # TODO - TTF -> APPLY DM-FONT
    ############## APPLY DM FONT ###############
    print("applying dmfont(ttf->hdf5)...")
    os.chdir('C:/Users/96032/PycharmProjects/flask-dmfont/dmfont')
    arg1 = "python -m scripts.prepare_dataset kor data/fonts_dir meta/kor_split.json data/fonts_hdf5"

    p = subprocess.Popen(arg1, stdout=subprocess.PIPE, shell=True)
    p.wait()

    print("applying dmfont(pngs)...")
    arg2 = "python evaluator.py withPTH checkpoints/korean-handwriting.pth generated_font_png cfgs/gandan.yaml --mode user-study-save"
    q = subprocess.Popen(arg2, stdout=subprocess.PIPE, shell=True)
    q.wait()

    os.chdir('C:/Users/96032/PycharmProjects/flask-dmfont/Capstone-project/FlaskProj')


    # pngs -> svgs
    print("png2svg starts")
    png2svg = Png2Svg(fontName=fontName, is_in=False)
    png2svg.proc()

    # svgs -> TTF
    print("png2svg ends, svg2ttf starts")
    svg2ttf = Svg2Ttf(fontName=fontName, is_in=False)
    svg2ttf.proc()

    print("move ttf dir")
    filename = fileName
    src = 'C:/Users/96032/PycharmProjects/flask-dmfont/dmfont/generated_font_png/'
    dir = 'C:/Users/96032/PycharmProjects/flask-dmfont/Capstone-project/web1/public/'
    shutil.move(src+filename, dir+filename)
    print("done??")

    # TODO - Inform DONE
    return "request DONE!"


if __name__ == '__main__':
    app.run(debug=True)
