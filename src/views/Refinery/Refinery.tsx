import React, { useState, useEffect } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { useWallet } from "use-wallet";
import useModal from '../../hooks/useModal'
import Value from '../../components/Value/ValueLarge';
import Button from "../../components/Button";
import Container from "../../components/Container";
import Page from "../../components/Page";
import PageHeader from "../../components/PageHeader";
import Spacer from "../../components/Spacer";
import WalletProviderModal from "../../components/WalletProviderModal";
import useDiesel from "../../hooks/useDiesel";
import { getDieselContract, getDieselAddress } from "../../diesel/utils";
import useRebase from "../../hooks/useRebase";
import Web3 from "web3";
import ethers from "ethers";
import useTokenBalance from "../../hooks/useTokenBalance";
import { getBalanceNumber } from "../../utils/formatBalance";

const Refinery: React.FC = () => {

    const { path } = useRouteMatch();

    const { account, ethereum } = useWallet();
    const [onPresentWalletProviderModal] = useModal(<WalletProviderModal />)

    const diesel = useDiesel();
    const dieselContract = getDieselContract(diesel);
    const dieselAddress = getDieselAddress(diesel);

    const dzlTokenBalance = useTokenBalance(dieselAddress);
    const dzlTokenBalanceFormatted = getBalanceNumber(dzlTokenBalance);


    const [pendingRebaseTx, setPendingRebaseTx] = useState(false);
    const [newTarget, setNewTarget] = useState();
    const [lastTarget, setLastTarget] = useState();
    const [newMultiplier, setNewMultiplier] = useState();
    const [lastMultiplier, setLastMultiplier] = useState();
    const [dzlSupply, setDzlSupply] = useState("");
    const [hasFetched, setHasFetched] = useState(false);
    const { onRebase } = useRebase();

    const getDieselInfo = async () => {
        if (!!account && !!dieselContract) {
            let info = await dieselContract.methods.kickAssViewFunction().call();
            let supply = await dieselContract.methods.totalSupply().call();
            let supplyFormatted = Web3.utils.fromWei(supply, "ether");
            let price = await dieselContract.methods._tokenPrice().call();
            console.log(info, supply, price)
            setNewTarget(info[0])
            setLastTarget(info[1])
            setNewMultiplier(info[2])
            setLastMultiplier(info[3])
            setDzlSupply(supplyFormatted)
            setHasFetched(true)
        }
    }

    useEffect(() => {
        getDieselInfo();
        setInterval(function () {
            getDieselInfo();
          }, 15000);
    }, [dieselContract, account])


    let dzlSupplyNum = parseFloat(dzlSupply);
    let rebaseFactor = parseFloat(newMultiplier) / parseFloat(lastMultiplier);
    let newTargetNum = parseFloat(newTarget);
    let lastTargetNum = parseFloat(lastTarget); 
    let hash = localStorage.getItem("rebaseHash");


    // console.log(newTarget, lastTarget, newMultiplier, lastMultiplier, dzlTokenBalanceFormatted, dzlSupplyNum);


  return (
    <Page>
      <br />
      <br />
      {!!account ? (
          <>
            <div className="column-container">
        <div className="card-row-col">
          <div className="blur-card">
            <div className="blur-card-header">DZL Price</div>
            <div className="blur-card-number-box">
              <div className="blur-card-number">$69</div>
            </div>
          </div>
          <div className="blur-card">
            <div className="blur-card-header">Gas Price</div>
            <div className="blur-card-number-box">
              <div className="blur-card-number"><span>{!!hasFetched ? <Value value={(newTargetNum)}/> : "..."}GWEI</span></div>
            </div>
          </div>
        </div>
        <div className="card-row-col">
          <div className="blur-card">
            <div className="blur-card-header">Current Target</div>
            <div className="blur-card-number-box">
              <div className="blur-card-number"><span>${!!hasFetched ? <Value value={(lastTarget)}/> : "..."}</span></div>
            </div>
          </div>
          <div className="blur-card">
            <div className="blur-card-header">Rebase Factor</div>
            <div className="blur-card-number-box">
              <div className="blur-card-number"><span>{!!hasFetched ? <Value value={(rebaseFactor)}/> : "..."}X</span></div>
            </div>
          </div>
        </div>
        <div className="card-row-col">
          <div className="blur-card">
            <div className="blur-card-header">Total DZL Supply</div>
            <div className="blur-card-number-box">
              <div className="blur-card-number">{!!hasFetched ? <Value value={(dzlSupplyNum)} /> : "..."}</div>
            </div>
          </div>
          <div className="blur-card">
            <div className="blur-card-header">My DZL Balance</div>
            <div className="blur-card-number-box">
              <div className="blur-card-number">{!!hasFetched ? <Value value={(dzlTokenBalanceFormatted)} /> : "..." }</div>
            </div>
          </div>
        </div>
        <div className="card-col">
          <div className="warning-box">
            <div className="warning-text">DO NOT PRESS THIS BUTTON</div>
          </div>
          <div className="rebase-button" onClick={ async () => {
                onRebase()
            }}>
            <div className="rebase-button-text" >REBASE</div>
          </div>
        </div>
      </div>
          </>
        ) : (
          <div
            style={{
              alignItems: 'center',
              display: 'flex',
              flex: 1,
              justifyContent: 'center',
            }}
          >
            <Button
              onClick={onPresentWalletProviderModal}
              text="Connect"
            />
          </div>
        )}
      
    </Page>
  );
};

export default Refinery;
