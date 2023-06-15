import "material-icons/iconfont/material-icons.css";
import classes from "./ShipmentsTable_button_delete.module.scss";
type props = {
  callback: () => void;
};
export const ShipmentsTable_button_delete = ({ callback }: props) => {
  return (
    <button
      className={classes.button_delete}
      onClick={(e) => {
        e.stopPropagation();
        callback();
      }}
    >
      <span className="material-icons">delete</span>
    </button>
  );
};
