import React, { useRef } from 'react'
import { Alphabet, AlphabetCap } from '../misc/Alphabet';

interface incomingParams {
    amount?: number | number[],
    interval?: number,
    stopString?: string | string[],
    numberTohitStringBeforeStopping?: number 
}

const ChangingLetters: React.FC<incomingParams> = ({amount = 1, interval = 100, stopString = '', numberTohitStringBeforeStopping = 1}) => {

    const [text, setText] = React.useState('');
    const hitTimes = useRef<number>(numberTohitStringBeforeStopping);

  React.useEffect(() => {
    const timer = window.setInterval(() => {
      setText(newText => {
        newText = ''
        for (let index = 0; typeof amount === 'number' ? index < amount : index < amount[Math.floor(Math.random() * amount.length)]; index++) {
            if(Math.random() < 0.5){
                newText += Alphabet[Math.floor(Math.random() * Alphabet.length)]
            } else {
                newText += AlphabetCap[Math.floor(Math.random() * AlphabetCap.length)]
            }
        }
        if(newText == stopString || stopString.includes(newText) ){
          if(hitTimes.current <= 1){
            clearInterval(timer);
          } else
            hitTimes.current -= 1
        }
        return newText;
    });
    }, interval);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {text}
    </>
  )
}

export default ChangingLetters
