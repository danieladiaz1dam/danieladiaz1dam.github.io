names = [
    "Charlie",
    "Max",
    "Cooper",
    "Milo",
    "Buddy",
    "Teddy",
    "Rocky",
    "Bear",
    "Leo",
    "Duke",
    "Luna",
    "Bella",
    "Daisy",
    "Lucy",
    "Lily",
    "Lola",
    "Zoe",
    "Sadie",
    "Stella",
    "Bailey",
]

ages = [
    "1 yr",
    "2 yr",
    "3 yr",
    "4 yr",
    "5 yr"
]

sizes = [
    "tiny",
    "small",
    "average",
    "big",
    "huge"
]

puppies = [1, 2, 3, 4, 5, 6, 7, 8]

function random(arr) {
    return arr[(Math.floor(Math.random() * arr.length))];
}

function addPuppies() {
    div = document.getElementById("puppy-goes-here");
    for (let i = 0; i < 8; i++) {
        dog = random(puppies)
        size = random(sizes)
        age = random(ages)
        dogName = random(names)
        html = `<div class="col-md-3 mb-5 d-flex justify-content-center">
        <div class="card rounded-3 w-75 regular">
            <img src="imgs/puppies/dog${dog}.jpg" class="card-img-top" alt="dog${dog}">
            <div class="card-body position-relative">
                <span
                    class="position-absolute top-0 start-100 translate-middle badge rounded-pill my-badge-bg fs-6">${age}</span>
                <h4 class="bold">${dogName}</h4>
                <p><span class="semibold">Size: </span>${size}</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, quod!</p>
                <a href="contact.html" class="btn btn-primary">Adopt!</a>
            </div>
        </div>
    </div>`;

        div.innerHTML += html;
    }
}
