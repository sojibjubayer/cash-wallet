import { Link } from "react-router-dom";
import CW from '../../assets/CW.jpg'
import useUser from "../hooks/useUser";


const Navbar = () => {


  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('phone');
    window.location.href = '/login';
  };




  const token = localStorage.getItem('token');
  const username = localStorage.getItem('username'); // Retrieve username

  return (
    <div>
      <div className='bg-yellow-100 flex justify-between items-center'>
        <Link to="/"><img src={CW} alt="logo" /></Link>
        <div className='flex gap-4'>
          {token ? (
            <>
              <button className='btn bg-orange-500'> {username}</button>
              <button onClick={handleLogout} className='btn bg-yellow-600'>Logout</button>
            </>
          ) : (
            <Link to='/login'><button className='btn bg-yellow-400'>Login</button></Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
