from flask import Flask
from dotenv import load_dotenv
import requests, os

load_dotenv()

api = Flask(__name__)

PILLIPS_TOKEN = os.getenv('PHILLIPS_TOKEN')

url_base = 'api/' + PHILLIPS_TOKEN

@api.route("/")
def hello_world():
    return "Hello, World!"

@api.route("/groups")
def groups():
    response = requests.get(url_base + '/groups')
    return response

@api.route("/scenes")
def scenes():
    response = requests.get(url_base + '/scenes')
    return response

@api.route('/lights')
def lights():
    response = requests.get(url_base + '/lights')
    return response
