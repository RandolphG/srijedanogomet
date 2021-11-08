import React, { FC } from "react";
import "./styles/_notFoundStyles.scss";

/**
 * Not found page
 */
const NotFound: FC = () => {
  return (
    <div className="notFoundContainer">
      <div key="notFound" className="grid">
        <div className="grid__row">
          <div className="grid__col">
            <div className="box animation animation--shake--vertical">4</div>
          </div>

          <div className="grid__col">
            <div className="box animation animation--reverse animation--shake--vertical">
              0
            </div>
          </div>

          <div className="grid__col">
            <div className="box animation animation--shake--vertical">4</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
