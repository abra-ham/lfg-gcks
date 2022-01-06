import styled from 'styled-components'

import FadeBorder from './fade-border.png'
import Discord from './discord.png'
import Twiiter from './twitter.png'

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

const FooterWrapper = styled.footer`
  margin: 10rem 0 0;
  clip-path: polygon(50% 0, 100% 15%, 100% 100%, 0 100%, 0 15%);
  background-image: url(${FadeBorder});
  background-size: 100% 100%;
  min-height: 250px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`

const Wrapper = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

const Text = styled.p`
  font-size: 1rem;
  font-family: 'Pixel';
  color: white;
  text-transform: uppercase;

  @media screen and ${device.sm} {
    font-size: 1rem;
  }

  @media screen and ${device.xs} {
    font-size: 0.8rem;
  }
`

const DiscordLogo = styled.img`
  height: 50px;
  width: 50px;
`

const TwitterLogo = styled.img`
  height: 40px;
  width: 50px;
`

export const Footer = () => (
  <FooterWrapper>
    <Wrapper
      href="https://www.twitter.com/geckosnft"
      target="_blank"
      rel="noreferrer noopener"
    >
      <TwitterLogo src={Twiiter} />
      <Text>@GloriousGeckos</Text>
    </Wrapper>
    <Text>Glorious Geckos 2022</Text>
    <Wrapper target="_blank" rel="noreferrer noopener">
      <DiscordLogo src={Discord} />
      <Text>Join us on discord</Text>
    </Wrapper>
  </FooterWrapper>
)
