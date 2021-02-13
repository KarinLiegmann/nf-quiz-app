

import { renderCard } from './components/Cards/cards'
import { toggleElement } from './toggleelements'
import { toggleAnswer } from './components/Cards/toggleanswer'
import { toggleBookmark } from './components/Cards/togglebookmarks'


renderCard('test', 'test')
toggleElement('.card__button', toggleAnswer)
toggleElement('.card__bookmark', toggleBookmark)