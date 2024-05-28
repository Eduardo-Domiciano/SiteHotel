
// ESSA FUNÇÃO ESTA SENDO GERADA NO ACCOMODATION.JS
export function wallpaperSlider (listaImg, containerImg) {
    
    let contador = 0;

    function slider() {
        contador ++;
        if(contador > listaImg.length - 1) {
            contador = 0;
        }
        containerImg.style.transform = `translateX(${- contador * 100}vw)`;
    }

    setInterval(slider, 2000)
}