import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  const role = localStorage.getItem('role');
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  if (!isLoggedIn || role !== 'admin') {
    return <Navigate to="/" />;
  }

  return children;
}
