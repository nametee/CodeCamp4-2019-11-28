import React, { Component } from 'react' 
import { Row, Col, Input, Checkbox  } from "antd"
 
export class SearchBar extends Component {  
    render() {
        const { hanldeTextChange, hanldeInStockChange } = this.props
        return (
            <Row type="flex">
                <Col span={24}>
                    <Input placeholder="Search . . ." onChange={ hanldeTextChange }/>
                </Col>
                <Col span={24}>
                    <Checkbox  onChange={ hanldeInStockChange } > 
                        {'Only show product in stock' } 
                    </Checkbox>
                </Col>
            </Row>
        )
    }
}

export default SearchBar
