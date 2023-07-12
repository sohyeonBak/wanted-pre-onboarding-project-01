import { MouseEvent, ReactNode, useContext } from "react";
import { RouterContext } from "./Router";

type LinkProps = {
  to: string,
  children: ReactNode
}

const Link = ({ to, children }: LinkProps) => {

  const value = useContext(RouterContext);
  if (value === null) throw new Error("");

  const { changePath } = value
  const clickedLink = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    changePath(to);
  }

  return (
    <a onClick={clickedLink} href={to}>
      {children}
    </a>
  );
};

export default Link;