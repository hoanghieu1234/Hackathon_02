const items = [
    { id: 1, name: "Nguyễn Hoàng Hiếu"},
    { id: 2, name: "Trương công hoàng"},
    { id: 3, name: "Nguyễn phi hùng"},
  ];

const listItem  = JSON.parse(localStorage.getItem("item")); 
if(!listItem){
    localStorage.setItem("item",JSON.stringify(items));
}