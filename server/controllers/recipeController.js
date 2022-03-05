const Category = require("../models/Category");
const Feedback = require("../models/Contact");
const Recipe = require("../models/Recipe");

/**
 * GET HOME PAGE
 */
exports.homePage = async (req, res) => {
  try {
    const limitNumber = 5;
    const categories = await Category.find({})
      .sort({ _id: -1 })
      .limit(limitNumber);
    const latest = await Recipe.find({}).sort({ _id: -1 }).limit(limitNumber);

    const thai = await Recipe.find({ category: "thai" }).limit(limitNumber);
    const maxican = await Recipe.find({ category: "maxican" }).limit(
      limitNumber
    );
    const indian = await Recipe.find({ category: "indian" }).limit(limitNumber);
    const italian = await Recipe.find({ category: "italian" }).limit(
      limitNumber
    );
    const russian = await Recipe.find({ category: "russian" }).limit(
      limitNumber
    );
    const food = { latest, thai, maxican, indian, italian, russian };

    res.status(200).render("index", {
      categories,
      food,
    });
  } catch (error) {
    res.status(500).send({ err: error.message || "Error Occured" });
  }
};

/**
 * post  /search
 */
exports.searchRecipe = async (req, res) => {
  try {
    let searchTerm = req.body.searchTerm;
    const recipe = await Recipe.find({
      $text: { $search: searchTerm, $diacriticSensitive: true },
    });
    res.status(200).render("search", { recipe });
  } catch (error) {
    res.status(500).send({ err: error.message });
  }
};

/**
 * GET CATEGORIES PAGE
 */
exports.exploreCategories = async (req, res) => {
  try {
    const categories = await Category.find({});

    res.status(200).render("categories", { categories });
  } catch (error) {
    res.status(500).send({ err: error.message || "Error Occured" });
  }
};

/**
 * GET CATEGORIES by ID
 */
exports.exploreCategoryById = async (req, res) => {
  try {
    const categoryId = req.params.id;
    const categoryById = await Recipe.find({ category: categoryId });

    res.status(200).render("categories", { categoryById });
  } catch (error) {
    res.status(500).send({ err: error.message || "Error Occured" });
  }
};

/**
 * explore recipe @ /recipe
 */
exports.exploreRecipe = async (req, res) => {
  try {
    const id = req.params.id;
    const recipes = await Recipe.findById(id);

    res.status(200).render("recipe", { recipes });
  } catch (error) {
    res.status(500).send({ err: error.message });
  }
};

/**
 * GET EXPLORE LATEST PAGE
 */
exports.exploreLatest = async (req, res) => {
  try {
    const recipes = await Recipe.find({}).sort({ _id: -1 });

    res.status(200).render("explore-latest", { recipes });
  } catch (error) {
    res.status(500).send({ err: error.message });
  }
};

/**
 * explore random
 */
exports.exploreRandom = async (req, res) => {
  try {
    const count = await Recipe.find().countDocuments();
    const random = Math.floor(Math.random() * count);
    const recipe = await Recipe.findOne().skip(random).exec();

    res.status(200).render("explore-random", { recipe });
  } catch (error) {
    res.status(500).send({ err: error.message });
  }
};

/**
 * submit recipi @ /submit-recipe
 */
exports.submitRecipe = async (req, res) => {
  try {
    const infoErrorObj = req.flash("infoErrors");
    const infoSubmitObj = req.flash("infoSubmit");
    res.status(200).render("submit-recipe", { infoErrorObj, infoSubmitObj });
  } catch (error) {
    res.status(500).send({ err: error.message });
  }
};

/**
 * submit recipi @ /submit-recipe on post
 */
exports.submitRecipeOnPost = async (req, res) => {
  try {
    let imageUploadFile;
    let uploadPath;
    let newImagePath;

    if (!req.files || Object.keys(req.files).length === 0) {
      console.log("No files Were Added");
    } else {
      imageUploadFile = req.files.image;
      newImagePath = Date.now() + imageUploadFile.name;

      uploadPath =
        require("path").resolve("./") + "/public/uploads/" + newImagePath;

      imageUploadFile.mv(uploadPath, function (err) {
        if (err) res.status(500).send(err);
      });
    }

    const recipe = await Recipe.create({
      category: req.body.category,
      name: req.body.name,
      email: req.body.email,
      image: newImagePath,
      description: req.body.description,
      ratings: req.body.ratings,
      ingredients: req.body.ingredients,
      directions: req.body.directions,
    });
    await recipe.save();

    req.flash("infoSubmit", "Recipe has been added");
    res.redirect("/submit-recipe");
  } catch (error) {
    req.flash("infoErrors", error);
    res.redirect("/submit-recipe");
  }
};

/**
 * send  @ /contact
 */
exports.contact = async (req, res) => {
  try {
    const ErrorObj = req.flash("infoErrors");
    const SubmitObj = req.flash("infoSubmit");
    res.status(200).render("contact", { ErrorObj, SubmitObj });
  } catch (error) {
    res.status(500).send({ err: error.message });
  }
};

/**
 * post req  @ /contact feeedback
 */
exports.contactFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.create({
      name: req.body.name,
      email: req.body.email,
      address: req.body.address,
      address2: req.body.address2,
      address3: req.body.address3,
      city: req.body.city,
      message: req.body.message,
    });

    await feedback.save();

    req.flash("infoSubmit", "successfully sent");
    res.status(200).redirect("/contact");
  } catch (error) {
    req.flash("infoErrors", error);
    res.status(500).redirect("/contact");
  }
};

/**
 * GET RANDOM RECIPE PAGE
 */
exports.randomRecipe = async (req, res) => {
  try {
    res.status(200).render("random-recipe");
  } catch (error) {
    res.status(404).send({ err: error.message });
  }
};

/**
 * update-recipe @/update-recipe
 */
exports.updateRecipe = async (req, res) => {
  try {
    const recipeId = req.params.id;
    const recipes = await Recipe.findByIdAndUpdate({ _id: recipeId });

    res.status(200).render("update-recipe", { recipes });
  } catch (error) {
    res.status(500).send({ err: error.message });
  }
};

/**
 * update-recipe @/update-recipe
 */
exports.updateRecipeOnPut = async (req, res) => {
  try {
    const recId = req.params.id;
    await Recipe.findByIdAndUpdate(recId, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).redirect(`/recipe/${recId}`);
  } catch (error) {
    res.status(500).send({ err: error.message });
  }
};
