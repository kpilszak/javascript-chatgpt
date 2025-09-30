const API_KEY=''
const submitButton = document.querySelector('#submit')
const outputElement = document.querySelector('#output')
const inPutElement = document.querySelector('#input')
const historyElement = document.querySelector('.history')

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
        outputElement.textContent = data.choices[0].message.content
        if (data.choices[0].message.content) {
            const pElement = document.createElement('p')
            pElement.textContent = inPutElement.value 
            historyElement.append(pElement)
        }
    } catch (error) {
        console.error(error)
    }
}

submitButton.addEventListener('click', getMessage)