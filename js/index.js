//QUERYSELCTOR
const button_todos = document.querySelector(".todos");
const button_acessorios = document.querySelector(".acessorios");
const button_calcados = document.querySelector(".calçados");
const button_camisetas = document.querySelector(".camisetas");
const themeSwitch = document.querySelector('input');
const card_ul = document.querySelector("#card");
const cart_card_ul = document.querySelector("#cart-card");
const button_add = document.querySelector(".product-button-add");
const button_remove = document.querySelector(".cart-card-button-remove");
const search_imput = document.querySelector("#search")
const search_button = document.querySelector("#search-button")
//ARRAYS
let array = [];
let carrinho = [];
//DARK-MODE
themeSwitch.addEventListener('change', () => {
  document.body.classList.toggle('dark-theme');
});
//VITRINE
function renderCard(card) {
card_ul.insertAdjacentHTML("beforeend",
`
<li class="product">
            <div class="img-background"> 
              <img
              src=${card.img}
              class="product-img"
            />
          </div>
            <button class="category">${card.tag}</button>
            <div class="product-main">
              <h1 class="product-title">${card.nameItem}</h1>
              <h5 class="product-category">${card.description}</h5>
              <strong class="product-price">R$ ${card.value}.00</strong>
            </div>
            <button id="${card.id -1}" class="product-button-add">${card.addCart}</button>
          </li>
`
)
return card_ul
}
data.map(renderCard)
//CARD-CART
function renderCartCard(cartCard,index) {
  cart_card_ul.insertAdjacentHTML("beforeend",
`
          <li class="cart-card">
      <img src=${cartCard.img} >
      <section>
        <h3 class="cart-card-title">${cartCard.nameItem}</h3>
        <p class="cart-card-price">R$ ${cartCard.value}.00</p>
          <button id="${index}" class="cart-card-button-remove">Remover produto</button>
      </section>
      </li>
`
)
return cart_card_ul
}
//REMOVE E ADD
addEventListener("click", (event) => {
const target = event.target
if(target.className === "product-button-add"){
  let index = Number(target.id)
  carrinho.unshift(data[index])
  cart_card_ul.innerHTML = ""
  carrinho.map(renderCartCard)
}
if(target.className === "cart-card-button-remove"){
  let index = Number(target.id);
  carrinho.splice(index,1)
  cart_card_ul.innerHTML = ""
  carrinho.map(renderCartCard)
}
if(carrinho.length > 0) {
  const totalPrice = carrinho.reduce((acc,elem)=>acc + elem.value, 0) 
  const car_quanty_main= document.querySelector(".car-quanty-main");
  car_quanty_main.innerText = ""
  car_quanty_main.insertAdjacentHTML("beforeend",
`
  <div class="car-quanty-table">
  <p class="car-quanty">Quantidade: <span>${carrinho.length}</span> </p>
  <p class="car-price">Total: <span>${totalPrice}</span> </p>
</div>
`
)
}if(carrinho.length == 0 && target.className === "cart-card-button-remove"){
  const car_quanty_main= document.querySelector(".car-quanty-main");
  car_quanty_main.innerHTML = ""
  cart_card_ul.insertAdjacentHTML("beforeend",
  `
<li>
  <h2 class="car-empty">Carrinho vazio</h2>
  <span class="car-add">Adicione itens</span>
</li>
  `
)
}
});
//CARRINHO VAZIO FIXO
cart_card_ul.insertAdjacentHTML("beforeend",
  `
<li>
  <h2 class="car-empty">Carrinho vazio</h2>
  <span class="car-add">Adicione itens</span>
</li>
  `
)
//FILTER
addEventListener("click", (event) => {
  const searchTarget = event.target;
  if(searchTarget.id == "search-button"){
    const search_text = search_input.value.toLowerCase();
    const filterSearch = data.filter(
      (event) => event.nameItem.toLowerCase().split(" ").join("") == 
      search_text.toLowerCase().split(" ").join("") ||
      event.tag.toLowerCase() == search_text.toLowerCase().split(" ").join("")
    );
    card_ul.innerHTML = ""
    filterSearch.map(renderCard)
  }
});
addEventListener("click",(event) => {
  const category = event.target;
  const categoryOrigin = category.className;
  
  if(categoryOrigin  === "Camisetas"){
    card_ul.innerHTML = "";
    search.map(renderCard)
  }
  else if(categoryOrigin  === "Calçados"){
    card_ul.innerHTML = "";
    search.map(renderCard)
  }
  else if(categoryOrigin  === "Acessórios"){
    card_ul.innerHTML = "";
    search.map(renderCard)
  }
  else if(categoryOrigin === "Todos"){
    card_ul.innerHTML = "";
    data.map(renderCard)
  }
});
//CATEGORIA
addEventListener("click",(event) => {
  const category = event.target;
  const categoryOrigin = category.className;
  const search = data.filter((element)=>element.tag.toLowerCase() == categoryOrigin.toLowerCase())
  
  if(categoryOrigin  == "Camisetas"){
    card_ul.innerHTML = "";
    search.map(renderCard)
  }
  if(categoryOrigin  == "Calçados"){
    card_ul.innerHTML = "";
    search.map(renderCard)
  }
  if(categoryOrigin  == "Acessórios"){
    card_ul.innerHTML = "";
    search.map(renderCard)
  }
  if(categoryOrigin == "Todos"){
    card_ul.innerHTML = "";
    data.map(renderCard)
  }
});
