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

// --- Prueba ---
const player5 = new Player("Bren", 1);
player5.info(); // Luna is Level 1 with 0 XP.
player5.gainXp(50); // gana 50 xp
player5.info(); // Luna is Level 1 with 50 XP.
player5.gainXp(70); // gana 70 xp → sube a nivel 2 con 20 xp sobrante
player5.info(); 