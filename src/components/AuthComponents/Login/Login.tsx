import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Form } from '../Form/Form';
import { setUser } from '../../../store/slices/userSlice';
import { useAppDispatch } from '../../../hooks/reduxHooks';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // Login user by firebase users db.
  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          }),
        );
        navigate('/');
      })
      .catch(() => alert('Invalid user!'));
  };

  return (
    <Form
      title="Sign in"
      redirectLink="/register"
      linkText="Dont have an account?"
      linkTitle="Register"
      onFormSubmit={handleLogin}
    />
  );
};
