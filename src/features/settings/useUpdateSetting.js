import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSetting as updatingSettingApi } from "../../services/apiSettings";
import toast from "react-hot-toast";

function useUpdateSetting() {
  const queryClient = useQueryClient();
  const { mutate: updatingSetting, isPending: isUpdating } = useMutation({
    mutationFn: updatingSettingApi,
    onSuccess: () => {
      toast.success("Setting successfully edited");
      queryClient.invalidateQueries({ queryKey: ["settings"] });
    },
    onError: err => toast.error(err.message),
  });
  return { updatingSetting, isUpdating };
}

export default useUpdateSetting;
