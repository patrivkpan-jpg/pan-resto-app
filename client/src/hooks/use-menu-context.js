import { useContext } from "react";
import MenuContext from "../contexts/menu";

function useMenuContext() {
    return useContext(MenuContext)
}

export default useMenuContext;