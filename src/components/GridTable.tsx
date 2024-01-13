import React, { useState } from "react";
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

interface DataItem {
  id: number;
}

type GridTableProps<T extends DataItem> = {
  gridData: T[];
  colDefs: ColDef<T>[];
};

function GridTable<T extends DataItem>({
  gridData,
  colDefs,
}: GridTableProps<T>) {
  const { currentMode } = useAppSelector((state) => state.template);
  const [tableData, setTableData] = useState(gridData);
  const [deleteList, setDeleteList] = useState<number[]>([]);

  function rowSelectionHandler<T extends DataItem>(
    event: RowSelectedEvent<T, any>
  ) {
    const changedId = event.node.data?.id;
    if (event.node.isSelected() && changedId) {
      setDeleteList((prev) => [...prev, changedId]);
    } else {
      setDeleteList((prev) => prev.filter((id) => id !== changedId));
    }
  }

  function rowDeleteHandler() {
    setTableData((prev) =>
      prev.filter((row) => !deleteList.some((deleteId) => row.id === deleteId))
    );
    setDeleteList([]);
  }

  return (
    <div className="mx-auto">
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
}

export default GridTable;
