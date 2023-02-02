import { buttonPlay, buttonStop, buttonPlus, buttonMinus, buttonForest, buttonRain, buttonCoffeHouse, buttonFireplace, buttonSun, buttonMoon, forestAudio, rainAudio, coffeHouseAudio, fireplaceAudio, forestVolume, rainVolume, coffeHouseVolume, fireplaceVolume } from "./elements.js"

export default function Events ({
    timer,
    placeCardsButtons,
    sounds,
    darkMode
}){
    buttonPlay.addEventListener("click", function () {
        timer.countdown()
    })
    
    buttonStop.addEventListener("click", function() {
        timer.resetDisplay()
    })
    
    buttonPlus.addEventListener("click", function() {
        timer.timeIncrement()
    })
    
    buttonMinus.addEventListener("click", function() {
        timer.timeDecrement()
    })
    
    buttonForest.addEventListener("click", function() {
        placeCardsButtons.forestButtonFocus()
        sounds.forestAudioStart()
    })
    
    buttonRain.addEventListener("click", function() {
        placeCardsButtons.rainButtonFocus()
        sounds.rainAudioStart()
    })
    
    buttonCoffeHouse.addEventListener("click", function() {
        placeCardsButtons.coffeHouseButtonFocus()
        sounds.coffeHouseAudioStart()
    })
    
    buttonFireplace.addEventListener("click", function() {
        placeCardsButtons.firePlaceButtonFocus()
        sounds.fireplaceAudioStart()
    })  
    
    buttonSun.addEventListener("click", function() {
        darkMode.turnOn()
    })
    
    buttonMoon.addEventListener("click", function() {
        darkMode.turnOff()
    })

    forestVolume.addEventListener("input", function(){
        forestAudio.volume = this.value;
    })

    rainVolume.addEventListener("input", function(){
        rainAudio.volume = this.value;
    })

    coffeHouseVolume.addEventListener("input", function(){
        coffeHouseAudio.volume = this.value;
    })

    fireplaceVolume.addEventListener("input", function(){
        fireplaceAudio.volume = this.value;
    })
}