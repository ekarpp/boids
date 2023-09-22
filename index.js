import DrawBoids from "./src/draw.js";
import UpdateBoids from "./src/update.js";

window.onload = e => {
  const canvas = document.getElementById("canvas");
  const gl = canvas.getContext("webgl2");

  const draw = new DrawBoids(gl);
  draw.init();

  const update = new UpdateBoids(gl, 64);
  update.init();

  const loop = () => {
    update.exec();
    draw.exec();
    requestAnimationFrame(loop);
  };

  requestAnimationFrame(loop);
};
