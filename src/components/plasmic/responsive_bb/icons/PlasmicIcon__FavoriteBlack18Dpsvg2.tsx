// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FavoriteBlack18Dpsvg2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FavoriteBlack18Dpsvg2Icon(
  props: FavoriteBlack18Dpsvg2IconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      className={classNames(
        "plasmic-default__svg",
        className,
        "MuiSvgIcon-root jss183"
      )}
      viewBox={"0 0 24 24"}
      aria-hidden={"true"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
        }
      ></path>
    </svg>
  );
}

export default FavoriteBlack18Dpsvg2Icon;
/* prettier-ignore-end */
