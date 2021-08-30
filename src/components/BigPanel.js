import React, { Component } from 'react';

class BigPanel extends Component {
  constructor(props){
    super(props);
    this.state = {
        title: this.props.title
    }
  }

  componentDidMount(){
 
  }

  render(){
    return(
        <div className="col-lg-6 mb-4 ">						
          <div className="card shadow mb-4">
            <div className="card-header py-3 gris">
              <h6 className="m-0 font-weight-bold icons-color ">{ this.state.title }</h6>
            </div>
            <div className="card-body">

            { /* Component */ }

            { this.props.children }

            </div>
          </div>
        </div>
    )
  }  


}




export default BigPanel;