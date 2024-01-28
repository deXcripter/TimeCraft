import { useNavigate } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };
  return (
    <>
      <div className="bg-blue-400 flex justify-between shadow-blue-600 drop-shadow-sm">
        {/* <svg className="h-9 w-9"></svg> */}
        <span className={styles.logo}>TimeCraft 💡</span>
        <button className="px-5 uppercase bg-red-500" onClick={() => logout()}>
          Logout
        </button>
      </div>
    </>
  );
}
