import { TableData } from "../../ShipmentsTable/ShipmentsTable/types";
import { ShipmentDetails_cell } from "../ShipmentDetails_cell/ShipmentDetails_cell";
import classes from "./ShipmentsDetails.module.scss";
type props = {
  data: TableData | null;
};
export const ShipmentsDetails = ({ data }: props) => {
  if (!data) return null;
  return (
    <div>
      <div className={classes.title}>Shipment Details</div>
      <hr className={classes.underline}></hr>
      <div className={classes.table_grid}>
        {Object.keys(data).map((key) => {
          return (
            <ShipmentDetails_cell
              field={key}
              value={data[key as keyof typeof data]}
            ></ShipmentDetails_cell>
          );
        })}
      </div>
    </div>
  );
};
