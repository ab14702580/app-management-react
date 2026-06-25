import { useContext, useEffect, useState } from 'react';
import { AppDataContext } from '../../context/Context';
import Chart from '../Chart/Chart';

const AppDetailsPage = () => {
    const [installData, setInstallData] = useState(false);
    const {Id : data} = useContext(AppDataContext);
console.log( 'hololo', data)
useEffect(() => {
    const storedData = localStorage.getItem('data');

    if (storedData) {
        const parsedData = JSON.parse(storedData);

        const isInstalled = parsedData.some(
            item => item.id === data.id
        );

        setInstallData(isInstalled);
        console.log(isInstalled);
    }
}, [data.id]);
console.log(installData)
    console.log( 'this is data',data);
    const storeData = ((localStorage.getItem('data')) !== null ? (JSON.parse(localStorage.getItem('data'))).filter(item => item.id !== data.id) : []);
    const handelStoreData = (data) => {
        setInstallData(true);
        localStorage.setItem('data' ,JSON.stringify([...storeData , data]));
    }
    console.log( 'thisakjdf', [ data.id]);
    return (<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Top Section */}
            <div className="mt-10 lg:mt-20">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
                    {/* App Image */}
                    <div className="w-full lg:w-auto flex justify-center">
                        <img
                            className="w-full max-w-[350px] lg:max-w-[450px] rounded-xl"
                            src={data.image}
                            alt={data.title}
                        />
                    </div>

                    {/* App Details */}
                    <div className="w-full">
                        <div className="border-b border-[#011b3461] pb-6">
                            <h1 className="font-bold text-2xl sm:text-3xl mb-4 text-[#001931]">
                                {data.title}
                            </h1>

                            <p className="mb-4 capitalize text-[#00193178]">
                                Developed by:{' '}
                                <span className="bg-[linear-gradient(90deg,#8b5cf6,#6d28d9)] bg-clip-text text-transparent">
                                    {data.companyName}
                                </span>
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="flex flex-wrap items-center gap-8 md:gap-12 lg:gap-16 mt-8 justify-center md:justify-start">
    <div className="flex flex-col items-center">
        <span className="mb-2">
            <img src="../../../B12-A08-Hero-Apps/assets/icon-downloads.png" alt="" />
        </span>
        <p className="text-xs text-[#00193181]">Downloads</p>
        <h1 className="text-2xl font-bold mt-2">{data.downloads}</h1>
    </div>

    <div className="flex flex-col items-center">
        <span className="mb-2">
            <img src="../../../B12-A08-Hero-Apps/assets/icon-ratings.png" alt="" />
        </span>
        <p className="text-xs text-[#00193181]">Average Ratings</p>
        <h1 className="text-2xl font-bold mt-2">{data.ratingAvg}</h1>
    </div>

    <div className="flex flex-col items-center">
        <span className="mb-2">
            <img src="../../../B12-A08-Hero-Apps/assets/icon-review.png" alt="" />
        </span>
        <p className="text-xs text-[#00193181]">Total Reviews</p>
        <h1 className="text-2xl font-bold mt-2">{data.reviews}</h1>
    </div>
</div>
                        {/* Install Button */}
                        <button
                            className="btn w-full sm:w-auto rounded-lg bg-green-400 text-white border-none outline-none mt-8"
                            onClick={() => handelStoreData(data)}
                        >
                            {installData
                                ? 'Installed'
                                : `Install Now (${data.size} MB)`}
                        </button>
                    </div>
                </div>
            </div>

            {/* Chart Section */}
            <div className="mt-10">
                <Chart />
            </div>

            {/* Description */}
            <div className="mt-10 mb-10">
                <p className="font-bold text-xl">Description</p>

                <p className="capitalize mt-5 text-[#00193176] leading-7">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Reiciendis aliquid sunt saepe sed culpa porro aut voluptatum
                    quis reprehenderit nisi excepturi deleniti, minima, nostrum
                    distinctio veniam non optio, harum dolore.
                </p>
            </div>
        </div>
    );
};

export default AppDetailsPage;