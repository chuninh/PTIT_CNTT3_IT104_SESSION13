import { Component } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

type Props = {
  product: Product;
};

export default class Children_Comp extends Component<Props> {
  render() {
    const { id, name, price, quantity } = this.props.product;
    return (
      <div>
        <h2>Dữ liệu trong component con</h2>
        <p>Id: {id}</p>
        <p>Product name: {name}</p>
        <p>Price: {price.toLocaleString()} đ</p>
        <p>Quantity: {quantity}</p>
      </div>
    );
  }
}
