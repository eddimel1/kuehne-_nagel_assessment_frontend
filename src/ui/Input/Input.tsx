import { ChangeEvent, memo} from "react";

import classes from "./Input.module.scss";
type props = {
  onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
};
export const Input = memo(({ onChangeHandler, value }: props) => {
  return (
    <input
      ref={(el) => el?.focus()}
      className={classes.input}
      value={value}
      onChange={onChangeHandler}
    ></input>
  );
});
