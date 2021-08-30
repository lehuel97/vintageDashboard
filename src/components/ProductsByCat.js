//Trabajando con componentes de estado - Clases
//Apis  - Eventos
import React, {Component} from 'react';

//Importar nuestro componente
import Category from './Category';
import ProductsByBrand from './ProductsByBrand';

class ProductsByCat extends Component{
    constructor(props){
        super(props)
        this.state ={
            metrics:[]
        }
    }
    

    componentDidMount() {
        fetch("http://localhost:3001/api/v1/productos")
            .then(result => result.json())
            .then(result => {



                this.setState({
                    metrics:[{

                            title: "Categoría mujer",
                            color: "info"
                           
                        }
                        ]
                   
                });
            })
    }




    render(){
        return (
            <React.Fragment>
                {/*<!-- Genres in DB -->*/}
                <div className="col-lg-6 mb-4">						
                    <div className="card shadow mb-4 " >
                        <div className="card-header py-3 gris">
                        <h5 className="m-0 font-weight-bold text-white-800">Productos por categoría</h5>
                        </div>
                        <div className="card-body fondoCaja">
                            <div  className="row">
                                {
                                    //console.log(this.state.genresList)
                                    //pregunto si existe primero
                                    this.state.metrics && this.state.metrics.length ? this.state.metrics.map((metric, index)=>{
                                        return <Category title={metric.title} value={metric.value} key={index} />
                                    }) : null
                                                                    
                                }
                            </div>
                        </div>
                    </div>

                    {/*<!-- Productos por marca -->*/}
						<ProductsByBrand />
                    {/*<!--End Productos por marca-->*/}
                </div>
    
    </React.Fragment>
    )
    }
}
export default ProductsByCat;
