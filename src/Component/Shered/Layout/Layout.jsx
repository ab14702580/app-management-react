
import { Outlet } from "react-router";
import Header from "../../Header/Header";
import Loader from "../../Loader/Loader";
import { useContext } from "react";
import { AppDataContext } from "../../../context/Context";

export default function Layout() {
    const { loading } = useContext(AppDataContext);
    if(loading){
        return <Loader />
    }
    return (
        <div className="max-w-[2500px] mx-auto">
            <Header />
            <Outlet />
        </div>
    );
}
