export interface IReview {
  id: string;
  userId: string;
  userName: string;
  questId: string;
  questName: string;
  dateOfReview: string;
  dateOfGame: string;
  reviewText: string;
  rate: number;
}
