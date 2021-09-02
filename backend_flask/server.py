from flask import Flask

app = Flask(__name__)

@app.route('/button',methods=['GET'])
def console_log():
    return "Hello from Flask backend!"


app.run(debug=True)