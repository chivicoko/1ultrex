import styled from "styled-components";

const Button = styled.button`
    color: ${props => props.primary ? "orange" : "rgb(36, 35, 35)"};
    background-color: ${props => props.primary ? "rgb(36, 35, 35)" : "orange"};
    font-size: 20px;
    margin: 1em;
    padding: 5px, 5px;
    border: 2px solid orange;
    border-radius: 40px;

    :hover {
        color: ${props => props.primary ? "rgb(36, 35, 35)" : "orange"};
        background-color: ${props => props.primary ? "orange" : "rgb(36, 35, 35)"};
    }
`;

export default Button;