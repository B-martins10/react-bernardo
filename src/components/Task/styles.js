import styled from "styled-components";

export const TaskStyle = styled.div`

display: flex;
justify-content: space-between;
align-items: center;
padding: 20px 0;
border-bottom: 1px solid #cccccc;
color:#666666;

button{
background-color: transparent;
border: none;
font-size: 30px;
color:#f00;
cursor: pointer;

    &:hover{
        color: red;
    }

  

}
`