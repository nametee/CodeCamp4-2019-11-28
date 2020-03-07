import React, { Component } from 'react' 
import { Row, Col } from "antd"
import Product from './Product'

export class ProductCategory extends Component { 
    renderProducts = () => { 
        const {products} = this.props 
        return products.map( (item,index )=> <Product key={index} product={item} />  ) 
    }
    
    render() {
        const { categoryName } = this.props
        return (
            <Row  type="flex">
                <Col span={24}>
                    <h4>{ categoryName }</h4>
                </Col>
                <Col span={24} > 
                    { this.renderProducts() }
                </Col>
            </Row> 
        )
    }
}

export default ProductCategory
