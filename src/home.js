import React, { Component } from 'react'
import axios from 'axios';

export default class Home extends Component{
    contructor(props){
        super(props);
        this.state={
            Contact:[]
        }
    }
    componentDidMount(){
        axios.get('http://localhost:4000/')
        .then(res=>this.setState({contact: res.data}))
        .catch(err=>console.log(err))
    }
    render(){
        return(
            <div>

            </div>
        )
    }
}