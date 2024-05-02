import { FaArrowRight } from "react-icons/fa6";

const ServicesCard = ({ service }) => {
    const { image, title, price } = service
    return (
        <div>
            <div className="border border-gray-300 rounded-lg bg-[#FFF] p-6">
                <img className="w-[314px] rounded-xl h-[208px]" src={image} />
                <h2 className="text-2xl font-bold mt-4">{title}</h2>
                <div className="flex justify-between items-center">
                    <p className="text-lg text-[#FF3811] font-bold mt-3">Price : ${price}</p>
                    <button className="mr-4 text-lg text-[#FF3811]"><FaArrowRight></FaArrowRight></button>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;