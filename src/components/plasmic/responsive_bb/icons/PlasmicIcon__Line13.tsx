// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Line13IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Line13Icon(props: Line13IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 115 5"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M1 2l113.034.523"}
        stroke={"currentColor"}
        strokeWidth={"3.408"}
      ></path>
    </svg>
  );
}

export default Line13Icon;
/* prettier-ignore-end */
