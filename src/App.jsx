import { useState, useEffect } from 'react'
import { useContext } from 'react'
<<<<<<< HEAD
=======
import { LoginDetailContext } from './context/LoginDetailCon'
>>>>>>> 0e86bb36377f131d437a41562f6ac1c7a7849b2f
import Slider1 from './components/topbody/Slider1'
import Body1 from './components/bestSellers/Body1'
import Main from './components/bodyblackf/Main'
import Shopbycat from './components/shopbycat/Shopbycat'
import Newlaunch from './components/newlaunch/Newlaunch'
import Shopbylife from './components/shopbylife/Shopbylife'
import Bestofboat from './components/bestofboat/Bestofboat'
import Jointhetribe from './components/jointhetribe/Jointhetribe'
import Pressdiv from './components/pressdiv/Pressdiv'
import SearchData from './components/SearchData.jsx'
import './App.css'
import Search from './context/SearchCon'

function App() {
  const { searchLength } = useContext(Search)
  const [showResult, setShowResult] = useState(false)
  const [showContent, setShowContent] = useState(true)
  const { setLoggedIn, setUserName, setUserEmail } = useContext(LoginDetailContext);

  useEffect(() => {
    if (searchLength > 0) {
      setShowResult(true)
      setShowContent(false)
    }
    else {
      setShowResult(false)
      setShowContent(true)
    }
  }, [searchLength])

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser)
      setLoggedIn(parsedUser);
      setUserName(parsedUser?.name);
      setUserEmail(parsedUser?.email);
    }
  }, []);
  return (
    <>
      <div className={showResult ? 'block' : 'hidden'}>
        <SearchData />
      </div>
      <div className={showContent ? 'block' : 'hidden'}>
        <>
          <Slider1 />
          <Body1 />
          <Main />
          <Shopbycat />
          {/* <Newlaunch /> */}
          <Shopbylife />
          <Bestofboat />
          <Jointhetribe />
          <Pressdiv />
        </>
      </div>
    </>
  )
}

export default App
