import { useEffect, useState } from "react";
import useAuth from "../components/useAuth";
import { TiDelete } from "react-icons/ti";
import Swal from "sweetalert2";


const Bookings = () => {
    const { user } = useAuth()
    const [bookings, setBookings] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/bookings?email=${user.email}`)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])
    const handleDelete = id=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/bookings/${id}`,{
                    method: 'DELETE',
                })
                .then(res=>res.json())
                .then(data=>{
                    if(data.deletedCount>0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                          const remaining= bookings.filter(booking=>booking._id !==id)
                          setBookings(remaining)
                    }
                })
            }
          });
    }
    const handleConfirm = id =>{
        fetch(`http://localhost:5000/bookings/${id}`,{
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'confirm'})
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount>0){
                //update state
                const remaining = bookings.filter(booking=>booking._id !== id)
                const updated = bookings.find(booking=>booking._id === id)
                updated.status= 'confirm'
                const newBookings = [updated, ...remaining]
                setBookings(newBookings)
            }
        })
    }

    return (
        <div>
            <div className="hero h-[300px]" style={{ backgroundImage: 'url(https://i.postimg.cc/rsMTSQwv/checkout.png)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <h1 className="mb-5 -ml-[800px] text-4xl text-[#FFF] font-bold">Cart Details</h1>
                <h3 className="text-[#FF3811] text-lg mt-16 -ml-[815px]">Home-Product Details</h3>
            </div>
            <div className="overflow-x-auto mt-36">
                <table className="table">
                    <tbody>
                        {
                            bookings.map((booking, idx) => <tr key={idx} className="my-5">
                                <th><TiDelete onClick={()=>handleDelete(booking._id)} className="text-4xl cursor-pointer"></TiDelete></th>
                                <td><img src={booking.image} className="h-32 w-44" /></td>
                                <td>{booking.title}</td>
                                <td className="font-bold">{booking.price}</td>
                                <td>{booking.date}</td>
                                <td><button onClick={()=>handleConfirm(booking._id)} className="btn btn-sm bg-[#FF3811] text-[#FFF]">Confirm</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Bookings;