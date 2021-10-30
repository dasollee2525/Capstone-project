from flask import Flask, jsonify, request
from flask_restx import Resource, Api, reqparse
from Template import Template
from Png2Svg import Png2Svg
from Svg2Ttf import Svg2Ttf

# define BACKSLASH '\\'

app = Flask(__name__)
api = Api(app)

@api.route('/proc')
class doAPI(Resource):
    def post(self):
        fileName = request.json.get('fileName')
        fontName = request.json.get('fontName')
        reply = proc(fileName, fontName);
        return reply


def proc(fileName=None, fontName=None):
    # Template -> pngs
    t = Template(fileName=fileName,
                 fontName=fontName,
                 configPath ="./config/template.json")
    t.crop()

    # pngs -> svgs
    png2svg = Png2Svg(fontName=fontName, is_in=True)
    png2svg.proc()

    # svgs -> TTF
    svg2ttf = Svg2Ttf(fontName=fontName, is_in=True)
    svg2ttf.proc()

    # TODO - TTF -> APPLY DM-FONT
    ############################################
    ############## APPLY DM FONT ###############
    ############################################

    # pngs -> svgs
    png2svg = Png2Svg(fontName=fontName, is_in=False)
    png2svg.proc()

    # svgs -> TTF
    svg2ttf = Svg2Ttf(fontName=fontName, is_in=False)
    svg2ttf.proc()

    # TODO - Inform DONE
    return "request DONE!"


if __name__ == '__main__':
    app.run(debug=True)
