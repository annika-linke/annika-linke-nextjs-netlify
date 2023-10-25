import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FunctionComponent as FC, useEffect, useRef, useState } from "react";
import { Brand, Dots } from "../Icon";
import "./header.scss";

interface Props {
  siteTitle: string;
  className?: string;
  hideLogo?: boolean;
}

const Header: FC<Props> = ({ siteTitle, className, hideLogo }: Props) => {
  const [isSticky, setSticky] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const path = usePathname();
  const [parentPath, setParentPath] = useState<string | undefined | null>(path);
  const [renderDots, setRenderDots] = useState(false);

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

  useEffect(() => {
    if (path) {
      const slashes = path.match(/\//g)?.length || 0;
      setParentPath(path.substring(0, path.lastIndexOf("/")));
      setRenderDots(slashes === 1);
    }
  }, [path]);

  return (
    <header
      className={`header${isSticky ? " header--sticky" : ""} ${className}`}
      ref={ref}
    >
      <div className="header__inner">
        <div
          className={classNames(
            "header__close",
            renderDots && "header__close--dots"
          )}
        >
          <Link href={parentPath || "/"}>
            <span className="hidden-visually">Back to Overview</span>

            {renderDots && (
              <span className="header__dots">
                <Dots className="icon" />
              </span>
            )}
          </Link>
        </div>
        <div className="header__title">
          {siteTitle.toLocaleLowerCase() === "work" ? (
            <a href="/work">
              <h1 className="header__title-headline">{siteTitle}</h1>
            </a>
          ) : (
            <h1 className="header__title-headline">{siteTitle}</h1>
          )}
        </div>
        {!hideLogo && (
          <Link href="/" className="header__brand">
            <Brand className="icon header__logo" />
            <div className="header__brand-name-wrapper">
              <span className="header__brand-name">Annika Linke</span>
            </div>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
