import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Routes'
import { FriendsProvider } from './contex/FriendContex'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FriendsProvider>
      <RouterProvider router={router} />

    </FriendsProvider>
  </StrictMode>,
)
