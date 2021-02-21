// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector13IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector13Icon(props: Vector13IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 23 20"}
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
        d={
          "M11.62 17.773L3.077 9.228a4.35 4.35 0 016.152-6.152l2.393 2.393 2.392-2.393a4.35 4.35 0 116.152 6.152l-8.544 8.545z"
        }
        stroke={"currentColor"}
        strokeWidth={"2.734"}
        strokeLinecap={"round"}
      ></path>
    </svg>
  );
}

export default Vector13Icon;
/* prettier-ignore-end */
