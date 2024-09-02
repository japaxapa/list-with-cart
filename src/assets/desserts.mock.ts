export interface DessertItem {
  imageURL: string;
  type: string;
  title: string;
  price: number;
}

export const dessertList: DessertItem[] = [
  {
    imageURL: "waffle",
    type: "Waffle",
    title: "Waffle with Berries",
    price: 6.5,
  },
  {
    imageURL: "creme-brulee",
    type: "Crème Brûlée",
    title: "Vanilla Bean Crème Brûlée",
    price: 7.0,
  },
  {
    imageURL: "macaron",
    type: "Macaron",
    title: "Macaron Mix of Five",
    price: 8.0,
  },
  {
    imageURL: "tiramisu",
    type: "Tiramisu",
    title: "Classic Tiramisu",
    price: 5.5,
  },
  {
    imageURL: "baklava",
    type: "Baklava",
    title: "Pistachio Baklava",
    price: 4.0,
  },
  {
    imageURL: "meringue",
    type: "Pie",
    title: "Lemon Meringue Pie",
    price: 5.0,
  },
  {
    imageURL: "cake",
    type: "Cake",
    title: "Red Velvet Cake",
    price: 4.5,
  },
  {
    imageURL: "brownie",
    type: "Brownie",
    title: "Salted Caramel Brownie",
    price: 4.5,
  },
  {
    imageURL: "panna-cotta",
    type: "Panna Cotta",
    title: "Vanilla Panna Cotta",
    price: 6.5,
  },
];
