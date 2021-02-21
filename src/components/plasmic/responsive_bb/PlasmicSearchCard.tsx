// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wBcw9dcxKyU36yfsUviVdG
// Component: Px_8qz3kVB
import * as React from "react";

import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";
import defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import projectcss from "./plasmic_responsive_bb.module.css"; // plasmic-import: wBcw9dcxKyU36yfsUviVdG/projectcss
import sty from "./PlasmicSearchCard.module.css"; // plasmic-import: Px_8qz3kVB/css

import HangersvgIcon from "./icons/PlasmicIcon__Hangersvg"; // plasmic-import: fezaFbqFB/icon

export type PlasmicSearchCard__VariantMembers = {};

export type PlasmicSearchCard__VariantsArgs = {};
type VariantPropType = keyof PlasmicSearchCard__VariantsArgs;
export const PlasmicSearchCard__VariantProps = new Array<VariantPropType>();

export type PlasmicSearchCard__ArgsType = {};
type ArgPropType = keyof PlasmicSearchCard__ArgsType;
export const PlasmicSearchCard__ArgProps = new Array<ArgPropType>();

export type PlasmicSearchCard__OverridesType = {
  root?: p.Flex<"div">;
  searchTerm?: p.Flex<"div">;
  svg?: p.Flex<"svg">;
};

export interface DefaultSearchCardProps {
  className?: string;
}

function PlasmicSearchCard__RenderFunc(props: {
  variants: PlasmicSearchCard__VariantsArgs;
  args: PlasmicSearchCard__ArgsType;
  overrides: PlasmicSearchCard__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <div className={classNames(defaultcss.all, sty.box___49RXs)}>
        <div className={classNames(defaultcss.all, sty.box___1XQq1)}>
          <div
            data-plasmic-name={"searchTerm"}
            data-plasmic-override={overrides.searchTerm}
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.searchTerm
            )}
          >
            {"Enter some text"}
          </div>
        </div>

        <div className={classNames(defaultcss.all, sty.box__jj8Ym)}>
          <HangersvgIcon
            data-plasmic-name={"svg"}
            data-plasmic-override={overrides.svg}
            className={classNames(defaultcss.all, sty.svg)}
            role={"img"}
          />
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "searchTerm", "svg"],
  searchTerm: ["searchTerm"],
  svg: ["svg"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  searchTerm: "div";
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSearchCard__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = { // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicSearchCard__VariantsArgs;
  args?: PlasmicSearchCard__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicSearchCard__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicSearchCard__ArgsType, ReservedPropsType> &
  // Specify overrides for each element directly as props
  Omit<
    NodeOverridesType<T>,
    ReservedPropsType | VariantPropType | ArgPropType
  > &
  // Specify props for the root element
  Omit<
    Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
    ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
  >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicSearchCard__ArgProps,
      internalVariantPropNames: PlasmicSearchCard__VariantProps
    });

    return PlasmicSearchCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSearchCard";
  } else {
    func.displayName = `PlasmicSearchCard.${nodeName}`;
  }
  return func;
}

export const PlasmicSearchCard = Object.assign(
  // Top-level PlasmicSearchCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    searchTerm: makeNodeComponent("searchTerm"),
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicSearchCard
    internalVariantProps: PlasmicSearchCard__VariantProps,
    internalArgProps: PlasmicSearchCard__ArgProps
  }
);

export default PlasmicSearchCard;
/* prettier-ignore-end */
