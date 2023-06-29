let cart = JSON.parse(decodeURIComponent(window.location.hash.slice(1))) || [];

window.onload = function() {
    updateCartDisplay();

    window.addEventListener('message', function(event) {
        if (event.data.type === 'ADD_TO_CART') {
            cart = event.data.cart;
            updateCartDisplay();
        }
    });
}

function updateCartDisplay() {
  let cartElement = document.getElementById('cart-items');
  cartElement.innerHTML = '';

  if (cart.length == 0) {
      let productElement = document.createElement('p');
      productElement.textContent = 'Your cart is empty';
      cartElement.appendChild(productElement);
  }
  else {
      cart.forEach(product => {
          let productElement = document.createElement('li');
          productElement.className = 'list-group-item d-flex justify-content-between lh-condensed';
          let div = document.createElement('div');
          let h5 = document.createElement('h5');
          h5.className = 'my-0';
          h5.textContent = product.title;
          let span = document.createElement('span');
          span.className = 'text-muted';
          span.textContent = `$ ${product.price}`;
          div.appendChild(h5);
          productElement.appendChild(div);
          productElement.appendChild(span);
          cartElement.appendChild(productElement);
      });
  }
}

