export class Player {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }

  info() {
    console.log(`${this.name} has reached Level ${this.level}!`);
  }

  levelUp() {
    this.level += 1;
  }
}


const player4 = new Player("Juan", 4);
player4.info(); 
player4.levelUp();
player4.info();