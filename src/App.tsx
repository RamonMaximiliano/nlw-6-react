import {BrowserRouter, Route, Routes} from "react-router-dom"

import { Home } from "./pages/Home"
import { NewRoom } from "./pages/NewRoom"

function App() {
  return (
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/rooms/new" element={<NewRoom/>}/>
    </Routes>
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
