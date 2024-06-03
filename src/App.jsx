import { ColorfulMessage } from "./components/ColorfulMessage";

export const App = () => {
  const clickEvent = () => {
    alert("クリック！");
  };
  return (
    <>
      <ColorfulMessage color="red">お元気？</ColorfulMessage>
      <ColorfulMessage color="green">お元気？</ColorfulMessage>
      <button onClick={clickEvent}>ボタン</button>
    </>
  );
};
