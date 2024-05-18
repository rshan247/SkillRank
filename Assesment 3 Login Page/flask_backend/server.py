from flask import Flask, request
from flask_restful import Api,Resource
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
api = Api(app)

registered_users = {"rshan@gmail.com":{"password": "12345"},
                     "siva@gmail.com": {"password": "123456"}}

@app.route('/login', methods =['POST'])
def login():
    if request.method == 'POST':
        data = request.json
        email = data.get('email')
        password = data.get('password')
        if ((email in registered_users) and (registered_users[email]["password"] == password)):
            return {"message": "Success login"}, 200
        else:
            return {"message": "User not found"}, 401
    print(registered_users[email])


if __name__ == "__main__":
    app.run(debug=True)