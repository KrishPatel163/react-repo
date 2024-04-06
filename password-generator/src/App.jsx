import { useCallback, useState, useEffect } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllow, setNumberAllow] = useState(true);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(
    () => {
      let string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let pass = "";
      if (numberAllow) string += "0123456789";
      if (charAllow) string += '!@#$%^&*()_+-={}[]|\\:;"<>,.?/~`';

      for (let index = 0; index < length; index++) {
        let pos = Math.floor(Math.random() * string.length);
        pass += string.charAt(pos);
      }
      setPassword(pass);
      console.log("current password: ",pass);
    },
    [length, numberAllow, charAllow, setPassword]
  );
  
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllow, charAllow, passwordGenerator])
  

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-sm rounded-lg px-4 my-8 py-4  gap-4 text-blue-600 bg-zinc-900 flex flex-col justify-center items-center h-full">
        <h1>Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
          />
          <button className="bg-orange-700 outline-none text-white px-3 py-0.5 shrink-0">
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              id="numberRange"
              min={5}
              max={50}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor="numberRange">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox"
            id="numberAllow"
            checked={numberAllow}
            onChange={() => {  setNumberAllow(prev => !prev)  }} />
            <label htmlFor="numberAllow">Numbers</label>
            <input 
            type="checkbox"
            id="charAllow"
            checked={charAllow}
            onChange={() => {  setCharAllow(prev => !prev)  }} />
            <label htmlFor="charAllow">Special Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
