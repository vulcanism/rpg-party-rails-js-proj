class Member {
    constructor(member) {
        this.id = member.id;
        this.name = member.attributes.name;
        this.level = member.attributes.level;
        this.gender = member.attributes.gender;
        this.race = member.attributes.race;
        this.role = member.attributes.role;
        this.party_id = member.relationships.party.data.id;
        allMembers.push(this)
    }
}