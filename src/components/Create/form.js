import { loadFromLocal } from '../../lib/loadFromLocalStorage'

const form = document.querySelector('form')
const formQuestion = document.querySelector('#form__textarea-question')
const formAnswer = document.querySelector('#form__textarea-answer')
const formTags = document.querySelector('#form__textarea-tags')

let newCardContent = loadFromLocal("newCardEntry") || []

formQuestion.value = newCardContent.question
formAnswer.value = newCardContent.answer
formTags.value = newCardContent.tags

form.addEventListener('submit', (event) => {
    event.preventDefault()

    let newQuestion = formQuestion.value
    let newAnswer = formAnswer.value
    let newTags = Array.from(formTags.value)

    let newCardEntry = { question: newQuestion, answer: newAnswer, tags: newTags }

    localStorage.setItem("newCardEntry", JSON.stringify(newCardEntry))
})

