
import { createElement } from '../../lib/createElement'



const cardContainer = document.querySelector('.card__container')

export function renderCard(question, answer) {

    const cardContent = createElement('article', 'card')
    cardContainer.appendChild(cardContent)

    const questionContainer = createElement('div', 'card__question')
    questionContainer.innerHTML = `<span class="far fa-bookmark card__bookmark"></span>
    <h2 class="card__title fw-b tt-uc">Question:</h2>
    <p class="card__question">${question}</p>`
    cardContent.appendChild(questionContainer)

    const buttonContainer = createElement('div', 'btn__container')
    buttonContainer.innerHTML = `<button class="card__button btn cs-p">Show Answer</button>`
    cardContent.appendChild(buttonContainer)

    const cardAnswer = createElement('div', 'card__answer')
    cardAnswer.innerHTML = `<h2 class="card__title fw-b tt-uc">Answer:</h2>
    <p>${answer}</p>`
    cardContent.appendChild(cardAnswer)

    const cardTags = createElement('ul', 'tag__container')
    cardTags.innerHTML = `<li>Test</li>
    <li>Test</li>
    <li>Test</li>
    <li>Test</li>`
    cardContent.appendChild(cardTags)
}

