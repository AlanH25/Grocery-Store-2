	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Broccoli",
		vegetarian: true,
		glutenFree: true,
		price: 1.99,
		organic: true,
		category: "Fruit",
		img: "images/broccoli.png"
		
	},
	{
		name: "Bread",
		vegetarian: true,
		glutenFree: false,
		price: 2.35,
		organic: true,
		category: "Grains",
		img: "images/bread.png"
	},
	{
		name: "Salmon",
		vegetarian: false,
		glutenFree: true,
		price: 10.00,
		organic: true,
		category: "Meat",
		img: "images/salmon.png"
	},
	{
		name: "Chicken Tenders",
		vegetarian: false,
		glutenFree: false,
		price: 8.69,
		organic: false,
		category: "Meat",
		img: "images/chicky-tendies.png"

	},
	/*
	{
		name: "Milk",
		vegetarian: true,
		glutenFree: true,
		price: 3.50,
		organic: true,
		category: "Dairy",
		img: "images/milk.png"

	},
	*/
	{
		name: "Cheese",
		vegetarian: true,
		glutenFree: true,
		price: 3.50,
		organic: true,
		category: "Dairy",
		img: "images/cheese.png"

	},
	
	{
		name: "Rease's Puffs",
		vegetarian: true,
		glutenFree: true,
		price: 3.99,
		organic: false,
		category: "Grains",
		img: "images/reeses-puffs.png"

	},
	{
		name: "Bananas",
		vegetarian: true,
		glutenFree: true,
		price: 2.99,
		organic: true,
		category: "Fruit",
		img: "images/bananas.png"
	},
	{
		name: "Bigger Bananas",
		vegetarian: true,
		glutenFree: true,
		price: 5.99,
		organic: true,
		category: "Fruit",
		img: "images/bigger-bananas.png"

	},
	{
		name: "Biggest Bananas",
		vegetarian: true,
		glutenFree: true,
		price: 10.99,
		organic: true,
		category: "Fruit",
		img: "images/biggest-bananas.png"
	},
	{
		name: "Lettuce",
		vegetarian: true,
		glutenFree: true,
		price: 3.00,
		organic: true,
		category: "Fruit",
		img: "images/lettuce.png"
	},
	{
		name: "Ground Beef",
		vegetarian: false,
		glutenFree: true,
		price: 9.99,
		organic: false,
		category: "Meat",
		img: "images/beef.png"
	},
	{
		name: "Spaghetti",
		vegetarian: true,
		glutenFree: false,
		price: 4.20,
		organic: false,
		category: "Grain",
		img: "images/spaghetti.png"
	},
	{
		name: "Kool-Aid",
		vegetarian: true,
		glutenFree: true,
		price: 4.80,
		organic: false,
		category: "Drinks",
		img: "images/kool-aid.png"
	},
	{
		name: "Szechuan Sauce",
		vegetarian: true,
		glutenFree: true,
		price: 5.49,
		organic: false,
		category: "Product",
		img: "images/sauce.png"
	},
	
	{
		name: "Vegetable Oil",
		vegetarian: true,
		glutenFree: true,
		price: 6.29,
		organic: false,
		category: "Product",
		img: "images/oil.png"
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, veg, organic, gluten) {
		
	let product_names = [];
	var display;
	
	var categories = document.getElementsByName('category');	
	var sel = "";
	for(var i = 0; i < categories.length; i++){
		if(categories[i].checked){
			sel = categories[i].value;
		}
	}
		
	for (let i=0; i<prods.length; i+=1) {
		display = true;
		if ( (veg && (prods[i].vegetarian == false)) ){
			display = false;
		}
		if ( (organic && (prods[i].organic == false)) ){
			display = false;
		}
		if ( (gluten && (prods[i].glutenFree == false)) ){
			display = false;
		}
		
		
		
		if(sel != ""){
			if(sel != prods[i].category){
				display = false;
			}
		}
		
		
		
		
		if (display){
			product_names.push(prods[i]);
		}
	}
	
	for(let i = 0; i < product_names.length; i ++){
		  for (let j = 0; j < product_names.length - 1; j ++){
			  if(product_names[j].price > product_names[j+1].price){
				  var temp = product_names[j];
				  product_names[j] = product_names[j+1];
				  product_names[j+1] = temp;
			  }
		  }
	  }
	
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
