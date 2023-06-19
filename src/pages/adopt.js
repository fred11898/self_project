import { DisabledTabs } from "../Adopt/PetDisplay";
import { PetIntroComponent } from "../Adopt/PetIntro";
import "../App.css";
import DrawerAppBar from '../Content/Navbar';

function Adopt() {
    return(
        <div className="App">
            <DrawerAppBar />
            <PetIntroComponent />
            <DisabledTabs />
        </div>
    )
}

export default Adopt;