import { Scoreboard } from "./Scoreboard";

export interface ITimer {
  scoreboard: Scoreboard;
  time: number;
  status: number;
  timer_id: any;
}

/**
 * @class Timer
 * @classdesc Represents timer in the game.
 */
export class Timer implements ITimer {
  scoreboard: Scoreboard;
  time: number;
  status: number;
  timer_id: any;

  constructor() {
    this.scoreboard = new Scoreboard();
    // this.scoreboard.updateScore();
    this.time = 5400;
    this.status = 0;
    this.reset();
  }

  start = () => {
    if (this.status == 0) {
      let that = this;
      this.status = 1;
      this.timer_id = setInterval(function () {
        that.time--;
        if (that.time < 0) {
          that.stop();
          alert("time out");
        } else {
          that.generateTime();
        }
      }, 1000);
    }
  };

  stop = () => {
    if (this.status == 1) {
      this.status = 0;
      clearInterval(this.timer_id);
    }
  };

  reset = () => {
    this.time = 10;
    this.generateTime();
  };

  getTime = () => {
    return this.time;
  };

  getStatus = () => {
    return this.status;
  };

  generateTime = () => {
    let second: any = this.time % 60;
    let minute: any = Math.floor(this.time / 60) % 60;
    let homeScore = Math.floor(Math.random() * 5);
    let awayScore = Math.floor(Math.random() * 5);
    second = second < 10 ? "0" + second : second;
    minute = minute < 10 ? "0" + minute : minute;
    this.scoreboard.updateTime(minute, second);
  };
}
