import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import useUser from './../hooks/useUser';

const SendMoney = () => {
    const notify = () => toast("Successfully sent money !");
    const {phone}=useUser()
    const myPhone=phone;
    
 

    const handleSendMoney=async(e)=>{
        e.preventDefault()
        const form = e.target;
        const phone=form.phone.value;
        const amount=parseInt(form.amount.value);
        const data={phone,amount,myPhone}
        console.log(data)
        try {
            const response = await axios.patch(`http://localhost:5000/users/${phone}`, data, {
              withCredentials: true,
            });
            console.log(response)
            
            // if (response.data.error) {
            //   toast("No user found");
            // } 
            if(response.data.acknowledged) {
              // Successful login
              notify();
            
            }
          } catch (error) {
            console.error("Error logging in:", error);
          }
    }
    return (
        <div className="flex items-center justify-center min-h-screen ">
        <div className="max-w-md w-full space-y-4 p-6 bg-yellow-300">
          <h2 className="text-2xl font-bold text-center">
            Send Money
          </h2>
          <form onSubmit={handleSendMoney}>
            <input
              type="number "
              name="phone"
              className="p-1 my-2"
              placeholder="receiver phone number"
            /> <br />
            <input
              type="number "
              name="amount"
              className="p-1 mb-2"
              placeholder="amount (tk)"
            />
            <br />
            <input
              type="password"
              name="pin"
              className="p-1 mb-2"
              placeholder="Enter your PIN"
            />
            <br />
            <button className="btn">send</button>
          </form>
  
        
        </div>
        <Toaster />
      </div>
    );
};

export default SendMoney;