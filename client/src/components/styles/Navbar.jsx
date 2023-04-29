import styled from "styled-components";

const Navbar = styled.div`
    background-color: rgb(36, 35, 35);
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    padding: 15px 0 15px 55px;
    justify-content: center;
    text-align: center;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;

    h1 {
        float: left;
        margin: 0;
        padding: 8px; 
        padding-top: 20px;
        color: Orange;
    }

    ul {
        list-style-type: none;
        text-align: center; 
        padding-top: 10px;
        margin-top: 0;
        margin-bottom: 0;
        margin-right: 0;
        margin-left: 200px;
        float: left;
      }
      
      ul li {
        list-style-type: none;
        display: inline-block;
        font-size: 20px;
        padding: 20px;
        color: white;
      }
      
      ul li:active {
        color: orange;
      }


      // mobile
      @media only screen and (max-width: 40em) {   // 640px
        background-color: rgb(36, 35, 35);
        font-family: Arial, Helvetica, sans-serif;
        color: white;
        padding: 15px 0 15px 55px;
        justify-content: center;
        text-align: center;
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;

        // ---------------
        flex: 1;

        align-self: flex-start;

        padding: 1rem 3rem;

        display: flex;
        justify-content: space-between;
        align-items: center;

        // background-color: white;

        // --
        position: fixed;
        width: 100vw;
        bottom: 0;

        
      ul {
        list-style-type: none;
        text-align: center; 
        padding-top: 10px;
        margin-top: 0;
        margin-bottom: 0;
        margin-right: 0;
        margin-left: 200px;
        float: left;

        // ------
        display: flex;
        list-style: none;

        // --
        position: fixed;
        right: 0;
        top: 0;

        height: 100%;

        flex-direction: column;

        background-color: white;
        padding: 1rem 2rem;

        transform: ${({ openDrawer }) =>
        openDrawer ? `translateX(0)` : `translateX(100%)`};
        
      }
      
      ul li {
        list-style-type: none;
        display: inline-block;
        font-size: 20px;
        padding: 20px;
        color: white;


        // -------
        padding: 0 1rem;
        cursor: pointer;
        
        // --
        padding: 1rem 0;
      }
      
      ul li:active {
        color: orange;
      }

        
      }

`;

export default Navbar;