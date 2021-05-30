export interface Medication {
    id?: string;
    code?: string;
    status?: "active" | "inactive" | "entered-in-error";
    manufacturer?: string;
    form?: "powder" | "tablets" | "capsule";
    amount?: string;
  }