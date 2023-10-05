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

export interface Project extends SanityBody {
  _type: "project";
  slug: {
    _type: "slug";
    current: string;
  };
  images?: SanityImage[];
  title?: string;
  priority?: number;
  year?: string;
  technology?: TypedObject | TypedObject[];
  role?: TypedObject | TypedObject[];
  details?: TypedObject | TypedObject[];
}
