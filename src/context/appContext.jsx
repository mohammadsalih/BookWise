import { createContext, useContext, useState } from "react";

// Create context
const AppContext = createContext();

// Provider component
function AppProvider({ children }) {
  const [navOpen, setNavOpen] = useState(false);
  const [searchQuote, setSearchQuote] = useState("");

  return (
    <AppContext.Provider
      value={{ navOpen, setNavOpen, searchQuote, setSearchQuote }}
    >
      {children}
    </AppContext.Provider>
  );
}

// Custom hook to use context
function useAppContext() {
  const context = useContext(AppContext);
  if (!context)
    throw new Error("useAppContext must be used within a AppProvider");
  return context;
}

// Export provider and hook
export { AppProvider, useAppContext };
