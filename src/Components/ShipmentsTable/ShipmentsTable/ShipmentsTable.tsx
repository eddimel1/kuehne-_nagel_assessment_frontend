import { useCallback, useLayoutEffect, useState } from "react";
import { Modal } from "../../../ui/Modal/Modal";
import { ShipmentsTable_column } from "../ShipmentsTable_column/ShipmentsTable_column";
import { ShipmentsTable_row } from "../ShipmentsTable_row/ShipmentsTable_row";
import { TableData } from "./types";
import useDoPropsChanged from "../../../Hooks/DoPropsChange";
import classes from "./ShipmentsTable.module.scss";
import { ShipmentsDetails } from "../../ShipmentsDetails/ShipmentsDetails/ShipmentsDetails";

type props = {
  rows: TableData[];
  cols: string[];
};
export const ShipmentsTable = ({ rows, cols }: props) => {
  const [details, setDetails] = useState<TableData | null>(null);
  const [_rows, setRows] = useState<TableData[]>();
  const [isOpen, setOpen] = useState<boolean>(false);
  const doesPropsChange1 = useDoPropsChanged(rows);
  const doesPropsChange2 = useDoPropsChanged(cols);
  const delete_row_callback = useCallback((i: number) => {
    setRows((prev) =>
      prev ? [...prev.slice(0, i), ...prev.slice(i + 1)] : prev
    );
  }, []);
  const set_details_callback = useCallback((cells: TableData | null) => {
    setDetails(cells);
    setOpen(true);
  }, []);

  const update_cell_data = useCallback(
    (row_index: number, field: string, new_value: string) => {
      setRows((prev) => {
        return prev?.map((item, i) => {
          if (row_index === i) {
            return { ...item, [field]: new_value };
          }
          return item;
        });
      });
    },
    []
  );
  //we need to  know if a parent component fetched new data so we need to replace an old data with a new one.
  //otherwise we will just update our state safely internally
    //get fetched data and map to the state of this component
    //this component should not be responsible for data fetching 
  useLayoutEffect(() => {
    setRows(rows);
  }, [doesPropsChange1,doesPropsChange2]);
  return (
    <>
      <table className={classes.table} cellSpacing={20}>
        {_rows &&
          cols.map((col, i) => {
            return (
              <ShipmentsTable_column key={i} data={col}></ShipmentsTable_column>
            );
          })}
        <tbody>
          {_rows &&
            _rows.map((row, i) => {
              return (
                <ShipmentsTable_row
                  key={i}
                  update_cell_callback={update_cell_data}
                  delete_row_callback={delete_row_callback}
                  set_details_callback={set_details_callback}
                  row_index={i}
                  cells={row}
                ></ShipmentsTable_row>
              );
            })}
        </tbody>
      </table>
      <Modal onClose={() => setOpen(false)} open={isOpen}>
        <ShipmentsDetails data={details}></ShipmentsDetails>
      </Modal>
    </>
  );
};
