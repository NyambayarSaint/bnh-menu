import { DataGrid } from '@mui/x-data-grid';
import React from 'react';
import { populateProducts, transform, returnParents } from './helper'

const Test = (prop) => {
    const [menu, setMenu] = React.useState([])

    const columns = [
        { field: 'CategoryID', headerName: 'Category ID' },
        { field: 'CategoryName', headerName: 'Ner', editable: true },
        { field: 'catOrder', headerName: 'daraalal', editable: true },
        { field: 'qrMenuIsGrammView', headerName: 'Haruulah eseh' },
    ]

    React.useEffect(() => {
        goFetch()
    }, [])
    const handler = (e, i) => {
        console.log(e, 'see')
        console.log(i ,'dahiad yum bnuu')
    }
    const goFetch = async () => {
        const res = await fetch('https://bnh-menu-service.herokuapp.com', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: prop.id })
        })
        const json = await res.json()
        const parents = returnParents(json)
        const products = populateProducts(parents, json)
        const test = transform(products)
        const tmpArr = []
        test.map(el => tmpArr.push({ ...el, id: Math.random() }))
        setMenu(tmpArr)
        console.log(tmpArr, 'tmpArr')
    }
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={menu}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
                onEditCellPropsChange={handler}
            />
        </div>
    );
};

export default Test;