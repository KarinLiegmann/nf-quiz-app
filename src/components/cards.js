// import { createElement } from './createElement'
/* import { toggleAnswer } from './components/toggleanswer'
import { toggleBookmark } from './components/bookmarks'

function toggleElement(selector, toggleFunction) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(toggleFunction)

    toggleElement('.card__button', toggleAnswer)
    toggleElement('.card__bookmark', toggleBookmark)
} */



import { createElement } from './components/createElement'



export function createCards() {

    const cardContainer = document.querySelector('.card__container')


    const cardContent = createElement('article', 'card', cardContainer)
    // const bookmark = createElement('span', 'far fa-bookmark card__bookmark', cardContent)


    const cardQuestion = createElement('div', 'test', cardContent)
    cardQuestion.innerHTML = `<h2 class="card__title fw-b tt-uc">Question:</h2>
    <p class="card__question">test</p>`

    const cardButton = createElement('div', 'btn__container', cardContent)
    cardButton.innerHTML = `<button class="card__button btn cs-p">Show Answer</button>`

    const cardAnswer = createElement('div', 'card__answer', cardContent)
    cardAnswer.innerHTML = `<h2 class="card__title fw-b tt-uc">Answer:</h2>
    <p>test</p>`

    const cardTags = createElement('ul', 'tag__container', cardContent)
    cardTags.innerHTML = `<li>Test</li>
    <li>Test</li>
    <li>Test</li>
    <li>Test</li>`
}





