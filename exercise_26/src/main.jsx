import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router';
import { AuthProvider } from './context/AuthContext';
import { PostsProvider } from './context/PostsContext';
import router from './routes';

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthProvider>
      <PostsProvider>
        <RouterProvider router={router} />
      </PostsProvider>
    </AuthProvider>
  </StrictMode>
)
