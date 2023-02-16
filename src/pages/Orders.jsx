import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
} from "@syncfusion/ej2-react-grids";
import React from "react";
import { ordersData, ordersGrid } from "../data/dummy";
import { Header } from "../components";
import { useStateContext } from "../context/ContextProvider";


const Orders = () => {
  const {currentMode}=useStateContext()
  return (
    <div className="m-4 md:m-10 mt-24 p-5 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl"
    style={{backgroundColor:currentMode==="Dark"?"#33373E":""}}>
      <Header category="Page" title="Orders"></Header>
      <GridComponent id="gridcomp" dataSource={ordersData} allowPaging allowSorting>
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item}></ColumnDirective>
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Resize,
            Sort,
            ContextMenu,
            Filter,
            Page,
            ExcelExport,
            Edit,
            PdfExport,
          ]}
        />
      </GridComponent>
    </div>
  );
};

export default Orders;
