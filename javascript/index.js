//config do menu responsivo
const btn_mobile = document.getElementById('btn-mobile');
function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active')
    const active = nav.classList.contains('active')
    event.currentTarget.setAttribute('aria-expanded', active)
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu')
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir menu')
    }
}


btn_mobile.addEventListener('click', toggleMenu);
btn_mobile.addEventListener('touchstart', toggleMenu);



//CODIGO QUE INSERE O MODAL NA TELA NA SEÇÃO "SOBRE MIM"
// modal habilidade 
function modal1() {
    var modal = document.getElementById("myModal");

    var span = document.getElementsByClassName("close")[0];

    modal.style.display = "block"



    span.onclick = () => {
        modal.style.display = "none";
    }

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

}
//modal formaçoes
function modal2() {
    var modal = document.getElementById("myModal2");

    var span = document.getElementsByClassName("close")[1];

    modal.style.display = "block"



    span.onclick = () => {
        modal.style.display = "none";
    }

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

}

//modal objetivos
function modal3() {
    var modal = document.getElementById("myModal3");

    var span = document.getElementsByClassName("close")[2];

    modal.style.display = "block"



    span.onclick = () => {
        modal.style.display = "none";
    }

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

}
//inserir ano
let ano = new Date();

let anoAtual = ano.getFullYear();

document.getElementById('ano').innerHTML = anoAtual;

