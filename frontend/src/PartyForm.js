const generatePartyForm = () => {
    const linebreak = document.createElement("br")

    const form = document.createElement("form")
    const formSubmit = document.createElement("button")
    formSubmit.textContent = "Create Party"

    const sortBtn = document.createElement("button")
    sortBtn.textContent = "Sort Parties"
    sortBtn.addEventListener("click", sortParties)

    form.id = "create-party"
    formSubmit.id = "form-submit"    

    const currentParties = document.createElement("h2")
    currentParties.textContent = "Current Parties"

    let nameInput = document.createElement("input")
    nameInput.setAttribute("name", "name")
    nameInput.placeholder = "Party Name"
    form.appendChild(nameInput)    

    let questInput = document.createElement("input")
    questInput.setAttribute("name", "quest")
    questInput.placeholder = "Quest"    
    form.appendChild(questInput)

    let colorInput = document.createElement("input")
    colorInput.setAttribute("name", "color")
    colorInput.placeholder = "Color"
    form.appendChild(colorInput)

    form.appendChild(linebreak)
    form.appendChild(formSubmit)
    form.appendChild(sortBtn)
    

    form.appendChild(currentParties)

    return form
}