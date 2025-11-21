export interface Photo {
  id: string;
  url: string;
  title: string;
  category: string;
  width: number;
  height: number;
  description?: string;
}

export interface Category {
  id: string;
  label: string;
}

export type ModalContextType = {
  selectedPhoto: Photo | null;
  setSelectedPhoto: (photo: Photo | null) => void;
};
