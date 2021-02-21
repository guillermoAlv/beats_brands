// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Union4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Union4Icon(props: Union4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 28 24"}
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
          "M11.954 19.39l-.967-.967.967.967zm-2.735 2.734l.967.967-.967-.967zm-2.395-3.885l.596-1.23-.596 1.23zm-3.457-7.694a7.177 7.177 0 017.178-7.178V.633a9.911 9.911 0 00-9.912 9.912h2.734zm4.053 6.463a7.178 7.178 0 01-4.053-6.463H.633a9.912 9.912 0 005.595 8.924l1.192-2.46zm1.416 4.39v-2.176H6.102V21.4h2.734zm2.15-2.975l-2.733 2.734 1.933 1.934 2.734-2.735-1.933-1.933zm7.078-.7h-5.385v2.733h5.385v-2.734zm7.177-7.178a7.177 7.177 0 01-7.177 7.177v2.734c5.474 0 9.912-4.437 9.912-9.911H25.24zm-7.177-7.178a7.177 7.177 0 017.177 7.178h2.735c0-5.474-4.438-9.912-9.912-9.912v2.734zm-7.52 0h7.52V.633h-7.52v2.734zm2.376 16.99a.342.342 0 01-.241.1v-2.735c-.635 0-1.243.252-1.692.7l1.933 1.934zm-6.818 1.042c0 2.131 2.577 3.199 4.084 1.692l-1.933-1.934a.342.342 0 01.583.242H6.102zm.126-1.93a.19.19 0 01-.075-.068.325.325 0 01-.051-.179h2.734c0-1.01-.622-1.829-1.416-2.214L6.228 19.47z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Union4Icon;
/* prettier-ignore-end */
