import {of} from "rxjs";

 let products : Array<Product> = [{
  id: "1",
  name: "Orange",
  stock : 69,
  price : 6 ,
  pic: "../assets/images/fruit/p1.png",
  producteur : { name : "Gervais"},
  category : "fruit"
},
  {id: "2",
    name: "Banane",
    stock : 40,
    price : 3 ,
    pic: "../assets/images/fruit/p5.png",
    producteur : { name : "Gervais"},
    category : "fruit"
  },  {id: "3",
    name: "Pomme",
    stock : 10,
    price : 4 ,
    pic: "../assets/images/fruit/p6.png",
     producteur : { name : "Gervais"},
    category : "fruit"
  },  {id: "4",
    name: "Mangue",
    stock : 6,
    price : 9 ,
    pic: "../assets/images/fruit/p4.png",
     producteur : { name : "Morin"},
    category : "fruit"
  },  {id: "5",
    name: "kiwi",
    stock : 4,
    price : 3 ,
    pic: "../assets/images/fruit/p3.png",
     producteur : { name : "Morin"},
    category : "fruit"
  },
   {id: "6",
    name: "Durian",
    stock : 4,
    price : 3 ,
    pic: "../assets/images/fruit/p2.png",
     producteur : { name : "Gervais"},
    category : "fruit"
  },
   {id: "7",
  name: "Poulet",
  stock : 69,
  price : 20 ,
  pic: "../assets/images/meat/poulet.png",
     producteur : { name : "Jacques"},
  category : "meat"
},
{id: "8",
  name: "Boeuf",
  stock : 40,
  price : 3 ,
  pic: "../assets/images/meat/boeuf.png",
  producteur : { name : "Jacques"},
  category : "meat"
},  {id: "9",
  name: "Porc",
  stock : 10,
  price : 4 ,
  pic: "../assets/images/meat/porc.png",
     producteur : { name : "Laurent"},
  category : "meat"
}, {id: "10",
  name: "Dorade",
  stock : 10,
  price : 9 ,
  pic: "../assets/images/fish/dorade.png",
     producteur : { name : "Laurent"},
  category : "fish"
},
   {id: "11",
     name: "Saumon",
     stock : 10,
     price : 4 ,
     pic: "../assets/images/fish/saumon.png",
     producteur : { name : "Gervais"},
     category : "fish"
   },
   {id: "12",
     name: "Thon",
     stock : 10,
     price : 4 ,
     pic: "../assets/images/fish/thon.png",
     producteur : { name : "Laurent"},
     category : "fish"
   },
]




export function getProduct(){
  return of(products)
}

  interface Product {
    id: string
    name: string
    category: string
    stock :number
    price : number
    pic: string
    producteur : {name : string}
  }
