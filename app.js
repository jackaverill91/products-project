const url = 'https://course-api.com/javascript-store-products';

const productsDOM = document.querySelector('.products-center');

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

const start = async () => {
	const data = await fetchProducts();
	displayProducts(data);
}

start();
