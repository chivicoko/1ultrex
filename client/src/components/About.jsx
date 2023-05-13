import React, { useEffect, useState } from 'react';
import { AboutStyle, MobileAboutStyle } from './styles/AboutStyle';
import { Wrapper } from './styles/HomeStyle';
import ultrexVid from '../assets/UltrexGoldVid.mp4';
import ReactPlayer from 'react-player';

import { useTranslation } from 'react-i18next';
import i18next from 'i18next'

const About = () => {
  const { t } = useTranslation(["common"]);

    useEffect(() => {
      if (localStorage.getItem("i18nextLng")?.length > 2) {
        i18next.changeLanguage('en');
      }
    }, [])

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
          <MobileAboutStyle>
              <div className='container'>
                    <h2 style={{marginBottom: '-75px'}}>About Us</h2>
                <div className='about'>
                    <div className='video'>
                        <ReactPlayer width={'100%'} url={ultrexVid} controls={true} />
                    </div>
                    <p>
                    ultrex<span style={{color: 'orange'}}>gold</span> {t('is a leading asset management and gold trading company based in Canada, we develop, operate, maintain and sell assets in a cost-effective manner, and also trade on gold.')} ultrex<span style={{color: 'orange'}}>gold</span> {t('team has an average experience of over 13years in stock market and assets management and 5years in Gold trading. They are supported by a global team of asset, investment management and finance professionals.')} ultrex<span style={{color: 'orange'}}>gold</span> {t('bring to the understanding of their investors that Stocks traded on the stock market are equities where stockholders own a small or large portion of the company whose stocks they trade. Gold are commodities. Investors either hold a physical gold product or make money from the difference in the buy and sell price of the gold when the demand for the gold increases and spot prices rise. The stock and gold markets exist and function independently of each other. Historically, Gold markets move in the opposite direction of the stock market. This correlation gives investors a viable option should the stock market crash. Gold may also produce impressive short-term investment returns as well during periods of ultra-low interest rates, as low rates make the opportunity cost of holding Gold less.')}
                    </p>
                </div>
            </div>
          </MobileAboutStyle>
        )
        :
        (
          <AboutStyle>
            <div className='container'>
                    <h2>{t('About Us')}</h2>
            <div className='about'>
                    <div className='video'>
                        <ReactPlayer width={'100%'} url={ultrexVid} controls={true} />
                    </div>
                    <p>
                    ultrex<span style={{color: 'orange'}}>gold</span> {t('is a leading asset management and gold trading company based in Canada, we develop, operate, maintain and sell assets in a cost-effective manner, and also trade on gold.')} ultrex<span style={{color: 'orange'}}>gold</span> {t('team has an average experience of over 13years in stock market and assets management and 5years in Gold trading. They are supported by a global team of asset, investment management and finance professionals.')} ultrex<span style={{color: 'orange'}}>gold</span> {t('bring to the understanding of their investors that Stocks traded on the stock market are equities where stockholders own a small or large portion of the company whose stocks they trade. Gold are commodities. Investors either hold a physical gold product or make money from the difference in the buy and sell price of the gold when the demand for the gold increases and spot prices rise. The stock and gold markets exist and function independently of each other. Historically, Gold markets move in the opposite direction of the stock market. This correlation gives investors a viable option should the stock market crash. Gold may also produce impressive short-term investment returns as well during periods of ultra-low interest rates, as low rates make the opportunity cost of holding Gold less.')}
                    </p>
                </div>
            </div>
          </AboutStyle>
        )}

    </Wrapper>
  )
}

export default About;