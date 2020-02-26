const BASE_URL = "http://localhost:3000"
const PARTIES_URL = `${BASE_URL}/parties`
const MEMBERS_URL = `${BASE_URL}/members`

let partiesContainer = document.querySelector("div.parties-container")
let membersContainer = document.querySelector("div.members-container")
let partyDiv = document.createElement("div")
let memberDiv = document.createElement("div")
partyDiv.id = "party-div"
memberDiv.id = "member-div"