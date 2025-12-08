from flask import Flask, request, jsonify
import openai
import os

app = Flask(__name__)

# Устанавливаем ключ API OpenAI (замените на ваш ключ)
openai.api_key = "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"

@app.route("/", methods=["POST"])
def analyze_image():
    try:
        data = request.get_json()

        image_url = data.get("image_url")
        question = data.get("question")

        # Запрос к OpenAI API для анализа изображения и получения ответа
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",  # или используйте другой доступный модель
            messages=[
                {"role": "user", "content": question},
                {"role": "user", "content": f"![image]({image_url})"}
            ]
        )

        answer = response.choices[0].message['content']

        return jsonify({
            "answer": answer,
            "image_url": image_url
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 400

if __name__ == "__main__":
    app.run(debug=True)
