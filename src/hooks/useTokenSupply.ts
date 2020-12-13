import { useCallback, useEffect, useState } from 'react'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'
import { provider } from 'web3-core'

import { getSupply } from '../utils/erc20'
import useBlock from './useBlock'

const useTokenSupply = (tokenAddress: string) => {
  const [supply, setSupply] = useState(new BigNumber(0))
  const {
    ethereum,
  }: {ethereum: provider } = useWallet()
  const block = useBlock()

  const fetchSupply = useCallback(async () => {
    const supply = await getSupply(ethereum, tokenAddress)
    setSupply(new BigNumber(supply))
  }, [ethereum, tokenAddress])

  useEffect(() => {
    if (ethereum) {
      fetchSupply()
    }
  }, [ethereum, setSupply, block, tokenAddress])

  return supply
}

export default useTokenSupply
