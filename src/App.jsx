import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Settings from './pages/Settings'
import Navbar from './components/Navbar/Navbar'
import store from './app/store'
import { Provider } from 'react-redux'
import PrivateRoute from './PrivateRoute'



const App = () => {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route element={ <PrivateRoute />}>
        <Route path='/settings' element={<Settings/>} />
      </Route>
    </Routes>
    </BrowserRouter>
    </Provider>
  )
}

export default App;