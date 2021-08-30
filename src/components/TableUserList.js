import React from 'react';
import Table from './Table'
import BigPanel from './BigPanel'

function TableProductList(){
    return(
        <React.Fragment>
            <BigPanel title={"Listado de usuarios"} key={'usersPanel'}>
              <Table 
                heads={[
                  {prop: 'id', title: 'ID'},
                  {prop: 'firstName', title: 'Nombre'},
                  {prop: 'email', title: 'Correo'}
                ]} 
                fetch={'http://localhost:3001/api/v1/user'}
                key={'users'}
              />
            </BigPanel> 
        </React.Fragment>
    )
}

export default TableProductList;