"use client"

import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";

type SysytemContextTypes = {
  userValue: string
  setUserValue: Dispatch<SetStateAction<string>>
}

const SysytemContext = createContext<SysytemContextTypes | undefined>(undefined);

/**
 * #### provider
 * @param param0 
 * @returns 
 */
export const SystemProvider = ({ children }: { children: ReactNode }) => {
  const [userValue, setUserValue] = useState<string>("")

  return (
    <SysytemContext.Provider value={{ userValue, setUserValue }}>
      {children}
    </SysytemContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(SysytemContext);
  if (context === undefined) {
    throw new Error('useAuth にてエラーが発生しました');
  }
  return context;
};
