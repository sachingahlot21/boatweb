import { useState, useEffect } from 'react'
import { useContext } from 'react'
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

  useEffect(() => {
    console.log(searchLength)
    if (searchLength > 0) {
      setShowResult(true)
      setShowContent(false)
    }
    else {
      setShowResult(false)
      setShowContent(true)
    }
  }, [searchLength])
  return (
    <>
      <div className={showResult ? 'block' : 'hidden'}>
        <SearchData  />
      </div>
      <div className={showContent ? 'block' : 'hidden'}>
        <>
          <Slider1 />
          <Body1 />
          <Main />
          <Shopbycat />
          <Newlaunch />
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
