const cardsDate = document.querySelectorAll('.card__date')


export function trimCardDate() {
    cardsDate.forEach(card => {
        const text = card.querySelector('.card__title');
        const newStr = text.innerText;
        text.innerText = newStr.split(' — ')[0]

        return fullCardDate;
    });
}
