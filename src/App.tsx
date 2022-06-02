import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Home } from "./pages/Home"
import { NewRoom } from "./pages/NewRoom"
import { Room } from "./pages/Room"
import { AuthContextProvider } from "./contexts/AuthContext"

function App() {
  return (
    <BrowserRouter>
    <AuthContextProvider>
      <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />
          </Switch>
        </AuthContextProvider>

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
