import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AuthContext } from './Context/AuthContext'
import { Protected } from './Protected'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Profile from './pages/Profile'
import Registration from './pages/Registration'
import Alumni from './pages/Alumni'
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Protected>
          <Profile />
        </Protected>
      ),
    },
    {
      path: '/profile',
      element: (
        <Protected>
          <Profile />
        </Protected>
      ),
    },
    {
      path: '/registration',
      element: (
        <Protected>
          <Registration />
        </Protected>
      ),
    },
    {
      path: '/alumni',
      element: (
        <Protected>
          <Alumni />
        </Protected>
      ),
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '*',
      element: <NotFound></NotFound>,
    },
  ])

  return (
    <AuthContext>
      <RouterProvider router={router}></RouterProvider>
    </AuthContext>
  )
}

export default App
