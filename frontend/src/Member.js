class Member {
    constructor(id, name, level, gender, race, role, partyId) {
        this.id = id;
        this.name = name;
        this.level = level;
        this.gender = gender;
        this.race = race;
        this.role = role;
        this.party_id = partyId;
        allMembers.push(this)
    }
}