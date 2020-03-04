const BASE_URL = "http://localhost:3000"
const PARTIES_URL = `${BASE_URL}/parties`
const MEMBERS_URL = `${BASE_URL}/members`

let partiesContainer = document.querySelector("div.parties-container")
let membersContainer = document.querySelector("div.members-container")
let partyDiv = document.createElement("div")
let memberDiv = document.createElement("div")
partyDiv.id = "party-div"
memberDiv.id = "member-div"

let homeBtn = document.querySelector("#home")

homeBtn.addEventListener("click", function() {
    partiesContainer.textContent= ""
    loadPage();
})

document.addEventListener("DOMContentLoaded", function() {
    loadPage();
})

function loadPage() {
    partiesContainer.textContent = ""
    membersContainer.textContent = ""

    partyDiv.textContent = ""
    memberDiv.textContent = ""

    generatePartyForm();
    fetchParties();
    partiesContainer.appendChild(generatePartyForm());

    fetchMembers();

    document.querySelector("#create-party").addEventListener("submit", function(e) {
        e.preventDefault();

        let partyData = {
            name: e.target.elements.name.value,
            quest: e.target.elements.quest.value,
            color: e.target.elements.color.value
        }

            e.target.elements.name.value = "";
            e.target.elements.quest.value = "";
            e.target.elements.color.value = "";

            saveParty(partyData);
    })
}