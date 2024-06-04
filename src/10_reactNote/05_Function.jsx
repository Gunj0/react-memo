/* 関数埋め込み */

// named export（推奨）
export const Func = () => {
  const onClickAlert = () => alert("クリック！");

  return <button onClick={onClickAlert}>アラート</button>;
};
