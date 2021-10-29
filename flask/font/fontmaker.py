from flask import Blueprint, jsonify

# import DMfont
# import png2ttf

fontmaker_api = Blueprint('fontmaker_api', __name__)

@fontmaker_api.route("/font", methods=['POST'])
def generatefont():
    directory = "directory"
    return directory