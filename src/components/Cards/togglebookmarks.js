export function toggleBookmark(myBookmark) {
    myBookmark.addEventListener('click', () => {
        myBookmark.classList.toggle('fas')
        myBookmark.classList.toggle('far')
    }
    )
}
