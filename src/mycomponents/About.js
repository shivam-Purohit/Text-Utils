import { hover } from "@testing-library/user-event/dist/hover";
import React, { useState } from "react";
export default function About(props) {
  // const [myStyle, setmyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
    
  // });

  // const [text,setNewText] = useState("Dark Mode");

 
  // let modeChange = () => {
  //   if (myStyle.color === "black") {
  //     setmyStyle({
  //       color: "white",
  //       backgroundColor: "black",

  //     });
     
  //     setNewText("Light Mode");
  //   }
  //   else{
  //     setmyStyle({
  //       color: "black",
  //       backgroundColor: "white",
  //     });
  //     setNewText("Dark Mode");
  //   }
  // };
 
  return (
    <>
    <div  className={`text-${props.mode==="dark" ? "light":"dark"}  bg-${props.mode==="dark" ? "dark":"light"}`}>

      <div className={`container my-2  text-${props.mode==="dark" ? "light":"dark"}  bg-${props.mode==="dark" ? "dark":"light"}` } >
        <h2 className="text-center">About the project</h2>
        <p className="container my-2 ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium
          saepe est reprehenderit sunt reiciendis, quaerat dolorum recusandae
          rem ex odio debitis eos voluptatem illum quo sequi dolore natus nam!
          Ratione inventore tempora beatae eveniet porro ipsam, dolorem dolor
          harum hic quaerat ex, doloremque, dolores ipsa cum quae repellendus
          deserunt quisquam obcaecati tempore corrupti omnis vel? In.
        </p>
        <p className="container my-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium
          saepe est reprehenderit sunt reiciendis, quaerat dolorum recusandae
          rem ex odio debitis eos voluptatem illum quo sequi dolore natus nam!
          Ratione inventore tempora beatae eveniet porro ipsam, dolorem dolor
          harum hic quaerat ex, doloremque, dolores ipsa cum quae repellendus
          deserunt quisquam obcaecati tempore corrupti omnis vel? In.
        </p>
        <p className="container my-4 ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium
          saepe est reprehenderit sunt reiciendis, quaerat dolorum recusandae
          rem ex odio debitis eos voluptatem illum quo sequi dolore natus nam!
          Ratione inventore tempora beatae eveniet porro ipsam, dolorem dolor
          harum hic quaerat ex, doloremque, dolores ipsa cum quae repellendus
          deserunt quisquam obcaecati tempore corrupti omnis vel? In.
        </p>
      </div>
      <div className={`container bg-${props.mode==="dark" ? "dark":"light"} `} >
        {/* <button className={`btn btn-primary `} >
          {text}
        </button> */}
      </div>


    </div>
    </>
  );
}
