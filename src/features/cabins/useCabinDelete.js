import { toast } from "react-hot-toast";
import  { deleteCabin as deleteCabinApi} from "../../services/apiCabins";
import { useQueryClient, useMutation } from "@tanstack/react-query";


export function useDeleteCabin() {
      


const queryClient = useQueryClient();

  const { isPending: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: deleteCabinApi,
    onSuccess: () => {
      toast.success("Cabin successfully deleted");

      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: err => toast.error(err.message),
  });

  return { isDeleting, deleteCabin };

}