const router = require("express").Router();
const {
  homePage,
  searchRecipe,
  exploreLatest,
  exploreRandom,
  exploreCategories,
  exploreCategoryById,
  exploreRecipe,
  submitRecipe,
  contact,
  contactFeedback,
  submitRecipeOnPost,
  updateRecipe,
  updateRecipeOnPut,
} = require("../controllers/recipeController");

router.get("/", homePage);
router.post("/search", searchRecipe);
router.get("/explore-random", exploreRandom);
router.get("/explore-latest", exploreLatest);
router.get("/categories", exploreCategories);
router.get("/categories/:id", exploreCategoryById);
router.get("/recipe/:id", exploreRecipe);
router.get("/submit-recipe", submitRecipe);
router.post("/submit-recipe", submitRecipeOnPost);
router.get("/contact", contact);
router.post("/contact", contactFeedback);
router.get("/update-recipe/:id", updateRecipe);
router.post("/recipe/:id", updateRecipeOnPut);

module.exports = router;
