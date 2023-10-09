import React, { FunctionComponent as FC } from "react";
import "./work-navigator.scss";
import Link from "next/link";

interface Props {
  to: string;
  index: number;
  title: string;
}

const WorkNavigator: FC<Props> = ({ to, index, title }: Props) => {
  const formattedNumber = index.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });

  return (
    <Link className="work-navigator" href={to}>
      <div className="work-navigator__desc">
        <span>next</span>
        <span>{formattedNumber}</span>
      </div>
      <div className="work-navigator__title f-headline">
        <span>{title}</span>
      </div>
    </Link>
  );
};

export default WorkNavigator;
