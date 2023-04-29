import styled from "styled-components";

const RegisterStyle = styled.div`
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
        margin-left: 133px;
    }
    
    input {
        margin-bottom: 15px;
        border: 1px solid white;
        border-radius: 5px;
        margin-left: 153px;
        background-color: rgb(97, 91, 91);
        padding: 5px 10px;
        height: 35px;
        width: 300px;
    }

    .checkBtn {
        text-align: start;
    }

    .checkBtn p {
        padding-left: 155px;
        margin-bottom: 0;
        font-size: 11px;
    }

    .checkBtn input {
        width: 15px;
        height: 15px;
        margin-top: 10px;
        margin-right: 30px;
    }

`;

// mobile
const MobileRegisterStyle = styled.div`
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
        margin-bottom: 15px;
        border: 1px solid white;
        border-radius: 5px;
        margin-left: 10px;
        background-color: rgb(97, 91, 91);
        padding: 5px 15px;
        height: 35px;
        width: 300px;
    }

    .btn {
        margin: 35px 10px 20px;
        font-size: 15px;
        border-radius: 5px;
        padding: 10px 20px;
        width: 300px;
    }
    
    .checkBtn {
        text-align: start;
    }

    .checkBtn p {
        margin-left: 10px;
        margin-bottom: 0;
    }
    
    .checkBtn input {
        width: 15px;
        height: 15px;
        margin-top: 10px;
        margin-right: 30px;
    }


`;


export { RegisterStyle, MobileRegisterStyle };