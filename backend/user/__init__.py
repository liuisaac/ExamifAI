from flask import Flask
import pymongo

app = Flask(__name__)
client = pymongo.MongoClient("mongodb+srv://admin:sxdgbnbirzltfSiD@cluster0.ga6jl07.mongodb.net/?retryWrites=true&w=majority")
db = client.Examifai

from user import routes
