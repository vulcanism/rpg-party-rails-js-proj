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
    
}