import React, { Component } from 'react' 
import {Row, Col } from "antd"
import ProductCategory from "./ProductCategory"     

export class ProductTable extends Component { 
    renderProductCategory = () => {  
        const { products } = this.props 
        let result = []
        let count = 0 
        new Set(products.map(item => item.category)).forEach(item => {
            count += 1
            const productItem = products.filter(i => i.category == item) 
            result.push(<ProductCategory 
                key= {count}
                categoryName ={ item } 
                products={ productItem}
            /> ) 
        }) 
        return result
    }

    render() {
        return (
            <Row type="flex"> 
                <Col span={ 24 }>
                    <Row type="flex" justify="space-around"> 
                        <Col span={12}>Name</Col> 
                        <Col span={12}>Price</Col>
                    </Row>
                </Col>
                <Col span={ 24 }> 
                    { this.renderProductCategory() }
                </Col>
            </Row> 
        )
    }
}

export default ProductTable
