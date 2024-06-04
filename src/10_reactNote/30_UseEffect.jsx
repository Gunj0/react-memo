/* useEffect */
import { useState, useEffect } from "react";

export const Effect = () => {
  // ボタンを押してstateが変わるたびに全体が再レンダリングされる
  const [isShowFace, setIsShowFace] = useState(true);
  const onClickToggle = () => {
    setIsShowFace(!isShowFace);
  };

  useEffect(() => {
    // numに変更があった場合のみ実行される
    // 複雑になるのでなるべく使用しないほうがよい
  }, [isShowFace]);

  return (
    <>
      <button onClick={onClickToggle}>on/off</button>
      {isShowFace && <p>(^o^)</p>}
    </>
  );
};
