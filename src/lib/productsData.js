const products = [
  {
    id: 1,
    images: [
      "https://asset.msi.com/resize/image/global/product/product_16449046323c08d90f0ec5dd3f45691edd38de41c5.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
      "https://asset.msi.com/resize/image/global/product/product_16449046343491474430363ce5226d934fe7214ea9.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
      "https://asset.msi.com/resize/image/global/product/product_1689904981bd058974156cc69d6f1fa2d6c0789f7c.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
    ],
    name: "Laptop MSI GF63",
    desc: "Laptop MSI GF63 Thin 11SC - Core I5 11400H - Nvidia geforce GTX 1650 4GB - 8GB DDR4 3200MHz - 512GB SSD NVMe - 15.6 FHD 144HZ",
    type: "Laptop",
    price: "38,924 EGP",
  },
  {
    id: 2,
    images: [
      "https://egyptlaptop.com/images/watermarked/1/thumbnails/714/584/detailed/58/%E2%80%8BLenovo_ThinkPad_E14_Gen_5.webp",
      "https://egyptlaptop.com/images/watermarked/1/thumbnails/714/584/detailed/58/%E2%80%8BLenovo_ThinkPad_E14.webp",
      "https://egyptlaptop.com/images/watermarked/1/thumbnails/714/584/detailed/58/%E2%80%8BLenovo_ThinkPad_E14_Gen_5_laptop.webp",
    ],
    name: "Lenovo ThinkPad E14",
    desc: "Lenovo ThinkPad E14 Gen 5 Intel Core I7-1355U 512GB SSD 8GB Ram Nvidia GeForce MX550 2GB 14- Inch WUXGA",
    price: "44,999 EGP",
  },
  {
    id: 3,
    images: [
      "https://egyptlaptop.com/images/watermarked/1/thumbnails/612/500/detailed/58/ASUS_FA507NU-LP125W_-removebg-preview.webp",
      "https://egyptlaptop.com/images/watermarked/1/thumbnails/612/500/detailed/58/ASUS_FA507NU-LP125W_Back_-removebg-preview.webp",
      "https://egyptlaptop.com/images/watermarked/1/thumbnails/612/500/detailed/58/ASUS_FA507NU-LP125W_lift_Side_-removebg-preview.webp",
    ],
    name: "Asus Tough Gaming A15",
    desc: "Asus Tough Gaming A15 FA507NU-LP125W AMD Ryzen 5 - 7535HSD 512GB SSD - 8GB RAM - AMD Radeon Graphics RTX 4050 6GB - 15.6 inch FHD Windows ",
    price: "49,749 EGP",
  },
  {
    id: 4,
    images: [
      "https://egyptlaptop.com/images/watermarked/1/thumbnails/4280/3502/detailed/51/Dell_G15_5530_9st3-0j.webp",
      "https://egyptlaptop.com/images/watermarked/1/thumbnails/4141/3389/detailed/51/Dell_G15_5530_egypt_laptop_4qyu-ng.webp",
      "https://egyptlaptop.com/images/watermarked/1/thumbnails/4592/3758/detailed/51/Dell_G15_5530_egyptlaptop_m0su-96.webp",
    ],
    name: "Dell G15 5530",
    desc: "Dell G15 5530 Intel Core I7-13650HX HDD 512 GB SSD 16 GB RAM Nvidia GeForce RTX 3050 15.6 inch Windows 11",
    price: "51,999 EGP",
  },
  {
    id: 5,
    images: [
      "https://egyptlaptop.com/images/watermarked/1/thumbnails/1320/1080/detailed/53/bundel_3lnf-vm.webp",
      "",
    ],
    name: "PC : Intel Core I3-10105F​ - Asus Prime H510M-K- Team Group Elite Plus 8GB DDR4 3200 - HP S600 240GB SSD - ASUS Phoenix Radeon RX 6400 4GB GDDR6 - DeepCool MATREXX 40 3FS Essential Micro-ATX Case - ​DeepCool PF500 80 PLUS Power Supply",
    desc: "Intel Core I3-10105F​ - Asus Prime H510M-K- Team Group Elite Plus 8GB DDR4 3200 - HP S600 240GB SSD - ASUS Phoenix Radeon RX 6400 4GB GDDR6 - DeepCool MATREXX 40 3FS Essential Micro-ATX Case - ​DeepCool PF500 80 PLUS Power Supply",
    price: "37,450 EGP",
  },
  {
    id: 6,
    images: [
      "https://egyptlaptop.com/images/watermarked/1/thumbnails/550/450/detailed/52/bundel_7v9o-5g.webp.png",
    ],
    name: "PC : Intel Core I3-10105F - Asus Prime H510M-K - Team Group Elite Plus 8GB DDR4 3200 - HP EX900 Plus 256GB M.2 SSD - Palit GeForce GTX1050Ti 4GB StormX - DeepCool MATREXX 40 3FS Case - DeepCool PF500 80 PLUS Power Supply",
    desc: "Intel Core I3-10105F - Asus Prime H510M-K - Team Group Elite Plus 8GB DDR4 3200 - HP EX900 Plus 256GB M.2 SSD - Palit GeForce GTX1050Ti 4GB StormX - DeepCool MATREXX 40 3FS Case - DeepCool PF500 80 PLUS Power Supply",
    price: "23,000 EGP",
  },
  {
    id: 7,
    images: [
      "https://egyptlaptop.com/images/watermarked/1/thumb…s/550/450/detailed/53/bundel_egyptlaptop.webp.pnghttps://egyptlaptop.com/images/watermarked/1/thumbnails/550/450/detailed/53/bundel_egyptlaptop.webp.png",
    ],
    name: "PC : Intel Core I5-11400F​ - ​Asus Prime H510M-E- HP EX900 Plus 256GB NVMe SSD - Team Group T.Froce delta rgb ddr4 8gb 3200mhz cl16 white - Msi GeForce RTX 3060 Ventus 2X 12G OC - DeepCool MATREXX 40 3FS Case - Deepcool PF650 80 PLUS Power Supply",
    desc: "Intel Core I5-11400F​ - ​Asus Prime H510M-E- HP EX900 Plus 256GB NVMe SSD - Team Group T.Froce delta rgb ddr4 8gb 3200mhz cl16 white - Msi GeForce RTX 3060 Ventus 2X 12G OC - DeepCool MATREXX 40 3FS Case - Deepcool PF650 80 PLUS Power Supply",
    price: "35,000 EGP",
  },
  {
    id: 8,
    images: [
      "https://egyptlaptop.com/images/watermarked/1/thumbnails/550/450/detailed/51/Bundle_egyptlaptop.webp.png",
    ],
    name: "PC :Intel Core I5-12400F Desktop Processor - Asus Prime H610M-K-D4 Motherboard - Lexar NM620 256GB M.2 SSD - Crucial 8GB DDR4-3200 UDIMM 1.2V CL22 - ​​ASUS Dual Radeon™ RX 6400 4GB GDDR6 - Antec AX61 4Fan Gaming Case + 650 PSU",
    desc: "Intel Core I5-12400F Desktop Processor - Asus Prime H610M-K-D4 Motherboard - Lexar NM620 256GB M.2 SSD - Crucial 8GB DDR4-3200 UDIMM 1.2V CL22 - ​​ASUS Dual Radeon™ RX 6400 4GB GDDR6 - Antec AX61 4Fan Gaming Case + 650 PSU",
    price: "45,799 EGP",
  },
  {
    id: 9,
    images: [
      "https://egyptlaptop.com/images/watermarked/1/thumbnails/550/450/detailed/35/613CLfKxpnL._AC_SL1500__5k40-7i.jpg.png",
      "https://egyptlaptop.com/images/watermarked/1/thumbnails/550/450/detailed/35/61n4PhtiJ_L._AC_SL1500__55jd-ah.jpg.png",
      "https://egyptlaptop.com/images/watermarked/1/thumbnails/550/450/detailed/35/71ZBFAKdvzS._AC_SL1500__dm98-n6.jpg.png",
    ],
    name: "Intel Core I5-11400F Desktop Processor",
    desc: "Intel Core I5-11400F Desktop Processor",
    price: "5,900 EGP",
  },
  {
    id: 10,
    images: [
      "https://egyptlaptop.com/images/watermarked/1/thumbnails/550/450/detailed/52/Intel_Core_i7-13700KF.webp.png",
    ],
    name: "Intel Core I7-13700k Desktop Processor",
    desc: "Intel Core I7-13700k Desktop Processor",
    price: "27,699 EGP",
  },
  {
    id: 11,
    images: [
      "https://egyptlaptop.com/images/watermarked/1/thumbnails/550/450/detailed/45/AMD_Ryzen_7-5700X_Egyptlaptop.webp.png",
      "https://egyptlaptop.com/images/watermarked/1/thumbnails/550/450/detailed/45/AMD_Ryzen_7-5700X.webp.png",
    ],
    name: "AMD Ryzen 7-5700X Desktop Processor (Only Build)",
    desc: "AMD Ryzen 7-5700X Desktop Processor (Only Build)",
    price: "9,150 EGP",
  },
  {
    id: 12,
    images: [
      "https://egyptlaptop.com/images/watermarked/1/thumbnails/550/450/detailed/35/61RnzuOIOoL._AC_SL1002_.jpg.png",
    ],
    name: "Intel Core I9-12900K Desktop Processor",
    desc: "Intel Core I9-12900K Desktop Processor",
    price: "13,950 EGP",
  },
  {
    id: 13,
    images: [
      "https://egyptlaptop.com/images/watermarked/1/thumbnails/550/450/detailed/40/TP-Link_Archer_MR200_AC750__egyptlaptop.jpg.png",
      "https://egyptlaptop.com/images/watermarked/1/thumbnails/550/450/detailed/40/TP-Link_Archer_MR200_AC750__view_egyptlaptop.jpg.png",
      "https://egyptlaptop.com/images/watermarked/1/thumbnails/550/450/detailed/40/TP-Link_Archer_MR200_AC750__ports_egyptlaptop.jpg.png",
    ],
    name: "TP-Link Archer MR200 AC750 Wireless Dual Band 4G LTE Router",
    desc: "TP-Link Archer MR200 AC750 Wireless Dual Band 4G LTE Router",
    price: "4,100 EGP",
  },
  {
    id: 14,
    images: [
      "https://egyptlaptop.com/images/watermarked/1/thumbnails/550/450/detailed/57/D-Link_DIR-X1860.webp.png",
      "https://egyptlaptop.com/images/watermarked/1/thumbnails/550/450/detailed/57/d-link_DIR-X1860_left_egypt_laptop.webp.png",
      "https://egyptlaptop.com/images/watermarked/1/thumbnails/550/450/detailed/57/d-link_DIR-X1860_back_egypt_laptop.webp.png",
    ],
    name: "D-Link DIR-X1860 EXO AX AX1800 Wi-Fi 6 Router",
    desc: "D-Link DIR-X1860 EXO AX AX1800 Wi-Fi 6 Router",
    price: "2,365 EGP",
  },
  {
    id: 15,
    images: [
      "https://egyptlaptop.com/images/watermarked/1/thumbnails/550/450/detailed/40/d-link_DSL-124_front_egypt_laptop.jpg.png",
      "https://egyptlaptop.com/images/watermarked/1/thumbnails/550/450/detailed/40/d-link_DSL-124_box_egypt_laptop.jpg.png",
    ],
    name: "D-Link DSL-124 4 Port Wireless N 300 ADSL2+ Router",
    desc: "D-Link DSL-124 4 Port Wireless N 300 ADSL2+ Router",
    price: "352 EGP",
  },
  {
    id: 16,
    images: [
      "https://egyptlaptop.com/images/watermarked/1/thumbnails/550/450/detailed/40/D-Link_DSL-2750U__View_side_Egyptlaptop..jpg.png",
      "https://egyptlaptop.com/images/watermarked/1/thumbnails/550/450/detailed/40/D-Link_DSL-2750U__design_Egyptlaptop..jpg.png",
      "https://egyptlaptop.com/images/watermarked/1/thumbnails/550/450/detailed/40/D-Link_DSL-2750U__back_side_Egyptlaptop..jpg.png",
    ],
    name: "D-Link DSL-2750U Wireless N 300 ADSL2 Modem Router",
    desc: "D-Link DSL-2750U Wireless N 300 ADSL2 Modem Router",
    price: "500 EGP",
  },
  //   {
  //     id: 17,
  //     images: [],
  //     name: "",
  //     desc: "",
  //     price: "",
  //   },
  //   {
  //     id: 18,
  //     images: [],
  //     name: "",
  //     desc: "",
  //     price: "",
  //   },
  //   {
  //     id: 19,
  //     images: [],
  //     name: "",
  //     desc: "",
  //     price: "",
  //   },
  //   {
  //     id: 20,
  //     images: [],
  //     name: "",
  //     desc: "",
  //     price: "",
  //   },
  //   {
  //     id: 21,
  //     images: [],
  //     name: "",
  //     desc: "",
  //     price: "",
  //   },
  //   {
  //     id: 22,
  //     images: [],
  //     name: "",
  //     desc: "",
  //     price: "",
  //   },
  //   {
  //     id: 23,
  //     images: [],
  //     name: "",
  //     desc: "",
  //     price: "",
  //   },
  //   {
  //     id: 24,
  //     images: [],
  //     name: "",
  //     desc: "",
  //     price: "",
  //   },
  //   {
  //     id: 25,
  //     images: [],
  //     name: "",
  //     desc: "",
  //     price: "",
  //   },
  //   {
  //     id: 26,
  //     images: [],
  //     name: "",
  //     desc: "",
  //     price: "",
  //   },
  //   {
  //     id: 27,
  //     images: [],
  //     name: "",
  //     desc: "",
  //     price: "",
  //   },
  //   {
  //     id: 28,
  //     images: [],
  //     name: "",
  //     desc: "",
  //     price: "",
  //   },
  //   {
  //     id: 29,
  //     images: [],
  //     name: "",
  //     desc: "",
  //     price: "",
  //   },
  //   {
  //     id: 30,
  //     images: [],
  //     name: "",
  //     desc: "",
  //     price: "",
  //   },
  //   {
  //     id: 31,
  //     images: [],
  //     name: "",
  //     desc: "",
  //     price: "",
  //   },
  //   {
  //     id: 32,
  //     images: [],
  //     name: "",
  //     desc: "",
  //     price: "",
  //   },
  //   {
  //     id: 33,
  //     images: [],
  //     name: "",
  //     desc: "",
  //     price: "",
  //   },
];
export default products;
