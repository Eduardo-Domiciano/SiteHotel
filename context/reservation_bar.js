import {button} from "../js/tag_creator.js"


export function reservation_bar() {
    const reservation = document.querySelector('.reservation')
    const nav_tag = document.createElement("nav")
    nav_tag.className = "reservation_bar"
    const model = `
    <div class="reservation_div">
        <h1 class="reservation_link">Check-in</h1>
        <input type="date" class="reservation_calendar" id="Check-in">
    </div>
    <div class="reservation_div">
        <h1 class="reservation_link">Check-out</h1>
        <input type="date" class="reservation_calendar" id="Check-in">
    </div>
    <div class="reservation_div">
        <h1 class="reservation_link">Adultos</h1>
        <input type="number" class="reservation_calendar" id="Check-in" value="1" min="1" max="2">
    </div>
    <div class="reservation_div">
        <h1 class="reservation_link">Crianças</h1>
        <input type="number" class="reservation_calendar" id="Check-in" value="0" min="0" max="2">
    </div>
    `
    nav_tag.innerHTML = model
    reservation.append(nav_tag)

    button('reservation_bar', 'reservation_button', 'Reservar', 'reservation_button_bar', 'submit');  
}