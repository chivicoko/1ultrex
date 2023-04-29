import styled from "styled-components";

const EmailTestStyle = styled.div`
    color: white;
    background-color: rgb(36, 35, 35);
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;

    .container {
        padding: 50px 100px 80px 100px;
    }
    
    .container .loginContainer {
        background-color: rgb(97, 91, 91);
        text-align: center
        height: auto;
        margin: 20px 300px;
        padding: 10px 0;
        border-radius: 40px;
    }
    
    .container .loginContainer p {
        text-align: start;
        margin: 15px 0;
    }
    
    label {
        margin-left: 90px;
    }
    
    input {
        border: 1px solid white;
        border-radius: 5px;
        margin-left: 90px;
        background-color: rgb(97, 91, 91);
        padding: 5px 15px;
        height: 30px;
        width: 370px;
    }
    
    textarea {
        border: 1px solid white;
        border-radius: 5px;
        margin-left: 90px;
        background-color: rgb(97, 91, 91);
        padding: 5px 15px;
        height: 80px;
        width: 370px;
    }

    .message-country {
        margin-left: 90px;
    }

    .country {
        display: grid;
        grid-template-columns: auto auto auto auto;
        grid-column-gap: 50px;
        margin-left: 90px;
        padding: 5px 0;
    }

    .country-selection {
        border-radius: 5px
    }
    
    .country-phone-code {
        margin-left: 50px;
        border: 1px solid orange;
        border-radius: 5px;
        text-align: center;
        padding-top: 5px;
    }

`;


const MobileEmailTestStyle = styled.div`
    color: white;
    background-color: rgb(36, 35, 35);
    margin: 5px 10px 30px 10px;
    padding: 0;

    .container {
        // padding: 10px;
    }

    .container .loginContainer {
        background-color: rgb(97, 91, 91);
        text-align: center
        height: auto;
        margin: 20px 0;
        padding: 10px 0 10px 10px;
        border-radius: 10px;
    }

    .container .loginContainer p {
        text-align: start;
        margin-top: 10px;
    }

    label {
        margin-left: 10px;
    }

    input {
        border: 1px solid white;
        border-radius: 5px;
        margin-left: 10px;
        background-color: rgb(97, 91, 91);
        padding: 5px 15px;
        height: 30px;
        width: 300px;
    }

    textarea {
        border: 1px solid white;
        border-radius: 5px;
        margin-left: 10px;
        background-color: rgb(97, 91, 91);
        padding: 5px 15px;
        height: 120px;
        width: 300px;
    }

    .btn {
        margin: 15px 20px 5px;
        font-size: 15px;
        border-radius: 30px;
        padding: 10px 20px;
    }

    .message-country {
        margin-left: 15px;
    }
    
    .country {
        display: grid;
        grid-template-columns: auto auto auto auto;
        grid-column-gap: 40px;
        margin-left: 10px;
        padding: 5px 0;
    }

    .country-selection {
        border-radius: 5px
    }
    
    .country-phone-code {
        border: 1px solid orange;
        border-radius: 5px;
        text-align: center;
        padding-top: 5px;
    }


`;


export { EmailTestStyle, MobileEmailTestStyle };