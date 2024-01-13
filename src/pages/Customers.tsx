import React from "react";
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme
import { ColDef, ICellRendererParams } from "ag-grid-community";
import Header from "../components/Header";
import GridTable from "../components/GridTable";
import { customersData } from "../data/dummy";

type CustomersType = {
  id: number;
  Name: string;
  "Project Name": string;
  CustomerImage: string;
  Status: string;
  Weeks: string;
  Budget: string;
  Location: string;
};

const gridData: CustomersType[] = customersData.map((customer) => {
  return {
    id: customer.CustomerID,
    Name: customer.CustomerName,
    "Project Name": customer.ProjectName,
    CustomerImage: customer.CustomerImage,
    Status: customer.Status,
    Weeks: customer.Weeks,
    Budget: customer.Budget,
    Location: customer.Location,
  };
});

const TableImage = (params: ICellRendererParams) => {
  return (
    <div className="h-full flex items-center">
      <img
        className="block w-8 h-8 rounded-full mr-2"
        src={params.node.data.CustomerImage}
      ></img>
      <p>{params.value}</p>
    </div>
  );
};

const colDefs = [
  {
    headerName: "Name",
    field: "Name",
    cellRenderer: TableImage,
    headerCheckboxSelection: true,
    checkboxSelection: true,
    showDisabledCheckboxes: true,
  },
  {
    headerName: "Project Name",
    field: "Project Name",
  },
  {
    headerName: "Status",
    field: "Status",
    sortable: true,
    filter: true,
    width: 110,
  },
  {
    headerName: "Weeks",
    field: "Weeks",
    filter: true,
    width: 110,
  },
  {
    headerName: "Budget",
    field: "Budget",
    sortable: true,
    filter: true,
    width: 110,
  },
  {
    headerName: "Location",
    field: "Location",
    sortable: true,
    filter: true,
    width: 110,
  },
] as ColDef<CustomersType>[];

const Customers = () => {
  return (
    <div className="mx-auto">
      <Header category="Page" title="Orders" />
      <GridTable<CustomersType> colDefs={colDefs} gridData={gridData} />
    </div>
  );
};

export default Customers;
