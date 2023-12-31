export interface BrandNameProps {
  size: 'main' | 'small'
}

export interface BrandNameSizeClassesProps {
  h1: string;
  span4: string;
}

export interface SvgProps {
  size?: number;
  fill?: string;
}

export interface TaglineProps {
  title?: string,
  icon?: JSX.Element,
  tagline?: string
}