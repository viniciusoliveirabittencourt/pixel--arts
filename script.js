//  acrescenta classe pixel aos tr
const td = document.querySelectorAll('td');

for (let index in td) {
    td[index].className = 'pixel';
}

//  troca selected via click
function addSelected() {
let color = document.querySelectorAll('.color');

for (let index = 0; index < color.length; index += 1) {
    function addSelected(event) {
        if (color[index].classList.contains('selected')) {
            color[index].classList.remove('selected');
        } else {
            event.target.classList.add('selected');
        }
    }

    let li = document.querySelectorAll('li');
    for (let secondIndex in li) {
        if (li[secondIndex].click) {
            li[secondIndex].addEventListener('click', addSelected);
        }
    }
}
}
addSelected();

    //  Troca aplica a cor selecionada
function aplicaColor() {
    let color = document.querySelectorAll('li');

    for (let index = 0; index < color.length; index += 1) {
        function addSelected(event) {
            if (color[index].classList.contains('selected')) {
                event.target.style.backgroundColor = window.getComputedStyle(color[index]).backgroundColor;
            }
        }

        let td = document.querySelectorAll('td');
        for (let secondIndex in td) {
            if (td[secondIndex].click) {
                td[secondIndex].addEventListener('click', addSelected);
            }
        }
    }
}
aplicaColor();

//  Botão limpar
document.getElementById('clear-board').addEventListener('click', function () {
    let tdir = document.querySelectorAll('td');
    for (let secondIndex = 0; secondIndex < tdir.length; secondIndex += 1) {
        td[secondIndex].style.backgroundColor = 'white';
    }
});