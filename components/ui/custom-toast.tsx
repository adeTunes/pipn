import { CheckCircle, AlertTriangle, AlertCircle, X } from "lucide-react";

// Custom toast styles
const toastStyles = {
  success: {
    backgroundColor: "#d1fae5", // green-100
    borderColor: "#10b981", // emerald-500
    iconColor: "#10b981",
    textColor: "#064e3b", // emerald-900
  },
  warning: {
    backgroundColor: "#fef3c7", // amber-100
    borderColor: "#f59e0b", // amber-500
    iconColor: "#f59e0b",
    textColor: "#78350f", // amber-900
  },
  error: {
    backgroundColor: "#fee2e2", // red-100
    borderColor: "#ef4444", // red-500
    iconColor: "#ef4444",
    textColor: "#7f1d1d", // red-900
  },
};

// Custom toast component
export const CustomToast = ({
  type,
  message,
  onClose,
}: {
  type: "success" | "warning" | "error";
  message: string;
  onClose?: () => void;
}) => {
  const style = toastStyles[type];
  const IconComponent =
    type === "success"
      ? CheckCircle
      : type === "warning"
        ? AlertTriangle
        : AlertCircle;

  return (
    <div
      className="flex items-center justify-between p-4 rounded-lg border-l-4 shadow-lg min-w-[400px] max-w-[500px]"
      style={{
        backgroundColor: style.backgroundColor,
        borderLeftColor: style.borderColor,
        color: style.textColor,
      }}
    >
      <div className="flex items-center gap-3">
        <IconComponent
          className="w-5 h-5 flex-shrink-0"
          style={{ color: style.iconColor }}
        />
        <span className="text-sm font-medium leading-relaxed">{message}</span>
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="ml-4 p-1 hover:bg-black/10 rounded-full transition-colors"
        >
          <X className="w-4 h-4" style={{ color: style.textColor }} />
        </button>
      )}
    </div>
  );
};
