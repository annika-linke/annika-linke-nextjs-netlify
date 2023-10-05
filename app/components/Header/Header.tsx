import React, {
  FunctionComponent as FC,
  useState,
  useRef,
  useEffect,
} from "react";
import { LogoLow } from "../Icon";
import "./header.scss";

interface Props {
  siteTitle: string;
  className?: string;
}

const Header: FC<Props> = ({ siteTitle, className }: Props) => {
  const [isSticky, setSticky] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const handleScroll = () => {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top <= -5);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);

  return (
    <header
      className={`header${isSticky ? " header--sticky" : ""} ${className}`}
      ref={ref}
    >
      <div className="header__inner">
        <div className="header__close">
          <a href="/work/">
            <span className="hidden-visually">Back to Overview</span>
          </a>
        </div>
        <div className="header__title">
          <h1 className="header__title-headline">{siteTitle}</h1>
        </div>
        <a href="/">
          <div className="header__brand">
            <LogoLow className="icon header__logo" />
            <div className="header__brand-name-wrapper">
              <span className="header__brand-name">Annika Linke</span>
            </div>
          </div>
        </a>
      </div>
    </header>
  );
};

export default Header;
