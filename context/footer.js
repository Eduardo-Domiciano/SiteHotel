

export function footer() {
    const footer = document.querySelector('.footer')
    let footer_Pages = `
            <div class="div_footer">
                <h1 class="footer_link_title">Links:</h1>
                <a class="footer_link" href="/index.html">Home</a>
                <a class="footer_link" href="/about.html">Sobre nós</a>
                <a class="footer_link" href="/accomodation.html">Acomodações</a>
                <a class="footer_link" href="/career.html">Trabalhe Conosco</a>
            </div>
            <div class="copyright_info">
                <p class="contact_title">Garbage's Hotel</p>
                <div class="social_media">
                    <a href="https://www.linkedin.com/in/eduardo-domiciano/"><img class="social_media_icon" src="/assets/img/linkedin-icon.svg" alt="Linkedin"></a>
                    <a href="https://github.com/DuDSTOPIA"><img class="social_media_icon" src="/assets/img/github-icon.svg" alt="GitHub"></a>
                </div>
                <p class="copy_link">Nenhum direito reservado - 2023</p>
                <p class="copy_link">Desenvolvido por Eduardo Domiciano</p>
            </div>
            <div class="div_footer">
                <h1 class="contact_title">Contato</h1>
                <h3 class="contact_info">(00) 1234-5678</h3>
                <h3 class="contact_info">(00) 9876-5432</h3>
                <h3 class="contact_info">comercial@garbageshotel.com.br</h3>
                <h3 class="contact_info">reservas@garbageshotel.com.br</h3>
            </div>
    `
    footer.innerHTML = footer_Pages
    
}