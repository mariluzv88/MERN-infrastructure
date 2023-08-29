import { useState } from 'react';
import { getUser } from './utilities/users-service';
import {Route, Routes} from 'react-router-dom'
import AuthPage from './pages/Auth/AuthPage';
import NewOrderPage from './pages/NewOrder/NewOrderPage';
import OrderHistoryPage from './pages/OrderHistory/OrderHistoryPage';
import NavBar from './components/Nav/NavBar';
import './App.css';

function App() {
  const [user,setUser]=useState(getUser())
 
  return (
    <main className="App">
     {
       user?
       <>
          <NavBar user={user} setUser={setUser}/>
         
          <Routes>
            <Route path='/orders/new' element={<NewOrderPage/>}/>
            <Route path='/orders' element={<OrderHistoryPage/>}/>
          </Routes>
       </>
       :
      <AuthPage setUser={setUser}/>
     }
    </main>
  );
}

export default App;
