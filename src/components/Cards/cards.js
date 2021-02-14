import { createElement } from '../../lib/createElement'
import { createCardButton } from './cardButton'
import { createCardAnswer } from './cardAnswer'
import { createCardQuestion } from './cardQuestion'
import { createCardBookmark } from './cardBookmark'
import { createCardTags } from './cardTags'
import { loadFromLocal } from '../../lib/loadFromLocalStorage'


let localStorageEntry = loadFromLocal("newCardEntry") || []
let questionFromLocal = localStorageEntry.question
let answerFromLocal = localStorageEntry.answer


const cardContainer = document.querySelector('.card__container')

export function renderCard(question, answer) {

    const cardContent = createElement('article', 'card')
    cardContainer.appendChild(cardContent)

    const cardBookmark = createCardBookmark()
    cardContent.appendChild(cardBookmark)

    const cardQuestion = createCardQuestion(questionFromLocal)
    cardContent.appendChild(cardQuestion)

    const cardButton = createCardButton('show answer')
    cardContent.appendChild(cardButton)

    const cardAnswer = createCardAnswer(answerFromLocal)
    cardContent.appendChild(cardAnswer)

    const cardTags = createCardTags()
    cardContent.appendChild(cardTags)
}