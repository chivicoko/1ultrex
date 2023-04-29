import styled from "styled-components";

const PromoStyle = styled.div`

`;

const MobilePromoStyle = styled.div`
    margin: 0;
    text-align: center;

    section {
        margin-top: 50px;
        margin-bottom: 120px;
    }
        
    .depositeContainer h1 {
        color: orange;
        margin: 10px 0 10px 0;
        font-size: 17px;
    }

    .depositeContainer .p {
        color: white;
        font-size: 14px;
        margin-bottom: 50px;
    }

    .userSection div {
        border-radius: 15px;
        background: grey;
        margin-bottom: 25px;
        margin-top: 25px;
        padding: 20px;
    }

`;

export { PromoStyle, MobilePromoStyle };