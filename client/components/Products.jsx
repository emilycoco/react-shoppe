import React, { Component, PropTypes } from 'react';
import Product from './Product.jsx';
import { fetchProducts } from '../api.js';

const propTypes = {
  favs: PropTypes.array,
  cart: PropTypes.array,
  products: PropTypes.array,
  user: PropTypes.object,
  updateCart: PropTypes.func,
  updateFavs: PropTypes.func
};

const products = [
  {
    "name": "Apples",
    "price": 0.5,
    "description": "The apple tree is a deciduous tree in the rose family best known for its sweet, pomaceous fruit, the apple. Don't accept from snakes.",
    "image": "apple.png",
    "nutrition": [
      "Vitamin C",
      "Fiber"
    ],
    "id": "1"
  },
  {
    "name": "Grapes",
    "price": 0.57,
    "description": "A grape is a fruiting berry of the deciduous woody vines of the botanical genus Vitis. Grapes can be eaten fresh as table grapes or they can be...",
    "image": "grape.png",
    "nutrition": [
      "Vitamin C",
      "Potassium",
      "Magnesium"
    ],
    "id": "10"
  },
  {
    "name": "Honeydew",
    "price": 2.4,
    "description": "a cultivar group of the muskmelon, Cucumis melo Inodorus group, which includes crenshaw, casaba, Persian, winter, and other mixed melons.",
    "image": "honeydew.png",
    "nutrition": [
      "Vitamin C",
      "Potassium",
      "Sodium"
    ],
    "id": "11"
  },
  {
    "name": "Kiwi",
    "price": 3.53,
    "description": "Kiwifruit or Chinese gooseberry is the name given to the edible berries of several species of woody vines in the genus Actinidia.",
    "image": "kiwi.png",
    "nutrition": [
      "Vitamin C",
      "Potassium",
      "Fiber"
    ],
    "id": "12"
  },
  {
    "name": "Mango",
    "price": 10,
    "description": "The mango is a juicy stone fruit belonging to the genus Mangifera, consisting of numerous tropical fruiting trees, cultivated mostly for edible fruit.",
    "image": "mango.png",
    "nutrition": [
      "Vitamin C",
      "Vitamin A",
      "Fiber",
      "Vitamin B-6"
    ],
    "id": "13"
  },
  {
    "name": "Mushrooms",
    "price": 5.58,
    "description": "A mushroom is the fleshy, spore-bearing fruiting body of a fungus, typically produced above ground on soil or on its food source.",
    "image": "mushroom.png",
    "nutrition": [],
    "id": "14"
  },
  {
    "name": "Nectarines",
    "price": 1.83,
    "description": "A deciduous tree native to the region of Northwest China between the Tarim Basin and the north slopes of the Kunlun Shan mountains, where...",
    "image": "nectarine.png",
    "nutrition": [
      "Vitamin C",
      "Vitamin A",
      "Fiber",
      "Potassium"
    ],
    "id": "15"
  },
  {
    "name": "Oranges",
    "price": 0.5,
    "description": "The orange is the fruit of the citrus species Citrus × sinensis in the family Rutaceae. The fruit of the Citrus × sinensis is considered a sweet...",
    "image": "orange.png",
    "nutrition": [
      "Vitamin C",
      "Calcium",
      "Potassium"
    ],
    "id": "16"
  },
  {
    "name": "Pears",
    "price": 1.3,
    "description": "Pears are broadly classified based up on their place of origin as Asian-pears and European-pears. Asian varieties feature crispy texture and firm...",
    "image": "pear.png",
    "nutrition": [
      "Vitamin C",
      "Fiber",
      "Potassium"
    ],
    "id": "17"
  },
  {
    "name": "Pineapple",
    "price": 0.2,
    "description": "A tropical plant with edible multiple fruit consisting of coalesced berries, also called pineapples, and the most economically significant plant...",
    "image": "pineapple.png",
    "nutrition": [
      "Vitamin C",
      "Fiber",
      "Potassium",
      "Calcium",
      "Vitamin A",
      "Iron",
      "Vitamin B-6",
      "Magnesium"
    ],
    "id": "18"
  },
  {
    "name": "Apricots",
    "price": 1.5,
    "description": "An apricot is a fruit or the tree that bears the fruit of several species in the genus Prunus. Grind the pits for a facial exfoliant.",
    "image": "apricot.png",
    "nutrition": [
      "Vitamin A",
      "Vitamin C"
    ],
    "id": "2"
  },
  {
    "name": "Bananas",
    "price": 2.5,
    "description": "The banana is an edible fruit, botanically a berry, produced by several kinds of large herbaceous flowering plants in the genus Musa.",
    "image": "banana.png",
    "nutrition": [
      "Potassium",
      "Vitamin C",
      "Vitamin B-6"
    ],
    "id": "3"
  },
  {
    "name": "Broccoli",
    "price": 1.75,
    "description": "Broccoli is an edible green plant in the cabbage family whose large flowering head is eaten as a vegetable. Try with cheese.",
    "image": "broccoli.png",
    "nutrition": [
      "Potassium",
      "Vitamin C",
      "Fiber"
    ],
    "id": "4"
  },
  {
    "name": "Carrots",
    "price": 0.15,
    "description": "The carrot is a root vegetable, usually orange in colour, though purple, black, red, white, and yellow varieties exist. Carrots are a domesticated form...",
    "image": "carrot.png",
    "nutrition": [
      "Vitamin A",
      "Vitamin C"
    ],
    "id": "5"
  },
  {
    "name": "Cherries",
    "price": 2.05,
    "description": "A cherry is the fruit of many plants of the genus Prunus, and is a fleshy drupe. Try eating the seeds, they're delicious.",
    "image": "cherry.png",
    "nutrition": [
      "Vitamin A",
      "Vitamin C",
      "Potassium"
    ],
    "id": "6"
  },
  {
    "name": "Dill",
    "price": 0.99,
    "description": "Dill is an annual herb in the celery family Apiaceae. A great addition to soups. Not to be confused with pickles.",
    "image": "dill.png",
    "nutrition": [
      "Calcium",
      "Magnesium"
    ],
    "id": "7"
  },
  {
    "name": "Eggplant",
    "price": 3.5,
    "description": "Eggplant or aubergine is a species of nightshade grown for its edible fruit. Eggplant is the common name in North American and Australian English but..",
    "image": "eggplant.png",
    "nutrition": [
      "Fiber"
    ],
    "id": "8"
  },
  {
    "name": "Garlic",
    "price": 1.52,
    "description": "Allium sativum, commonly known as garlic, is a species in the onion genus, Allium. Its close relatives include the onion, shallot, leek, chive, and...",
    "image": "garlic.png",
    "nutrition": [
      "Potassium"
    ],
    "id": "9"
  }
];
export default class Products extends Component {
  componentDidMount() {
    fetchProducts().then(products => console.log(products));
  }
  renderProducts(products) {
    if (!Array.isArray(products)) {
      return null;
    }
    return products.map(item => (
        <Product
            key={item.id}
            {...item}
        />
    ))
  }
  render() {
    const products = {
    } = this.props;
    return (
      <div className='products'>
        <div className="products-search">
          <input className="products-search_input" />
        </div>
        <div className="products-lists">
          {this.renderProducts(products)}
        </div>
      </div>
    );
  }
}

Products.displayName = 'Products';
Products.propTypes = propTypes;
