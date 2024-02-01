const name = document.querySelector("#name")
const price = document.querySelector("#price")
const description = document.querySelector("#description")

document.addEventListener('DOMContentLoaded', function () {
    let id = window.location.href.substring(window.location.href.search('id=') + 3)

    if (window.location.href.search('id=') > 0) {
        fetch(`https://auth-rg69.onrender.com/api/products/${id}`)
            .then(res => res.json())
            .then(data => {
                if (data.id) {
                    name.innerHTML = data.name
                    price.innerHTML = data.price
                    description.innerHTML = data.description
                }
            })
            .catch(err => {
                console.log(err);
            })

    } else {
        let currentUrl = window.location.href
        let pageIndex = currentUrl.search("pages")
        const domain = currentUrl.substring(0, pageIndex)
        console.log(domain);
        window.location.assign(`${domain}index.html`)
    }
})