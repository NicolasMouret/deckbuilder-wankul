export type UserCard = {
  cardId: number;
  quantity: number;
};

export type UserCollection = UserCard[];

export type CollectionDBEntry = {
  user_id: string;
  card_id: number;
  quantity: number;
  created_at: string;
};
