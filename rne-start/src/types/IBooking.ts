// export interface IBooking {
//   comment?: string;
//   // дата и время игры в формате "Y-m-d H:i:s"
//   datetime: string;
//   email?: string;
//   name?: string;
//   phone?: string;
//   players_num?: string;
//   price: string;
//   signature: string;
//   source: string;
//   uid: string;
//   our_time_id: number;
// }

export interface IBooking {
  id_quest: number;
  source: string;
  date_quest: string;
  time_quest: string;
  price_quest: string;
  quest_id: string;
  key_input?: string;
  name?: string;
  email?: string;
  phone?: string;
  players?: string;
  comment?: string;
}
