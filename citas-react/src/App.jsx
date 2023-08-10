/*  es el documento index de la app 
    en este docuemnto se trabajan la mayor parte de los proyectos
*/

/*
  jsx javascript syntax extension 

  Es un lenguaje de templates que muestra HTML pero tiene todas 
  las funciones de JavaScript, una vez que se compila se toma como 
  un archivo de tipo javascript con funcions y objetos

*/
//aqui se importan todos los componentes 
import  Header from './components/Header/Header'
import Formulario from './components/Formulario/Formulario'
import ListadoPacientes from './components/ListadoPacientes/ListadoPacientes'




function App() {
  /*  cada componente requiere un return y solo puede devolver un elemnto 
      de nivel mas alto es decir el padre o elemnto principal
  */


  //antes de return s epuede crear funciones, validaciones etc es decir sentencias
  return (
    // <> </> a esto se le conoce como fragment y es equivalente a un div
    // {} se esperan expresiones no sentencias
    // md: media query: aplica propiedad flex
    
    <div className="container mx-auto mt-20">
      <Header />
      
      <div className="mt-12 md:flex">
        <Formulario />
        <ListadoPacientes />
      </div>
      
    </div>

  )

  
}

export default App
