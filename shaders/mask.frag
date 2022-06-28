precision mediump float;

uniform sampler2D texture;
uniform vec2 texOffset;
// holds the 3x3 kernel
uniform float mask[9];
uniform bool grey_scale;
uniform bool region;
uniform float radius;
uniform float mouse_x;
uniform float mouse_y;
uniform int type;

// we need our interpolated tex coord
varying vec2 texcoords2;

float luma(vec3 texel) {
  return 0.299 * texel.r + 0.587 * texel.g + 0.114 * texel.b;
}

float Epsilon = 1e-10;
 
vec3 RGBtoHCV(vec3 RGB) {
  // Based on work by Sam Hocevar and Emil Persson
  vec4 P = (RGB.g < RGB.b) ? vec4(RGB.bg, -1.0, 2.0/3.0) : vec4(RGB.gb, 0.0, -1.0/3.0);
  vec4 Q = (RGB.r < P.x) ? vec4(P.xyw, RGB.r) : vec4(RGB.r, P.yzx);
  float C = Q.x - min(Q.w, Q.y);
  float H = abs((1.0 * (Q.w - Q.y)) / (6.0 * C + Epsilon) + 1.0 * Q.z);
  return vec3(H, C, Q.x);
}

float hsv(vec3 texel) {
  vec3 HCV = RGBtoHCV(texel.rgb);
  float S = HCV.y / (HCV.z + Epsilon);
  return HCV.x, S, HCV.z;
}

float hsl(vec3 texel) {
  vec3 HCV = RGBtoHCV(texel.rgb);
  float L = HCV.z - HCV.y * 0.5;
  float S = HCV.y / (1.0 - 1.0 * abs(L * 2.0 - 1.0) + Epsilon);
  return HCV.x, S, L;
}

float HUEtoRGB(float H) {
  float R = abs(H * 6.0 - 3.0) - 1.0;
  float G = 2.0 - abs(H * 6.0 - 2.0);
  float B = 2.0 - abs(H * 6.0 - 4.0);
  return R, G, B;
}

vec3 HCYwts = vec3(0.299, 0.587, 0.114);
float hcy(vec3 texel) {
  // Corrected by David Schaeffer
  vec3 HCV = RGBtoHCV(texel.rgb);
  float Y = texel.r * HCYwts.x + texel.g * HCYwts.y + texel.b * HCYwts.z;
  float temp_x, temp_y, temp_z = HUEtoRGB(HCV.x);
  float Z = temp_x * HCYwts.x + temp_y * HCYwts.y + temp_z * HCYwts.z;
  if (Y < Z) {
    HCV.y *= Z / (Epsilon + Y);
  } else {
    HCV.y *= (1.0 - Z) / (Epsilon + 1.0 - Y);
  }
  return HCV.x, HCV.y, Y;
}

void main() {
  // 1. Use offset to move along texture space.
  // In this case to find the texcoords of the texel neighbours.
  vec2 tc0 = texcoords2 + vec2(-texOffset.s, -texOffset.t);
  vec2 tc1 = texcoords2 + vec2(         0.0, -texOffset.t);
  vec2 tc2 = texcoords2 + vec2(+texOffset.s, -texOffset.t);
  vec2 tc3 = texcoords2 + vec2(-texOffset.s,          0.0);
  // origin (current fragment texcoords)
  vec2 tc4 = texcoords2 + vec2(         0.0,          0.0);
  vec2 tc5 = texcoords2 + vec2(+texOffset.s,          0.0);
  vec2 tc6 = texcoords2 + vec2(-texOffset.s, +texOffset.t);
  vec2 tc7 = texcoords2 + vec2(         0.0, +texOffset.t);
  vec2 tc8 = texcoords2 + vec2(+texOffset.s, +texOffset.t);

  // 2. Sample texel neighbours within the rgba array
  vec4 rgba[9];
  rgba[0] = texture2D(texture, tc0);
  rgba[1] = texture2D(texture, tc1);
  rgba[2] = texture2D(texture, tc2);
  rgba[3] = texture2D(texture, tc3);
  rgba[4] = texture2D(texture, tc4);
  rgba[5] = texture2D(texture, tc5);
  rgba[6] = texture2D(texture, tc6);
  rgba[7] = texture2D(texture, tc7);
  rgba[8] = texture2D(texture, tc8);

  // 3. Apply convolution kernel
  vec4 convolution;
  for (int i = 0; i < 9; i++) {
    convolution += rgba[i]*mask[i];
  }

  // 4. Set color from convolution
  vec4 texel = texture2D(texture, texcoords2);
  float d = distance(gl_FragCoord.xy, vec2(mouse_x, mouse_y));
  vec3 components = vec3(luma(convolution.rgb));
  if (type == 2) {
    components = vec3(hsv(convolution.rgb));
  } else if (type == 3) {
    components = vec3(hsl(convolution.rgb));
  }
  if (region) {
    if (d < radius) {
      gl_FragColor = grey_scale ? vec4(components, 1.0) : vec4(convolution.rgb, 1.0);
    } else {
      gl_FragColor = texel;
    }
  } else {
    gl_FragColor = grey_scale ? vec4(components, 1.0) : vec4(convolution.rgb, 1.0);
  }
}