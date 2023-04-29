import styled from "styled-components";

const Wrapper = styled.main`
    // display: flex;
    // background-color: rgb(36, 35, 35);
`;

const HomeStyle = styled.main`
    color: white;
    // background-color: rgb(36, 35, 35);
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;

    .container {
        margin: 0 100px;
    }

    .welcome-h1 {
        margin: 0;
        font-size: 80px;
        padding-top: 160px;
    }

    .welcome-h2 {
        margin: 0;
        font-size: 50px;
        padding: 20px 0 30px 0;
    }

    .welcome-p {
        margin: 0;
        font-size: 25px;
        // font-weight: 400;
        padding: 20px 0 50px 0;
    }

    .we-section {
        display: grid;
        grid-template-columns: auto auto auto auto;
        // grid-column-gap: 10px;
        padding: 180px 0;
    }

    .we-section .div-1 {
        text-align: center;
    }

    .div-1-1 {
        margin-left: 95px;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: 10px solid orange;
    }

    .div-1 .div-1-1 .div-1-p-1 {
        margin: 35px 0 180px 0;
    }

    .div-1-p-2 {
        margin-top: 25px;
        text-align: center;
    }

    .div-1 .pp {
        width: 300px;
        line-height: 23px;
    }

    .imgSpancontainer {
        padding-bottom: 140px;
    }
    
    .ourAct {
        margin-top: 140px;
        text-align: start;
        margin: 150px 90px;
    }
    
    .ourAct h2 {
        font-size: 40px;
        text-align: start;
        color: orange;
        margin: 0;
        font-weight: 400;
        padding-bottom: 20px;
    }

    .ourAct p {
        margin: 10px 0 0 0;
        padding-bottom: 40px;
        
        font-size: 18px;
        word-spacing: 5px;
        letter-spacing: 1px;
        line-spacing: 10px;
    }
    
    .about {
        margin: 100px 100px 40px 100px;
        text-align: center;
    }

    .about h2 {
        font-size: 40px;
        text-align: start;
        color: orange;
        margin: 0;
        font-weight: 400;
        padding-bottom: 20px;
    }

    .about .video {
        padding: 30px 0;
    }

    .about p {
        font-size: 18px;
        word-spacing: 5px;
        letter-spacing: 1px;
        line-spacing: 10px;
    }
    
    .plans {
        margin-top: 80px;
        margin-left: 120px;
    }
    
    .planSection {
        display: grid;
        grid-template-columns: auto auto auto auto;
        grid-column-gap: 50px;
        padding: 50px 0;
    }

    .plans .plansH2-1 {
        font-size: 40px;
        text-align: start;
        color: orange;
        margin: 0;
        font-weight: 400;
    }

    .plans p {
        margin: 10px 0 0 0;
        text-align: start;
        padding-bottom: 40px;
        padding-top: 20px;
    }

    // .plan .buyGoldBtn {
    //     padding: 20px 45px;
    //     margin-top: 30px;
    //     border-radius: 40px;
    //     font-size: 20px;
    //     background-color: orange;
    //     border: 2px solid rgb(36, 35, 35);
    //     color: rgb(36, 35, 35);
    // }

    .col {
        width: 100%;
        height: 350px;
        background-color: orange;
        border-radius: 20px;
    }

    .col h2 {
        font-size: 40px;
        margin-top: 30px;
    }

    .col h2, .col p, .col h4 {
        text-align: start;
        margin-left: 35px;
        color: rgb(36, 35, 35);
    }

    .col p {
        margin-right: 0;
        margin-bottom: 0;
        margin-top: 0;
    }

    .col h4 {
        font-weight: 500;
    }

    .coin-section {
        padding: 100px 0;
    }

    .coin-section .coin-div {
        display: grid;
        grid-template-columns: auto auto auto auto auto;
        grid-column-gap: 30px;
        padding-bottom: 50px;
    }

    .coin-section h2 {
        font-size: 40px;
        text-align: start;
        color: orange;
        margin: 0;
        font-weight: 400;
        padding-bottom: 20px;
        margin-left: 100px;
    }

`;


// mobile
const MobileHomeStyle = styled.main`
    // background-color: rgb(36, 35, 35);
    color: white;
    
    .container {
        margin: 80px 0;
    }

    .container p {
        margin-top: 15px;
    }
    
    .btn {
        margin: 35px 20px 0;
        font-size: 15px;
        border-radius: 30px;
        padding: 10px 20px;
    }
    
    .we-section {
        padding: 110px 0;
    }

    .we-section .div-1 {
        text-align: center;
        color: white;
    }

    .div-1-1 {
        margin-left: 88px;
        margin-top: 50px;
        margin-bottom: 10px;
        width: 150px;
        height: 150px;
        border-radius: 50%;
        border: 20px solid orange;
    }

    .div-1 .div-1-1 .div-1-p-1 {
        margin: 45px 0 150px 0;
        color: white;
    }

    .div-1 h3 {
        margin-bottom: 0;
    }

    .div-1 .pp {
        line-height: 17px;
        margin-top: 2px;
    }

    .imgSpancontainer {
        padding-bottom: 20px;
    }

    .img1, .img2 {
        width: 150px;
    }
    
    .ourAct {
        margin-top: 140px;
        text-align: center;
        margin: 150px 5px;
    }
    
    .ourAct h2 {
        font-size: 30px;
        color: orange;
        margin: 0;
        font-weight: 400;
    }

    .ourAct p {
        margin: 10px 0 0 0;
        font-size: 15px;
        word-spacing: 5px;
        letter-spacing: 1px;
        line-spacing: 10px;
        text-align: start;
    }
      
    .about {
        text-align: center;
    }

    .about h2 {
        font-size: 40px;
        text-align: center;
        color: orange;
        margin: 0;
        font-weight: 400;
    }

    .about .video {
        padding: 0;
    }

    .about p {
        margin: 10px 0 0 0;
        padding-bottom: 10px;
        font-size: 15px;
        word-spacing: 5px;
        letter-spacing: 1px;
        line-spacing: 10px;
        text-align: start;
    }
    
    .plans {
        margin-top: 100px;
        margin-left: 30px;
        margin-right: 30px;
    }
    
    .plans .plansH2-1 {
        font-size: 40px;
        text-align: center;
        color: orange;
        margin: 0;
        font-weight: 400;
    }
    
    .planSection {
        padding: 10px 0;
    }
    
    .col h2 {
        font-size: 40px;
        margin-top: 30px;
        padding-top: 10px;
    }

    .col {
        width: 100%;
        height: 320px;
        background-color: orange;
        border-radius: 15px;
    }
    
    .plans p {
        margin: 10px 0 0 0;
        text-align: start;
        padding-top: 20px;
        padding-bottom: 10px;
    }

    .col h2, .col p, .col h4 {
        text-align: start;
        margin-left: 35px;
        color: rgb(36, 35, 35);
    }

    .col p {
        margin-right: 0;
        margin-bottom: 0;
        margin-top: 0;
    }

    .col h4 {
        font-weight: 500;
    }

    .planBtn {
        word-spacing: 10px;
        letter-spacing: 4px;
        font-weight: 400;
        margin-top: 50px;
    }
    
    .coin-section {
        padding: 100px 0 30px 0;
    }

    
    .coin-section h2 {
        font-size: 25px;
        text-align: center;
        color: orange;
        font-weight: 400;
        padding-bottom: 20px;
        margin-top: 50px;
    }

    .coin-section .coin-div {
        display: grid;
        grid-template-columns: auto auto auto;
        grid-column-gap: 20px;
        // padding-bottom: 50px;
    }

    .coin-section .coin-div .coin p {
        margin-bottom: 40px;
    }


`;

export { HomeStyle, MobileHomeStyle, Wrapper };