from flask import Flask, request, jsonify
import replicate
import tempfile
import os

app = Flask(__name__)
replicate_client = replicate.Client(api_token="EL_TEU_TOKEN_AQUI")  # Substitueix amb la teva clau

@app.route('/generate-skin', methods=['POST'])
def generate_skin():
    if 'image' not in request.files:
        return jsonify({'error': 'No image uploaded'}), 400

    image_file = request.files['image']

    # Desa temporalment la imatge
    with tempfile.NamedTemporaryFile(delete=False, suffix=".jpg") as tmp:
        image_path = tmp.name
        image_file.save(image_path)

    # Envia a Replicate
    output = replicate_client.run(
        "lllyasviel/sd-controlnet-canny:15a2b2f54a4c9e5184f672fe25810906be3b43266b6abce9e6b2b0ef6f4897b3",
        input={
            "image": open(image_path, "rb"),
            "prompt": "minecraft pixel art character",
            "num_inference_steps": 30,
            "guidance_scale": 7.5
        }
    )

    os.remove(image_path)

    return jsonify({'image_url': output})

if __name__ == '__main__':
    app.run(debug=True)
