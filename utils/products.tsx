//I am changing the image links from firebase to amazon, firebase has issues with these direct links. Please remember to add the amazon link(that will show up at the error) instead of firebase at the cofig for it to work out.

export const products = [
   {
     id: "64a654593e91b8e73a351e9b",
     name: "iphone 14",
     description: "Discover the new iPhone 14, designed to elevate your mobile experience. Featuring a 6.1-inch Super Retina XDR display, the powerful A16 Bionic chip, and an advanced 12MP dual-camera system, every detail comes to life. Enjoy 5G connectivity, enhanced durability with Ceramic Shield, and water and dust resistance (IP68). All powered by the intuitive iOS 16.",
     price: 2999,
     brand: "apple",
     category: "Phone",
     inStock: true,
     images: [
       {
         color: "White",
         colorCode: "#FFFFFF",
         image:
           "https://m.media-amazon.com/images/I/71p-tHQ0u1L._AC_SX679_.jpg",
       },
       {
         color: "Gray",
         colorCode: "#808080",
         image:
           "https://m.media-amazon.com/images/I/417tEj3iJ8L._AC_.jpg",
       },
     ],
     reviews: [
      {
        id: "6499b4887402b0efd394d8f3",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "648437b38c44d52b9542e340",
        rating: 4,
        comment:
          "good enough. I like the camera and casing. the delivery was fast too.",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "6499b184b0e9a8c8709821d3",
          name: "Chaoo",
          email: "example1@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "USER",
        },
      },
      {
        id: "6499a110efe4e4de451c7edc",
        userId: "6475af156bad4917456e6e1e",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment: "I really liked it!!",
        createdDate: "2023-06-26T14:30:40.998Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Charles",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
     ],
   },
   {
    id: "648437b38c44d52b9542e340",
    name: "Microsoft Xbox Series S 1TB SSD Console Carbon Black - Includes Xbox Wireless Controller - Up to 120 frames per second - 10GB RAM 1TB SSD - Experience high dynamic range - Xbox Velocity Architecture",
    description:
      'The Microsoft Xbox Series S 1TB SSD Console in Carbon Black is a powerhouse of gaming technology. With its sleek design and included Xbox Wireless Controller, it offers a seamless gaming experience. Featuring up to 120 frames per second, 10GB RAM, and a 1TB SSD, it ensures lightning-fast load times and smooth gameplay. Experience stunning visuals with high dynamic range (HDR), and enjoy enhanced performance thanks to Xbox Velocity Architecture. Whether you are a casual gamer or a competitive player, the Xbox Series S delivers immersive gaming like never before.',
    price: 315,
    brand: "Microsoft",
    category: "Consoles",
    inStock: true,
    images: [
      {
        color: "Black",
        colorCode: "#000000",
        image:
          "https://m.media-amazon.com/images/I/61hwaBMvOxL._SX522_.jpg",
      },
     
    ],
    reviews: [],
  },
   {
    id: "64a4ebe300900d44bb50628b",
    name: "Dell XPS 13 9315 - Laptop empresarial delgada y ligera (13.4 pulgadas FHD+, Intel 10-Core i7-1250U, 32 GB LPDDR5 RAM, 1 TB SSD)",

    description: "Experience the ultimate productivity with the Dell XPS 13. Featuring a 13.4 inch FHD+ touch display, the latest Intel Core i7-1165G7 processor, 16GB RAM, and 512GB SSD, this laptop is designed for high performance. The Intel Iris Xe graphics deliver stunning visuals, while the sleek, lightweight design ensures portability and style. Perfect for professionals and students alike, the Dell XPS 13 comes with Windows 11 Home pre-installed.",
    price: 1299.99,
    brand: "Dell",
    category: "Laptops",
    inStock: true,
    images: [
      {
        color: "Silver",
        colorCode: "#C0C0C0",
        image: "https://m.media-amazon.com/images/I/81sihyH9nqL._AC_SX679_.jpg",
        image2: "https://m.media-amazon.com/images/I/81sihyH9nqL._AC_SX679_.jpg",
        
      },
      
    ],
     reviews: [
       {
         id: "64a65a6158b470c6e06959ee",
         userId: "6475af156bad4917456e6e1e",
         productId: "64a4ebe300900d44bb50628a",
         rating: 5,
         comment: "good",
         createdDate: "2023-07-06T06:08:33.067Z",
         user: {
           id: "6475af156bad4917456e6e1e",
           name: "Charles",
           email: "example@gmail.com",
           emailVerified: null,
           image:
             "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
           hashedPassword: null,
           createdAt: "2023-05-30T08:08:53.979Z",
           updatedAt: "2023-05-30T08:08:53.979Z",
           role: "ADMIN",
         },
       },
     ],
   },
   {
     id: "64a4e9e77e7299078334019f",
     name: "Logitech MX Keys S + MX Master 3S - Performance Wireless Illuminated Keyboard and Mouse, Smooth Typing, Fast Scrolling, Bluetooth, USB-C",
     description:
       "The Logitech MX Keys S + MX Master 3S combo offers a high-performance wireless keyboard and mouse with backlighting. The keyboard provides a smooth and comfortable typing experience, while the mouse features fast and precise scrolling. Both devices support Bluetooth and USB-C connectivity and are compatible with Windows, Linux, Chrome OS, and macOS.",
     price: 70,
     brand: "logitech",
     category: "Accesories",
     inStock: true,
     images: [
       {
         color: "Graphite",
         colorCode: " #383838",
         image:
           "https://m.media-amazon.com/images/I/61Z75u-IJUL._AC_SX466_.jpg",
       },
       {
        color: "pale gray",
        colorCode: " #fefefe",
        image:
          "https://m.media-amazon.com/images/I/717r5mrN0oL._AC_SX466_.jpg",
      },
      {
        color: "pink",
        colorCode: " #FFC0CB",
        image:
          "https://m.media-amazon.com/images/I/71LEUu+OKUL._AC_SX466_.jpg",
      },

     
     ],
     reviews: [],
   },
   {
     id: "649d775128b6744f0f497040",
     name: 'JBL Tune 520BT Wireless On-Ear Headphones, Up to 57 Hours Battery Life and Speed ​​Charging, Lightweight, Comfortable and Foldable Design',
     description:
       'The JBL Tune 520BT Wireless On-Ear Headphones offer an exceptional audio experience with up to 57 hours of battery life and speed charging capabilities. These lightweight and comfortable headphones feature a foldable design, making them perfect for on-the-go use. Enjoy high-quality sound and extended listening sessions without the hassle of frequent recharging.',
     price: 50,
     brand: "JBL",
     category: "Accesories",
     inStock: true,
     images: [
       {
         color: "Purple",
         colorCode: "#ce93d8",
         image:
           "https://m.media-amazon.com/images/I/61mz7WxnjdL._AC_SX466_.jpg",
       },
       {
         color: "black",
         colorCode: "#000000",
         image:
           "https://m.media-amazon.com/images/I/61hOoghkbRL._AC_SX466_.jpg",
       },
       {
        color: "blue",
        colorCode: "#00527c",
        image:
          "https://m.media-amazon.com/images/I/61UBYKeK1nL._AC_SX466_.jpg",
      },
     ],
     reviews: [],
   },
   {
    id: "649d775128b6744f0f497041",
    name: "BenQ Mobiuz EX3210R - 32 Inch 2K VA 165Hz Curved Gaming Computer Monitor with Free Steam Code, Dying Light 2 Night Runner's Edition, 1000R Curve",
    description: "The BenQ Mobiuz EX3210R is a cutting-edge 32-inch 2K VA gaming monitor designed to elevate your gaming experience. With a high refresh rate of 165Hz and a 1000R curvature, it delivers immersive visuals and smooth gameplay. Plus, it comes with a free Steam code for Dying Light 2 Night Runner's Edition, allowing you to dive into an exciting gaming adventure right away. Enjoy stunning graphics, fluid motion, and a heightened sense of immersion with this premium gaming monitor from BenQ.",
    price: 499,
    brand: "BenQ",
    category: "Monitor",
    inStock: true,
    images: [
      {
        color: "Black",
        colorCode: "#000000",
        image: 'https://m.media-amazon.com/images/I/71JO5HhHPkL._AC_SX466_.jpg'
      },
    ],
    "reviews": []
  }
  
  
 ];