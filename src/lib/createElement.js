export function createElement(elementType, ...classNames) {
    const element = document.createElement(elementType)
    element.classList.add(...classNames)
    return element
}