export interface Ingredient {
    item: string;
    isActive?: boolean;
    strength?: {numerator?: number; denominator?: number; };
  }