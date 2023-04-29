import styled from "styled-components";

const UserStyle = styled.div`
    margin: 70px 50px 50px;
    text-align: center;
    
    section {
        display: grid;
        grid-template-columns: auto auto;
        grid-column-gap: 20px;
    }
        
    .userContainer {
        margin: 0 20px 20px;
        // border: 1px solid orange;
    }
        
    .userContainer h1 {
        color: orange;
        font-size: 40px;
    }
    
    .userSection {
        background: grey;
        margin-top: 20px;
        text-align: start;
        border-radius: 15px;
        padding: 35px 15px 15px;
    }

    .userSection p {
        display: grid;
        grid-template-columns: auto auto;
        grid-column-gap: 200px;
        margin: 20px 200px 70px;
        border-bottom: 1px solid black;
        padding-bottom: 10px;
        width: 550px;
    }

    .userSection p div {
        text-align: start;
    }
    
    // .userSection p div {
    //     border-bottom: 1px solid white;
    //     // border-radius: 15px;
    //     padding: 20px 10px 15px 10px;
    //     margin: 10px 200px 10px 200px;
    //     width: 450px;
    //     // height: 55px;
    //     text-align: center;
    // }

    // .userSection p {
    //     margin-bottom: 15px;
    //     margin-top: 45px;
    // }
    
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