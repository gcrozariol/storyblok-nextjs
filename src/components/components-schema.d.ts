import {StoryblokStory} from 'storyblok-generate-ts'

export type MultilinkStoryblok =
  | {
      id?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: "story";
      target?: "_self" | "_blank";
      [k: string]: any;
    }
  | {
      url?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: "asset" | "url";
      target?: "_self" | "_blank";
      [k: string]: any;
    }
  | {
      email?: string;
      linktype?: "email";
      target?: "_self" | "_blank";
      [k: string]: any;
    };

export interface ButtonStoryblok {
  label?: string;
  link?: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  _uid: string;
  component: "button";
  [k: string]: any;
}

export interface CategoriesStoryblok {
  title?: string;
  description?: string;
  categories?: (
    | ButtonStoryblok
    | CategoriesStoryblok
    | CategoryCardStoryblok
    | FeatureStoryblok
    | FeaturedProductCardStoryblok
    | FeaturedProductsStoryblok
    | GridStoryblok
    | HeroStoryblok
    | LandingPageStoryblok
    | LessonsStoryblok
    | PageStoryblok
    | TeaserStoryblok
  )[];
  _uid: string;
  component: "categories";
  [k: string]: any;
}

export interface AssetStoryblok {
  _uid?: string;
  id: number | null;
  alt: string | null;
  name: string;
  focus: string | null;
  source: string | null;
  title: string | null;
  filename: string;
  copyright: string | null;
  fieldtype?: string;
  meta_data?: null | {
    [k: string]: any;
  };
  is_external_url?: boolean;
  [k: string]: any;
}

export interface CategoryCardStoryblok {
  image?: AssetStoryblok;
  title?: string;
  description?: string;
  link?: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  _uid: string;
  component: "category-card";
  [k: string]: any;
}

export interface FeatureStoryblok {
  name?: string;
  _uid: string;
  component: "feature";
  [k: string]: any;
}

export interface FeaturedProductCardStoryblok {
  product_name?: string;
  price?: string;
  link?: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  _uid: string;
  component: "featured-product-card";
  [k: string]: any;
}

export interface FeaturedProductsStoryblok {
  title?: string;
  description?: string;
  products?: (
    | ButtonStoryblok
    | CategoriesStoryblok
    | CategoryCardStoryblok
    | FeatureStoryblok
    | FeaturedProductCardStoryblok
    | FeaturedProductsStoryblok
    | GridStoryblok
    | HeroStoryblok
    | LandingPageStoryblok
    | LessonsStoryblok
    | PageStoryblok
    | TeaserStoryblok
  )[];
  _uid: string;
  component: "featured-products";
  [k: string]: any;
}

export interface GridStoryblok {
  columns?: (
    | ButtonStoryblok
    | CategoriesStoryblok
    | CategoryCardStoryblok
    | FeatureStoryblok
    | FeaturedProductCardStoryblok
    | FeaturedProductsStoryblok
    | GridStoryblok
    | HeroStoryblok
    | LandingPageStoryblok
    | LessonsStoryblok
    | PageStoryblok
    | TeaserStoryblok
  )[];
  _uid: string;
  component: "grid";
  [k: string]: any;
}

export interface HeroStoryblok {
  title?: string;
  description?: string;
  primary_link?: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  secondary_link?: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  image?: AssetStoryblok;
  _uid: string;
  component: "hero";
  [k: string]: any;
}

export interface LandingPageStoryblok {
  body?: (
    | ButtonStoryblok
    | CategoriesStoryblok
    | CategoryCardStoryblok
    | FeatureStoryblok
    | FeaturedProductCardStoryblok
    | FeaturedProductsStoryblok
    | GridStoryblok
    | HeroStoryblok
    | LandingPageStoryblok
    | LessonsStoryblok
    | PageStoryblok
    | TeaserStoryblok
  )[];
  _uid: string;
  component: "landing-page";
  [k: string]: any;
}

export interface LessonsStoryblok {
  title?: string;
  description?: string;
  bullet_points?: string;
  primary_link?: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  secondary_link?: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  _uid: string;
  component: "lessons";
  [k: string]: any;
}

export interface PageStoryblok {
  body?: (
    | ButtonStoryblok
    | CategoriesStoryblok
    | CategoryCardStoryblok
    | FeatureStoryblok
    | FeaturedProductCardStoryblok
    | FeaturedProductsStoryblok
    | GridStoryblok
    | HeroStoryblok
    | LandingPageStoryblok
    | LessonsStoryblok
    | PageStoryblok
    | TeaserStoryblok
  )[];
  _uid: string;
  component: "page";
  uuid?: string;
  [k: string]: any;
}

export interface TeaserStoryblok {
  headline?: string;
  _uid: string;
  component: "teaser";
  [k: string]: any;
}
