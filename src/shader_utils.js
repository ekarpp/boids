function get_src(file_name){
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", file_name, false);
  xmlHttp.send(null);
  return xmlHttp.responseText;
}

function create_shader(gl, type, src) {
  var shader = gl.createShader(type);
  gl.shaderSource(shader, src);
  gl.compileShader(shader);
  const ok = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
  if (ok)
    return shader;

  throw gl.getShaderInfoLog(shader);
}

export function create_program(gl, vertex_file, fragment_file) {
  var program = gl.createProgram();
  const vertex = create_shader(gl, gl.VERTEX_SHADER, get_src(vertex_file));
  const fragment = create_shader(gl, gl.FRAGMENT_SHADER, get_src(fragment_file));

  gl.attachShader(program, vertex);
  gl.attachShader(program, fragment);
  gl.linkProgram(program);
  const ok = gl.getProgramParameter(program, gl.LINK_STATUS);

  if (ok) {
    gl.deleteShader(vertex);
    gl.deleteShader(fragment);
    return program;
  }

  throw gl.getProgramInfoLog(program);
}
