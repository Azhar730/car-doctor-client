import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";


const SocialLogin = () => {
    return (
        <div className="text-center">
            <h2 className="text-xl font-bold">or Sign in With</h2>
            <div className="flex items-center justify-center gap-x-4 mt-5">
                <button className="btn rounded-full text-xl text-[#0A66C2]"><FaFacebookF></FaFacebookF></button>
                <button className="btn rounded-full text-xl text-[#0A66C2]"><FaLinkedinIn></FaLinkedinIn></button>
                <button className="btn rounded-full text-xl"><FcGoogle></FcGoogle></button>
            </div>
        </div>
    );
};

export default SocialLogin;