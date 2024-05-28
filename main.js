
import {reservation_bar} from "./context/reservation_bar.js"
import {navegation_bar} from "./context/navBar.js";
import {footer} from "./context/footer.js";
import { modal } from "./context/modal.js"; 


/* A função navegation_bar gera a barra de navegação em todas as paginas e esta localizada na pasta js */
navegation_bar()

/* A função footer gera o rodapé de todas as paginas e esta localizada na pasta js*/
const footer_pages = new footer();

/* A função reservation_bar gera a barra de reserva em todas as paginas e esta localizada na pasta js*/
const reservation = new reservation_bar();

const reservation_modal = modal()




