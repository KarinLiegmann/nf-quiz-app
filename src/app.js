const buttons = document.querySelectorAll('.card__button')

buttons.forEach((myButton) => {
    myButton.addEventListener('click', () => {
        myButton.classList.toggle('clicked');

        const answer = myButton.parentNode.parentNode.querySelector('.card__answer');
        answer.classList.toggle('hidden');

        myButton.innerText = answer.classList.contains('hidden') ? "SHOW ANSWER" : "HIDE ANSWER";

    }
    )
}
)

const bookmarks = document.querySelectorAll('.card__bookmark');

bookmarks.forEach((myBookmark) => {
    myBookmark.addEventListener('click', () => {
        myBookmark.classList.toggle('fas')
        myBookmark.classList.toggle('far')
    })
})


