const AboutUs = () => {
    return (
        <div className="my-4 flex gap-x-20 items-center">
            <div className="flex-1">
                <img className="w-[460px] h-[473px]" src="https://i.postimg.cc/Fz3PMrR2/person.jpg"/>
                <img className="-mt-64 ml-48 border-8 border-[#FFF] absolute w-[327px] h-[332px]" src="https://i.postimg.cc/XNdQ7vjP/parts.jpg"/>
            </div>
            <div className="flex-1 p-16">
                <h1 className="text-xl text-[#FF3811] font-bold">About Us</h1>
                <p className="text-5xl mt-4 font-bold">We are qualified <br />& of experience <br />in this field</p>
                <p className="text-gray-500 mt-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                <p className="text-gray-500 mt-6">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <button className="btn text-[#FFF] text-lg bg-[#FF3811] mt-10">Get More Info</button>
            </div>
        </div>
    );
};

export default AboutUs;