import React, { useEffect, useState } from 'react'
import { FAQStyle, MobileFAQStyle } from './styles/FAQStyle';
import { Wrapper } from './styles/HomeStyle';

const FAQ = () => {
  
  const [windowDimension, setWindowDimension] = useState(null);

  useEffect(() => {
      setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
      function handleResize() {
      setWindowDimension(window.innerWidth);
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowDimension <= 640;

  return (
    <Wrapper>
      {isMobile ?
      (
        <MobileFAQStyle>
          <div className='general-container'>
            <h2>Frequently Asked Question</h2>
            <div className='container-1'>
              <h3>What is UltrexGold?</h3>
              <p>UltrexGold is a leading assets management company that deals on stock,bonds,shares, assets management and foreign exchange. They also sell out preferred shares to public, companies and individuals which allows them earn daily dividends according to the proposal which you choose</p>
            </div>
            <div className='container-1'>
              <h3>Can I buy Gold from UltrexGold?</h3>
              <p>Yes you can choose from our gold options and click on the buy icon and we also provide our investors opportunity to own a physical gold by giving them gold equivalent to their earnings when they invest in our gold package and have it delivered to their doorstep on their request</p>
            </div>
            <div className='container-1'>
              <h3>Is UltrexGold available for the public?</h3>
              <p>UltrexGold is open for the public who are 18 and fulfill the legal age to buy shares or invest in our gold package</p>
            </div>
            <div className='container-1'>
              <h3>How does UltrexGold make profit?</h3>
              <p>UltrexGold is mainly involved with assets management of companies and individual and also deal on stocks,bonds,shares and foreign exchange since 2007 and subsequently we also trade gold and making great profits</p>
            </div>
            <div className='container-1'>
              <h3>How can I make more than one deposit?</h3>
              <p>Yes, the amount of the investments you can make is unlimited. You can make investments to various plans.</p>
            </div>
            <div className='container-1'>
              <h3>How can I get started?</h3>
              <p>To become a member you need to register through the sign up option as indicated after that choose the proposal which is convenient for you and follow the instructions to make deposit.</p>
            </div>
            <div className='container-1'>
              <h3>What payment system does the Company use?</h3>
              <p>We make use of perfect money,etherium and Bitcoin as a mode of payment</p>
            </div>
            <div className='container-1'>
              <h3>Can I make Deposit Through one payment system and Withdraw from another one?</h3>
              <p>No our payments are made through the same payment method to which your deposit was made</p>
            </div>
            <div className='container-1'>
              <h3>Can One have multiple accounts?</h3>
              <p>No, each member is allowed to have only one account with us</p>
            </div>
            <div className='container-1'>
              <h3>How long does it take for my 1st deposit to be added to my account?</h3>
              <p>All deposits are added to your account automatically, except for Bitcoin which is added after 3 confirmations.if your deposit has not been added please contact our support agents with your deposit details such as date, amount and batch#.</p>
            </div>
            <div className='container-1'>
              <h3>When will I see my after making a deposit?</h3>
              <p>your earnings reflect to your account exactly 24hours after you have made the deposit</p>
            </div>
            <div className='container-1'>
              <h3>How do I withdraw funds from my UltrexGold Account?</h3>
              <p>you can request to withdraw your available funds by clicking withdraw after logging into the members area</p>
            </div>
            <div className='container-1'>
              <h3>What is the minimum amount for withdrawal?</h3>
              <p>You can withdraw as low as $1</p>
            </div>
            <div className='container-1'>
              <h3>Do you offer referral commission?</h3>
              <p>Yes we offer a direct referral commission of 10% for all deposits referred by you</p>
            </div>
            <div className='container-1'>
              <h3>How can I refer someone?</h3>
              <p>You can see your referral link after logging into your account,your referral must register a new account using this link.</p>
            </div>
            <div className='container-1'>
              <h3>Are withdraw instant?</h3>
              <p>UltrexGold operate an automated system of payment so once our system detects your withdrawal request your payment will be made.</p>
            </div>
            <div className='container-1'>
              <h3>Is it possible to Loose money to UltexGold?</h3>
              <p>One of the best parts of investing with e_goldassetsltd is that we provide a guaranteed and stable return to ensure our investors do not loose money</p>
            </div>
            <div className='container-1'>
              <h3>What is the minimum amount to deposit?</h3>
              <p>Each proposal has its minimum deposit which is clearly written choose your proposal to make your deposit</p>
            </div>
            <div className='container-1'>
              <h3>How do I get my gold delivered to me when I buy?</h3>
              <p>We ensure the safety and secure transportation of gold by partnering with the trusted,and the international logistics leaders in the industry.our long-term partnership with G4S,transguard and brinks to ensure the safest,and fastest delivery of gold as well as eliminating any challenges pertaining to logistics</p>
            </div>
            <div className='container-1'>
              <h3>What if I do not see answers to my Question?</h3>
              <p>You can contact via the customer service live support in the website or you can send us mail and We will be glad to attend to you any time.</p>
            </div>
          </div>
        </MobileFAQStyle>
      )
      :
      (
        <FAQStyle>
          <div className='general-container'>
            <h2>Frequently Asked Question</h2>

            <div className='container-1'>
              <h2>What is UltrexGold?</h2>
              <p>UltrexGold is a leading assets management company that deals on stock,bonds,shares, assets management and foreign exchange. They also sell out preferred shares to public, companies and individuals which allows them earn daily dividends according to the proposal which you choose</p>
            </div>
            <div className='container-1'>
              <h2>Can I buy Gold from UltrexGold?</h2>
              <p>Yes you can choose from our gold options and click on the buy icon and we also provide our investors opportunity to own a physical gold by giving them gold equivalent to their earnings when they invest in our gold package and have it delivered to their doorstep on their request</p>
            </div>
            <div className='container-1'>
              <h2>Is UltrexGold available for the public?</h2>
              <p>UltrexGold is open for the public who are 18 and fulfill the legal age to buy shares or invest in our gold package</p>
            </div>
            <div className='container-1'>
              <h2>How does UltrexGold make profit?</h2>
              <p>UltrexGold is mainly involved with assets management of companies and individual and also deal on stocks,bonds,shares and foreign exchange since 2007 and subsequently we also trade gold and making great profits</p>
            </div>
            <div className='container-1'>
              <h2>How can I make more than one deposit?</h2>
              <p>Yes, the amount of the investments you can make is unlimited. You can make investments to various plans.</p>
            </div>
            <div className='container-1'>
              <h2>How can I get started?</h2>
              <p>To become a member you need to register through the sign up option as indicated after that choose the proposal which is convenient for you and follow the instructions to make deposit.</p>
            </div>
            <div className='container-1'>
              <h2>What payment system does the Company use?</h2>
              <p>We make use of perfect money,etherium and Bitcoin as a mode of payment</p>
            </div>
            <div className='container-1'>
              <h2>Can I make Deposit Through one payment system and Withdraw from another one?</h2>
              <p>No our payments are made through the same payment method to which your deposit was made</p>
            </div>
            <div className='container-1'>
              <h2>Can One have multiple accounts?</h2>
              <p>No, each member is allowed to have only one account with us</p>
            </div>
            <div className='container-1'>
              <h2>How long does it take for my 1st deposit to be added to my account?</h2>
              <p>All deposits are added to your account automatically, except for Bitcoin which is added after 3 confirmations.if your deposit has not been added please contact our support agents with your deposit details such as date, amount and batch#.</p>
            </div>
            <div className='container-1'>
              <h2>When will I see my after making a deposit?</h2>
              <p>your earnings reflect to your account exactly 24hours after you have made the deposit</p>
            </div>
            <div className='container-1'>
              <h2>How do I withdraw funds from my UltrexGold Account?</h2>
              <p>you can request to withdraw your available funds by clicking withdraw after logging into the members area</p>
            </div>
            <div className='container-1'>
              <h2>What is the minimum amount for withdrawal?</h2>
              <p>You can withdraw as low as $1</p>
            </div>
            <div className='container-1'>
              <h2>Do you offer referral commission?</h2>
              <p>Yes we offer a direct referral commission of 10% for all deposits referred by you</p>
            </div>
            <div className='container-1'>
              <h2>How can I refer someone?</h2>
              <p>You can see your referral link after logging into your account,your referral must register a new account using this link.</p>
            </div>
            <div className='container-1'>
              <h2>Are withdraw instant?</h2>
              <p>UltrexGold operate an automated system of payment so once our system detects your withdrawal request your payment will be made.</p>
            </div>
            <div className='container-1'>
              <h2>Is it possible to Loose money to UltexGold?</h2>
              <p>One of the best parts of investing with e_goldassetsltd is that we provide a guaranteed and stable return to ensure our investors do not loose money</p>
            </div>
            <div className='container-1'>
              <h2>What is the minimum amount to deposit?</h2>
              <p>Each proposal has its minimum deposit which is clearly written choose your proposal to make your deposit</p>
            </div>
            <div className='container-1'>
              <h2>How do I get my gold delivered to me when I buy?</h2>
              <p>We ensure the safety and secure transportation of gold by partnering with the trusted,and the international logistics leaders in the industry.our long-term partnership with G4S,transguard and brinks to ensure the safest,and fastest delivery of gold as well as eliminating any challenges pertaining to logistics</p>
            </div>
            <div className='container-1'>
              <h2>What if I do not see answers to my Question?</h2>
              <p>You can contact via the customer service live support in the website or you can send us mail and We will be glad to attend to you any time.</p>
            </div>
          </div>
        </FAQStyle>
      )}
    </Wrapper>
  )
}

export default FAQ;