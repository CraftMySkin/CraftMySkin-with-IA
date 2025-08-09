from flask import Flask, request, jsonify
from flask_cors import CORS
import replicate
import tempfile
import os

app = Flask(__name__)
CORS(app)  # permetre crides des de la teva web

replicate_client = replicate.Client(api_token=os.getenv("REPLICATE_API_TOKEN"))

@app.route('/generate-skin', methods=['POST'])
def generate_skin():
    if 'image' not in request.files:
        return jsonify({'error': 'No image uploaded'}), 400

    image_file = request.files['image']

    with tempfile.NamedTemporaryFile(delete=False, suffix=".jpg") as tmp:
        image_path = tmp.name
        image_file.save(image_path)

    try:
        output = replicate_client.run(
            "lllyasviel/sd-controlnet-canny:15a2b2f54a4c9e5184f672fe25810906be3b43266b6abce9e6b2b0ef6f4897b3",
            input={
                "image": open(image_path, "rb"),
                "prompt": "minecraft pixel art character front view",
                "num_inference_steps": 30,
                "guidance_scale": 7.5
            }
        )
        return jsonify({'image_url': output})
    finally:
        if os.path.exists(image_path):
            os.remove(image_path)

# Per a desenvolupament local; a Render usarem gunicorn
if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000, debug=True)
