export class Player {
  constructor(name, level = 1) {
    this.name = name;
    this.level = level;
    this.xp = 0;
  }

  info() {
    console.log(`${this.name} is Level ${this.level} with ${this.xp} XP.`);
  }

  gainXp(points) {
    this.xp += points;
    const XP_TO_LEVEL = 100;

    while (this.xp >= XP_TO_LEVEL) {
      this.level++;
      this.xp -= XP_TO_LEVEL;
      console.log(`${this.name} leveled up! Now at Level ${this.level}.`);
    }
  }
}

export class Group {
  constructor(name) {
    this.name = name;
    this.members = [];
  }

  addMember(player) {
    this.members.push(player);
    console.log(`${player.name} joined the group ${this.name}.`);
  }

  removeMember(playerName) {
    this.members = this.members.filter(p => p.name !== playerName);
    console.log(`${playerName} was removed from group ${this.name}.`);
  }

  listMembers() {
    console.log(`Group ${this.name} Members:`);
    this.members.forEach(p => p.info());
  }
}

const bren = new Player("bren");
const juan = new Player("juan", 2);

bren.gainXp(120); 

const party = new Group("Heroes");
party.addMember(bren);
party.addMember(juan);
party.listMembers(); 
party.removeMember("juan");
party.listMembers();