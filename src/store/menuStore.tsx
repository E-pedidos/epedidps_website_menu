import { ReactNode, createContext } from "react";


interface IMenuProps {
  children: ReactNode;
}

interface IMenuContext {
 
}

export const OfficeContext = createContext<IMenuContext>(
  {} as IMenuContext
);

export function OfficeProvider({ children }: IMenuProps) {
  return (
    <OfficeContext.Provider
      value={{}}
    >
      {children}
    </OfficeContext.Provider>
  );
}
