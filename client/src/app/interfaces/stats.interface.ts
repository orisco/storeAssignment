export default interface Stats {
  _id: string;
  amount: number;
  products: [
    {
      _id: string;
      title: string;
      price: number;
      description: string;
      quantity: number;
      image: string;
    }
  ];
}
