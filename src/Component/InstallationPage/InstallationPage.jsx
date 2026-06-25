import { LuDownload } from "react-icons/lu";
import { IoIosStar } from "react-icons/io";
import {  useState } from "react";

export default function InstallationPage() {
    const [data, setData] = useState((JSON.parse(localStorage.getItem('data'))) && (JSON.parse(localStorage.getItem('data'))).sort((a,b) => b.size - a.size));
    const handelRemove = (info) => {
        setData(data.filter(item => item.id !== info.id));
        localStorage.setItem('data', JSON.stringify(data.filter(item => item.id !== info.id)));
    }
    const handelClick = () => {
        setData([...data].sort((a, b) => a.size - b.size));
    };
    return (
        <div className="mt-20 max-w-325 mx-auto">
            <div className="text-center">
                <h1 className="font-bold text-6xl mb-2.5">Your Installed Apps</h1>
                <p className="text-lg text-[#00193176]">Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className="flex justify-between mt-20">
                <h1 className="font-bold text-2xl">{(data ? data.length : 0)} Apps Found</h1>
                <select name="select" className="border-none outline-none" onChange={handelClick}>
                    <option className="capitalize py-1.5 px-2.5 bg-white border-none outline-none" value="low-heigh" name='low' >low-heigh</option>
                    <option className="capitalize py-1.5 px-2.5 bg-white border-none outline-none" value="heigh-low" name='heigh' selected>heigh-low</option>
                </select>
            </div>
            <div>
                {/*card */}
                {
                    (data ? data.map(item =>
                        <div className="mt-10 bg-white p-2.5 flex justify-between items-center">
                            <div className="flex items-center">
                                <img className="max-w-20 mr-5 rounded-lg" src={item.image} alt="" />
                                <div>
                                    <h1 className="text-xl font-bold text-[#001931]">{item.title}</h1>
                                    <p className="text-[#00193176]">{item.description}</p>
                                    <div className="flex gap-3 items-center">
                                        <span className="flex gap-2.5 items-center capitalize text-green-400"><LuDownload /> download</span>
                                        <span className="flex gap-2.5 items-center capitalize text-amber-300"><IoIosStar /> 5</span>
                                        <span className="flex gap-2.5 items-center capitalize text-[#001931]">{item.size} MB</span>
                                    </div>
                                </div>
                            </div>
                            <button className="btn capitalize border-none outline-none rounded-lg bg-green-500 text-white" onClick={() => handelRemove(item)}>uninstall</button>
                        </div>
                    ) : '')
                }
            </div>
        </div>
    );
}