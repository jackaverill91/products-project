const productDOM = document.querySelector('.product');
const url = 'https://course-api.com/javascript-store-single-product?id=rec43w3ipXvP28vog';

const fetchProduct = async () => {
	try {
		productDOM.innerHTML = `<h4 class="product-loading">loading...</h4>`;

		const params = new URLSearchParams(window.location.search);
		const id = params.get('id');
		console.log(id);
		
		const response = await fetch(url);
		const data = response.json();
		return data;
	} catch (error) {
		productDOM.innerHTML = `<p class="error">there was a problem loading the product, please try again later</p>`;
	}
};

const displayProduct = (product) => {
	console.log(product);
}

const start = async () => {
	const data = await fetchProduct();
	displayProduct(data);
}

start();

// const fetchProduct = () => {
// 	fetch(url)
// 		.then((resp) => resp.json())
// 		.then((data) => data)
// 		.catch((err) => console.log(err));
		
// }