import React, { useEffect } from "react";
import heroSlider from "../assets/Hero_slider.mp4";
import bannermobile from "../assets/bannermobile.png";
import ethLogo from "../assets/ethLogo.png";
import polygonLogo from "../assets/PolygonLogo.png";
import binance from "../assets/BInanceLogo.png";
import explore from "../assets/exploreImg5.png";
import explore2 from "../assets/exploreImg4.png";
import binanceImg from "../assets/binance.svg";
import uniswap from "../assets/uniswap.svg";
// import { TestimonyCarousel } from "../utils/Carousel";

export default function Homepage() {
  return (
    <div>
      <div className="headerTextContainer">
        <p>
          <span class="colorText">Making Every</span>&nbsp;
          <span>Asset Productive</span>
        </p>
      </div>

      <div className="bannerImgContainer">
        <video className="bannerImg" autoPlay loop muted>
          <source src={heroSlider} type="video/mp4" />
        </video>
        <div className="poweredByContainer">
          <div className="poweredBy-first-child">
            <h1>Powered By</h1>
          </div>
          <div className="poweredBySubContainer">
            <img src={ethLogo} alt="" id="ethLogo" />
            <h1>Ethereum</h1>
          </div>
          <div className="poweredBySubContainer">
            <img src={polygonLogo} alt="" id="polyLogo" />
            <h1>Polygon</h1>
          </div>
          <div className="poweredBySubContainer">
            <img src={binance} alt="" id="bscLogo" />
            <h1>Binance</h1>
          </div>
        </div>
      </div>

      <section id="platforms-to-trade">
        <div className="platform_container">
          <h1>
            Trade UFT Token <br />
            <span>On Major Exchanges</span>
          </h1>
          <div className="platforms">
            <img src={binanceImg} alt="" />
            <img src={uniswap} alt="" />
          </div>
        </div>
      </section>

      <section id="explore-dapp-section">
        <div className="explore-dapp-container">
          <div className="explore-dapp-content">
            <div className="explore-dapp-title">
              Explore <br />
              <span style={{ fontWeight: "bold" }}>Omnis Dapp</span>
            </div>

            <div className="explore-dapp-sub-title">
              UniLend brings v2 OMNIS, a multichain permissionless protocol that
              enables Isolated Dual Asset Pool for lending and borrowing of all
              ERC20 tokens.
            </div>

            <div className="explore-dapp-button">
              <a
                href="https://unilendv2-testnet.netlify.app/"
                style={{ color: "#0045ff", textDecoration: "none" }}
              >
                {" "}
                Launch Dapp
              </a>
            </div>
          </div>

          <div className="explore-dapp-content-1">
            <img src={explore} alt="exploreImg1" id="exploreImg" />
          </div>

          <div className="coin1">
            <img src={require("../assets/hovercoins1.png")} alt="" />
          </div>
        </div>

        {/* <div className="mobile-explore-dapp-container">
          <div className="explore-dapp-content">
            <div className="explore-dapp-title">
              Build <br />
              <span style={{ fontWeight: "bold" }}>With UniLend </span>
            </div>

            <div className="explore-dapp-sub-title">
              Deep dive into the core UniLend v2 OMNIS smart code to understand
              the architecture of the protocol. Inviting Developers to BUIDL
              upon OMNIS infrastructure & explore the possibilities of an open
              financial institution.
            </div>

            <div className="explore-dapp-button">Launch Dapp</div>
          </div>

          <div className="explore-dapp-content-1">
            <img src={explore} alt="exploreImg1" id="exploreImg" />
          </div>
        </div> */}

        <div className="explore-dapp-container container2">
          <div className="explore-dapp-content-2">
            <img src={explore2} alt="exploreImg2" />
          </div>
          <div className="explore-dapp-content explore-content-margin">
            <div className="explore-dapp-title">
              Explore <br />
              <span style={{ fontWeight: "bold" }}>Omnis Dapp</span>
            </div>
            <div className="explore-dapp-sub-title">
              UniLend is a permission-less decentralized protocol that combines
              spotUniLend is a permission-less decentralized protocol that
              combines spot UniLend is a permission-less decentralized protocol
              that combines spot
            </div>
            <div
              className="explore-dapp-button"
              style={{ color: "#0045ff", textDecoration: "none" }}
            >
              Launch Dapp
            </div>
          </div>

          <div className="coinImg">
          <img src={require("../assets/coin1.png")} alt="" />
        </div>
        </div>

        
      </section>

      <div className="common-container">
        <div className="container-title">
          Our
          <br />
          <span className="container-title-sub">Features</span>
        </div>

        <div className="featuresContainer">
          <div className="featuresCard">
            <div className="featuresTextContainer">
              <div className="imgSection">
                <img src={require("../assets/featureImg1.png")} alt="" />
              </div>
              <h5>Permissionless Listing</h5>
              <p>
                Any ERC20 token will be able to list without any entity
                controlling the listing process, making UniLend’s lending and
                borrowing functionality accessible to every token.
              </p>
              <h4>
                {" "}
                <a
                  href="https://bit.ly/3CdW3RA"
                  style={{ color: "#0045ff", textDecoration: "none" }}
                >
                  {" "}
                  HOW IT WORKS
                </a>
              </h4>
            </div>
          </div>

          <div className="featuresCard">
            <div className="featuresTextContainer">
              <div className="imgSection">
                <img src={require("../assets/featureImg2.png")} alt="" />
              </div>
              <h5>Flash Loans</h5>
              <p>
                Permissionless Flash Loans enables users to borrow any sum of
                any token without any collateral to utilize arbitrage,
                collateral swap and self-liquidation opportunities.
              </p>
              <h4>
                <a
                  href="https://bit.ly/3CdW3RA"
                  style={{ color: "#0045ff", textDecoration: "none" }}
                >
                  {" "}
                  HOW IT WORKS
                </a>
              </h4>
            </div>
          </div>

          <div className="featuresCard">
            <div className="featuresTextContainer">
              <div className="imgSection">
                <img src={require("../assets/dual.png")} alt="" />
              </div>
              <h5>Dual Asset Pool</h5>
              <p>
                Users can create a dual asset pool for permissionless Lending &
                Borrowing for any pair of assets and leverage a new wide range
                of DeFi strategies.
              </p>
              <h4>
                <a
                  href="https://bit.ly/3rdW81n"
                  style={{ color: "#0045ff", textDecoration: "none" }}
                >
                  HOW IT WORKS
                </a>
              </h4>
            </div>
          </div>

          <div className="featuresCard">
            <div className="featuresTextContainer">
              <div className="imgSection">
                <img src={require("../assets/flexible.png")} alt="" />
              </div>
              <h5>Flexible Lending</h5>
              <p>
                Providing flexibility to lenders to choose the assets against
                which they wish to lend by selecting corresponding pools.
              </p>
              <h4>
                <a
                  href="https://bit.ly/3CdW3RA"
                  style={{ color: "#0045ff", textDecoration: "none" }}
                >
                  {" "}
                  HOW IT WORKS
                </a>
              </h4>
            </div>
          </div>

          <div className="featuresCard">
            <div className="featuresTextContainer">
              <div className="imgSection">
                <img src={require("../assets/chain.png")} alt="" />
              </div>
              <h5>On Chain Price</h5>
              <p>
                Supporting price feeds from various sources including Chainlink,
                Band Protocol & Uniswap V3 TWAP oracle to make the v2 more
                flexible to adapt to changing markets and innovations.
              </p>
              <h4>
                <a
                  href="https://bit.ly/3CdW3RA"
                  style={{ color: "#0045ff", textDecoration: "none" }}
                >
                  {" "}
                  HOW IT WORKS
                </a>
              </h4>
            </div>
          </div>

          <div className="featuresCard">
            <div className="featuresTextContainer">
              <div className="imgSection">
                <img src={require("../assets/NFTs.png")} alt="" />
              </div>
              <h5>Non-Fungible Tokenisation</h5>
              <p>
                Implementing NFTs as certificates for equities. NFT will
                represent as lender’s right to withdraw funds from the pool.
                These NFTs will determine the user’s liquidity position in the
                pool.
              </p>
              <h4>
                <a
                  href="https://bit.ly/3UEyKaZ"
                  style={{ color: "#0045ff", textDecoration: "none" }}
                >
                  {" "}
                  HOW IT WORKS
                </a>
              </h4>
            </div>
          </div>
        </div>
      </div>

      <section id="our-ecosystem-section">
        <div className="common-container">
          <div className="container-title">
            Our <br />
            <span className="container-title-sub">Ecosystem</span>
          </div>

          <div className="our-ecosystem-card-container">
            <div className="slider1">
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/ankr.svg").default}
                  alt="Group img 1"
                  id="ecoImg1"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/base.svg").default}
                  alt="Group img 2"
                  id="ecoImg2"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/bluzelle.svg").default}
                  alt="Group img 3"
                  id="ecoImg3"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/BZX.svg").default}
                  alt="Group img 4"
                  id="ecoImg4"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/Coin 98.svg").default}
                  alt="Group img 5"
                  id="ecoImg5"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/coin dcx.svg").default}
                  alt="Group img 6"
                  id="ecoImg6"
                />
              </div>

              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/crypro locally.svg").default}
                  alt="Group img 7"
                  id="ecoImg7"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/cyberfi.svg").default}
                  alt="Group img 8"
                  id="ecoImg8"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/DFYN.svg").default}
                  alt="Group img 9"
                  id="ecoImg9"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/division.svg").default}
                  alt="Group img 10"
                  id="ecoImg10"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/EPNS.svg").default}
                  alt="Group img 11"
                  id="ecoImg11"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/fantom.svg").default}
                  alt="Group img 12"
                  id="ecoImg12"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/genesis.svg").default}
                  alt="Group img 13"
                  id="ecoImg13"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/injective protocol.svg").default}
                  alt="Group img 13"
                  id="ecoImg13"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/Kucoin.svg").default}
                  alt="Group img 13"
                  id="ecoImg13"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/mirror.svg").default}
                  alt="Group img 13"
                  id="ecoImg13"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/MXC.svg").default}
                  alt="Group img 13"
                  id="ecoImg13"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/nord.svg").default}
                  alt="Group img 13"
                  id="ecoImg13"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/oddz.svg").default}
                  alt="Group img 13"
                  id="ecoImg13"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/paraswap.svg").default}
                  alt="Group img 13"
                  id="ecoImg13"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/Playcent.svg").default}
                  alt="Group img 13"
                  id="ecoImg13"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/polka bridhge.svg").default}
                  alt="Group img 13"
                  id="ecoImg13"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/Polugon.svg").default}
                  alt="Group img 13"
                  id="ecoImg13"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/poolz.svg").default}
                  alt="Group img 13"
                  id="ecoImg13"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/probit.svg").default}
                  alt="Group img 13"
                  id="ecoImg13"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/Qi Dao.svg").default}
                  alt="Group img 13"
                  id="ecoImg13"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/redkite.svg").default}
                  alt="Group img 13"
                  id="ecoImg13"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/risk harbor.svg").default}
                  alt="Group img 13"
                  id="ecoImg13"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/tidal.svg").default}
                  alt="Group img 13"
                  id="ecoImg13"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/Umbrella.svg").default}
                  alt="Group img 13"
                  id="ecoImg13"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/UNion.svg").default}
                  alt="Group img 13"
                  id="ecoImg13"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/wazirx.svg").default}
                  alt="Group img 13"
                  id="ecoImg13"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/yop.svg").default}
                  alt="Group img 13"
                  id="ecoImg13"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/zeroswap.svg").default}
                  alt="Group img 13"
                  id="ecoImg13"
                />
              </div>
            </div>
          </div>

          <div className="our-ecosystem-card-container">
            <div className="slider2">
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/ankr.svg").default}
                  alt="Group img 1"
                  id="ecoImg1"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/base.svg").default}
                  alt="Group img 2"
                  id="ecoImg2"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/bluzelle.svg").default}
                  alt="Group img 3"
                  id="ecoImg3"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/BZX.svg").default}
                  alt="Group img 4"
                  id="ecoImg4"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/Coin 98.svg").default}
                  alt="Group img 5"
                  id="ecoImg5"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/coin dcx.svg").default}
                  alt="Group img 6"
                  id="ecoImg6"
                />
              </div>

              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/crypro locally.svg").default}
                  alt="Group img 7"
                  id="ecoImg7"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/cyberfi.svg").default}
                  alt="Group img 8"
                  id="ecoImg8"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/DFYN.svg").default}
                  alt="Group img 9"
                  id="ecoImg9"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/division.svg").default}
                  alt="Group img 10"
                  id="ecoImg10"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/EPNS.svg").default}
                  alt="Group img 11"
                  id="ecoImg11"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/fantom.svg").default}
                  alt="Group img 12"
                  id="ecoImg12"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/genesis.svg").default}
                  alt="Group img 13"
                  id="ecoImg13"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/injective protocol.svg").default}
                  alt="Group img 13"
                  id="ecoImg13"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/Kucoin.svg").default}
                  alt="Group img 13"
                  id="ecoImg13"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/mirror.svg").default}
                  alt="Group img 13"
                  id="ecoImg13"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/MXC.svg").default}
                  alt="Group img 13"
                  id="ecoImg13"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/nord.svg").default}
                  alt="Group img 13"
                  id="ecoImg13"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/oddz.svg").default}
                  alt="Group img 13"
                  id="ecoImg13"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/paraswap.svg").default}
                  alt="Group img 13"
                  id="ecoImg13"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/Playcent.svg").default}
                  alt="Group img 13"
                  id="ecoImg13"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/polka bridhge.svg").default}
                  alt="Group img 13"
                  id="ecoImg13"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/Polugon.svg").default}
                  alt="Group img 13"
                  id="ecoImg13"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/poolz.svg").default}
                  alt="Group img 13"
                  id="ecoImg13"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/probit.svg").default}
                  alt="Group img 13"
                  id="ecoImg13"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/Qi Dao.svg").default}
                  alt="Group img 13"
                  id="ecoImg13"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/redkite.svg").default}
                  alt="Group img 13"
                  id="ecoImg13"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/risk harbor.svg").default}
                  alt="Group img 13"
                  id="ecoImg13"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/tidal.svg").default}
                  alt="Group img 13"
                  id="ecoImg13"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/Umbrella.svg").default}
                  alt="Group img 13"
                  id="ecoImg13"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/UNion.svg").default}
                  alt="Group img 13"
                  id="ecoImg13"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/wazirx.svg").default}
                  alt="Group img 13"
                  id="ecoImg13"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/yop.svg").default}
                  alt="Group img 13"
                  id="ecoImg13"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/zeroswap.svg").default}
                  alt="Group img 13"
                  id="ecoImg13"
                />
              </div>
            </div>
          </div>

          <div className="our-ecosystem-card-container">
            <div className="slider3">
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/ankr.svg").default}
                  alt="Group img 1"
                  id="ecoImg1"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/base.svg").default}
                  alt="Group img 2"
                  id="ecoImg2"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/bluzelle.svg").default}
                  alt="Group img 3"
                  id="ecoImg3"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/BZX.svg").default}
                  alt="Group img 4"
                  id="ecoImg4"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/Coin 98.svg").default}
                  alt="Group img 5"
                  id="ecoImg5"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/coin dcx.svg").default}
                  alt="Group img 6"
                  id="ecoImg6"
                />
              </div>

              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/crypro locally.svg").default}
                  alt="Group img 7"
                  id="ecoImg7"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/cyberfi.svg").default}
                  alt="Group img 8"
                  id="ecoImg8"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/DFYN.svg").default}
                  alt="Group img 9"
                  id="ecoImg9"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/division.svg").default}
                  alt="Group img 10"
                  id="ecoImg10"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/EPNS.svg").default}
                  alt="Group img 11"
                  id="ecoImg11"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/fantom.svg").default}
                  alt="Group img 12"
                  id="ecoImg12"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/genesis.svg").default}
                  alt="Group img 13"
                  id="ecoImg13"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/injective protocol.svg").default}
                  alt="Group img 13"
                  id="ecoImg13"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/Kucoin.svg").default}
                  alt="Group img 13"
                  id="ecoImg13"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/mirror.svg").default}
                  alt="Group img 13"
                  id="ecoImg13"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/MXC.svg").default}
                  alt="Group img 13"
                  id="ecoImg13"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/nord.svg").default}
                  alt="Group img 13"
                  id="ecoImg13"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/oddz.svg").default}
                  alt="Group img 13"
                  id="ecoImg13"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/paraswap.svg").default}
                  alt="Group img 13"
                  id="ecoImg13"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/Playcent.svg").default}
                  alt="Group img 13"
                  id="ecoImg13"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/polka bridhge.svg").default}
                  alt="Group img 13"
                  id="ecoImg13"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/Polugon.svg").default}
                  alt="Group img 13"
                  id="ecoImg13"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/poolz.svg").default}
                  alt="Group img 13"
                  id="ecoImg13"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/probit.svg").default}
                  alt="Group img 13"
                  id="ecoImg13"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/Qi Dao.svg").default}
                  alt="Group img 13"
                  id="ecoImg13"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/redkite.svg").default}
                  alt="Group img 13"
                  id="ecoImg13"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/risk harbor.svg").default}
                  alt="Group img 13"
                  id="ecoImg13"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/tidal.svg").default}
                  alt="Group img 13"
                  id="ecoImg13"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/Umbrella.svg").default}
                  alt="Group img 13"
                  id="ecoImg13"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/UNion.svg").default}
                  alt="Group img 13"
                  id="ecoImg13"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/wazirx.svg").default}
                  alt="Group img 13"
                  id="ecoImg13"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/yop.svg").default}
                  alt="Group img 13"
                  id="ecoImg13"
                />
              </div>
              <div className="our-ecosystem-card">
                <img
                  className="our-ecosystem-card-img"
                  src={require("../assets/zeroswap.svg").default}
                  alt="Group img 13"
                  id="ecoImg13"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="get-involved-section">
        <div className="get-involved-container">
          <div className="get-involved-content">
            <div className="get-involved-title">
              Get involved <br />
              <span style={{ fontWeight: "bold" }}>with us</span>
            </div>
            <div className="get-involved-sub-title">
              Join us & BUIDL the future of decentralised finance space with
              over 200k+ community members. Together we can achieve new
              frontiers in the Web3 ecosystem.
            </div>
            <button className="get-involved-button">
              <a
                href="https://bit.ly/3a4EIir"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                Register Here
              </a>
            </button>
          </div>

          <div className="get-involved-content-2">
            <div>
              <div className="get-involved-content-title">For Projects</div>
              <div className="get-involved-content-sub-title">
                We’re inviting Web3 projects to join hands with UniLend Finance
                and empower their tokens with our flagship lending and borrowing
                functionality.
              </div>
            </div>
            <div>
              <div className="get-involved-content-title">For Devlopers</div>
              <div className="get-involved-content-sub-title">
                Want to BUILD on UniLend? Welcoming developers to pre-register
                to get information about the UniLend v2 OMNIS hackathon, Grants
                Program and Bug Bounties.
              </div>
            </div>
            <div>
              <div className="get-involved-content-title">For Community</div>
              <div className="get-involved-content-sub-title">
                Community is the backbone of our project. Be part of our elite
                ambassador program UniLend Legion to push the boundaries of DeFi
                space.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="blogMobile">
        <div className="blog-mobile-container">
          <div className="container-title">
            Blog <span className="container-title-sub">& News</span>
          </div>

          <div className="blog-card-container">
            <div className="blog-card">
              <img
                className="blog-card-img"
                src={require("../assets/1YearAnniversary.png")}
                alt="card img 1"
              />
              <div className="blog-card-content">
                <a href="https://unilend.medium.com/">
                  Lorem Ipsum is simply dummy text of the printing
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section id="block-news-section">
        <div className="common-container">
          <div className="container-title">
            Blog <br />
            <span className="container-title-sub">& News</span>
          </div>
          <div className="container-sub-title">
            Check the latest announcements for the <br /> UniLend Community.
          </div>
          <div className="blog-card-container">
            <div className="blog-card">
              <img
                className="blog-card-img"
                src={require("../assets/1YearAnniversary.png")}
                alt="card img 1"
              />
              <div className="blog-card-content">
                <a
                  href=" https://bit.ly/3ULxBOF"
                  style={{ color: "#202f44", textDecoration: "none" }}
                >
                  Lorem Ipsum is simply dummy text of the printing
                </a>
              </div>
            </div>
            <div className="blog-card">
              <img
                className="blog-card-img img2"
                src={require("../assets/CoverforBlog2.png")}
                alt="card img 2"
              />
              <div className="blog-card-content">
                <a
                  href="https://bit.ly/3SzYp2y"
                  style={{ color: "#202f44", textDecoration: "none" }}
                >
                  Lorem Ipsum is simply dummy text of the printing
                </a>
              </div>
            </div>
            <div className="blog-card">
              <img
                className="blog-card-img"
                src={require("../assets/NonFungibleTokenization.png")}
                alt="card img 3"
              />
              <div className="blog-card-content">
                <a
                  href="https://bit.ly/3dQOtmI"
                  style={{ color: "#202f44", textDecoration: "none" }}
                >
                  Lorem Ipsum is simply dummy text of the printing
                </a>
              </div>
            </div>
          </div>

          <div className="blog-button">
            <button
              className="get-involved-button"
              style={{ marginTop: "150px" }}
            >
              <a
                href="https://unilend.medium.com"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                Read More
              </a>
            </button>
          </div>
        </div>
      </section>

      <section id="they-write-aboutus-section">
        <div className="common-container">
          <div className="container-title">
            They Write <br />
            <span className="container-title-sub">About Us</span>
          </div>

          <div className="write-aboutus-card-container">
            <div className="write-aboutus-card">
              <div className="write-aboutus-card-content">
                Investors Flock to India's DeFi Scene Months After...
              </div>
              <div className="write-aboutus-card-sub-content">
                <div className="write-aboutus-card-date">Sep 29, 2020</div>
                <div className="write-aboutus-card-crypto">
                  <a
                    href="https://bit.ly/3E0AdlO"
                    style={{ color: "#0045ff", textDecoration: "none" }}
                  >
                    Yahoo
                  </a>
                </div>
              </div>
            </div>
            <div className="write-aboutus-card">
              <div className="write-aboutus-card-content">
                For the 1st Time, All ERC20 Tokens Can Be...
              </div>
              <div className="write-aboutus-card-sub-content">
                <div className="write-aboutus-card-date">Oct 13, 2021</div>
                <div className="write-aboutus-card-crypto">
                  <a
                    href="https://bit.ly/3SDHvQB"
                    style={{ color: "#0045ff", textDecoration: "none" }}
                  >
                    Bitcoin.com
                  </a>
                </div>
              </div>
            </div>
            <div className="write-aboutus-card">
              <div className="write-aboutus-card-content">
                UniLend Finance Introduced Unilend V2 with...
              </div>
              <div className="write-aboutus-card-sub-content">
                <div className="write-aboutus-card-date">Sep 29, 2020</div>
                <div className="write-aboutus-card-crypto">
                  <a
                    href="https://bit.ly/3xV3vOT"
                    style={{ color: "#0045ff", textDecoration: "none" }}
                  >
                    CryptoNewz
                  </a>
                </div>
              </div>
            </div>
            <div className="write-aboutus-card">
              <div className="write-aboutus-card-content">
                UniLend Aims to "Welcome Every Token to DeFi,"
              </div>
              <div className="write-aboutus-card-sub-content">
                <div className="write-aboutus-card-date">31 Dec, 2021</div>
                <div className="write-aboutus-card-crypto">
                  <a
                    href="https://bit.ly/3SEOby1"
                    style={{ color: "#0045ff", textDecoration: "none" }}
                  >
                    CryptoBriefing
                  </a>
                </div>
              </div>
            </div>
            <div className="write-aboutus-card">
              <div className="write-aboutus-card-content">
                UniLend Finance Launches Industry’s First...
              </div>
              <div className="write-aboutus-card-sub-content">
                <div className="write-aboutus-card-date">Dec 30, 2020</div>
                <div className="write-aboutus-card-crypto">
                  <a
                    href="https://bit.ly/3re6oXv"
                    style={{ color: "#0045ff", textDecoration: "none" }}
                  >
                    Amb Crypto
                  </a>
                </div>
              </div>
            </div>

            <div className="write-aboutus-card">
              <div className="write-aboutus-card-content">
                Investors Flock to India's DeFi Scene Months After...
              </div>
              <div className="write-aboutus-card-sub-content">
                <div className="write-aboutus-card-date">Sep 29, 2020</div>
                <div className="write-aboutus-card-crypto">
                  <a
                    href="https://bit.ly/3flkDHj"
                    style={{ color: "#0045ff", textDecoration: "none" }}
                  >
                    Coindesk
                  </a>
                </div>
              </div>
            </div>
            <div className="write-aboutus-card">
              <div className="write-aboutus-card-content">
                Investors Flock to India's DeFi Scene Months After...
              </div>
              <div className="write-aboutus-card-sub-content">
                <div className="write-aboutus-card-date">Sep 29, 2020</div>
                <div className="write-aboutus-card-crypto">
                  <a
                    href="https://bit.ly/3rfBJZU"
                    style={{ color: "#0045ff", textDecoration: "none" }}
                  >
                    Nasdaq
                  </a>
                </div>
              </div>
            </div>
            <div className="write-aboutus-card">
              <div className="write-aboutus-card-content">
                DeFi Protocol UniLend Ups The Ante With A $1 Million..
              </div>
              <div className="write-aboutus-card-sub-content">
                <div className="write-aboutus-card-date">May 11, 2021</div>
                <div className="write-aboutus-card-crypto">
                  <a
                    href="https://bit.ly/3LT5wRM"
                    style={{ color: "#0045ff", textDecoration: "none" }}
                  >
                    CryptoDaily
                  </a>
                </div>
              </div>
            </div>

            <div className="write-aboutus-card">
              <div className="write-aboutus-card-content">
                How UniLend is shaping the future of DeFi with...
              </div>
              <div className="write-aboutus-card-sub-content">
                <div className="write-aboutus-card-date">Oct 21, 2021</div>
                <div className="write-aboutus-card-crypto">
                  <a
                    href="https://bit.ly/3xZ53aI"
                    style={{ color: "#0045ff", textDecoration: "none" }}
                  >
                    Cointelegraph
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mobile-write-aboutus">
            {/* <TestimonyCarousel /> */}
          </div>
        </div>
      </section>

      <section id="our-community-section">
        <div className="common-container">
          <div className="container-title">
            Join our
            <br />
            <span className="container-title-sub">Community</span>
          </div>
          <div className="our-community-card-container">
            <div className="our-community-card">
              <a href="https://twitter.com/UniLend_Finance">
                <img
                  className="our-community-card-img"
                  src={require("../assets/Vector1.svg").default}
                  alt="vector img 1"
                  id="communityLogo1"
                />
              </a>
              <div className="our-community-title">Twitter</div>
            </div>
            <div className="our-community-card">
              <a href="https://www.instagram.com/unilendfinance/">
                <img
                  className="our-community-card-img"
                  src={require("../assets/Vector2.svg").default}
                  alt="vector img 2"
                  id="communityLogo2"
                />
              </a>
              <div className="our-community-title">Instagram</div>
            </div>

            <div className="our-community-card">
              <a href="https://www.reddit.com/r/UniLend/">
                <img
                  className="our-community-card-img"
                  src={require("../assets/Vector3.svg").default}
                  alt="vector img 3"
                  id="communityLogo3"
                />
              </a>
              <div className="our-community-title">Reddit</div>
            </div>

            <div className="our-community-card">
              <a href="https://t.me/UniLendFinance">
                <img
                  className="our-community-card-img"
                  src={require("../assets/Vector4.svg").default}
                  alt="vector img 4"
                  id="communityLogo4"
                />
              </a>
              <div className="our-community-title">Telegram</div>
            </div>
          </div>
        </div>

        <div className="our-community-card-container-web">
          <img
            src={require("../assets/Left_side_F.svg").default}
            alt="vector img 1"
          />
          <img
            src={require("../assets/Right_side_F.svg").default}
            alt="vector img 2"
          />
        </div>
        <div className="our-community-card-container-mobile">
          <img
            style={{ width: "35%", height: "100%", marginTop: "-1rem" }}
            src={require("../assets/Left_side_M.png")}
            alt="vector img 1"
          />
          <img
            style={{ width: "50%", height: "auto" }}
            src={require("../assets/Right_side_M.png")}
            alt="vector img 2"
          />
        </div>
      </section>

      <section id="footer-section">
        <div className="common-container">
          <div className="footer-container">
            <ul className="footer-first-child">
              <li className="footer-title">GENERAL</li>
              <li>About Us</li>
              <li>Career</li>
              <li>FAQ</li>
            </ul>

            <ul>
              <li className="footer-title">COMMUNITY</li>
              <li>Legions</li>
              <li>Grants</li>
            </ul>

            <ul>
              <li className="footer-title">DEVELOPER</li>
              <li>
                <a
                  href="https://unilend.gitbook.io/unilend-finance/"
                  style={{ color: "#202f44cc", textDecoration: "none" }}
                >
                  Gitbook
                </a>
              </li>
              <li>GitHub</li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCggNiVE5EGWGHh1YwIUW7Ug"
                  style={{ color: "#202f44cc", textDecoration: "none" }}
                >
                  Tutorial
                </a>
              </li>
            </ul>

            {/* <div className="ft-mb">
              <div>
                <ul className="footer-first-child">
                  <li className="footer-title">GENERAL</li>
                  <li>About Us</li>
                  <li>Career</li>
                  <li>FAQ</li>
                </ul>

                <ul className="community">
                  <li className="footer-title">COMMUNITY</li>
                  <li>Legions</li>
                  <li>Grants</li>
                </ul>
              </div>
              <ul>
                <li className="footer-title ft-tm">DEVELOPER</li>
                <li>
                  <a href="https://unilend.gitbook.io/unilend-finance/">
                    Gitbook
                  </a>
                </li>
                <li>GitHub</li>
                <li>
                  <a href="https://www.youtube.com/channel/UCggNiVE5EGWGHh1YwIUW7Ug">
                    Tutorial
                  </a>
                </li>
              </ul>
            </div> */}

            <ul className="footer-last-child">
              <li className="footer-title">NEWSLETTER</li>
              <li className="subscribe-text">
                Subscribe to recieve updates from us
              </li>
              <li className="footer-input-content">
                <input
                  className="footer-input"
                  type="email"
                  placeholder="Email address"
                  name="email"
                  id="email"
                  style={{ background: "inherit" }}
                />
                <img
                  className="logo-content-img"
                  src={require("../assets/Vector4.png")}
                  alt=""
                  id="Vector7"
                />
              </li>
              <li>
                <button className="footer-btn">Submit</button>
              </li>

              <div className="logo-content">
                <a href="https://t.me/UniLendFinance">
                  <img
                    className="logo-content-img"
                    src={require("../assets/Vector4.png")}
                    alt=""
                    id="Vector4"
                  />
                </a>

                <a href="https://twitter.com/UniLend_Finance">
                  <img
                    className="logo-content-img"
                    src={require("../assets/Vector1.png")}
                    alt=""
                    id="Vector1"
                  />
                </a>

                <a href="https://www.instagram.com/unilendfinance/">
                  <img
                    className="logo-content-img"
                    src={require("../assets/Vector2.png")}
                    alt=""
                    id="Vector2"
                  />
                </a>

                <img
                  className="logo-content-img"
                  src={require("../assets/Vector5.png")}
                  alt=""
                  id="Vector5"
                />

                <a href="https://www.reddit.com/r/UniLend/">
                  <img
                    className="logo-content-img"
                    src={require("../assets/Vector3.png")}
                    alt=""
                    id="Vector3"
                  />
                </a>

                <a href="https://unilend.medium.com/">
                  <img
                    className="logo-content-img"
                    src={require("../assets/Vector6.png")}
                    alt=""
                    id="Vector6"
                  />
                </a>
              </div>
            </ul>
          </div>
          <div className="social-media-container">
            <div className="logo-content-web">
              <img
                src={require("../assets/logo.svg").default}
                className="footerlogo"
                alt=""
                srcset=""
                id="footerlogo"
              />
            </div>

            {/* <div className="logo-content-mobile">
            <img
              className="logo-content-img"
              src={require("../assets/Vector4.png")}
              alt=""
              id="Vector8"
            />
            <img
              className="logo-content-img"
              src={require("../assets/Vector1.png")}
              alt=""
              id="Vector9"
            />
            <img
              className="logo-content-img"
              src={require("../assets/Vector2.png")}
              alt=""
              id="Vector10"
            />
            <img
              className="logo-content-img"
              src={require("../assets/Vector5.png")}
              alt=""
              id="Vector11"
            />
            <img
              className="logo-content-img"
              src={require("../assets/Vector3.png")}
              alt=""
              id="Vector12"
            />
            <img
              className="logo-content-img"
              src={require("../assets/Vector6.png")}
              alt=""
              id="Vector13"
            />
          </div> */}

            <div className="copyright-text-mobile">
              Copyright © 2021 UniLend Ltd. All Rights Reserved
            </div>
          </div>
        </div>
      </section>

      <section id="copyright-section">
        <div class="copyright-container">
          <div class="copyright-text">
            Copyright © 2021 UniLend Ltd. All Rights Reserved
          </div>
        </div>
      </section>
    </div>
  );
}
