//Trabajando con componentes de estado - Clases
//Apis  - Eventos
import React from 'react';

//Importar nuestro componente

import Table from './Table'
import BigPanel from './BigPanel'


function TableProductByCat(){
    return(
        <React.Fragment>
            <BigPanel title={"Listado de productos por categoria"} key='productsPanel'>
                <Table heads={[
                  {prop: 'name', title: 'Categoria'},
                  {prop: 'lengthProducts', title: 'Total'}
                ]} 
                fetch={'http://localhost:3001/api/v1/productos/categories'}
                key={'products'}
                />
            </BigPanel>
        </React.Fragment>
    )
}

export default TableProductByCat;