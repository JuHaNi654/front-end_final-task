import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';


const CustTraining = (props) => {
    let testi = [props.testi]
    const columns = [{
        Header: 'Enrolled Customers',
        columns: [
            {
                Header: 'Firstname',
                accessor: 'firstname'
            },
            {
                Header: 'Lastname',
                accessor: 'lastname'
            }
        ]
    }]
    return (
        <div className="container">
            <ReactTable data={testi} columns={columns}
                sortable={true} minRows={3}
                showPaginationBottom={false}/>
        </div>
    )
}

export default CustTraining