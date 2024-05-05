import Sidebar from './Sidebar/Sidebar';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Sidebar />
    </div>
  );
};

// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';

// import { current } from '../redux/auth/auth-operation';

// import AppRoutes from './AppRoutes';

// export const App = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(current());
//   }, [dispatch]);
//   return <AppRoutes />;
// };
