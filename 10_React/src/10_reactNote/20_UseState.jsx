/* useState */
import { useState } from "react";

export const State = () => {
  const [num, setNum] = useState(100); // 状態パラメータと更新関数の定義
  const onClickCountUp = () => {
    setNum((prev) => prev + 1); // 現時点の値を使用して更新される
    setNum(num + 1); // 関数開始前の値を参照する（バッチ実行）
  };

  return (
    <>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
    </>
  );
};
