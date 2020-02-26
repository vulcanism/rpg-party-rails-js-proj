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
        partiesContainer.textContet = "";
    })
}