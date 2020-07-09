import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.header`
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin:50px 0px;
`
export const Cart = styled(Link)`
    text-decoration:none;
    display:flex;
    align-items:center;
    transition:opacity 0.2s;

    &:hover{
        opacity:0.8;
    }
    
   div{
    text-align:right;
    margin-right:20px;
    span{
        font-size:12px;
        display:block;
        color:#999
    }
    strong{
        /* margin-left:15px; */
        color:#f9f9f9
    }
   }
`
