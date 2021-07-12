//acrescenta classe pixel aos tr 
let td = document.querySelectorAll('td');

for (let index in td) {
    td[index].className = 'pixel';
}