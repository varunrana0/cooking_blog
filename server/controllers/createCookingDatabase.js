const Category = require("../models/Category");
const Feedback = require("../models/Contact");
const Recipe = require("../models/Recipe");

// async function inserDmmyData() {
//   try {
//     await Category.insertMany([
//       {
//         name: "Japanese",
//         image: "japanese-food.jpg",
//       },
//       {
//         name: "American",
//         image: "american-food.jpg",
//       },
//       {
//         name: "Chinese",
//         image: "chinese-food.jpg",
//       },
//       {
//         name: "Greece",
//         image: "greece-food.jpg",
//       },
//       {
//         name: "Spanish",
//         image: "spanish-food.jpg",
//       },
//       {
//         name: "Italian",
//         image: "italian-food.jpg",
//       },
//       {
//         name: "Russian",
//         image: "russian-food.jpg",
//       },
//       {
//         name: "Indian",
//         image: "indian-food.jpg",
//       },
//       {
//         name: "Maxican",
//         image: "maxican-food.jpg",
//       },
//
//       {
//         name: "Thai",
//         image: "thai-food.jpg",
//       },
//     ]);
//   } catch (error) {
//     console.log(error.message);
//   }
// }
// inserDmmyData();

// recipe async function
async function insertRecipes() {
  try {
    await Recipe.insertMany([
      {
        category: "thai",
        name: "Thai Chicken With Satay Sauce And Broccoli",
        email: "thaiChicken@33.in",
        image: "thai-chicken.jpg",
        description: ` A wonderful thai classic made low carb. Its main star is the peanut-butter
        sauce, also known as satay sauce. Super popular with kids because of the
        sweetness from the peanuts.
        By Diet Doctor`,
        ratings: 4.3,
        ingredients: [
          "1½ lbs boneless chicken thighs",
          "2 tbsp fresh ginger, minced",
          "2 garlic cloves, minced",
          "1 tbsp lime juice",
          "1 tbsp tamari soy sauce",
          "1 tsp turmeric",
          "1 lb (5 cups) broccoli",
          "1 tbsp coconut oil",
          "salt if needed",
          "1¾ cups coconut cream",
          "1 tbsp red curry paste, minced",
          "2 tbsp tamari soy sauce",
          "1⁄3 cup peanut butter",
          "4 tbsp salted peanuts, chopped (optional)",
          "4 tbsp fresh cilantro, chopped (optional)",
          "½ red chili pepper, sliced (optional)",
        ],
        directions: [
          "Cut the chicken into bite-size pieces and place in a bowl or a plastic bag.",
          "Add the ginger, garlic, turmeric, lime, and tamari. Let marinate for 10 minutes.",
          "While the chicken is marinating, mix the ingredients to the satay sauce in a small saucepan and bring to a boil.",
          "Let simmer on low heat for 5–10 minutes until the sauce is of desired consistency. Season to taste and keep warm.",
          "Heat a wok pan or a large frying pan on medium-high heat with coconut oil. Add the garlic and fry the chicken and broccoli until the chicken is thoroughly cooked.",
          "Serve the sauce, chicken, and broccoli. Top it with some crushed peanuts and fresh cilantro for some extra crunch and flavor.",
          "Serve over hot egg noodles Enjoy!",
        ],
      },
      {
        category: "thai",
        name: "15-Minute Pad Thai",
        email: "PadThai@d.in",
        image: "thai-cheaters-pad-thai.jpg",
        description: `Your favorite thai takeout joint makes it look so simple. On those nights when youre craving pad thai, try this 15-minute cheaters version instead. Its quick and easy enough for weeknights, but fancy enough for saturday night with a glass of wine. By Purewow`,
        ratings: 4.8,
        ingredients: [
          "1 pound wide rice noodles",
          "2 tablespoons vegetable or peanut oil",
          "1 bunch green onions, thinly sliced",
          "1 tablespoon grated ginger",
          "1 pound ground pork",
          "½ cup chicken broth",
          "2 tablespoons soy sauce or tamari",
          "2 tablespoons rice vinegar",
          "2 teaspoons sriracha",
          "3 cups mustard greens, roughly torn",
          "½ cup bean sprouts",
          "½ cup chopped peanuts",
        ],
        directions: [
          "Fill a medium pot with water and bring to a boil over medium heat. Place the noodles in a large bowl and cover with the boiling water. Let sit until tender, 5 to 7 minutes.",
          "Meanwhile, heat the oil in a large skillet. Add the green onions and ginger; cook until softened, about 2 minutes. Add the pork and cook until it’s well browned, about 5 minutes.",
          "Add the chicken broth, soy sauce, rice vinegar and sriracha to the skillet. Bring the mixture to a simmer over medium heat and cook until reduced slightly, about 3 minutes.",
          "Add the mustard greens and toss until wilted, 1 minute. Add the softened rice noodles and toss well to combine. Garnish with bean sprouts and peanuts.",
          "Serve over hot egg noodles Enjoy!",
        ],
      },
      {
        category: "russian",
        name: "Tuscan-Style Spareribs With Balsamic Glaze",
        email: "tuscanSpareribs@g.in",
        image: "russian-Tuscan-Style-Spareribs.jpg",
        description: `A thoroughly delicious Tuscan-Style Spareribs With Balsamic Glaze Recipe that's rich in flavor with a
        luxuriously creamy sauce Sure to become a new favorite
        By The Daring Gourmet`,
        ratings: 4.5,
        ingredients: [
          "2 tablespoon Extra Virgin Olive Oil",
          "2 tablespoon Chopped rosemary leaves",
          "1.50 tablespoon Kosher Salt",
          "1.50 tablespoon Fennel Seeds",
          "2 teaspoon Freshly Ground Black Pepper",
          "2 teaspoon Chopped sage",
          "2 teaspoon Chopped Thyme",
          "2 teaspoon Sweet Paprika",
          "1 teaspoon Crushed Red Pepper",
          "1 teaspoon Ground Coriander",
          "1/2 teaspoon Ground Allspice",
          "6 pound Pork spareribs",
        ],
        directions: [
          "In a small bowl, combine the olive oil, rosemary, kosher salt, fennel, black pepper, sage, thyme, paprika, crushed red pepper, coriander and allspice. Rub the spice paste all over the spareribs and let stand at room temperature for 2 hours or refrigerate overnight.",
          "Preheat the oven to 325°. Arrange the ribs on a large, rimmed baking sheet or roasting pan, meaty side up. Roast the ribs for 2 hours, or until tender.",
          "Preheat the broiler. Brush the meaty side of the ribs with the balsamic vinegar and broil 6 inches from the heat until browned, about 2 minutes. Let stand for 5 minutes, then cut between the ribs and serve.",
          "Stir in the cream cheese until dissolved.",
          "Serve over hot Enjoy!",
        ],
      },
      {
        category: "russian",
        name: "Crock Pot Beef Stroganoff",
        email: "CrockPotBeef.co.in",
        image: "russian-Crock Pot Beef.jpg",
        description: `A thoroughly delicious crock pot beef stroganoff recipe that's rich in flavor with a
        luxuriously creamy sauce Sure to become a new favorite
        By The Daring Gourmet`,
        ratings: 4.6,
        ingredients: [
          "1 Medium Yellow Onion, Diced",
          "2 Cloves Garlic, Minced",
          "12 ounce Fresh cremini or white button mushrooms, cleaned and sliced",
          "1.25 cupBeef Broth",
          "2 tablespoon Dijon Mustard",
          "2 tablespoon Worcestershire Sauce",
          "1/2 teaspoon Onion Powder",
          "2 teaspoon Salt",
          "1/2 teaspoon Freshly Ground Black Pepper",
          "3/4 teaspoon Dried Thyme",
          "6 ounce Cream Cheese",
          "3/4 cup Sour Cream",
          "1/4 cup Chopped Fresh Parsley",
        ],
        directions: [
          "Spread the onions and garlic on the bottom of the slow cooker followed by the mushrooms.",
          "Place the beef evenly over the mushrooms.",
          "In a bowl, stir together the broth, Worcestershire sauce, mustard, thyme, onion powder, salt and pepper.",
          "Pour the mixture over the beef.",
          "Cook on LOW for 7-8 hours or on HIGH for 4-5 hours. About 20 minutes before done, dissolve 2 tablespoons cornstarch in 1/2 cup broth and add it to the slow cooker. Stir and continue to cook for another 20 minutes or until thickened.",
          "Stir in the cream cheese until dissolved.",
          "Stir in the sour cream and chopped fresh parsley and heat through.",
          "Add salt and pepper to taste and add a little more mustard if desired.",
          "Serve over hot egg noodles Enjoy!",
        ],
      },
      {
        category: "maxican",
        name: "Taco-Stuffed Avocado",
        email: "tacoSuffered@33.com",
        image: "maxican-taco-stuffed-avocado.jpg",
        description: `A thoroughly delicious Taco-Stuffed Avocado Recipe Skip the guacamole, but still enjoy the creaminess and healthy fat an
        avocado adds to a taco by turning it into the shell. By Paleo Leap
        By Prabhnoor Singh | Slurrp Community`,
        ratings: 4.9,
        ingredients: [
          "1/2 lb. ground beef",
          "1/2 onion, diced",
          "4 avocados, sliced in half and pitted",
          "1 bell pepper, thinly diced",
          "1 tomato, diced",
          "2 tsp. chili powder",
          "1/2 tsp. paprika",
          "1/4 tsp. garlic powder",
          "1/4 tsp. onion powder",
          "1/4 tsp. dried oregano",
          "1/4 tsp. ground cumin",
          "2 green onions, sliced",
          "Fresh salsa",
          "Cooking fat",
          "Sea salt and freshly ground black pepper",
        ],
        directions: [
          "Preheat your oven to 400 F.",
          "In a bowl combine, chili powder, paprika, garlic, onion, oregano, cumin, sea salt, and black pepper.",
          "Melt cooking fat in a skillet, over high heat, add the onion, and the ground beef.",
          "Cook until the beef is browned, sprinkle with the spices, and cook stirring until well mixed.",
          "Place halved avocado on a baking dish.",
          "Fill each avocado with ground beef, and top with bell pepper, and tomatoes.",
          "Place the stuffed avocado in the oven and bake for about 10 minutes.",
          "Serve the avocado topped with green onions, and fresh homemade salsa.",
          "Serve over hot Enjoy!",
        ],
      },
      {
        category: "maxican",
        name: "Mexican Nachos",
        email: "mexicanNachos.co.maxico",
        image: "maxican-baked-ground-beef-nachos.jpg",
        description:
          "A thoroughly delicious Mexican Nachos Recipe that's rich in flavor with a Easy, quick and healthy snack loved all around by everyone. By Prabhnoor Singh | Slurrp Community",
        ratings: 4.3,
        ingredients: [
          " 1 Pieces Onion",
          " 6 Pieces Garlic cloves",
          "100 g Can black beans drained",
          "50 g Grated parmesan or aged cheddar",
          "As required Jalepeno",
          " 1 Pieces Tomato chopped",
          " 1 Pieces Avocado",
          " 1 Packet Tortilla chips",
        ],
        directions: [
          "Preheat oven to 200 degrees and line a large baking sheet with foil. In a large skillet over medium heat, heat oil and add onion and cook until soft, 5 minutes and add garlic, refried beans, mushrooms and capsicum with mexican seasoning. Add water if needed.",
          "Add half the tortilla chips and top with veggie-bean mixture on the foil with half the cheese, half the black beans, and half the pickled jalapeños. Repeat one more layer.",
          "Bake until cheese is melty, 15 minutes.",
          "Scatter with tomato, avocado, green onions, and cilantro. Drizzle with sour cream and hot sauce and serve immediately.",
          "Preheat oven to 200 degrees and line a large baking sheet with foil. In a large skillet over medium heat, heat oil and add onion and cook until soft, 5 minutes and ad",
          "Serve over hot Enjoy!",
        ],
      },
      {
        category: "italian",
        name: " Rustic Berry Crostata With Peaches",
        email: "rusticBerry.uk.co",
        image: "italian-rustic-peach-and-berry-crostata.jpg",
        description:
          "A rustic berry crostata with peaches is the ultimate summer dessert Tender cornmeal crust filled with almond creme and topped with stone fruit and berries. By Jessica Gavin",
        ratings: 4.7,
        ingredients: [
          "2 cup All Purpose Flour",
          "1/4 cup Granulated Sugar",
          "2 tablespoon Yellow Cornmeal",
          "1 tablespoon Lemon zest, finely grated",
          "1.50 teaspoon Kosher Salt",
          "1/4 cup Water",
          "1/2 cup Almonds, finely ground",
          "1/4 cup Granulated Sugar",
          "1 tablespoon Lemon zest, finely grated",
          "0.12 teaspoon Kosher Salt",
          "1 Large egg, at room temperature",
          "2 tablespoon All Purpose Flour",
          "1/4 cup Granulated Sugar",
          "1/4 cup Dark brown sugar, packed",
          "2 tablespoon All Purpose Flour",
          "0.12 teaspoon Kosher Salt",
          "0.12 teaspoon Nutmeg, grated",
          "1 cup Blueberries",
          "1 cup Blackberries",
          "4 teaspoon Lemon Juice",
          "1/2 teaspoon Vanilla extract, pure",
          "1 Large Egg",
          "1 tablespoon Milk, or water",
          "1/4 cup Turbinado sugar",
        ],
        directions: [
          "Using an electric mixer fitted with the paddle attachment, mix the flour, sugar, cornmeal, lemon zest, and salt on medium speed for about 1 minute, until blended. Add the cold butter pieces and mix on medium-low speed for about 3 minutes, or until the largest pieces of butter are about pea-size. With the mixer on medium speed, add the water and beat for 1 minute, or until the dough forms moist clumps.",
          "Scrape the dough onto a work surface and knead 3 to 4 times, until it all comes together into a smooth dough. Shape into a disc, wrap in plastic, and refrigerate about 1 hour, or until firm enough to roll out.",
          "Using an electric mixer fitted with a paddle attachment, beat the ground nuts, butter, sugar, lemon zest, and salt on medium-high speed for about 1 minute, until light and fluffy. Add the egg and flour, and beat until blended. Refrigerate for about 1 hour, or until firm.",
          " In a large bowl, combine the granulated and brown sugars, flour, salt, nutmeg and stir until blended. Add the peaches, blueberries, blackberries, lemon zest, lemon juice, and vanilla. Gently toss until the fruit is evenly coated.",
          "Put a large piece of parchment paper on a work surface. Put the dough in the center of the paper and top with a second sheet of parchment paper. Roll out the dough into a 14-inch round about ¼-inch thick, stopping occasionally to peel away the paper, dust the dough lightly with flour, and reposition the paper, so you don’t get any wrinkles.",
          "Place the rolled dough on a sheet tray lined with parchment paper.",
          "Scrape the chilled frangipane onto the center of the dough, and using an offset spatula, spread it in an even layer, leaving a 1 ½-inch border of dough.",
          "Leaving any juices in the bowl, arrange the fruit in the center of the frangipane, leaving about a 2-inch border of frangipane.",
          "For the topping, combine the egg and milk in a small bowl and mix with a fork until blended. Using a small pastry brush, brush the dough border with the beaten egg mixture. Fold the edges (including the part with the frangipane) over the filling, pleating the dough in evenly spaced folds as you go around and gently pressing down on the pleats to seal. The dough will not cover all the fruit filling. Brush the dough with the beaten egg mixture and sprinkle generously with the turbinado sugar.",
          "Refrigerate the crostata for about 1 hour, until the dough is very firm, or up to 4 hours.",
          "Position a rack at the bottom of the oven, and preheat oven to 375°F. Line a large baking pan with 1-inch high sides with parchment paper.",
          "Set crostata on the baking sheet and bake for 15 minutes, then reduce the oven temperature to 350F. Bake for 30-40 minutes, or until the crust is deep golden brown and the bottom of the crust has set and is lightly browned. Once you reach 30 minutes, keep checking the color every 2 minutes.",
          "Transfer the baking sheet to a wire rack and let cool slightly or completely before serving.",
          "Serve over hot Enjoy!",
        ],
      },
      {
        category: "italian",
        name: "Pink Sauce Pasta",
        email: "pinkSauce@d.co.in",
        image: "italian-Pink-Sauce-Pasta.jpg",
        description:
          "A thoroughly delicious Pink Sauce Pasta Recipe that's rich in flavor with a luxuriously creamy sauce Sure to become a new favorite By The Daring Gourmet",
        ratings: 3.5,
        ingredients: [
          "1 g Fusilli pasta",
          "As required onion/ tomato/ garlic/ dried chillies/cooking oil/",
          "As required Pasta sauce",
          "As required Processed cheese, cubed",
          "As required Capsicum chopped",
          "As required Sweet corn",
        ],
        directions: [
          "Heat some water and a lot of salt after it comes to a boil pour in the pasta",
          "Heat put 2-3 tbps of oil and saute onion, tomatoes, chilli and salt. After the tomatoes are mushy add pasta sauce, herb and maggi masala mix it well. Than add the pasta and veggies capsicum and sweet corn and add 2 cube processed cheese. And mix it well. Your yummy pink sauce fusili pasta is ready to serve.",
          "Serve over hot Enjoy!",
        ],
      },
      {
        category: "indian",
        name: "Potato Curd Curry",
        email: "paresh@33.co.in",
        image: "indian-potato-curd-curry.jpg",
        description:
          "About Potato Curd Curry Recipe:Potato Curd Curry is a delicious Indian recipe served as a Side-Dish. By Bawarchi",
        ratings: 4.3,
        ingredients: [
          "1 - Potatoes medium sized",
          "1/2  - tomatoes medium sized",
          "1.25-1.50 tablespoon - Coconut",
          "1.25 - green chillies medium sized",
          "1/4 cup - Pottukadalai",
          "1/2 - Cloves",
          "As required - ghee to season",
          "1.50 - Kariveppilai or curry leaves leaves",
          "1/4 - Home made curd medium sized bowl",
          "As required - salt",
        ],
        directions: [
          "Boil the potatoes and mash them after they cool down.",
          "Grind the pottukadalai, coconut and the green chillies in the mixer.",
          "Then add water, chopped tomatoes to a copper bottomed or any heat resistant bowl and let it boil.",
          "After 2-3 mins, mix the ground mixture, mashed potatoes with the curd and add them to the boiling tomatoes.",
          "Let the whole dish simmer for about 7-9 minutes in very low flame because the curd will separate if kept on high or medium flame.",
          "Season the cloves in hot ghee and add it to the simmering dish.",
          "Switch the burner off and add the curry leaves. Serve while it is hot.",
        ],
      },
      {
        category: "indian",
        name: "Mayo Cheese Sandwich",
        email: "nitin3@gmail.com",
        image: "indian-Mayo Cheese Sandwich.jpg",
        description:
          "About Mayo Cheese Sandwich 🥪 Recipe: Mayo Cheese Sandwich is combination of various emotion, some time it is cheese 🧀, some time it is salty, and ofcourse some time it is creamy like Mayo add some tomato 🍅 & cucumber 🥒 to made it some more healthy, and then server it with chat-pata ketchup & crispy potato chips. Ufff...it made our...",
        ratings: 3.2,
        ingredients: [
          "As required - Bread slices",
          "As required - Mayonnaise",
          "As required - Some cheese optional",
          "As required - Butter",
          "1 Sprigs - Onion chopped",
          "Sprig - Capsicum chopped",
          "A Pinch - Black pepper",
          "A Pinch - Salt to taste",
          "A Pinch - Chat Masala",
        ],
        directions: [
          "To Make the Sandwich take two bread slices, then put butter on both side of the bread.",
          "Spread some veggies on its top like chopped capcicum, Tomato, cucumber, carrot or the veggies you like.",
          "On the top of veggies you put some mayo & cheese, sprinkle some salt, black pepper & chat masala on it.",
          "Put another bread on the top. Then grill the bread or fry the bread, until it not get golden brown colour.",
          "Serve it with Chat-pata ketchup or hari chatni & with potato chips.",
        ],
      },
    ]);
  } catch (error) {
    console.log(error.message);
  }
}

// insertRecipes();
