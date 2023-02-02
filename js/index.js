import Sounds from "./sounds.js"
import Timer from "./timer.js"
import PlaceCardsButtons from "./place_cards-buttons.js"
import DarkMode from "./dark-mode.js"
import Events from "./events.js"
import {
    soundCards,
    timerControls,
    body,
    minutesDisplay,
    secondsDisplay,
    timerDisplay,
    buttonForest,
    buttonRain,
    buttonCoffeHouse,
    buttonFireplace,
    buttonSun,
    buttonMoon,
} from "./elements.js"

const sounds = Sounds()
const timer = Timer({minutesDisplay, secondsDisplay})
const placeCardsButtons = PlaceCardsButtons({buttonForest, buttonRain, buttonCoffeHouse, buttonFireplace})
const darkMode = DarkMode({body, buttonSun, buttonMoon, timerDisplay, timerControls, soundCards})

Events({timer, placeCardsButtons, sounds, darkMode})
