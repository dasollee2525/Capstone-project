from flask import Blueprint, jsonify

AS_api = Blueprint('AS_api', __name__)

@AS_api.route("/revise", methods=['POST'])
def ensemble():

    return "directory" 