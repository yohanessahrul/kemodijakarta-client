import React, { Component } from 'react'
import { Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap'

export default class BudgetRender extends Component {
    constructor(props) {
        super(props)
        this.state = {
            awal: 'Rp.',
            budget: ''
        }
        this.handleOnChange = this.handleOnChange.bind(this)
        this.addDots = this.addDots.bind(this)
    }
    componentDidMount() {
        // console.log(this.props)
    }

    handleOnChange = (e) => {
        this.setState({
            budget: e.target.value
        })
    }

    addDots = (e) => {
        return e.replace(/(?!^)(?=(?:\d{3})+(?:\.|$))/gm, '.');
    }
    render() {
        const { input, label, type, meta: { touched, error } } = this.props
        // const { budget } = this.state
        return (
            <div>
                <label>{label}</label>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText >Rp.(juta)</InputGroupText>
                    </InputGroupAddon>
                    <Input  {...input} placeholder={label} type={type}/>
                    {touched && error && <span className="errorStyle">{error}</span>}
                </InputGroup>
            </div>
        )
    }
}
