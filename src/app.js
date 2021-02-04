import { toggleAnswer } from './toggleanswer'
import { toggleBookmark } from './bookmarks'

toggleElement('.card__button', toggleAnswer)
toggleElement('.card__bookmark', toggleBookmark)

function toggleElement(selector, toggleFunction) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(toggleFunction)
}