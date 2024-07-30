"use client"

import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";
import { drugParameterType } from "../(page)/ManageMedicine/components/drugParameter";

type SysytemContextTypes = {
  userValue: string
  setUserValue: Dispatch<SetStateAction<string>>
  outOfStockDrugs: drugParameterType[]
  setOutOfStockDrugs: Dispatch<SetStateAction<drugParameterType[]>>
}

const SysytemContext = createContext<SysytemContextTypes | undefined>(undefined);

/**
 * #### provider
 * 
 * @param param0 
 * @returns 
 */
export const SystemProvider = ({ children }: { children: ReactNode }) => {
  const [userValue, setUserValue] = useState<string>("")
  const [outOfStockDrugs, setOutOfStockDrugs] = useState<drugParameterType[]>([]);

  return (
    <SysytemContext.Provider value={{ userValue, setUserValue, outOfStockDrugs, setOutOfStockDrugs }}>
      {children}
    </SysytemContext.Provider>
  )
}

/**
 * #### 各ページでuseAuth()を定義して使用
 * 
 * @returns 
 */
export const useAuth = () => {
  const context = useContext(SysytemContext);
  if (context === undefined) {
    throw new Error('useAuth にてエラーが発生しました');
  }
  return context;
};
