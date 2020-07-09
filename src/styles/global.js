import {createGlobalStyle} from 'styled-components'
import fundo from '../../src/assets/images/background.svg'
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
    *{
        margin:0;
        padding:0;
        outline:0;
        box-sizing:border-box;
    }

    body{
        background:#fff url(${fundo}) no-repeat center top;
        /* background-color: rgb(15, 1, 94); */
        /* background-image: radial-gradient(at 50% 100%, rgba(123, 22, 255, 0.75), rgb(15, 1, 94)); */
        -webkit-font-smoothing:antialiased;


    }
    body,input,button{
        font: 14px sans-serif;
    }

    #root{
        max-width:1020px;
        margin:0 auto;
        padding: 0px 20px 50px;

    }
    button{
        cursor:pointer;
    }
`