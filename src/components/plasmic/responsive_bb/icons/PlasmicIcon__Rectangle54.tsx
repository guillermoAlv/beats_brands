// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle54IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle54Icon(props: Rectangle54IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 7 7"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M0 3.19A3.19 3.19 0 013.19 0h.934A2.256 2.256 0 016.38 2.256v1.868A2.256 2.256 0 014.124 6.38H3.19A3.19 3.19 0 010 3.19z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Rectangle54Icon;
/* prettier-ignore-end */
