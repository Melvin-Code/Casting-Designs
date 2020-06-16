import React, { Component } from 'react';
import $ from 'jquery';
class TypeWriter extends Component {
  typing=()=>{
    $(function () {
    //     $(".text").typed({
    //       strings:["Vladimir Vaize"],
    //       typeSpeed: 70,
    //       backSpeed: 20,
    //       backDelay: 1500,
    //       showCursor: false,
    //       loop: false
    //     });
    //   });
    // }
    render() {
        this.typing()
        return (
            <div className='text'>
                
            </div>
        );
    }
}

export default TypeWriter;

// import React, { Component } from 'react';




// class TypeWriter extends Component {
//   state={
//     test: document.getElementById("typer"),
//     text: "Hello World", //put your text here
//     result: "",
//   }

// //Press rerun button to see effect

// render() {
//     window.addEventListener("load", (event) => {
//       for (let i = 0; i < text.length; i++) {
//         setTimeout(function () {
//           result += text[i];
//           test.innerHTML = result;
//         }, 120 * i);
//       }
//     });
//         return (
//             <div id='typer'>
//                 looooooooooping
//             </div>
//         );
//     }
// }

// export default TypeWriter;