import { ReactNode, createContext, useState } from 'react';

type RouterProps = {
  children: ReactNode;
}

interface RouterContextValue {
  currentPath: string;
  changePath: (to: string) => void;
}

export const RouterContext = createContext<RouterContextValue | null>(null);

const Router = ({ children }: RouterProps) => {

  const [currentPath, setCurrentPath] = useState<string>(window.location.pathname);

  const changePath = (path: string) => {
    window.history.pushState("", "", path);
    setCurrentPath(path)
  }

  const contextValue: RouterContextValue = {
    currentPath,
    changePath
  }
  
  
  return (
    <RouterContext.Provider value={contextValue} >
      {children}
    </RouterContext.Provider>
  );
};

export default Router;