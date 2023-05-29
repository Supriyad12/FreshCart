// ------timer-------
let counts1 = setInterval(updated2, 100);
let upto1 = 0;
function updated2() {
  var count1 = document.getElementById("counter1");
  count1.innerHTML = ++upto1 + `<p class="text-muted">Sec</p>`;
  if (upto1 === 59) {
    clearInterval(counts1);
    counts1 = setInterval(updated3, 100);
  }

  function updated3() {
    var count1 = document.getElementById("counter1");
    count1.innerHTML = --upto1 + `<p class="text-muted">Sec</p>`;
    if (upto1 === 0) {
      clearInterval(counts1);
      counts1 = setInterval(updated2, 100);
    }
  }
}

// ------timer2-------
let counts = setInterval(updated, 100);
let upto = 0;
function updated() {
  var count = document.getElementById("counter");
  count.innerHTML = ++upto + `<p class="text-muted">Sec</p>`;
  if (upto === 59) {
    clearInterval(counts);
    counts = setInterval(updated1, 100);
  }

  function updated1() {
    var count = document.getElementById("counter");
    count.innerHTML = --upto + `<p class="text-muted">Sec</p>`;
    if (upto === 0) {
      clearInterval(counts);
      counts = setInterval(updated, 100);
    }
  }
}

// product

const product = [
  {
    id: "product-img-1",
    name: "Haldiram sev bhujiya",
    desc: "Snack & Munchies",
    rating: "",
    price: 18,
    qty: 0,
  },

  {
    id: "product-img-2",
    name: "NutriChoice Digestive",
    desc: "Bakery & Biscuits",
    rating: "",
    price: 24,
    qty: 0,
  },

  {
    id: "product-img-3",
    name: "Cadbury 5 Star Chocolate",
    desc: "Bakery & Biscuits",
    rating: "",
    price: 32,
    qty: 0,
  },

  {
    id: "product-img-4",
    name: "Onion Flavour Potato",
    desc: "Snack & Munchies",
    rating: "",
    price: 3,
    qty: 0,
  },

  {
    id: "product-img-5",
    name: "Salted Instant Popcorn",
    desc: "Instant Food",
    rating: "",
    price: 13,
    qty: 0,
  },

  {
    id: "product-img-6",
    name: "Blueberry Greek Yogurt",
    desc: "Dairy, Bread & Eggs",
    rating: "",
    price: 18,
    qty: 0,
  },

  {
    id: "product-img-7",
    name: "Britannia Cheese Slices",
    desc: "Dairy, Bread & Eggs",
    rating: "",
    price: 24,
    qty: 0,
  },

  {
    id: "product-img-8",
    name: "Kellogg's Original Cereals'",
    desc: "Instant Food",
    rating: "",
    price: 32,
    qty: 0,
  },

  {
    id: "product-img-9",
    name: "Slurrp Millet Chocolate",
    desc: "Snack & Munchies",
    rating: "",
    price: 3,
    qty: 0,
  },

  {
    id: "product-img-10",
    name: "Amul Butter - 500 g",
    desc: "Dairy, Bread & Eggs",
    rating: "",
    price: 13,
    qty: 0,
  },

  {
    id: "product-img-11",
    name: "Roast Ground Coffee",
    desc: "Tea, Coffee & Drinks",
    rating: "",
    price: 13,
    qty: 0,
  },

  {
    id: "product-img-12",
    name: "Crushed Tomatoes",
    desc: "Fruits & Vegetables",
    rating: "",
    price: 13,
    qty: 0,
  },

  {
    id: "product-img-13",
    name: "Golden Pineapple",
    desc: "Fruits & Vegetables",
    rating: "",
    price: 13,
    qty: 0,
  }
];
