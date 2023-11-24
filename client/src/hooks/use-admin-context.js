import { useContext } from "react";
import AdminContext from "../contexts/admin";

function useAdminContext() {
    return useContext(AdminContext)
}

export default useAdminContext;