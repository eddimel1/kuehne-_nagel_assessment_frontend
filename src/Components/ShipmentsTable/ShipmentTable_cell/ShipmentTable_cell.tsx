import { ChangeEvent, memo, useCallback, useState } from "react";
import classes from "./ShipmentTable_cell.module.scss";
import { Input } from "../../../ui/Input/Input";
import "material-icons/iconfont/material-icons.css";
type props = {
  data: string;
  children?: JSX.Element | JSX.Element[];
  row_index: number;
  property: string;
  update_cell_callback: (
    row_index: number,
    field: string,
    new_value: string
  ) => void;
};
export const ShipmentTable_cell = memo(
  ({ data, children, update_cell_callback, property, row_index }: props) => {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [change, setChange] = useState<string>(data);
    const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
      setChange(e.target.value);
    }, []);

    if (editMode) {
      return (
        <td>
          <div className={classes.inputAndDone}>
            <Input onChangeHandler={onChangeHandler} value={change}></Input>
            <div>
              <span
                onClick={() => {
                  update_cell_callback(row_index, property, change);
                  setEditMode(false);
                }}
                className={`material-icons ${classes.icon}`}
              >
                done
              </span>
            </div>
          </div>
        </td>
      );
    }
    return (
      <td onClick={() => setEditMode(true)} className={classes.cell}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {data}
          {children}
        </div>
      </td>
    );
  }
);
