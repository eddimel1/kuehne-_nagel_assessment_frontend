import "material-icons/iconfont/material-icons.css";
import classes from "./ShipmentsTable_button_details.module.scss";
type props = {
  callback: () => void;
};
export const ShipmentsTable_button_details = ({ callback }: props) => {
  return (
    <button
      className={classes.button_details}
      onClick={(e) => {
        e.stopPropagation();
        callback();
      }}
    >
      <span className="material-icons">preview</span>
    </button>
  );
};
