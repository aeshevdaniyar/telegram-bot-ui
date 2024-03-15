import { Loader2 } from "lucide-react";

export const InnerLoader = () => {
  return (
    <div className="inner-loader flex items-center justify-center">
      <Loader2 className="animate-spin w-10 h-10" />
    </div>
  );
};
