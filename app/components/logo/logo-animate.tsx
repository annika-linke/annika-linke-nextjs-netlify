import React, { useEffect } from 'react';
import PupilShape from '../../icons/pupil-shape.svg';
import BellShape from '../../icons/bell.svg';
import EyeShape from '../../icons/eye-shape.svg';
import './logo-animate.css';

const LogoAnimate = () => {
  const calculateDistance = ($el, mouseX, mouseY) => {
    const boundingEl = $el.getBoundingClientRect();
    const top = boundingEl.top;
    const left = boundingEl.left;
    const width = parseFloat(
      getComputedStyle($el, null).width.replace('px', ''),
    );
    const height = parseFloat(
      getComputedStyle($el, null).height.replace('px', ''),
    );
    return Math.floor(
      Math.sqrt(
        Math.pow(mouseX - (left + width / 2), 2) +
          Math.pow(mouseY - (top + height / 2), 2),
      ),
    );
  };

  const followMouse = (event) => {
    const mY = event.pageY;
    const mX = event.pageX;
    const $el = event.currentTarget;
    const distance = calculateDistance($el, mX, mY);
    const cssDist = distance / 35;
    const $eye = $el.querySelector('.logo-animate__eyeball');

    if ($eye) {
      const boundingEl = $el.getBoundingClientRect();
      const top = boundingEl.top;
      const left = boundingEl.left;
      const width = parseFloat(
        getComputedStyle($el, null).width.replace('px', ''),
      );
      const height = parseFloat(
        getComputedStyle($el, null).height.replace('px', ''),
      );
      const x = left + width / 2;
      const y = top + height / 2;
      const rad = Math.atan2(mX - x, mY - y);
      const rot = rad * (180 / Math.PI) * -1;

      $eye.setAttribute('style', `transform: rotate(${rot}deg)`);
      const $iris = $el.querySelector('.logo-animate__iris');

      if ($iris) {
        $iris.style.transform = `translate(${cssDist}px, ${cssDist}px)`;
      }
    }
  };

  useEffect(() => {
    document.querySelector('body').addEventListener('mousemove', followMouse);
    document.querySelector('body').addEventListener('mouseleave', (event) => {
      const $iris = event.currentTarget.querySelector('.logo-animate__iris');
      if ($iris) {
        $iris.style.transform = 'translate(0, 0)';
      }
    });
  }, []);

  return (
    <div className="logo-animate">
      <div className="logo-animate__bell">
        <BellShape />
      </div>
      <div className="logo-animate__eye">
        <div className="logo-animate__eyeball">
          <div className="logo-animate__iris">
            <PupilShape />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoAnimate;
