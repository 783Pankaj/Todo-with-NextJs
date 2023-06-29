'use client'

import { useState } from "react"
import Display from "./displaytodo/page";

export default function Home() {
  const [text, setText] = useState("");
  const [store, setStore] = useState([]);
  const subFun=()=>{
    setStore([...store, text])
    setText("");
  }
  console.log(store)
  return (
    <main >
      <input type='text'
        placeholder='enter your text'
        value={text}
        onChange={(e) => { setText(e.target.value) }}
      />
      <button
        type='submit'
        onClick={subFun}
        value={store}
      >Add</button>
      <h2>Your Todo</h2>
      <br />
      <div >
        {
          store.map((item, i) => (
            <div key={i}>
              {<Display store={item} />}
            </div>
          ))
        }
      </div>
    </main>
  )
}
