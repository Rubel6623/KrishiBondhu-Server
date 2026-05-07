export interface IEquipment {
  id: string;
  title: string;
  description: string;
  pricePerDay: number;
  location: string;
  availability: boolean;
  rating: number;
  images: string[];
  categoryId: string;
  providerId: string;
}

export interface ICreateEquipmentInput {
  title: string;
  description: string;
  pricePerDay: number;
  location: string;
  categoryId: string;
  images?: string[];
}

export interface IEquipmentFilterRequest {
  searchTerm?: string;
  categoryId?: string;
  minPrice?: number;
  maxPrice?: number;
  page?: number;
  limit?: number;
}