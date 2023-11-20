from flask import Flask, render_template, session, redirect
from functools import wraps
from user.models import User
from user import db
from flask_cors import CORS, cross_origin
import pymongo

app = Flask(__name__)
CORS(app)
app.secret_key = 'we_are_going_to_fail_this_hackathon_lmao_Examifai'

# Database sxdgbnbirzltfSiD
# client = pymongo.MongoClient('localhost', 27017)
# try:
#     client = pymongo.MongoClient("mongodb+srv://admin:sxdgbnbirzltfSiD@cluster0.ga6jl07.mongodb.net/?retryWrites=true&w=majority")
# except pymongo.errors.ConfigurationError:
#   print("An Invalid URI host error was received. Is your Atlas host name correct in your connection string?")
#   sys.exit(1)
# db = client.Examifai

# Decorators
def login_required(f):
    @wraps(f)
    def wrap(*args, **kwargs):
        if 'logged_in' in session:
            return f(*args, **kwargs)
        else:
            return redirect('/')
    
    return wrap

# Routes
from user import routes

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/dashboard/')
@cross_origin()
@login_required
def dashboard():
    return render_template('dashboard.html')

@app.route('/user/signup/', methods=['POST'])
@cross_origin()
def signup():
    return User().signup()

@app.route('/user/signout/')
@cross_origin()
def signout():
    return User().signout()

@app.route('/user/login/', methods=['POST'])
def login():
    return User().login()

app.run(debug=True)
