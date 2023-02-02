import Sounds from "./sounds.js"
const sound = Sounds()

export default function Timer({
    minutesDisplay,
    secondsDisplay
} ) {

    let initialMinutes = minutesDisplay.textContent
    let timerTimeOut
    
    function countdown(){
        let minutes = Number(minutesDisplay.textContent)
        let seconds = Number(secondsDisplay.textContent)
    
        timerTimeOut = setTimeout(function (){
            if (seconds <= 0) {
            
                secondsDisplay.textContent = "59"
                minutesDisplay.textContent = String(minutes - 1).padStart(2,"0")
            
            } else {
                secondsDisplay.textContent = String(seconds - 1).padStart(2,"0")
            }
    
            if (minutes == 0 && seconds <= 0){
                resetDisplay()
                sound.timeEnd()
            return
            }
    
            countdown()
    
        }, 1000)
    
    }
    
    function resetDisplay() {
        minutesDisplay.textContent = initialMinutes
        secondsDisplay.textContent = "00"
        clearTimeout(timerTimeOut)
    }
    
    function timeIncrement() {
        minutesDisplay.textContent = String(Number(initialMinutes) + 5).padStart(2,"0")
        initialMinutes = minutesDisplay.textContent
    }
    
    function timeDecrement() {
        if (initialMinutes != 0) {
            minutesDisplay.textContent = String(Number(initialMinutes) - 5).padStart(2,"0")
            initialMinutes = minutesDisplay.textContent}
    }

    return {
        countdown,
        resetDisplay,
        timeIncrement,
        timeDecrement
    }
}
