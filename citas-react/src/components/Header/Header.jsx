//lOS NOMBRES DE COMPONENTES SIEMPRE DEBEN INICIAR EN MAYUSCULAS
//LOS COMPONENTES EN SI SON FUNCIONES
/*
el nombre de la funcion de igual forma que el nombre del componente / archivo inicia 
en mayusculas

En este documento se muestra como usar tailwind para dar estilos a una linea con texto
*/

const Header = ()=>{
    return (
        <> 
            <h1 className="font-black text-4xl text-center md:w-1/2 mx-auto">
                Seguimiento Pacientes {" "}
                <span className="text-indigo-600">Veterinaria</span>
            </h1>
        </>
    )

}

export default Header