const body = document.querySelector("body")

const buttonSun = document.querySelector(".sun-img")
const buttonMoon = document.querySelector(".moon-img")

const minutesDisplay = document.querySelector(".minutes")
const secondsDisplay = document.querySelector(".seconds")
const timerDisplay = document.querySelector(".timer-display")

const soundCards = document.querySelector(".sound-cards")
const timerControls = document.querySelector(".timer-controls")

const buttonPlay = document.querySelector(".button-play")
const buttonStop = document.querySelector(".button-stop")
const buttonPlus = document.querySelector(".button-plus")
const buttonMinus = document.querySelector(".button-minus")

const buttonForest = document.querySelector(".forest")
const buttonRain = document.querySelector(".rain")
const buttonCoffeHouse = document.querySelector(".coffe-house")
const buttonFireplace = document.querySelector(".fireplace")

const forestAudio = document.querySelector(".forest-audio")
const rainAudio = document.querySelector(".rain-audio")
const coffeHouseAudio = document.querySelector(".coffe-house-audio")
const fireplaceAudio = document.querySelector(".fireplace-audio")

const forestVolume = document.querySelector(".forest-volume")
const rainVolume = document.querySelector(".rain-volume")
const coffeHouseVolume = document.querySelector(".coffe-house-volume")
const fireplaceVolume = document.querySelector(".fireplace-volume")

export {
    soundCards,
    timerControls,
    body,
    minutesDisplay,
    secondsDisplay,
    timerDisplay,
    buttonPlay,
    buttonStop,
    buttonPlus,
    buttonMinus,
    buttonForest,
    buttonRain,
    buttonCoffeHouse,
    buttonFireplace,
    buttonSun,
    buttonMoon,
    forestAudio,
    rainAudio,
    coffeHouseAudio,
    fireplaceAudio,
    forestVolume,
    rainVolume,
    coffeHouseVolume,
    fireplaceVolume
}