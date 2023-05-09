import styled from "styled-components";

const SettingsStyle = styled.div`
    
`;

const MobileSettingsStyle = styled.div`
    color: white;
    background-color: rgb(36, 35, 35);
    margin: 50px 10px 80px 7px;
    padding: 0;
    margin: 0;
    text-align: center;


    .container {
        padding: 10px;
    }

    .container .loginContainer {
        background-color: rgb(97, 91, 91);
        text-align: center
        height: auto;
        margin: 35px 0 100px;
        padding: 25px 5px;
        border-radius: 10px;
    }

    .container .loginContainer p {
        text-align: start;
        margin-top: 10px;
    }

    label {
        margin-left: 22px;
    }

    input {
        border: 1px solid white;
        border-radius: 3px;
        margin-left: 22px;
        margin-bottom: 25px;
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

`;

export { SettingsStyle, MobileSettingsStyle };