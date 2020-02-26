let allParties = [];
let allMembers = [];

function fetchParties() {
    return fetch(PARTIES_URL)
    .then(response => response.json())
    .then(json => {
        renderParties(json)
    })
}

function renderParties(json) {
    json.data.forEach(party => {
        let newParty = new Party(party.attributes)

        let members = json.included.filter(member => {
            return member.attributes.party_id == newParty.id
        })

        createMembers(newParty, members)

        addParty(newParty)
    })

}

function addParty(party) {
    const h2 = document.createElement("h2");
    const h4 = document.createElement("h4");
    const a = document.createElement("a");
    a.setAttribute("href", "#")
    a.innerHTML = `${party.name}`

    a.addEventListener("click", function(e) {
        partiesContainer.textContent = "";

        let partyFilter = allParties.filter(function(party) {
            return e.target.innerText.toLowerCase() === party.name.toLowerCase()
        })

        partyFilter.forEach(party => {
            generateMemberForm(party)
            h2.textContent = party.name
            h4.textContent = "Party"
            partiesContainer.appendChild(h2)
            partiesContainer.appendChild(h4)

            listMembers(party)
        })
    })

    h2.appendChild(a)

    partiesContainer.appendChild(partiesDiv)
    partiesDiv.appendChild(h2)

    const partyQuest = document.createElement("ul")
    partyQuest.innerHTML = `Quest: ${party.quest}`
    h2.appendChild(partyQuest)

    const partyColor = document.createElement("ul")
    partyColor.innerHTML = `Color: ${party.color}`
    h2.appendChild(partyColor)
}

function saveParty(party) {
    return (
        fetch(PARTIES_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(party)
        })
    )
    .then(response => response.json())
    .then(json => {
        let newParty = new Party(json.data.attributes)
        newParty.render()
    })

}