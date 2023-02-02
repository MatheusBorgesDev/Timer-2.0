export default function PlaceCardsButtons(
    {
    buttonForest,
    buttonRain,
    buttonCoffeHouse,
    buttonFireplace
} ) {
    
    function forestButtonFocus(){
        buttonForest.classList.add("focus-on")
        buttonRain.classList.remove("focus-on")
        buttonCoffeHouse.classList.remove("focus-on")
        buttonFireplace.classList.remove("focus-on")
    }
    
    function rainButtonFocus(){
        buttonForest.classList.remove("focus-on")
        buttonRain.classList.add("focus-on")
        buttonCoffeHouse.classList.remove("focus-on")
        buttonFireplace.classList.remove("focus-on")
    }
    
    function coffeHouseButtonFocus(){
        buttonForest.classList.remove("focus-on")
        buttonRain.classList.remove("focus-on")
        buttonCoffeHouse.classList.add("focus-on")
        buttonFireplace.classList.remove("focus-on")
    }
    
    function firePlaceButtonFocus(){
        buttonForest.classList.remove("focus-on")
        buttonRain.classList.remove("focus-on")
        buttonCoffeHouse.classList.remove("focus-on")
        buttonFireplace.classList.add("focus-on")
    }

    return {
        forestButtonFocus,
        rainButtonFocus,
        coffeHouseButtonFocus,
        firePlaceButtonFocus
    }
}
