
///video14

function Student (props) {  ///functional component h ye
	console.log(props);
	return (
		<div style={{backgroundColor: "skyblue", margin:10}}>
			<h1>Student functional Component - video14</h1>
			<h1>Hello - {props.name}</h1>
			{/*<h2>Email: {props.email}</h2>
			<h3>Address: {props.other.add}</h3> */}
		</div>
		)
}

export default Student
