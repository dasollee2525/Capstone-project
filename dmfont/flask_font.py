from flask import Flask, request
from werkzeug.utils import secure_filename
import subprocess
app = Flask(__name__)


@app.route('/submit', methods=['POST'])
def submit():
    f = request.files['fontfile']
    f.save('./data/fonts_dir/' + secure_filename(f.filename))
    return 'done!'


@app.route('/start')
def dmfonting():
    arg1 = "python -m scripts.prepare_dataset kor data/fonts_dir meta/kor_split.json data/fonts_hdf5"

    p = subprocess.Popen(arg1, stdout=subprocess.PIPE, shell=True)
    p.wait()

    #arg2 = "python evaluator.py withPTH checkpoints/korean-handwriting.pth generated_font_png cfgs/gandan.yaml --mode user-study-save"
    #q = subprocess.Popen(arg2, stdout=subprocess.PIPE, shell=True)
    #q.wait()

    return 'done!'