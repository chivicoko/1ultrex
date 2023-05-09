import styled from "styled-components";

const UserStyle = styled.div`
    margin: 40px 0 50px;
    display: flex;
    justify-content: space-between;

    section {
        // display: flex;
        // justify-content: space-between;    
    }
        
    .container {
        margin: 0;
        padding: 0;
    }
    
    .userContainer {
        color: white;
        margin: 0 20px 20px;
        border-radius: 15px;
    }
        
    .userContainer h1 {
        color: orange;
        font-size: 40px;
        margin-top: 15px;
    }
    
    .userSection {
        background: grey;
        margin-top: 20px;
        text-align: start;
        border-radius: 15px;
        padding: 15px 0;
    }

    .userSection p {
        display: flex;
        justify-content: space-between;
        margin: 15px 50px;
        font-size: 15px;
    }

    .userSection p div {
        text-align: start;
    }
    
`;

// mobile
const MobileUserStyle = styled.div`
    margin: 0;
    text-align: center;

    section {
        margin-top: 50px;
        margin-bottom: 120px;
    }
        
    .userContainer {
        margin: 0 3px 40px;
    }
        
    .userContainer h1 {
        color: orange;
        margin: 10px 0 20px 0;
        font-size: 17px;
    }

    .userSection {
        background: grey;
        margin-top: 20px;
        text-align: start;
        border-radius: 15px;
        padding: 5px;
    }

    label {
        margin-left: 20px;
    }

    // .userSection p div {
    //     border-bottom: 1px solid white;
    //     // border-radius: 7px;
    //     // padding: 10px;
    //     // margin: 5px 10px 0 20px;
    //     width: 317px;
    //     height: 35px;
    //     text-align: center;
    // }

    .userSection div {
        margin-bottom: 25px;
        margin-top: 30px;
        padding: 0 20px;
        display: grid;
        grid-template-columns: auto auto;
        grid-column-gap: 20px;
    }

    .userSection p {
        text-align: start;
    }

`;

export { UserStyle, MobileUserStyle };