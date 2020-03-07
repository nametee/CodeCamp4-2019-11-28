import React, { Component } from 'react' 
import { Row, Col } from 'antd'
import CurrencyControl from './components/CurrencyControl'
import ListData from './components/ListData' 
import axios from 'axios'
import 'antd/dist/antd.css'


export class CurrencyConverter extends Component { 
    state = {
        fromCurrency: '',
        toCurrency: '',
        fromValue: 0,
        toValue: 0,
        currencyList: [
            { id: 1, name: 'THB' },
            { id: 2, name: 'HKD' },
            { id: 3, name: 'PHP' },
            { id: 4, name: 'JPY' },
            { id: 5, name: 'USD' },
            { id: 6, name: 'EUR' },
            { id: 7, name: 'CNY' },
            { id: 8, name: 'RUB' }
        ],
        currentRate: null,
        currencyRates: null,
        listProducts: [
            {id: 1 , name: 'iPhone' , price: 10000 },
            {id: 2 , name: 'iPod' , price: 5000 },
            {id: 3 , name: 'Camera' , price: 3000 }
        ]
    }

    getCurrencyRates = async () => {
        const response =  await axios.get('https://api.exchangeratesapi.io/latest?base=' + this.state.fromCurrency)
         
        this.setState(state => ({
            currencyRates: response.data.rates
        }))
        
    } 

    handleSelectFromCurrency = ({ item: { props: { children } } }) => { 
        this.setState({
            fromCurrency: children
        },async () => {
            await this.getCurrencyRates()
            this.convertToCurrency() 
        })
    }

    handleSelectToCurrency = ({ item: { props: { children } } }) => { 
        this.setState({
            toCurrency: children
        },() => { 
            this.convertToCurrency()
        })
    }

    convertToCurrency = () => { 
        this.setState(state => ({
            currentRate: state.currencyRates[state.toCurrency],
            toValue: state.fromValue * state.currencyRates[state.toCurrency]
        }))  
    }

    handleTextFromChange = e => { 
        if (e) {
            this.setState(state => ({
                fromValue: e
            }),() => {
                this.convertToCurrency()
            })
        }
    }
    
    handleTextToChange = e => { 
        console.log(e)
    }

    componentDidMount = () => {
        this.setState({
            fromCurrency: this.state.currencyList[0].name,
            toCurrency: this.state.currencyList[0].name,
        },async () => {
            await this.getCurrencyRates()
            this.convertToCurrency()
        })
    }

    render() { 
        const { currencyList, fromCurrency, toCurrency, fromValue, toValue, currentRate, listProducts } = this.state
        return (
            <Row type = 'flex' justify='center'>
                <Col span = {24} >
                    <CurrencyControl 
                        currencyList = { currencyList }
                        currencySelected = { fromCurrency }
                        handleMenuClick = { this.handleSelectFromCurrency }
                        handleTextChange = { this.handleTextFromChange }
                        input = { fromValue }
                    /> 
                </Col> 
                <Col span = {24} >
                    <CurrencyControl 
                        currencyList = { currencyList }
                        currencySelected = { toCurrency }
                        handleMenuClick = { this.handleSelectToCurrency }
                        handleTextChange = { this.handleTextToChange }
                        input = { toValue }
                    />
                      <ListData
                        fromCurrency = { fromCurrency }  
                        toCurrency = { toCurrency } 
                        rate = { currentRate } 
                        products = { listProducts }
                    /> 
                    
                </Col>
            </Row>
        )
    }
}

export default CurrencyConverter
