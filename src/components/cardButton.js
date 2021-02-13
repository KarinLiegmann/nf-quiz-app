import { createElement } from '../lib/createElement'

export function createCardButton(text) {
    const cardButton = createElement('button', 'card__button', 'btn', 'cs-p')
    cardButton.innerText = text
    return cardButton
}