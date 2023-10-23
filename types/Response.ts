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
export interface SanityVideo {
  _type: "video";
  asset: {
    url: string;
  };
  alt?: "string";
  caption?: string;
  poster?: SanityImage;
}

export interface ProjectSlug {
  title?: string;
  priority: number;
  slug: {
    _type: "slug";
    current: string;
  };
  images?: Array<SanityImage | SanityVideo>;
  short?: string;
}

export interface Project extends SanityBody {
  _type: "project";
  slug: {
    _type: "slug";
    current: string;
  };
  images?: Array<SanityImage | SanityVideo>;
  cover?: SanityImage;
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

export interface About extends SanityBody {
  _type: "about";
  title?: string;
  image?: SanityImage;
  text?: TypedObject | TypedObject[];
  contact?: Contact;
}

export interface Imprint extends SanityBody {
  _type: "imprint";
  title?: string;
  text?: TypedObject | TypedObject[];
}
