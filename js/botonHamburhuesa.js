class hamburgerButton{
    constructor(){
        const HB = document.getElementsByClassName('HB');
        const UL = document.querySelector('nav > ul');
        HB[0].addEventListener("click", () => this.animation(HB, UL));
    }

    animation(HB, UL){
        if(HB[0].classList.contains('AHB')){
            HB[0].classList.remove('AHB');
            UL.style.left = "-700px";
        }else{
            HB[0].classList.add('AHB');
            UL.style.left = 0;
        }
    }
}

const Hamburguer = new hamburgerButton();