"use client";
import { blocksToText } from "@/sanity";
import { Breakpoints, Media } from "@/styles/media";
import { ProjectSlug } from "@/types/Response";
import Link from "next/link";
import React from "react";
import { TypedObject } from "sanity";
import BlockContent from "../BlockContent/BlockContent";
import Image from "../Image/Image";
import "./work-slider.scss";
import classNames from "classnames";
import { motion } from "framer-motion";

interface Props {
  items: ProjectSlug[];
}

const WorkSlider = ({ items }: Props) => {
  const [active, setActive] = React.useState(items[0]);

  const handleMouseIn = (item: ProjectSlug) => {
    setActive(item);
  };

  return (
    <div className="work-slider">
      <div className="work-slider__content">
        <h2 className="work-slider__headline">Selected Work</h2>
        {items && (
          <ul className="work-slider__list">
            {items.map((item) => (
              <li
                className={classNames(
                  "work-slider__item",
                  active.slug.current === item.slug.current &&
                    "work-slider__item--active"
                )}
                key={item.slug.current}
                id={item.slug.current}
                onMouseEnter={() => handleMouseIn(item)}
              >
                <Link className="work-slider__title" href={item.slug.current}>
                  {active.slug.current === item.slug.current && (
                    <motion.span
                      className="work-slider__index"
                      initial={{ opacity: 0, transform: "translateX(-150%)" }}
                      animate={{ opacity: 1, transform: "translateX(-100%)" }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      key={active.slug.current}
                    >
                      {item.priority.toLocaleString("en-US", {
                        minimumIntegerDigits: 2,
                        useGrouping: false,
                      })}
                    </motion.span>
                  )}
                  <div className="work-slider__title-wrap">
                    <span
                      className="work-slider__title-text"
                      title={item.short || item.title}
                    >
                      {item.short || item.title}
                    </span>
                    <Media lessThan={Breakpoints.s}>
                      <div
                        className="work-slider__technology"
                        title={blocksToText(item.technology as TypedObject[])}
                      >
                        {item.technology && (
                          <BlockContent value={item.technology} />
                        )}
                      </div>
                    </Media>
                    {active.slug.current === item.slug.current && (
                      <motion.div
                        key={active.slug.current}
                        className="work-slider__indicator"
                        initial={{ width: 0 }}
                        animate={{ width: 45 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      />
                    )}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      <Media greaterThanOrEqual={Breakpoints.s} className="work-slider__media">
        {active && active.images?.[0] && (
          <figure className="work-slider__image">
            <motion.div
              initial={{ opacity: 0, transform: "translateX(2rem)" }}
              animate={{ opacity: 1, transform: "translateX(0)" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              key={active.images[0].asset._ref}
            >
              <Image
                image={active.images[0]}
                alt={active.images[0].alt || "Project Image"}
              />
              <figcaption className="hidden-visually">
                Image showcasing Project {active.title}
              </figcaption>
            </motion.div>
          </figure>
        )}
      </Media>
    </div>
  );
};

export default WorkSlider;
