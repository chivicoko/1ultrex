import styled from "styled-components";

const ContactStyle = styled.div`
    color: white;
    background-color: rgb(36, 35, 35);
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;

    .container {
        padding: 50px 100px 200px 100px;
    }
    
    .container .loginContainer {
        background-color: rgb(97, 91, 91);
        text-align: center
        height: auto;
        margin: 30px 300px;
        padding: 40px 0;
        border-radius: 40px;
    }
    
    .container .loginContainer p {
        text-align: start;
        margin: 15px 0;
    }
    
    label {
        margin: 30px 0 30px 110px;
        margin-left: 133px;
    }
    
    input {
        border: 1px solid white;
        border-radius: 5px;
        margin-left: 133px;
        background-color: rgb(97, 91, 91);
        padding: 5px 10px;
        height: 35px;
        margin-bottom: 15px;
        width: 300px;
    }
    
    textarea {
        border: 1px solid white;
        border-radius: 5px;
        margin-left: 133px;
        background-color: rgb(97, 91, 91);
        padding: 5px 15px;
        height: 120px;
        width: 300px;
    }

`;

// mobile
const MobileContactStyle = styled.div`
    color: white;
    background-color: rgb(36, 35, 35);
    margin: 50px 10px 80px 7px;
    padding: 0;

    .container {
        padding: 10px;
    }

    .container .loginContainer {
        background-color: rgb(97, 91, 91);
        text-align: center
        height: auto;
        margin: 5px 0 30px;
        padding: 25px 5px;
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
        height: 35px;
        width: 300px;
        margin-bottom: 15px;
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
        margin: 35px 10px 20px;
        font-size: 15px;
        border-radius: 5px;
        padding: 10px 20px;
        width: 300px;
    }

`;


export { ContactStyle, MobileContactStyle };