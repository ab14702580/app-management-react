import { useContext, useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { MdOutlineFileDownload } from 'react-icons/md';
import { Link, useLocation } from 'react-router';
import { AppDataContext } from '../../context/Context';
import Loader from '../Loader/Loader';
import Datanotfound from "../../../B12-A08-Hero-Apps/assets/App-Error.png";

const TradingAppSection = () => {
    const { data , handelStoreData : handelIdCapture } = useContext(AppDataContext);
    const [search, setSearch] = useState(data);



    const handelChange = (e) => {
        const findData = data.filter(item => item.title.toLowerCase().includes(e.target.value.toLowerCase()));
        setSearch(findData);
        console.log(findData);
    }
    const location = useLocation();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadingTime = setTimeout(() => {
            setLoading(false);
        }, 500)
        return () => clearTimeout(loadingTime);
    }, [])
    console.log(data)
    if (loading) {
        return <Loader />
    }
    if (search.length === 0) {
        return (
            <div className='flex justify-center items-center flex-col gap-10 h-screen w-full'>
                <img src={Datanotfound} alt="iage hre" />
                <h1 className='font-bold text-6xl capitalize text-[#685959] '>data not found</h1>
            </div>
        );
    }
    return (
        <div className="mt-20">
            <div className="text-center mb-12 md:mb-20 px-4">
                <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-2.5">
                    {
                        (location.pathname === '/' ? 'Trending Apps' : 'Our All Applications')
                    }
                </h1>

                <p className="text-[#627382] text-sm md:text-lg">
                    {
                        (location.pathname === '/' ? 'Explore All Trending Apps on the Market developed by us' : 'Explore All Apps on the Market developed by us. We code for Millions')
                    }
                </p>

            </div>
            {
                (location.pathname === '/app' && <div className='max-w-11/12 mx-auto flex justify-between capitalize mb-5'><span className='font-bold text-2xl'>({search.length}) apps found</span> <input className='placeholder:font-nomal placeholder:text-[#327382] placeholder:capitalize py-1.5 px-2.5 border rounded-lg' onChange={handelChange} type="search" placeholder={`search App`} /></div>)
            }

            <div className="max-w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">



                {/* Card */}
                {
                    (location.pathname === '/' ? (search.slice(0, 8)) : search).map(item =>
                        <Link to="/singleApp" key={item.id} onClick={() => handelIdCapture(item)}>
                            <div className="bg-white p-2.5 rounded-xl shadow-sm">

                            <img
                                className="rounded-xl w-full"
                                src={item.image}
                                alt="image icon here"
                            />

                            <div>
                                <h1 className="mt-2.5 mb-2.5 text-sm md:text-base font-medium">
                                    {item.title}
                                </h1>

                                <div className="flex justify-between items-center">
                                    <span className="text-green-400 flex items-center gap-2 py-1.5 px-2.5 bg-green-200 rounded-xl text-sm">
                                        <MdOutlineFileDownload
                                            style={{
                                                color: "green",
                                                fontSize: "18px",
                                            }}
                                        />
                                        <span>{item.downloads}</span>
                                    </span>

                                    <span className="flex items-center gap-2 bg-amber-100 py-1.5 px-2.5 rounded-xl text-sm">
                                        <FaStar
                                            style={{
                                                color: "gold",
                                                fontSize: "18px",
                                            }}
                                        />
                                        <span>{item.ratingAvg}</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        </Link>)
                }

                {/* বাকি card গুলো */}
            </div>

            {
                (location.pathname === '/' &&
                    <div className="mt-10 flex justify-center">
                        <Link to="/app">
                            <button className="capitalize text-white btn bg-[linear-gradient(90deg,_#8b5cf6,_#6d28d9)] rounded-xl">
                                Show All
                            </button>
                        </Link>
                    </div>
                )
            }
        </div>
    );
};

export default TradingAppSection;