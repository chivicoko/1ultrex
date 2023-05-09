import styled from "styled-components";

const ConfirmDepositStyle = styled.div`
    margin: 40px 0 50px;
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    color: white;
    
    .container {
        margin: 0;
        padding: 0;
    }
    
    section {
        margin-top: 50px;
        margin-bottom: 120px;
    }
        
    .depositeContainer h1 {
        color: orange;
        margin: 10px 15px 7px 15px;
        font-size: 40px;
    }

    .depositeContainer .p {
        color: white;
        text-align: center;
        margin-top: 25px;
        margin-bottom: 30px;
    }

    .userSection {
        border-radius: 10px;
        padding: 10px 0;
        background: grey;
    }
    
    .userSection div {
        display: flex;
        justify-content: space-between;
        align-items: start;
        padding: 5px 15px;
        text-align: start;
    }

    .saveCancel {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .btn {
        margin: 25px 0 10px;
        border-radius: 5px;
        padding: 10px 40px;
    }
`;

const MobileConfirmDepositStyle = styled.div`
    margin: 0;
    color: white;
    text-align: center;

    section {
        margin-top: 50px;
        margin-bottom: 120px;
    }
        
    .depositeContainer h1 {
        color: orange;
        margin: 10px 0;
        font-size: 17px;
    }

    .depositeContainer .p {
        color: white;
        font-size: 14px;
        text-align: center;
        margin-top: 25px;
        margin-bottom: 30px;
    }

    .userSection {
        border-radius: 10px;
        padding: 10px 0;
        background: grey;
    }

    .userSection div {
        display: flex;
        justify-content: space-between;
        align-items: start;
        font-size: 13px;
        padding: 5px 10px;
        text-align: start;
    }

    .saveCancel {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .btn {
        margin: 25px 0 10px;
        font-size: 15px;
        border-radius: 5px;
        padding: 10px 40px;
    }
`;

export { ConfirmDepositStyle, MobileConfirmDepositStyle };