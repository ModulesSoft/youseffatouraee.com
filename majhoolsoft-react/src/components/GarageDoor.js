function GarageDoor({ scrollY }) {
  let transform = {
    transform: `translateY(${scrollY < 140 && -1 * scrollY}px)`,
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="384.264"
      height="136.105"
      viewBox="0 0 384.264 136.105"
      x="1003"
      y="900"
    >
      <g id="garage-door" style={transform}>
        <defs>
          <clipPath id="clip-path">
            <path fill="none" d="M0 0H384.264V136.105H0z"></path>
          </clipPath>
        </defs>
        <g clipPath="url(#clip-path)" data-name="Repeat Grid 1">
          <g transform="translate(-1002.43 -900.24)">
            <g transform="translate(1002.43 900.24)">
              <g data-name="Group 139">
                <path
                  fill="#506a8d"
                  d="M0 0H382.598V131.499H0z"
                  data-name="Rectangle 146"
                  transform="translate(.418)"
                ></path>
                <g data-name="Group 130" transform="translate(0 .064)">
                  <path
                    fill="#3d5980"
                    fillRule="evenodd"
                    d="M3340 5279h382.587v131.438h-156.965z"
                    data-name="Path 671"
                    transform="translate(-3339.541 -5279)"
                  ></path>
                  <path
                    fill="#28324e"
                    d="M0 0H384.264V9.998H0z"
                    data-name="Rectangle 147"
                    transform="translate(0 126.042)"
                  ></path>
                </g>
                <path
                  fill="#28324e"
                  fillRule="evenodd"
                  d="M3722.587 5601v3.869H3340V5601zm0 24.062v3.992H3340v-3.992zm0 25.03v3.99H3340v-3.991zm0 24.184v3.87H3340v-3.87z"
                  data-name="Path 767"
                  transform="translate(-3339.501 -5562.011)"
                ></path>
                <path
                  fill="#28324e"
                  fillRule="evenodd"
                  d="M3489 5379h13.6v13.907H3489zm88.445 0h13.6v13.907h-13.6zm-21.642 0h13.6v13.907h-13.6zm-44.454 0h13.6v13.907h-13.6z"
                  data-name="Path 768"
                  transform="translate(-3470.882 -5366.853)"
                ></path>
                <path
                  fill="#28324e"
                  fillRule="evenodd"
                  d="M5528 5379h13.6v13.907H5528zm88.563 0h13.6v13.907h-13.6zm-21.755 0h13.6v13.907h-13.6zm-44.34 0h13.6v13.907h-13.6z"
                  data-name="Path 769"
                  transform="translate(-5263.746 -5366.853)"
                ></path>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default GarageDoor;
