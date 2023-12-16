# server.py
from flask import Flask, render_template, url_for, redirect

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/register')
def register():
    return render_template('register.html')

@app.route('/chatbot')
def chatbot():
    return render_template('ChatBot.html')

@app.route('/create_world')
def create_world():
    return render_template('create_world.html')

@app.route('/expand_world')
def expand_world():
    return render_template('create_world.html')

@app.route('/create_character')
def create_character():
    return render_template('create_world.html')

if __name__ == '__main__':
    app.run(debug=True)
