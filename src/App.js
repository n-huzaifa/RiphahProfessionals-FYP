import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AuthContext } from './Context/AuthContext'
import { Protected } from './Protected'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Profile from './pages/Profile'

function App() {
  const router = createBrowserRouter([
    {
      path: '/' || '/profile',
      element: (
        <Protected>
          <Profile />
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
