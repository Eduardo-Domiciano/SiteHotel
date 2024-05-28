import { section, div, h1, input, button, lista, img } from "../js/tag_creator.js";

// função que ativa e desativa o modal a partir do botao
export function modal() {
    const switchModal = () => {
        const modalClass = document.querySelector('.modal_window');
        var actualStyle = modalClass.style.display;
        if(actualStyle == 'block') {
            modalClass.style.display = 'none'
        }else {
            modalClass.style.display = 'block'
        }
    }
    const btn = document.getElementsByClassName(`reservation_button`);
    for(let x=0;x<btn.length;x++) {
        const btn = document.getElementById(`reservation_button`);
        btn[x].addEventListener('click', switchModal)
        
        window.onclick = function(event) {
            const modalClass = document.querySelector('.modal_window');
            if(event.target == modalClass) {
                switchModal()
            }
        }
    }
    //talvez seja nescessario usar a criação do modal dentro dessa função verificar >>>>  #???#  <<<<<<<
}
modalContent()


function modalContent() {

    section('modal_contain', 'modal_content_section', 'modal_content_section')
        div('modal_content_section', 'modal_content_div_client_data')
            div('modal_content_div_client_data', 'modal_content_div_client_title')
            // Titulo do Modal
                h1('modal_content_div_client_title', 'modal_content_h1_title', 'Finalizar reserva')

            // Input Nome, Tell e Email
            div('modal_content_div_client_data', 'modal_content_div_client_entry')
                div('modal_content_div_client_entry', 'modal_content_div_client_entry_div1')
                    h1('modal_content_div_client_entry_div1', 'modal_content_h1_title', 'Nome:')
                    input('modal_content_div_client_entry_div1', 'modal_content_div_input_nome', 'modal_content_div_input_title', 'text', '', 'Nome completo', '')

                div('modal_content_div_client_entry', 'modal_content_div_client_entry_div2')
                    h1('modal_content_div_client_entry_div2', 'modal_content_h1_title', 'Telefone:')
                    input('modal_content_div_client_entry_div2', 'modal_content_div_input_tell', 'modal_content_div_input_title', 'tel', '', 'Telefone', '')
                    
                div('modal_content_div_client_entry', 'modal_content_div_client_entry_div3')
                    h1('modal_content_div_client_entry_div3', 'modal_content_h1_title', 'Email:')
                    input('modal_content_div_client_entry_div3', 'modal_content_div_input_email', 'modal_content_div_input_title', 'email', '', 'Nome completo', '')

            // Div de Botões de apartamentos
            div('modal_content_div_client_data', 'modal_content_div_models_rooms')
                h1('modal_content_div_models_rooms', 'modal_content_div_models_rooms_title', 'Adicionar Quartos: ')
                button('modal_content_div_models_rooms', 'modal_content_div_models_rooms_button', 'Express Duplo', 'submit')
                button('modal_content_div_models_rooms', 'modal_content_div_models_rooms_button', 'Express Casal', 'submit')
                button('modal_content_div_models_rooms', 'modal_content_div_models_rooms_button', 'Luxo Casal', 'submit')
                button('modal_content_div_models_rooms', 'modal_content_div_models_rooms_button', 'Luxo Família', 'submit')
                button('modal_content_div_models_rooms', 'modal_content_div_models_rooms_button', 'Flat', 'submit')
                button('modal_content_div_models_rooms', 'modal_content_div_models_rooms_button', 'Master', 'submit')

            //Div de Politica de hospedagem
            div('modal_content_div_client_data', 'modal_content_div_rules')
                const rules01 = '#01. Qualquer reserva feita pelo site, somente terá validade mediante a apresentação da confirmação de reserva que será enviada por email.'
                const rule02 = '#02. Só é possivel realizar a seleção de até 03 quartos por reserva. Cada quarto dispõe de uma quantidade especifica de adultos e crianças, não sendo possivel exceder o limites independente da idade.'
                const rules03 = '#03. Crianças de até 06 anos são isentas de pagamento da hospedagem'
                const rules04 = '#04. Reservas sem a garantia de No-show, serão canceladas automaticamente as 18h00 na data do Check-in.'
                const rules05 = '#05. Reservas poderão ser canceladas em até 24hrs antes da data do check-in, caso passar da hora e data limite, será cobrado 50% do valor total da reserva.'
                const rules06 = '#06. É obrigatório ter em mãos no ato do check-in, o documento com foto para adultos e/ou sertidão de nascimento no caso de crianças e adolecentes, sendo esses, aptos a se hospedarem apenas acompanhados de seus pais, avós ou um responsavel com um documento reconhecido em cartório.'
                
                h1('modal_content_div_rules', 'modal_content_div_rules_list_title', 'Politicas de reservas e cancelamentos do hotel:')
                lista('modal_content_div_rules', 'modal_content_div_rules_list', rules01, rule02, rules03, rules04, rules05, rules06)

            // Div de modelos de apartamentos selecionados
            div('modal_content_div_client_data', 'modal_content_div_modal_room_list')
                div('modal_content_div_modal_room_list', 'modal_content_div_modal_room_list_itens_model')
                    h1('modal_content_div_modal_room_list_itens_model', 'modal_content_div_modal_room_list_itens_title', `Express Duplo`)
                    div('modal_content_div_modal_room_list_itens_model', 'modal_content_div_modal_room_list_itens')
                        div('modal_content_div_modal_room_list_itens', 'modal_content_div_modal_room_list_itens_div_img')
                            img('modal_content_div_modal_room_list_itens_div_img', 'modal_content_div_modal_room_list_itens_img', '/img/twin-bed.jpg')
                        div('modal_content_div_modal_room_list_itens', 'modal_content_div_modal_room_list_itens_div_info')
                            div('modal_content_div_modal_room_list_itens_div_info', 'modal_content_div_modal_room_list_itens_checkin')
                                h1('modal_content_div_modal_room_list_itens_checkin', 'modal_content_div_modal_room_list_itens_title', 'Check-in: ')
                                input('modal_content_div_modal_room_list_itens_checkin', 'modal_content_div_modal_room_list_itens_div_date', 'modal_content_div_modal_room_list_itens_div_date', 'date', '', '', '')
                            div('modal_content_div_modal_room_list_itens_div_info', 'modal_content_div_modal_room_list_itens_checkout')
                                h1('modal_content_div_modal_room_list_itens_checkout', 'modal_content_div_modal_room_list_itens_title', 'Check-out: ')
                                input('modal_content_div_modal_room_list_itens_checkout', 'modal_content_div_modal_room_list_itens_div_date', 'modal_content_div_modal_room_list_itens_div_date', 'date', '', '', '')
                            

}
