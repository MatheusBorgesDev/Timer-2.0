export default function() {
    
    const forestAudio = document.querySelector(".forest-audio")
    const rainAudio = document.querySelector(".rain-audio")
    const coffeHouseAudio = document.querySelector(".coffe-house-audio")
    const fireplaceAudio = document.querySelector(".fireplace-audio")
    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")


    function timeEnd(){
        kitchenTimer.play()
    }

    function forestAudioStart() {
        forestAudio.play()
        rainAudio.pause()
        coffeHouseAudio.pause()
        fireplaceAudio.pause()
    }

    function rainAudioStart() {
        forestAudio.pause()
        rainAudio.play()
        coffeHouseAudio.pause()
        fireplaceAudio.pause()
    }

    function coffeHouseAudioStart() {
        forestAudio.pause()
        rainAudio.pause()
        coffeHouseAudio.play()
        fireplaceAudio.pause()
    }

    function fireplaceAudioStart() {
        forestAudio.pause()
        rainAudio.pause()
        coffeHouseAudio.pause()
        fireplaceAudio.play()
    }

    function muteSound(){
        forestAudio.pause()
        rainAudio.pause()
        coffeHouseAudio.pause()
        fireplaceAudio.pause()
    }

    return {
        timeEnd,
        forestAudioStart,
        rainAudioStart,
        coffeHouseAudioStart,
        fireplaceAudioStart,
        muteSound
    }
}