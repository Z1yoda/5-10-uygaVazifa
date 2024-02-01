import { createRow, validate } from "./functions.js";

const wrapper = document.querySelector('#wrapper')
const button = document.querySelector('#btn')
const name = document.querySelector('#name')
const price = document.querySelector('#price')
const description = document.querySelector('#description')
const form = document.querySelector('#form')



document.addEventListener('DOMContentLoaded', function (e) {
    e.preventDefault()
    fetch("https://auth-rg69.onrender.com/api/products/all", {
        method: "GET"
    })
        .then((res) => res.json())
        .then(data => {
            if (data.length) {
                data.forEach((phone, index) => {
                    let wrap = createRow(phone, index + 1)
                    wrapper.innerHTML += wrap
                });

                const deleteButtons = document.querySelectorAll(".text-danger")
                if (deleteButtons.length) {
                    deleteButtons.forEach(del => {
                        del && del.addEventListener('click', function () {
                            let id = this?.parentNode.parentNode?.getAttribute('data-id').substring(5)
                            if (id) {
                                let isDelete = confirm("Rostdan ham o'chirmoqchimisiz?")
                                if (isDelete) {
                                    fetch(`https://auth-rg69.onrender.com/api/products/${id}`, {
                                        method: "DELETE"
                                    })
                                        .then(res => res.json())
                                        .then(data => {
                                            if (data.message == "Mahsulot muvaffaqiyatli o'chirildi") {
                                                window.location.reload()
                                            }
                                        })
                                        .catch(err => {
                                            console.log(err);
                                        })
                                }
                            }
                        })
                    })
                }

                const updateButttons = document.querySelectorAll(".text-primary")
                if (updateButttons.length) {
                    updateButttons.forEach(edit => {
                        edit && edit.addEventListener('click', function () {
                            let id = this?.parentNode.parentNode?.getAttribute('data-id').substring(5)

                            let currentUrl = window.location.href
                            let pageIndex = currentUrl.search("index")
                            const domain = currentUrl.substring(0, pageIndex)
                            window.location.assign(`${domain}pages/update.html?id=${id}`)


                        })
                    })
                }

                const nameList = document.querySelectorAll(".text-info")
                if (nameList.length) {
                    nameList.forEach(item => {
                        item && item.addEventListener('click', function (e) {
                            e.preventDefault()
                            let id = this.parentNode.parentNode.getAttribute('data-id').substring(5)

                            if (id) {
                                let currentUrl = window.location.href
                                let pageIndex = currentUrl.search("index")
                                const domain = currentUrl.substring(0, pageIndex)
                                window.location.assign(`${domain}pages/info.html?id=${id}`)
                            }
                        })
                    })
                }
            }
        })
        .catch((err) => {
            console.log(err);
        })
})

button && button.addEventListener('click', function (e) {
    e.preventDefault()
    if (validate(name, price)) {
        let phone = {
            name: name.value,
            price: price.value,
            description: description.value,
            status: "active",
            category_id: "2"
        }

        fetch("https://auth-rg69.onrender.com/api/products", {
            method: "POST",
            headers: {
                'Content-type': "application/json"
            },
            body: JSON.stringify(phone)
        })

            .then(res => res.json())
            .then(data => {
                if (data.id) {
                    let row = createRow(phone, wrapper.children.length + 1)
                    wrapper.innerHTML += row
                    form.reset()
                }
            })
            .catch(err => {
                console.log(err);
            })

    }
})