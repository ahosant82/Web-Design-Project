/********add-to-card************/

let carts = document.querySelectorAll('.add-card');

let products = [
  {
    name: 'indean joba',
    tag: 'indeabjoda',
    price: 5,
    incart: 0,
  },
  {
    name: 'indean rose',
    tag: 'indeabrose',
    price: 5,
    incart: 0,
  },
  {
    name: 'indean lily',
    tag: 'indeablily',
    price: 5,
    incart: 0,
  },
  {
    name: 'indean apple',
    tag: 'indeabapple',
    price: 5,
    incart: 0,
  }
]
for (let i=0; i < carts.length; i++) {
  carts[i].addEventListener('click', () =>{
    cartsNumbers(products[i]);
  })
}

function onLoedCartsNumbers(){
  let productNumbers= localStorage.getItem('cartsNumbers');



  if( productNumbers) {
    document.querySelector('.card span').textContent = productNumbers;
  }
}
onLoedCartsNumbers();

function cartsNumbers(products){
    console.log('product is click', products)
  let productNumbers= localStorage.getItem('cartsNumbers');

  productNumbers = parseInt(productNumbers);

  if( productNumbers) {
    localStorage.setItem('cartsNumbers', productNumbers+1);
    document.querySelector('.card span').textContent = productNumbers +1;
  }else{
    localStorage.setItem('cartsNumbers', 1);
    document.querySelector('.card span').textContent = 1;

  }
  setitem(products);
  
}
function setitem(products){
    console.log('inside of setitem products');
    console.log('my product is', products);

    products.incart =1;

    let cartitem ={
      [products.tag]:products
    }

    localStorage.setItem('productItem',JSON.stringify(cartitem));
}