import { svgWrapper,svgBottom,svgData } from "./svgUtils.js";

const leetcodeSVG = (data,width,height,x) => {
  return `
  ${svgWrapper(width,height,x)}
  <g class="top">
      <g class="logo">
          <path
              d="M289.333 98.205C289.333 94.9896 286.889 92.3723 283.873 92.3723H240.263C237.247 92.3723 234.803 94.9896 234.803 98.205C234.803 101.42 237.242 104.038 240.263 104.038H283.873C286.889 104.042 289.333 101.425 289.333 98.205Z"
              fill="#B3B1B0" />
          <path
              d="M209.088 114.81L227.778 133.708C231.994 137.95 237.822 140 244.257 140C250.692 140 256.521 137.781 260.746 133.526L271.96 122.099C274.17 119.872 274.092 116.184 271.791 113.866C269.49 111.547 265.833 111.469 263.627 113.697L252.031 124.994C250.029 127.017 247.256 127.862 244.192 127.862C241.129 127.862 238.36 127.017 236.349 124.994L217.724 106.087C215.718 104.064 214.708 101.104 214.708 98.0143C214.708 94.9247 215.718 92.134 217.724 90.1103L236.293 71.1303C238.299 69.1067 241.129 68.3353 244.188 68.3353C247.247 68.3353 250.021 69.1803 252.027 71.204L263.623 82.4967C265.833 84.7283 269.49 84.6503 271.791 82.332C274.092 80.0093 274.17 76.3217 271.96 74.0943L260.746 62.6717C257.895 59.8228 254.305 57.8267 250.38 56.9083L250.233 56.878L260.837 46.0317C263.055 43.8043 262.977 40.1123 260.676 37.794C258.375 35.4757 254.714 35.402 252.499 37.6293L209.088 81.396C204.872 85.6513 202.666 91.523 202.666 98.0143C202.666 104.506 204.872 110.564 209.088 114.81Z"
              fill="#E7A41F" />
          <path
              d="M229.165 134.861C228.41 134.439 227.718 133.912 227.111 133.296C221.361 127.52 215.584 121.77 209.847 115.976C201.228 107.275 199.872 94.5824 206.441 84.2561C207.491 82.6777 208.71 81.2188 210.077 79.9055L251.776 38.1191C254.485 35.4064 258.268 35.2938 260.785 37.8288C263.212 40.2685 263.069 44.1338 260.447 46.7815C257.115 50.1441 253.778 53.4981 250.442 56.8565C250.264 57.3851 249.835 57.7231 249.467 58.1001C245.727 61.8961 241.883 65.5924 238.196 69.4448C237.715 69.9474 237.06 70.2508 236.584 70.7664C230.417 76.9328 224.177 83.0298 218.098 89.2785C213.179 94.3355 213.344 102.01 218.392 107.162C224.06 112.951 229.828 118.645 235.557 124.383C235.847 124.673 236.146 124.955 236.441 125.241C238.469 126.554 238.495 130.657 237.234 132.482C235.843 134.497 234.027 135.732 231.457 135.636C230.595 135.61 229.884 135.264 229.165 134.861Z"
              fill="#070706" />

      </g>
      <g transform="translate(0,190)" class="user">
          <text x="50%" y="0%" class="username" text-anchor="middle">${data.username}</text>
          <!-- <path
      d="M323 182C322.45 182 321.979 181.804 321.588 181.413C321.196 181.021 321 180.55 321 180V166C321 165.45 321.196 164.979 321.588 164.588C321.979 164.196 322.45 164 323 164H330V166H323V180H337V173H339V180C339 180.55 338.804 181.021 338.413 181.413C338.021 181.804 337.55 182 337 182H323ZM327.7 176.7L326.3 175.3L335.6 166H332V164H339V171H337V167.4L327.7 176.7Z"
      fill="white" /> -->
      </g>
  </g>
  ${svgData(data)}
  ${svgBottom()}
</svg>`;
};

export { leetcodeSVG };
