//Creating a customer survey 


//Object with key pairs

const customer = {
    firstName: "jake",
    lastName: "smith",
    email: "jaekSmih!aol.com",
    phone: undefined,
    zipCode: "631",
    favoriteFlavors: 32,
    cupSize: "medium",
    favoriteStore: "Target",
    firstVisit: false
}







//Object updates

customer ["email"] = "Jak3Smith1992@email.com"
customer ["phone"] = 3195551234
customer ["zipCode"] = "63132"
customer ["favoriteFlavors"] = ["coffee", "strawberry", "matcha"]








//Object deletions

delete customer ["zipCode"]
delete customer ["favoriteStore"]







//Object additions

customer.toppings = ["chocolate sprinkles", "wafer straws", "gummy bears"]
customer.futureFlavors = "mango"
customer.todaysPurchaseCost = "5.32"







//Key printing
console.log(Object.keys(customer));