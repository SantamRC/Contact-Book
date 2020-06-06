import React, {Component} from 'react';
import axios from 'axios'; 

export default class Create extends Component{
    constructor(props){
        super(props);
        this.onChangeName=this.onChangeName.bind(this);
        this.onChangePhone=this.onChangePhone.bind(this);
        this.onChangeAddress=this.onChangeAddress.bind(this);
        this.onSubmit=this.onSubmit.bind(this)
        this.state={
            name:'',
            phone:0,
            address:''        
        };
    }
    onChangeName(e){
        this.setState({
            name:e.target.value
        });
    }
    onChangePhone(e){
        this.setState({
            phone:e.target.value
        });
    }
    onChangeAddress(e){
        this.setState({
            address:e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();
        const cont={
            name:this.state.name,
            phone:this.state.phone,
            address:this.state.address
        }
        axios.post('http://localhost:4000/create/',cont)
        .then(res=>console.log(res.data))
    }
    render(){
        return(
            <div className='form'>
                <form onSubmit={this.onSubmit}>
                    NAME:<input type='text'
                                value={this.state.name}
                                onChange={this.onChangeName}
                        />
                    PHONE:<input type="text" 
                                 value={this.state.phone}
                                 onChange={this.onChangePhone}
                            />
                    ADDRESS:<input type="text" 
                                    value={this.state.address}
                                    onChange={this.onChangeAddress}
                            />
                    <input type='submit' />
                </form>
            </div>
        )
    }
}