
//video 30 - use Effect 3rd part
import React,{useState,useEffect} from 'react'

function Video30(props) {
 // useEffect(()=>{
  //  console.warn("use Effect sssf");
  //})

  useEffect(()=>{
    alert("count is " +props.count);
  },[props.count])


  return (

    <div>
      <h1>Count Props : {props.count}</h1>
      <h1>Data Props : {props.data}</h1>
    </div>

  );

}

export default Video30;
