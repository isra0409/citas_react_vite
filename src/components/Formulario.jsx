import React, { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {

  const [name, setName] = useState("");
  const [namePropietary, setNamePropietary] = useState("");
  const [email, setEmail] = useState("");
  const [alta, setAlta] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => { 
     if(Object.keys(paciente).length > 0){
      setName(paciente.name)
      setNamePropietary(paciente.namePropietary)
      setEmail(paciente.email)
      setAlta(paciente.alta)
      setSintomas(paciente.sintomas)
    }
    console.log(paciente)
  },[paciente])

  // console.log(paciente)

  const generarId = () => {
    const random = Math.random().toString(36).substr(2)
    const fecha = Date.now().toString(36)

    return random + fecha
  }

  const handleSubmit = (e) => { 
    e.preventDefault();

    if ([name, namePropietary, email, alta, sintomas].includes("")) {
      console.log("Hay al menos un campo vacio...");
      setError(true);
      return ;
    }

    setError(false)

    // setPacientes(name)

    const objetoPaciente = {
      name,
      namePropietary,
      email,
      alta,
      sintomas
    }

    if(paciente.id) {
      objetoPaciente.id = paciente.id
      // console.log(objetoPaciente)
      // console.log(paciente)

      const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)
      setPacientes(pacientesActualizados)
      setPaciente({})

    } else {
      //nuevo registro
      objetoPaciente.id = generarId() 
      setPacientes([...pacientes, objetoPaciente])
    }

    //reiniciar form
    setName('')
    setNamePropietary('')
    setEmail('')
    setAlta('')
    setSintomas('')

  };

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <div className=" font-black px-4 mb-10 w-11/12 m-auto text-center">
        <h2 className="font-black text-2xl text-center mb-5">
          Seguimiento pacientes
        </h2>
        <p className="">
          Añade pacientes y{" "}
          <span className="text-indigo-600">Administralos</span>
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md py-4 px-4 mb-10 w-11/12 m-auto"
      >
        {error && <Error mensaje='todos los campos son obligatorios' />}

        <div className="flex flex-col">
          <label htmlFor="mascota" className="mb-3 mt-6">
            {" "}
            Nombre Mascota{" "}
          </label>
          <input
            type="text"
            placeholder="Nombre de la mascota"
            className="border-2 p-2"
            id="mascota"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="propietario" className="mb-3 mt-6">
            {" "}
            Nombre Propietario{" "}
          </label>
          <input
            type="text"
            placeholder="Nombre del propietario"
            className="border-2 p-2"
            id="propietario"
            value={namePropietary}
            onChange={(e) => setNamePropietary(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="mb-3 mt-6">
            {" "}
            Email{" "}
          </label>
          <input
            type="email"
            placeholder="Ingrese su email"
            className="border-2 p-2"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="alta" className="mb-3 mt-6">
            {" "}
            Alta{" "}
          </label>
          <input
            type="date"
            className="border-2 p-2"
            id="alta"
            value={alta}
            onChange={(e) => setAlta(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="sintomas" className="mb-3 mt-6">
            {" "}
            Sintomas{" "}
          </label>
          <textarea
            placeholder="Describa los sintomas"
            className="border-2 p-2 mb-7"
            id="sintomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>

        <input
          type="submit"
          value={paciente.id ? 'Editar paciente' : 'Agregar paciente'}
          className="p-2 border-2 w-full rounded-3xl bg-indigo-600 text-white hover:bg-indigo-800 transition-all"
        />
      </form>
    </div>
  );
};

export default Formulario;
