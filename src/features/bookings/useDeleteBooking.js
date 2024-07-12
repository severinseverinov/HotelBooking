import { toast } from "react-hot-toast";
import  { deleteBooking as deleteBookingApi} from "../../services/apiBookings";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { deleteBooking } from "../../services/apiBookings";


export function useDeleteBooking() {
      


const queryClient = useQueryClient();

  const { isPending: isDeleting, mutate: deleteBooking } = useMutation({
    mutationFn: deleteBookingApi,
    onSuccess: () => {
      toast.success("Booking successfully deleted");

      queryClient.invalidateQueries({
        queryKey: ["bookings"],
      });
    },
    onError: err => toast.error(err.message),
  });

  return { isDeleting, deleteBooking };

}