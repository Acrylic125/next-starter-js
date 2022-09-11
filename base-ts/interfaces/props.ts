import * as React from "react";
import type { ImageProps, StaticImageData } from "next/image";
import { User } from "./user";

export type StyleProps = {
  style?: React.CSSProperties | undefined;
};

export type ClassnameProps = {
  className?: string | undefined;
};

export type ChildrenProps = {
  children?: React.ReactNode | undefined;
};

export type StylingProps = StyleProps & ClassnameProps;
export type PublicPath = string;
export type NextImageSrc = ImageProps["src"];
export type Auth0UserProps = {
  user: User;
};
