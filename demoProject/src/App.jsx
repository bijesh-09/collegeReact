import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import MyUser from './day10/MyUser'
import UserDetail from './day10/UserDetail'
import OutletWrapper from './day10/OutletWrapper'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<OutletWrapper />}>
          {/*initial route */}
          <Route index element={<MyUser />} /> {/*index means it uses the parent path */}
          <Route path='detail/:userid' element={<UserDetail />} /> {/* putting path as detail instead of /detail cuz with the parent path it would be //detail instead of /detail */}
          {/* here userid is an eg of parameter. parameters are sub links of a link, and if i use ":" then it will accept any data, if not the outlet will only render when the path is exactly "detail/userid", but :userid will hel to do /detail/anything */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
