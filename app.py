from flask import Flask, send_from_directory

app = Flask(__name__, static_folder='.')


@app.route('/<path:path>')
def serve_static_files(path):
    return send_from_directory(app.static_folder, path)

@app.route('/app-demo')
def serve_index():
    return send_from_directory(app.static_folder, 'app-demo.html')

# home page /
@app.route('/')
def serve_home():
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run(host="0.0.0.0")
    