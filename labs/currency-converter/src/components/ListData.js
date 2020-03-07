import React, { Component } from 'react'
import { Row, Col, Table } from 'antd' 

export class ListData extends Component {  
    render() {
        const { fromCurrency, toCurrency, rate, products } = this.props
        const columns = [
            {
              title: 'Name',
              dataIndex: 'name',
              key: 'name',
            },
            {
              title: 'Price',
              dataIndex: 'price',
              key: 'price',
            },
            {
              title: `Price (${ fromCurrency })`,
              dataIndex: 'price'
            },
            {
              title: `Price (${ toCurrency })`,
              dataIndex: 'price',
              render: price =>  price * rate 
            },
          ];
        return (
            <Row type='flex'>
                <Col > 
                    <Table 
                        dataSource={ products } 
                        columns={ columns } 
                    />
                </Col>
            </Row>
        )
    }
}

export default ListData
