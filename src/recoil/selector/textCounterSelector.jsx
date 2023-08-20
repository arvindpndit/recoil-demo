import { selector } from "recoil";
import textState from "../atom/textAtom";

const characterCountState = selector({
  key: "characterCountState",
  get: ({ get }) => {
    const text = get(textState);
    return text.length;
  },
});

export default characterCountState;
