const API_KEY=''
const submitButton = document.querySelector('#submit')
const outPutElement = document.querySelector('#output')

async function getMessage() {
    const options = {
        method: 'POST',
        headers: {
            'Auhtorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: "gpt-5",
            messages: [{role: "user", content: "Hello!"}],
            max_tokens: 100
        })
    }

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', options)
        const data = await response.json()
        console.log(data)
        outPutElement.textContent = data.choices[0].message.content
    } catch (error) {
        console.error(error)
    }
}

submitButton.addEventListener('click', getMessage)