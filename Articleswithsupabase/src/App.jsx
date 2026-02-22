import { Route, Routes } from 'react-router'
import './App.css'
import HomePage from './pages/HomePage'
import ArticlePage from './pages/ArticlePage'
import ArticlesPage from './pages/ArticlesPage'
import Manage_articles from './Pages/manage_articles'

import Header from './components/Header'
import Footer from './components/Footer'
import Editor from './Pages/editor'
import SignInPage from './Pages/SignInPage'
import SignUpPage from './Pages/SignUpPage'

function App() {

  return (
  
      <div className=''>
        {/* header */}
        <Header />
        <main>
          {/* routes */}
          <Routes>

            {/* public routes */}
            <Route path='/' element={<HomePage />} />
            <Route path='/articles' element={<ArticlesPage />} />
            <Route path='/article/:id' element={<ArticlePage />} />
             <Route path='/Manage_articles' element={<Manage_articles />} />
             <Route path='/Editor' element={<Editor />} />

              {/* anuthenticated Routes */}
               <Route path='/singin' element={<SignInPage />} />
                <Route path='/singup' element={<SignUpPage />} />
          
            
          </Routes>
        </main>
        {/* footer */}
        <Footer />
      </div>

   
  )
}

export default App