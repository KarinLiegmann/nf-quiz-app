export function toggleAnswer(myButton) {
    myButton.addEventListener('click', () => {
        myButton.classList.toggle('clicked');
        const answer = myButton.parentNode.parentNode.querySelector('.card__answer');
        answer.classList.toggle('hidden');

        toggleButtonText(myButton, answer);
    });
};

function toggleButtonText(myButton, answer) {
    myButton.innerText = answer.classList.contains('hidden') ? "SHOW ANSWER" : "HIDE ANSWER";
}