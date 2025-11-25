import type { Product2 } from "./products.type";

export interface ProductFormProps {
  cancel: () => void;
  editingProduct:Product2 | null
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
}
