let randomNumber1 = Math.round(Math.random() * ( 6 - 1 ) + 1),
    randomNumber2 = Math.round(Math.random() * ( 6 - 1 ) + 1),
    randomDiceImage1 = './images/dice' + randomNumber1 + '.png',
    randomDiceImage2 = './images/dice' + randomNumber2 + '.png',
    image1 = document.querySelector( '.img1' ),
    image2 = document.querySelector( '.img2' ),
    result = document.querySelector( '.result' ),
    player1 = document.querySelector( '.player1' ),
    player2 = document.querySelector( '.player2' );

image1.setAttribute( 'src', randomDiceImage1 );
image2.setAttribute( 'src', randomDiceImage2 );
setInvisible();

if ( randomNumber1 > randomNumber2 ) {
    result.innerHTML = "PLAYER 1 WINS !";
    player1.innerHTML = "🤩";
    player2.innerHTML = "😩";
    setVisible();
} else if ( randomNumber1 < randomNumber2 ) {
    result.innerHTML = "PLAYER 2 WINS !";
    player1.innerHTML = "😡";
    player2.innerHTML = "😎";
    setVisible()
} else {
    result.innerHTML = "Draw!";
    setInvisible();
}

function setVisible() {
    player1.classList.add( 'visible' );
    player2.classList.add( 'visible' );
}

function setInvisible() {
    player1.classList.remove( 'visible' );
    player2.classList.remove( 'visible' );
}