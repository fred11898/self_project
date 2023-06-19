import './App.css';
import { CarouselHomepage } from './Content/CarouselHomepage';
import { ContactUsComponent } from './Content/ContactUs';
import { HomepageIntro } from './Content/HomepageIntro';
import DrawerAppBar from './Content/Navbar';
import { OurImpactComponent } from './Content/OurImpactComponent';


function App() {
  return (
    <div className="App">
      <DrawerAppBar />
      <CarouselHomepage />
      <HomepageIntro />
      <OurImpactComponent />
      <ContactUsComponent />
    </div>
  );
}

export default App;
