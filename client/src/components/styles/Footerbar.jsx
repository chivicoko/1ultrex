import styled from "styled-components";

const Footerbar = styled.div`
    background-color: rgb(11, 10, 10);
    color: white;
    padding: 15px 60px;
    text-align: center;
    width: 100vw;

    .h {
        color: Orange;
        text-align: start;
    }

    .h h1 {
      line-height: 1.2;
      font-size: 50px;
    }

    .h h2 {
      line-height: .1;
      font-size: 15px;
    }

    .h p {
      margin-top: 20px;
    }

    .footTabs {
      text-align: center;
      margin: 60px 0 40px 0;
    }
    
    .footTabs .footCta {
      display: grid;
      grid-template-columns: auto auto auto;
      margin: 20px 0;
      text-align: center;
    }

    .cta {
      text-align: center;
    }

    .footTabs .footItem {
      line-height: 1.4;
    }

    .footTabs .footItem h2 {
      color: orange;
      margin-bottom: 10px;
    }
    
    .copyright {
      margin-top: 15px;
      margin-bottom: 0;
      color: orange;
    }

`;

// mobile
const MobileFooterbar = styled.div`
    background-color: rgb(11, 10, 10);
    color: white;
    padding: 10px 0;
    text-align: center;

    .foot {
      text-align: center;
    }

    .h {
        padding: 0 50px; 
        color: Orange;
        text-align: start;
    }

    .h h1 {
      line-height: 1;
      font-size: 50px;
    }

    .h h2 {
      line-height: 1;
      font-size: 15px;
    }
    
    .footer-p {
      margin: 10px 0;
    }
    
    .footTabs {
      text-align: center;
    }

    .footTabs .cta {
      margin: 50px 0 20px 0;
    }

    .footTabs .footItem {
      line-height: 1.5;
    }

    .footTabs .footItem h2 {
      color: orange;
      margin-top: 40px;
    }
    
    .copyright {
      margin-top: 45px;
      margin-bottom: 0;
      color: orange;
    }

`;

export { Footerbar, MobileFooterbar };