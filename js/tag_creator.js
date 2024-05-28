

export function nav(place, classs) {
    
    const nav = document.createElement('nav');
    nav.className = classs;
    place.appendChild(nav)
}

export function section(place, classs, id) {
    const tag = document.querySelector(`.${place}`);

    const section = document.createElement('section');
    section.className = classs
    section.id = id
    tag.appendChild(section)

}

export function a(place, classs, href, text) {
    const tag = document.querySelector(`.${place}`);

    const a = document.createElement('a')
    a.className = classs
    a.href = href
    a.innerText = text
    tag.appendChild(a)
}

export function div(place, classs) {
    const tag = document.querySelector(`.${place}`);
    const div = document.createElement('div');
    div.className = classs;
    tag.appendChild(div)
}

export function h1(place, classs, text) {
    const tag = document.querySelector(`.${place}`);
    const h1 = document.createElement('h1');
    h1.className = classs
    h1.innerText = text
    tag.appendChild(h1)
}
export function h2(place, classs, text) {
    const tag = document.querySelector(`.${place}`);
    const h2 = document.createElement('h2');
    h2.className = classs
    h2.innerText = text
    tag.appendChild(h2)
}
export function h3(place, classs, text) {
    const tag = document.querySelector(`.${place}`);
    const h3 = document.createElement('h3');
    h3.className = classs
    h3.innerText = text
    tag.appendChild(h3)
}

export function input(place, classs, id, type, value, min, max) {
    const tag = document.querySelector(`.${place}`);
    
    const input = document.createElement('input')
    input.className = classs
    input.id = id
    input.setAttribute('type', type)
    input.setAttribute('value', value)
    input.setAttribute('min', min)
    input.setAttribute('max',max)
    input.setAttribute('style', 'color: #DC4400')
    tag.appendChild(input)
}

export function button(place, classs, text, id, type) {
    const tag = document.querySelector(`.${place}`);
    const button = document.createElement('button');
    button.className = classs
    button.id = id
    button.type = type
    button.innerText = text
    tag.appendChild(button)
}

export function img(place, classs, src) {
    const tag = document.querySelector(`.${place}`);
    const img = document.createElement('img');
    img.className = classs
    img.src = src
    tag.appendChild(img)
}

export function lista(place, classs, ...args) {
    const tag = document.querySelector(`.${place}`);
    const ol = document.createElement('ol')
    ol.className = classs
    console.log(args)
    args.forEach(element => {
        const li = document.createElement('li')
        li.innerText = `${element}`
        ol.appendChild(li)
    });
    tag.appendChild(ol)

}