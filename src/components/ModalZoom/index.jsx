import styled from "styled-components";
import Imagen from "../Galeria/Imagen/index";
import BotonIcono from "../BotonIcono"


const Overlay = styled.div`
    background-color: rgba(0,0,0,.7);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`
const DialogoEstilizado = styled.dialog`
    position: absolute;
    top: 294px;
    background: transparent;
    padding: 0;
    border: 0;
    width: 1156px;
    display: flex;
    justify-content: center;
    form {
        button {
            position: relative;
            top: 20px;
            right: 60px;
         
        }
    }
`
const ModalZoom = ({foto, alCerrar, alAlternarFavorito})=>{

    // !!foto esto es para que el objeto me devuelve true o false en caso de como se encuentre
    return  <>
    {/* si recibe una foto se va a mostrar el dialog, sino no se mostrará nada */}
   
        {foto && <>
    |       <Overlay/>
            <DialogoEstilizado open={!!foto} >
                <Imagen foto={foto} expandida={true} alAlternarFavorito={alAlternarFavorito}/>
                <form formMethod="dialog" onClick={alCerrar}>
                    <BotonIcono formMethod="dialog" >
                        <img src="/iconos/cerrar.png" alt="Icono de cerrar" />
                    </BotonIcono>
                </form>
            </DialogoEstilizado>
            </>
    }
    </>

  
}

export default ModalZoom;