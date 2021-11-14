import { rotate } from "./utils";
import { Vec2 } from "./Vec2";

export interface IGame {
  boardCenterX: number;
  boardCenterY: number;
  boardWidth: number;
  boardHeight: number;
  position: any;
  startingPosX: any;
  startingPosY: any;
  radius: any;
  mass: any;
  velocity: any;
  maxSpeed: any;
  friction: any;
  acceleration: any;
  color: string;
  teams: { homeScore: number; awayScore: number };
  mouse: { x: number; y: number; dir: {} };
  controllers: any[];
  goalHeight: number;
  goalPosTop: any;
  ball: Game | undefined;
}

/**
 * @class Game
 * @classdesc Represents a game.
 */
export class Game implements IGame {
  boardContext: any;
  boardCenterX: number;
  boardCenterY: number;
  boardWidth: number;
  boardHeight: number;
  position: any;
  startingPosX: any;
  startingPosY: any;
  radius: any;
  mass: any;
  velocity: any;
  maxSpeed: any;
  friction: any;
  acceleration: any;
  color: string;
  controllers: any[];
  goalHeight: number;
  goalPosTop: any;
  ball: Game | undefined;
  public static teams: { homeScore: number; awayScore: number };
  public static mouse: { x: number; y: number; dir: {} };
  mouse: { x: number; y: number; dir: {} };
  teams: { homeScore: number; awayScore: number };
  playerAI: any;
  timer: any;
  constructor(playerAI?: any, timer?: any, boardContext?: any, ball?: Game) {
    this.boardContext = boardContext;
    this.timer = timer;
    this.playerAI = playerAI;
    this.boardWidth = 1000;
    this.boardHeight = 600;

    this.boardCenterX = this.boardWidth / 2;
    this.boardCenterY = this.boardHeight / 2;

    this.controllers = [];
    this.goalHeight = 190;
    this.goalPosTop = (this.boardHeight - this.goalHeight) / 2;

    let boardCenterX: number = this.boardWidth / 2;
    let boardCenterY: number = this.boardHeight / 2;

    this.startingPosX = boardCenterX;
    this.startingPosY = boardCenterY;

    this.position = new Vec2(this.startingPosX, this.startingPosY);
    this.radius = 20;
    this.mass = 15;
    this.velocity = new Vec2(0, 0);
    this.maxSpeed = 10;
    this.friction = new Vec2(0.997, 0.997);
    this.acceleration = 1;
    this.color = "#000000";

    this.teams = {
      homeScore: 0,
      awayScore: 0,
    };

    this.mouse = {
      x: 200,
      y: 100,
      dir: {},
    };

    this.ball = ball;
  }

  keepControllerInBoard = () => {
    if (
      this.position.x > this.boardWidth - this.radius ||
      this.position.x < this.radius
    ) {
      if (this.position.x < this.radius) {
        this.velocity.x = 2;
      } else {
        this.velocity.x = -2;
      }
    }

    if (
      this.position.y > this.boardHeight - this.radius ||
      this.position.y < this.radius
    ) {
      if (this.position.y < this.radius) {
        this.velocity.y = 2;
      } else {
        this.velocity.y = -2;
      }
    }
  };

  /* Keep disc inside board */
  keepBallInBoard = () => {
    if (
      this.position.x > this.boardWidth - this.radius ||
      this.position.x < this.radius
    ) {
      /* Check to see if goal scored */
      if (
        this.position.y > this.goalPosTop + this.ball!.radius &&
        this.position.y < this.goalPosTop + this.goalHeight - this.ball!.radius
      ) {
        /* Score */
        if (this.position.x > this.boardWidth - this.radius) {
          let score = Game.teams.homeScore;
          score += 1;
          this.timer.scoreboard.updateScore(score, Game.teams.awayScore);
        } else {
          let score = Game.teams.awayScore;
          score += 1;
          this.timer.scoreboard.updateScore(Game.teams.homeScore, score);
        }
        /* ball to the middle */
        this.ball = new Game(this.boardCenterX, this.boardCenterY);
      } else {
        /* Reverse X direction */
        this.velocity.x = -this.velocity.x;
      }
      /* Stop ball from getting stuck */
      if (this.position.x > this.boardWidth - this.radius) {
        this.position.x = this.boardWidth - this.radius;
      } else {
        this.position.x = this.radius;
      }
    }

    /* Determine if ball is to far up or down */
    if (
      this.position.y > this.boardHeight - this.radius ||
      this.position.y < this.radius
    ) {
      if (this.position.y > this.boardHeight - this.radius) {
        this.position.y = this.boardHeight - this.radius;
      } else {
        this.position.y = this.radius;
      }
      this.velocity.y = -this.velocity.y;
    }
  };

  /* Collide ball if in same spot */
  collision = () => {
    /*Loop over two controllers t/!**!/o see if ball has come in contact*/
    for (let i = 0; i < this.controllers.length; i++) {
      let distanceX = this.position.x - this.controllers[i].position.x;
      let distanceY = this.position.y - this.controllers[i].position.y;
      let distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
      /* Add the two disc radius together */
      let addedRadius = this.radius + this.controllers[i].radius;
      /* Check to see if the distance between the two circles is smaller than the added radius
      If it is then we know the circles are overlapping */
      if (distance < addedRadius) {
        /*cHad help from Reddit user Kraft_Punk on the below collision math
        calculate angle, sine, and cosine */
        let angle = Math.atan2(distanceY, distanceX);
        let sin = Math.sin(angle);
        let cos = Math.cos(angle);
        //rotate controllers[i]'s position
        let pos0 = new Vec2(0, 0);
        //rotate this position
        let pos1 = rotate(distanceX, distanceY, sin, cos, true);
        //rotate controllers[i]'s velocity
        let vel0 = rotate(
          this.controllers[i].velocity.x,
          this.controllers[i].velocity.y,
          sin,
          cos,
          true
        );
        //rotate this velocity
        let vel1 = rotate(this.velocity.x, this.velocity.y, sin, cos, true);
        //collision reaction
        let velocityXTotal = vel0.x - vel1.x;

        vel0.x =
          ((this.controllers[i].mass - this.mass) * vel0.x +
            2 * this.mass * vel1.x) /
          (this.controllers[i].mass + this.mass);
        vel1.x = velocityXTotal + vel0.x;

        //update position - to avoid objects becoming stuck together
        let absV = Math.abs(vel0.x) + Math.abs(vel1.x);
        let overlap =
          this.controllers[i].radius + this.radius - Math.abs(pos0.x - pos1.x);

        pos0.x += (vel0.x / absV) * overlap;
        pos1.x += (vel1.x / absV) * overlap;

        //rotate positions back
        let pos0F = rotate(pos0.x, pos0.y, sin, cos, false);
        let pos1F = rotate(pos1.x, pos1.y, sin, cos, false);

        //adjust positions to actual screen positions
        this.position.x = this.controllers[i].position.x + pos1F.x;
        this.position.y = this.controllers[i].position.y + pos1F.y;

        this.controllers[i].position.x =
          this.controllers[i].position.x + pos0F.x;
        this.controllers[i].position.y =
          this.controllers[i].position.y + pos0F.y;

        //rotate velocities back
        let vel0F = rotate(vel0.x, vel0.y, sin, cos, false);
        let vel1F = rotate(vel1.x, vel1.y, sin, cos, false);

        this.controllers[i].velocity.x = vel0F.x;
        this.controllers[i].velocity.y = vel0F.y;
        this.velocity.x = vel1F.x;
        this.velocity.y = vel1F.y;
      }
    }
  };

  /* Draw disc */
  draw = () => {
    if (this.boardContext) {
      this.boardContext.beginPath();
      this.boardContext.arc(
        this.position.x,
        this.position.y,
        this.radius,
        0,
        2 * Math.PI,
        false
      );
      this.boardContext.fillStyle = this.color;
      this.boardContext.fill();
      this.boardContext.closePath();
      this.boardContext.beginPath();
      this.boardContext.font = "bold 12px sans-serif";
      this.boardContext.fillStyle = "#fff";
      this.boardContext.fillText(
        "VX: " + this.velocity.x.toFixed(4),
        this.position.x,
        this.position.y + 10
      );
      this.boardContext.fillText(
        "VY: " + this.velocity.y.toFixed(4),
        this.position.x,
        this.position.y + 20
      );
      this.boardContext.fill();
    }
  };

  /* Move ball with physic's applied */
  move = () => {
    this.velocity.multiply(this.friction);

    // Limit speed
    if (this.velocity.x > this.maxSpeed) {
      this.velocity.x = this.maxSpeed;
    } else if (this.velocity.x < -this.maxSpeed) {
      this.velocity.x = -this.maxSpeed;
    }
    if (this.velocity.y > this.maxSpeed) {
      this.velocity.y = this.maxSpeed;
    } else if (this.velocity.y < -this.maxSpeed) {
      this.velocity.y = -this.maxSpeed;
    }

    this.position.add(this.velocity);
  };

  /* Play against a computer */
  computerPlayer = () => {
    /* If balls about to move into right hand side of screen
    And controller isnt pushed up against the center line */
    if (
      this.ball!.position.x > this.boardCenterX - 30 &&
      this.playerAI.position.x > this.boardCenterX + this.playerAI.radius * 2
    ) {
      /* Work out if ball is in front or behind controller
      Try to hit the ball on right hand side and at the center.
      If ball is in front on controller */
      if (
        this.ball!.position.x + this.ball!.radius <
        this.playerAI.position.x
      ) {
        this.playerAI.velocity.x -= this.playerAI.acceleration;
      } else {
        this.playerAI.velocity.x += this.playerAI.acceleration;
      }
      /* Do same on y axis */
      if (this.ball!.position.y < this.playerAI.position.y) {
        this.playerAI.velocity.y -= this.playerAI.acceleration;
      } else {
        // Is behind
        this.playerAI.velocity.y += this.playerAI.acceleration;
      }
    } else {
      /* Move back to its starting position so its not stuck at center line.
      Give it a range to top in */
      if (
        this.playerAI.position.x > this.playerAI.startingPosX - 50 &&
        this.playerAI.position.x < this.playerAI.startingPosX + 50
      ) {
        this.playerAI.velocity.x = 0;
      } else if (this.playerAI.position.x < this.playerAI.startingPosX - 80) {
        this.playerAI.velocity.x += this.playerAI.acceleration;
      } else {
        this.playerAI.velocity.x -= this.playerAI.acceleration;
      }
    }
  };
}
