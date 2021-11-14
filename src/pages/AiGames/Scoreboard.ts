export interface IScoreboard {
  contextScoreboard: any;
  color: string | undefined;
}

/**
 * @class Games
 * @classdesc Represents a game.
 */
export class Scoreboard implements IScoreboard {
  contextScoreboard: any;
  color: string | undefined;

  constructor() {
    let canvasScoreboard = document.createElement("canvas");
    document.body.appendChild(canvasScoreboard);
    canvasScoreboard.style.position = "absolute";
    canvasScoreboard.style.top = "60px";
    canvasScoreboard.style.left = "30px";
    canvasScoreboard.style.zIndex = "-97";
    this.contextScoreboard = canvasScoreboard.getContext("2d");
    this.contextScoreboard.textBaseline = "top";
    /* Team Name */
    this.contextScoreboard.fillStyle = "#2e2e2e";
    this.contextScoreboard.fillRect(65, 0, 193, 28);
    this.contextScoreboard.fillStyle = "#ccffff";
    this.contextScoreboard.font = "normal 17px Arial";
    this.contextScoreboard.fillText("RED", 79, 2);
    this.contextScoreboard.fillText("BLUE", 205, 2);
    //
    this.contextScoreboard.lineWidth = 0.2;
    this.contextScoreboard.rect(130, 2, 24, 23);
    this.contextScoreboard.rect(162, 2, 24, 23);
    this.contextScoreboard.fillStyle = "#2e2e2e";
    this.contextScoreboard.fill();
    this.contextScoreboard.strokeStyle = "#336699";
    this.contextScoreboard.stroke();

    /*colors left*/
    for (let i = 0; i < 5; i++) {
      i % 2 === 0 ? (this.color = "#ff0000") : (this.color = "#0000ff");
      this.contextScoreboard.fillStyle = this.color;
      this.contextScoreboard.fillRect(6 * i * 2 + 66, 21, 12, 3);
      this.contextScoreboard.stroke();
    }

    /*colors right*/
    for (let i = 0; i < 5; i++) {
      i % 2 === 0 ? (this.color = "#00ff00") : (this.color = "#f0f0f0");
      this.contextScoreboard.fillStyle = this.color;
      this.contextScoreboard.fillRect(6 * i * 2 + 192, 21, 12, 3);
      this.contextScoreboard.stroke();
    }
  }

  /* time */
  updateTime = (minute?: any, second?: any) => {
    this.contextScoreboard.clearRect(0, 0, 65, 30);
    this.contextScoreboard.fillStyle = "#2e2e2e";
    this.contextScoreboard.fillRect(0, 0, 65, 30);
    this.contextScoreboard.fillStyle = "#dadada";
    this.contextScoreboard.font = "normal 23px Arial";
    this.contextScoreboard.fillText(minute + ":" + second, 5, 2);
  };

  /* score */
  updateScore = (homeScore: any, awayScore: any) => {
    homeScore = homeScore || 0;
    awayScore = awayScore || 0;
    this.contextScoreboard.font = "normal 20px Arial";
    this.contextScoreboard.fillStyle = "#2e2e2e";
    this.contextScoreboard.clearRect(137, 3, 17, 19);
    this.contextScoreboard.clearRect(167, 3, 17, 19);
    this.contextScoreboard.fillStyle = "#2e2e2e";
    this.contextScoreboard.fillRect(137, 3, 17, 19);
    this.contextScoreboard.fillRect(167, 3, 17, 19);
    this.contextScoreboard.fillStyle = "#dadada";
    this.contextScoreboard.fillText(homeScore, 137, 3);
    this.contextScoreboard.fillText(awayScore, 168, 3);
  };
}
