//video 15

import React,{Component} from 'react'
import StudentWithClassComponent from './StudentWithClassComponent'

class StudentWithClassComponent1 extends Component {  //React.Component b likh skte h ..agar upr import nhi krna h toh
	
	constructor() {
		super();
		this.state={
			name:"Dobbi"
		}
	}

	render ()
	{
		return (
			<>
				<StudentWithClassComponent name={this.state.name} />
				<button onClick={() =>this.setState ({name:"nanami"})}>Update Name-props with class comp</button>
			
			</>
			)
	}
}

export default StudentWithClassComponent1
