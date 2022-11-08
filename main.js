const sliderControl = (() => {

    let counter = 0

    //DOM
    const $slider = document.querySelector(".slider")
    const $nextButton = document.querySelector(".next")
    const $previousButton = document.querySelector(".previous")
    const $radio = document.querySelectorAll(`[type="radio"]`)

    //Bind Events
    $nextButton.addEventListener("click", showNextImage)
    $previousButton.addEventListener("click", showPreviousImage)
    $radio.forEach((radio) => radio.addEventListener("click", selectImage))

    //Functions

    function showNextImage() {
        $radio.forEach((radio) => radio.checked = false)
        $slider.style.transform += `translatex(-${$slider.offsetWidth}px)`
        counter++
        if (counter === 5) {
            counter = 0
            $slider.style.transform = `translatex(0px)`
        }
        $radio[counter].checked = true
        restartInterval()
    }

    function showPreviousImage() {
        $radio.forEach((radio) => radio.checked = false)
        $slider.style.transform += `translatex(${$slider.offsetWidth}px)`
        counter--
        if (counter === -1) {
            counter = 4
            $slider.style.transform = `translatex(-${$slider.offsetWidth * 4}px)`
        }
        $radio[counter].checked = true
        restartInterval()
    }

    function selectImage(e) {
        counter = e.target.id 
        $slider.style.transform = `translatex(-${$slider.offsetWidth * e.target.id}px)`
        restartInterval()
    }

    function restartInterval () {
        clearInterval(imgInterval)
        imgInterval = setInterval(showNextImage, 5000)
    }

    //Intervals
    let imgInterval = setInterval(showNextImage, 5000)

})()




