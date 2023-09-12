import React from "react";

const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  // console.log("pasando datoss", paciente);

  // desestructurando...
  const { name, namePropietary, alta, email, sintomas, id } = paciente;

  const handleEliminar = () => {
    const respuesta = confirm('deseas eliminar este paciente?')
    console.log("eliminando", id)

    if(respuesta){
      eliminarPaciente(id)
    }
  }

  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {""}
        <span className="font-normal normal-case">{name}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: {""}
        <span className="font-normal normal-case">{namePropietary}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        E-mail: {""}
        <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta: {""}
        <span className="font-normal normal-case">{alta}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas: {""}
        <span className="font-normal normal-case">{sintomas}</span>
      </p>

      <div className="flex justify-between">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-800 font-bold uppercase rounded-lg text-white"
          onClick={() => setPaciente(paciente)}
          
        >
          Editar
        </button>

        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-800 font-bold uppercase rounded-lg text-white"
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
