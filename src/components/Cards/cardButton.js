import { createElement } from '../../lib/createElement'

export function createCardButton(...text) {
    const buttonContainer = createElement('div', 'btn__container')
    const cardButton = createElement('button', 'card__button', 'btn', 'cs-p')
    cardButton.innerText = text
    buttonContainer.appendChild(cardButton)
    return buttonContainer
}