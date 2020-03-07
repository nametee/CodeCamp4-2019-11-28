import React, { Component } from 'react' 
import { Row, Col, Dropdown, Button, InputNumber,Menu } from 'antd'
import { DownOutlined } from '@ant-design/icons';

export class CurrencyControl extends Component {  
    menu = () => {
        const { currencyList, handleMenuClick } = this.props
        return (
            <Menu onClick={ handleMenuClick }>
                { 
                    currencyList.map(item =>  
                        <Menu.Item key={item.id}> 
                            { item.name }
                        </Menu.Item> 
                    ) 
                }
            </Menu>   
        )
    }

    render() {
        const { currencySelected, handleTextChange, input } = this.props
        return (
            <Row>  
                <Col span= { 24 }>
                    <Dropdown overlay={ this.menu() } style = { { width: '100px' }} >
                        <Button>
                            { currencySelected } <DownOutlined />
                        </Button>
                    </Dropdown> 
                    <InputNumber onChange={ handleTextChange } value={ input } style = { { width: '200px' }} />  
                </Col> 
            </Row>
        )
    }
}

export default CurrencyControl
