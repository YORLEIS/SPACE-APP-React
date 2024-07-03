import BarraLateral from "./components/BarraLateral"
import Cabecera from "./components/Cabecera"
import GlobalStyles from "./components/GlobalStyles"
import Banner from "./components/Banner"
import banner from "./assets/banner.png"
import Pie from "./components/Pie/index"

import styled from "styled-components"
import Galeria from "./components/Galeria"
import fotos from "./fotos.json"
import { useState,  useEffect } from "react"
import ModalZoom from "./components/ModalZoom"


const FondoGradiente = styled.div`
  background: linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width:100%;
  min-height: 100vh;

`
const AppContainer = styled.div`
  width:1440px;
  max-width: 100%;
  margin: 0 auto;
`
const MainContainer = styled.main`
  display:flex;
  gap: 24px;
`
const ContenidoGaleria = styled.section`
  display:flex;
  flex-direction : column;
  flex-grow: 1;
  `

const App=() => {

  const [fotosDeGaleria, setFotosDeGaleria] = useState(fotos)
  const [filtro, setFiltro] = useState('')
  const [tag, setTag] = useState('')

  // estado para ampliar zoom de la imagen
  const [fotoSeleccionada,setFotoSeleccionada]= useState(null)



  useEffect(() => {
    const fotosFiltradas = fotos.filter(foto => {
      const filtroPorTag = !tag || foto.tagId === tag;
      const filtroPorTitulo = !filtro || foto.titulo.toLowerCase().includes(filtro.toLowerCase())
      return filtroPorTag && filtroPorTitulo
    })
    setFotosDeGaleria(fotosFiltradas)
  
  }, [filtro, tag])


  // manejando favorito
  const alAlternarFavorito= (foto) =>{

    if(foto.id === fotoSeleccionada?.id){
      setFotoSeleccionada({
        ...fotoSeleccionada,
        favorita: !foto.favorita
    })
    }
   setFotosDeGaleria(fotosDeGaleria.map(fotoDeGaleria=>{
    return {
      ...fotoDeGaleria,
      favorita: fotoDeGaleria.id === foto.id ? !foto.favorita : fotoDeGaleria.favorita
    }
   }))
  }


  return (
    <>
      <FondoGradiente>

        <GlobalStyles/>


        <AppContainer>
          <Cabecera  filtro={filtro}
          setFiltro={setFiltro}/>
          <MainContainer>
            <BarraLateral/>

            <ContenidoGaleria>
              <Banner texto="La galería más completa de fotos del espacio" backgroundImage={banner} />
              
              <Galeria alSeleccionarFoto={foto=>setFotoSeleccionada(foto)} 
              fotos={fotosDeGaleria}
                alAlternarFavorito={alAlternarFavorito}   
                setTag={setTag} 
              />
            </ContenidoGaleria>

          
          </MainContainer>
         
        </AppContainer>
        <ModalZoom foto={fotoSeleccionada} 
        alCerrar={() => setFotoSeleccionada(null)}  
        alAlternarFavorito={alAlternarFavorito}/>
        <Pie/>
      </FondoGradiente>
    </>
  )
}

export default App
