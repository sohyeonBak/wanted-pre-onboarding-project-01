import { ReactElement, useContext } from "react";
import { RouterContext } from "./Router";

type Props = {
  path: string,
  component: ReactElement
}

const Route = ({path, component}: Props) => {
  const value = useContext(RouterContext);
  if (value === null) throw new Error("!!!");

  const {currentPath} = value;

  if(currentPath !== path) return null

  return component

};

export default Route;