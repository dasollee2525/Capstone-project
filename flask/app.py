from flask import Flask, jsonify, request, make_response # 서버 구현을 위한 Flask 객체 import
from flask_restx import Resource, Api, reqparse # Api 구현을 위한 Api 객체 import
from joblib import load

from font import fontmaker
from revise import afterservice

app = Flask(__name__) # Flask 객체 선언, 파라미터로 어플리케이션 패키지의 이름을 넣어줌.
api = Api(app) # Flask 객체에 Api 객체 등록
app.config['DEBUG'] = True

app.register_blueprint(afterservice.AS_api)
app.register_blueprint(fontmaker.fontmaker_api)

@api.route('/test') #API 작성, 데코레이터 이용, '/test' 경로에 클래스 등록
class mainAPI(Resource):
    def get(self): 
        return make_response(jsonify(success=True), 200)
        # 통신이 성공적이라는 메시지

    def post(self): 
        return {"address": "directory"}

    
if __name__ == '__main__':
    app.run(debug=True)
