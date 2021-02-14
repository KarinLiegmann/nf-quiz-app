import { createElement } from '../../lib/createElement'

export function createCardAnswer(answer) {
    const cardAnswer = createElement('div', 'card__answer', 'hidden')
    const answerHeadline = createElement('h2', 'card__title', 'fw-b', 'tt-uc')
    answerHeadline.innerText = 'Answer:'
    cardAnswer.appendChild(answerHeadline)
    const answerText = createElement('p', 'answer')
    answerText.innerText = answer
    cardAnswer.appendChild(answerText)
    return cardAnswer
}