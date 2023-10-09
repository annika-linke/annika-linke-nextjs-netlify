import { ProjectSlug } from "@/types/Response";
import Link from "next/link";
import React from "react";
import "./work-slider.scss";
import BlockContent from "../BlockContent/BlockContent";
import { blocksToText } from "@/sanity";
import { TypedObject } from "sanity";

interface Props {
  items: ProjectSlug[];
}

const WorkSlider = ({ items }: Props) => {
  return (
    <div className="work-slider">
      <h2 className="work-slider__headline">Selected Work</h2>
      {items && (
        <ul className="work-slider__list">
          {items.map((item) => (
            <li
              className="work-slider__item"
              key={item.slug.current}
              id={item.slug.current}
            >
              <Link className="work-slider__title" href={item.slug.current}>
                <span className="work-slider__index">
                  {item.priority.toLocaleString("en-US", {
                    minimumIntegerDigits: 2,
                    useGrouping: false,
                  })}
                </span>
                <div className="work-slider__title-wrap">
                  <span
                    className="work-slider__title-text"
                    title={item.short || item.title}
                  >
                    {item.short || item.title}
                  </span>
                  {item.technology && (
                    <div
                      className="work-slider__technology"
                      title={blocksToText(item.technology as TypedObject[])}
                    >
                      <BlockContent value={item.technology} />
                    </div>
                  )}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WorkSlider;
