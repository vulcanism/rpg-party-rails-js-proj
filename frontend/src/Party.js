class Party {
    constructor(party) {
        this.id = party.id;
        this.name = party.name;
        this.quest = party.quest;
        this.color = party.color;
        this.members = [];
        allParties.push(this)
    }
}