import React, { useState, useContext, Fragment } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'
import UserContext from './UserContext'

const PrivateRoute = () => {
  const { user } = useContext(UserContext)
  const isAuthenticated = () => !!user
  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" replace />
}

function App() {
  const [user, setUser] = useState(null)
  console.log(user)

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <Fragment>
          <Routes>
            <Route path="/login" element={<Profile />} />
            <Route exact path="/" element={<PrivateRoute />}>
              <Route exact path="/" element={<Profile />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Fragment>
      </Router>
    </UserContext.Provider>
  )
}

export default App
