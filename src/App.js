import React from 'react'
import { Register } from './LoginAndRegister/Register'
import Login from './LoginAndRegister/Login'
import RequiredAuth from './components/RequiredAuth';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Layout from './components/Layout';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import Missing from './pages/Missing';
import ArticleListPage from './pages/ArticleListPage';
import ArticlePage from './pages/ArticlePage';
import Welcome from './pages/Welcome';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* pablic routers */}
        <Route index element={<Welcome />}/>
            <Route path="article">
              <Route index element={<ArticleListPage />} />
              <Route path=":id" element={<ArticlePage/>}/>
            </Route>  
        <Route path="about" element={<AboutPage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        {/* protected routes */}
        <Route element={<RequiredAuth/>}>
          <Route path="home" element={<HomePage />} />
        </Route>
        {/* catch all  */}
        <Route path="*" element={<Missing />} />
        </Route>
    </Routes>
  );
}
   
export default App