// ---------- CONSTANTS ----------
const partnersSliderControllers = [...document.querySelectorAll(".partners-sponsors__contents__interactive-block__slider__controller")];
const partners = [...document.querySelectorAll(".partners-sponsors__contents__interactive-block__partners-list__partner")];

// ---------- FUNCTIONS ----------
const slide = e => {
    let partnerIndex = 0;
    if (e.target.classList.contains("partners-sponsors__contents__interactive-block__slider__controller--active")) {}
    else {
        for (let sliderController of partnersSliderControllers) {
            if (sliderController.classList.contains("partners-sponsors__contents__interactive-block__slider__controller--active")) {
                sliderController.classList.remove("partners-sponsors__contents__interactive-block__slider__controller--active");
            }
        }
        e.target.classList.add("partners-sponsors__contents__interactive-block__slider__controller--active");
        for (let sliderController of partnersSliderControllers) {
            if (sliderController.classList.contains("partners-sponsors__contents__interactive-block__slider__controller--active")) {
                partnerIndex = partnersSliderControllers.indexOf(sliderController);
                break;
            }
        }
        for (let partner of partners) {
            if (!partner.classList.contains("partners-sponsors__contents__interactive-block__partners-list__partner--hidden")) {
                partner.classList.add("partners-sponsors__contents__interactive-block__partners-list__partner--hidden");
                break;
            }
        }
        partners[partnerIndex].classList.remove("partners-sponsors__contents__interactive-block__partners-list__partner--hidden");
    }
};

// ---------- EVENT LISTENERS ----------
for (let sliderController of partnersSliderControllers) {
    sliderController.addEventListener("click", slide);
}
