function saveMember(memberData) {
    
    let member = {
        party_id: memberData.party_id,
        name: memberData.name,
        level: memberData.level,        
        gender: memberData.gender,
        race: memberData.race,
        role: memberData.role
    }

    let configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(member)
      };
    
      return fetch(MEMBERS_URL, configObj)
      .then(response => response.json())
      .then(object => {        
        console.log(object)
      })
}

function renderMembers(membersArray, party_id) {
    membersArray.forEach(member => {
      let newMember = new Member(member)        
    })    
  }

function createMembers(party, membersArray) {
    membersArray.forEach(member => {
        let newMember = new Member(member);
    party.members.push(newMember)
    })
  }

function fetchMembers(party_id) {
    return fetch(MEMBERS_URL)
    .then(response => response.json())
    .then(member => {
        renderMembers(member.data, party_id);
    })
}

function listMembers(party) {
  partyDiv.textContent = "";
  party.members.forEach(member => {    
    addMember(member)
  })
}