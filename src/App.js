import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Hd from './Layout/Hd';
import Home from './pages/Home';

export default function App() {
  return (
    <div className="wrap">
      <Hd></Hd>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        {/* 홈에 나가면.. 만나면? <Home />이 출력되도록.이라는뜻 */}
        
        <Route path='*' element={<p>내가 디자인해두지 않은 페이지가 내보내질 때 이게 출력됨!</p>}></Route>
        {/* 내가 디자인해두지 않은 페이지가 내보내질 때 이게 출력됨!!! */}
      </Routes>
    </div>
  )
}
