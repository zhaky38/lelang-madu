document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      { id: 1, name: "Akasia", img: "1.png", price: 20000 },
      { id: 2, name: "Kaliandra", img: "2.png", price: 25000 },
      { id: 3, name: "Randu", img: "3.png", price: 30000 },
      { id: 4, name: "Kopi", img: "4.png", price: 30000 },
      { id: 5, name: "Karet", img: "5.png", price: 30000 },
    ],
  }));
});

// konversi ke rupiah
const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};
