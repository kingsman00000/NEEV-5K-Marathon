from flask import Flask, request, jsonify, send_from_directory
import sqlite3
from werkzeug.utils import secure_filename
import os

app = Flask(__name__)


# Configure upload folder
UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER

def init_db():
    conn = sqlite3.connect("users.db")
    cursor = conn.cursor()
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            gender TEXT NOT NULL,
            phone TEXT UNIQUE NOT NULL,
            city TEXT NOT NULL,
            state TEXT NOT NULL,
            country TEXT NOT NULL,
            mode TEXT NOT NULL,
            termsAccepted BOOLEAN NOT NULL
        )
    """)
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS biblist (
            bib_no INTEGER,
            name TEXT
        )
    """)
    conn.commit()
    conn.close()

@app.route("/users", methods=["GET"])
def get_users():
    conn = sqlite3.connect("users.db")
    cursor = conn.cursor()
    cursor.execute("SELECT id, name, email, gender, phone, city, state, country, mode, termsAccepted FROM users")
    users = [dict(zip(["id", "name", "email", "gender", "phone", "city", "state", "country", "mode", "termsAccepted"], row)) for row in cursor.fetchall()]
    conn.close()
    return jsonify(users)

@app.route("/register", methods=["POST"])
def register():
    required_fields = ["name", "email", "gender", "phone", "city", "state", "country", "mode", "termsAccepted"]
    data = request.get_json()
    
    if not all(field in data for field in required_fields):
        print("Missing fields")
        return jsonify({"error": "Missing required fields"}), 400
    
    try:
        conn = sqlite3.connect("users.db")
        cursor = conn.cursor()
        rows = cursor.execute("INSERT INTO users (name, email, gender, phone, city, state, country, mode, termsAccepted) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
                        (data["name"], data["email"], data["gender"], data["phone"], data["city"], data["state"], data["country"], data["mode"], data["termsAccepted"]))
        conn.commit()
        conn.close()
        return jsonify({"message": "User registered successfully"}), 201
    except sqlite3.IntegrityError:
        print("Sqlite integrity")
        return jsonify({"error": "Email or phone already exists"}), 400
    

# Route to handle image upload
@app.route("/upload", methods=["POST"])
def upload_image():
    if "image" not in request.files:
        return jsonify({"error": "No image provided"}), 400
    
    file = request.files["image"]
    if file.filename == "":
        return jsonify({"error": "No selected file"}), 400
    
    filename = secure_filename(file.filename)
    file.save(os.path.join(app.config["UPLOAD_FOLDER"], filename))
    return jsonify({"message": "Image uploaded successfully", "filename": filename}), 201


# Route to serve images
@app.route("/images/<filename>", methods=["GET"])
def get_image(filename):
    return send_from_directory(app.config["UPLOAD_FOLDER"], filename)

def get_next_bib_number():
    """Fetches the next bib number by checking the max value in the table."""
    conn = sqlite3.connect("users.db")
    cursor = conn.cursor()
    cursor.execute("SELECT COALESCE(MAX(bib_no), 999) + 1 FROM biblist;")
    next_bib = cursor.fetchone()[0]
    conn.close()
    return next_bib
    
@app.route('/generatebib', methods=['GET'])
def generate_bib():
    full_name = request.args.get('full_name')
    
    if not full_name:
        return jsonify({"error": "full_name parameter is required"}), 400

    try:
        bib_number = get_next_bib_number()
        
        # Insert into database
        conn = sqlite3.connect('users.db')
        cursor = conn.cursor()
        cursor.execute(f"INSERT INTO biblist (bib_no, name) VALUES ({bib_number}, '{full_name}')")
        conn.commit()
        conn.close()
        
        return jsonify({"full_name": full_name, "bib_number": bib_number})

    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    init_db()
    app.run(debug=True)
