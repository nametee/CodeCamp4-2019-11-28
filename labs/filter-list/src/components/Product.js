import React, { Component } from 'react'  
import { Row, Col } from "antd"

export class Product extends Component { 

    render() {
        const { product }  = this.props 
        const colorText = {color : product.stocked ?  'black' : 'red' }
        return (
            <Row type="flex">
                <Col span={12}>
                    <span style={colorText}> { product.name }</span> 
                </Col>
                <Col span={12}>
                    <span style={colorText}> { product.price }</span>  
                </Col>  
            </Row>
        )
    }
}

export default Product
