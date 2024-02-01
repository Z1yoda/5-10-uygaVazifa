function createRow(phone, index) {
    return `<tr data-id = 'data_${phone.id}' >
                        <th scope="row">${index}</th>
                        <td>
                        <span class="text-info" style= 'cursor:pointer'>${phone.name}</span>
                        </td>
                        <td>${phone.price}$</td>
                        <td>${phone.description}</td>
                        <td >
                            <span class="text-danger" style="cursor: pointer;">Delete</span>
                            <span class="text-primary" style="cursor: pointer;">Update</span>
                        </td>
                    </tr>
`
}

function validate(name, price) {
    if (!name.value) {
        alert("Nomi kiritilishi shart")
        name.focus()
        return false
    }

    if (name.value.trim().length < 3) {
        alert("Nom kamida 3 ta belgidan iborat bo'lishi shart")
        name.focus()
        return false
    }

    if (!price.value) {
        alert("Narxi kiritilishi shart")
        price.focus()
        return false
    }

    if (price.value <= 0) {
        alert("Narxi manfiy bo'lishi mumkin emas")
        price.focus()
        return false
    }

    if (!Number(price.value)) {
        alert("Narx raqamlarda kiritilishi shart")
        price.focus()
        return false
    }

    return true
}


export { createRow, validate }