const generateMemberForm = (party) => {
    const form = document.createElement("form")
    form.setAttribute("data-id", party.id)
    const formSubmit = document.createElement("button")
    formSubmit.textContent = "Create Party Member"

    form.id = "create-member"
    formSubmit.id = "form-submit"

    let nameInput = document.createElement("input")

    let levelInput = document.createElement("input")

    let genderInput = document.createElement("input")

    let raceInput = document.createElement("input")

    let roleInput = document.createElement("input")
}