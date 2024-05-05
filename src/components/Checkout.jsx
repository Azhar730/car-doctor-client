import { useLoaderData } from "react-router-dom";
import useAuth from "./useAuth";
import toast, { Toaster } from "react-hot-toast";

const Checkout = () => {
    const {user} = useAuth()
    const service = useLoaderData()
    const { title, price, image,_id } = service
    const handleCheckout=e=>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        const price = form.price.value;
        const message = form.message.value;
        const booking={
            customerName: name,
            email,
            date,
            image,
            title,
            service_id: _id,
            price,
            message
        }
        form.reset()
        fetch('http://localhost:5000/bookings',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                toast.success('Data Successfully Added to Database')
            }
        })
    }
    return (
        <div>
            <div className="hero h-[300px]" style={{ backgroundImage: 'url(https://i.postimg.cc/rsMTSQwv/checkout.png)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <h1 className="mb-5 -ml-[800px] text-4xl text-[#FFF] font-bold">Service Details</h1>
                <h3 className="text-2xl mt-60 rounded-t-3xl bg-[#FF3811] py-2 px-6 font-semibold text-[#FFF]">Home/Checkout</h3>
            </div>
            <div>
                <form onSubmit={handleCheckout} className="mt-36 rounded-2xl card-body bg-[#F3F3F3] p-20">
                    <h2 className="text-2xl font-bold text-[#FF3811] text-center mb-10">{title}</h2>
                    <div className="flex gap-6">
                        <div className="form-control flex-1">
                            <input name="name" type="text" placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <input name="date" type="date" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="flex gap-6 mt-4">
                        <div className="form-control flex-1">
                            <input name="email" type="email" defaultValue={user?.email} readOnly className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <input name="price" defaultValue={'$'+price} readOnly className="input input-bordered" required />
                        </div>
                    </div>
                    <textarea name="message" placeholder="Your Message" className="mt-4 textarea textarea-bordered textarea-lg w-full h-[250px]" ></textarea>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#FF3811] text-lg font-bold text-[#FFF]">Order Confirm</button>
                    </div>
                </form>
            </div>
            <Toaster></Toaster>
        </div>
    );
};
export default Checkout;