import styled from "styled-components";

const ReferralStyle = styled.div`

`;

const MobileReferralStyle = styled.div`
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
        text-align: start;
        margin-top: 25px;
        margin-bottom: 30px;
    }

    .userSection {
        padding: 10px 0;
        background: grey;
        border-radius: 10px;
    }
    .userSection div {
        padding: 15px;
        text-align: start;
        display: grid;
        grid-template-columns: auto auto;
        grid-column-gap: 10px;
    }
`;

export { ReferralStyle, MobileReferralStyle };