import { useCallback } from "react";
import useDiesel from "./useDiesel";
import { useWallet } from "use-wallet";
import { provider } from "web3-core";
import { Contract } from "web3-eth-contract";
import { approve, getDieselContract } from "../diesel/utils";

const useApproveToken = (token: Contract) => {
  const { account }: { account: string; ethereum: provider } = useWallet();
  const diesel = useDiesel();
  const spender = getDieselContract(diesel);

  const handleApprove = useCallback(async () => {
    try {
      const tx = await approve(token, spender, account);
      return tx;
    } catch (e) {
      return false;
    }
  }, [account, token, spender]);

  return { onApprove: handleApprove };
};

export default useApproveToken;
