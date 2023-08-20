import { atom } from "recoil";

const textState = atom({
  key: "textState",
  default: "hi, i'm arvind",
});

export default textState;
