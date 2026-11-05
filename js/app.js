document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.getElementById('product-grid');

    // Fetch products from DummyJson API
    fetch('https://dummyjson.com/products')
        .then(response => response.json())
        .then(data => {
            const products = data.products;
            products.forEach(product => {
                // Create product card
                const productCard = document.createElement('div');
                productCard.classList.add('product');

                productCard.innerHTML = `
                    <img src="${product.thumbnail}" alt="${product.title}">
                    <h3>${product.title}</h3>
                    <p>Price: $${product.price}</p>
                    <p>Category: ${product.category}</p>
                `;

                productGrid.appendChild(productCard);
            });
        })
        .catch(error => console.error('Error fetching products:', error));
});
