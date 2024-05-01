import { useRef } from "react";
import Modal from "./Modal/Modal";
export const App = () => {
  const modal1 = useRef()
  const modal2 = useRef()

  console.log(modal1)
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >


    </div>
  );
};

// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';

// import { current } from '../redux/auth/auth-operations';

// import AppRoutes from './AppRoutes';

// export const App = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(current());
//   }, [dispatch]);
//   return <AppRoutes />;
// };

