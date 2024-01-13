import React from "react";
import { ordersData } from "../data/dummy";
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme
import { ColDef, ICellRendererParams } from "ag-grid-community";
import Header from "../components/Header";
import GridTable from "../components/GridTable";

type OrderType = {
  id: number;
  Image: React.ReactNode;
  Item: string;
  "Customer name": string;
  "Total amount": number;
  Status: string;
};

const gridData: OrderType[] = ordersData.map((order) => {
  return {
    id: order.OrderID,
    Image: order.ProductImage,
    Item: order.OrderItems,
    "Customer name": order.CustomerName,
    "Total amount": order.TotalAmount,
    Status: order.Status,
  };
});

const TableImage = (params: ICellRendererParams) => {
  return (
    <div className="h-full flex items-center">
      <img className="block w-8 h-8 rounded-full" src={params.value}></img>
    </div>
  );
};

const colDefs = [
  {
    headerName: "Image",
    field: "Image",
    cellRenderer: TableImage,
    sortable: false,
    width: 100,
    headerCheckboxSelection: true,
    checkboxSelection: true,
    showDisabledCheckboxes: true,
  },
  {
    headerName: "Item",
    field: "Item",
    sortable: true,
    filter: true,
  },
  {
    headerName: "Customer name",
    field: "Customer name",
    filter: true,
  },
  {
    headerName: "Total amount",
    field: "Total amount",
    sortable: true,
    filter: true,
    width: 140,
  },
  {
    headerName: "Status",
    field: "Status",
    filter: true,
    width: 100,
    sortable: false,
  },
] as ColDef<OrderType>[];

const Orders = () => {
  return (
    <div className="mx-auto">
      <Header category="Page" title="Orders" />
      <GridTable<OrderType> colDefs={colDefs} gridData={gridData} />
    </div>
  );
};

export default Orders;
