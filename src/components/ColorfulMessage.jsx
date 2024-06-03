// propsの例
// named export
export const ColorfulMessage = ({ color, children }) => {
  const contentStyle = {
    color,
    fontSize: 20,
  };
  return <p style={contentStyle}>{children}</p>;
};

// default export
// export default ColorfulMessage;
