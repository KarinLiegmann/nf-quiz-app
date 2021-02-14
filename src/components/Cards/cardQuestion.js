import { createElement } from '../../lib/createElement'

export function createCardQuestion(question) {
    const cardQuestion = createElement('div', 'card__question')
    const questionHeadline = createElement('h2', 'card__title', 'fw-b', 'tt-uc')
    questionHeadline.innerText = 'Question:'
    cardQuestion.appendChild(questionHeadline)
    const questionText = createElement('p', 'question')
    questionText.innerText = question
    cardQuestion.appendChild(questionText)
    return cardQuestion
}

