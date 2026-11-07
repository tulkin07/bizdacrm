import { useMutation, useQueryClient } from "@tanstack/react-query";
import { message } from "antd";
import api from "../../../services/api";
import type { OrderNotesFormValues } from "../page/OrderDetails";

const useOrderNotesUpdate = () => {
  const query = useQueryClient();
  const { mutate: updateOrderNotes, isPending } = useMutation({
    mutationKey: ["update-order-status"],
    mutationFn: ({ values, id}: { values: OrderNotesFormValues; id?: string }) =>
      api.patch(`/admin/orders/${id}/status`, values),
    onSuccess: () => {
      message.success("Order status updated");
      query.invalidateQueries({ queryKey: ["orderdetails"] });
    },
    onError: () => {
      message.error("Error");
    },
  });
  return { updateOrderNotes, isPending };
};

export default useOrderNotesUpdate;
