import React from 'react';
import { Link  } from 'react-router-dom';
import useUser from './components/hooks/useUser';


const Dashboard = () => {
const {name,email,phone,balance}=useUser()


 

  return (
    <div className=''>
      
      <div className='bg-yellow-100 p-6 rounded-md md:w-[50%] mx-auto mt-10'>
        Name: {name} <br />
        Email: {email} <br />
        Phone: {phone} <br />
        Balance: {balance} <br />
      </div>
      <div className='flex gap-5 items-center justify-center mt-20'>
        <div>
          <Link to='/transactions'><button className='btn bg-yellow-200'>Transacton</button></Link>
        </div>
        <div>
          <Link to="/cashin"><button className='btn bg-yellow-300'>Cash In</button></Link>
        </div>
        <div>
          <Link to="cashout"><button className='btn bg-yellow-400'>Cash Out</button></Link>
        </div>
        <div>
          <Link to="/sendmoney"><button className='btn bg-yellow-500'>Send Money</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
