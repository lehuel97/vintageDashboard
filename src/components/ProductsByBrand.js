//Trabajando con componentes de estado - Clases
//Apis  - Eventos
import React from 'react';

//Importar nuestro componente

import Table from './Table'
import BigPanel from './BigPanel'


function TableProductByBrand(){
    return(
        <React.Fragment>
            <BigPanel title={"Listado de productos por marca"} key='productsPanel'>
                <Table heads={[
                  {prop: 'brand', title: 'Marca'}
                ]} 
                fetch={'http://localhost:3000/api/v1/productos'}
                key={'products'}
                />
            </BigPanel>
        </React.Fragment>
    )
}

export default TableProductByBrand;




