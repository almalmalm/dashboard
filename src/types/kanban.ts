export interface IBoardCard {
  id: string;
  title: string;
}

export interface IBoardColumn {
  id: string;
  title: string;
  cards: IBoardCard[];
}
