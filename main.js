const sliderControl = (() => {

    let counter = 0

    //DOM
    const $slider = document.querySelector(".slider")
    const $nextButton = document.querySelector(".next")
    const $previousButton = document.querySelector(".previous")

    //Bind Events
    $nextButton.addEventListener("click", showNextImage)
    $previousButton.addEventListener("click", showPreviousImage)

    //Functions

    function showNextImage() {
        $slider.style.transform += `translatex(-${$slider.offsetWidth}px)`
        counter++
        if (counter === 5) {
            counter = 0
            $slider.style.transform = `translatex(0px)`
        }
    }

    function showPreviousImage() {
        $slider.style.transform += `translatex(${$slider.offsetWidth}px)`
        counter--
        if (counter === -1) {
            counter = 4
            $slider.style.transform = `translatex(-${$slider.offsetWidth * 4}px)`
        }
    }

    //Intervals
    setInterval(showNextImage, 5000)

})()




