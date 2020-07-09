import styled from 'styled-components';
import {darken} from 'polished'

export const ListShoes = styled.ul`
  display:grid;
  grid-template-columns:repeat(3,1fr);
  grid-gap:20px;
  

  li{
      background:#fff;
      padding:18px;
      display:flex;
      flex-direction:column;
      border-radius:10px;
      color:#333;
      box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
      del{
        display: block;
        color: #8c8c8c;
        line-height: 1.125em;
        text-decoration: line-through;
        font-size: 14px;
        margin: 1px 5px 0 0;
      }
      img{
          max-width:240px;
          align-self:center;
      }
      >span{
          margin-top:10px;
          font-weight:bold;
          font-size:30px;
      }
      >strong+strong{
          margin-top:5px;
          font-size:16px;
          color:#04d483;
          margin-bottom:8px;
      }
      button{
          display:flex;
          align-items:center;
          flex-direction:row;

          border:none;
          background:#5A2D82;
          margin-top:auto;
          border-radius:10px;
          overflow:hidden;
          transition:background 0.2s;
          box-shadow: 0 3px 4px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.16);;
          
        &:hover{
            background:${darken(0.10,"#5A2D82")}
        }
        div{
          border:none;
          display:flex;
          align-items:center;
          background:rgba(0,0,0,0.1);


          padding:10px;

          p{
            margin-top:2px;
            color:#fff;
          }
          svg{
              margin-right:5px;
          }
        }
        >span{
            flex:1;
            text-align:center;
            color:#fff;
        }
      }
  }
`;
