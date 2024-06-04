/* props */

const Props = ({ color, children }) => {
  const contentStyle = {
    color, // オブジェクトの省略記法
    fontSize: 20,
  };

  return <p style={contentStyle}>{children}</p>;
};

// default export（非推奨）
export default Props;
