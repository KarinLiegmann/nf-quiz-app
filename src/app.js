import { createElement } from './lib/createElement'
import { createCardButton } from './components/cardButton'
import { createCardQuestion } from './components/cardQuestion'


createCards()

function createCards() {

    const cardContainer = document.querySelector('.card__container')
    const cardContent = createElement('article', 'card')
    cardContainer.appendChild(cardContent)



    const questionContainer = createElement('div', 'test')
    const questionHeadline = createElement('h2', 'card__title', 'fw-b', 'tt-uc')
    questionHeadline.innerText = 'Question:'
    questionContainer.appendChild(questionHeadline)

    const cardQuestion = createCardQuestion('test')
    questionContainer.appendChild(cardQuestion)

    cardContent.appendChild(questionContainer)

    // const bookmark = createElement('span', 'far fa-bookmark card__bookmark', cardContent)





    const buttonContainer = createElement('div', 'btn__container')
    questionContainer.appendChild(buttonContainer)
    const cardButton = createCardButton('Show Answer')
    buttonContainer.appendChild(cardButton)

    const cardAnswer = createElement('div', 'card__answer')
    cardAnswer.innerHTML = `<h2 class="card__title fw-b tt-uc">Answer:</h2>
    <p>test</p>`
    cardContent.appendChild(cardAnswer)

    const cardTags = createElement('ul', 'tag__container')
    cardTags.innerHTML = `<li>Test</li>
    <li>Test</li>
    <li>Test</li>
    <li>Test</li>`
    cardContent.appendChild(cardTags)
}