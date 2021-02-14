import { renderCard } from './components/Cards/cards'
import { toggleElement } from './components/toggleelements'
import { toggleAnswer } from './components/Cards/toggleanswer'
import { toggleBookmark } from './components/Cards/togglebookmarks'


let cardList = []

fetch('https://muc-2020-w1-student-api.vercel.app/api/journals')
    .then(result => result.json())
    .then(entries => {
        entries.slice().forEach(addEntrytoCardList)
    })
    .catch(error => console.error(error.message))


function addEntrytoCardList(entry) {
    cardList.push(entry)

    renderCard(entry.motto, entry.notes)
    toggleElement('.card__button', toggleAnswer)
    toggleElement('.card__bookmark', toggleBookmark)
}

// todo: tags-array
// rendercard: api vs localStorage
// clickevents auf 2ter karte funktionieren nicht