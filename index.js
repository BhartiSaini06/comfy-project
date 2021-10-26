// variables
const cartBtn = document.querySelector(".cart-btn");
const closeCartBtn = document.querySelector(".close-cart");
const clearCartBtn = document.querySelector(".clear-cart");
const cartDOM = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");
const cartItems = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");
const cartContent = document.querySelector(".cart-content");
const productsDOM = document.querySelector(".products-center");

// cart
let cart = [];

// getting products
class Products {
  async getProducts() {
    try {
      let result = await fetch("product.json");
      let data = await result.json();
      let products = data.items;
      products = products.map((item) => {
        const { title, price } = item.fields;
        const { id } = item.sys;
        const image = item.fields.image.fields.file.url;
        return { title, price, id, image };
      });
      return products;
    } catch (error) {
      console.log(error);
    }
  }
}

// display products
class UI {
  
getBagButtons(){
    const buttons = [...document.querySelectorAll(".bag-btn")];
    buttons.forEach(button =>{
        let id = button.dataset.id;
        let inCart = cart.find(item=> item.id === id);
        if(idinCart){

        }

    })
}
}

// local storage
class Storage {
  static saveProducts(products) {
    localStorage.setItem("products", JSON.stringify(products));
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const ui = new UI();
  const products = new Products();

  // get all products
//   products.getProducts().then((products) => console.log(products));
  // this is changed bcoz of display products
  products.getProducts().then((products) => {
    // ui.displayProducts(products);
    Storage.saveProducts(products);
  }).then(()=>{

     ui.getBagButtons();

  })
});
