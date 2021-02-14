import { createElement } from '../../lib/createElement'
import { loadFromLocal } from '../../lib/loadFromLocalStorage'

let newCardContent = loadFromLocal("newCardEntry") || []

export function createCardTags() {
    const tagContainer = createElement('ul', 'tag__container')

    let testArray = newCardContent.tags

    testArray.forEach(tag => {
        const cardTag = createElement('li', 'tag')
        cardTag.innerText = tag
        tagContainer.appendChild(cardTag)
        return cardTag
    })
    return tagContainer
}



