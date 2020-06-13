from flask import Flask
from dotenv import load_dotenv
import requests, os, time

load_dotenv()

api = Flask(__name__)

PHILLIPS_TOKEN = os.getenv('PHILLIPS_TOKEN')

url_base = 'http://192.168.1.39/api/' + PHILLIPS_TOKEN

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

@api.route('/lights/<id>/state')
def set_light():
    response = requests.put(url_base + '/lights/' + id + '/state')
    return response

@api.route('/rainbow')
def rainbow():
    for i in range(3):
        for color in range(0, 65535, 1000):
            response = requests.put(url_base + '/lights/1/state', json={"hue":color})
    return response.text
