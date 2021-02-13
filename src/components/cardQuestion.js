import { createElement } from "../lib/createElement"


const questionContainer = createElement('div', 'test')
const questionHeadline = createElement('h2', 'card__title', 'fw-b', 'tt-uc')
questionHeadline.innerText = 'Question:'
questionContainer.appendChild(questionHeadline)
const cardQuestion = createElement('p', 'card__question')
questionHeadline.appendChild(cardQuestion)


export function renderCardQuestion() {
    let card = [questionContainer, questionHeadline, cardQuestion]
    console.log(card)
}


export function createCardQuestion(question) {
    cardQuestion.innerText = question
    return cardQuestion
}
