// galery
document.addEventListener("DOMContentLoaded", function () {
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");
  const galleries = document.querySelectorAll(".gallery-item");
  const indicators = document.querySelectorAll(".indicators div");
  let currentIndex = 0;
  let autoSlideInterval;

  // Fungsi untuk menampilkan galeri
  function showGallery(index) {
    // Sembunyikan semua galeri
    galleries.forEach((gallery) => gallery.classList.remove("active"));
    indicators.forEach((indicator) => indicator.classList.remove("active"));

    // Tampilkan galeri yang dipilih
    galleries[index].classList.add("active");
    indicators[index].classList.add("active");
  }

  // Fungsi untuk memulai pergantian otomatis
  function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % galleries.length;
      showGallery(currentIndex);
    }, 3000); // Ganti galeri setiap 3 detik
  }

  // Fungsi untuk menghentikan pergantian otomatis
  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  // Event listener untuk tombol previous
  prevButton.addEventListener("click", function () {
    stopAutoSlide(); // Hentikan pergantian otomatis saat tombol ditekan
    currentIndex = (currentIndex - 1 + galleries.length) % galleries.length;
    showGallery(currentIndex);
    startAutoSlide(); // Mulai ulang pergantian otomatis
  });

  // Event listener untuk tombol next
  nextButton.addEventListener("click", function () {
    stopAutoSlide(); // Hentikan pergantian otomatis saat tombol ditekan
    currentIndex = (currentIndex + 1) % galleries.length;
    showGallery(currentIndex);
    startAutoSlide(); // Mulai ulang pergantian otomatis
  });

  // Event listener untuk indikator
  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      stopAutoSlide(); // Hentikan pergantian otomatis saat indikator dipilih
      currentIndex = index;
      showGallery(currentIndex);
      startAutoSlide(); // Mulai ulang pergantian otomatis
    });
  });

  // Tampilkan galeri pertama saat halaman dimuat
  showGallery(0);

  // Mulai pergantian otomatis
  startAutoSlide();
});




function showPage(pageNumber) {
  const pages = document.querySelectorAll('.product-page');
  pages.forEach((page) => page.classList.remove('active'));

  document.getElementById(`page-${pageNumber}`).classList.add('active');
}

// Data produk (contoh)
const products = {
  product1: {
    title: "New States Apparel Premium Cotton T-shirt 7200",
    price: "Rp50.000",
    images: [
      "/img/NSA/Premium Cotton T-shirt 7200.png",
      "img/FOTO/NSA/PREMIUM/C1.jpg",
      "img/FOTO/NSA/PREMIUM/C2.jpg",
      "img/FOTO/NSA/PREMIUM/C3.jpg",
      "img/FOTO/NSA/PREMIUM/C4.jpg"
    ],
    colors : [
      { code: "#000000", name: "Black" },
      { code: "#FFFFFF", name: "White" },
      { code: "#C0C0C0", name: "Sport Grey" },
      { code: "#000080", name: "Navy" },
      { code: "#800000", name: "Maroon" },
      { code: "#FF0000", name: "Red" },
      { code: "#4169E1", name: "Royal Blue" },
      { code: "#008000", name: "Irish Green" },
      { code: "#FFFF00", name: "Daisy" },
      { code: "#0b3b01", name: "Forest Green" },
      { code: "#36454F", name: "Charcoal" },
      { code: "#FFD700", name: "Gold" },
      { code: "#3C1414", name: "Dark Chocolate" },
      { code: "#556B2F", name: "Military Green" },
      { code: "#7FA6EE", name: "Carolina Blue" },
      { code: "#FFA500", name: "Orange" },
      { code: "#FFB6C1", name: "Light Pink" },
      { code: "#F4A460", name: "Sand" },
      { code: "#800080", name: "Purple" },
      { code: "#36454F", name: "Black Heather" },
      { code: "#1F305E", name: "Navy Heather" },
      { code: "#B22222", name: "Red Heather" },
      { code: "#006400", name: "Dark Green Heather" },
      { code: "#800020", name: "Burgundy Heather" },
      { code: "#00FFFF", name: "Aqua Sky" },
      { code: "#F0E68C", name: "Butter" },
      { code: "#9ACD32", name: "Green Ash" },
      { code: "#C8A2C8", name: "Lilac" },
      { code: "#FA8072", name: "Salmon" },
      { code: "#FFDB58", name: "Mustard" },
      { code: "#32CD32", name: "Lime" },
      { code: "#954535", name: "Chestnut" },
      { code: "#0F52BA", name: "Sapphire" },
      { code: "#FF69B4", name: "Heliconia" }
    ]
    
  },
  product2: {
    title: "New States Apparel Softstyle 3600",
    price: "Rp45.000",
    images: [
      "/img/NSA/Softstyle 3600.png",
      "img/FOTO/NSA/SOFTEE/B1.jpg",
      "img/FOTO/NSA/SOFTEE/B2.jpg",
      "img/FOTO/NSA/SOFTEE/B3.jpg",
      "img/FOTO/NSA/SOFTEE/B4.jpg"
    ],
    colors : [
      { "code": "#FFFFFF", "name": "White" },
      { "code": "#000000", "name": "Black" },
      { "code": "#A9A9A9", "name": "Sport Grey" },
      { "code": "#000080", "name": "Navy" },
      { "code": "#800000", "name": "Maroon" },
      { "code": "#FF0000", "name": "Red" },
      { "code": "#4169E1", "name": "Royal Blue" },
      { "code": "#008000", "name": "Irish Green" },
      { "code": "#FFD700", "name": "Gold" },
      { "code": "#228B22", "name": "Forest Green" },
      { "code": "#D2691E", "name": "Dark Chocolate" },
      { "code": "#FFFF00", "name": "Daisy" },
      { "code": "#FF69B4", "name": "Heliconia" },
      { "code": "#FFA500", "name": "Orange" },
      { "code": "#F4A460", "name": "Sand" },
      { "code": "#87CEEB", "name": "Carolina Blue" },
      { "code": "#00FF00", "name": "Lime" },
      { "code": "#FFB6C1", "name": "Light Pink" },
      { "code": "#0F52BA", "name": "Sapphire" },
      { "code": "#800080", "name": "Purple" },
      { "code": "#D2691E", "name": "Chestnut" },
      { "code": "#556B2F", "name": "Military Green" },
      { "code": "#36454F", "name": "Charcoal" }
    ]    
    
  },
  product3: {
    title: "NSA Premium Cotton Youth T-shirt 72Y00",
    price: "Rp40.000",
    images: [
      "/img/NSA/Premium Youth T-shirt.png",
      "img/FOTO/NSA/NSA KIDS/A1.jpg",
      "img/FOTO/NSA/NSA KIDS/A2.jpg",
      "img/FOTO/NSA/NSA KIDS/A3.jpg",
      "img/FOTO/NSA/NSA KIDS/A4.jpg"
    ],
    colors : [
      { "code": "#000000", "name": "Black" },
      { "code": "#FFFFFF", "name": "White" },
      { "code": "#A9A9A9", "name": "Sport Grey" },
      { "code": "#000080", "name": "Navy" },
      { "code": "#800000", "name": "Maroon" },
      { "code": "#FF0000", "name": "Red" },
      { "code": "#4169E1", "name": "Royal Blue" },
      { "code": "#008000", "name": "Irish Green" },
      { "code": "#FFFF00", "name": "Daisy" },
      { "code": "#228B22", "name": "Forest Green" },
      { "code": "#36454F", "name": "Charcoal" },
      { "code": "#FFD700", "name": "Gold" },
      { "code": "#3C1414", "name": "Dark Chocolate" },
      { "code": "#556B2F", "name": "Military Green" },
      { "code": "#87CEEB", "name": "Carolina Blue" },
      { "code": "#FFA500", "name": "Orange" },
      { "code": "#FFB6C1", "name": "Light Pink" },
      { "code": "#F4A460", "name": "Sand" },
      { "code": "#800080", "name": "Purple" },
      { "code": "#00FFFF", "name": "Aqua Sky" },
      { "code": "#F0E68C", "name": "Butter" },
      { "code": "#9ACD32", "name": "Green Ash" },
      { "code": "#C8A2C8", "name": "Lilac" },
      { "code": "#FA8072", "name": "Salmon" },
      { "code": "#FF69B4", "name": "Heliconia" }
    ]             
  },
  product4: {
    title: "New States Apparel Dri-Fit T-shirt 2700",
    price: "Rp42.000",
    images: [
      "/img/NSA/Dri-Fit T-shirt 2700.png",
      "img/FOTO/NSA/DRIFIT 2700/N1.jpg",
      "img/FOTO/NSA/DRIFIT 2700/N2.webp",
      "img/FOTO/NSA/DRIFIT 2700/N3.jpg",
      "img/FOTO/NSA/DRIFIT 2700/N4.jpg"
    ],
    colors : [
      { "code": "#000000", "name": "Black" },
      { "code": "#36454F", "name": "Charcoal" },
      { "code": "#FFD700", "name": "Gold" },
      { "code": "#000080", "name": "Navy" },
      { "code": "#39FF14", "name": "Neon Green" },
      { "code": "#FF0000", "name": "Red" },
      { "code": "#4169E1", "name": "Royal Blue" },
      { "code": "#FFFFFF", "name": "White" }
    ]
             
  },
  product5: {
    title: "New States Apparel Dri-Fit T-shirt 2701",
    price: "Rp47.000",
    images: [
      "/img/NSA/Dri-Fit T-shirt 2701.png",
      "img/FOTO/NSA/DRIFIT 2701/O1.jpg",
      "img/FOTO/NSA/DRIFIT 2701/O2.jpg",
      "img/FOTO/NSA/DRIFIT 2701/O3.jpg",
      "img/FOTO/NSA/DRIFIT 2701/O4.jpg"
    ],
    colors : [
      { code: "linear-gradient(to right, #FFD700, #808080)", name: "Gold /  Grey" },
      { code: "linear-gradient(to right, #FFA500, #36454F)", name: "Orange / Charcoal" },
      { code: "linear-gradient(to right, #4169E1, #36454F)", name: "Royal Blue / Charcoal" },
      { code: "linear-gradient(to right, #FFFFFF, #36454F)", name: "White /    Charcoal" }
    ]
    
         
  },
  product6: {
    title: "NSA Premium Cotton Long Sleeve",
    price: "Rp69.000",
    images: [
      "/img/NSA/Premium Cotton Long Sleeve.png",
      "img/FOTO/NSA/LONGSLEEVE PREMIUM/J1.jpg",
      "img/FOTO/NSA/LONGSLEEVE PREMIUM/J2.jpg",
      "img/FOTO/NSA/LONGSLEEVE PREMIUM/J3.jpg",
      "img/FOTO/NSA/LONGSLEEVE PREMIUM/J4.jpg"
    ],
    colors :[
      { "code": "#000000", "name": "Black" },
      { "code": "#FFFFFF", "name": "White" },
      { "code": "#C0C0C0", "name": "Sport Grey" },
      { "code": "#000080", "name": "Navy" },
      { "code": "#800000", "name": "Maroon" },
      { "code": "#228B22", "name": "Forest Green" },
      { "code": "#4169E1", "name": "Royal Blue" },
      { "code": "#FF0000", "name": "Red" },
      { "code": "#FFD700", "name": "Gold" },
      { "code": "#3C1414", "name": "Dark Chocolate" },
      { "code": "#36454F", "name": "Charcoal" },
      { "code": "#556B2F", "name": "Military Green" },
      { "code": "#7FA6EE", "name": "Carolina Blue" },
      { "code": "#FFA500", "name": "Orange" },
      { "code": "#FFB6C1", "name": "Light Pink" },
      { "code": "#008000", "name": "Irish Green" },
      { "code": "#FFFF00", "name": "Daisy" },
      { "code": "#F4A460", "name": "Sand" },
      { "code": "#800080", "name": "Purple" },
      { "code": "#C8A2C8", "name": "Lilac" },
      { "code": "#FA8072", "name": "Salmon" },
      { "code": "#00FFFF", "name": "Aqua Sky" },
      { "code": "#9ACD32", "name": "Green Ash" },
      { "code": "#F0E68C", "name": "Butter" },
      { "code": "#954535", "name": "Chestnut" },
      { "code": "#FF69B4", "name": "Heliconia" }
    ]    
  },
  product7: {
    title: "NSA Heavyweight T-shirt 5400",
    price: "Rp65.000",
    images: [
      "/img/NSA/Heavyweight T-shirt 5400.png",
      "img/FOTO/NSA/HEAVYWEIGHT/Q1.jpg",
      "img/FOTO/NSA/HEAVYWEIGHT/Q2.jpg",
      "img/FOTO/NSA/HEAVYWEIGHT/Q3.jpg"
    ],
    colors :[
      { "code": "#000000", "name": "Black" },
      { "code": "#FFFFFF", "name": "White" },
      { "code": "#C0C0C0", "name": "Sport Grey" },
      { "code": "#000080", "name": "Navy" },
      { "code": "#800000", "name": "Maroon" },
      { "code": "#FFD700", "name": "Gold" },
      { "code": "#FF0000", "name": "Red" },
      { "code": "#4169E1", "name": "Royal Blue" }
    ]     
  },
  product8: {
    title: "NSA Heavy Weight Long Sleeve",
    price: "Rp65.000",
    images: [
      "/img/NSA/Heavy Weight Long Sleeve.png",
      "/img/NSA/havyls1.jpg",
      "/img/NSA/havyls2.jpg"
    ],
    colors :[
      { "code": "#000000", "name": "Black" },
      { "code": "#FFFFFF", "name": "White" },
      { "code": "#C0C0C0", "name": "Sport Grey" },
      { "code": "#000080", "name": "Navy" },
      { "code": "#800000", "name": "Maroon" },
      { "code": "#FFD700", "name": "Gold" },
      { "code": "#FF0000", "name": "Red" },
      { "code": "#4169E1", "name": "Royal Blue" }
    ]     
  },
  product9: {
    title: "New States Apparel Ringer 7250",
    price: "Rp53.000",
    images: [
      "/img/NSA/Ringer 7250.png",
      "/img/NSA/ringer1.jpg",
      "/img/NSA/ringer2.webp"
    ],
    colors :[
      { code: "linear-gradient(to bottom, #FFFFFF, #000000)", name: "White / Black" },
      { code: "linear-gradient(to bottom, #FFFFFF, #000080)", name: "White / Navy" },
      { code: "linear-gradient(to bottom, #FFFFFF, #800000)", name: "White / Maroon" },
      { code: "linear-gradient(to bottom, #FFFFFF, #FF0000)", name: "White / Red" },
      { code: "linear-gradient(to bottom, #FFFFFF,rgb(3, 54, 3))", name: "White / Forest Green" },
      { code: "linear-gradient(to bottom, #FFFFFF, #FFD700)", name: "White / Gold" },
      { code: "linear-gradient(to bottom, #FFFFFF, #4169E1)", name: "White / Royal Blue" },
      { code: "linear-gradient(to bottom, #C0C0C0, #000000)", name: "Sport Grey / Black" },
      { code: "linear-gradient(to bottom, #C0C0C0, #000080)", name: "Sport Grey / Navy" },
      { code: "linear-gradient(to bottom, #C0C0C0, #800000)", name: "Sport Grey / Maroon" },
      { code: "linear-gradient(to bottom, #C0C0C0, #FF0000)", name: "Sport Grey / Red" }
    ]     
  },
  product10: {
    title: "New States Apparel Raglan 7260",
    price: "Rp62.000",
    images: [
      "/img/NSA/Raglan 7260.png",
      "/img/NSA/raglan1.jpg",
      "/img/NSA/raglan2.jpg"
    ],
    colors :[
      { code: "linear-gradient(to left, #FFFFFF, #000000)", name: "White / Black" },
      { code: "linear-gradient(to left, #FFFFFF, #000080)", name: "White / Navy" },
      { code: "linear-gradient(to left, #FFFFFF, #800000)", name: "White / Maroon" },
      { code: "linear-gradient(to left, #FFFFFF, #FF0000)", name: "White / Red" },
      { code: "linear-gradient(to left, #FFFFFF,rgb(9, 46, 9))", name: "White / Forest Green" },
      { code: "linear-gradient(to left, #FFFFFF, #36454F)", name: "White / Charcoal" },
      { code: "linear-gradient(to left, #FFFFFF, #4169E1)", name: "White / Royal Blue" },
      { code: "linear-gradient(to left, #C0C0C0, #000000)", name: "Sport Grey / Black" },
      { code: "linear-gradient(to left, #C0C0C0, #000080)", name: "Sport Grey / Navy" },
      { code: "linear-gradient(to left, #C0C0C0, #800000)", name: "Sport Grey / Maroon" },
      { code: "linear-gradient(to left, #C0C0C0, #FF0000)", name: "Sport Grey / Red" }
    ]
         
  },
  product11: {
    title: "New States Apparel Polo Shirt 8100",
    price: "Rp80.000",
    images: [
      "/img/NSA/Polo Shirt 8100.png",
      "/img/NSA/polo1.jpg",
      "/img/NSA/polo2.jpg"
    ],
    colors :[
      { "code": "#000000", "name": "Black" },
      { "code": "#FFFFFF", "name": "White" },
      { "code": "#C0C0C0", "name": "Sport Grey" },
      { "code": "#000080", "name": "Navy" },
      { "code": "#800000", "name": "Maroon" },
      { "code": "#4169E1", "name": "Royal Blue" },
      { "code": "#FF0000", "name": "Red" },
      { "code": "#008000", "name": "Irish Green" },
      { "code": "#FFA500", "name": "Orange" },
      { "code": "#FFFF00", "name": "Daisy" },
      { "code": "#228B22", "name": "Forest Green" },
      { "code": "#FFB6C1", "name": "Light Pink" },
      { "code": "#36454F", "name": "Charcoal" },
      { "code": "#7FA6EE", "name": "Carolina Blue" }
    ]    
  },
  product12: {
    title: "New States Apparel Crewneck Sweatshirt 9000",
    price: "Rp100.000",
    images: [
      "/img/NSA/Crewneck Sweatshirt 9000.png",
      "/img/NSA/crew1.jpg",
      "/img/NSA/crew2.jpg"
    ],
    colors :[
      { "code": "#000000", "name": "Black" },
      { "code": "#FFFFFF", "name": "White" },
      { "code": "#C0C0C0", "name": "Sport Grey" },
      { "code": "#000080", "name": "Navy" },
      { "code": "#800000", "name": "Maroon" },
      { "code": "#FF0000", "name": "Red" },
      { "code": "#228B22", "name": "Forest Green" },
      { "code": "#4169E1", "name": "Royal Blue" },
      { "code": "#36454F", "name": "Charcoal" },
      { code: "linear-gradient(to bottom,rgb(0, 0, 0),rgb(255, 255, 255))", name: "Black Camo" },
      { code: "linear-gradient(to bottom,rgb(0, 61, 25),rgb(255, 255, 255))", name: "Forest Camo" }
    ]    
  },
// akhir halaman pertama
  product13: {
    title: "New States Apparel Polo Shirt 8100",
    price: "Rp80.000",
    images: [
      "/img/NSA/Polo Shirt 8100.png",
      "/img/NSA/polo1.jpg",
      "/img/NSA/polo2.jpg"
    ],
    colors :[
      { "code": "#000000", "name": "Black" },
      { "code": "#FFFFFF", "name": "White" },
      { "code": "#C0C0C0", "name": "Sport Grey" },
      { "code": "#000080", "name": "Navy" },
      { "code": "#800000", "name": "Maroon" },
      { "code": "#4169E1", "name": "Royal Blue" },
      { "code": "#FF0000", "name": "Red" },
      { "code": "#008000", "name": "Irish Green" },
      { "code": "#FFA500", "name": "Orange" },
      { "code": "#FFFF00", "name": "Daisy" },
      { "code": "#228B22", "name": "Forest Green" },
      { "code": "#FFB6C1", "name": "Light Pink" },
      { "code": "#36454F", "name": "Charcoal" },
      { "code": "#7FA6EE", "name": "Carolina Blue" }
    ]    
  },
};

// akhir produk

// Fungsi untuk mengatur konten modal berdasarkan ID produk
function setPopupContent(productId) {
  const product = products[productId];
  if (!product) return;

  // Update judul dan harga
  document.getElementById('popupTitle').textContent = product.title;
  document.getElementById('popupPrice').textContent = product.price;

  // Update gambar di carousel
  const carouselImages = document.getElementById('carouselImages');
  carouselImages.innerHTML = product.images
    .map((imageUrl, index) => `
      <div class="carousel-item ${index === 0 ? 'active' : ''}">
        <img src="${imageUrl}" class="d-block w-100" alt="Product Image">
      </div>
    `)
    .join("");

  // Update pilihan warna
  const colorOptions = document.querySelector('.color-options');
  colorOptions.innerHTML = product.colors
    .map(color => `
      <button 
        class="btn btn-sm" 
        style="background: ${color.code}; border: 1px solid #ccc; border-radius: 50%; margin: 5px;" 
        onclick="selectColor('${color.name}')">
      </button>
    `)
    .join("");
}

// Fungsi untuk menampilkan nama warna saat dipilih
function selectColor(colorName) {
  alert(`Warna yang kamu pilih: ${colorName}`);
}

// Event listener untuk membuka modal dengan konten produk
document.querySelector('.product-page-1').addEventListener('click', () => {
  setPopupContent('product1');
});



function showPage(pageNumber) {
  // Menyembunyikan semua produk dari setiap halaman
  const allProducts = document.querySelectorAll('.product-page-1, .product-page-2, .product-page-3, .product-page-4, .product-page-5');
  allProducts.forEach((product) => {
    product.style.display = 'none';
  });

  // Menampilkan produk yang sesuai dengan nomor halaman
  if (pageNumber === 1) {
    const page1Products = document.querySelectorAll('.product-page-1');
    page1Products.forEach((product) => {
      product.style.display = 'block';
    });
  } else if (pageNumber === 2) {
    const page2Products = document.querySelectorAll('.product-page-2');
    page2Products.forEach((product) => {
      product.style.display = 'block';
    });
  } else if (pageNumber === 3) {
    const page3Products = document.querySelectorAll('.product-page-3');
    page3Products.forEach((product) => {
      product.style.display = 'block';
    });
  } else if (pageNumber === 4) {
    const page4Products = document.querySelectorAll('.product-page-4');
    page4Products.forEach((product) => {
      product.style.display = 'block';
    });
  } else if (pageNumber === 5) {
    const page5Products = document.querySelectorAll('.product-page-5');
    page5Products.forEach((product) => {
      product.style.display = 'block';
    });
  }
}

  // Scrollspy functionality

