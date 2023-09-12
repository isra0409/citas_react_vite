import React from "react";

const Header = (props) => {

// console.log("props desde app a header", props)

// function probando (props) {
//   if(props.numero = 1) {
//     console.log("estamos dentro")
//   } else {
//     console.log("Estamos fuera.")
//   }
// }
// probando(props)



  return (
    <div className='flex  items-center justify-center mb-3'>
        <h2 className='font-black text-4xl'>seguimiento pacientes</h2>
        <span className='text-indigo-500 ml-3 text-3xl font-black '>veterinaria</span>
    </div>
  );
};

export default Header;
