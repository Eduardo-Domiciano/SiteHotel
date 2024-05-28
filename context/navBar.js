

export function navegation_bar() {
    const navegation_bar = document.querySelector('.navegation_bar')
    const nav_tag = document.createElement("nav")
    nav_tag.className = "nav_bar"
    const nav_bar = `
            <a href="/index.html" class="nav_button">Home</a>
            <a href="/about.html" class="nav_button">Sobre</a>
            <a href="/accomodation.html" class="nav_button">Acomodações</a>
            <a href="/login.html" class="nav_button">Login</a>
            <a href="/career.html" class="nav_button">Trabalhe Conosco</a>
    `
    nav_tag.innerHTML = nav_bar
    navegation_bar.append(nav_tag)
}