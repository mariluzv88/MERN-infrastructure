import { useState } from 'react';
import { getUser } from './utilities/users-service';
import {Route, Routes,Navigate} from 'react-router-dom'
import AuthPage from './pages/Auth/AuthPage';
import NewOrderPage from './pages/NewOrder/NewOrderPage';
import OrderHistoryPage from './pages/OrderHistory/OrderHistoryPage';
import NavBar from './components/Nav/NavBar';
import styles from './App.module.css';

function App() {
  const [user,setUser]=useState(getUser())
 
  return (
    <main className={styles.App}>
     {
       user?
       <>
          <NavBar user={user} setUser={setUser}/>
         
          <Routes>
            <Route path='/orders/new' element={<NewOrderPage user={user}/>}/>
            <Route path='/orders' element={<OrderHistoryPage user={user}/>}/>
             {/* redirect to /orders/new if path in address bar hasn't matched a <Route> above */}
             <Route path="/*" element={<Navigate to="/orders/new" />} />
          </Routes>
       </>
       :
      <AuthPage setUser={setUser}/>
     }
    </main>
  );
}

export default App;
