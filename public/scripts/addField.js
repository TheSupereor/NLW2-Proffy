//procurar um botão
document.querySelector("#add-time")
.addEventListener("click", cloneField)
//quando clicar no botão

//Executar uma ação
function cloneField() {
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)

    const fields = newFieldContainer.querySelectorAll("input")

    fields.forEach(function(field) {
        field.value = ""

    })

    document.querySelector("#schedule-itens").appendChild(newFieldContainer)
}
//duplicar os campos

//colocar na página

