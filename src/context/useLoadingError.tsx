import { useContext } from "react";
import { LoadingErrorContext } from "./LoadingErrorContext";
import { LoadingErrorContextType } from "@/types";

export const useLoadingError = (): LoadingErrorContextType => {
  const context = useContext(LoadingErrorContext);
  if (context === undefined) {
    throw new Error(
      "useLoadingError must be used within LoadingErrorContextProvider"
    );
  }
  return context;
};
