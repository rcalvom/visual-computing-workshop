precision mediump float;

uniform sampler2D texture;
uniform vec2 texOffset;
uniform bool magnifier;
uniform float radius;
uniform float mouse_x;
uniform float mouse_y;
uniform float scale;
uniform float resolution_x;
uniform float resolution_y;

// we need our interpolated tex coord
varying vec2 texcoords2;

vec2 curvatureGenerator(vec2 toPow, float dis){
  float x = dis / radius;
  return toPow * (1.0 - x) * exp(-2.0 * x * x);
}

void main() {
  vec4 texel = texture2D(texture, texcoords2);
  if (magnifier) {
    vec2 u_resolution = vec2(resolution_x, resolution_y);
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    gl_FragColor = texture2D(texture, vec2(uv.x, 1. - uv.y));
    float d = distance(gl_FragCoord.xy, vec2(mouse_x, mouse_y));
    if(d < radius){
      vec2 disV = gl_FragCoord.xy - vec2(mouse_x, mouse_y);
      vec2 trueUV = (gl_FragCoord.xy - (curvatureGenerator(disV, d) * scale) ) / u_resolution.xy;
    	gl_FragColor = texture2D(texture, vec2(trueUV.x, 1. - trueUV.y));
    }
  } else {
    gl_FragColor = texel;
  }
}