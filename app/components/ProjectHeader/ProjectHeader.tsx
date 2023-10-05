import React, { FunctionComponent as FC } from "react";
import classNames from "classnames";
import { TypedObject } from "sanity";
import BlockContent from "../BlockContent/BlockContent";
import "./project-header.scss";

interface Props {
  headline?: string;
  kicker?: string;
  info?: {
    title: string;
    content?: TypedObject | TypedObject[];
  }[];
  className: string;
}

const ProjectHeader: FC<Props> = ({
  headline,
  kicker,
  info,
  className,
}: Props) => {
  return (
    <div className={classNames("project-header", className)}>
      {kicker && <span className="project-header__kicker">Y. {kicker}</span>}
      {headline && (
        <h1 className="f-headline project-header__headline">{headline}</h1>
      )}

      {info && (
        <section className="project-header__info">
          {info.map((item) => (
            <div key={item.title} className="project-header__info-item">
              <h2 className="f-headline project-header__info-title">
                {item.title}
              </h2>
              <ul className="project-header__list">
                {item.content && <BlockContent value={item.content} />}
              </ul>
            </div>
          ))}
        </section>
      )}
    </div>
  );
};

export default ProjectHeader;
