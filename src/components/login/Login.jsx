import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const Login = () => {
  const notify = () => toast("Successfully Login !");

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const phone = form.phone.value;
    const pin = form.pin.value;
    const user = { phone, pin };
  
    try {
      const response = await axios.post("http://localhost:5000/login", user, {
        withCredentials: true,
      });
      
      if (response.data.error) {
        toast("No user found");
      } else {
        // Successful login
        notify();
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("username", response.data.user.name); // Store username
        localStorage.setItem("phone", response.data.user.phone); // Store username
        form.reset();
        window.location.href = '/';
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="max-w-md w-full space-y-4 p-6 bg-yellow-300">
        <h2 className="text-2xl font-bold text-center">
          Login to Your Account
        </h2>
        <form onSubmit={handleLogin}>
          <input
            type="number "
            name="phone"
            className="p-1 my-2"
            placeholder="Enter your phone number"
          />
          <br />
          <input
            type="password"
            name="pin"
            className="p-1 mb-2"
            placeholder="Enter your PIN"
          />
          <br />
          <button className="btn">Log In</button>
        </form>

        <div className="text-center">
          <p className="text-sm text-black">
            Don't have an account? &nbsp;
            <Link to="/register" className="text-blue-500 hover:underline">
              Create an account
            </Link>
          </p>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Login;
