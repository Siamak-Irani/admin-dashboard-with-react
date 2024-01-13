import React from "react";
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme
import { ColDef, ICellRendererParams } from "ag-grid-community";
import Header from "../components/Header";
import GridTable from "../components/GridTable";
import { employeesData } from "../data/dummy";

type EmployeesType = {
  id: number;
  Employee: string;
  Image: string;
  Designation: React.ReactNode;
  country: string;
  "Hire Date": string;
  "Reports To": string;
};

const gridData: EmployeesType[] = employeesData.map((employee) => {
  return {
    id: employee.EmployeeID,
    Image: employee.EmployeeImage,
    Employee: employee.Name,
    Designation: employee.Title,
    country: employee.Country,
    "Hire Date": employee.HireDate,
    "Reports To": employee.ReportsTo,
  };
});

const TableImage = (params: ICellRendererParams) => {
  return (
    <div className="h-full flex items-center">
      <img
        className="block w-8 h-8 rounded-full mr-2"
        src={params.node.data.Image}
      ></img>
      <p>{params.value}</p>
    </div>
  );
};

const colDefs = [
  {
    headerName: "Employee",
    field: "Employee",
    cellRenderer: TableImage,
    headerCheckboxSelection: true,
    checkboxSelection: true,
    showDisabledCheckboxes: true,
  },
  {
    headerName: "Designation",
    field: "Designation",
  },
  {
    headerName: "country",
    field: "country",
    sortable: true,
    filter: true,
  },
  {
    headerName: "Hire Date",
    field: "Hire Date",
    filter: true,
  },
  {
    headerName: "Reports To",
    field: "Reports To",
    sortable: true,
    filter: true,
  },
] as ColDef<EmployeesType>[];

const Employees = () => {
  return (
    <div className="mx-auto">
      <Header category="Page" title="Orders" />
      <GridTable<EmployeesType> colDefs={colDefs} gridData={gridData} />
    </div>
  );
};

export default Employees;
