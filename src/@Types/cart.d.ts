export interface ICart {
  id?: number;
  user_id?: number;
  cart: Array<ICartListItem>;
}

export interface ICartListItem {
  product_id: number;
  quantity: number;
}
