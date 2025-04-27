  import { useContext, useState } from "react"
  import { CountContext } from "./context";
  import { useRecoilValue, useSetRecoilState, useRecoilState, RecoilRoot } from "recoil";
  import { evenSelector, countAtom } from "./store/atoms/count";
  import { selector } from "recoil";


  function App() {
    
    return (
      <div>
        <RecoilRoot>
          <Count/>
        </RecoilRoot>
      </div>
    )
  }

  function Count() {
    return <>
      <CountRenderer />
      <Buttons />
    </>
  }

  function CountRenderer() {
    const count = useRecoilValue(countAtom);

    return <div>
      <b>
      {count}
      </b>
      <EvenCountRenderer />
    </div>

  }

  function EvenCountRenderer(){
    const iseven = useRecoilValue(evenSelector);
    return (
      <div>
        {iseven  ? "It is even" : null}
      </div>
    )
  }

  function Buttons() {
    const setCount = useSetRecoilState(countAtom);
    console.log("re-render buttons")
    
  
    return <div>
      <button onClick={() => {
        setCount(count => count + 1)
      }}>Increase</button>

      <button onClick={() => {
        setCount(count => count - 1)
      }}>Decrease</button>
    </div>
  }

  export default App
