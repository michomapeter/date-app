import Home from './pages/Home'
import OnBoarding from './pages/Onboarding';
import Dashboard from './pages/Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ChatContainer from './components/ChatContainer';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<Home/>}/>
      <Route path={"/dashboard"} element={<Dashboard/>}/>
      <Route path={"/onboarding"} element={<OnBoarding/>}/>
      <Route path={"/chatcontainer"} element={<ChatContainer/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
