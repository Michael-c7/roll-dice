let diceRollBtn = document.querySelector(".dice-roll-btn");
let diceImage = document.querySelector('.dice-image');
let numberHeading = document.querySelector(".number-heading");
let diceRollSound;



function randomNumberGenerator() {
    /*generates a random number between 1 & 6*/
    return Math.floor(Math.random() * 6 + 1);
}



function showDice() {
    diceRollBtn.addEventListener("click", function() {
        let randomNumber = randomNumberGenerator();
        diceImage.src = `images/dice${randomNumber}.png`;

        // update number count
        numberHeading.innerHTML = `You got ${randomNumber}`;

        // play dice roll sound
        diceRollSound = new sound("./sound-effects/roll-dice-sound.mp3");
        diceRollSound.play();

        // play animation
        diceImage.style.transform = `rotate(360deg)`;
        setTimeout(function() {
            diceImage.style.removeProperty("transform");
        }, 50);
    })
}


showDice();



function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";

    document.body.appendChild(this.sound);
    this.play = function() {
        this.sound.play();
    }

    this.stop = function() {
        this.sound.pause();
    }
}
