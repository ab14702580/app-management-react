import React, { useContext } from 'react';
import { AppDataContext } from '../../context/Context';
import { MdOutlineFileDownload } from 'react-icons/md';
import { IoStar } from 'react-icons/io5';
import { BiSolidLike } from 'react-icons/bi';

const AppDetailsPage = () => {
    const {Id : data} = useContext(AppDataContext);
    console.log(data)
    return (
        <div>
            <div>
                <div>
                    <img src={data.image} alt="" />
                </div>
                <div>
                    <h1>{data.title}</h1>
                    <p>{data.description}</p>
                    
                        <hr />
                    <div>
                        <span><MdOutlineFileDownload /></span>
                        <p>Downloads</p>
                        <h1>{data.downloads}</h1>
                    </div>
                    <div>
                        <span><IoStar /></span>
                        <p>average ratings</p>
                        <h1>{data.ratingAvg}</h1>
                    </div>
                    <div>
                        <span><BiSolidLike /></span>
                        <p>Total reviews</p>
                        <h1>{data.reviews}</h1>
                    </div>
                    <button></button>
                </div>
            </div>
        </div>
    );
};

export default AppDetailsPage;