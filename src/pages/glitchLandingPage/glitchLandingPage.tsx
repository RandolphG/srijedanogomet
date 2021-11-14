import React, { useEffect } from "react";

const Glitch = () => {
  useEffect(() => {
    const canvas: any = document.querySelector("canvas");
    console.log(`canvas`, canvas);
    console.log(`window`, window);
    const ctx: any = canvas.getContext("2d");
    const colors = [
      "#b4b2b5",
      "#dfd73f",
      "#6ed2dc",
      "#66cf5d",
      "#c542cb",
      "#d0535e",
      "#3733c9",
    ];

    let linePos = 0;
    let rAF: any;

    let innerWidth: any = window.innerWidth;
    let innerHeight: any = window.innerHeight;

    canvas.width = innerWidth;
    canvas.height = innerHeight;

    function texts(color: any) {
      ctx.font = "20vh Bungee Outline";
      ctx.shadowBlur = 30;
      ctx.shadowColor = color;
      ctx.fillStyle = color;
      ctx.setTransform(1, -0.15, 0, 1, 0, -10);
      ctx.fillText("Glitch", innerWidth / 2, innerHeight / 2 - 5);

      ctx.fillStyle = "white";
      ctx.shadowBlur = 30;
      ctx.shadowColor = color;
      ctx.fillText("Glitch", innerWidth / 2, innerHeight / 2);

      ctx.font = "18vh Bungee Inline";
      ctx.shadowBlur = 30;
      ctx.shadowColor = color;
      ctx.fillStyle = "#fff";
      ctx.setTransform(1, -0.15, 0, 1, 0, -10);
      ctx.fillText(
        "Effect",
        innerWidth / 2,
        innerHeight / 2 + innerHeight / 10
      );

      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
    }

    function glitch() {
      rAF = window.requestAnimationFrame(glitch);

      ctx.fillStyle = "#1a191c";
      ctx.fillRect(0, 0, innerWidth, innerHeight);

      texts(colors[Math.floor(Math.random() * 7)]);
      ctx.shadowBlur = 0;
      ctx.shadowColor = "none";
      ctx.setTransform(1, 0, 0, 1, 0, 0);

      for (let i = 0; i < 1000; i++) {
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.01})`;
        ctx.fillRect(
          Math.floor(Math.random() * innerWidth),
          Math.floor(Math.random() * innerHeight),
          Math.floor(Math.random() * 30) + 1,
          Math.floor(Math.random() * 30) + 1
        );

        ctx.fillStyle = `rgba(0,0,0,${Math.random() * 0.1})`;
        ctx.fillRect(
          Math.floor(Math.random() * innerWidth),
          Math.floor(Math.random() * innerHeight),
          Math.floor(Math.random() * 25) + 1,
          Math.floor(Math.random() * 25) + 1
        );
      }

      ctx.fillStyle = colors[Math.floor(Math.random() * 40)];
      ctx.fillRect(
        Math.random() * innerWidth,
        Math.random() * innerHeight,
        Math.random() * innerWidth,
        Math.random() * innerHeight
      );

      ctx.setTransform(1, 0, 0, 0.8, 0.2, 0);
    }

    glitch();

    window.addEventListener("resize", () => {
      canvas.width = innerWidth;
      canvas.height = innerHeight;
    });
  }, []);

  return <canvas />;
};

export default Glitch;
