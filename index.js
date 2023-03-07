// Code your solutions in this file


function writeCards(name, value) {

    let cardMessage = []
    for (let i = 0; i < name.length; i++) {
        cardMessage.push(`Thank you, ${name[i]}, for the wonderful ${value} gift!`);

    }

    return cardMessage;
}

writeCards(["Guadalupe", "Ollie", "Aki"], "surprise")

function countDown() {
    let countDown = 11;
    while (countDown--) {
        console.log(countDown);

    }
}