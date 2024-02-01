const name = document.querySelector("#name")
const price = document.querySelector("#price")
const description = document.querySelector("#description")
const form = document.querySelector("#form")

document.addEventListener('DOMContentLoaded', function () {
    let id = window.location.href.substring(window.location.href.search('id=') + 3)

    fetch(`https://auth-rg69.onrender.com/api/products/${id}`, {
        method: "GET"
    })
        .then((res) => res.json())
        .then(data => {
            if (data.id) {
                name.value = data.name
                price.value = data.price
                description.value = data.description
            }
        })
}
)