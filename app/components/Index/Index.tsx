"use client";
import Link from "next/link";
import { LogoLow } from "../Icon";
import classNames from "classnames";
import { useRef, useState } from "react";
import "./index.scss";
import Footer from "../Footer/Footer";
import { Breakpoints, Media } from "@/styles/media";
import { motion } from "framer-motion";

type Menu = "work" | "contact" | "about";

const Index = () => {
  const [active, setActive] = useState<Menu>("work");
  const aboutRef = useRef<HTMLAnchorElement | null>(null);
  const workRef = useRef<HTMLAnchorElement | null>(null);
  const contactRef = useRef<HTMLAnchorElement | null>(null);

  const boxRefs: {
    [key in Menu]: React.MutableRefObject<HTMLAnchorElement | null>;
  } = {
    about: aboutRef,
    work: workRef,
    contact: contactRef,
  };

  const handleMouseEnter = (nav: Menu) => {
    setActive(nav);
  };

  const getSpacing = (route: Menu, index: number) => {
    const acitveIndex = menu.findIndex((r) => r.route === active);
    const activeWidth = boxRefs[active].current?.offsetWidth || 0;
    // How far away from center
    const factorFromCenter = 1 - acitveIndex;
    // How far away from current acitve item
    const factor = acitveIndex - index;
    // Moves activeItem in to view, keeping the center where it is
    const transformation = ((activeWidth || 0) / 4) * factorFromCenter;
    // Needed to push text outside of containers while keeping the 33.33% width of the containers
    const extraMargin = 60;

    if (route === active) {
      return {
        letterSpacing: 0,
        transform: `translateX(${transformation}px)`,
      };
    }

    return {
      letterSpacing: `${Math.abs(factor) * 2.4}rem`,
      transform: `translateX(${
        transformation * Math.abs(factor) + extraMargin * (factor * -1)
      }px)`,
    };
  };

  const menu: { route: Menu; label: string }[] = [
    { route: "about", label: "About" },
    { route: "work", label: "Work" },
    { route: "contact", label: "Contact" },
  ];

  return (
    <div className="index">
      <div className="index__inner">
        <h1 className="f-headline index__brand">Annika Linke</h1>
        <div className="index__logo">
          <LogoLow className="icon header__logo" />
        </div>
        <nav
          className="index__menu"
          onMouseLeave={() => handleMouseEnter("work")}
        >
          {menu.map(({ route, label }, index) => (
            <Link
              key={route}
              href={`/${route}`}
              className={classNames(
                "f-headline index__menu-item",
                active === route && "index__menu-item--active"
              )}
              onMouseEnter={() => handleMouseEnter(route)}
              ref={boxRefs[route]}
            >
              <Media lessThan={Breakpoints.m}>{label}</Media>
              <Media greaterThanOrEqual={Breakpoints.m}>
                <motion.div
                  animate={getSpacing(route, index)}
                  transition={{
                    letterSpacing: { duration: 0.2 },
                    transform: { duration: 0.4 },
                  }}
                  className="index__animated"
                >
                  {label}
                </motion.div>
              </Media>
            </Link>
          ))}
        </nav>
        <h2 className="index__kicker">Frontend Development</h2>
      </div>
      <Footer className="index__footer" />
    </div>
  );
};

export default Index;
