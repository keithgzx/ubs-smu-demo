// Exploring how to use styled to do css and js all in the same doc
// import styled from 'styled-components';
// export const App = () => {
//   return (
//     <div>
//       Hello World
//       <ExampleText>Blue Big Text here</ExampleText>
//     </div>
//   );
// };

// const ExampleText = styled.div`
//   font-size: 48px;
//   color: rebeccapurple ;
// `;

import { useState } from 'react';
import styled, { css } from 'styled-components';

export const App = () => {
  const [counter, setCounter] = useState(0); /* for arrays its [], for objects it couuld be {}, this is the non-deconstructed version of the syntax for js*/

  // const handleIncrement = () => {
  //   setCounter((curr) => curr+1);
  // };

  // const handleDecrement = () => {
  //   setCounter((curr) => curr-1);
  // };

  const handleUpdate = (increment) => {
    setCounter((curr) => (increment ? curr+1 : curr-1))
  }

  const handleReset = () => {
    setCounter(0);
  };


  return (
  <PageContainer>
    <CounterWrapper>
      <Counter>{counter}</Counter>
        <ButtonWrapper>
          <ButtonLeft onClick={() => handleUpdate(false)}>Subtract💀</ButtonLeft>
          <ButtonRight onClick={() => handleUpdate(true)}>Add🤡</ButtonRight>
        </ButtonWrapper>
      <Reset onClick={handleReset}>REEEESET</Reset>
    </CounterWrapper>
  </PageContainer>
  );
};

const commonButtonStyles = css`
padding: 20px;
font-size: 56px;
border: 1px solid black;
cursor: pointer;
user-select: none;

:hover {
  background-color: #61dafb;
}
`;

const ButtonLeft = styled.div`
  border-radius: 15px 0 0 15px;
  ${commonButtonStyles};
`;

const ButtonRight = styled.div`
  border-radius: 0 15px 15px 0;
  ${commonButtonStyles};
`;

const ButtonWrapper = styled.div`
  display: flex;
`;

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 150px; 
`;

const CounterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Counter = styled.div`
  font-size: 56px;
  font-weight: bold;
  margin: 30px 0;
`;

const Reset = styled.div`
  font-size: 40px;
  margin: 30px 0;
  border: 1px solid red;
  border-radius: 0 0 0 0;
`;