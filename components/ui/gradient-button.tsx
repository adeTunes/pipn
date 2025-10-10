import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

interface GradientButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  rootClassName?: string;
  radius?: string;
  type?: string;
  loading?: boolean;
  disabled?: boolean;
  animation?: any;
}

export function GradientButton({
  children,
  onClick,
  className = "",
  rootClassName = "",
  radius = "",
  animation,
  type,
  loading,
}: GradientButtonProps) {
  const content = (
    <>
      {/* Animated rotating gradient border */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-teal-400 via-yellow-400 to-blue-600 animate-border-spin"></div>

      {/* Button */}
      <button
        onClick={onClick}
        style={{ borderRadius: radius }}
        className={`relative cursor-pointer bg-black/[80%] leading-none flex items-center justify-center text-white transition-transform duration-200 z-10 ${className}`}
        type={type as any}
        disabled={loading}
      >
        {loading ? <Loader2 className="animate-spin" /> : children}
      </button>

      <style jsx>{`
        @keyframes border-spin {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }

        .animate-border-spin {
          background-size: 200% 100%;
          animation: border-spin 3s linear infinite;
        }
      `}</style>
    </>
  );
  if (animation)
    return (
      <motion.div
        {...animation}
        style={{ borderRadius: radius }}
        className={`relative ${!loading ? "hover:scale-[1.02]" : ""} cursor-pointer inline-flex p-[1px] overflow-hidden group ${rootClassName}`}
      >
        {content}
      </motion.div>
    );
  return (
    <div
      style={{ borderRadius: radius }}
      className={`relative ${!loading ? "hover:scale-[1.02]" : ""} cursor-pointer inline-flex p-[1px] overflow-hidden group ${rootClassName}`}
    >
      {content}
    </div>
  );
}
