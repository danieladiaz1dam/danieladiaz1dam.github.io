function random(arr) {
    return arr[(Math.floor(Math.random() * arr.length))];
}

function addProducts() {
    div = document.getElementById("product-goes-here");
    for (let i = 1; i <= 6; i++) {
        html = `<div class="col-md-3">
        <div class="card w-100 mt-4">
            <img src="imgs/shop/products/junior/Comida-Junior-${i}.jpg" alt="Comida-Junior-${i}" class="card-img-top">
            <div class="card-body text-center">
                <h5 class="card-title">Comida Junior #${i}</h5>
                <p class="semibold">$5.50</p>
                <div class="mb-3">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <a href="cart.html" class="btn btn-primary"><span><i class="fa-solid fa-cart-plus"></i> Add to cart</span></a>
            </div>
        </div>
    </div>`;

        div.innerHTML += html;
    }
    for (let i = 1; i <= 6; i++) {
        html = `<div class="col-md-3">
        <div class="card w-100 mt-4">
            <img src="imgs/shop/products/senior/Comida-Senior-${i}.jpg" alt="Comida-Senior-${i}" class="card-img-top">
            <div class="card-body text-center">
                <h5 class="card-title">Comida Senior #${i}</h5>
                <p class="semibold">$5.50</p>
                <div class="mb-3">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <a href="cart.html" class="btn btn-primary"><span><i class="fa-solid fa-cart-plus"></i> Add to cart</span></a>
            </div>
        </div>
    </div>`;

        div.innerHTML += html;
    }
}