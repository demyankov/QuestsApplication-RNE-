export interface IBooking {
  comment?: string;
  // дата и время игры в формате "Y-m-d H:i:s"
  datetime: string;
  email: string;
  name: string;
  phone: string;
  players_num: string;
  price: string;
  signature: string;
  source: "BR Application";
  uid: string;
}
