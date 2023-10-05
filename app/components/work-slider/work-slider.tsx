import React from 'react';

interface Props {
  items: Array<Item>;
}

interface Item {
  title: string;
  index: number;
  image: string;
}

const WorkSlider = ({ items }: Props) => {
  return (
    <div className="work-slider">
      {items &&
        items.map((item) => (
          <div className="work-slider__item" key={item.index}>
            <h2 className="work-slider__title">
              <span className="work-slider__index">
                {item.index.toLocaleString('en-US', {
                  minimumIntegerDigits: 2,
                  useGrouping: false,
                })}
              </span>
              <span className="work-slider__title-text">{item.title}</span>
            </h2>
          </div>
        ))}
    </div>
  );
};

export default WorkSlider;
