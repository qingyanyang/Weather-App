import { LoadingErrorContextType } from "@/types";
import { createContext, ReactNode, useState } from "react";

export const LoadingErrorContext = createContext<
  LoadingErrorContextType | undefined
>(undefined);

export const LoadingErrorProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <LoadingErrorContext.Provider
      value={{ loading, setLoading, error, setError }}
    >
      {children}
    </LoadingErrorContext.Provider>
  );
};
