import styled from 'styled-components'
import { darken } from 'polished'

export const Container = styled.div`
  padding: 30px;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  footer {
    margin-top:30px;
    display:flex;
    justify-content:space-between;
    align-items:center;
      /* background: #5A2D82; */
    button {
      background: #5A2D82;
      color: #fff;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
      transition: background .2s;
      box-shadow: 0 3px 4px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.16);
      &:hover {
        background: ${darken(0.03, '#5A2D82')};
      }
    }
  }
`
// ROXO #7159c1
export const ProductTable = styled.table`
    width: 100%;
    thead th {
    color: #999;
    text-align:left;
    padding:12px;
  }
  
    tbody td {
    padding:12px;
    border-bottom: 1px solid #eee;
  }
   img{
    height:100px;
  }
  
  strong {
    display: block;
    color: #333;
  }
  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }
  .box-button {
    display: flex;
    align-items: center;
    input {
      border: 1px solid #ddd;
      background:#fff;
      border-radius:4px;
      color:#666;
      padding:6px;
      width:50px;
     
    }
  }
  button {
    padding: 6px;
    border: 0;
    background: none;
  }
  
  button {
    padding: 6px;
    border: 0;
    background: none;
  }
  
`

export const Total = styled.div`
    display: flex;
  align-items: baseline;
  span {
    color: #8c8c8c;
    font-weight: bold;
  }
  strong {
    margin-left: 5px;
    font-size: 28px;
  }
`