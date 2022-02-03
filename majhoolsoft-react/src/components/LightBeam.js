function LightBeam() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" y="945" x="578">
      <g id="beam">
        <defs>
          <radialGradient
            id="radial-gradient"
            cx="0.16"
            cy="1.164"
            r="0.806"
            gradientTransform="matrix(.555 -.832 .38 .254 -.372 1.001)"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0" stopColor="#fad16b" stopOpacity="0.659"></stop>
            <stop offset="1" stopColor="#7d6936" stopOpacity="0.541"></stop>
          </radialGradient>
        </defs>
        <path
          fill="url(#radial-gradient)"
          d="M4927.969-923.46v135.509L3246.1-811.175l-92.015-5.358-146.116-45.447v-29.449z"
          data-name="Path 772"
          transform="translate(-3007.969 923.46)"
        ></path>
      </g>
    </svg>
  );
}

export default LightBeam;
