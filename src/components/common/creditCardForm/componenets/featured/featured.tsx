import React from "react";

export const Featured = () => (
  <div className="modal__featured">
    <button type="button" className="button--transparent button--close">
      <svg
        className="nc-icon glyph"
        x="0px"
        y="0px"
        width="32px"
        height="32px"
        viewBox="0 0 32 32"
      >
        <g>
          <path
            fill="#ffffff"
            d="M1.293,15.293L11,5.586L12.414,7l-8,8H31v2H4.414l8,8L11,26.414l-9.707-9.707 C0.902,16.316,0.902,15.684,1.293,15.293z"
          />
        </g>
      </svg>
    </button>
    <div className="modal__circle" />
    {/*<img
        alt="modal__product"
        src="https://cloud.githubusercontent.com/assets/3484527/19622568/9c972d44-987a-11e6-9dcc-93d496ef408f.png"
        className="modal__product"
      />*/}
  </div>
);
