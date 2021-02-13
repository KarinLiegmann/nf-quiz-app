export function toggleElement(selector, toggleFunction) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(toggleFunction)
}
