'use strict';

// чекбокс
const checkbox = document.getElementById('discount-checkbox');

checkbox.addEventListener('change', function(){
    if (this.checked){
        this.nextElementSibling.classList.add('checked');
    } else {
        this.nextElementSibling.classList.remove('checked');
    }
});
console.log(checkbox);
// конец чекбокса

// корзина
const buttonCart = document.getElementById('cart');
const modalCart = document.querySelector('.cart');
const buttonClose = document.querySelector('.cart-close');

buttonCart.addEventListener('click', () => {
    modalCart.style.display = 'flex';
    document.body.style.overflow = 'hidden';
});

buttonClose .addEventListener('click', () => {
    modalCart.style.display = 'none';
    document.body.style.overflow = '';
});
// конец корзины

// добавление товара в корзину
const cards = document.querySelectorAll('.goods .card');
const cartWrapper = document.querySelector('.cart-wrapper');
const cartEmpty = document.getElementById('cart-empty');
const countGoods = document.querySelector('.counter');

cards.forEach((card) => {
    const btn = card.querySelector('button');

    btn.addEventListener('click', () => {
        const cardClone = card.cloneNode(true);
        cartWrapper.appendChild(cardClone);
        cartEmpty.remove();
        showData();
    });
});

function showData() {
    const cardsCart = cartWrapper.querySelectorAll('.card');
    countGoods.textContent = cardsCart.length;
}
// end добавление товара в корзину