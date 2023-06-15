import classes from "./ShipmentsTable_column.module.scss";
type props = {
  data: string;
};
export const ShipmentsTable_column = ({ data }: props) => {
  return <th className={classes.column}>{data}</th>;
};
