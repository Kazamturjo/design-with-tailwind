import MainContain from './Component/MainContain';
import Hero2 from './Component/Hero2'
import Hero03 from './Component/Hero03';
import Hero04 from './Component/Hero04';
import Footer from './Component/Footer';
import GiftsComponent from './Component/GiftComponent';
import NewsletterSignup from './Component/NewsLatter';
import MainCss from './Component/MainCss';
import Other from './Component/Other';
function App() {
  return (
    <div className="">
      <MainContain/>
      {/* <Other/> */}
      <Hero2/>
      <Hero03/>
      <Hero04/>
      {/* <Hero05/> */}
      <MainCss/>
      <GiftsComponent/>
      <NewsletterSignup/>
      <Footer/>
      
      
    </div>
  );
}

export default App;
