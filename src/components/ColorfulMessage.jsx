export const ColorfulMessage = (props) => {
  const contentStyle = {
    color: props.color,
    fontSize: 20,
  };
  return <p style={contentStyle}>{props.children}</p>;
};
