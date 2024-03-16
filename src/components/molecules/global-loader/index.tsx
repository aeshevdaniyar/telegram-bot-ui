import { Loader2 } from "lucide-react";

export const GlobalLoader = () => (
  <div className="h-screen flex w-full items-center justify-center">
    <Loader2 className="animate-spin w-10 h-10 text-primary" />
  </div>
);
