interface CartItem {
    id: number;
    title: string;
    variantId?: number;
}

function addToCart(item: CartItem) {
    console.log('[Exercise 2.1]', `Adding "${item.title}" to cart.`);
}

addToCart({ id: 1, title: 'Concrete shoes' });
