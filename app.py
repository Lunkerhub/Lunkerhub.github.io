from flask import Flask, render_template, request, jsonify
import openai
import requests

app = Flask(__name__)

# Инициализация OpenAI API
openai.api_key = "<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>"

@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        image_url = request.form.get("image_url")
        question = request.form.get("question")

        # Формирование запроса к OpenAI API
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",  # или другой доступный модель
            messages=[
                {"role": "user", "content": question},
                {"role": "user", "content": f"![image]({image_url})"}
            ],
            extra_headers={
                "X-Title": "Your Site Name",
                "HTTP-Referer": "http://your-site.com"
            }
        )

        answer = response.choices[0].message['content']
        return render_template("index.html", answer=answer, image_url=image_url)

    return render_template("index.html", answer=None)

if __name__ == "__main__":
    app.run(debug=True)
