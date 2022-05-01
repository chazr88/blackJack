import React, { useState, useEffect} from 'react';
import {styled} from '@mui/system';
import Hand from '../Hand/Hand';
import Buttons from '../Buttons/Buttons'
import shuffeledDeck from '../Deck/Deck';


const Board = () => {
  
  const [playerHand, setPlayerHand] = useState([]);
  const [dealerHand, setDealerHand] = useState([]);
  const [dealerTotal, setDealerTotal] = useState(0);
  const [playerTotal, setPlayerTotal] = useState(0);
  const [playerTurn, setPlayerTurn] = useState(true);
  const [dealerTurn, setDealerTurn] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false)
  const [endGameMessage, setEndGameMessage] = useState("");
  const [totalMoney, setTotalMoney] = useState(100)
  const [currentBet, setCurrentBet] = useState(0)
  const [disableButtons, setDisableButtons] = useState(false)

  function timeout(delay) {
    return new Promise( res => setTimeout(res, delay) );
}

  useEffect(() => {
    calculateHand(playerHand, playerTotal, setPlayerTotal)
    calculateHand(dealerHand, dealerTotal, setDealerTotal)
    checkForUndefined()
  }, [playerHand, dealerHand]);

  useEffect(() => {
    checkDealerTurn()
    calculateDealerBust()
  }, [dealerTotal]);

  useEffect(() => {
    calculatePlayerBust()
    calculateDealerBlackJack()
  }, [playerTotal])

  useEffect(() => {
    calculateWinner()
    // storeMoney()
    getMoney()
  }, [gameOver])


  const Wrapper = styled('div')({
      width: '100%',
      height: '100vh',
      display: 'flex',
      backgroundImage: "url(/redandblack.jpg)",
      backgroundSize: '100%',
      flexDirection: 'column',
      justifyContent: 'space-between'
  });

  //Sorting the hands so the Aces will be last in the array for calculation of 1 or 11
  const sortPlayerHand = playerHand.sort(function(a, b) {
    return /[A-Za-z]/.test(a.Value) - /[A-Za-z]/.test(b.Value)  || b.Value.charCodeAt(0) - a.Value.charCodeAt(0)
    });

  const sortPlayerDealer = dealerHand.sort(function(a, b) {
    return /[A-Za-z]/.test(a.Value) - /[A-Za-z]/.test(b.Value)  || b.Value.charCodeAt(0) - a.Value.charCodeAt(0)
    });

  // const storeMoney = () => {
  //   localStorage.setItem('Money', totalMoney);
  // }
  const confirmBetExist = () => {
    if(currentBet == 0) {
      setEndGameMessage("Please Place Bet")
    }
  }

  const getMoney = () => {
    if(gameOver === false){
      const money = localStorage.getItem('Money')
      if(isNaN(parseInt(money)) || money == 0){
        setTotalMoney(100)
      }else{
        setTotalMoney(parseInt(money))
      }

    }
  }

  const calculatePlayerBust = () => {
      if(playerTotal > 21){
        setPlayerTurn(false)
        setDealerTurn(true)
        setEndGameMessage("Sorry You Bust")
        subtractBet()
        setGameOver(true)
      }
  }

  const calculateDealerBlackJack = () => {
    if(playerTotal === 21){
      setPlayerTurn(false)
      setEndGameMessage("BlackJack!")
      addBet()
      setGameOver(true)
    }
  }

  const calculateDealerBust = () => {
    if(dealerTotal > 21){
      setEndGameMessage("Dealer Bust")
      addBet()
      setGameOver(true)
    }
}

  const restartGame = () => {
    setPlayerHand([])
    setDealerHand([])
    setPlayerTotal(0)
    setDealerTotal(0)
    setPlayerTurn(true)
    setDealerTurn(false)
    setGameOver(false)
    setEndGameMessage("")
    setCurrentBet(0)
  }

  const calculateHand = (hand, total, setTotal) => {
    // console.log(hand)
    setTotal(0)
    hand.forEach(card =>{
      if(card != undefined){
        let value = card.Value
        if(parseInt(value) < 10){
          return setTotal(total => total + parseInt(value))
        }else if(value === 'A'){
          if((total + 11)  > 21){
            return setTotal(total => total + 1)
          }else{
            return setTotal(total => total + 11)
          }
        }else{
          return setTotal(total => total + 10)
        }
      }
    })
  }

  const checkForUndefined = () => {
    if(playerHand == undefined){
      restartGame()
    }
  }

  const dealCard = () => {
    const card = shuffeledDeck.shift()
    if(card == undefined || shuffeledDeck.length < 10){
      window.location.reload(false);
    } else {
      return card
    }
  }

  const handleSetHand = (hand, setHand) => {
    setHand(hand => [...hand, dealCard()])    
  }

  const checkDealerTurn = () => {
    if(dealerTurn === true) {
      handleDealerTurn()
    }
  }

  const handleDealerTurn = () => {
    if(playerHand != ""){
      setDealerTurn(true)
      setPlayerTurn(false)
      if(dealerTotal < 17) {
        setDealerHand(dealerHand => [...dealerHand, dealCard()]);
      } else {
        setGameOver(true)
        // return dealerTotal   
      }
    }
  }
  
  const handleHit = () => {
    if(currentBet != 0 && playerHand != ""){
      handleSetHand(playerHand, setPlayerHand);
    }
  }

  const handleDealCards = () => {
    confirmBetExist()
    if(currentBet != 0 && playerHand == ""){
      setEndGameMessage("")
      handleSetHand(playerHand, setPlayerHand);
      handleSetHand(playerHand, setPlayerHand);
      handleSetHand(dealerHand, setDealerHand);
      handleSetHand(dealerHand, setDealerHand);
    }
  }

  const initGame = () => {
    if(gameStarted === false){
      setGameStarted(true)
    }
  }

  const betOne = () => {
    if(currentBet < totalMoney && playerHand == ""){
      return setCurrentBet(currentBet => currentBet + 1)
    }
  }

  const betFive = () => {
    if(currentBet < totalMoney && playerHand == ""){
      return setCurrentBet(currentBet => currentBet + 5)
    }
  }

  const betTen = () => {
    if(currentBet < totalMoney && playerHand == ""){
      return setCurrentBet(currentBet => currentBet + 10)
    }
  }

  const addBet = () => {
    const total = totalMoney + currentBet
    console.log(total)
    localStorage.setItem('Money', total);
  }

  const subtractBet = () => {
    const total = totalMoney - currentBet
    localStorage.setItem('Money', total);
  }

  const calculateWinner = () => {
    if(gameOver === true){
      if(endGameMessage == ""){
        if (playerTotal > dealerTotal){
          setEndGameMessage("You Win")
          addBet()
        } else if(playerTotal < dealerTotal) {
          setEndGameMessage("Sorry You Lose")
          subtractBet()
        } else if(playerTotal === dealerTotal){
          setEndGameMessage("Draw You Win")
          addBet()
        } else {
          setEndGameMessage("")
        }
      }
      handleConcludeGame()
    }
  }
  const handleConcludeGame = async () => {
    await timeout(5000)
    restartGame()
    initGame()
  }

  initGame()
    return (
      <Wrapper>
          <Hand dealerTurn={dealerTurn} hand={dealerHand}></Hand>
          <Buttons 
          endGameMessage={endGameMessage} 
          playerTotal={playerTotal} 
          disabled={!playerTurn} 
          handleDealerTurn={handleDealerTurn} 
          handleHit={handleHit} 
          handleDealCards={handleDealCards}
          totalMoney={totalMoney}
          currentBet={currentBet}
          betOne={betOne}
          betFive={betFive}
          betTen={betTen}
          >
          </Buttons>

          <Hand hand={playerHand}></Hand>
      </Wrapper>
    )
}

export default Board