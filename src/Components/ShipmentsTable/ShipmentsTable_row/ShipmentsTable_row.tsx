import { useState } from "react";
import { ShipmentTable_cell } from "../ShipmentTable_cell/ShipmentTable_cell";
import { TableData } from "../ShipmentsTable/types";
import { ShipmentsTable_button_delete } from "../ShipmentsTable_button_delete/ShipmentsTable_button_delete";
import { ShipmentsTable_button_details } from "../ShipmentsTable_button_details/ShipmentsTable_button_details";
import { Modal } from "../../../ui/Modal/Modal";

type props = {
  cells: TableData;
  row_index: number;
  delete_row_callback: (rowIndex: number) => void;
  update_cell_callback: (
    row_index: number,
    field: string,
    new_value: string
  ) => void;
  set_details_callback: (cells: TableData | null) => void;
};
export const ShipmentsTable_row = ({
  cells,
  set_details_callback,
  delete_row_callback,
  update_cell_callback,
  row_index,
}: props) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const tableData_values = Object.values(cells);
  const tableData_keys = Object.keys(cells);
  return (
    <>
      <tr>
        {tableData_values.map((cell, i) => {
          if (tableData_values.length - 1 === i) {
            return (
              <ShipmentTable_cell
                update_cell_callback={update_cell_callback}
                key={i}
                data={cell}
                row_index={row_index}
                property={tableData_keys[i]}
              >
                <div style={{ display: "flex" }}>
                  <ShipmentsTable_button_details
                    callback={() => set_details_callback(cells)}
                  ></ShipmentsTable_button_details>
                  <ShipmentsTable_button_delete
                    callback={() => setOpenModal(true)}
                  ></ShipmentsTable_button_delete>
                </div>
              </ShipmentTable_cell>
            );
          }
          return (
            <ShipmentTable_cell
              row_index={row_index}
              property={tableData_keys[i]}
              update_cell_callback={update_cell_callback}
              key={i}
              data={cell}
            ></ShipmentTable_cell>
          );
        })}
      </tr>
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <div
          style={{
            padding: "2rem",
            display: "flex",
            gap: "1rem",
            fontSize: "1.5rem",
            flexDirection: "column",
          }}
        >
          Are you sure you want to delete ?
          <div style={{ gap: "0.3rem", display: "flex" }}>
            <ConfirmModal_button
              delete_row_callback={() => {
                delete_row_callback(row_index);
                setOpenModal(false);
              }}
            >
              Yes
            </ConfirmModal_button>
            <ConfirmModal_button
              delete_row_callback={() => setOpenModal(false)}
            >
              No
            </ConfirmModal_button>
          </div>
        </div>
      </Modal>
    </>
  );
};

type confirm_modal_props = {
  delete_row_callback: () => void;
  children: JSX.Element | string;
};
export const ConfirmModal_button = ({
  delete_row_callback,
  children,
}: confirm_modal_props) => {
  return (
    <button
      style={{
        padding: "0.5rem",
        background: "black",
        color: "white",
        cursor: "pointer",
      }}
      onClick={() => delete_row_callback()}
    >
      {children}
    </button>
  );
};
