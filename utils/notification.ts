import { CustomToast } from "@/components/ui";
import { toast } from "sonner";

export const showSuccessToast = (message: string) => {
  toast.custom(
    (t) =>
      CustomToast({
        type: "success",
        message: message,
        onClose: () => toast.dismiss(t),
      }),
    {
      duration: 4000,
    }
  );
};

export const showWarningToast = (message: string) => {
  toast.custom(
    (t) =>
      CustomToast({
        type: "warning",
        message: message,
        onClose: () => toast.dismiss(t),
      }),
    {
      duration: 5000,
    }
  );
};

export const showErrorToast = (message: string) => {
  toast.custom(
    (t) =>
      CustomToast({
        type: "error",
        message: message,
        onClose: () => toast.dismiss(t),
      }),
    {
      duration: 6000,
    }
  );
};