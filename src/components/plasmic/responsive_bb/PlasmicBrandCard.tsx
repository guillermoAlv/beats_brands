// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wBcw9dcxKyU36yfsUviVdG
// Component: HDfljj54Xp
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
import sty from "./PlasmicBrandCard.module.css"; // plasmic-import: HDfljj54Xp/css

export type PlasmicBrandCard__VariantMembers = {};
export type PlasmicBrandCard__VariantsArgs = {};
type VariantPropType = keyof PlasmicBrandCard__VariantsArgs;
export const PlasmicBrandCard__VariantProps = new Array<VariantPropType>();

export type PlasmicBrandCard__ArgsType = {
  brandCardImage?: React.ReactNode;
};

type ArgPropType = keyof PlasmicBrandCard__ArgsType;
export const PlasmicBrandCard__ArgProps = new Array<ArgPropType>(
  "brandCardImage"
);

export type PlasmicBrandCard__OverridesType = {
  root?: p.Flex<"div">;
  brandCardImage?: p.Flex<"div">;
  brandCardName?: p.Flex<"div">;
  brandCardCategory?: p.Flex<"div">;
};

export interface DefaultBrandCardProps {
  brandCardImage?: React.ReactNode;
  className?: string;
}

function PlasmicBrandCard__RenderFunc(props: {
  variants: PlasmicBrandCard__VariantsArgs;
  args: PlasmicBrandCard__ArgsType;
  overrides: PlasmicBrandCard__OverridesType;
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
      <div className={classNames(defaultcss.all, sty.box__h2XTk)}>
        <div className={classNames(defaultcss.all, sty.box__pxJVv)}>
          <div
            data-plasmic-name={"brandCardImage"}
            data-plasmic-override={overrides.brandCardImage}
            className={classNames(defaultcss.all, sty.brandCardImage)}
          >
            <p.PlasmicSlot defaultContents={null} value={args.brandCardImage} />
          </div>
        </div>

        <div className={classNames(defaultcss.all, sty.box__dV8TP)}>
          <div className={classNames(defaultcss.all, sty.box__anelK)}>
            <div
              data-plasmic-name={"brandCardName"}
              data-plasmic-override={overrides.brandCardName}
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.brandCardName
              )}
            >
              {"Enter some text"}
            </div>

            <div
              data-plasmic-name={"brandCardCategory"}
              data-plasmic-override={overrides.brandCardCategory}
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.brandCardCategory
              )}
            >
              {"Enter some text"}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "brandCardImage", "brandCardName", "brandCardCategory"],
  brandCardImage: ["brandCardImage"],
  brandCardName: ["brandCardName"],
  brandCardCategory: ["brandCardCategory"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  brandCardImage: "div";
  brandCardName: "div";
  brandCardCategory: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicBrandCard__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicBrandCard__VariantsArgs;
    args?: PlasmicBrandCard__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicBrandCard__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicBrandCard__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicBrandCard__ArgProps,
      internalVariantPropNames: PlasmicBrandCard__VariantProps
    });

    return PlasmicBrandCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBrandCard";
  } else {
    func.displayName = `PlasmicBrandCard.${nodeName}`;
  }
  return func;
}

export const PlasmicBrandCard = Object.assign(
  // Top-level PlasmicBrandCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    brandCardImage: makeNodeComponent("brandCardImage"),
    brandCardName: makeNodeComponent("brandCardName"),
    brandCardCategory: makeNodeComponent("brandCardCategory"),

    // Metadata about props expected for PlasmicBrandCard
    internalVariantProps: PlasmicBrandCard__VariantProps,
    internalArgProps: PlasmicBrandCard__ArgProps
  }
);

export default PlasmicBrandCard;
/* prettier-ignore-end */