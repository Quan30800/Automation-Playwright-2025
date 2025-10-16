class Order {
  orderID: number;
  customerName: string;
  items: { 
    name: string; 
    price: number; 
    amount: number; 
    discount: number; 
  }[];
  totalAmount: number;

  constructor(orderID: number, customerName: string, items: { name: string; price: number; amount: number; discount: number; }[]) {
    this.orderID = orderID;
    this.customerName = customerName;
    this.items = items;
    this.totalAmount = 0;
  }
  
 addItem(newItem: { name: string; price: number; amount: number; discount: number }) {
  this.items.push(newItem);
}
 calculateTotalAmount() {
  this.totalAmount = this.items.reduce((sum, item) => {
    return sum + item.price * item.amount * (1 - item.discount / 100);
  }, 0);

  console.log(`Tổng tiền đơn hàng là: ${this.totalAmount} VND`);
}
}

const order1 = new Order(1, "Nguyen Van A", []);

// Tạo object item và thêm vào
const item1 = { name: "Bánh mì", price: 15000, amount: 2, discount: 0 };
order1.addItem(item1);
order1.calculateTotalAmount();
console.log(order1);


    
  
