import React, { Component } from 'react';
import {
    Table
} from 'react-bootstrap';

class CustomizedTable extends Component {

    numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    render() {
        return (
            <div class="Customized-table">
                <Table striped bordered hover responsive="md">
                  <thead>
                    <tr>
                      {this.props.data.map(data=>(<th>{data[0]}</th>))}
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.data[0].map((d, index) => {
                        if (index===0) {
                            return;
                        } else {
                            return (
                            <tr>
                                {this.props.data.map(
                                    (rowData, rowIdx)=>{
                                        if(rowIdx===0){
                                            return (<th className="head-col">{rowData[index]}</th>)
                                        } else {
                                            return (<td>{
                                                typeof(rowData[index])=='number'?this.numberWithCommas(rowData[index]):rowData[index]
                                            }</td>)
                                        }
                                    })
                                }
                            </tr>);
                        }
                    })}
                  </tbody>
                </Table>
            </div>
        )
    }
}

export default CustomizedTable;