import styled from "styled-components";

export const ConteinerList = styled.section`
    background-color: white;
    padding: 30px;
    max-width: 600px;
    box-sizing: border-box;
    border-radius: 10px;
    margin:40px auto;

    box-shadow: 5px 5px 10px #dddddd;

.btnlimpar{
    background-color: #001d29;
    padding: 10px;
    display: inline-block;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    border-radius: 5px;
    color: #dddddd;
}    
    form{
     display:flex;
    column-gap: 10px;
    input{
     border-radius:5px;
     border:1px solid #cccccc;
    
    flex-grow: 1;
     }

    button{
        padding: 16px 30px;
        border: none;
        color: white;
        background-color: #001d29;
        cursor: pointer;
        border-radius: 5px;

        &:hover{
            background-color:blue;
        }

        &:disabled{
        background-color: gray;
        cursor:not-allowed;
        }

     }

     }
     
   `;

