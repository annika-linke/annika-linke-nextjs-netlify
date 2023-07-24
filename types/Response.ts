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
  };
}

export interface Project extends SanityBody {
  _type: "project";
  slug: {
    _type: "slug";
    current: string;
  };
  image: SanityImage;
  title: string;
}
