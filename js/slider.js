/* slider */

class slider{
    constructor(){
        let slides = document.querySelectorAll('.sliderContainer > .slides');
        setInterval(() => this.transition(slides), 5000);
        
    }

    transition(slides){
        for (let i = 0; i < slides.length; i++) {
            if (i == slides.length -1) {
                for (let index = 0; index < slides.length; index++) {
                    slides[index].classList.add("opacity");
                }
                slides[0].classList.remove("opacity");
                break;
            }else{
                if (!   slides[i].classList.contains("opacity")) {
                    for (let index = 0; index < slides.length; index++) {
                        slides[index].classList.add("opacity");
                    }
                    slides[i +1].classList.remove("opacity");
                    break;
                }
            }
        }
    }
}

const Slider = new slider();

/* end slider */