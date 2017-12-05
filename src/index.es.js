import React from "react";
import PropTypes from "prop-types";

function Holder(props) {
  const { width, height, fill, stroke, text, textColor, src, ...rest } = props;
  const styles = {
    position: "relative",
    overflow: "hidden",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "block"
  };
  if (src) styles.backgroundImage = `url(${src})`;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${width} ${height}`}
      width="100%"
      style={styles}
      dir="ltr"
      {...rest}
    >
      <rect width={width} height={height} fill={src ? "transparent" : fill} />
      {!src && (
        <text
          x="50%"
          y="50%"
          alignmentBaseline="middle"
          textAnchor="middle"
          fill={textColor}
          fontSize={height / 10}
          fontWeight="bold"
          style={{ position: "absolute", fontWeight: "bold" }}
        >
          {text || `${width}x${height}`}
        </text>
      )}
    </svg>
  );
}

export default Holder;

Holder.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
  stroke: PropTypes.string,
  text: PropTypes.string,
  textColor: PropTypes.string,
  src: PropTypes.string
};
Holder.defaultProps = {
  width: 100,
  height: 100,
  fill: "#ccc",
  stroke: null,
  text: null,
  textColor: "#777",
  src: null
};
