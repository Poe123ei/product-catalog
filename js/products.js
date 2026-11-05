
// Example: Filter and sort products
document.addEventListener('DOMContentLoaded', () => {
    const categoryFilter = document.getElementById('category-filter');
    const priceSort = document.getElementById('price-sort');

    categoryFilter.addEventListener('change', () => {
        console.log(`Filter by category: ${categoryFilter.value}`);
        // Add filtering logic here
    });

    priceSort.addEventListener('change', () => {
        console.log(`Sort by price: ${priceSort.value}`);
        // Add sorting logic here
    });
});
