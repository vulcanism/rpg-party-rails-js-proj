const generateMemberForm = (party) => {
    const form = document.createElement("form")
    form.setAttribute("data-id", party.id)
    const formSubmit = document.createElement("button")
    formSubmit.textContent = "Create Party Member"

    form.id = "create-member"
    formSubmit.id = "form-submit"
}