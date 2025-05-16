

import { Outlet } from "react-router-dom"
import { BasicNavbar } from "../component/general/BasicNavBar";
import { useAppDispatch } from "../redux/store";
import { useEffect } from "react";
import { getWorkSpaceList } from "../redux/features/workspaces/workSpaceSlice";
const RootLayout = () => {
       const dispatch = useAppDispatch();
        useEffect(() => {
            dispatch(getWorkSpaceList());
        }, [dispatch]);
    
    return (
        <div >
            <div className="main-padding">
                <BasicNavbar></BasicNavbar>
            </div>
            <div style={{ background: "#00000014" }}>
                <Outlet />
            </div>

            <footer className="copy-right-footer footer text-center text-white py-3">
                © Copyright 2024. Bhive Private Limited
            </footer>
        </div>
    )
}

export default RootLayout;

