import './App.css'
import { useMemo } from 'react'

import Main from './geckomponents/Main'

import Minter from './Minter'

import * as anchor from '@project-serum/anchor'
import { clusterApiUrl } from '@solana/web3.js'
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'
import {
  getPhantomWallet,
  getSolflareWallet,
  getSolletWallet,
  getMathWallet,
} from '@solana/wallet-adapter-wallets'

import {
  ConnectionProvider,
  WalletProvider,
} from '@solana/wallet-adapter-react'

import { WalletDialogProvider } from '@solana/wallet-adapter-material-ui'

// const candyMachineId = 'process.env.REACT_APP_CANDY_MACHINE_ID'
//   ? new anchor.web3.PublicKey('process.env.REACT_APP_CANDY_MACHINE_ID')
//   : undefined

// const network = 'process.env.REACT_APP_SOLANA_NETWORK' as WalletAdapterNetwork

const candyMachineId = new anchor.web3.PublicKey(
  'DzADPfws5rK2kPof4k9uUbMC6rdM8BQ4hdVJ4ALSJRPX',
)
const network = 'devnet' as WalletAdapterNetwork;
const rpcHost =
  'https://little-silent-pond.solana-mainnet.quiknode.pro/c749d78a26b4ca76d109cc821c4d6a16f8cd1315/'

// const rpcHost = 'process.env.REACT_APP_SOLANA_RPC_HOST'!
const connection = new anchor.web3.Connection(rpcHost)

const date = String(new Date())
const startDateSeed = parseInt(date, 10)

const txTimeout = 30000 // milliseconds (confirm this works for your project)

const App = () => {
  const endpoint = useMemo(() => clusterApiUrl(network), [])

  const wallets = useMemo(
    () => [
      getPhantomWallet(),
      getSolflareWallet(),
      getSolletWallet(),
      getMathWallet(),
    ],
    [],
  )

  return (
    <main>
      <Main>
        <ConnectionProvider endpoint={endpoint}>
          <WalletProvider wallets={wallets} autoConnect>
            <WalletDialogProvider>
              <Minter
                candyMachineId={candyMachineId}
                connection={connection}
                startDate={startDateSeed}
                txTimeout={txTimeout}
                rpcHost={rpcHost}
              />
            </WalletDialogProvider>
          </WalletProvider>
        </ConnectionProvider>
      </Main>
    </main>
  )
}

export default App
