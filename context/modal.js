
export function modal() {
    const switchModal = () => {
       const modal = document.querySelector('.modal_window')
       const actualStyle = modal.style.display
       if(actualStyle == 'block') {
            modal.style.display = 'none'
       }else {
        modal.style.display = 'block'
       }
    }
    
    const btn = document.getElementById('reservation_button_bar')
    btn.addEventListener('click', switchModal)
    
    window.onclick = function(event) {
        console.log(btn)
        
        const modal = document.querySelector('.modal_window')
        if(event.target == modal) {
            switchModal()
        }
    }
    
}

function reservation_model() {
    const modal_diolog = document.querySelector('.modal_contain');
    const modal_div = document.createElement('div');
    modal_div.className = '2'
    const model = `
            <section class="modal_reservation">
                <section class="modal_reservation_selection">
                    <div class="modal_reservation_selection_title_div">
                        <h1 class="messege_phrase">Reserve agora!</h1>
                    </div>
                    <div class="modal_reservation_selection_cliet_info_div">
                        <div class="modal_reservation_selection_client_info">
                            <h2 class="modal_reservation_selection_client_name">Nome: </h2>
                            <input type="text" name="Name" id="modal_reservation_selection_client_name_input">
                        </div>
                        <div class="modal_reservation_selection_client_info">
                            <h2 class="modal_reservation_selection_client_name">Telefone: </h2>
                            <input type="tel" name="Tel" id="modal_reservation_selection_client_tell_input">
                        </div>
                        <div class="modal_reservation_selection_client_info">
                            <h2 class="modal_reservation_selection_client_name">Email: </h2>
                            <input type="email" name="Email" id="modal_reservation_selection_client_email_input">
                        </div>
                    </div>
                    <div class="modal_reservation_selection_room_select">
                        <button class="reservation_button" type="submit">Express Duplo</button>
                        <button class="reservation_button" type="submit">Express Triplo</button>
                        <button class="reservation_button" type="submit">Luxo Casal</button>
                        <button class="reservation_button" type="submit">Luxo Familia</button>
                        <button class="reservation_button" type="submit">Flat</button>
                        <button class="reservation_button" type="submit">Master</button>
                    </div>
                </section>
                <section class="modal_reservation_room_model">
                    <!-- Aqui aparecerá os modelos de quartos selecionados-->
                    <Section class="modal_reservation_model_room">
                        <div class="modal_reservation_model_title_div">
                            <h1 class="room_div_title">Express Duplo</h1>
                        </div>
                        <div class="modal_reservation_model_img_div">
                            <img class="room_div_img" src="/assets/img/twin-bed.jpg" alt="" >
                            <h2 class="room_div_price">De R$ 200,00 por apenas R$ 180,00</h2>
                        </div>
                        <div class="modal_reservation_model_room_info">
                            <p class="room_div_text_modal">Modelo com 02 camas de solteiro, frigobar, tv e ar condicionado</p>
                        </div>
                        <div class="modal_reservation_model_room_selected">
                            <div class="modal_reservation_model_room_selected_client">
                                <h1 class="room_div_title">Adultos</h1>
                                <input type="number" name="number" id="Modal_number_adult" value="1" min="1" max="2">
                            </div>
                            <div class="modal_reservation_model_room_selected_client">
                                <h1 class="room_div_title">Crianças</h1>
                                <input type="number" name="number" id="Modal_number_child" value="1" min="1" max="2">
                            </div>
                            <button class="reservation_button close_button" type="submit">X</button>
                        </div>
                        
                    </Section>
                </section>
            </section>
    `
    modal_div.innerHTML = model
    modal_diolog.append(modal_div)
}