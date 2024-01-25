class Player {
    username: string;
    playerType: string;
    level: number; 
    vip?: boolean;
  
    constructor(username: string, playerType: string, level: number, vip?: boolean) {
      this.username = username;
      this.playerType = playerType;
      this.level = level;
      this.vip = vip;
    }
  
     details(): string {
      if (this.vip) { 
        return `VIP ${this.username}, Type Is ${this.playerType} Level Is ${this.level}`;
      } else {
        return `${this.username}, Type Is ${this.playerType} Level Is ${this.level}`;
      }
    }
  }
  
  let player1 = new Player("Osama", "Mage", 90, true);
  let player2 = new Player("Shady", "Archer", 85, false); 
  let player3 = new Player("Amr", "Fighter", 50, true);
  let player4 = new Player("Mahmoud", "Assassin", 77, false); 
  
  console.log(player1.details());
  console.log(player2.details());
  console.log(player3.details());
  console.log(player4.details());
  
  
  
  