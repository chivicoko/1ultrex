import React, { useEffect, useState } from "react";
import { Wrapper } from "../styles/HomeStyle";
import Sidebar from "./Sidebar";
import { PromoStyle, MobilePromoStyle } from "../styles/PromoStyle";

import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { useSelector } from "react-redux";

const Promo = () => {
  const { t } = useTranslation(["common"]);

  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("en");
    }
  }, []);

  const { user } = useSelector((state) => state.auth);

  const [currentUser, setCurrentUser] = useState();

  const [windowDimension, setWindowDimension] = useState(null);

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    setCurrentUser(user.username);

    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowDimension <= 640;

  return (
    <Wrapper>
      {isMobile ? (
        <MobilePromoStyle>
          <Sidebar />
          <div className="container">
            <section>
              <div className="depositeContainer">
                <h1>{t("Referral Links")}</h1>
                <p className="p">{t("The best internet investment")}</p>
                <div className="userSection">
                  <div>
                    <p style={{ marginLeft: "20px" }}>
                      <Link>
                        {"https://ultrexgold.herokuapp.com/"}
                        https://ultrexgoldintl.com/?ref=
                        {currentUser}
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </MobilePromoStyle>
      ) : (
        <PromoStyle>
          <Sidebar />
          <div className="container">
            <section>
              <div className="depositeContainer">
                <h1>{t("Referral Links")}</h1>
                <p className="p">{t("The best internet investment")}</p>
                <div className="userSection">
                  <div>
                    <Link>
                      {"https://ultrexgold.herokuapp.com/"}
                      https://ultrexgoldintl.com/?ref=
                      {currentUser}
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </PromoStyle>
      )}
    </Wrapper>
  );
};

export default Promo;
