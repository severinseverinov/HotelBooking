import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import { toast } from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isPending } = useMutation({
    mutationFn: signupApi,
    onSuccess: user => {
      toast.success(
        "Account successfully created! Please verufy the new account from the user's email address."
      );
    },
  });

  return { signup, isPending };
}
