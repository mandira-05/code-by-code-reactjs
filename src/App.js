
import React,{useState,useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import User from './Components/User'
import UserClassComponent from './Components/UserClassComponent'
import UserJSX from './Components/UserJSX'
import StateWithClassComponent from './Components/StateWithClassComponent'
import Student from './Components/Student'
import StudentWithClassComponent from './Components/StudentWithClassComponent'
import StudentWithClassComponent1 from './Components/StudentWithClassComponent1'
import Login from './Components/Login'
import Video20 from './Components/User-video20'
import Members from './Components/Members'
import Video30 from './Components/User-video30-useEffect'
import './style.css'

import style from './custom.module.css'

import {Button} from 'react-bootstrap'
import {Table} from 'react-bootstrap'

import Video36 from './Components/Emp-video36'
import Cols from './Components/Cols'
import Video38 from './Components/Video38'


//alert ("jjjjjdk")
function App() {


  let data="MEWOOW"
  {/* function Apple ()
    {
      return (<div>Apple component</div>)
    }
*/} 

  function Apple ()  //clcik event and fucntion ka example h ye
    {
      data="dobbi"
      //alert ("function call");
      alert (data);
    }
   
  let data1='Nikita';
  function UpdateData () {
      data1="Nawale";
      alert(data1);
  } 
    
  const [data2,setdata2]=useState("Nikitaaa");
  function UpdateData1 () {
    setdata2("Nawalee")
  } 

  const [name,setName]=useState("Nikitaaa");

  const [data4,setData4]=useState(null);
  const [print,setPrint]=useState(false);

  function getData(val) {

    console.log(val.target.value);
    setData4(val.target.value) ;
    setPrint(false) ;
  }

  const[status,setStatus]=useState(true)

  function getFormData(e) {
    console.warn(name1,tnc,interest);
    e.preventDefault();  //form ko submit hone se prevent krta h 
  }

  const[name1,setName1]=useState("");
  const[tnc,setTnc]=useState(false);
  const[interest,setInterest]=useState("");

   function getData1() {

    alert("hello from app");
  }

  const[count,setCount]=useState(0);

  useEffect(()=>{
    //alert("Use Effect")
    console.warn("Use Effect"); //componentdidMount jaise call ho jayega

  })

  const [data5,setData5]=useState(10);
  const [count1,setCount1]=useState(100);

 // useEffect(()=>{
 //   console.warn("use effect called with data");
//  },[data5])

 //useEffect(()=>{
 //   alert("count is " +count1);
 // },[count1])

  const students = ['Mandira','Nikita','Asta','Yuno']
  //map looping

  students.map((item)=>{
    console.warn("My name is: " ,item);
  })

  for (let i=0;i<students.length;i++) {
    console.warn("in loop My name is : ", students[i])
  }

  const emp=[

    {name:"mandira",email:"meow@gmail.com",contact:765},
    {name:"nikita",email:"nikita@gmail.com",contact:754},
    {name:"asta",email:"asta@gmail.com",contact:863},    
    {name:"yuno",email:"yuno@gmail.com",contact:463} 
  ]

  const users =[
    {name:"Anil", email:"anil@test.com",address:[
      {hm:"10",city:'Noida',country:'India'},
      { hm: '10', city: 'Gurgaon', country: 'India' },
      { hm: '23', city: 'Noida', country: 'India' },
      { hm: '45', city: 'Delhi', country: 'India' },

      ]
    },
    {
      name: 'Burce', email: 'bruce@test.com', address: [
        { hm: '101', city: 'Noida', country: 'India' },
        { hm: '10', city: 'Gurgaon', country: 'India' },
        { hm: '23', city: 'Noida', country: 'India' },
        { hm: '45', city: 'Delhi', country: 'India' },
      ]
    },
    {
      name: 'Peter', email: 'peter@test.com', address: [
        { hm: '101', city: 'Noida', country: 'India' },
        { hm: '10', city: 'Gurgaon', country: 'India' },
        { hm: '23', city: 'Noida', country: 'India' },
        { hm: '45', city: 'Delhi', country: 'India' },
      ]
    },
    {
      name: 'Sam', email: 'sam@test.com', address: [
        { hm: '101', city: 'Noida', country: 'India' },
        { hm: '10', city: 'Gurgaon', country: 'India' },
        { hm: '23', city: 'Noida', country: 'India' },
        { hm: '45', city: 'Delhi', country: 'India' },
      ]
    },

    ]

    let data6 = "Nezuko-chan";

    function parentAlert (data7) {
      alert(data7);
    }

  return (
    <div className="App">
      <h1>Hello world!</h1>
      <User /> 
      <UserClassComponent />
      {/* <Apple />*/} 
      <UserJSX /> 
      {/*<button onClick={Apple()}> Click Me </button>*/}  {/* ///aise button apne aap call hota */}
     {/* <button onClick={Apple}> Click Me </button> */} {/* ///aise button click hone pe call hota */}
     {/* <button onClick={()=>alert("hello me hu alert")}> Click Me </button> */} {/*agar idr pe hi directly alert ya function define krna/ use krna h toh arrow function use krna hoga */}
      
     <h1>{data} - click event ka example h ye</h1> 
     <button onClick={Apple}> Click Me </button>  {/* aise use kia toh sirf alert me chnge hoga name ...lekin clcik krne pe screen pe name chnge nhi hota */}
      <br />
      <h1>State in react</h1>
      <h1>{data1}</h1>   {/*  aise screen pe data chnge hota nhi h  , islye state use krte h  */}
      <button onClick={UpdateData}>Update data</button>
      <h1>{data2}</h1> 
      <button onClick={UpdateData1}>Update data</button>
      <StateWithClassComponent />
        {/* <Student name="mandira" email="kittymandira@gmail.com" other={{add: 'kalyan', mobile:'007'}}/>
      <Student name="Nikita" email="nikita.nawale25@gmail.com" other={{add: 'zuzuzu', mobile:'008'}}/>
      <Student name="shibi" email="shibi@gmail.com" other={{add: 'hghgh', mobile:'005'}}/> */}
      <Student name={name} />
      <button onClick={()=>{setName("Mandira")}}>Update name</button>
      <StudentWithClassComponent name="anil" email="anil@gmail.com" />
      <StudentWithClassComponent1 /> <br />
      <h1>{data4}</h1>
      <input type="text" onChange={getData}/>

      <h1>click hone pe value chnge krna h-video 16</h1>
      {
        print?
        <h1>{data4}</h1>
        :null
      }

      <input type="text" onChange={getData}/>
      <button onClick={()=>setPrint(true)}>Print data</button>
      


      <br />
      
      {
        status? <h1>video 17</h1>:null
      }
      {/* <button onClick={()=>setStatus(false)}>Hide</button>
      <button onClick={()=>setStatus(true)}>Show</button> */}
      <button onClick={()=>setStatus(!status)}>Toggle</button>
      
      <h1>video-18-handle form data</h1>
      <form onSubmit={getFormData}>
        <input type="text" placeholder="enter name" 
        onChange={(e)=>setName1(e.target.value)}/> <br /> <br />
        <select onChange={(e)=>setInterest(e.target.value)}>
          <option>Select Option</option>
          <option>DC</option>
          <option>Marvel</option>
        </select> <br/><br/>
        <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)}/> <span>Accept terms and conditions</span>
        <br/><br/>
        <button type="submit">Submit</button>
      </form>

      <h1>video -19- form validation</h1>
      <Login />

      <h1>video -20- pass function as props</h1>
      <Video20 data={getData1}/>
     {/* <div style={{float:'right'}}>
        <Members data={getData1}/>
      </div> */}
      <br />
      <br />
      <h1>video -29- useEffect {count}</h1>
      <br />
      <button onClick={()=>setCount(count+1)}>Update Counter</button>
      <h1>video -30- useEffect </h1>
      {/* <h1>Count : {count1} </h1>
      <h1>Data : {data5} </h1>

      

      <button onClick={()=>setCount1(count1+1)}>Update Count</button>
      <button onClick={()=>setData5(data5+1)}>Update daatta 2</button> */}
      <h1>video -30 _2- useEffect </h1>
      
      <Video30 count={count1} data = {data5} > </Video30>
      <button onClick={()=>setCount1(count1+1)}>Update Count</button>
      <button onClick={()=>setData5(data5+1)}>Update daatta 2</button>

      <h1 >Video31 - style in react js</h1>
      <h1 className="primary">Style type 1</h1>
      <h1 style={{color:'red' , backgroundColor:"black"}}>Style type 2</h1>            
      <h1 className={style.success}>Style type 3</h1>
      <h1 >Video32 - bootstrap</h1>
      <button onClick={()=>alert("helow")}>Click me</button>
      {/*<Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button>{' '}
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button> */}
      <h1 >Video33 -handle array with list</h1>
      <table border="1">
      
      <tr>
            <td>name</td>
            <td>email</td>
            <td>contact</td>
      </tr>


     {/*  {
        students.map((data)=>
          <h1>Name is : {data}</h1>
        )
      }*/}
        {
        emp.map((d)=>
          <tr >
            <td>{d.name}</td>
            <td>{d.email}</td>
            <td>{d.contact}</td>
          </tr>
        )
      }
      
      </table> 

      <h1 >Video34 - list with bootstrap</h1>
      <Table striped bordered hover>
      <tbody>
      <tr>
            <td>name</td>
            <td>email</td>
            <td>contact</td>
      </tr>
      {
        emp.map((item,i)=>
          <tr key={i}>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.contact}</td>                        
          </tr>
          )
      }
      </tbody>
      </Table >
      <h1>video 35-nested list with nested array</h1>
      <Table variant="dark"  >
        <tbody>
          <tr>
          <td>S.N</td>
            <td>Name</td>
            <td>Email</td>
            <td>Address</td>
          </tr>
          {
            users.map((item,i)=>
            <tr key={i}>
               <td>{i+1}</td>  {/*serial number 1 se dikhane k liye  */}
            <td>{item.name}</td>
          <td>{item.email}</td>
            <td>
              {/*  */}
              <Table variant="dark"  >
        <tbody>
              {
                item.address.map((data)=>

                <tr>
                  <td>{data.hm}</td>
                  <td>{data.city}</td>
                  <td>{data.country}</td>
                </tr>
                )
              }
              </tbody>
              </Table>
              {/*  */}
            </td>
          </tr>
          )
          }
        </tbody>
      </Table>
      <h1>video 36 - reuse component with list</h1>
      
      {
        emp.map((item,i)=>
          
          <Video36 data={item} />
          )
      }
      <h1>video 37 - react fragments</h1>
      <table>
        <tbody>
          <tr>
            <Cols />
          </tr>
        </tbody>
      </table>
      <h1>video 38 - send data from parent to child</h1>
      <Video38 name={data6}/>
      <h1>video 38 - send data from child to parent</h1>
      <Video38 alert={parentAlert} />
      
      {/* video 39,40 ka code notes me likha 

      <Video39 />*/}
    </div> 
  );
}

export default App;

//JSX ko bina react k b use kr skte h ye

