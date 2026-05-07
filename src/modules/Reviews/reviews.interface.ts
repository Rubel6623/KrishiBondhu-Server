export interface IReview {
  id: string;
  rating: number;
  comment?: string | null;
  userId: string;
  equipmentId: string;
  createdAt: Date;
}

export interface ICreateReviewInput {
  rating: number;
  comment?: string;
  equipmentId: string;
}