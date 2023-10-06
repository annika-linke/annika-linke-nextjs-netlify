import React, { FunctionComponent as FC } from "react";
import "./footer.scss";

interface Props {
  className?: string;
}

const Footer: FC<Props> = ({ className }: Props) => {
  return (
    <footer className={`footer ${className}`}>
      <div className="footer__inner">
        <div className="footer__credits">
          <span>© {new Date().getFullYear()}, Annika Linke</span>
        </div>
        <div className="footer__link">
          {/* <Link to="/">Privacy Policy</Link> */}
          <span>Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
