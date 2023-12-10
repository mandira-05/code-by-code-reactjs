//video 13

import React,{Component} from 'react'
//import User from './User'

class StateWithClassComponent extends Component {  //React.Component b likh skte h ..agar upr import nhi krna h toh
	
	constructor () {
		super();
		this.state={
			//data3:"mandira"
			data3:1
		}
	}

	mango() {
		//alert("Apple")
		//this.setState({data3:"Gowda"})
		this.setState({data3:this.state.data3+1})
	}

	render ()
	{
		return (
			<>
			
			<h1>HEllo ye State With Class Component ka example h</h1>
			<h1>{this.state.data3}</h1>
			<button onClick={()=>this.mango() }>Update Data</button>
			</>
			)
	}
}

export default StateWithClassComponent


//abi yaha pe usestate ko import nhi krna ..constructor banana h ..state define krne k liye
//constructuor k andar super() likha h ...this use krte h toh super() use krna hota h 

//state ek data container hota h ...info store krta h
//variable and state diff -- variable ko directly update kia toh component re-render nhi hota
//islye state use krte h ....

//state ko hum component se bahar use nhi krna chahiye

//state public hota h 
