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
            return member.attributes.party_id === newParty.id
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

            listMembers(party);
        })
    })

    h2.appendChild(a)

    partiesContainer.appendChild(partyDiv)
    partyDiv.appendChild(h2)

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

function sortParties(e) {
    e.preventDefault()
    partyDiv.innerHTML = ""

    return fetch(PARTIES_URL)
    .then(response => response.json())
    .then(json => {
        let sortedParties = json.data.sort(function(a, b) {
            // debugger
            let nameA = a.attributes.name.toUpperCase(); // ignore upper and lowercase
            let nameB = b.attributes.name.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
                 return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            
        })
        sortedParties.forEach(party => {            
            let newParty = new Party(party.attributes)
            newParty.render()
        })
    })
}

// Add button that, on click, fetches a party's members and sorts alphabetically

// json.sort -> json.sort is not a function
// json.data.sort -> cannot read property "toUpperCase" of undefined

// Making it a class method doesn't work, as it isn't accessible by the form (and a few others)

// function sortMembersAlpha(e) {
//     e.preventDefault()
    
//     return fetch(PARTIES_URL)
//     .then(response => response.json())
//     .then(json => {             
    //    let sortedMembers = json.sort(function(a, b) {
    //         let nameA = a.name.toUpperCase(); // ignore upper and lowercase
    //         let nameB = b.name.toUpperCase(); // ignore upper and lowercase
    //         if (nameA < nameB) {
    //           return -1;
    //        }
    //        if (nameA > nameB) {
    //          return 1;
    //        }
    //    })

        //  console.log(json.data)
        
        // Can access the members array here...but applying sort gets the same undefined error
        // Need an index for .relationships.members to work, so can't just assign it a variable        
//     }

// )}


// This one fetches from MEMBERS, not PARTIES. Name is more readily accessible, but, again--
// json.sort is not a function

// function sortMembersBeta(e) {
//     e.preventDefault()
    
//     return fetch(MEMBERS_URL)
//     .then(response => response.json())
//     .then(json => {
    //    let sortedMembers = json.sort(function(a, b) {
    //         let nameA = a.name.toUpperCase(); // ignore upper and lowercase
    //         let nameB = b.name.toUpperCase(); // ignore upper and lowercase
    //         if (nameA < nameB) {
    //           return -1;
    //        }
    //        if (nameA > nameB) {
    //          return 1;
    //        }
    //    })

        // console.log(json.data[1].attributes)
        
        // Again, need an index for .attributes to work, otherwise it's undefined
//     }

// )}
