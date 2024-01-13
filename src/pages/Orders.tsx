import React, { useState } from "react";
import { ordersData } from "../data/dummy";
import { AgGridReact } from "ag-grid-react"; // React Grid Logic
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme

import {
  ColDef,
  ICellRendererParams,
  RowSelectedEvent,
} from "ag-grid-community";
import Header from "../components/Header";
import { useAppSelector } from "../store";
import { AG_GRID_LOCALE_FA } from "../utils/fa";

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
  const { currentMode } = useAppSelector((state) => state.template);
  const [tableData, setTableData] = useState(gridData);
  const [deleteList, setDeleteList] = useState<number[]>([]);

  const rowSelectionHandler = (event: RowSelectedEvent<OrderType, any>) => {
    const changedId = event.node.data?.id;
    if (event.node.isSelected() && changedId) {
      setDeleteList((prev) => [...prev, changedId]);
    } else {
      setDeleteList((prev) => prev.filter((id) => id !== changedId));
    }
  };

  const rowDeleteHandler = () => {
    setTableData((prev) =>
      prev.filter((row) => !deleteList.some((deleteId) => row.id === deleteId))
    );
  };

  return (
    <div className="mx-auto">
      <Header category="Page" title="Orders" />
      <div className="flex px-2 w-740 mx-auto">
        <button
          disabled={deleteList.length === 0}
          className="bg-slate-300 hover:bg-slate-400
        active:bg-slate-500 disabled:bg-slate-50
         disabled:text-slate-300 disabled:cursor-not-allowed
          text-sm rounded-md
        py-1 px-2"
          onClick={rowDeleteHandler}
        >
          Delete
        </button>
      </div>
      <div
        className={
          currentMode === "Light" ? "ag-theme-quartz" : "ag-theme-quartz-dark"
        }
        style={{
          width: "740px",
          height: "550px",
          margin: "2rem auto",
          position: "relative",
          zIndex: 0,
        }}
      >
        <AgGridReact
          localeText={AG_GRID_LOCALE_FA}
          rowSelection={"multiple"}
          onRowSelected={rowSelectionHandler}
          pagination={true}
          paginationPageSize={10}
          rowData={tableData}
          columnDefs={colDefs}
        />
      </div>
    </div>
  );
};

export default Orders;
