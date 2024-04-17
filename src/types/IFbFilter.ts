import { WhereFilterOp } from "firebase/firestore";

export interface IFbFilter {
    field: string;
    operator: WhereFilterOp;
    value: string | number | boolean;
  }
  