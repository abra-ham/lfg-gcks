import './App.css'
import styled from 'styled-components'

import Main from './geckomponents/Main'


const Container = styled.section`
  padding: 2rem;
  margin: 2rem auto;
  max-width: 80%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const BoldText = styled.span`
  font-family: 'Poppins-Bold';
  color: black;
  font-size: 5rem;
  text-align: center;
  text-transform: uppercase;
  margin-top: 2rem;
`

const App = () => {
  return (
    <main>
      <Main>
        <Container>
          <BoldText>
            We are sold out! Thank you all for your support. Now we moon. Tag us at @GeckosNFT via Twitter.
          </BoldText>
          <BoldText>Geek geek, FAM.</BoldText>
        </Container>
      </Main>
    </main>
  )
}

export default App
