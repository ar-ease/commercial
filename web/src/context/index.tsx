"use client";
import { createContext, useState, useContext } from "react";

const AppContext = createContext<any>({
  hello: "world",
});

export function AppWrapper({ children }: { children: React.ReactNode }) {
  let [state, setState] = useState({
    hello: "world",
  });

  const [name, setName] = useState<any>("Arghya");
  const [surname, setSurname] = useState<any>("Jana");

  return (
    <AppContext.Provider
      value={{
        state,
        name,
        surname,
        setName,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
