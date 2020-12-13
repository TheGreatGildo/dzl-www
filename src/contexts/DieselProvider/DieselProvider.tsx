import React, { createContext, useEffect, useState } from 'react'

import { useWallet } from 'use-wallet'

import { Diesel } from '../../diesel'

export interface DieselContext {
  diesel?: typeof Diesel
}

export const Context = createContext<DieselContext>({
  diesel: undefined,
})

declare global {
  interface Window {
    dieselsauce: any
  }
}

const DieselProvider: React.FC = ({ children }) => {
  const { ethereum }: { ethereum: any } = useWallet()
  const [diesel, setDiesel] = useState<any>()

  // @ts-ignore
  window.diesel = diesel
  // @ts-ignore


  useEffect(() => {
    if (ethereum) {
      const chainId = Number(ethereum.chainId)
      const dieselLib = new Diesel(ethereum, chainId, false, {
        defaultAccount: ethereum.selectedAddress,
        defaultConfirmations: 1,
        autoGasMultiplier: 1.5,
        testing: false,
        defaultGas: '6000000',
        defaultGasPrice: '1000000000000',
        accounts: [],
        ethereumNodeTimeout: 10000,
      })
      setDiesel(dieselLib)
      window.dieselsauce = dieselLib
    }
  }, [ethereum])

  return <Context.Provider value={{ diesel }}>{children}</Context.Provider>
}

export default DieselProvider
