class Party {
    constructor(party) {
        this.id = party.id;
        this.name = party.name;
        this.quest = party.quest;
        this.color = party.color;
        this.members = [];
        allParties.push(this)
    }

    render() {
        const h2 = document.createElement("h2");
        const h4 = document.createElement("h4");
        const a = document.createElement("a");
        a.setAttribute("href", "#")
        a.innerHTML = `${this.name}`

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
    }
}