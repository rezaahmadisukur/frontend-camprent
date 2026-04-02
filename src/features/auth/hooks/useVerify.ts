import { useCallback } from "react";
import { useVerifyUser } from "../api/verifyUser";

const useVerify = () => {
  const { mutate, isPending, isSuccess, isError } = useVerifyUser();

  const verify = useCallback(
    (token: string) => {
      try {
        mutate(token);
      } catch (error) {
        console.error(error);
      }
    },
    [mutate]
  );

  return { verify, isPending, isError, isSuccess };
};

export default useVerify;
