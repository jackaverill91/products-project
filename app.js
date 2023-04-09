const url = 'https://course-api.com/javascript-store-products';

const productsDOM = document.querySelector('.products-center');

// this function fetches the data from API, turns it into a JSON and then returns it for later use. It also handles the loading icon and any errors
const fetchProducts = async () => {
  try {
		const resp = await fetch(url);
		const data = await resp.json();
		return data;
  }
  catch (error) {
		productsDOM.innerHTML = `<p class="error">there was an error</p>`;
  }
}

// this function takes care of rendering products on the screen
const displayProducts = (list) => {
	const productList = list.map((product) => {
		// id,name,price,img
		const {id} = product;
		const {name: title, price} = product.fields; // title is alias of name
		const {url: img} = product.fields.image[0];
		const formatPrice = price / 100;
		return `<a href="product.html" class="single-product">
							<img src="${img}" class="single-product-img img" alt="${title}">
							<footer>
								<h5 class="name">${title}</h5>
								<span class="price">${formatPrice}</span>
							</footer>
						</a>`;
	}).join('');
	productsDOM.innerHTML = `<div class="products-container">${productList}</div>`;
};

// this function fetches the data by returning the fetchProducts function as a promise, and then passing it into the displayProducts function
const start = async () => {
	const data = await fetchProducts();
	displayProducts(data);
}

start();