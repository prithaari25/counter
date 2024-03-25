import './App.css'
import styled from 'styled-components'
import { useEffect, useState } from 'react'

export default function App() {
  const [count, setCount] = useState(() => {
    const storedCount = localStorage.getItem('count');
    const parsedCount = storedCount ? parseInt(storedCount, 10) : 0;
    return isNaN(parsedCount) ? 0 : parsedCount;
  })

  useEffect (() => {
    // Save count to localStorage whenever it changes
    localStorage.setItem('count', count);
  }, [count]); // Specify count as a dependency
  
  return (
    <main>
      <Header> Count: {count} </Header>
      <br></br>
      <Button1 onClick={() => setCount((prevCount) => prevCount+1)}>
        +
      </Button1>
      
      <Button2 onClick={() => setCount((prevCount) => prevCount-1)}>
        -
      </Button2>
    </main>
  )
}

const Header = styled.div`
  color: black;
  font-weight: bold;
  background-color: rgb(135, 206, 250);
  width: 80px;
  height: 30px;
  border-radius: 5px;
  text-align: center;
  padding: 5px 5px 0px 5px;
  position: absolute;
  top: 30%;
  left: 40%;
`;

const Button1 = styled.button`
  color:  black;
  background-color: white;
  cursor: pointer;
  background-color: grey;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  padding: 0px 5px 0px 5px;
  position: absolute;
  top: 45%;
  left: 40%;
`;

const Button2 = styled.button`
  color:  black;
  background-color: white;
  cursor: pointer;
  background-color: grey;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  padding: 0px 5px 0px 5px;
  position: absolute;
  top: 45%;
  left: 44%;

`;

