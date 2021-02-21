// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Union2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Union2Icon(props: Union2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 161 161"}
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
          "M0 47.939c0 12.453 4.807 23.797 12.689 32.32C4.807 88.782 0 100.126 0 112.58c0 26.475 21.728 47.938 48.532 47.938 12.048 0 23.071-4.337 31.556-11.516 8.485 7.179 19.508 11.516 31.556 11.516 26.804 0 48.532-21.463 48.532-47.938 0-12.454-4.807-23.798-12.689-32.32 7.882-8.524 12.689-19.868 12.689-32.321C160.176 21.463 138.448 0 111.644 0 99.596 0 88.573 4.337 80.088 11.516 71.603 4.336 60.58 0 48.532 0 21.728 0 0 21.463 0 47.939z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Union2Icon;
/* prettier-ignore-end */
