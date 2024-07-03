import styled from "styled-components";

const ItemListaEstilizado= styled.li`
    font-size: 24px;
    margin-bottom:32px;
    line-height: 28px;
    display:flex;
    align-items: center;
    gap:16px;
    color: ${props => props.$activo ? "#7B78E5" : "#D9D9D9"};
    font-family: ${props => props.$activo ? "GandhiSansBold" : "GandhiSansRegular"};

`
// con $activo estoy definiendo una variable, activo= false es un parametro por defecto
// children es una prop especial que representa el contenido que se incluye entre las etiquetas de un componente cuando se utiliza

const ItemNavegacion = ({children, iconoActivo, iconoInactivo, activo=false }) =>{
    return <ItemListaEstilizado $activo={activo}>
    <img src={activo ? iconoActivo : iconoInactivo} alt="Icono"/>
    {children}
    </ItemListaEstilizado>
}

export default ItemNavegacion;