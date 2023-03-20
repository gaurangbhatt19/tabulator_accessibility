import { useEffect } from "react";
import { Tabulator } from "tabulator-tables";
import "./TabulatorTable.css";

const TabulatorTable: React.FC = () => {
  useEffect(() => {
    let tabledata = [
      { id: 1, name: "Oli Bob", age: "12", col: "red", dob: "" },
      { id: 2, name: "Mary May", age: "1", col: "blue", dob: "14/05/1982" },
      {
        id: 3,
        name: "Christine Lobowski",
        age: "42",
        col: "green",
        dob: "22/05/1982"
      },
      {
        id: 4,
        name: "Brendon Philips",
        age: "125",
        col: "orange",
        dob: "01/08/1980"
      },
      {
        id: 5,
        name: "Margret Marmajuke",
        age: "16",
        col: "yellow",
        dob: "31/01/1999"
      },
      { id: 6, name: "Marta ABC", age: "70", col: "yellow", dob: "31/01/1999" },
      { id: 7, name: "Sue DEF", age: "6", col: "yellow", dob: "31/01/1999" }
    ];
    let table = new Tabulator("#example-table", {
      height: 210,
      data: tabledata,
      initialSort: [{ column: "age", dir: "desc" }],
      layout: "fitColumns", // this works
      columns: [
        { title: "Name", field: "name", width: 150 },
        { title: "Age", field: "age", hozAlign: "left", formatter: "progress" },
        { title: "Favourite Color", field: "col" },
        {
          title: "Date Of Birth",
          field: "dob",
          sorter: "date",
          hozAlign: "center"
        }
      ]
    });
  }, []);
  return <div id="example-table"></div>;
};

export default TabulatorTable;
