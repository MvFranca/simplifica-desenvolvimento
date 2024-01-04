// icon:add-outline | Ionicons https://ionicons.com/ | Ionic Framework
import * as React from "react";

function IconAddOutline(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M256 112v288M400 256H112"
      />
    </svg>
  );
}

export default IconAddOutline;
