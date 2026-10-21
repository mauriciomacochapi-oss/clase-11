import { useEffect, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'


const URL="https://api.github.com/users/mauriciomacochapi-oss"

function App() {


  const [datos, setDatos] = useState(null);
  const [error, setError] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() =>{
    async function traerPerfil() {
      try {
        const respuesta = await fetch(URL);
        if (!respuesta.ok) {
          throw new Error(`Error ${respuesta.status}`);
          }
        const perfil =await respuesta.json();
        //console.log(perfil);
        setDatos(perfil);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setCargando(false);
      }
    }
    
    traerPerfil()
  },  []);

  if(cargando){
    return <>cargando...</>
  }

  if(error) {
    return <>Error: {error}</>
  }


  return (
    <>
      <h2>{datos.login}</h2>
      <img src={datos.avatar_url} alt="" width="150px"/>

    </>
  )
}

export default App
