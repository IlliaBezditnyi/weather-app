import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { Form } from '../Form/Form';
import { setUser } from '../../../store/slices/userSlice';
import { useAppDispatch } from '../../../hooks/reduxHooks';
import { useNavigate } from 'react-router-dom';

export const SignUp = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // Register user in firebase users db.
  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
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
      .catch(console.error);
  };

  return (
    <Form
      title="Sign up"
      redirectLink="/login"
      linkText="Already have an account?"
      linkTitle="Sign in"
      onFormSubmit={handleRegister}
    />
  );
};
