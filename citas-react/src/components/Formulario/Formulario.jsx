import {useEffect, useState} from 'react'

const Formulario = ()=>{
    {/*
        Siempre los HOOKS son declarados en la parte superiro de los componentes es decir antes del return (estado del componente)
        los huoks constan de dos valores importantes la  variable que guardara el cambio de estado y la funcion que modifica ese valor 
        importante siempre cambiar el valor con la funcion designada y nunca por asignacion "let variable 'algun valor' ESTO ES ERRONEO"
        +++ Los Hooks no deben de crearse despues de un return ni dentro de condicionales 
        +++ siempre se colocan en la parte superiro del componente de react

    */}

    {/* const [nombreVariable, funcionQueModificaLaVariable] = useState(valor inicial)*/}
    const [nombre, setNombre] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log('Enviando formulario')
    }
    return(
        
        <div className="md:w-1/2 lg:2/5">
            <h1 className="font-black text-3xl text-center">
                Seguimento de Pacientes
            </h1>

            <p className="text-lg mt-5 text-center">
                Añade Pacientes y {' '}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form className="bg-withe shadow-md rounded-lg py-10 px-10" onSubmit={handleSubmit}>
                {/* div que contiene un imput y lavel con styles de telwind */}
                <div className="mb-5">
                    <label htmlFor="nombre" className="block text-gray-700 uppercase font-bold">
                        Nombre de mascota
                    </label>
                    <input 
                        className="
                            rounded-lg 
                            w-full 
                            p-2 
                            m-2
                        " 
                        type="text" 
                        name="" 
                        id="nombre" 
                        placeholder="Nombre de la mascota"
                        value={nombre}
                        onChange={(event)=>{
                            setNombre(event.target.value)
                        }}
                        
                    />
                    {/* las funciones de eventos que estan disponibles en javascript tambien estan 
                        disponibles en jsx solo que se usan con la estructura de camelCase es decir 
                        que si en HTML se usa onclick="" en jsx se usa onClick={}
                    */}
                </div>

                {/* div que contiene un imput y lavel con styles de telwind */}
                <div className="mb-5">
                    <label htmlFor="" className="block text-gray-700 uppercase font-bold">
                        propietario
                    </label>
                    <input 
                        className="
                            rounded-lg 
                            w-full 
                            p-2 
                            m-2
                        " 
                        type="text" 
                        name="" 
                        id="" 
                        placeholder="Nombre de propietario"
                    />
                </div>

                {/* div que contiene un imput y lavel con styles de telwind */}
                <div className="mb-5">
                    <label htmlFor="" className="block text-gray-700 uppercase font-bold">
                        email
                    </label>
                    <input 
                        className="
                            rounded-lg 
                            w-full 
                            p-2 
                            m-2
                        " 
                        type="email" 
                        name="" 
                        id="" 
                        placeholder="Email Contacto propietario"
                    />
                </div>

                {/* div que contiene un imput y lavel con styles de telwind */}
                <div className="mb-5">
                    <label htmlFor="" className="block text-gray-700 uppercase font-bold">
                        Alta
                    </label>
                    <input 
                        className="
                            rounded-lg 
                            w-full 
                            p-2 
                            m-2
                        " 
                        type="date" 
                        name="" 
                        id="" 
                    />
                </div>

                {/* div que contiene un imput y lavel con styles de telwind */}
                <div className="mb-5">
                    <label htmlFor="" className="block text-gray-700 uppercase font-bold">
                        Sintomas
                    </label>

                    <textarea
                        className="
                            rounded-lg 
                            w-full 
                            p-2 
                            m-2
                        "  
                        name="" 
                        id="" 
                        cols="30" 
                        rows="5"
                        placeholder="Describe los sintomas"
                    >    
                    </textarea>
                </div>

                <input 
                    className="
                        rounded-lg
                        w-full
                        text-center
                        bg-indigo-600
                        p-2
                        text-white
                        hover:bg-indigo-800 cursor-pointer transition-all
                    "
                    type="submit" 
                    value="Agregar paciente" 
                />
            </form>
        </div>
    )
}

export default Formulario