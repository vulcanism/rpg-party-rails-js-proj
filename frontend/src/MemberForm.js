let placeForm = document.querySelector("div.place-form")

const generateMemberForm = (party) => {
    const linebreak = document.createElement("br")

    placeForm.textContent = "";
    const form = document.createElement("form")
    form.setAttribute("data-id", party.id)
    const formSubmit = document.createElement("button")
    formSubmit.textContent = "Create Party Member"

    form.id = "create-member"
    formSubmit.id = "form-submit"

    let nameInput = document.createElement("input")
    nameInput.setAttribute("name", "name")
    nameInput.placeholder = "Name"
    form.appendChild(nameInput)

    let levelInput = document.createElement("input")
    levelInput.setAttribute("name", "level")
    levelInput.placeholder = "Level"
    form.appendChild(levelInput)

    let genderInput = document.createElement("input")
    genderInput.setAttribute("name", "gender")
    genderInput.placeholder = "Gender"
    form.appendChild(genderInput)

    let raceInput = document.createElement("input")
    raceInput.setAttribute("name", "race")
    raceInput.placeholder = "Race"
    form.appendChild(raceInput)

    let roleInput = document.createElement("input")
    roleInput.setAttribute("name", "role")
    roleInput.placeholder = "Role"
    form.appendChild(roleInput)
    
    form.appendChild(linebreak)
    form.appendChild(formSubmit)

    placeForm.appendChild(form)
    membersContainer.appendChild(placeForm)

    document.querySelector("#create-member").addEventListener("submit", formSubmission)
}

function formSubmission(e) {
    e.preventDefault();
    let memberData = {
        party_id: e.target.dataset.id,
        name: e.target.elements.name.value,
        level: e.target.elements.level.value,
        gender: e.target.elements.gender.value,
        race: e.target.elements.race.value,
        role: e.target.elements.role.value
    }
    
        saveMember(memberData)

        e.target.elements.name.value = "";
        e.target.elements.level.value = "";
        e.target.elements.gender.value = "";
        e.target.elements.race.value = "";
        e.target.elements.role.value = "";

        addMember(memberData)
}

// MEMBER HAS: Name, Level, Gender, Race, Role

function addMember(member) {
    const h3 = document.createElement("h3")
    h3.innerHTML = "Name: " + `${member.name}`
    membersContainer.appendChild(memberDiv)
    memberDiv.appendChild(h3)

    const memberLevelEl = document.createElement("ul")
    memberLevelEl.innerHTML = "Level: " + `${member.level}`
    h3.appendChild(memberLevelEl)

    const memberGenderEl = document.createElement("ul")
    memberGenderEl.innerHTML = "Gender: " + `${member.gender}`
    h3.appendChild(memberGenderEl)

    const memberRaceEl = document.createElement("ul")
    memberRaceEl.innerHTML = "Race: " + `${member.race}`
    h3.appendChild(memberRaceEl)

    const memberRoleEl = document.createElement("ul")
    memberRoleEl.innerHTML = "Role: " + `${member.role}`
    h3.appendChild(memberRoleEl)
}