import React from 'react'
import styled, { css } from 'styled-components'

import { Footer } from './Footer'

import Gecko from './gecko.png'
import BannerLogo from './banner-logo.png'

const size = {
  xs: '375px',
  sm: '768px',
  lg: '1200px',
}

const device = {
  xs: `(max-width: ${size.xs})`,
  sm: `(max-width: ${size.sm})`,
  lg: `(max-width: ${size.lg})`,
}

const NavLink = styled.a`
  font-size: 2rem;
  font-family: 'Poppins-Bold';
  color: white;
  text-transform: uppercase;

  @media screen and ${device.sm} {
    font-size: 1.8rem;
    margin: 0 1rem;
  }
`

const NavWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;

  @media screen and ${device.sm} {
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0;
  }
`

const NavSeparator = styled.div`
  width: 5px;
  height: 30px;
  background-image: url('/fade-border.png');
  background-size: contain;
  margin: 0 2rem;

  @media screen and ${device.sm} {
    display: none;
  }

  @media screen and ${device.xs} {
    display: none;
  }
`

const Nav = () => {
  return (
    <NavWrapper>
      <NavLink data-atropos-offset="16">Litepaper</NavLink>
      <NavSeparator />

      <NavSeparator />

      <NavSeparator />
      <NavLink data-atropos-offset="16">Team</NavLink>
    </NavWrapper>
  )
}

const BannerWrapper = styled.section`
  width: 100%;
  background: rgb(113, 24, 33);
  background: radial-gradient(
    circle,
    rgba(113, 24, 33, 1) 0%,
    rgba(20, 2, 6, 1) 100%
  );
  padding: 1.5rem 0;
  display: flex;
  flex-direction: column;

  flex-wrap: wrap;

  span {
    font-size: 3rem;
    color: white;
  }

  @media screen and ${device.sm} {
    padding: 1rem 0;
    max-width: 100%;
  }

  @media screen and ${device.xs} {
    flex-direction: row;
    max-height: 70vh;
  }
`

const Main = styled.main`
  min-height: 100vh;
  overflow: hidden;
`

const AtroposWrapper = styled.section`
  clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 90%, 0 100%);
  background-color: #140206;
  height: auto;

  @media screen and ${device.xs} {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 97%, 0 100%);
  }
`

const GeckoImageWrapper = styled.figure`
  height: 500px;
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and ${device.lg} {
    img {
      margin-top: -100px;
    }
  }

  @media screen and ${device.xs} {
    img {
      margin-top: 10px;
      margin-bottom: 10px;
    }
    width: 100%;
    height: auto;
  }
`

const BoldBigText = styled.p`
  font-size: 4rem;
  font-family: 'Poppins-Bold';
  text-transform: uppercase;
  margin: 5px auto 0;
  max-width: 80%;
  text-align: center;
  color: white;

  @media screen and ${device.sm} {
    font-size: 3rem;
  }

  @media screen and ${device.xs} {
    margin-top: 2rem;
    font-size: 2rem;
    max-width: 90%;
  }
`

const RegularBigText = styled.p`
  font-size: 2rem;
  text-align: justify;
  font-family: 'Poppins-Regular';
  text-transform: uppercase;
  margin: 5px auto 20px;
  max-width: 80%;
  color: #42413e;

  @media screen and ${device.sm} {
    font-size: 1.5rem;
    margin-bottom: 5px;
  }

  @media screen and ${device.xs} {
    margin-top: 2rem;
    font-size: 1.5rem;
    max-width: 90%;
  }
`

const BannerTop = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  flex-wrap: wrap;

  @media screen and ${device.lg} {
    width: 100%;
    justify-content: center;
    margin-top: 2rem;
    margin-bottom: 4rem;
  }

  @media screen and ${device.xs} {
    flex-direction: column-reverse;
  }
`

const BannerBottom = styled.div`
  max-height: 10%;
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  @media screen and ${device.sm} {
    justify-content: center;
    width: 100%;
  }

  @media screen and ${device.xs} {
    height: 60%;
    width: 100%;

    img {
      width: 100%;
      height: auto;
    }
  }
`

const GloriousLogo = () => (
  <img
    data-atropos-offset="-2"
    layout="fixed"
    src={BannerLogo}
    alt="Cutest Gecko ever"
    width={620}
    height={308}
  />
)

const Banner = () => {
  return (
    <AtroposWrapper>
      <BannerWrapper>
        <BoldBigText color="white">Official Mint Site</BoldBigText>

        <BannerBottom>
          <GloriousLogo />
          <GeckoImageWrapper>
            <img
              data-atropos-offset="1"
              layout="fixed"
              src={Gecko}
              alt="Cutest Gecko ever"
              width={400}
              height={351}
            />
          </GeckoImageWrapper>
        </BannerBottom>
      </BannerWrapper>
    </AtroposWrapper>
  )
}

export default ({ children }) => {
  return (
    <React.Fragment>
      <Main>
        <Banner />
        {children}
      </Main>
      <Footer />
    </React.Fragment>
  )
}
