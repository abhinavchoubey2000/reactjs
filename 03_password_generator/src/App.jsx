import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numbers, setNumbers] = useState(false);
  const [specialCharacters, setSpecialCharacters] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pass = "";

    if (numbers) {
      str = str + "0123456789";
    }
    if (specialCharacters) {
      str = str + "!@#$%^&*()_-~+=";
    }

    for (let i = 1; i <= length; i++) {
      const randomIndex = Math.floor(Math.random() * str.length + 1);
      pass = pass + str.charAt(randomIndex);
    }

    setPassword(pass);
  }, [length, numbers, specialCharacters, setPassword]);

  const copyPasswordToClipboard = useCallback(()=>{
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,50)
  }, [password])

  useEffect(()=>{
    passwordGenerator()
  },[length, numbers, specialCharacters, passwordGenerator])

  return (
    <div className="bg-[#212121] w-full h-screen text-white">
      <h1 className="text-4xl text-center p-5">Password Generator</h1>

      {/* Input */}
      <input
        type="text"
        placeholder="password"
        className="text-2xl"
        value={password}
        ref={passwordRef}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={copyPasswordToClipboard}>Copy Password</button>
      <div className="flex items-center gap-2">
        <label htmlFor="length">Length: {length}</label>
        <input
          type="range"
          name=""
          id="length"
          min={8}
          max={50}
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="numbers">Numbers: </label>
        <input
          type="checkbox"
          name=""
          id="numbers"
          defaultChecked={numbers}
          onChange={() => setNumbers(prev=>!prev)}
        />
      </div>
      <div>
        <label htmlFor="special-characters">Special Characters: </label>
        <input
          type="checkbox"
          name=""
          id="special-characters"
          defaultChecked={specialCharacters}
          onChange={() => setSpecialCharacters(prev=>!prev)}
        />
      </div>
    </div>
  );
}

export default App;
