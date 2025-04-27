  import { useContext, useState } from "react"
  import { CountContext } from "./context";
  import { useRecoilValue, useSetRecoilState, useRecoilState, RecoilRoot } from "recoil";
  import { countAtom } from "./store/atoms/count";


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
    return <RecoilRoot>
      <CountRenderer />
      <Buttons />
    </RecoilRoot >
  }

  function CountRenderer() {
    const count = useRecoilValue(countAtom);

    return <div>
      <b>
      {count}
      </b>
    </div>
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
