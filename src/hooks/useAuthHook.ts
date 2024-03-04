import { useAppSelector } from './reduxHooks';

// Custom hook to check if user is loged in.
export const useAuthHook = () => {
  const { email, token, id } = useAppSelector((state) => state.user);

  return {
    isAuth: !!email,
    email,
    token,
    id,
  };
};
