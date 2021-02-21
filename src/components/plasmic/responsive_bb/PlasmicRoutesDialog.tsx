// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wBcw9dcxKyU36yfsUviVdG
// Component: DFJFHCaPCd
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
import DialogClickableText from "../../DialogClickableText"; // plasmic-import: E4MwO2Nk-p/component

import "@plasmicapp/react-web/lib/plasmic.css";
import defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import projectcss from "./plasmic_responsive_bb.module.css"; // plasmic-import: wBcw9dcxKyU36yfsUviVdG/projectcss
import sty from "./PlasmicRoutesDialog.module.css"; // plasmic-import: DFJFHCaPCd/css

export type PlasmicRoutesDialog__VariantMembers = {};

export type PlasmicRoutesDialog__VariantsArgs = {};
type VariantPropType = keyof PlasmicRoutesDialog__VariantsArgs;
export const PlasmicRoutesDialog__VariantProps = new Array<VariantPropType>();

export type PlasmicRoutesDialog__ArgsType = {
  subscribeButton?: React.ReactNode;
  aboutusButton?: React.ReactNode;
  faqButton?: React.ReactNode;
  contactButton?: React.ReactNode;
};

type ArgPropType = keyof PlasmicRoutesDialog__ArgsType;
export const PlasmicRoutesDialog__ArgProps = new Array<ArgPropType>(
  "subscribeButton",
  "aboutusButton",
  "faqButton",
  "contactButton"
);

export type PlasmicRoutesDialog__OverridesType = {
  root?: p.Flex<"div">;
  contact?: p.Flex<typeof DialogClickableText>;
};

export interface DefaultRoutesDialogProps {
  subscribeButton?: React.ReactNode;
  aboutusButton?: React.ReactNode;
  faqButton?: React.ReactNode;
  contactButton?: React.ReactNode;
  className?: string;
}

function PlasmicRoutesDialog__RenderFunc(props: {
  variants: PlasmicRoutesDialog__VariantsArgs;
  args: PlasmicRoutesDialog__ArgsType;
  overrides: PlasmicRoutesDialog__OverridesType;
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
      <p.PlasmicSlot
        defaultContents={
          <DialogClickableText
            className={classNames(
              "__wab_instance",
              sty.dialogClickableText__wdXj
            )}
          />
        }
        value={args.subscribeButton}
      />

      <p.PlasmicSlot
        defaultContents={
          <DialogClickableText
            className={classNames(
              "__wab_instance",
              sty.dialogClickableText__iyIIz
            )}
          />
        }
        value={args.aboutusButton}
      />

      <p.PlasmicSlot
        defaultContents={
          <DialogClickableText
            className={classNames(
              "__wab_instance",
              sty.dialogClickableText__ffAkY
            )}
          />
        }
        value={args.faqButton}
      />

      <p.PlasmicSlot
        defaultContents={
          <DialogClickableText
            data-plasmic-name={"contact"}
            data-plasmic-override={overrides.contact}
            className={classNames("__wab_instance", sty.contact)}
          />
        }
        value={args.contactButton}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "contact"],
  contact: ["contact"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  contact: typeof DialogClickableText;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicRoutesDialog__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = { // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicRoutesDialog__VariantsArgs;
  args?: PlasmicRoutesDialog__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicRoutesDialog__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicRoutesDialog__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicRoutesDialog__ArgProps,
      internalVariantPropNames: PlasmicRoutesDialog__VariantProps
    });

    return PlasmicRoutesDialog__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicRoutesDialog";
  } else {
    func.displayName = `PlasmicRoutesDialog.${nodeName}`;
  }
  return func;
}

export const PlasmicRoutesDialog = Object.assign(
  // Top-level PlasmicRoutesDialog renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    contact: makeNodeComponent("contact"),

    // Metadata about props expected for PlasmicRoutesDialog
    internalVariantProps: PlasmicRoutesDialog__VariantProps,
    internalArgProps: PlasmicRoutesDialog__ArgProps
  }
);

export default PlasmicRoutesDialog;
/* prettier-ignore-end */
