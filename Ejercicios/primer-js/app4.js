let $title = document.getElementsByClassName('list-group-item');
//let $items = document.querySelector('div.row>ul');
let $items = document.querySelectorAll('li:nth-child(odd)');
//console.log($items);

$items.forEach(elementIterator);

function elementIterator(item, index) {
    item.style.background = "#3f3f3f";
    item.style.color = 'white';
}