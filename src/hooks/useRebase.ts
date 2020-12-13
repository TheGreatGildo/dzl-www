import { useCallback } from "react";
import { useWallet } from "use-wallet";
import { Contract } from "web3-eth-contract";
import { getDieselContract } from "../diesel/utils";
import useDiesel from "./useDiesel";

const useRebase = () => {
  const { account } = useWallet();
  const diesel = useDiesel();
  const dieselContract = getDieselContract(diesel);

  const handleRebase = useCallback(
    async () => {
      return await dieselContract.methods
        .rebase()
        .send()
        .on("transactionHash", function (hash: any) {
          localStorage.setItem("rebaseHash", hash);
        });
    },
    [account, dieselContract]
  );

  return { onRebase: handleRebase };
};

export default useRebase;
