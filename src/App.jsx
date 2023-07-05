import Navbar from './components/Navbar'
import './App.css'
import { useCallback, useEffect, useState } from 'react'
import { useSwipeable } from 'react-swipeable'

const texts = [
  {
    "title": "Discover innovative ways to decorate",
    "text" : "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
  },
  {
    "title": "We are available all across the globe",
    "text" : "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
  },
  {
    "title": "Manufactured with the best materials",
    "text" : "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
  }
  
]

function App() {
  const [activeIndex, setActiveIndex] = useState(0)

  function prev(){
    setActiveIndex((a) => (a - 1 < 0 ? texts.length - 1 : a - 1));
  }

  function next(){
    setActiveIndex((a) => (a + 1 > texts.length - 1 ? 0 : a + 1));
  }

  const handlers = useSwipeable({
    onSwipedLeft:()=>next(),
    onSwipedRight:()=> prev(),
  });

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "ArrowLeft") {
        setActiveIndex((a) => (a - 1 < 0 ? texts.length - 1 : a - 1));
      } else if (e.key === "ArrowRight") {
        setActiveIndex((a) => (a + 1 > texts.length - 1 ? 0 : a + 1));
      }
    },
    [texts]
  );
  
  useEffect(()=>{
    window.addEventListener('keydown', handleKeyDown)

    return ()=>{
      window.removeEventListener('keydown', handleKeyDown)
    }
  },[])
  
  return (
    <main>
      <Navbar />
      <div className='main-img-container' {...handlers}>
        <div className='carousel' style={{transform: `translateX(calc(-100% * ${activeIndex}))`}} >
          <picture>
            <source media='(max-width: 950px)' srcSet='/images/mobile-image-hero-1.jpg' />
            <img className='main-img' src='/images/desktop-image-hero-1.jpg' alt='Main image 1'></img>
          </picture>
          <picture>
            <source media='(max-width: 950px)' srcSet='/images/mobile-image-hero-2.jpg' />
            <img className='main-img' src='/images/desktop-image-hero-2.jpg' alt='Main image 2'></img>
          </picture>
          <picture>
            <source media='(max-width: 950px)' srcSet='/images/mobile-image-hero-3.jpg' />
            <img className='main-img' src='/images/desktop-image-hero-3.jpg' alt='Main image 3'></img>
          </picture>
        </div>
      </div>
      <div className='main-content-container'>
        <h1 className='main-content-title'>{texts[activeIndex].title}</h1>
        <p className='main-content-text'>{texts[activeIndex].text}</p>
        <button className='shop-btn'>Shop now<img src='/images/icon-arrow.svg' alt='Shop now button'/></button>
        <div className='swipe-wrapper'>
          <div className='swipe-button left' onClick={prev}>
            <img className='angle-left' src='/images/icon-angle-left.svg' alt='Arrow left'></img>
          </div>
          <div className='swipe-button right' onClick={next}>
            <img className='angle-right' src='/images/icon-angle-right.svg' alt='Arrow right'></img>
          </div>
        </div>
      </div>
      <div className='bottom-container'>
        <img className='about-img dark' src='/images/image-about-dark.jpg' alt='About image'></img>
        <div className='about-content'>
          <h1 className='about-title'>About our furniture</h1>
          <p className='about-text'>
            Our multifunctional collection blends design and function to suit your individual taste.
            Make each room unique, or pick a cohesive theme that best express your interests and what
            inspires you. Find the furniture pieces you need, from traditional to contemporary styles
            or anything in between. Product specialists are available to help you create your dream space.
          </p>
          <div className="attribution">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
            Coded by <a href="https://github.com/aveandrian">aveandrian</a>.
          </div> 
        </div>
        <img className='about-img light' src='/images/image-about-light.jpg' alt='About image'></img>
      </div>
    </main>
  )
}

export default App
