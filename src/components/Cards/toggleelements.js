import { toggleAnswer } from './toggleanswer'
import { toggleBookmark } from './togglebookmarks'

export function toggleElement(selector, toggleFunction) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(toggleFunction)
}
