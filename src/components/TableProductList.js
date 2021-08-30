import React from 'react';
import Table from './Table'
import BigPanel from './BigPanel'

function TableProductList(){
    return(
        <React.Fragment>
            <BigPanel title={"Listado de productos"} key='productsPanel'>
                <Table heads={[
                  {prop: 'id', title: 'ID'},
                  {prop: 'name', title: 'Nombre'},
                  {prop: 'price', title: 'Precio'},
                  {prop: 'description', title: 'Descripcion'},
                  {prop: 'discount', title: 'Descuento'},
                  {prop: 'brand', title: 'Marca'},
                  {prop: 'category', title: 'Categoria'},
                  {prop: 'color', title: 'Color'},
                  {prop: 'size', title: 'Talle'},
                ]} 
                fetch={'http://localhost:3001/api/v1/productos'}
                key={'products'}
                />
            </BigPanel>
        </React.Fragment>
    )
}

export default TableProductList;
