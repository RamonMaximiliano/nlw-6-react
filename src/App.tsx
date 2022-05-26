import { BrowserRouter, Route, Routes } from "react-router-dom"
import { createContext, useState } from 'react'
import { Home } from "./pages/Home"
import { NewRoom } from "./pages/NewRoom"

//contexto
export const TestContext = createContext({} as any)

function App() {
  const [value, setValue] = useState('Teste')

  return (
    <BrowserRouter>
      <TestContext.Provider value={{value, setValue}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms/new" element={<NewRoom />} />
        </Routes>
      </TestContext.Provider>
    </BrowserRouter>
  );
}

export default App;


// old - v5 <Route exact path="/" component={Home} />
// new - v6 <Route path="/" element={<Home />} />
// Also now the route needs to be inside <Routes>
/* 
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/rooms/new" element={<NewRoom/>}/>
</Routes> 
*/
