import React, { createContext, useContext, useState } from "react";
import {
  Page1,
  Page2,
  Page3,
} from "./react-class/ch-4/exercise/useContextFolder/PagesMain";

function ChoosePage({ page }) { 
                                  {/* index */}
  const Page = [Page1, Page2, Page3][page];
  return <Page />;
}

export const UserContext = createContext();

function App() {
  let username = "Chan";
  const [page, setPage] = useState(0);

  return (
    <UserContext.Provider value={username}>
      <button onClick={() => setPage(0)} disabled={page === 0}>
        Page 1
      </button>
      <button onClick={() => setPage(1)} disabled={page === 1}>
        Page 2
      </button>
      <button onClick={() => setPage(2)} disabled={page === 2}>
        Page 3
      </button>
      <ChoosePage page={page} />
    </UserContext.Provider>
  );
}

export default App;
