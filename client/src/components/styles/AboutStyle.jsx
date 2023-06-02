import styled from "styled-components";

const AboutStyle = styled.div`
    color: white;
    background-color: rgb(36, 35, 35);
    width: 100%;
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;

    .container {
        padding: 50px;
    }
    
    .about {
        margin-top: 50px;
        text-align: center;
    }

    .about h2 {
        font-size: 40px;
        text-align: start;
        color: orange;
        font-weight: 400;
    }

    .about .video {
        padding: 0 0 30px;
    }

    .about p {
        font-size: 18px;
        // word-spacing: 5px;
        // letter-spacing: 1px;
        line-spacing: 10px;
    }
    
`;


// mobile
const MobileAboutStyle = styled.div`
        
    .about {
        text-align: center;
        margin: 50px 5px;
    }

    .about h2 {
        font-size: 40px;
        text-align: center;
        color: orange;
        // margin-top: 45px;
        font-weight: 400;
    }

    .about .video {
        padding: 0;
        margin: 0;
    }

    .about p {
        margin: 10px 0 0 0;
        padding-top: 10px;
        font-size: 15px;
        word-spacing: 1px;
        // letter-spacing: 1px;
        line-spacing: 10px;
        color: white;
        text-align: start;
    }

`;

export {AboutStyle, MobileAboutStyle };