//video 15

import React,{Component} from 'react'

class StudentWithClassComponent extends Component {  //React.Component b likh skte h ..agar upr import nhi krna h toh
	

	render ()
	{
		return (
			<>
			
				<h1>ye props With Class Component ka example h</h1>
				<h2>Student %#%${this.props.name} Email: {this.props.email}</h2>
			
			</>
			)
	}
}

export default StudentWithClassComponent
