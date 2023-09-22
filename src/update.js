import { create_program } from "./shader_utils.js";

export default class UpdateBoids {
  constructor(gl, n) {
    this.gl = gl;
    this.n = n;
  }

  init() {
    this.position_program = create_program(
      this.gl,
      "shaders/update.vert",
      "shaders/position.frag",
    );

    this.velocity_program = create_program(
      this.gl,
      "shaders/update.vert",
      "shaders/velocity.frag",
    );
  }

  exec() {

  }
}
