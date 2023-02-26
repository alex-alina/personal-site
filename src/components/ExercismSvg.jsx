import React from "react";

const SVG = ({
  style = {},
  fill = "#000",
  width = "100%",
  className = "",
  viewBox = "0 0 2230.4 1817.9",
}) => (
  <svg
    width={width}
    style={style}
    height={width}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      fill={fill}
      d="M0,905.1v-48.3c119-10.6,189.5-56.6,206.8-157.4c14.8-85.8-9.8-249.3-6.7-387.8c3.5-157,107.1-289.2,222.6-305.8  c48-6.9,83-8.3,121.4-0.3c35,6,63.3,26.3,76.4,52v74.2H508.1c-98,11.1-135.6,76.9-157.4,179.9c-26.1,123,101.7,561.8-170.9,593.6  c272.6,31.7,144.8,470.5,170.9,593.6c21.8,103,59.3,168.8,157.4,179.9h112.4v74.2c-13.2,25.7-41.4,46-76.4,52  c-38.4,8-73.4,6.6-121.4-0.3c-115.5-16.6-219.1-148.8-222.6-305.8c-3.1-138.5,21.5-302.1,6.7-387.8C189.5,1010,119,964,0,953.4  V905.1z M2230.4,912.8v-48.3c-119-10.6-189.5-56.6-206.8-157.4c-14.8-85.8,9.8-249.3,6.7-387.8c-3.5-157-107.1-289.2-222.6-305.8  c-48-6.9-83-8.3-121.4-0.3c-35,6-63.3,26.3-76.4,52v74.2h112.4c98,11.1,135.6,76.9,157.4,179.9c26.1,123-101.7,561.8,170.9,593.6  c-272.6,31.7-144.8,470.5-170.9,593.6c-21.8,103-59.3,168.8-157.4,179.9h-112.4v74.2c13.2,25.7,41.4,46,76.4,52  c38.4,8,73.4,6.6,121.4-0.3c115.5-16.6,219.1-148.8,222.6-305.8c3.1-138.5-21.5-302.1-6.7-387.8c17.3-100.8,87.8-146.8,206.8-157.4  V912.8z"
      id="path18"
    />
    <path
      d="M944.3,935.4c0-139.7-112.7-252.9-251.8-252.9S440.7,795.8,440.7,935.4H539c0-85.2,68.7-154.2,153.5-154.2  S846,850.3,846,935.4H944.3z M1796.4,935.4c0-139.7-112.7-252.9-251.8-252.9s-251.8,113.2-251.8,252.9h98.3  c0-85.2,68.7-154.2,153.5-154.2c84.8,0,153.5,69,153.5,154.2H1796.4z M1364.7,1269.3c-6.1,118.6-109.4,220.1-233.8,219.2  c-124.8-0.9-227.3-102.3-233.8-219.2v-74.2h114.7v74.2c5.7,60,59.6,109.2,119.2,107.4c60.5-1.9,116.7-48.2,119.2-107.4v-74.2h114.7  V1269.3z"
      id="path20"
      fill={fill}
    />
  </svg>
);

export default SVG;
