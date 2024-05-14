import { useQueryClient, useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createEditCabin } from "../../services/apiCabins";


export function useCreateCabin() {



const queryClient = useQueryClient();

const { mutate: createCabin,  isPending: isCreating } = useMutation({
  mutationFn: createEditCabin,
  onSuccess: () => {
    toast.success("New cabin successfully created");
    queryClient.invalidateQueries({ queryKey: ["cabins"] });
  },
  onError: err => toast.error(err.message),
});

return  { isCreating, createCabin };

}
