import React, { Component } from 'react' 
import { Row, Col } from "antd"
import SearchBar from "./components/SearchBar"
import ProductTable from "./components/ProductTable" 
import axios from "axios"
import 'antd/dist/antd.css'

export class FilterList extends Component { 
    /*
    productsList: [
            {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
            {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
            {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
            {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
            {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
            {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
        ]
     */
    state = {
        textSearch: '',
        onlyInStock: false,
        productsList: []
    }

    hanldeInStockChange = ({ target: { checked } }) => {
        this.setState({
            onlyInStock: checked
        })
    }

    hanldeTextChange = ({target: { value }}) => {
        this.setState({
            textSearch: value
        })
    }

    findProducts = () => {
        const {textSearch , productsList , onlyInStock } = this.state
        return productsList.filter(item => { 
                if (textSearch && textSearch !== ''  ) {
                    return item.name.toUpperCase().includes(textSearch.toUpperCase()) && (!onlyInStock ? true : item.stocked === true) 
                }else{ 
                    return (!onlyInStock ? true : item.stocked === true)
                }
            })  
    }

    getProductsData = async () => {
        const response = await axios.get('https://26e962c3-8137-4414-a3c8-eae68e8a3652.mock.pstmn.io/categories-products')
        return response.data  
    }

    componentDidMount = async () => {
        const data = await this.getProductsData()
        this.setState({productsList: [...data] })
    }

    render() {
        return (
            <Row type="flex" justify="center">
                <Col span={12}>
                    <SearchBar 
                        hanldeTextChange = { this.hanldeTextChange } 
                        hanldeInStockChange = { this.hanldeInStockChange }
                    />
                    <ProductTable 
                        products = { this.findProducts() }
                    />
                </Col>
            </Row>
        )
    }
}

export default FilterList
