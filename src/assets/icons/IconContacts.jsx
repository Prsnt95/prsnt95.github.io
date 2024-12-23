// icon:contacts | System UIcons https://systemuicons.com/ | Corey Ginnivan
import * as React from "react";

function IconContacts(props) {
  return (
    <svg
      viewBox="0 0 21 21"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(3 3)"
      >
        <path d="M9.5 5.5 A2 2 0 0 1 7.5 7.5 A2 2 0 0 1 5.5 5.5 A2 2 0 0 1 9.5 5.5 z" />
        <path d="M.5 3.5h1v-1a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 01-2 2h-8a2 2 0 01-2-2v-1h-1M.5 7.5h1M.5 5.5h1M.5 9.5h1" />
        <path d="M10.5 10.5v-1a2 2 0 00-2-2h-2a2 2 0 00-2 2v1a1 1 0 001 1h4a1 1 0 001-1z" />
      </g>
    </svg>
  );
}

export default IconContacts;
