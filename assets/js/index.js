const productContainer = document.querySelector('.productContainer')
const url = 'https://fakestoreapi.com/products'
let arr;
axios.get(url)
    .then((res) => {

        arr = res.data
        let data = arr.splice(0, 10)
        console.log(data);
        data.forEach((item) => {
            let newDiv = document.createElement('div')
            newDiv.className = 'cart'
            newDiv.innerHTML = ` 
        <div class="cartTop">
          <img
          src=${item.image}
          alt=""</div>
      <div class="cartBottom">
        <h6>${item.title}</h6>
        <p>$${item.price}</p>
        <button class="cartBtn" onclick="addToCart(${item.id})">ADD TO CART</button>
      </div> `
            productContainer.appendChild(newDiv)
        })
    })