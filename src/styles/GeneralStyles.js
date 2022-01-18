import styled from "styled-components";


export const Button = styled.button`
background: #ccc;
padding: 6px 15px;
border: none;
border-radius: 4px;
margin-bottom: 10px;
display: flex;

.p {
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 1.2px;  
}

&:hover {
  background: #ddd;
  cursor: pointer;
}
`;

export const LightButton = styled.button`
background: var(--lightGrey);
padding: 0 15px;
border: none;
border-radius: 4px;
margin: 15px 15px 0 0;
display: flex;
align-items: center;
justify-content: center;

&:hover {
  background: var(--offWhite);
  cursor: pointer;
}
`;



export const BoldTitle = styled.h4`
color: black;
border-bottom: 1px solid var(--lightGrey);
padding: 10px 15px;
font-family: Arial, Helvetica, sans-serif;
letter-spacing: 1px;
`;


export const SmallMainTitle = styled.p`
font-size: 13px;
colour: black;
font-weight: bold;
padding: 10px 0 10px 0;

`;

