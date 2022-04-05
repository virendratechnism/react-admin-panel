import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { Card, Table } from 'react-bootstrap';


const TableView = () => {
  const [data, setData] = useState([]);
  // const [search, setSearch] = useState("");
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos').then((res) => res.json()).then((da) => setData(da)).catch((error) => console.log("Virendra => " + error))
  }, []);
  
  const [columns] = useState([
    {
      name: "User ID",
      selector: (row) => row.userId,
      sortable: true,
      width: "10rem" 
    },
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
      width: "10rem" 
    },
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
      width: "25rem" 
    },
  ]);
  const [customStyle] = useState({
    rows: {
      style: {
        // background: "red",

      },
    },
  });
  // console.log(`i am outside of useEffect`);
  const filteredItems = data.filter(
    (todo) =>
      todo.title &&
      todo.title.toLowerCase().includes(filterText.toLowerCase())
  );
  const subHeaderComponentMemo = React.useMemo(() => {
    // const handleClear = () => {
    //   if (filterText) {
    //     setResetPaginationToggle(!resetPaginationToggle);
    //     setFilterText("");
    //   }
    // };
    return (
      // <FilterComponent
      //  onFilter={(e) => setFilterText(e.target.value)}
      //  onClear={handleClear}
      //  filterText={filterText}
      // />
      <input
        type="text"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
    );
  }, [filterText, resetPaginationToggle]);
  return (
    <Card className='shadow my-3 mx-5' style={{ borderTop: "3px solid #f39c12", padding: '20px 15px'}}  >
      <DataTable
        title="Table View"
        className=""
        customStyles={customStyle}
        columns={columns}
        data={filteredItems}
        pagination
        paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
        subHeader
        subHeaderComponent={subHeaderComponentMemo}
        selectableRows
        persistTableHead
        // striped={true}
        defaultSortAsc
        highlightOnHover 
        
      />
    </Card>
  );
}

export default TableView;
