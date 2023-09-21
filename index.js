import DrawBoids from "./src/draw.js";

window.onload = e => {
  const canvas = document.getElementById("canvas");
  const gl = canvas.getContext("webgl2");

  const draw = new DrawBoids(gl);
  draw.init();

  const loop = () => {
    draw.exec();
    requestAnimationFrame(loop);
  };

  requestAnimationFrame(loop);
};
