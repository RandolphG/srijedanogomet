import React, { useEffect } from "react";
import ErrorBoundary from "../../components/errorBoundary";
import { Game } from "./Game";
import { Timer } from "./Timer";

/**
 * AiGames
 * @description This is the AiGames page.
 */
const AiGames = () => {
  let timer: Timer;
  let RAF: number;

  useEffect(() => {
    let board: any = document.getElementById("canvas");
    let boardContext: any = board.getContext("2d");
    let boardWidth: any = 1000;
    let boardHeight: any = 600;
    let controllers: any[] = [];
    timer = new Timer();

    /* Add ball */
    let ball = new Game();

    /* Add controller & adjust settings */
    let controller = new Game();
    controller.color = "#ff0000";
    controller.radius = 20;
    controller.mass = 50;
    controller.acceleration = 5;
    controller.startingPosX = 125;
    controller.position.x = controller.startingPosX;

    /* Add controller two */
    let playerAI = new Game();
    playerAI.color = "#0000ff";
    playerAI.radius = 20;
    playerAI.mass = 50;
    playerAI.acceleration = 0.2;
    playerAI.startingPosX = boardWidth - 155;
    playerAI.position.x = playerAI.startingPosX;

    const mouseMove = (event: any) => {
      Game.mouse.x = event.clientX - board.offsetLeft;
      Game.mouse.y = event.clientY - board.offsetTop;
      // canvas.style.cursor = "none";
      board.style.cursor = "none";
    };

    /* Set width & height for canvas*/
    board.width = boardWidth;
    board.height = boardHeight;
    board.style.position = "absolute";
    board.style.top = "60px";
    board.style.left = "365px";
    board.style.zIndex = "-98";
    board.addEventListener("mousemove", mouseMove);

    /* draw pitch */
    function drawPitch() {
      let canvasPitch = document.createElement("canvas");
      document.body.appendChild(canvasPitch);
      canvasPitch.style.position = "absolute";
      canvasPitch.style.top = "60px";
      canvasPitch.style.left = "365px";
      canvasPitch.style.zIndex = "-99";
      canvasPitch.style.backgroundColor = "#009900";
      canvasPitch.width = 1000;
      canvasPitch.height = 600;
      let contextPitch: any = canvasPitch.getContext("2d");
      let ratio = 2.5;
      let offsetY = 20;

      //Pitch
      contextPitch.strokeStyle = "#fff";
      contextPitch.fillStyle = "#f00";
      contextPitch.lineWidth = 1.5;
      contextPitch.rect(20 * ratio, offsetY, 360 * ratio, 225 * ratio);
      contextPitch.stroke();

      //Center
      contextPitch.beginPath();
      contextPitch.arc(
        192 * ratio + offsetY,
        112.5 * ratio + offsetY,
        30 * ratio,
        0,
        2 * Math.PI,
        false
      ); //big circle
      contextPitch.moveTo(192 * ratio + offsetY, offsetY);
      contextPitch.lineTo(192 * ratio + offsetY, 225 * ratio + offsetY); //center line
      contextPitch.stroke();
      contextPitch.beginPath();
      contextPitch.arc(
        192 * ratio + offsetY,
        112.5 * ratio + offsetY,
        ratio,
        0,
        2 * Math.PI,
        false
      ); //small circle
      contextPitch.stroke();

      //Big area
      contextPitch.rect(
        20 * ratio,
        41.25 * ratio + offsetY,
        54 * ratio,
        142 * ratio
      ); //left
      contextPitch.rect(
        326 * ratio,
        41.25 * ratio + offsetY,
        54 * ratio,
        142 * ratio
      ); //right

      //Small area
      contextPitch.rect(
        20 * ratio,
        82 * ratio + offsetY,
        18 * ratio,
        60 * ratio
      ); //left
      contextPitch.rect(
        362 * ratio,
        82 * ratio + offsetY,
        18 * ratio,
        60 * ratio
      ); //right
      contextPitch.stroke();

      //circle area
      contextPitch.beginPath();
      contextPitch.arc(
        56 * ratio,
        112.5 * ratio + offsetY,
        ratio,
        0,
        2 * Math.PI,
        false
      ); //left
      contextPitch.stroke();
      contextPitch.beginPath();
      contextPitch.arc(
        344 * ratio,
        112.5 * ratio + offsetY,
        ratio,
        0,
        2 * Math.PI,
        false
      ); //right
      contextPitch.stroke();

      //semi circle
      contextPitch.beginPath();
      contextPitch.arc(
        46 * ratio,
        112.5 * ratio + offsetY,
        40 * ratio,
        -0.25 * Math.PI,
        0.25 * Math.PI,
        false
      ); //left
      contextPitch.stroke();
      contextPitch.beginPath();
      contextPitch.arc(
        354 * ratio,
        112.5 * ratio + offsetY,
        40 * ratio,
        0.75 * Math.PI,
        1.25 * Math.PI,
        false
      ); //left
      contextPitch.stroke();

      //corner
      contextPitch.beginPath();
      contextPitch.arc(
        20 * ratio,
        0 + offsetY,
        7 * ratio,
        0 * Math.PI,
        0.5 * Math.PI,
        false
      ); //top left
      contextPitch.stroke();
      contextPitch.beginPath();
      contextPitch.arc(
        20 * ratio,
        225 * ratio + offsetY,
        7 * ratio,
        -0.5 * Math.PI,
        0 * Math.PI,
        false
      ); //bottom left
      contextPitch.stroke();
      contextPitch.beginPath();
      contextPitch.arc(
        380 * ratio,
        0 + offsetY,
        7 * ratio,
        0.5 * Math.PI,
        1 * Math.PI,
        false
      ); //top right
      contextPitch.stroke();
      contextPitch.beginPath();
      contextPitch.arc(
        380 * ratio,
        225 * ratio + offsetY,
        7 * ratio,
        1 * Math.PI,
        1.5 * Math.PI,
        false
      ); //bottom right
      contextPitch.stroke();

      //Golie
      contextPitch.rect(
        12 * ratio,
        97 * ratio + offsetY,
        8 * ratio,
        24 * ratio + offsetY
      ); //left
      contextPitch.rect(
        380 * ratio,
        97 * ratio + offsetY,
        8 * ratio,
        24 * ratio + offsetY
      ); //right
      contextPitch.stroke();

      //external line
      contextPitch.moveTo(12 * ratio, 24 * ratio + offsetY);
      contextPitch.lineTo(20 * ratio, 24 * ratio + offsetY); //top left
      contextPitch.stroke();

      contextPitch.moveTo(12 * ratio, 201 * ratio + offsetY);
      contextPitch.lineTo(20 * ratio, 201 * ratio + offsetY); //bottom left
      contextPitch.stroke();

      contextPitch.moveTo(380 * ratio, 24 * ratio + offsetY);
      contextPitch.lineTo(388 * ratio, 24 * ratio + offsetY); //top right
      contextPitch.stroke();

      contextPitch.moveTo(380 * ratio, 201 * ratio + offsetY);
      contextPitch.lineTo(388 * ratio, 201 * ratio + offsetY); //bottom right
      contextPitch.stroke();
    }

    /* Run game functions */
    function updateGame() {
      /* Clear board */
      boardContext.clearRect(0, 0, boardWidth, boardHeight);
      /* Draw & contain ball */
      ball.draw();
      ball.move();
      ball.collision();
      ball.keepBallInBoard();

      /* Controllers */
      controller.draw();
      controller.position.copy(Game.mouse);
      controller.velocity.x = Math.sign(ball.velocity.x) == 1 ? -2.5 : 2.5;
      controller.velocity.y = Math.sign(ball.velocity.y) == 1 ? -2.5 : 2.5;

      //controller.move();
      controller.keepControllerInBoard();

      playerAI.draw();
      playerAI.computerPlayer();
      playerAI.move();
      playerAI.keepControllerInBoard();

      RAF = requestAnimationFrame(updateGame);
    }

    /* Store controllers */
    controllers.push(controller, playerAI);

    /* Start game */
    drawPitch();
    updateGame();
  }, []);

  /* pause game */
  function pause() {
    cancelAnimationFrame(RAF);
  }

  const start = () => {
    timer.start();
  };

  const stop = () => {
    timer.stop();
  };

  const reset = () => {
    timer.reset();
  };

  return (
    <ErrorBoundary>
      <div className="control">
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={reset}>Reset</button>
        <button onClick={pause}>Stop RAF</button>
      </div>
      <canvas id="canvas" className="table" />
    </ErrorBoundary>
  );
};

export default AiGames;
