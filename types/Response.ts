import { TypedObject } from "sanity";

export interface SanityBody {
  _createdAt: string;
  _updatedAt: string;
  _id: string;
  _rev: string;
}

export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
    metadata: any;
  };
  alt?: "string";
  hotspot?: {
    width: number;
    height: number;
    x: number;
    y: number;
  };
  caption?: string;
}

export interface ProjectSlug {
  title?: string;
  priority: number;
  slug: {
    _type: "slug";
    current: string;
  };
  images?: SanityImage[];
  short?: string;
}

export interface Project extends SanityBody {
  _type: "project";
  slug: {
    _type: "slug";
    current: string;
  };
  images?: SanityImage[];
  title?: string;
  priority: number;
  year?: string;
  technology?: TypedObject | TypedObject[];
  role?: TypedObject | TypedObject[];
  details?: TypedObject | TypedObject[];
  next?: ProjectSlug;
  short?: string;
}

export interface Contact extends SanityBody {
  _type: "contact";
  email: string;
  socialLinks?: {
    platform?: "linkedIn" | "xing";
    url?: string;
  }[];
  text?: TypedObject | TypedObject[];
}
