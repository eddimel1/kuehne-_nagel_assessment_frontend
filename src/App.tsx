import {useState } from "react";
import "./App.css";
import { ShipmentsTable } from "./Components/ShipmentsTable/ShipmentsTable/ShipmentsTable";
import { TableData } from "./Components/ShipmentsTable/ShipmentsTable/types";
import axios from "axios";
import shipments from "./MockData/Shipments.json";
//just to get type

function App() {
  const [data, setData] = useState<TableData[]>();

  //always overload , i cant even test it once :(
  //   useEffect(()=>{
  //      axios.get('https://my.api.mockaroo.com/shipments.json?key=5e0b62d0').then((res)=>setData(res.data))
  //   },[])
  return (
    <>
      <ShipmentsTable
        cols={Object.keys(shipments[0])}
        rows={shipments}
      ></ShipmentsTable>
    </>
  );
}

export default App;
