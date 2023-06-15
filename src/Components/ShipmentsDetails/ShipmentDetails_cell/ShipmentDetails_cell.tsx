import classes from './ShipmentDetails_cell.module.scss'
type props = {
    field:string
    value:string
}
export const ShipmentDetails_cell = ({field,value}:props) => {
  return (
    <div className={classes.cell}>
        <div className={classes.field}>
            {field}
        </div>
        <div className={classes.value}>{value}</div>
    </div>
  )
}
