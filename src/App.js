// App.js
import React, { createContext, useState, useEffect } from "react";
import "./App.css";
import Buy from "./component/buy";

const MyContext = createContext();

function App() {
  const [isPWAInstalled, setIsPWAInstalled] = useState(false);
  const [data, setData] = useState("Initial Value");
  const [deferredPrompt, setDeferredPrompt] = useState(null); // اضافه کردن متغیر deferredPrompt

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      setDeferredPrompt(e); 
      setIsPWAInstalled(true);

    });
  }, []);

  const handleAddToHomeScreen = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the A2HS prompt");
        } else {
          console.log("User dismissed the A2HS prompt");
        }
        setDeferredPrompt(null);
      });
    }
  };

  return (
    <MyContext.Provider value={{ data, setData }}>
      <ChildComponent isPWAInstalled={isPWAInstalled} handleAddToHomeScreen={handleAddToHomeScreen} />
    </MyContext.Provider>
  );
}

export default App;

function ChildComponent({ isPWAInstalled, handleAddToHomeScreen }) {
  return (
    <div className="vn">
      <header className="App-header">
        <Buy />
        {isPWAInstalled && (
          <button style={{margin:"20px"}} onClick={handleAddToHomeScreen}>نصب</button>
        )}
      </header>
    </div>
  );
}
