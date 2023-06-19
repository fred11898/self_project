import { PetInfoComponent } from "../Pet/PetInfo";
import DrawerAppBar from "../Content/Navbar";

export const Pet = () => {
    return(
        <div>
            <DrawerAppBar />
            <PetInfoComponent />
        </div>
    );
};