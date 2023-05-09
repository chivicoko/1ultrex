import styled from "styled-components";

const UserInvestmentStyle = styled.div`
    margin: 40px 0 50px;
    display: flex;
    justify-content: space-between;
    
    .container {
        margin: 0;
        padding: 0;
    }

    .container section {
        display: flex;
        justify-content: space-between;
    }
    
    .depositeContainer {
        color: white;
        margin: 0 20px 20px;
        border-radius: 15px;
    }
    
    .depositeContainer h1 {
        color: orange;
        margin: 10px 15px 20px 15px;
        font-size: 40px;
    }
    
    .depositeContainer .p {
        text-align: start;
    }
    
    .depo {
        border-radius: 15px;
        border : 1px solid white;
        padding: 10px;
        margin-bottom: 50px;
    }

    .depo p {
        text-align: center;
    }

    .depositeContainer-item1 {
        border-bottom: 1px solid orange;
        padding: 15px 10px;
        margin: 5px;
        color: orange;
        display: grid;
        grid-template-columns: auto auto auto;
        grid-column-gap: 300px;
    }

    .depositeContainer-item2 {
        display: grid;
        grid-template-columns: auto auto auto;
        grid-column-gap: 300px;
        padding: 20px 0 0;
    }
    
    .depositeContainer-item1- {
        border: 1px solid orange;
        border-radius: 15px;
        padding: 25px 10px;
        margin: 25px;
        display: grid;
        grid-template-columns: auto auto;
        grid-column-gap: 300px;
    }

    .depositeContainer-item1- p {
        text-align: start;
    }

    .depositeContainer-item2- {
        display: grid;
        grid-template-columns: auto auto;
        grid-column-gap: 300px;
        padding: 5px;
    }

    .depo .no-depo {
        font-size: 11px;
        text-align: start;
        margin: 15px;
    }

`;

// mobile
const MobileUserInvestmentStyle = styled.div`
    margin: 0;
    text-align: center;

    .depositeContainer {
        color: white;
        margin: 60px 3px 150px;
    }

    .depositeContainer h1 {
        color: orange;
        margin: 10px 0 20px 0;
        font-size: 17px;
    }

    .depositeContainer .p {
        text-align: start;
    }

    .depo {
        border-radius: 7px;
        border : 1px solid white;
        padding: 7px;
        margin-bottom: 20px;
    }

    .depo p {
        text-align: center;
    }

    .depositeContainer-item1 {
        border-bottom: 1px solid orange;
        margin: 5px;
        padding: 10px 0;
        color: orange;
        display: grid;
        grid-template-columns: auto auto auto;
        grid-column-gap: 45px;
    }

    .depositeContainer-item2 {
        display: grid;
        grid-template-columns: auto auto auto;
        grid-column-gap: 45px;
        padding: 10px 0 0;
    }

    .depositeContainer-item1- {
        border: 1px solid orange;
        border-radius: 7px;
        padding: 10px 5px;
        margin: 15px 5px;
        display: grid;
        grid-template-columns: auto auto;
        grid-column-gap: 45px;
    }

    .depositeContainer-item1- p {
        text-align: start;
    }

    .depositeContainer-item2- {
        display: grid;
        grid-template-columns: auto auto;
        grid-column-gap: 45px;
        padding: 5px;
    }

    .depo .no-depo {
        font-size: 10px;
        text-align: start;
        margin: 45px 5px 10px;
        color: grey;
    }

`;

export { UserInvestmentStyle, MobileUserInvestmentStyle };