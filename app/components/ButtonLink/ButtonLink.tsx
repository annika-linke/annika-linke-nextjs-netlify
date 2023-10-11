import classNames from "classnames";
import { AnchorHTMLAttributes } from "react";
import "./button.scss";

const ButtonLink = ({
  className,
  children,
  ...rest
}: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a {...rest} className={classNames("button", className)}>
      {children}
    </a>
  );
};

export default ButtonLink;
