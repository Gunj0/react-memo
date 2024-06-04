import { Func } from "./05_Function";
import Props from "./10_Props";
import { State } from "./20_UseState";
import { Effect } from "./30_UseEffect";

export const Note = () => {
  return (
    <>
      <Func />
      <Props color="red">props</Props>
      <State />
      <Effect />
    </>
  );
};
