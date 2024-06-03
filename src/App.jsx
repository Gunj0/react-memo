import { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

export const App = () => {
  const clickEvent = () => alert("クリック！");

  const [num, setNum] = useState(0); // 状態パラメータと更新関数
  const onClickCountUp = () => {
    setNum(num + 1); // 関数開始前の値で更新される
    setNum((prev) => prev + 1); // 本当の値を使用して更新される
  };

  // ボタンを押してstateが変わるたびにApp全体が再レンダリングされる
  const [isShowFace, setIsShowFace] = useState(true);
  const onClickToggle = () => {
    setIsShowFace(!isShowFace);
  };

  useEffect(() => {
    // numに変更があった場合のみ実行される
    // 複雑になるのでなるべく使用しないほうがよい
  }, [num]);

  return (
    <>
      <ColorfulMessage color="red">お元気か？</ColorfulMessage>
      <ColorfulMessage color="green">お元気？</ColorfulMessage>
      <button onClick={clickEvent}>ボタン</button>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
      <button onClick={onClickToggle}>on/off</button>
      {isShowFace && <p>OK</p>}
    </>
  );
};
