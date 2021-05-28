export interface Medication {
    identifier?: number[];
    code?: number | string;
    status?: "active" | "inactive" | "entered-in-error";
    manufacturer?: string;
    form?: "powder" | "tablets" | "capsule" | number;
    amount?: { numerator?: number; denominator?: number; };
  }