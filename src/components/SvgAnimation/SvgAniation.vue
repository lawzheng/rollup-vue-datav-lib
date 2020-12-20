<template>
  <div>
    <div>
      <svg width="440" height="440" viewbox="0 0 440 440">
        <circle cx="220" cy="220" r="170" stroke-width="50" stroke="#D1D3D7" fill="none"></circle>
        <circle
          class="circle"
          cx="220"
          cy="220"
          r="170"
          stroke-width="50"
          stroke="#00A5E0"
          fill="none"
          transform="matrix(0,-1,1,0,0,440)"
        />
      </svg>
    </div>
    <div>
      <svg width="200" height="200" viewBox="0 0 200 200">
        <rect x="0" y="0" width="200" height="200" fill="none" stroke="grey" stroke-width="8"></rect>
        <rect x="0" y="0" width="200" height="200" fill="none" stroke="blue" stroke-width="8" class="rect" transform="matrix(0,1,-1,0,200,0)"></rect>
      </svg>
    </div>
    <div>
      <svg viewBox="0 0 1024 1024" width="200" height="200">
        <path class="logo" d="M844.832 885.344c-30.485333-20.714667-77.781333-18.965333-144.053333 9.386667A425.024 425.024 0 0 1 512 938.666667C276.362667 938.666667 85.333333 747.637333 85.333333 512S276.362667 85.333333 512 85.333333s426.666667 191.029333 426.666667 426.666667a425.013333 425.013333 0 0 1-44.405334 189.717333 32 32 0 0 1-57.301333-28.490666A361.013333 361.013333 0 0 0 874.666667 512c0-200.298667-162.368-362.666667-362.666667-362.666667S149.333333 311.701333 149.333333 512s162.368 362.666667 362.666667 362.666667c56.704 0 111.488-13.013333 161.12-37.653334l1.6-0.746666c84.746667-36.437333 154.176-39.125333 206.08-3.861334a32 32 0 1 1-35.968 52.938667zM512 416a64 64 0 1 1 0-128 64 64 0 0 1 0 128z m160 160a64 64 0 1 1 0-128 64 64 0 0 1 0 128zM512 736a64 64 0 1 1 0-128 64 64 0 0 1 0 128zM352 576a64 64 0 1 1 0-128 64 64 0 0 1 0 128z"></path>
      </svg>
    </div>
    <div>
      <svg width="400" height="400">
        <rect x="0" y="0" width="100" height="100" fill="red">
          <set attributeName="x" attributeType="XML" to="10" begin="1s" />
          <set attributeName="x" attributeType="XML" to="20" begin="2s" />
          <set attributeName="x" attributeType="XML" to="30" begin="3s" />
          <set attributeName="x" attributeType="XML" to="40" begin="4s" />
          <set attributeName="x" attributeType="XML" to="50" begin="5s" />
        </rect>
      </svg>
    </div>
    <div>
      <svg width="500" height="200" viewBox="0 0 500 200">
        <circle cx="0" cy="0" r="30" fill="blue" stroke="black" stroke-width="1">
          <animate attributeName="cx" from="0" to="200" dur="5s" repeatCount="indefinite" />
          <animate attributeName="cy" from="0" to="200" dur="5s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
    <div>
      <svg width="400" height="400">
        <polygon points="30 30 70 30 90 70 10 70" fill="#fcc" stroke="black">
          <animate attributeName="points" attributeType="XML" to="50 30 70 50 50 90 30 50" dur="5s" fill="freeze" repeatCount="1" />
        </polygon>
      </svg>
    </div>
    <div>
      <svg width="200" height="200" viewBox="0 0 200 200">
        <rect x="0" y="0" width="10" height="10" fill="red">
          <animateMotion
            id="forward-rect"
            path="M 10 10 L 110 10 L 110 110 L 10 110"
            dur="2s"
            rotate="0"
            fill="freeze"
            begin="0; backward-rect.end + 0.5s"
          />
          <animateMotion
            id="backward-rect"
            path="M 10 110 L 110 110 L 110 10 L 10 10"
            dur="2s"
            rotate="0"
            fill="freeze"
            begin="forward-rect.end + 0.5s"
          />
          <animate
            id="red-to-blue"
            attributeType="XML"
            attributeName="fill"
            begin="0; blue-to-red.end + 1s"
            from="red"
            to="blue"
            dur="2s"
            fill="freeze"
          />
          <animate
            id="blue-to-red"
            attributeType="XML"
            attributeName="fill"
            begin="red-to-blue.end + 1s"
            from="blue"
            to="red"
            dur="2s"
            fill="freeze"
          />
        </rect>
        <path id="motion-path" d="M 10 10 L 110 10 L 110 110 L 10 110" fill="none" stroke="green" />
      </svg>
    </div>
    <div>
      <svg viewBox="0 0 200 200" width="200" height="200">
        <g id="rect1">
          <rect x="0" y="0" rx="0" ry="0" width="100" height="100" fill="red">
            <animate
              attributeType="XML"
              attributeName="fill"
              from="red"
              to="green"
              begin="rect1.click"
              dur="2s"
              fill="freeze"
            />
          </rect>
        </g>
        <animateTransform
          attributeType="XML"
          attributeName="transform"
          type="translate"
          from="0, 0"
          to="50, 50"
          begin="rect1.click"
          dur="2s"
          fill="freeze"
        />
        <rect x="0" y="100" width="100" height="100" fill="blue">
          <animate
            attributeType="XML"
            attributeName="fill"
            from="blue"
            to="green"
            begin="rect1.click"
            dur="2s"
            fill="freeze"
          />
        </rect>
      </svg>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SvgAnimation'
  }
</script>

<style scoped>
  .circle {
    animation: circle 5s linear infinite;
  }

  @keyframes circle {
    from {
      stroke-dasharray: 0 1069;
    }
    to {
      stroke-dasharray: 1069 0;
    }
  }
  .rect {
    animation: rect 5s linear infinite;
  }

  @keyframes rect {
    from {
      stroke-dasharray: 0 800;
    }
    to {
      stroke-dasharray: 800 0;
    }
  }
  .logo {
    fill: none;
    stroke: #333;
    stroke-width: 5;
    animation: logo 5s linear forwards;
  }
  @keyframes logo {
    0% {
      fill: white;
      stroke-dasharray: 6622;
      stroke-dashoffset: 6622;
    }
    50% {
      fill: white;
      stroke-dasharray: 6622;
      stroke-dashoffset: 0;
    }
    75% {
      fill: blue;
    }
    100% {
      fill: red;
    }
  }
</style>
