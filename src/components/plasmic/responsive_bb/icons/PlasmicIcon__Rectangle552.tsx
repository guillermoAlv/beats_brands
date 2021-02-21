// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle552IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle552Icon(props: Rectangle552IconProps) {
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
        d={"M0 0h6.38v3.19a3.19 3.19 0 01-6.38 0V0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Rectangle552Icon;
/* prettier-ignore-end */
