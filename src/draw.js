import { create_program } from "./shader_utils.js";

export default class DrawBoids {
  constructor(gl) {
    this.gl = gl;
    gl.clearColor(0, 0, 0, 0);
  }

  init() {
    this.program = create_program(
      this.gl,
      "shaders/draw.vert",
      "shaders/draw.frag",
    );
  }

  resize_canvas() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    if (this.gl.canvas.width != width || this.gl.canvas.height != height) {
      this.gl.canvas.width = width;
      this.gl.canvas.height = height;
    }
  }

  exec() {
    this.resize_canvas();
    const gl = this.gl;

    gl.useProgram(this.program);
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    gl.clear(gl.COLOR_BUFFER_BIT);

    const vertices = [
      [ 1,  1],
      [ 1, -1],
      [-1,  1],
      [-1, -1],
    ];

    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices.flat()), gl.STATIC_DRAW);

    const vertex_pos = gl.getAttribLocation(this.program, "vertex_pos");
    gl.enableVertexAttribArray(vertex_pos);
    gl.vertexAttribPointer(vertex_pos, 2, gl.FLOAT, false, 0, 0);

    gl.drawArrays(gl.TRIANGLE_STRIP, 0, vertices.length);
  }
}
