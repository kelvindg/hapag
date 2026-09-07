/* ==========================================================================
   Matamis — interactions + recipe data
   ========================================================================== */

// --- Recipe data (researched from trusted Filipino kitchens) ---
const RECIPES = [
  {
    id: "leche-flan-classic",
    dessert: "Leche Flan",
    type: "Traditional",
    name: "Classic Leche Flan",
    category: "Custard · Crème Caramel",
    region: "Nationwide — Spanish colonial influence",
    difficulty: "Medium",
    prep: "15 min",
    cook: "50–60 min",
    servings: "12",
    image: "images/leche-flan-classic.webp",
    ingredients: [
      "9 tbsp granulated sugar (for caramel)",
      "12 large egg yolks",
      "1 can (14 oz) sweetened condensed milk",
      "1 can (12 oz) evaporated milk",
      "1 tsp vanilla extract (optional)",
      "Calamansi or lime zest (optional)",
    ],
    steps: [
      "Preheat the oven to 375°F (190°C).",
      "Place 3 tbsp sugar in each of 3 llanera molds. Set over low heat, swirling with tongs, until the sugar melts into a golden caramel; tilt to coat evenly and let harden.",
      "In a bowl, combine the egg yolks and condensed milk; stir to combine.",
      "Add the evaporated milk, stirring gently in a circular motion until blended. Add vanilla or zest if using.",
      "Strain the mixture through a cheesecloth or fine-mesh sieve to remove stray egg whites.",
      "Pour into the prepared llaneras and cover tightly with foil.",
      "Arrange the llaneras in a baking dish with about 1 inch of water (bain-marie).",
      "Bake 50–60 minutes, until a toothpick inserted in the center comes out clean.",
      "Cool, then refrigerate to fully set.",
      "To serve, invert onto a plate so the caramel runs over the top.",
    ],
    notes: "Bake in a water bath for a velvety texture; stir in one direction and strain to avoid air bubbles. Don't overcook — the custard continues to set as it chills.",
    source: "https://www.kawalingpinoy.com/leche-flan/",
  },
  {
    id: "ube-leche-flan",
    dessert: "Leche Flan",
    type: "Modern",
    name: "Ube Leche Flan",
    category: "Custard · Fusion",
    region: "Modern fusion — nationwide trend",
    difficulty: "Easy",
    prep: "25 min",
    cook: "50–65 min",
    servings: "6",
    image: "images/ube-leche-flan.webp",
    ingredients: [
      "Caramel: ½ cup sugar, 2 tbsp water, ½ tsp lemon juice",
      "Custard: 4 large eggs, ½ cup condensed milk, 1 cup whole/evaporated milk, 1 tsp vanilla",
      "Ube layer: ¾ cup fresh ube (peeled & cubed), ¼ cup condensed milk, ¼ cup coconut milk, 1 egg, 1 tbsp melted butter, ½ tsp ube extract",
    ],
    steps: [
      "Make the caramel: combine sugar, water, and lemon juice; cook over medium heat without stirring until deep amber; pour into the mold and swirl to coat.",
      "Flan layer: gently whisk the eggs (minimal bubbles), add condensed milk, milk, and vanilla; strain through a sieve.",
      "Ube layer: soften the ube (microwave 5–7 min with a splash of water, or steam), then blend with condensed milk, coconut milk, egg, butter, and ube extract until smooth.",
      "Pour the flan mixture over the set caramel, then slowly spoon the ube layer on top (some mixing is fine — it creates a marbled effect).",
      "Preheat the oven to 325°F (160°C). Place the mold in a larger dish with hot water halfway up (water bath) and cover loosely with foil.",
      "Bake 50–65 minutes until just set (the center should jiggle slightly).",
      "Cool ~1 hour at room temperature, then refrigerate 4+ hours or overnight.",
      "Run a knife around the edges, flip onto a plate, and serve chilled.",
    ],
    notes: "Oven-baked (no steaming); use a water bath and strain to prevent cracks and eggy lumps. Can substitute ube halaya (reduce sugar) or ube powder.",
    source: "https://jenhdao.com/fresh-ube-flan/",
  },
  {
    id: "halo-halo-classic",
    dessert: "Halo-Halo",
    type: "Traditional",
    name: "Classic Halo-Halo",
    category: "Shaved ice · Assembly",
    region: "Nationwide — roots in Japanese kakigori",
    difficulty: "Medium",
    prep: "15 min",
    cook: "20 min",
    servings: "4",
    image: "images/halo-halo-classic.webp",
    ingredients: [
      "Minatamis na saging: 3 saba bananas, 1 cup water, ¾ cup brown sugar, ¼ tsp salt, ¼ tsp vanilla",
      "¼ cup small tapioca pearls (optional)",
      "1 (20 oz) can jackfruit in syrup",
      "Milk: ⅔ cup coconut milk, 3 tbsp evaporated milk, 3 tbsp condensed milk",
      "4 scoops coconut or ube ice cream",
      "½ cup macapuno (coconut sport strings)",
      "½ cup ube halaya",
      "1½ cups nata de coco",
      "4 cups shaved ice (plus more)",
    ],
    steps: [
      "Tapioca (optional): boil water, add pearls, and simmer until al dente (~7–8 min); drain.",
      "Minatamis na saging: bring water, brown sugar, and salt to a boil; add sliced bananas and simmer until tender and translucent (~5 min); stir in vanilla and tapioca; chill ~2 hours.",
      "Coarsely chop the jackfruit into bite-size pieces and return to the can with its syrup.",
      "Stir together the coconut milk, evaporated milk, and condensed milk.",
      "Layer each serving in a 16-oz glass: minatamis na saging, a scoop of ice cream, macapuno, ube halaya, jackfruit + syrup, nata de coco.",
      "Top generously with shaved ice and drizzle 3 tbsp of the milk mixture; add more ice to fill.",
      "Serve immediately with a long spoon — mix everything together before eating.",
    ],
    notes: "Mix-ins are flexible — common additions include sweet beans, corn, leche flan, mango, and sago. Texture contrast (creamy, chewy, gelatinous, crunchy) is what makes halo-halo work.",
    source: "https://www.thekitchn.com/halo-halo-recipe-23185201",
  },
  {
    id: "razons-halo-halo",
    dessert: "Halo-Halo",
    type: "Modern",
    name: "Razon's Halo-Halo",
    category: "Shaved ice · Restaurant-style",
    region: "Pampanga (Guagua) — famous chain",
    difficulty: "Easy",
    prep: "15 min",
    cook: "10 min",
    servings: "4",
    image: "images/razons-halo-halo.webp",
    ingredients: [
      "2 cups coco jam (coconut jam)",
      "⅓ cup water",
      "2 very ripe saba (or regular) bananas, diced small",
      "8 tbsp macapuno (sweet coconut strings)",
      "8 cups shaved ice",
      "1 cup evaporated milk",
      "1 llanera leche flan, sliced",
      "Calamansi rind (optional garnish)",
    ],
    steps: [
      "Caramelized bananas: combine the coco jam and water in a saucepan and bring to a boil over medium heat (~3 min).",
      "Turn off the heat, add the ripe bananas, and stir just to heat through (do not fully cook); transfer to a bowl to cool completely.",
      "Build each serving: 2 tbsp caramelized bananas, then 1 tbsp macapuno, then ~2 cups shaved ice.",
      "Pour evaporated milk generously over the ice (if it melts the ice, add more ice and more milk).",
      "Top with 3 slices of leche flan.",
      "Optional: grate calamansi rind over the flan for a flavor counterpoint. Serve immediately.",
    ],
    notes: "Razon's of Guagua (est. 1970s Pampanga) made its name on a deliberately minimalist halo-halo — just caramelized saba, macapuno, milk, and leche flan.",
    source: "https://rezelkealoha.com/razons-halo-halo/",
  },
  {
    id: "ube-halaya",
    dessert: "Ube Halaya",
    type: "Traditional",
    name: "Ube Halaya",
    category: "Kakanin · Purple yam jam",
    region: "Nationwide",
    difficulty: "Medium",
    prep: "15 min",
    cook: "1 hr 15 min",
    servings: "~3 cups",
    image: "images/ube-halaya.webp",
    ingredients: [
      "2.2 lbs fresh ube (purple yam)",
      "1 can (12 oz) evaporated milk",
      "½ cup packed brown sugar",
      "1 can (10–14 oz) sweetened condensed milk",
      "½ tsp salt",
      "¼ cup unsalted butter, cubed",
    ],
    steps: [
      "Cook the ube: cut into pot-fitting pieces, cover with water, and boil until fork-tender (~30 min).",
      "Cool ~10 minutes, then peel and mash with a fork or potato masher (or grate for a smoother, more traditional texture).",
      "In a large non-stick skillet over medium heat, stir the evaporated milk and brown sugar until the sugar dissolves.",
      "Add the mashed ube, condensed milk, and salt.",
      "Stir constantly (do not exceed medium heat) until the mixture thickens; add the butter at about the 20-minute mark and stir until melted.",
      "The jam is done when it holds its shape when you drag a spoon through the center (~30 min total).",
      "Optional: stir ~10 minutes more for a firmer, more traditional texture.",
      "Transfer to a heat-proof container, cool, and enjoy — it thickens further as it cools.",
    ],
    notes: "Grating the ube (traditional) removes more fiber strands. Frozen grated ube works but add 1 tsp ube extract for flavor. Keeps up to 1 week refrigerated, 3–4 weeks frozen.",
    source: "https://theunlikelybaker.com/ube-halaya-recipe-ube-jam/",
  },
  {
    id: "ube-basque-cheesecake",
    dessert: "Ube Halaya",
    type: "Modern",
    name: "Ube Basque Cheesecake",
    category: "Cheesecake · Fusion",
    region: "Modern fusion — Basque × Filipino ube",
    difficulty: "Medium",
    prep: "15 min",
    cook: "~1 hr",
    servings: "12",
    image: "images/ube-basque-cheesecake.webp",
    ingredients: [
      "48 oz (4 blocks) full-fat cream cheese, room temperature",
      "1½ cups granulated sugar",
      "6 large eggs, room temperature",
      "2¾ cups heavy cream, room temperature",
      "1 tsp salt",
      "4 tsp ube extract",
      "⅓ cup all-purpose flour",
    ],
    steps: [
      "Preheat the oven to 400°F (200°C). Line a 10-inch springform pan with 2 overlapping sheets of parchment, extending at least 2 inches above the rim.",
      "Beat the cream cheese and sugar on low-medium speed until very smooth with no lumps (2–3 min); scrape the bowl.",
      "Add the eggs one at a time on medium speed, blending each before the next (~15–20 sec each); scrape the bowl.",
      "Add the heavy cream, salt, and ube extract; beat on medium-low until combined (~1 min).",
      "Sift the flour over the mixture and beat on low until incorporated (15–20 sec).",
      "Scrape the bowl and beat until the batter is smooth and silky (10–15 sec).",
      "Pour the batter into the prepared pan; bake 45 minutes until the sides are set.",
      "Increase the oven to 500°F and bake 5–10 minutes more until the top develops a burnt, caramelized exterior.",
      "Cool slightly in the pan (it will deflate), then remove; once fully cool, peel away the parchment, slice, and serve.",
    ],
    notes: "No water bath, no crust, no cracks to worry about. The center should stay jiggly — don't over-bake. If the top is still pale, broil on high 1–2 minutes for the burnt look.",
    source: "https://theunlikelybaker.com/ube-basque-cheesecake/",
  },

  // ===== Bibingka =====
  {
    id: "bibingka-classic",
    dessert: "Bibingka",
    type: "Traditional",
    name: "Classic Bibingka",
    category: "Rice cake (kakanin)",
    region: "Nationwide — Christmas specialty (San Fernando, Pampanga)",
    difficulty: "Medium",
    prep: "10 min",
    cook: "15 min",
    servings: "4",
    image: "images/bibingka-classic.webp",
    ingredients: [
      "1 cup rice flour",
      "¼ cup all-purpose flour",
      "½ cup sugar",
      "¾ cup fresh milk (or coconut milk)",
      "¼ cup water",
      "2 tsp baking powder",
      "¼ tsp salt",
      "4 tbsp vegetable oil",
      "1 egg",
      "Toppings: grated cheese, grated coconut, 1 salted egg (sliced), melted butter",
    ],
    steps: [
      "Cut banana-leaf circles to line pans; rinse, pat dry, and pass each leaf over a flame to make pliable, then brush with butter.",
      "Combine all batter ingredients in a bowl and whisk until smooth (batter should be runny).",
      "Divide batter into lined pans, filling no more than halfway; add 2–3 salted-egg slices to each.",
      "Bake at 390°F (200°C) on the middle rack for 10 minutes.",
      "Top each with a buttered banana leaf (butter side down), move to the top rack, and bake 5 more minutes until lightly charred.",
      "Brush with melted butter and top with grated cheese and grated coconut. Serve warm.",
    ],
    notes: "Traditionally baked in clay pots over coals; the banana leaf adds a distinctive aroma. Serve warm — best straight from the oven.",
    source: "https://www.foxyfolksy.com/bibingka-recipe/",
  },
  {
    id: "bibingka-ube",
    dessert: "Bibingka",
    type: "Modern",
    name: "Ube Bibingka",
    category: "Rice cake / Fusion",
    region: "Modern fusion",
    difficulty: "Easy",
    prep: "10 min",
    cook: "30 min",
    servings: "6",
    image: "images/bibingka-ube.webp",
    ingredients: [
      "252 g (1½ cups) ube mochi pancake mix",
      "300 g (1¼ cups) full-fat coconut milk",
      "1 large egg",
      "42 g (3 tbsp) melted salted butter",
      "1 tsp ube extract (optional)",
      "85 g (¼ cup) ube halaya (for filling)",
      "55 g (¼ cup) cream cheese, sliced (for topping)",
      "14 g (1 tbsp) melted butter (for brushing)",
    ],
    steps: [
      "Preheat oven to 375°F (190°C). Line giant muffin tins with flame-softened banana leaves.",
      "Whisk together pancake mix, coconut milk, egg, melted butter, and ube extract until smooth.",
      "Divide batter among lined cups; top each with ½ tbsp ube halaya. Bake 15 minutes.",
      "Add a slice of cream cheese on top of each; bake 10–15 minutes more until set and no longer jiggly.",
      "Brush tops with melted butter, cool ~5 minutes, then unmold and serve warm.",
    ],
    notes: "A shortcut ube mochi-mix take on bibingka, filled with ube halaya and crowned with cream cheese. Best warm.",
    source: "https://www.lovefilipinofood.com/easy-ube-bibingka/",
  },

  // ===== Puto =====
  {
    id: "puto-classic",
    dessert: "Puto",
    type: "Traditional",
    name: "Classic Puto",
    category: "Steamed rice cake (kakanin)",
    region: "Nationwide",
    difficulty: "Easy",
    prep: "3 min",
    cook: "32 min",
    servings: "24 mini cakes",
    image: "images/puto-classic.webp",
    ingredients: [
      "1 large egg white (40 g)",
      "½ cup water",
      "½ cup coconut milk",
      "1 cup rice flour (110 g)",
      "2 tsp baking powder",
      "½ cup white sugar",
      "Optional: sliced cheese for topping",
    ],
    steps: [
      "Preheat a steamer over medium heat.",
      "Whisk egg white, water, and coconut milk until combined.",
      "Sift rice flour and baking powder over the wet mixture; whisk until smooth.",
      "Stir in sugar.",
      "Scoop into mini muffin molds, filling ¾ full. Steam 8 minutes until fluffy and firm.",
      "If using cheese, place slices on top and steam ~30 seconds to melt. Cool briefly, unmold, and serve.",
    ],
    notes: "Use regular rice flour (not glutinous) for a light, airy texture. Best served immediately.",
    source: "https://www.hungryhuy.com/puto-filipino-steamed-rice-cakes/",
  },
  {
    id: "puto-ube",
    dessert: "Puto",
    type: "Modern",
    name: "Ube Cheese Puto",
    category: "Steamed rice cake / Fusion",
    region: "Modern fusion",
    difficulty: "Easy",
    prep: "10 min",
    cook: "10 min",
    servings: "4",
    image: "images/puto-ube.webp",
    ingredients: [
      "1 cup all-purpose flour (or cake flour)",
      "½ cup granulated sugar",
      "1 tbsp baking powder",
      "⅛ tsp salt",
      "1 large egg",
      "¼ cup melted butter",
      "½ cup milk (or evaporated milk)",
      "2 tsp ube extract",
      "10 slices cheese",
    ],
    steps: [
      "Sift flour, sugar, baking powder, and salt into a bowl.",
      "In a separate bowl, mix milk, egg, ube extract, and melted butter until blended.",
      "Combine wet and dry ingredients, mixing well (do not overmix).",
      "Grease puto molds with oil, fill each ¾ full, and place in a steamer.",
      "Steam over boiling water for 10 minutes or until a toothpick comes out clean.",
      "Top with cheese, steam 1 more minute to melt, then cool slightly and serve.",
    ],
    notes: "Sift the dry ingredients and use boiling water to get the signature domed top. Ube extract gives the vibrant purple.",
    source: "https://curiousflavors.com/ube-puto/",
  },

  // ===== Turon =====
  {
    id: "turon-classic",
    dessert: "Turon",
    type: "Traditional",
    name: "Turon Malagkit (Banana Lumpia)",
    category: "Fried spring roll",
    region: "Nationwide street food",
    difficulty: "Medium",
    prep: "20 min",
    cook: "30 min",
    servings: "24",
    image: "images/turon-classic.webp",
    ingredients: [
      "2 cups glutinous (sticky) rice",
      "2½ cups coconut milk",
      "½ tsp salt",
      "1 pandan leaf (optional)",
      "24 lumpia (spring roll) wrappers",
      "1 cup sweetened jackfruit strips",
      "1 cup sugar (for coating)",
      "Neutral oil for frying",
    ],
    steps: [
      "Rinse glutinous rice; cook with coconut milk, salt, and pandan leaf in a rice cooker. Fluff and cool completely.",
      "Lay a wrapper diamond-style; spoon ~2 tbsp rice in the center and top with 2–3 jackfruit strips.",
      "Fold the bottom point over, fold the sides in, and roll tightly; seal the edge with water.",
      "Roll each assembled turon in sugar to coat.",
      "Heat ~2 inches of oil to 350–375°F; fry seam-side down 2–3 minutes per side until golden and caramelized.",
      "Drain on a wire rack and serve immediately.",
    ],
    notes: "Cool the rice fully and drain the jackfruit to keep wrappers from tearing. Roll in sugar before frying for the caramelized crust.",
    source: "https://www.kawalingpinoy.com/turon/",
  },
  {
    id: "turon-ube",
    dessert: "Turon",
    type: "Modern",
    name: "Cheesy Ube Turon",
    category: "Fried spring roll / Fusion",
    region: "Modern fusion",
    difficulty: "Easy",
    prep: "15 min",
    cook: "15 min",
    servings: "20",
    image: "images/turon-ube.webp",
    ingredients: [
      "1 package (8×8-inch) spring roll wrappers",
      "2–3 oz ube halaya (purple yam jam)",
      "7 oz cheddar cheese, sliced",
      "¼ tsp cornstarch + a little water (sealant)",
      "Oil for frying",
    ],
    steps: [
      "Lay a wrapper in a diamond orientation.",
      "Place 2 heaping tbsp ube halaya and 2 small slices of cheddar in the center.",
      "Roll tightly from the bottom, fold the sides inward, and seal the top edge with cornstarch slurry.",
      "Fry on medium-high heat ~1 minute per side until golden brown.",
      "Drain on a wire rack and serve.",
    ],
    notes: "A simplified ube turon — no glutinous rice, just ube jam + cheese. Don't overfill or the filling leaks.",
    source: "https://theunlikelybaker.com/cheesy-ube-turon-recipe/",
  },

  // ===== Biko =====
  {
    id: "biko-classic",
    dessert: "Biko",
    type: "Traditional",
    name: "Classic Biko",
    category: "Sticky rice cake (kakanin)",
    region: "Nationwide",
    difficulty: "Medium",
    prep: "5 min",
    cook: "1 hr",
    servings: "9 squares",
    image: "images/biko-classic.webp",
    ingredients: [
      "2 cups glutinous rice, washed",
      "1 cup coconut milk (for rice)",
      "1 cup water",
      "2 pandan leaves (optional)",
      "2 cups coconut milk (for latik syrup)",
      "1 cup dark brown sugar, packed",
      "1 tsp vanilla extract (optional)",
    ],
    steps: [
      "Grease an 8×8-inch pan.",
      "Simmer rice, 1 cup coconut milk, water, and pandan leaves until liquid is absorbed (rice almost cooked).",
      "Meanwhile, cook 2 cups coconut milk + brown sugar + vanilla, stirring, into a thick caramel latik syrup; reserve ½ cup.",
      "Fold the cooked rice into the remaining latik syrup until sticky and fully coated.",
      "Spread into the pan, pour reserved syrup on top, and bake at 350°F (180°C) 20–30 minutes until the topping is bubbly.",
      "Cool completely, cut into squares, and serve.",
    ],
    notes: "Use dark brown or muscovado sugar for the rich color. Don't overcook the rice before folding — it should be slightly chalky.",
    source: "https://www.foxyfolksy.com/biko-recipe-filipino-rice-cake/",
  },
  {
    id: "biko-ube",
    dessert: "Biko",
    type: "Modern",
    name: "Ube Biko with Latik",
    category: "Sticky rice cake / Fusion",
    region: "Modern fusion",
    difficulty: "Medium",
    prep: "15 min",
    cook: "1 hr 15 min",
    servings: "24 slices",
    image: "images/biko-ube.webp",
    ingredients: [
      "2 cups glutinous rice",
      "1 can (18 oz) coconut cream (for latik)",
      "1 can (13 oz) coconut milk",
      "1 can (10 oz) ube condensed milk",
      "2 tsp ube extract",
      "¼ cup brown sugar, packed",
      "Pinch of salt",
    ],
    steps: [
      "Cook glutinous rice in 2 cups water until done.",
      "Make latik: cook coconut cream over low-medium heat, stirring, until golden curds separate from the oil; strain.",
      "In a pan, combine coconut milk, ube condensed milk, and ube extract; stir to combine.",
      "Add brown sugar and salt; bring to a boil.",
      "Add cooked rice and stir until thick and fully absorbed.",
      "Spread into a greased pan, top with latik, and let cool and set before serving.",
    ],
    notes: "No baking needed — the ube condensed milk carries the flavor. Cook the latik low and slow to avoid bitterness.",
    source: "https://theunlikelybaker.com/ube-biko-with-latik/",
  },

  // ===== Sapin-Sapin =====
  {
    id: "sapin-sapin-classic",
    dessert: "Sapin-Sapin",
    type: "Traditional",
    name: "Classic Sapin-Sapin",
    category: "Layered rice cake (kakanin)",
    region: "Abra province origin",
    difficulty: "Medium",
    prep: "20 min",
    cook: "30 min",
    servings: "12",
    image: "images/sapin-sapin-classic.webp",
    ingredients: [
      "1 cup coconut cream (for latik)",
      "3½ cups glutinous rice flour",
      "2 cans (13.5 oz each) coconut milk",
      "1 can (14 oz) condensed milk",
      "1 cup sugar",
      "3 drops ube extract",
      "3 drops langka (jackfruit) extract",
    ],
    steps: [
      "Make latik: cook coconut cream until golden curds form; strain and set aside, keeping the oil.",
      "Whisk rice flour, coconut milk, condensed milk, and sugar until smooth; strain and divide into 3 bowls.",
      "Tint one bowl purple (ube), one yellow (langka), and leave one white.",
      "Steam the purple layer ~10 minutes until set, then the yellow, then the white — each steamed individually.",
      "Cool completely (do not cover). Invert, brush with coconut oil, and top with latik.",
    ],
    notes: "\"Sapin-sapin\" means layers. Each layer is steamed separately for distinct colors. Top generously with latik.",
    source: "https://www.kawalingpinoy.com/sapin-sapin/",
  },
  {
    id: "sapin-sapin-mini",
    dessert: "Sapin-Sapin",
    type: "Modern",
    name: "Mini Special Sapin-Sapin",
    category: "Layered rice cake / Party-size",
    region: "Modern take (nationwide)",
    difficulty: "Medium",
    prep: "20 min",
    cook: "30 min",
    servings: "12",
    image: "images/sapin-sapin-mini.webp",
    ingredients: [
      "1 cup coconut cream (for latik)",
      "3½ cups glutinous rice flour",
      "2 cans (13.5 oz each) coconut milk",
      "1 can (14 oz) condensed milk",
      "¾ cup sugar",
      "¼ cup macapuno strings, drained & chopped",
      "¼ cup ube halaya",
      "¼ cup sweetened jackfruit, drained & chopped",
      "3 drops ube extract",
      "3 drops langka extract",
    ],
    steps: [
      "Make latik from the coconut cream; strain and set aside.",
      "Whisk rice flour, coconut milk, condensed milk, and sugar until smooth; strain and divide into 3 bowls.",
      "Mix ube halaya + ube extract into one, jackfruit + langka extract into another, and macapuno into the third.",
      "Grease individual puto molds; steam each flavored layer ~5 minutes before adding the next.",
      "Cool, unmold, brush with coconut oil, and top with latik.",
    ],
    notes: "A party-ready, individually portioned upgrade with real ube halaya, jackfruit, and macapuno in each layer.",
    source: "https://www.kawalingpinoy.com/mini-special-sapin-sapin/",
  },

  // ===== Cassava Cake =====
  {
    id: "cassava-classic",
    dessert: "Cassava Cake",
    type: "Traditional",
    name: "Classic Cassava Cake",
    category: "Cassava cake (kakanin)",
    region: "Lucban, Quezon origin",
    difficulty: "Medium",
    prep: "20 min",
    cook: "1 hr 10 min",
    servings: "8",
    image: "images/cassava-classic.webp",
    ingredients: [
      "2 lbs grated cassava",
      "2 cups coconut milk",
      "6 oz evaporated milk",
      "3 eggs",
      "¼ cup melted butter",
      "6 tbsp grated cheddar cheese",
      "½ cup condensed milk",
      "14 tbsp granulated sugar",
      "Topping: 2 tbsp flour, 2 tbsp sugar, ½ cup condensed milk, 2 tbsp cheese, 2 cups coconut milk",
    ],
    steps: [
      "Mix grated cassava, melted butter, ½ cup condensed milk, evaporated milk, 6 tbsp cheese, sugar, and 2 eggs thoroughly.",
      "Add 2 cups coconut milk and mix again; pour into a greased pan.",
      "Bake at 350°F (175°C) for 1 hour.",
      "Make the topping: cook sugar, flour, condensed milk, cheese, and coconut milk, stirring, until thickened.",
      "Spread the topping over the baked cake; brush with egg white.",
      "Broil until the top is light brown; garnish with grated cheese and serve.",
    ],
    notes: "Never eat raw cassava — it must be fully cooked. The custard topping is what sets it apart.",
    source: "https://panlasangpinoy.com/filipino-food-dessert-holiday-cassava-cake-recipe/",
  },
  {
    id: "cassava-ube",
    dessert: "Cassava Cake",
    type: "Modern",
    name: "Ube Cassava Cake",
    category: "Cassava cake / Fusion",
    region: "Modern fusion",
    difficulty: "Medium",
    prep: "15 min",
    cook: "1 hr 15 min",
    servings: "12",
    image: "images/cassava-ube.webp",
    ingredients: [
      "500 g grated cassava",
      "500 g grated ube (purple yam)",
      "1½ large cans coconut milk",
      "1 large can evaporated milk",
      "½ can condensed milk",
      "2 eggs, beaten",
      "½ cup melted butter",
      "½ cup grated cheddar cheese",
      "1 cup brown sugar",
      "1 bottle macapuno",
      "Topping: ½ large can coconut milk, ½ can condensed milk, 2 tbsp flour, 2 tbsp sugar, 2 egg yolks",
    ],
    steps: [
      "Combine all base ingredients in a bowl and mix thoroughly.",
      "Pour into a greased tray, spread macapuno on top, and bake at 356°F (180°C) for 60 minutes.",
      "Meanwhile, combine topping ingredients in a saucepan and cook over low heat until thickened.",
      "Pour the topping over the cake and bake at 428°F (220°C) 15 more minutes until golden.",
    ],
    notes: "A 1:1 ube-and-cassava fusion — sticky cassava meets earthy ube, finished with a creamy custard top.",
    source: "https://www.angsarap.net/2016/10/28/ube-cassava-cake/",
  },

  // ===== Maja Blanca =====
  {
    id: "maja-classic",
    dessert: "Maja Blanca",
    type: "Traditional",
    name: "Classic Maja Blanca",
    category: "Coconut pudding",
    region: "Nationwide",
    difficulty: "Easy",
    prep: "5 min",
    cook: "20 min",
    servings: "8",
    image: "images/maja-classic.webp",
    ingredients: [
      "4 cups coconut milk",
      "¾ cup cornstarch",
      "14 oz condensed milk",
      "¾ cup fresh (or evaporated) milk",
      "¾ cup granulated sugar",
      "15 oz whole sweet kernel corn",
      "5 tbsp toasted grated coconut (for garnish)",
    ],
    steps: [
      "Boil coconut milk in a pot, stirring to prevent splattering.",
      "Add sugar, condensed milk, and corn; simmer 8 minutes.",
      "Whisk milk and cornstarch together until smooth, then pour into the pot, stirring constantly.",
      "Cook, stirring, until thick.",
      "Pour into a tray, cool, and refrigerate at least 1 hour to set.",
      "Top with toasted coconut or latik and serve cold.",
    ],
    notes: "A creamy coconut-corn pudding. It can't be re-cooked if it doesn't set, so use good cornstarch.",
    source: "https://panlasangpinoy.com/maja-blanca-recipe/",
  },
  {
    id: "maja-ube",
    dessert: "Maja Blanca",
    type: "Modern",
    name: "Ube Maja Blanca",
    category: "Coconut pudding / Fusion",
    region: "Modern fusion",
    difficulty: "Easy",
    prep: "10 min",
    cook: "20 min",
    servings: "8",
    image: "images/maja-ube.webp",
    ingredients: [
      "2 cups coconut cream (for latik)",
      "2 cans (13.5 oz each) coconut milk",
      "1 can (14 oz) condensed milk",
      "1 can (12 oz) evaporated milk",
      "2 cups cooked ube, mashed",
      "¾ cup sugar",
      "4 drops ube extract",
      "½ cup water",
      "¾ cup cornstarch",
    ],
    steps: [
      "Make latik from the coconut cream; strain and set aside, keeping the oil.",
      "Combine coconut milk, evaporated milk, condensed milk, mashed ube, and sugar in a pot; heat until gently boiling.",
      "Dissolve cornstarch in water, then whisk into the hot mixture until very thick.",
      "Transfer to an oiled 9×13 dish, smooth the top, and refrigerate 1–2 hours to set.",
      "Brush with coconut oil, top with latik, and cut into squares.",
    ],
    notes: "Purple yam-infused maja blanca. Whisk continuously once the slurry goes in — it thickens fast.",
    source: "https://www.kawalingpinoy.com/ube-maja-blanca/",
  },

  // ===== Kutsinta =====
  {
    id: "kutsinta-classic",
    dessert: "Kutsinta",
    type: "Traditional",
    name: "Classic Kutsinta",
    category: "Steamed rice cake (kakanin)",
    region: "Nationwide",
    difficulty: "Medium",
    prep: "10 min",
    cook: "45 min",
    servings: "48 mini",
    image: "images/kutsinta-classic.webp",
    ingredients: [
      "1½ cups all-purpose flour",
      "½ cup tapioca flour",
      "1½ cups dark brown sugar",
      "3 cups water",
      "1 tbsp atsuete (annatto) powder",
      "1 tbsp food-grade lye water",
    ],
    steps: [
      "Combine flours, sugar, and water; stir until smooth.",
      "Add atsuete powder and stir until the desired color is reached.",
      "Add lye water and stir to combine.",
      "Fill molds ¾ full and steam over a gentle simmer 40–45 minutes until set.",
      "Cool completely, unmold, and top with grated coconut.",
    ],
    notes: "Lye water (lihiya) gives the chewy texture and rich color — use sparingly to avoid bitterness.",
    source: "https://www.kawalingpinoy.com/kutsinta/",
  },
  {
    id: "kutsinta-ube",
    dessert: "Kutsinta",
    type: "Modern",
    name: "Ube Kutsinta",
    category: "Steamed rice cake / Fusion",
    region: "Modern fusion",
    difficulty: "Medium",
    prep: "15 min",
    cook: "25 min",
    servings: "scalable",
    image: "images/kutsinta-ube.webp",
    ingredients: [
      "1 cup all-purpose flour",
      "1 cup tapioca flour",
      "1 cup granulated sugar",
      "2½ cups water",
      "1 tbsp ube flavoring",
      "2½ tsp lye water",
      "Oil for greasing molds",
    ],
    steps: [
      "Combine flours and sugar; stir well.",
      "Add water and ube flavoring; stir, then add lye water and mix well.",
      "Fill greased molds ¾ full.",
      "Steam 25–30 minutes over medium-high heat.",
      "Cool, unmold, and serve with grated coconut, latik, or dulce de leche.",
    ],
    notes: "A purple ube take on kutsinta — chewy and customizable with your choice of topping.",
    source: "https://www.pinoycookingrecipes.com/recipe/ube-kutsinta",
  },

  // ===== Sans Rival =====
  {
    id: "sans-rival-classic",
    dessert: "Sans Rival",
    type: "Traditional",
    name: "Classic Sans Rival",
    category: "Layered meringue cake",
    region: "Nationwide",
    difficulty: "Hard",
    prep: "55 min",
    cook: "40 min",
    servings: "12",
    image: "images/sans-rival-classic.webp",
    ingredients: [
      "Meringue: ¾ cup ground roasted cashews, ½ cup chopped cashews, ¼ cup flour, 6 egg whites, 1 tsp cream of tartar, 1 cup sugar",
      "Buttercream: ¾ cup sugar, ¼ cup water, 6 egg yolks, ⅛ tsp vanilla, 1½ cups unsalted butter",
      "1 cup chopped roasted cashews (for decoration)",
    ],
    steps: [
      "Mix ground cashews, chopped cashews, and flour; set aside.",
      "Beat egg whites and cream of tartar, adding sugar gradually to medium peaks; fold in the cashew-flour mix.",
      "Divide among four 8-inch pans and bake at 300°F for 35–40 minutes until golden.",
      "For the buttercream, boil sugar and water to 240°F and stream into beaten yolks; whisk until cool, then beat in butter until silky.",
      "Layer the meringue shells with buttercream and chopped cashews; frost the outside.",
      "Chill at least 2 hours (ideally overnight) before slicing.",
    ],
    notes: "Crisp cashew meringue + French buttercream. Chilling overnight lets the shells soften into that classic texture.",
    source: "https://salu-salo.com/sans-rival-cashew-meringue-cake/",
  },
  {
    id: "sans-rival-pistachio",
    dessert: "Sans Rival",
    type: "Modern",
    name: "Pistachio Sans Rival",
    category: "Layered meringue cake / Fusion",
    region: "Modern fusion",
    difficulty: "Hard",
    prep: "30 min",
    cook: "30 min",
    servings: "16",
    image: "images/sans-rival-pistachio.webp",
    ingredients: [
      "Meringue: 10 egg whites, ¾ tsp cream of tartar, 1 cup sugar, 1 cup chopped roasted pistachios",
      "Buttercream: 10 egg yolks, ⅔ cup sugar, 1 tbsp vanilla, pinch salt, 2 cups unsalted butter",
      "2 cups chopped roasted pistachios (for assembly)",
    ],
    steps: [
      "Whip egg whites with cream of tartar to soft peaks; add sugar gradually to stiff peaks; fold in pistachios.",
      "Pipe onto lined pans and bake at 320°F 30–40 minutes; leave in the turned-off oven 20 minutes, then cool.",
      "For the buttercream, whisk yolks, sugar, vanilla, and salt over simmering water to 155°F, then whip with butter until creamy.",
      "Layer the meringue with buttercream and pistachios; frost and coat the outside.",
      "Refrigerate at least 2 hours before serving.",
    ],
    notes: "A pistachio twist on sans rival, with a safer cooked-yolk buttercream. Keep the meringue chewy-crunchy.",
    source: "https://theunlikelybaker.com/the-best-pistachio-sans-rival/",
  },

  // ===== Brazo de Mercedes =====
  {
    id: "brazo-classic",
    dessert: "Brazo de Mercedes",
    type: "Traditional",
    name: "Classic Brazo de Mercedes",
    category: "Rolled meringue cake",
    region: "Nationwide",
    difficulty: "Medium",
    prep: "20 min",
    cook: "22 min",
    servings: "6",
    image: "images/brazo-classic.webp",
    ingredients: [
      "10 eggs (yolks and whites separated)",
      "½ tsp cream of tartar",
      "1 tsp vanilla extract",
      "¾ cup granulated sugar",
      "3 tbsp confectioners' sugar",
      "14 oz condensed milk",
    ],
    steps: [
      "Beat egg whites and cream of tartar to soft peaks; add sugar gradually to a glossy, semi-firm meringue.",
      "Spread on a greased, wax-paper-lined tray and bake at 350°F (175°C) 20–22 minutes until light brown.",
      "Meanwhile, cook egg yolks and condensed milk over low heat, stirring, until thickened; stir in vanilla.",
      "Dust the meringue with confectioners' sugar, invert, and peel off the paper.",
      "Spread the custard evenly, then roll tightly from the long side.",
      "Slice and serve chilled or at room temperature.",
    ],
    notes: "A delicate meringue roll filled with rich custard. Cream of tartar is essential for a stable meringue.",
    source: "https://panlasangpinoy.com/brazo-de-mercedes-cake-recipe/",
  },
  {
    id: "brazo-ube",
    dessert: "Brazo de Mercedes",
    type: "Modern",
    name: "Ube Brazo de Mercedes",
    category: "Rolled meringue cake / Fusion",
    region: "Modern fusion",
    difficulty: "Medium",
    prep: "20 min",
    cook: "40 min",
    servings: "8",
    image: "images/brazo-ube.webp",
    ingredients: [
      "Ube custard: 10 egg yolks, 7 oz condensed milk, 1 cup whole milk, 1 tbsp ube extract, 1 cup ube halaya, 4 tbsp butter",
      "Meringue: 10 egg whites, 1 tsp cream of tartar, ¾ cup sugar, powdered sugar (for dusting)",
    ],
    steps: [
      "Make the ube custard: whisk all custard ingredients over a double boiler 30–40 minutes until thick and spreadable.",
      "Beat egg whites and cream of tartar, adding sugar to soft peaks.",
      "Spread the meringue ¼-inch thick on a parchment-lined sheet pan; bake at 350°F (175°C) ~20 minutes until light golden.",
      "Cool, dust with powdered sugar, and invert; peel off the parchment.",
      "Spread the ube custard, leaving a ¼-inch border, and roll tightly.",
      "Refrigerate 1 hour, trim the ends, and serve.",
    ],
    notes: "Purple yam custard rolled into a light meringue log. Don't overcook the custard or it gets hard to spread.",
    source: "https://www.cookingwithkurt.com/recipes/ube-brazo-de-mercedes",
  },

  // ===== Buko Pandan =====
  {
    id: "buko-pandan-classic",
    dessert: "Buko Pandan",
    type: "Traditional",
    name: "Classic Buko Pandan",
    category: "Fruit salad / No-bake",
    region: "Bohol origin",
    difficulty: "Easy",
    prep: "15 min",
    cook: "10 min",
    servings: "6",
    image: "images/buko-pandan-classic.webp",
    ingredients: [
      "1 frozen pandan leaf (tied in a knot)",
      "1½ cups coconut water",
      "½ cup granulated sugar",
      "1 tsp agar-agar powder",
      "Green food coloring (optional)",
      "1 (14 oz) can sweetened condensed milk",
      "1 (7.6 oz) can table cream (or 1 cup light cream)",
      "¼ tsp kosher salt",
      "¼ tsp pandan extract",
      "1 (12 oz) jar nata de coco",
      "1 (12 oz) jar kaong (sugar palm fruit)",
      "1 (20 oz) can young coconut meat in syrup",
    ],
    steps: [
      "Simmer the pandan knot, coconut water, sugar, and agar-agar until dissolved; boil 2 minutes, add green coloring, and pour into a pan.",
      "Chill the jelly ~1 hour, then cut into cubes.",
      "Whisk condensed milk, table cream, salt, and pandan extract until smooth.",
      "Drain and add nata de coco, kaong, and diced young coconut.",
      "Fold in the jelly cubes, cover, and refrigerate at least 2 hours. Serve cold.",
    ],
    notes: "The textural trio — chewy jelly, coconut, and palm fruit — in a sweet cream. The green gulaman is what makes it pandan.",
    source: "https://www.thekitchn.com/buko-pandan-recipe-23471012",
  },
  {
    id: "buko-pandan-cheesecake",
    dessert: "Buko Pandan",
    type: "Modern",
    name: "Pandan Swirl Cheesecake",
    category: "Cheesecake / Fusion",
    region: "Modern fusion",
    difficulty: "Easy",
    prep: "20 min",
    cook: "40 min",
    servings: "4",
    image: "images/buko-pandan-cheesecake.webp",
    ingredients: [
      "2 packages cream cheese",
      "½ cup sugar",
      "½ tsp vanilla",
      "¼ tsp pandan extract",
      "2 eggs",
      "1 premade graham cracker crust",
    ],
    steps: [
      "Preheat oven to 325°F.",
      "Mix cream cheese, sugar, eggs, and vanilla until smooth.",
      "Scoop out ¼ cup batter and mix in the pandan extract.",
      "Pour the plain batter into the crust and spread.",
      "Add dots or swirls of the pandan batter and swirl with a knife or toothpick.",
      "Bake 40–42 minutes, cool on a rack, then refrigerate overnight before serving.",
    ],
    notes: "An easy pandan-swirl cheesecake on a graham crust — a no-fuss, no-water-bath riff on the buko pandan flavor.",
    source: "https://jenhdao.com/pandan-swirl-cheesecake/",
  },

  // ===== Ginataang Bilo-Bilo =====
  {
    id: "ginataang-classic",
    dessert: "Ginataang Bilo-Bilo",
    type: "Traditional",
    name: "Classic Ginataang Bilo-Bilo",
    category: "Coconut soup dessert",
    region: "Nationwide",
    difficulty: "Easy",
    prep: "5 min",
    cook: "20 min",
    servings: "6",
    image: "images/ginataang-classic.webp",
    ingredients: [
      "2 cups glutinous rice flour",
      "1 cup water (for dough)",
      "2–3 cups water (for base)",
      "1 can (2400 ml) coconut milk or cream",
      "1½ cups cooked tapioca pearls",
      "¾ cup sugar",
      "2 large sweet potatoes, peeled & cubed",
      "4 saba (plantain) bananas, cubed",
      "1 cup jackfruit, sliced",
    ],
    steps: [
      "Mix glutinous rice flour and 1 cup water into a dough; roll into small balls.",
      "Boil 2 cups water, coconut milk, and sugar; add sweet potato and cook 3 minutes.",
      "Add banana and cook 3 more minutes.",
      "Add the rice balls and simmer ~5 minutes until they float.",
      "Add jackfruit and tapioca pearls; simmer 3–5 minutes. Serve hot or cold.",
    ],
    notes: "A hearty coconut stew of rice balls, tubers, and fruit. The rice balls are done when they float.",
    source: "https://www.foxyfolksy.com/ginataang-bilo-bilo-sticky-rice-balls-in-coco-milk/",
  },
  {
    id: "ginataang-langka",
    dessert: "Ginataang Bilo-Bilo",
    type: "Modern",
    name: "Ginataang Bilo-Bilo with Langka",
    category: "Coconut soup dessert",
    region: "Nationwide",
    difficulty: "Easy",
    prep: "10 min",
    cook: "35 min",
    servings: "6",
    image: "images/ginataang-langka.webp",
    ingredients: [
      "20 glutinous rice balls (bilo-bilo)",
      "20 oz ripe jackfruit, sliced",
      "2 cups water",
      "2 cups coconut cream",
      "¾ cup granulated sugar",
      "1½ cups cooked sago (tapioca) pearls",
    ],
    steps: [
      "Boil water in a pot, then add coconut cream and return to a boil.",
      "Stir in sugar until dissolved.",
      "Add the jackfruit and simmer on low-medium heat 15 minutes to infuse.",
      "Add the bilo-bilo rice balls and cook 15 more minutes, stirring every 3 minutes.",
      "Add cooked sago and cook 3–5 minutes. Serve warm or chilled.",
    ],
    notes: "A jackfruit-forward bilo-bilo — the langka steeps into the coconut for deep flavor. Use pre-cooked sago to save time.",
    source: "https://panlasangpinoy.com/ginataang-bilo-bilo-langka-recipe/",
  },

  // ===== Palitaw =====
  {
    id: "palitaw-classic",
    dessert: "Palitaw",
    type: "Traditional",
    name: "Classic Palitaw",
    category: "Rice cake (kakanin)",
    region: "Nationwide",
    difficulty: "Easy",
    prep: "10 min",
    cook: "10 min",
    servings: "10",
    image: "images/palitaw-classic.webp",
    ingredients: [
      "1 cup glutinous rice flour",
      "½ cup water or coconut milk",
      "1 cup grated coconut",
      "¼ cup sugar",
      "⅛ cup roasted sesame seeds (optional)",
    ],
    steps: [
      "Mix glutinous rice flour and water (or coconut milk) into a soft dough.",
      "Form 1-inch balls and flatten to ¼-inch discs.",
      "Boil water; drop in the discs and remove with a slotted spoon when they float.",
      "Drain well, then roll each in a mix of grated coconut and sugar.",
      "Sprinkle with sesame seeds and serve.",
    ],
    notes: "\"Palitaw\" means \"to surface\" — the cakes are done when they float. Coconut milk in the dough adds flavor.",
    source: "https://www.foxyfolksy.com/palitaw-recipe/",
  },
  {
    id: "palitaw-ube",
    dessert: "Palitaw",
    type: "Modern",
    name: "Ube Palitaw",
    category: "Rice cake (kakanin) / Fusion",
    region: "Modern fusion",
    difficulty: "Easy",
    prep: "25 min",
    cook: "20 min",
    servings: "12",
    image: "images/palitaw-ube.webp",
    ingredients: [
      "¼ cup white sesame seeds",
      "¼ cup granulated sugar",
      "2 cups mochiko sweet rice flour (plus extra for rolling)",
      "1 cup water",
      "¼ tsp ube extract",
      "1 cup unsweetened shredded coconut",
    ],
    steps: [
      "Toast sesame seeds until golden, then coarsely crush and mix with the sugar.",
      "Knead mochiko and water into a smooth dough; knead the ube extract into half for the purple variation.",
      "Divide into 12 pieces, roll into balls, and flatten into 2-inch discs.",
      "Boil the discs in batches until they float (~4 minutes); blot gently.",
      "Toss each warm cake in shredded coconut and sprinkle with the sesame sugar.",
    ],
    notes: "A festive purple palitaw with toasted sesame sugar. The ube extract is optional but makes it pop.",
    source: "https://www.thekitchn.com/palitaw-rice-cakes-recipe-23449279",
  },

  // ===== Pichi-Pichi =====
  {
    id: "pichi-pichi-classic",
    dessert: "Pichi-Pichi",
    type: "Traditional",
    name: "Classic Pichi-Pichi",
    category: "Steamed cassava (kakanin)",
    region: "Nationwide",
    difficulty: "Medium",
    prep: "10 min",
    cook: "1 hr",
    servings: "scalable",
    image: "images/pichi-pichi-classic.webp",
    ingredients: [
      "2 cups grated cassava",
      "1 cup sugar",
      "2 cups water",
      "1 cup grated coconut",
      "½ tsp lye water",
      "½ tsp buko-pandan essence",
    ],
    steps: [
      "Mix cassava, sugar, and water thoroughly.",
      "Add lye water while stirring, then mix in the buko-pandan essence.",
      "Pour into individual cup molds and steam 45 minutes to 1 hour until translucent.",
      "Cool at least 40 minutes, unmold, and roll each piece in grated coconut.",
    ],
    notes: "A gelatinous cassava dessert with a subtle pandan note. Steam until the color turns translucent.",
    source: "https://panlasangpinoy.com/filipino-asian-dessert-cassava-pichi-pichi-recipe/",
  },
  {
    id: "pichi-pichi-ube",
    dessert: "Pichi-Pichi",
    type: "Modern",
    name: "Ube Pichi-Pichi",
    category: "Steamed cassava / Fusion",
    region: "Modern fusion",
    difficulty: "Medium",
    prep: "10 min",
    cook: "1 hr",
    servings: "scalable",
    image: "images/pichi-pichi-ube.webp",
    ingredients: [
      "28 oz grated cassava (≈2½ cups)",
      "2 cups water",
      "1 cup granulated sugar",
      "1 tsp food-grade lye water",
      "1–2 tsp ube flavoring",
      "¾ cup grated coconut (for coating)",
    ],
    steps: [
      "Combine all ingredients except the coconut and stir until well blended.",
      "Pour into small silicone molds and arrange in a steamer.",
      "Steam for 60 minutes.",
      "Cool completely until the texture turns sticky.",
      "Roll each piece in grated coconut and serve.",
    ],
    notes: "A purple ube pichi-pichi — same chewy cassava texture, ube flavor, finished in coconut.",
    source: "https://panlasangpinoy.com/ube-pichi-pichi-recipe/",
  },

  // ===== Mamon =====
  {
    id: "mamon-classic",
    dessert: "Mamon",
    type: "Traditional",
    name: "Butter Mamon",
    category: "Chiffon / Sponge cake",
    region: "Nationwide (Goldilocks classic)",
    difficulty: "Medium",
    prep: "20 min",
    cook: "25 min",
    servings: "12",
    image: "images/mamon-classic.webp",
    ingredients: [
      "Yolk mix: 5 egg yolks, ⅓ cup oil, ⅓ cup milk, ⅓ cup sugar, 1¼ cups cake flour, 1 tsp baking powder, ¼ tsp salt",
      "Meringue: 5 egg whites, ½ tsp cream of tartar, ⅓ cup sugar",
      "Topping: melted butter, granulated sugar, optional grated cheese",
    ],
    steps: [
      "Whisk yolks, oil, milk, and sugar; sift in flour, baking powder, and salt, and combine.",
      "Beat egg whites and cream of tartar, adding sugar gradually to stiff peaks.",
      "Fold the meringue into the yolk batter in two additions.",
      "Spoon into ungreased molds and bake at 350°F 20–25 minutes until golden.",
      "Cool, brush with melted butter, and dip in sugar (and cheese if using).",
    ],
    notes: "Mini chiffon cakes — do not grease the molds, or they can't grip to rise. Mamon deflates slightly; that's normal.",
    source: "https://theunlikelybaker.com/filipino-mamon-recipe/",
  },
  {
    id: "mamon-ube",
    dessert: "Mamon",
    type: "Modern",
    name: "Ube Mamon",
    category: "Chiffon / Sponge cake / Fusion",
    region: "Modern fusion",
    difficulty: "Medium",
    prep: "20 min",
    cook: "20 min",
    servings: "12",
    image: "images/mamon-ube.webp",
    ingredients: [
      "2 cups all-purpose flour",
      "1 tbsp baking powder",
      "8 large eggs (yolks and whites separated)",
      "1 cup sugar",
      "½ cup milk",
      "6 tbsp oil",
      "4 tsp ube flavoring",
      "½ tsp cream of tartar",
    ],
    steps: [
      "Preheat oven to 350°F. Combine flour and baking powder; set aside.",
      "Beat yolks until light, add ½ cup sugar, then milk, oil, and ube flavoring; fold in the flour mix.",
      "Whisk egg whites with cream of tartar, adding the remaining sugar to firm peaks.",
      "Fold the meringue into the yolk batter gently.",
      "Spoon into large muffin molds ⅔ full and bake 17–20 minutes until a toothpick comes out clean.",
    ],
    notes: "Moist, fluffy ube sponge cakes. Separate the eggs cold and let the whites rest 30 minutes for maximum volume.",
    source: "https://www.kawalingpinoy.com/ube-mamon/",
  },

  // ===== Buko Pie =====
  {
    id: "buko-pie-classic",
    dessert: "Buko Pie",
    type: "Traditional",
    name: "Classic Buko Pie",
    category: "Pie / Coconut",
    region: "Laguna, Batangas, Tagaytay",
    difficulty: "Medium",
    prep: "30 min",
    cook: "55 min",
    servings: "6",
    image: "images/buko-pie-classic.webp",
    ingredients: [
      "Crust: 2 cups all-purpose flour, ⅓ cup butter, 1 tsp salt, ⅓ cup shortening, 6–8 tbsp cold water",
      "Filling: 2 cups young coconut meat, ¾ cup sugar, ½ cup cornstarch (in ½ cup coconut water), ½ cup evaporated milk",
    ],
    steps: [
      "Make the crust: cut butter and shortening into flour and salt, add cold water, and form a dough; divide in two and roll out.",
      "Line a pie pan with the bottom crust.",
      "Boil evaporated milk, stir in sugar, add coconut meat and cook 3 minutes, then stir in the cornstarch slurry until thickened; cool.",
      "Fill the crust, cover with the top crust, and seal the edges; prick the top with a fork.",
      "Bake at 375°F (190°C) 45–55 minutes until golden. Cool before serving.",
    ],
    notes: "The classic pasalubong pie from Laguna. Prick the top crust so steam can escape.",
    source: "https://panlasangpinoy.com/coconut-buko-pie-recipe/",
  },
  {
    id: "buko-pie-ube",
    dessert: "Buko Pie",
    type: "Modern",
    name: "Ube Buko Pie",
    category: "Pie / Fusion",
    region: "Modern fusion",
    difficulty: "Medium",
    prep: "30 min",
    cook: "1 hr",
    servings: "8",
    image: "images/buko-pie-ube.webp",
    ingredients: [
      "2 sheets ready-made flaky pastry",
      "4 young coconuts",
      "½ cup white sugar",
      "½ cup cornstarch",
      "½ cup young coconut water",
      "⅔ cup evaporated milk",
      "1 cup ube jam",
    ],
    steps: [
      "Open the coconuts, reserve the water, and scrape out the meat.",
      "Heat evaporated milk and sugar until dissolved; add coconut meat and cook 2 minutes.",
      "Stir in the cornstarch (dissolved in coconut water) until thickened; cool.",
      "Line a 9-inch pan with pastry and blind-bake at 428°F (220°C) for 15 minutes.",
      "Spread ube jam over the base, top with the coconut filling, and add the top crust (lattice optional).",
      "Bake at 374°F (190°C) ~50 minutes until golden.",
    ],
    notes: "A coconut-and-purple-yam fusion in flaky pastry. Cover the edges with foil to prevent burning.",
    source: "https://www.angsarap.net/2023/11/02/ube-buko-pie/",
  },

  // ===== Ensaymada =====
  {
    id: "ensaymada-classic",
    dessert: "Ensaymada",
    type: "Traditional",
    name: "Classic Ensaymada",
    category: "Sweet bread / Brioche",
    region: "Bulacan (Spanish influence)",
    difficulty: "Hard",
    prep: "45 min",
    cook: "20 min",
    servings: "16",
    image: "images/ensaymada-classic.webp",
    ingredients: [
      "Dough: 1 cup milk, ⅓ cup sugar, ½ cup shortening, 1 envelope yeast, 3½ cups flour, 3 egg yolks, ¼ tbsp salt, ¼ cup butter",
      "Topping: ½ cup butter, ½ cup powdered sugar, 1 cup grated cheese",
    ],
    steps: [
      "Mix milk, shortening, sugar, and salt; add half the flour and bloomed yeast, mixing into a paste.",
      "Add egg yolks and remaining flour; mix 3 minutes. Cover and let rise 2–3 hours until doubled.",
      "Divide into 16 pieces; roll each into an 8×4 rectangle, brush with butter, and coil into spirals.",
      "Place in greased molds and let rise 30–60 minutes until almost doubled.",
      "Bake at 300°F (150°C) 20–25 minutes; cool, then frost with buttercream and top with cheese.",
    ],
    notes: "Soft, pillowy, buttery buns — the dough is meant to be sticky. Don't over-rise.",
    source: "https://www.foxyfolksy.com/ensaymada-recipe/",
  },
  {
    id: "ensaymada-ube",
    dessert: "Ensaymada",
    type: "Modern",
    name: "Ube Ensaymada",
    category: "Sweet bread / Fusion",
    region: "Modern fusion",
    difficulty: "Hard",
    prep: "30 min",
    cook: "20 min",
    servings: "12",
    image: "images/ensaymada-ube.webp",
    ingredients: [
      "Yeast: ½ cup warm water, 2¼ tsp yeast, 1 tsp sugar",
      "Milk mix: ½ cup milk, ¼ cup sugar, 1 tsp salt, ¼ cup butter",
      "Dough: 2 eggs, 4 cups flour, 1 tbsp oil",
      "Filling/topping: 18 oz ube halaya, melted butter, sugar, sharp cheddar cheese",
    ],
    steps: [
      "Proof the yeast in warm water and sugar ~10 minutes until bubbly.",
      "Warm the milk with sugar, salt, and butter; cool to lukewarm.",
      "Combine yeast, milk mix, eggs, and flour; knead 8–10 minutes until elastic.",
      "Let rise ~1 hour until doubled; divide into 12 pieces.",
      "Flatten each, spread 2–3 tbsp ube halaya, roll tight, and coil into spirals in molds.",
      "Rise 30 minutes, then bake at 375°F for 20 minutes; brush with butter, top with sugar and cheese.",
    ],
    notes: "Ensaymada filled with real ube halaya and crowned with cheddar. Knead to the windowpane stage.",
    source: "https://theunlikelybaker.com/ube-ensaymada-easy-recipe-tips-and-more/",
  },

  // ===== Silvanas =====
  {
    id: "silvanas-classic",
    dessert: "Silvanas",
    type: "Traditional",
    name: "Classic Silvanas",
    category: "Frozen cookie (dacquoise)",
    region: "Nationwide",
    difficulty: "Hard",
    prep: "30 min",
    cook: "30 min",
    servings: "16",
    image: "images/silvanas-classic.webp",
    ingredients: [
      "Meringue: 5 egg whites, ½ tsp cream of tartar, ½ cup sugar, 1 cup ground cashews",
      "Buttercream: 5 egg yolks, ⅓ cup + 1 tsp sugar, 2 tsp vanilla, pinch salt, 1 cup butter",
      "Coating: 1 cup graham cracker crumbs, ½ cup ground cashews",
    ],
    steps: [
      "Whip egg whites and cream of tartar to soft peaks; add sugar to stiff peaks; fold in ground cashews.",
      "Pipe onto a lined sheet and bake at 300°F 20 minutes; leave in the oven 10 more minutes, then cool.",
      "Cook yolks, sugar, vanilla, and salt over a double boiler to 155°F, then whip with butter into buttercream.",
      "Sandwich two meringue cookies with buttercream, then coat the sides in the crumb-cashew mix.",
      "Freeze to set before serving.",
    ],
    notes: "Cashew meringue sandwiches with French buttercream, coated in crumbs and served frozen — sans rival's cookie cousin.",
    source: "https://theunlikelybaker.com/silvanas-recipe-sylvanas-cookies/",
  },
  {
    id: "silvanas-ube",
    dessert: "Silvanas",
    type: "Modern",
    name: "Ube Silvanas",
    category: "Frozen cookie / Fusion",
    region: "Modern fusion",
    difficulty: "Hard",
    prep: "40 min",
    cook: "20 min",
    servings: "13",
    image: "images/silvanas-ube.webp",
    ingredients: [
      "Wafers: 6 egg whites, ½ tsp cream of tartar, ⅔ cup sugar, 1 cup roasted cashews, ¼ cup flour, 1 tsp vanilla",
      "Buttercream: ½ cup sugar, 3 tbsp water, 5 egg yolks, 8 oz butter, a few drops ube extract",
      "Coating: 2 cups roasted cashews (ground), 1 cup graham cracker crumbs",
    ],
    steps: [
      "Blend cashews and flour into crumbs; whip egg whites with cream of tartar to stiff peaks, then fold in the cashew mix and vanilla.",
      "Pipe into circles and bake at 325°F 17–20 minutes until lightly golden.",
      "Boil sugar and water to 238°F and stream into beaten yolks; beat in butter, then add ube extract for the purple buttercream.",
      "Sandwich wafers with the ube buttercream; coat in cashews and graham crumbs.",
      "Freeze 1–2 hours before serving.",
    ],
    notes: "Ube-flavored buttercream turns this frozen classic purple. Add ube extract to the crumb coating for extra color.",
    source: "https://www.kawalingpinoy.com/silvanas/",
  },

  // ===== Suman =====
  {
    id: "suman-classic",
    dessert: "Suman",
    type: "Traditional",
    name: "Suman Malagkit",
    category: "Rice cake (kakanin)",
    region: "Nationwide",
    difficulty: "Medium",
    prep: "10 min",
    cook: "1 hr",
    servings: "16",
    image: "images/suman-classic.webp",
    ingredients: [
      "2 cups glutinous rice",
      "2 cups coconut milk",
      "½ cup sugar",
      "Pinch of salt",
      "Young banana leaves (cut into 9×6-inch pieces)",
    ],
    steps: [
      "Rinse the rice. Simmer coconut milk, sugar, and salt; add rice and cook until liquid is absorbed (almost cooked).",
      "Cool slightly, then scoop 2–3 tbsp onto a banana leaf.",
      "Roll into a log and fold the ends inward; tie with twine.",
      "Steam, folded side down, 45 minutes to 1 hour with a weight on top.",
      "Cool completely, unwrap, and serve with sugar, latik, or ripe mango.",
    ],
    notes: "Steamed sticky rice in banana leaf — the simplest of the kakanin. Don't fully cook the rice before steaming.",
    source: "https://www.foxyfolksy.com/suman-malagkit/",
  },
  {
    id: "suman-mango",
    dessert: "Suman",
    type: "Modern",
    name: "Mango Suman Sushi",
    category: "Fusion dessert",
    region: "Filipino-Japanese fusion",
    difficulty: "Easy",
    prep: "10 min",
    cook: "10 min",
    servings: "4",
    image: "images/suman-mango.webp",
    ingredients: [
      "1 cup sesame seeds (black and white)",
      "80 g muscovado sugar",
      "4 pieces suman sa ibus or suman malagkit",
      "2 mangoes, diced small",
      "50 g white sugar",
      "10 ml Chinese wine or rum (optional, for flambé)",
    ],
    steps: [
      "Roast sesame seeds 2–3 minutes; cool and mix with the muscovado sugar.",
      "Coat the suman in the sesame-sugar mix and cut into sushi-sized pieces.",
      "Caramelize white sugar and water, add the mangoes, and flambé (optional).",
      "Top each suman piece with the caramelized mango and serve immediately.",
    ],
    notes: "A party-ready fusion — sesame-crusted suman topped with caramelized mango. Best assembled the day it's served.",
    source: "https://www.yummy.ph/recipe/mango-suman-sushi-recipe-a2044-20230222",
  },

  // ===== Mais con Yelo =====
  {
    id: "mais-con-yelo-classic",
    dessert: "Mais con Yelo",
    type: "Traditional",
    name: "Classic Mais con Yelo",
    category: "Shaved ice",
    region: "Nationwide",
    difficulty: "Easy",
    prep: "15 min",
    cook: "0 min",
    servings: "6",
    image: "images/mais-con-yelo-classic.webp",
    ingredients: [
      "1 (12 oz) can whole kernel sweet corn",
      "1 (13 oz) can creamed corn",
      "Sweetened condensed milk (to taste)",
      "Shaved or crushed ice",
      "Evaporated milk (to taste)",
    ],
    steps: [
      "Drain the corn. Layer 2 tbsp whole corn and 2 tbsp creamed corn in a glass.",
      "Add 1–2 tsp condensed milk.",
      "Fill the glass with shaved ice.",
      "Pour evaporated milk over the top, just enough to wet the ice.",
      "Mix and serve immediately.",
    ],
    notes: "Corn, milk, and ice — the simplest of the halo-halo family. Optional: top with cornflakes or ice cream.",
    source: "https://theunlikelybaker.com/mais-con-yelo-filipino-sweet-corn-dessert/",
  },
  {
    id: "mais-con-yelo-especial",
    dessert: "Mais con Yelo",
    type: "Modern",
    name: "Mais con Yelo Especial",
    category: "Shaved ice / Fusion",
    region: "Modern fusion",
    difficulty: "Easy",
    prep: "15 min",
    cook: "0 min",
    servings: "6",
    image: "images/mais-con-yelo-especial.webp",
    ingredients: [
      "1 (12 oz) can whole kernel sweet corn",
      "1 (13 oz) can creamed corn",
      "Sweetened condensed milk (to taste)",
      "Shaved or crushed ice",
      "Evaporated milk (to taste)",
      "Toppings: ube ice cream, leche flan, cornflakes, ube jam",
    ],
    steps: [
      "Layer whole corn and creamed corn in a tall glass with a little condensed milk.",
      "Fill with shaved ice and drizzle with evaporated milk.",
      "Crown with a scoop of ube ice cream, a slice of leche flan, and a sprinkle of cornflakes.",
      "Optionally swirl in ube jam. Mix and serve immediately.",
    ],
    notes: "The dressed-up version — ube ice cream, leche flan, and cornflakes turn a humble corn dessert into a layered treat.",
    source: "https://theunlikelybaker.com/mais-con-yelo-filipino-sweet-corn-dessert/",
  },
{
  "id": "adobo-fried-rice",
  "dish": "Adobo",
  "kind": "Savory",
  "type": "Modern",
  "name": "Adobo Fried Rice",
  "category": "Fried rice",
  "region": "Nationwide",
  "difficulty": "Easy",
  "prep": "5 min",
  "cook": "10 min",
  "servings": "4",
  "image": "images/adobo-fried-rice.webp",
  "ingredients": [
    "1 tablespoon oil",
    "3 cloves garlic, minced",
    "Cooked rice, day-old and chilled (grains separated)",
    "Leftover chicken or pork adobo, shredded into small pieces",
    "Salt, to taste",
    "Green onion, sliced thin (optional)",
    "Soy sauce, for color (optional)"
  ],
  "steps": [
    "Heat oil in a wok over medium heat and cook the garlic until nicely browned but not burned.",
    "Add the shredded adobo (plus any leftover sauce) and cook until heated through.",
    "Mix in the day-old rice and stir-fry until heated through; season with salt to taste.",
    "Add a splash of soy sauce for color, if desired; garnish with green onions.",
    "Serve immediately with a fried egg or two for a complete meal (adsilog)."
  ],
  "notes": "The classic way to repurpose leftover adobo. With fried eggs it becomes 'adsilog' — a Filipino breakfast. Garlic-infused oil is the foundation of good fried rice.",
  "source": "https://www.manilaspoon.com/adobo-fried-rice/"
},
{
  "id": "sinigang-salmon-miso",
  "dish": "Sinigang",
  "kind": "Savory",
  "type": "Modern",
  "name": "Sinigang na Salmon sa Miso",
  "category": "Sour soup (fish)",
  "region": "Nationwide",
  "difficulty": "Easy",
  "prep": "10 min",
  "cook": "35 min",
  "servings": "4",
  "image": "images/sinigang-salmon-miso.webp",
  "ingredients": [
    "3 salmon heads, cut in half lengthwise",
    "2 packs (25g each) Knorr Sinigang na May Miso mix",
    "1 bunch mustard leaves, cut into lengths",
    "12 pieces okra, stems trimmed",
    "2 medium tomatoes, wedged",
    "2 medium onions, wedged",
    "3 long green peppers (siling pansigang)",
    "2 to 3 tablespoons fish sauce (patis)",
    "1/2 teaspoon ground black pepper",
    "6 to 8 cups water"
  ],
  "steps": [
    "Boil the water in a pot; add the onion and tomato and bring back to a boil.",
    "Add the salmon heads; once boiling again, stir in the sinigang sa miso mix.",
    "Add the long green peppers, cover, and cook over medium heat 12 minutes.",
    "Add the okra, black pepper, and fish sauce; cover and cook 5 minutes.",
    "Add the mustard leaves and cook 3 to 5 minutes until wilted.",
    "Serve hot with rice and fish sauce with chili on the side."
  ],
  "notes": "Miso gives the sour tamarind broth extra depth. The prized part is the tender cheek meat — keep the boil gentle so it doesn't fall off the bone.",
  "source": "https://panlasangpinoy.com/sinigang-na-salmon-sa-miso/"
},
{
  "id": "pork-belly-lechon-roll",
  "dish": "Lechon",
  "kind": "Savory",
  "type": "Modern",
  "name": "Crispy Pork Belly Lechon Roll",
  "category": "Roasted pork",
  "region": "Nationwide (Noche Buena)",
  "difficulty": "Hard",
  "prep": "30 min",
  "cook": "6 hr",
  "servings": "12",
  "image": "images/pork-belly-lechon-roll.webp",
  "ingredients": [
    "1 whole pork belly, boneless and without ribs (6 to 7 lbs)",
    "2 tablespoons coarse salt",
    "1/2 teaspoon pepper",
    "1/2 cup vinegar",
    "3 stalks lemongrass",
    "4 shallots, thinly sliced",
    "1 head garlic, crushed"
  ],
  "steps": [
    "Poke the skin all over with a small knife (without piercing the meat).",
    "Massage the vinegar into the belly, then season with salt and pepper.",
    "Place the belly skin-side down; arrange lemongrass, shallots, and garlic along the lower edge.",
    "Roll into a tight log, skin side out, and tie with kitchen twine in 3 to 4 places.",
    "Refrigerate uncovered overnight to dry the skin, then pat completely dry.",
    "Roast on a rack at 180°F for 3 1/2 hours, raise to 320°F for 1 1/2 to 2 hours, then finish at 430°F for 30 to 40 minutes until the skin is very crisp.",
    "Rest 10 to 15 minutes before slicing; pull out the lemongrass stalks first."
  ],
  "notes": "A Filipino-style porchetta — the no-whole-pig way to get lechon's shatter-crisp skin and moist meat. Good for much less than a whole suckling pig.",
  "source": "https://www.kawalingpinoy.com/pork-belly-lechon-roll/"
},
{
  "id": "crispy-kare-kare",
  "dish": "Kare-Kare",
  "kind": "Savory",
  "type": "Modern",
  "name": "Crispy Kare-Kare",
  "category": "Peanut stew (crispy)",
  "region": "Nationwide",
  "difficulty": "Medium",
  "prep": "30 min",
  "cook": "1 hr",
  "servings": "6",
  "image": "images/crispy-kare-kare.webp",
  "ingredients": [
    "4 lbs pork belly",
    "5 cups water (to boil pork)",
    "3 tablespoons salt",
    "3 cups cooking oil (for frying)",
    "2 cups roasted peanuts, ground to a paste",
    "1 Knorr pork cube",
    "1/2 cup annatto seeds (for annatto water)",
    "1 onion, chopped",
    "3 cloves garlic, minced",
    "1 1/2 tablespoons toasted rice powder",
    "2 cups water (for sauce)",
    "2 bunches pechay",
    "1 Chinese eggplant, sliced",
    "12 pieces string beans",
    "1 cup banana blossoms, sliced",
    "1/2 cup bagoong alamang, for serving"
  ],
  "steps": [
    "Boil the pork belly 35 minutes, drain, cool, rub all over with salt, and rest 5 minutes.",
    "Deep-fry the pork, skin-side down, splashing 1 1/2 tablespoons water on the oil every 3 minutes until the skin is golden and very crispy; flip and finish the other side.",
    "Make annatto water by soaking the seeds in hot water 5 minutes, then straining.",
    "Sauté garlic and onion until soft, add the peanut paste and cook 1 minute, then add water, the pork cube, and annatto water; simmer to desired thickness and stir in the toasted rice powder.",
    "Steam the string beans, banana blossoms, and eggplant 5 minutes, then the pechay 2 to 3 minutes.",
    "Plate the sauce and steamed vegetables, top with the crispy pork, and serve with bagoong and rice."
  ],
  "notes": "The crunchy pork belly gives the classic peanut stew a whole new texture. The recipe has enough salt and richness to be a headline event at any gathering.",
  "source": "https://panlasangpinoy.com/crispy-kare-kare-recipe/"
},
{
  "id": "sisig-tacos",
  "dish": "Sisig",
  "kind": "Savory",
  "type": "Modern",
  "name": "Chicken Sisig Tacos",
  "category": "Fusion / Tacos",
  "region": "Modern fusion",
  "difficulty": "Medium",
  "prep": "25 min",
  "cook": "20 min",
  "servings": "10",
  "image": "images/sisig-tacos.webp",
  "ingredients": [
    "3 lbs bone-in chicken breast or thighs",
    "1 tablespoon kosher salt",
    "3 dried chile de árbol",
    "3 cloves garlic (plus 5 more cloves, minced)",
    "2 bay leaves",
    "2 teaspoons black peppercorns",
    "2 tablespoons oil",
    "1 tablespoon unsalted butter",
    "1/2 red onion, finely chopped",
    "1 red, orange, or yellow bell pepper, finely chopped",
    "1-inch ginger, peeled and grated",
    "3/4 teaspoon smoked paprika",
    "1/2 cup lime juice",
    "1/3 cup pineapple juice",
    "1/4 cup red wine vinegar",
    "1/4 cup low-sodium soy sauce",
    "1 to 2 serrano chiles, sliced (optional)",
    "10 corn tortillas",
    "Cilantro crema (yogurt, lime, cilantro, scallion)"
  ],
  "steps": [
    "Poach the chicken with salt, chiles, garlic cloves, bay leaves, and peppercorns for 15 to 20 minutes until cooked; shred and set aside.",
    "Heat oil over medium-high and crisp the shredded chicken in a pan; remove to a plate.",
    "Add butter, onion, and bell pepper; cook until softened. Add the minced garlic, ginger, paprika, and black pepper; cook 30 seconds.",
    "Pour in the pineapple juice, lime juice, vinegar, and soy sauce; reduce by two-thirds.",
    "Stir in the crispy chicken and sliced chiles; cook until the sauce just coats the pan.",
    "Serve in warmed tortillas topped with cilantro crema, a squeeze of lime, and chile-garlic sauce."
  ],
  "notes": "A deliberate riff inspired by the Señor Sisig food truck — chicken (instead of pork) and poached (instead of fried), but the sour-savory sisig essence stays.",
  "source": "https://saltandwind.com/sisig-chicken-tacos-recipe/"
},
{
  "id": "crispy-pata-kare-kare",
  "dish": "Crispy Pata",
  "kind": "Savory",
  "type": "Modern",
  "name": "Crispy Pata Kare-Kare",
  "category": "Peanut stew (fusion)",
  "region": "Nationwide",
  "difficulty": "Hard",
  "prep": "30 min",
  "cook": "1 hr 45 min",
  "servings": "6",
  "image": "images/crispy-pata-kare-kare.webp",
  "ingredients": [
    "4 lbs pork hock (pata)",
    "3 quarts water (plus 2 cups for sauce)",
    "1 tablespoon + 2 teaspoons salt",
    "7 dried bay leaves",
    "1 tablespoon whole peppercorn",
    "3 cups cooking oil (for frying)",
    "1 1/4 cups peanut paste",
    "1 Knorr pork cube",
    "2 tablespoons annatto powder",
    "1 onion, chopped",
    "4 cloves garlic, minced",
    "2 bunches bok choy",
    "2 Chinese eggplant, sliced",
    "10 string beans, cut into 2-inch pieces",
    "18 oz banana blossoms (canned), drained",
    "1/2 cup bagoong alamang, for serving"
  ],
  "steps": [
    "Boil the pork hock with water, salt, bay leaves, and peppercorn for 1 hour until tender; remove, cool, rub with salt, and air-dry 30 minutes.",
    "Sauté garlic and onion in oil; add the peanut paste and cook 1 minute, then add water, the pork cube, and annatto powder. Simmer to a thick consistency and season to taste.",
    "Deep-fry the boiled pork hock until golden and crispy on both sides; drain, cool, and debone.",
    "Steam the bok choy, eggplant, string beans, and banana blossoms for 3 to 5 minutes.",
    "Pour half the sauce into a serving bowl, arrange the vegetables around it, and top with the crispy pata.",
    "Pour over the remaining sauce and serve with bagoong alamang and rice."
  ],
  "notes": "Two icons in one bowl: the crunch of crispy pata meets the rich peanut sauce of kare-kare.",
  "source": "https://panlasangpinoy.com/crispy-pata-kare-kare/"
},
{
  "id": "cheeseburger-lumpia",
  "dish": "Lumpia",
  "kind": "Savory",
  "type": "Modern",
  "name": "Cheeseburger Lumpia",
  "category": "Fusion / Appetizer",
  "region": "Modern fusion",
  "difficulty": "Medium",
  "prep": "25 min",
  "cook": "30 min",
  "servings": "8",
  "image": "images/cheeseburger-lumpia.webp",
  "ingredients": [
    "1 lb ground beef (80/20)",
    "1/4 lb sharp cheddar cheese, grated",
    "1 large onion, finely diced",
    "2 to 3 cloves garlic, minced",
    "1 tablespoon Worcestershire sauce",
    "1 teaspoon black pepper",
    "1/2 tablespoon salt",
    "1 to 2 eggs (beaten, for the egg wash)",
    "1 package lumpia wrappers",
    "Oil, for frying",
    "Special sauce: 1 cup ketchup, 1 tbsp Dijon, 1 tbsp horseradish, 1/2 cup mayo, 1 clove grated garlic"
  ],
  "steps": [
    "Finely dice the onion and garlic; grate the cheddar.",
    "Combine beef, cheese, onion, garlic, Worcestershire, salt, and pepper in a bowl; mix until just combined (do not over-mix) and rest 10 minutes.",
    "Place about 3 tablespoons of filling off-center on each wrapper, shaping it like a log.",
    "Fold the near edge over, fold in the sides, and roll tightly; seal the last inch with egg wash.",
    "Fry on medium-high heat for 7 to 8 minutes until golden brown and cooked through.",
    "Whisk the special sauce ingredients together and serve for dipping."
  ],
  "notes": "A tailgate favorite — cheeseburger filling in a thin, shatter-crisp lumpia wrapper. Lumpia's thin, porous wrapper keeps these crisp far longer than egg rolls.",
  "source": "https://www.cookeverywhere.com/post/fan-fav-cheeseburger-lumpia-recipe"
},
{
  "id": "ginataang-manok-inasal",
  "dish": "Chicken Inasal",
  "kind": "Savory",
  "type": "Modern",
  "name": "Ginataang Manok Inasal",
  "category": "Braised chicken",
  "region": "Modern fusion",
  "difficulty": "Easy",
  "prep": "10 min",
  "cook": "25 min",
  "servings": "4",
  "image": "images/ginataang-manok-inasal.webp",
  "ingredients": [
    "1 kg chicken inasal cuts (marinated inasal chicken)",
    "1 onion, sliced",
    "1 head garlic, chopped",
    "1/4 cup cooking oil",
    "6 cups coconut milk (gata)",
    "2 stalks lemongrass (tanglad)",
    "2 potatoes, cut into chunks",
    "2 finger peppers (siling haba)",
    "1 teaspoon iodized salt",
    "1/2 teaspoon pepper",
    "1 pack all-purpose cream (110 mL)",
    "2 bird's eye chilies (siling labuyo), for garnish"
  ],
  "steps": [
    "Sauté the onion and garlic in oil, then add the chicken and fry until golden brown.",
    "Add the coconut milk and lemongrass; let it simmer.",
    "Add the potatoes, finger peppers, salt, and pepper.",
    "Cover and boil 10 minutes, or until the chicken is cooked through.",
    "Lower the heat, stir in the all-purpose cream, and simmer 5 more minutes.",
    "Garnish with siling labuyo and serve over rice."
  ],
  "notes": "Inasal moves off the grill and into a rich coconut-milk braise — smoky, tangy marinade mellowed by creamy gata. A cook-off winner's riff.",
  "source": "https://homefoodie.com/recipe/gintaang-manok-inasal-by-madalicious-cookoff-winner-karina-ramos"
},
{
  "id": "pancit-luglug",
  "dish": "Pancit",
  "kind": "Savory",
  "type": "Modern",
  "name": "Pancit Luglug",
  "category": "Noodle dish (seafood)",
  "region": "Pampanga",
  "difficulty": "Medium",
  "prep": "15 min (plus overnight soak)",
  "cook": "30 min",
  "servings": "6",
  "image": "images/pancit-luglug.webp",
  "ingredients": [
    "1 lb thick palabok noodles, soaked in water overnight",
    "1/4 lb ground pork",
    "1 Knorr shrimp cube",
    "4 tablespoons annatto seeds, soaked in 3/4 cup warm water and strained",
    "6 tablespoons all-purpose flour",
    "1/2 cup shredded tinapa (smoked fish) flakes",
    "3 tablespoons fish sauce (patis)",
    "2 tablespoons cooking oil",
    "3 cups water",
    "6 to 10 mussels (tahong)",
    "2 medium squid, sliced into rings",
    "6 to 10 pre-cooked shrimp",
    "3 boiled eggs, wedged",
    "1/2 cup ground chicharon",
    "1 head garlic, toasted",
    "1/2 cup chopped scallions",
    "4 calamansi, for serving"
  ],
  "steps": [
    "Heat oil and sauté the mussels and squid 2 minutes; remove and set aside.",
    "Cook the ground pork in the same pot until medium brown.",
    "Add the tinapa flakes and shrimp cube; cook 1 minute.",
    "Stir in the flour, then pour in the annatto water and 3 cups water; add the fish sauce and simmer until thickened.",
    "Boil 6 to 8 cups water; dip the soaked noodles in a blanching basket until cooked, then drain and plate.",
    "Top the noodles with the sauce, then arrange mussels, squid, shrimp, eggs, chicharon, toasted garlic, and scallions. Serve with calamansi."
  ],
  "notes": "Pampanga's seafood-packed take on palabok — 'luglug' refers to repeatedly dipping the noodles in boiling water. The mussels and squid deepen the sauce.",
  "source": "https://panlasangpinoy.com/pancit-luglug-recipe/"
},
{
  "id": "sizzling-bulalo",
  "dish": "Bulalo",
  "kind": "Savory",
  "type": "Modern",
  "name": "Sizzling Bulalo",
  "category": "Sizzling plate",
  "region": "Nationwide",
  "difficulty": "Easy",
  "prep": "15 min",
  "cook": "1 hr 15 min",
  "servings": "4",
  "image": "images/sizzling-bulalo.webp",
  "ingredients": [
    "1 1/2 lbs beef shank",
    "1 cooked sweet corn",
    "10 oz condensed cream of mushroom soup",
    "2 teaspoons garlic powder",
    "1 1/2 cups fresh white mushrooms, sliced",
    "4 tablespoons butter, divided",
    "2 teaspoons salt, divided",
    "1 teaspoon ground black pepper, divided",
    "3 3/4 cups water, divided"
  ],
  "steps": [
    "Make the gravy: melt 1 tablespoon butter, sauté the mushrooms 3 minutes, then add the cream of mushroom soup, 3/4 cup water, 1/2 teaspoon salt, and 1/2 teaspoon pepper. Simmer 5 minutes until thickened; set aside.",
    "Arrange the beef shank in a pot with 1 teaspoon salt and 3 cups water; boil, then simmer until tender. Remove to a plate.",
    "Season both sides of the beef with the remaining salt, pepper, and the garlic powder.",
    "Melt 2 tablespoons butter and pan-fry the beef at least 2 minutes per side until browned.",
    "Heat a sizzling plate, melt the remaining 1 tablespoon butter on it, and arrange the beef on top.",
    "Top with the mushroom gravy, add the corn on the side, and serve hot."
  ],
  "notes": "Bulalo leaves the soup pot — the tender marrow bone is pan-fried and served on a sizzling plate under mushroom gravy.",
  "source": "https://panlasangpinoy.com/sizzling-bulalo-recipe/"
},
{
  "id": "tinolang-manok-sa-gata",
  "dish": "Tinola",
  "kind": "Savory",
  "type": "Modern",
  "name": "Tinolang Manok sa Gata",
  "category": "Chicken soup (coconut)",
  "region": "Nationwide",
  "difficulty": "Easy",
  "prep": "10 min",
  "cook": "55 min",
  "servings": "4",
  "image": "images/tinolang-manok-sa-gata.webp",
  "ingredients": [
    "2 lbs chicken, cut into serving pieces",
    "1 cup malunggay (moringa) leaves",
    "2 cups coconut milk",
    "1 small unripe papaya, sliced into wedges",
    "1 medium yellow onion, sliced",
    "3 thumbs ginger, julienned",
    "4 cloves garlic, crushed",
    "3 Thai or bird's eye chilies",
    "1 Knorr chicken cube",
    "2 cups water",
    "1/2 teaspoon ground black pepper",
    "2 tablespoons fish sauce (patis)",
    "3 tablespoons cooking oil"
  ],
  "steps": [
    "Heat oil and sauté garlic, onion, and ginger about 3 minutes until the onion softens.",
    "Add the chicken and stir-fry until light brown.",
    "Pour in the coconut milk and bring to a boil.",
    "Add the black pepper and chilies; cover and simmer on low 35 minutes until the chicken is tender.",
    "Add the papaya, cover, and cook 7 minutes.",
    "Pour in the water, boil, then add the chicken cube and cook 5 to 8 minutes.",
    "Add the malunggay and fish sauce; cook 3 minutes and serve."
  ],
  "notes": "A crossover of tinolang manok and ginataang manok — the familiar ginger-papaya soup, made rich and creamy with coconut milk.",
  "source": "https://panlasangpinoy.com/tinolang-manok-sa-gata-recipe/"
},
{
  "id": "bistek-sliders",
  "dish": "Bistek",
  "kind": "Savory",
  "type": "Modern",
  "name": "Bistek Tagalog Sliders",
  "category": "Sandwich / Fusion",
  "region": "Modern fusion",
  "difficulty": "Easy",
  "prep": "5 min",
  "cook": "5 min",
  "servings": "4",
  "image": "images/bistek-sliders.webp",
  "ingredients": [
    "1 cup cooked Bistek Tagalog (beef + onions), warmed",
    "1 slice provolone cheese per slider",
    "2 slider buns per slider"
  ],
  "steps": [
    "Heat a skillet over medium heat and add the cooked bistek tagalog, letting the beef and onions come up to temperature.",
    "Top with a slice of provolone cheese and let it begin to melt.",
    "Slide the cheesy beef and onions onto the bottom of a slider bun.",
    "Top with the other half of the bun and serve hot.",
    "Repeat for as many sliders as needed — a cheesesteak-inspired way to use up leftover bistek."
  ],
  "notes": "Give leftover bistek tagalog the cheesesteak treatment — provolone, soft buns, and that salty-sour beef. A two-ingredient trick that turns one dinner into the next lunch.",
  "source": "https://www.simplecomfortfood.com/2018/11/21/filipino-bistek-tagalog-sliders/"
},
{
  "id": "crispy-dinuguan",
  "dish": "Dinuguan",
  "kind": "Savory",
  "type": "Modern",
  "name": "Crispy Dinuguan",
  "category": "Pork stew (crispy)",
  "region": "Nationwide",
  "difficulty": "Medium",
  "prep": "15 min",
  "cook": "1 hr 20 min",
  "servings": "6",
  "image": "images/crispy-dinuguan.webp",
  "ingredients": [
    "1 1/2 lbs pork belly (liempo)",
    "1 Knorr pork cube",
    "10 oz pork blood",
    "3/4 cup white vinegar",
    "1 stalk lemongrass, crushed",
    "1 onion, chopped",
    "2 thumbs ginger, crushed",
    "4 cloves garlic, minced",
    "2 teaspoons whole peppercorn",
    "5 dried bay leaves",
    "1 1/2 tablespoons salt",
    "1 1/2 tablespoons sugar",
    "3 long green peppers (or jalapeño)",
    "6 cups water",
    "3 cups cooking oil"
  ],
  "steps": [
    "Boil the pork belly with bay leaves, peppercorn, salt, and water for 45 to 60 minutes until tender. Remove, cool 5 minutes, and save the stock.",
    "Rub 2 teaspoons salt over the boiled pork and rest 10 minutes.",
    "Deep-fry the pork 8 minutes, rest 5 minutes, then fry 3 more minutes until crispy; slice into bite-size pieces.",
    "Heat 3 tablespoons oil and sauté the onion, ginger, and garlic; pour in the reserved stock.",
    "Add the lemongrass and boil 8 minutes on medium heat; remove the lemongrass and ginger.",
    "Pour in the pork blood, stirring continuously; add the pork cube and vinegar, bring to a boil, then add sugar.",
    "Cook uncovered until reduced by half, add the peppers for 2 minutes, then combine with the crispy pork and serve."
  ],
  "notes": "Dinuguan deconstructed — the pork is fried crisp like lechon kawali and the blood sauce made separately, combined only when serving.",
  "source": "https://panlasangpinoy.com/crispy-dinuguan/"
},
{
  "id": "crispy-laing-pockets",
  "dish": "Laing",
  "kind": "Savory",
  "type": "Modern",
  "name": "Crispy Laing Pockets",
  "category": "Fried appetizer",
  "region": "Modern fusion",
  "difficulty": "Medium",
  "prep": "30 min",
  "cook": "15 min",
  "servings": "6",
  "image": "images/crispy-laing-pockets.webp",
  "ingredients": [
    "50 g dried gabi (taro) leaves",
    "1 1/2 cups water (for boiling leaves)",
    "1 pack ginataang gulay mix (or coconut milk + shrimp paste to taste)",
    "2 cups water",
    "3 long green chilies (sili), sliced",
    "25 pieces lumpia wrappers",
    "Flour + water (for sealing)",
    "Oil, for frying"
  ],
  "steps": [
    "Boil the dried gabi leaves in 1 1/2 cups of water until it dries up.",
    "Dissolve the ginataang gulay mix in 2 cups water and pour over the leaves with the sliced chilies; boil until thickened, then cool.",
    "Cut each lumpia wrapper into 3 or 4 strips.",
    "Place a spoonful of laing on a strip and fold into a triangle shape, sealing the edge with a flour-water paste.",
    "Deep-fry the pockets over high heat until golden brown.",
    "Drain on paper towels and serve on their own or with rice."
  ],
  "notes": "Bicol's coconut-laden laing, folded into crispy fried triangles — creamy, spicy, and crunchy in one bite.",
  "source": "https://www.knorr.com/ph/r/simple-crispy-laing-pockets-recipe.html/110677"
},
{
  "id": "pinakbet-lechon-kawali",
  "dish": "Pinakbet",
  "kind": "Savory",
  "type": "Modern",
  "name": "Pinakbet with Lechon Kawali",
  "category": "Vegetable stew (crispy)",
  "region": "Nationwide",
  "difficulty": "Easy",
  "prep": "15 min",
  "cook": "30 min",
  "servings": "6",
  "image": "images/pinakbet-lechon-kawali.webp",
  "ingredients": [
    "3/4 lb lechon kawali, chopped",
    "2 to 3 cups butternut squash, cubed",
    "3 tablespoons shrimp paste (bagoong alamang)",
    "2 medium bitter gourd (ampalaya), cored and sliced",
    "1 Chinese eggplant, sliced",
    "10 pieces okra",
    "2 cups snake beans (sitaw), cut into 2-inch pieces",
    "1 1/2 cups beef broth",
    "4 cloves garlic, crushed",
    "1 medium onion, sliced",
    "1 medium plum tomato, diced",
    "3 tablespoons cooking oil",
    "Salt and pepper, to taste"
  ],
  "steps": [
    "Heat oil and sauté the garlic until medium brown.",
    "Add the onion and tomato and cook 1 minute.",
    "Add 1/4 lb of the chopped lechon kawali and the squash; cook 2 minutes.",
    "Pour in the beef broth and bring to a boil.",
    "Stir in the shrimp paste, cover, and cook 5 to 7 minutes.",
    "Add the ampalaya, eggplant, okra, and sitaw; cook 8 to 12 minutes.",
    "Season with salt and pepper, then top with the remaining lechon kawali and serve."
  ],
  "notes": "Crispy lechon kawali folded into pinakbet — a crunchy upgrade that also nods to crispy binagoongan. Watch the rice intake.",
  "source": "https://panlasangpinoy.com/pinakbet-with-lechon-kawali/"
},
{
  "id": "arroz-caldo-modern",
  "dish": "Arroz Caldo",
  "kind": "Savory",
  "type": "Modern",
  "name": "Arroz Caldo with Crispy Chicken Skin",
  "category": "Rice porridge (elevated)",
  "region": "Modern twist",
  "difficulty": "Medium",
  "prep": "15 min",
  "cook": "40 min",
  "servings": "4",
  "image": "images/arroz-caldo-modern.webp",
  "ingredients": [
    "4 to 5 boneless skin-on chicken thighs",
    "1 cup jasmine rice",
    "1 small pinch saffron (or 1 tbsp annatto oil)",
    "1 yellow onion, diced",
    "2-inch piece ginger, minced",
    "8 cloves garlic (4 minced for base, 4 minced for topping), divided",
    "5 cups chicken broth",
    "2 1/2 teaspoons fish sauce, plus more to taste",
    "4 large eggs",
    "1/2 lemon (or calamansi), plus wedges for serving",
    "Scallions, sliced, for garnish",
    "1 1/2 tablespoons avocado oil, divided",
    "Salt and pepper, to taste"
  ],
  "steps": [
    "Preheat the oven to 400°F. Remove the chicken skin and set aside; cut the thighs into 1-inch pieces and season with salt and pepper.",
    "Heat 1 tablespoon oil and sear the chicken about 3 minutes per side until golden; remove and set aside.",
    "In the same pot, cook the onion, ginger, and half the garlic until soft, 3 to 4 minutes. Add the rice and saffron and toast slightly.",
    "Return the chicken and add the broth and fish sauce. Bring to a boil, then simmer about 30 minutes, stirring occasionally, until creamy.",
    "Meanwhile, bake the chicken skin on a parchment-lined sheet 20 to 25 minutes until crisp; cool, salt, and break into pieces.",
    "Boil the eggs 6 minutes for jammy yolks, then cool in an ice bath and halve.",
    "Fry the remaining garlic in 1/2 tablespoon oil until golden; drain.",
    "Squeeze in the lemon, adjust fish sauce, and serve topped with jammy eggs, crispy chicken skin, fried garlic, and scallions."
  ],
  "notes": "All the comfort of arroz caldo, elevated — saffron for color and a shatter-crisp chicken-skin topping instead of the usual chicharon.",
  "source": "https://neweltastingtable.com/arroz-caldo/"
},
{
  "id": "pork-bbq-bowl",
  "dish": "Pork Barbecue",
  "kind": "Savory",
  "type": "Modern",
  "name": "Filipino Pork BBQ Bowl",
  "category": "Grilled / Rice bowl",
  "region": "Modern fusion",
  "difficulty": "Easy",
  "prep": "10 min",
  "cook": "20 min",
  "servings": "8",
  "image": "images/pork-bbq-bowl.webp",
  "ingredients": [
    "2 lbs pork tenderloin, thinly sliced",
    "1/4 cup soy sauce",
    "1/4 cup apple cider vinegar",
    "1/2 cup ginger ale",
    "1/2 cup brown sugar, packed",
    "4 cloves garlic, minced",
    "2 tablespoons Worcestershire sauce",
    "1 tablespoon Tabasco",
    "2 tablespoons canola oil",
    "Ground pepper, to taste",
    "10 oz mixed greens (watercress, arugula, spinach)",
    "1/2 cup red onion, thinly sliced",
    "Asian vinaigrette: rice wine vinegar, soy sauce, olive oil, sesame oil, lemon",
    "Achara (green papaya relish), for serving"
  ],
  "steps": [
    "Combine the soy sauce, apple cider vinegar, ginger ale, brown sugar, garlic, Worcestershire, Tabasco, canola oil, and pepper into a marinade.",
    "Marinate the sliced pork tenderloin, then grill (or pan-sear) until cooked through and caramelized.",
    "Whisk together the vinaigrette: rice wine vinegar, soy sauce, olive oil, sesame oil, and a squeeze of lemon.",
    "Build bowls over a bed of mixed greens and sliced red onion.",
    "Top with the grilled pork and a spoonful of achara; drizzle with the vinaigrette to serve."
  ],
  "notes": "Street-food pork barbecue, reimagined as a fresh build-your-own bowl over greens with achara and an Asian vinaigrette.",
  "source": "https://kitchenconfidante.com/big-game-bowl-recipes-filipino-pork-barbecue-bowl-and-spicy-korean-style-meatball-bowl-recipe"
},
{
  "id": "kinilaw-na-tuna",
  "dish": "Kinilaw",
  "kind": "Savory",
  "type": "Modern",
  "name": "Kinilaw na Tuna",
  "category": "Fish ceviche / Appetizer",
  "region": "Nationwide",
  "difficulty": "Easy",
  "prep": "15 min",
  "cook": "2 hr (cure)",
  "servings": "6",
  "image": "images/kinilaw-na-tuna.webp",
  "ingredients": [
    "2 lbs fresh tuna, skinned, deboned, and cubed",
    "1 1/2 cups vinegar, divided",
    "3 tablespoons ginger, minced",
    "1 large red onion, minced",
    "2 teaspoons salt",
    "1 teaspoon ground black pepper",
    "1/2 cup lemon or calamansi juice",
    "1 to 2 tablespoons red chilies, chopped"
  ],
  "steps": [
    "Place the cubed tuna in a bowl and pour in 3/4 cup vinegar; let stand 2 minutes, then gently press and drain to remove any fishy smell.",
    "Add the remaining 3/4 cup vinegar, calamansi or lemon juice, ginger, salt, black pepper, and chilies; mix well.",
    "Cover and refrigerate at least 2 hours to cure in the acid.",
    "Top with the minced red onion and serve chilled with cold beer."
  ],
  "notes": "Tuna is the gourmet upgrade to tanigue — clean and buttery. The acid 'cooks' the fish, so only the freshest tuna will do.",
  "source": "https://panlasangpinoy.com/kinilaw-kilawin-na-tuna/"
},
{
  "id": "silog-benedict",
  "dish": "Tapsilog",
  "kind": "Savory",
  "type": "Modern",
  "name": "Tosilog Benedict",
  "category": "Fusion / Breakfast",
  "region": "Modern fusion",
  "difficulty": "Hard",
  "prep": "20 min",
  "cook": "20 min",
  "servings": "4",
  "image": "images/silog-benedict.webp",
  "ingredients": [
    "1 lb pork belly or butt, sliced 1/2-inch thick",
    "1 cup fresh pineapple, puréed",
    "1/2 cup sugar",
    "3 tablespoons honey",
    "4 tablespoons soy sauce",
    "1 tablespoon kosher salt",
    "3 cloves garlic, minced",
    "2 tablespoons annatto powder",
    "4 cups steamed white rice",
    "2 cloves garlic (for rice patties)",
    "4 large eggs + 1 tablespoon white vinegar (poach)",
    "3 egg yolks + 2 cloves garlic + 2 tbsp calamansi juice + 1 cup butter (hollandaise)",
    "Smoked paprika and chives, for garnish"
  ],
  "steps": [
    "Make tocino: combine the pork, pineapple, sugar, honey, soy sauce, salt, garlic, and annatto and marinate 10 to 12 hours (no longer — the pineapple enzymes over-tenderize).",
    "Pan-fry the tocino about 1 minute 30 seconds per side until browned and cooked through.",
    "Make garlic rice patties: crisp minced garlic in cold-start oil, strain, then press rice and garlic into patties and fry 2 to 3 minutes per side until golden.",
    "Poach the eggs: bring water and vinegar to a boil, gently add the eggs, remove from heat, and poach 4 minutes.",
    "Blend egg yolks, garlic, and calamansi juice, then slowly pour in 170°F melted butter while blending to make the hollandaise.",
    "Assemble: rice patty, then tocino, then poached egg, then hollandaise. Garnish with smoked paprika and chives."
  ],
  "notes": "Eggs Benedict meets the silog breakfast — sweet tocino, a crispy garlic-rice 'muffin,' and calamansi-spiked hollandaise.",
  "source": "https://boyinthekitchen.com/2018/02/17/tosilog-benedict-a-filipino-american-breakfast/"
},
{
  "id": "longganisa-burger",
  "dish": "Longganisa",
  "kind": "Savory",
  "type": "Modern",
  "name": "Longganisa Burger",
  "category": "Fusion / Burger",
  "region": "Modern fusion",
  "difficulty": "Medium",
  "prep": "20 min",
  "cook": "12 min",
  "servings": "3",
  "image": "images/longganisa-burger.webp",
  "ingredients": [
    "500 g ground pork",
    "1/4 cup brown sugar",
    "1 head garlic, peeled and minced",
    "1 1/2 tablespoons soy sauce",
    "1 tablespoon vinegar",
    "1 teaspoon Worcestershire sauce",
    "2 teaspoons freshly cracked black pepper",
    "1 teaspoon salt",
    "Sesame burger buns",
    "Sliced tomatoes",
    "Cucumber slaw (1 cucumber, julienned + 2 to 3 tbsp mayonnaise + salt + sugar)",
    "Atchara (pickled green papaya)",
    "Fried eggs"
  ],
  "steps": [
    "Mix the ground pork, brown sugar, garlic, soy sauce, vinegar, Worcestershire, pepper, and salt in a bowl.",
    "Cover and refrigerate 4 hours to overnight for the flavors to meld.",
    "Divide into 3 patties and fry over medium heat 5 to 6 minutes per side (watch closely — the sugar burns fast).",
    "Make the cucumber slaw: julienne the cucumber, mix with mayonnaise, and season with salt and a little sugar.",
    "Toast the sesame buns, then build: slaw, patty, sliced tomatoes, atchara, and a fried egg."
  ],
  "notes": "The sweet-garlicky long-silog breakfast, rebuilt as a burger — with cucumber slaw, atchara, and a fried egg on a sesame bun.",
  "source": "https://talentadongchef.wordpress.com/2014/11/27/longganisa-burger/"
},
{
  "id": "adobo-pork",
  "dish": "Adobo",
  "kind": "Savory",
  "type": "Traditional",
  "name": "Pork Adobo",
  "category": "Braised / Stew",
  "region": "Nationwide",
  "difficulty": "Easy",
  "prep": "15 min",
  "cook": "55 min",
  "servings": "4",
  "image": "images/adobo-pork.webp",
  "ingredients": [
    "2 pounds pork belly, cut into 2-inch cubes",
    "1 onion, peeled and thinly sliced",
    "1 head garlic, peeled and minced",
    "2 bay leaves",
    "1 teaspoon salt",
    "1/2 teaspoon pepper",
    "1 tablespoon oil",
    "1 cup vinegar",
    "1/2 cup soy sauce",
    "1 cup water"
  ],
  "steps": [
    "Combine pork, onions, garlic, bay leaves, salt, and pepper in a bowl; marinate about 30 minutes.",
    "Heat oil in a wide skillet over medium heat; add the pork mixture and cook, turning occasionally, until lightly browned.",
    "Add vinegar and boil uncovered without stirring for 3 to 5 minutes to mellow the acid.",
    "Add soy sauce and water, bring to a boil, then lower heat, cover, and simmer 40 to 50 minutes until the pork is fork-tender and the sauce has reduced.",
    "Season with salt and pepper to taste and serve hot over steamed rice."
  ],
  "notes": "The national dish — it tastes even better a day later after the flavors meld. Leftover meat makes great adobo fried rice.",
  "source": "https://www.kawalingpinoy.com/pork-adobo/"
},
{
  "id": "sinigang-na-baboy",
  "dish": "Sinigang",
  "kind": "Savory",
  "type": "Traditional",
  "name": "Sinigang na Baboy",
  "category": "Sour soup",
  "region": "Nationwide",
  "difficulty": "Medium",
  "prep": "15 min",
  "cook": "1 hr 30 min",
  "servings": "6",
  "image": "images/sinigang-na-baboy.webp",
  "ingredients": [
    "2 lbs pork belly",
    "1 lb young tamarind pods (or tamarind pulp)",
    "1 bunch kangkong (water spinach), leaves separated",
    "8 pieces string beans (sitaw), cut into 2-inch lengths",
    "2 Chinese eggplant, sliced",
    "1 daikon radish (labanos), sliced",
    "8 pieces okra",
    "2 tomatoes, quartered",
    "2 long green peppers (siling pansigang)",
    "1 onion, quartered",
    "2 quarts water",
    "Fish sauce and ground black pepper, to taste"
  ],
  "steps": [
    "Boil the tamarind pods in 2 quarts of water for about 40 minutes; strain and squeeze the pulp to extract the sour juice.",
    "Pour the tamarind broth into a wide pot and bring to a boil. Add the onion, pork belly, and half the tomatoes. Skim off any scum.",
    "Add a splash of fish sauce, cover, and simmer 45 to 90 minutes until the pork is tender.",
    "Add the daikon radish and eggplant and cook about 5 minutes.",
    "Add the green pepper, string beans, remaining tomatoes, and okra and cook about 3 minutes.",
    "Add the kangkong last and finish with residual heat. Season with fish sauce and pepper to taste."
  ],
  "notes": "Named the world's best vegetable soup in 2021. The sour-tamarind broth is the star — finishing with fish sauce (patis) adds depth plain salt can't.",
  "source": "https://panlasangpinoy.com/pork-sinigang-na-baboy-recipe/"
},
{
  "id": "lechon-kawali",
  "dish": "Lechon",
  "kind": "Savory",
  "type": "Traditional",
  "name": "Lechon Kawali",
  "category": "Deep-fried pork",
  "region": "Nationwide",
  "difficulty": "Hard",
  "prep": "30 min",
  "cook": "1 hr 30 min",
  "servings": "8",
  "image": "images/lechon-kawali.webp",
  "ingredients": [
    "4 pounds whole pork belly, skin on",
    "1 head garlic, pounded",
    "2 tablespoons salt",
    "1 tablespoon peppercorns",
    "2 bay leaves",
    "Water, to cover",
    "Canola oil, for deep-frying",
    "1/4 cup vinegar (for brushing skin)"
  ],
  "steps": [
    "Boil the pork belly in a deep pot with garlic, salt, peppercorns, bay leaves, and enough water to cover, until fork-tender but not falling apart.",
    "Drain, wipe off stray aromatics, and cool to the touch.",
    "Pat dry, then score the skin with a fork or knife (without piercing through the meat).",
    "Brush the skin with vinegar and season the whole belly with salt, adding a thin film of salt on the skin.",
    "Refrigerate uncovered overnight on a wire rack to chill and air-dry the skin.",
    "Heat oil to 350 to 375°F and deep-fry the pork, turning as needed, until golden and the skin is crisp and puffed.",
    "Drain on a wire rack, rest 3 to 5 minutes, then cut into serving pieces."
  ],
  "notes": "The secret to shatter-crisp crackling is an overnight air-dry. Serve with lechon sarsa or spiced vinegar.",
  "source": "https://www.kawalingpinoy.com/lechon-kawali/"
},
{
  "id": "kare-kare",
  "dish": "Kare-Kare",
  "kind": "Savory",
  "type": "Traditional",
  "name": "Classic Kare-Kare",
  "category": "Peanut stew",
  "region": "Luzon / Nationwide",
  "difficulty": "Medium",
  "prep": "30 min",
  "cook": "2 hr 30 min",
  "servings": "4",
  "image": "images/kare-kare.webp",
  "ingredients": [
    "3 pounds oxtail, cut into serving pieces",
    "1 banana heart (puso ng saging)",
    "2 large eggplant, cut into 1-inch pieces",
    "1 bundle long beans (sitaw), cut into 3-inch lengths",
    "1 bundle pechay, leaves separated",
    "1/4 cup rice flour, toasted",
    "1 1/2 tablespoons annatto powder",
    "1/4 cup peanut butter",
    "1 tablespoon cooking oil",
    "1 onion, sliced thinly",
    "5 cloves garlic, minced",
    "2 tablespoons fish sauce",
    "Salt and pepper, to taste",
    "Shrimp paste (bagoong), for serving"
  ],
  "steps": [
    "Rinse the oxtail and place in a large pot with enough cold water to cover. Boil, skim the scum, then simmer 2 to 3 hours (adding water to keep about 7 cups of broth) until easily pierced with a fork. Drain and reserve the broth.",
    "Peel the banana heart to its soft core, cut into fourths, soak in salted water 15 to 20 minutes, squeeze out the bitter sap, rinse, and blanch 1 minute.",
    "Blanch the eggplant (1 minute), long beans (1 minute), and pechay (30 seconds) separately; set aside.",
    "Toast the rice flour in a dry skillet until lightly browned. Whisk it with the annatto powder and 1 cup of the reserved broth until smooth.",
    "Heat oil and sauté the onion and garlic until soft. Brown the oxtail, then add fish sauce and cook 2 to 3 minutes.",
    "Add the remaining 6 cups of broth, then stir in the rice-flour mixture and peanut butter, whisking until smooth. Simmer 7 to 10 minutes until slightly thickened.",
    "Stir in the blanched vegetables and cook 2 to 3 minutes until heated through."
  ],
  "notes": "The nutty peanut sauce is balanced by salty bagoong on the side. Annatto gives it the signature golden-orange color.",
  "source": "https://www.kawalingpinoy.com/kare-kare/"
},
{
  "id": "sisig",
  "dish": "Sisig",
  "kind": "Savory",
  "type": "Traditional",
  "name": "Authentic Sizzling Sisig",
  "category": "Grilled / Sizzling",
  "region": "Pampanga",
  "difficulty": "Medium",
  "prep": "20 min",
  "cook": "1 hr 15 min",
  "servings": "6",
  "image": "images/sisig.webp",
  "ingredients": [
    "2 pounds pig face/ears (maskara), or pork belly",
    "1/2 cup vinegar",
    "1/4 cup soy sauce",
    "1 head garlic, crushed",
    "1 tablespoon peppercorns",
    "3 bay leaves",
    "1 tablespoon salt",
    "Water, to cover",
    "1/2 cup calamansi juice (or lemon/lime)",
    "1 to 2 red onions, diced",
    "2 to 3 Thai chili peppers, minced",
    "2 tablespoons liquid seasoning (Maggi)",
    "2 tablespoons liver spread"
  ],
  "steps": [
    "In a pot, combine the pig face, vinegar, soy sauce, garlic, peppercorns, bay leaves, salt, and enough water to cover. Boil, skim, then simmer 50 to 60 minutes until tender; drain well.",
    "Grill the pork over high heat 7 to 10 minutes per side until crisp and lightly charred (or broil at 450°F for 4 to 5 minutes).",
    "Cool to the touch, then finely chop.",
    "In a bowl, combine the chopped meat, diced onions, minced chilies, calamansi juice, and liquid seasoning.",
    "Stir in the liver spread until fully incorporated; season with salt and pepper.",
    "Serve immediately on preheated sizzling plates, optionally topped with a raw egg."
  ],
  "notes": "Sisig hails from Pampanga — 'to make sour.' Its name comes from the Kapampangan word sisigan.",
  "source": "https://www.kawalingpinoy.com/sisig/"
},
{
  "id": "crispy-pata",
  "dish": "Crispy Pata",
  "kind": "Savory",
  "type": "Traditional",
  "name": "Crispy Pata",
  "category": "Deep-fried pork",
  "region": "Nationwide",
  "difficulty": "Hard",
  "prep": "20 min",
  "cook": "1 hr 30 min",
  "servings": "6",
  "image": "images/crispy-pata.webp",
  "ingredients": [
    "1 whole pig leg (pata), cleaned",
    "6 dried bay leaves",
    "2 tablespoons whole peppercorn",
    "4 pieces star anise (optional)",
    "6 teaspoons salt, divided",
    "2 teaspoons ground black pepper",
    "2 teaspoons garlic powder",
    "12 cups water",
    "6 cups cooking oil, for frying"
  ],
  "steps": [
    "Bring 12 cups of water to a boil in a deep pot. Add bay leaves, peppercorn, star anise, and 4 teaspoons salt.",
    "Add the whole pig leg and simmer 45 to 60 minutes until fully tender. Remove and cool to room temperature.",
    "Rub the leg with garlic powder, black pepper, and the remaining 2 teaspoons salt; let sit 15 minutes to absorb.",
    "Heat oil in a heavy lidded pot to 350 to 375°F. Using long tongs, carefully submerge the leg, holding the lid partially over the pot to block splatter.",
    "Fry on medium heat until one side is golden and crispy, then carefully flip to crisp the other side.",
    "Remove when the crackling sound mellows, drain on a rack, and serve with spiced vinegar dipping sauce and atchara."
  ],
  "notes": "Deep-frying a whole leg splatters — go slow and keep the pot partially covered. For a safer route, the oven-baked version is just as crisp.",
  "source": "https://panlasangpinoy.com/crispy-pata-pulutan-recipe/"
},
{
  "id": "lumpiang-shanghai",
  "dish": "Lumpia",
  "kind": "Savory",
  "type": "Traditional",
  "name": "Lumpiang Shanghai",
  "category": "Fried snack / Appetizer",
  "region": "Nationwide",
  "difficulty": "Medium",
  "prep": "30 min",
  "cook": "20 min",
  "servings": "8",
  "image": "images/lumpiang-shanghai.webp",
  "ingredients": [
    "2 1/2 lbs ground pork",
    "1 piece Knorr pork cube, crushed",
    "50 pieces lumpia wrappers",
    "3/4 cup carrot, minced",
    "2 onions, minced",
    "2 eggs",
    "1/4 cup parsley, minced",
    "1/2 teaspoon ground black pepper",
    "1 teaspoon salt",
    "1 teaspoon sesame oil",
    "1 teaspoon garlic powder",
    "2 cups cooking oil, for frying"
  ],
  "steps": [
    "Combine ground pork, carrot, onion, and parsley in a bowl and mix well.",
    "Add the eggs, black pepper, salt, garlic powder, and sesame oil; mix until well blended.",
    "Crush the pork cube and fold it into the mixture until fully combined.",
    "Place 1 to 1 1/2 tablespoons of filling on each lumpia wrapper; wrap and roll tightly to seal.",
    "Heat oil over low to medium heat and deep-fry the lumpia until golden brown; drain on paper towels.",
    "Serve hot with sweet and sour sauce or banana ketchup."
  ],
  "notes": "Fry low and slow — high heat burns the wrapper before the filling cooks through. A fiesta table isn't complete without them.",
  "source": "https://panlasangpinoy.com/how-to-cook-lumpiang-shanghai-lumpia-knr-pc/"
},
{
  "id": "chicken-inasal",
  "dish": "Chicken Inasal",
  "kind": "Savory",
  "type": "Traditional",
  "name": "Chicken Inasal",
  "category": "Grilled chicken",
  "region": "Bacolod / Western Visayas",
  "difficulty": "Medium",
  "prep": "3 hr 30 min",
  "cook": "30 min",
  "servings": "4",
  "image": "images/chicken-inasal.webp",
  "ingredients": [
    "1 whole chicken, quartered (or leg quarters)",
    "4 cups water",
    "5 cups ice cubes",
    "1/4 cup salt",
    "1 tablespoon sugar",
    "5 dried bay leaves",
    "1 tablespoon garlic paste",
    "1 tablespoon ginger paste",
    "1 tablespoon lemongrass paste (or crushed fresh lemongrass)",
    "3 tablespoons calamansi juice",
    "3 tablespoons vinegar",
    "1/2 teaspoon ground black pepper",
    "1/4 teaspoon salt (marinade)",
    "1 cup lemon-lime soda",
    "1/2 cup chicken oil (for basting)",
    "3 tablespoons melted margarine (optional)"
  ],
  "steps": [
    "Make the brine: boil water, salt, sugar, and bay leaves; cool with ice. Submerge the chicken about 90 minutes, then drain and pat dry.",
    "Mix all marinade ingredients (garlic, ginger, lemongrass paste, calamansi, vinegar, pepper, salt, soda) and coat the chicken. Cover and refrigerate at least 3 hours, overnight ideal.",
    "Grill over medium heat, basting with reserved uncontaminated marinade in the first few minutes.",
    "Turn occasionally and grill until the internal temperature reaches 165°F.",
    "During the final minutes, brush with chicken oil (and margarine) for the signature glossy orange color.",
    "Rest 5 minutes and serve with rice, atchara, and sinamak (spiced vinegar)."
  ],
  "notes": "What sets inasal apart: no soy sauce — just calamansi, vinegar, and lemongrass. The chicken-oil baste gives it that iconic orange glaze.",
  "source": "https://panlasangpinoy.com/grilled-chicken-inasal-recipe/"
},
{
  "id": "pancit-palabok",
  "dish": "Pancit",
  "kind": "Savory",
  "type": "Traditional",
  "name": "Pancit Palabok",
  "category": "Noodle dish",
  "region": "Nationwide",
  "difficulty": "Medium",
  "prep": "30 min",
  "cook": "30 min",
  "servings": "6",
  "image": "images/pancit-palabok.webp",
  "ingredients": [
    "12 oz palabok noodles (cornstarch sticks) or thin bihon",
    "8 oz pork shoulder, sliced small",
    "1 Knorr shrimp cube",
    "1/2 cup tinapa flakes (smoked fish)",
    "1/2 cup annatto (achuete) water",
    "6 tablespoons all-purpose flour",
    "3 1/2 tablespoons fish sauce",
    "3 tablespoons cooking oil",
    "3 1/2 cups water",
    "1/4 teaspoon ground black pepper",
    "12 pieces shrimp, peeled and deveined",
    "1 cup Napa cabbage, cut into small squares",
    "3 hard-boiled eggs, quartered",
    "1/2 cup crushed chicharon",
    "1/2 cup chopped scallions",
    "Calamansi or lime, for serving"
  ],
  "steps": [
    "Soak the noodles in water for 30 minutes (or per package) and drain.",
    "Heat oil in a pot and sauté the pork until light brown.",
    "Add fish sauce and annatto water; stir and cook 30 seconds. Add 3 1/2 cups water and bring to a boil, then simmer 15 to 18 minutes until the pork is tender.",
    "Add the shrimp cube and tinapa flakes; cook 5 more minutes.",
    "Whisk the flour with 1/2 cup water into a smooth slurry; pour in slowly while stirring until the sauce thickens. Add black pepper and keep warm.",
    "Boil the shrimp about 1 1/2 minutes until pink; blanch the Napa cabbage 1 minute.",
    "Cook the noodles until tender but firm; drain well.",
    "Pour the sauce over the noodles and arrange shrimp, cabbage, and eggs on top. Finish with crushed chicharon and scallions; serve with calamansi."
  ],
  "notes": "'Palabok' means embellishment — the sauce and toppings are layered on, not tossed in. Assemble right before eating so the noodles don't drink up all the gravy.",
  "source": "https://panlasangpinoy.com/pancit-palabok-recipe/"
},
{
  "id": "bulalo",
  "dish": "Bulalo",
  "kind": "Savory",
  "type": "Traditional",
  "name": "Bulalo",
  "category": "Beef soup",
  "region": "Batangas / Tagaytay",
  "difficulty": "Easy",
  "prep": "15 min",
  "cook": "1 hr 45 min",
  "servings": "4",
  "image": "images/bulalo.webp",
  "ingredients": [
    "2 lbs beef shank (with marrow bone)",
    "1/2 cabbage, leaves detached",
    "1 bundle bok choy (pechay)",
    "2 corn cobs, each cut into 3 pieces",
    "2 tablespoons whole peppercorn",
    "1/2 cup green onions, cut into 1 1/2-inch pieces",
    "1 medium onion, sliced",
    "Water, about 1 liter (add more as needed)",
    "Fish sauce (patis), to taste"
  ],
  "steps": [
    "Optional: blanch by boiling the beef shanks 10 minutes, skimming scum, then rinsing under cold water.",
    "Boil water in a pot. Add the beef shank, onion, and peppercorns.",
    "Simmer about 1 1/2 hours (or ~30 minutes in a pressure cooker) until the meat is fork-tender.",
    "Add the corn and simmer 10 more minutes.",
    "Add fish sauce, cabbage, bok choy, and green onions; cook until the greens just wilt.",
    "Serve hot with steamed rice; spoon out the prized marrow from the bone."
  ],
  "notes": "What makes it bulalo (not just nilaga) is the marrow still in the bone. Entire restaurants — bulalohans — are dedicated to this one soup.",
  "source": "https://panlasangpinoy.com/bulalo-stewed-beef-shank/"
},
{
  "id": "tinolang-manok",
  "dish": "Tinola",
  "kind": "Savory",
  "type": "Traditional",
  "name": "Tinolang Manok",
  "category": "Chicken soup",
  "region": "Nationwide",
  "difficulty": "Easy",
  "prep": "10 min",
  "cook": "45 min",
  "servings": "5",
  "image": "images/tinolang-manok.webp",
  "ingredients": [
    "2 lbs chicken, cut into serving pieces",
    "1 cup malunggay (moringa) leaves",
    "1 cup hot pepper leaves",
    "1/8 teaspoon ground black pepper",
    "1 unripe papaya, wedged (or chayote)",
    "6 cups water",
    "1 Knorr chicken cube",
    "1 onion, sliced",
    "4 cloves garlic, crushed and chopped",
    "3 thumbs ginger, julienned",
    "2 tablespoons fish sauce (patis)",
    "3 tablespoons vegetable oil"
  ],
  "steps": [
    "Heat oil in a pot and sauté garlic, onion, and ginger; add black pepper.",
    "When the onion softens, add the chicken and cook about 5 minutes until lightly browned.",
    "Pour in the water and bring to a boil. Cover, reduce heat, and simmer 40 minutes.",
    "Skim off scum and floating oil.",
    "Add the chicken cube and papaya (or chayote); cook 5 minutes.",
    "Add malunggay and hot pepper leaves with the fish sauce; cook 2 minutes more and serve hot."
  ],
  "notes": "A comfort soup for cold days and sick days alike. The ginger-onion broth plus tender chicken and greens is famously restorative.",
  "source": "https://panlasangpinoy.com/classic-tinolang-manok-recipe/"
},
{
  "id": "bistek-tagalog",
  "dish": "Bistek",
  "kind": "Savory",
  "type": "Traditional",
  "name": "Bistek Tagalog",
  "category": "Beef dish",
  "region": "Nationwide",
  "difficulty": "Easy",
  "prep": "1 hr 10 min",
  "cook": "25 min",
  "servings": "4",
  "image": "images/bistek-tagalog.webp",
  "ingredients": [
    "1 1/2 lbs beef sirloin, thinly sliced",
    "5 tablespoons soy sauce",
    "4 pieces calamansi (or 1 lemon)",
    "1/2 teaspoon ground black pepper",
    "3 cloves garlic, minced",
    "3 onions, sliced into rings",
    "4 tablespoons cooking oil",
    "1 cup water",
    "Salt, to taste"
  ],
  "steps": [
    "Combine soy sauce, calamansi juice, and pepper; marinate the sliced beef at least 1 hour (overnight is better).",
    "Heat 2 tablespoons oil and sauté the onions 30 seconds; remove and set aside.",
    "Drain the beef (reserve the marinade) and pan-fry 1 minute per side; remove.",
    "Sauté the garlic until golden; add a few onion pieces, then pour in the reserved marinade plus water and bring to a boil.",
    "Return the beef, cover, and simmer until tender; season with salt and pepper.",
    "Top with the remaining onion rings, cover to steam 1 minute, then stir gently and serve over rice."
  ],
  "notes": "Derived from the Spanish bistec encebollado — Filipinos swapped wine for calamansi and loaded up on onions. The sauce is the reason you cook extra rice.",
  "source": "https://panlasangpinoy.com/bistek-tagalog-beefsteak-recipe/"
},
{
  "id": "dinuguan",
  "dish": "Dinuguan",
  "kind": "Savory",
  "type": "Traditional",
  "name": "Pork Dinuguan",
  "category": "Pork stew",
  "region": "Nationwide",
  "difficulty": "Medium",
  "prep": "15 min",
  "cook": "1 hr 5 min",
  "servings": "6",
  "image": "images/dinuguan.webp",
  "ingredients": [
    "1 lb pork shoulder, diced",
    "20 oz pork blood",
    "1/2 lb pork ears, boiled and sliced",
    "1 cup white vinegar",
    "3 cups beef broth",
    "3 dried bay leaves",
    "1 bunch lemongrass",
    "3 long green peppers",
    "1 onion, chopped",
    "5 cloves garlic, minced",
    "2 teaspoons sugar",
    "3 tablespoons cooking oil",
    "Salt and ground black pepper, to taste"
  ],
  "steps": [
    "Heat oil and sauté the garlic and onion until soft.",
    "Add the pork shoulder and sauté 2 to 3 minutes, then the pork ears for 2 more minutes.",
    "Pour in the vinegar, cover, and let it boil before stirring.",
    "Add the broth, bay leaves, and lemongrass; bring to a boil, then simmer 50 minutes until the pork is tender.",
    "Pour in the pork blood while stirring constantly; bring to a gentle boil, then simmer 12 minutes over low heat (do not boil hard).",
    "Add the long green peppers and cook 3 minutes; season with sugar, salt, and pepper.",
    "Serve hot with rice or puto."
  ],
  "notes": "Nicknamed 'chocolate meat' for its deep color. Stir constantly after adding the blood so it stays silky instead of curdling.",
  "source": "https://panlasangpinoy.com/pork-dinuguan-recipe/"
},
{
  "id": "laing",
  "dish": "Laing",
  "kind": "Savory",
  "type": "Traditional",
  "name": "Laing",
  "category": "Vegetable / Coconut",
  "region": "Bicol",
  "difficulty": "Medium",
  "prep": "10 min",
  "cook": "1 hr",
  "servings": "8",
  "image": "images/laing.webp",
  "ingredients": [
    "3.5 oz dried taro leaves",
    "6 cups coconut milk",
    "2 cups coconut cream",
    "1/2 cup shrimp paste (bagoong or balaw)",
    "1/2 lb pork shoulder, thinly sliced",
    "5 to 7 red chilies",
    "1 onion, sliced",
    "1/2 cup ginger, sliced",
    "8 cloves garlic, crushed",
    "Shrimp (optional), added near the end"
  ],
  "steps": [
    "Combine coconut milk, pork, shrimp paste, ginger, onion, and garlic in a pot; heat and bring to a boil.",
    "Gently stir, then cover and simmer 15 to 20 minutes, stirring occasionally.",
    "Add the dried taro leaves but do not stir — let them absorb the coconut milk for 20 to 30 minutes, gently pushing them down.",
    "Once the leaves have absorbed the liquid, stir and cook up to 10 minutes more.",
    "Pour in the coconut cream and add the red chilies; cook 10 to 12 minutes.",
    "Optionally add shrimp near the end. Serve hot with steamed rice."
  ],
  "notes": "From Bicol — rich, spicy, and creamy. It tastes even better the next day, which is why many cooks make it a day ahead.",
  "source": "https://panlasangpinoy.com/laing-recipe/"
},
{
  "id": "pinakbet",
  "dish": "Pinakbet",
  "kind": "Savory",
  "type": "Traditional",
  "name": "Pinakbet Tagalog",
  "category": "Vegetable stew",
  "region": "Ilocos / Nationwide",
  "difficulty": "Easy",
  "prep": "15 min",
  "cook": "35 min",
  "servings": "6",
  "image": "images/pinakbet.webp",
  "ingredients": [
    "1 lb lechon kawali, sliced (or bagnet / fresh pork)",
    "1 Knorr shrimp cube",
    "12 pieces string beans (sitaw), cut into 2-inch lengths",
    "1/2 kalabasa (squash), cubed",
    "12 pieces okra",
    "1 Chinese eggplant, sliced",
    "1 ampalaya (bitter gourd), sliced",
    "1 kamote (sweet potato), cubed (optional)",
    "2 tomatoes, cubed",
    "2 thumbs ginger, crushed (optional)",
    "1 onion, chopped",
    "4 cloves garlic, crushed",
    "2 teaspoons bagoong alamang (shrimp paste)",
    "2 1/2 cups water",
    "3 tablespoons cooking oil",
    "1/4 teaspoon ground black pepper"
  ],
  "steps": [
    "Heat oil and sauté the onion, garlic, and ginger until the onion softens.",
    "Add half the lechon kawali and sauté 1 minute.",
    "Pour in water and bring to a boil; add the shrimp cube, cover, and cook 20 minutes on medium heat.",
    "Stir in the tomatoes and bagoong alamang; cook 3 minutes.",
    "Add the kalabasa and kamote; cook 7 minutes.",
    "Add the sitaw, okra, ampalaya, and eggplant; stir, cover, and cook 5 minutes.",
    "Season with pepper and fold in the remaining lechon kawali (kept crunchy for texture). Serve with rice."
  ],
  "notes": "Pinakbet means 'shriveled' — the vegetables reduce as they braise. The Ilocano original skips squash and uses fish paste (bagoong isda).",
  "source": "https://panlasangpinoy.com/pinakbet-tagalog-recipe-knr-sc/"
},
{
  "id": "arroz-caldo",
  "dish": "Arroz Caldo",
  "kind": "Savory",
  "type": "Traditional",
  "name": "Chicken Arroz Caldo",
  "category": "Rice porridge",
  "region": "Nationwide",
  "difficulty": "Easy",
  "prep": "10 min",
  "cook": "50 min",
  "servings": "6",
  "image": "images/arroz-caldo.webp",
  "ingredients": [
    "2 lbs chicken, cut into serving pieces (bone-in)",
    "3/4 cup jasmine rice",
    "3/4 cup sweet (glutinous) rice",
    "2 chicken cubes (Maggi Magic Chicken Cube)",
    "34 oz water (add more as needed)",
    "8 cloves garlic, chopped (for toasted garlic)",
    "3 onions, chopped",
    "8 eggs, hard-boiled (for topping)",
    "1 cup green onions, chopped",
    "3 thumbs ginger, julienned",
    "1 tablespoon safflower (kasubha), optional",
    "1 teaspoon turmeric powder",
    "Fish sauce, to taste",
    "Ground black pepper, to taste",
    "5 tablespoons cooking oil"
  ],
  "steps": [
    "Heat oil in a wok and slow-fry the garlic until golden; remove and set aside as topping.",
    "Sauté the onions in the garlic-infused oil until soft; add the ginger and cook 1 minute.",
    "Add the chicken and sauté until light brown; pour in 2 tablespoons fish sauce.",
    "Add the jasmine and sweet rice and sauté 30 seconds.",
    "Pour in the water, cover, and bring to a boil; add the chicken cubes, then simmer on low 35 to 50 minutes, stirring every few minutes, until thick.",
    "Stir in the turmeric and safflower for color; season with pepper and more fish sauce.",
    "Serve topped with boiled egg, toasted garlic, and green onions, with calamansi and fish sauce on the side."
  ],
  "notes": "The jasmine + glutinous rice combo gives it that creamy, thick texture. Ginger is the backbone of the broth.",
  "source": "https://panlasangpinoy.com/chicken-arroz-caldo-recipe-glutinous-rice-porridge/"
},
{
  "id": "pork-bbq",
  "dish": "Pork Barbecue",
  "kind": "Savory",
  "type": "Traditional",
  "name": "Filipino Pork Barbecue",
  "category": "Grilled",
  "region": "Nationwide",
  "difficulty": "Easy",
  "prep": "3 hr 10 min",
  "cook": "10 min",
  "servings": "8",
  "image": "images/pork-bbq.webp",
  "ingredients": [
    "4 lbs pork shoulder, sliced into thin pieces",
    "3/4 cup soy sauce",
    "1/2 cup calamansi or lemon juice",
    "3/4 cup banana ketchup",
    "4 tablespoons dark brown sugar",
    "2 tablespoons garlic powder",
    "1 teaspoon ground black pepper",
    "2 teaspoons salt",
    "1 1/2 cups lemon-lime soda",
    "Bamboo skewers",
    "Spicy vinegar, for serving"
  ],
  "steps": [
    "Arrange the pork slices in a large bowl.",
    "Add all marinade ingredients (soy sauce, calamansi, banana ketchup, brown sugar, garlic powder, pepper, salt, and soda) and mix well.",
    "Cover and marinate at least 3 hours, ideally overnight.",
    "Fasten the marinated pork onto bamboo skewers.",
    "Grill 3 to 5 minutes per side over charcoal, basting while flipping, until cooked through and caramelized.",
    "Serve immediately with spicy vinegar."
  ],
  "notes": "The signature Filipino flavor comes from banana ketchup, calamansi, and lemon-lime soda in the marinade. Grilling over charcoals gives that smoky street-food taste.",
  "source": "https://panlasangpinoy.com/filipino-style-pork-bbq/"
},
{
  "id": "kinilaw",
  "dish": "Kinilaw",
  "kind": "Savory",
  "type": "Traditional",
  "name": "Kinilaw na Tanigue",
  "category": "Fish ceviche / Appetizer",
  "region": "Visayas / Nationwide",
  "difficulty": "Easy",
  "prep": "15 min",
  "cook": "3 hr (cure)",
  "servings": "6",
  "image": "images/kinilaw.webp",
  "ingredients": [
    "2 lbs tanigue (wahoo) fillet, cut into cubes",
    "2 thumbs fresh ginger, minced",
    "8 Thai chili peppers (siling labuyo), chopped",
    "15 to 20 calamansi, juiced",
    "1 medium red onion, chopped small",
    "1/4 teaspoon ground black pepper",
    "1/2 teaspoon sugar",
    "Salt, to taste"
  ],
  "steps": [
    "Squeeze the calamansi juice into a large bowl through a sieve to catch the seeds.",
    "Stir in the sugar, 1/2 teaspoon salt, and black pepper until dissolved.",
    "Add the ginger, chili, and onion; mix until well blended.",
    "Arrange the raw fish cubes in a bowl and pour the calamansi mixture over; toss to coat. Rest 10 minutes.",
    "Toss again and taste, adjusting salt or calamansi as needed. Cover and refrigerate at least 3 hours to cure.",
    "Serve chilled as an appetizer."
  ],
  "notes": "The Filipino ceviche — raw fish 'cured' in calamansi, not heat. Freshness is everything; tanigue (wahoo) is traditional, but tuna or mackerel work too.",
  "source": "https://panlasangpinoy.com/kinilaw-na-tanigue-recipe-fish-ceviche/"
},
{
  "id": "beef-tapa",
  "dish": "Tapsilog",
  "kind": "Savory",
  "type": "Traditional",
  "name": "Beef Tapa (Tapsilog)",
  "category": "Cured meat / Breakfast",
  "region": "Nationwide",
  "difficulty": "Easy",
  "prep": "15 min",
  "cook": "10 min",
  "servings": "6",
  "image": "images/beef-tapa.webp",
  "ingredients": [
    "3 lbs beef sirloin, thinly sliced",
    "1/2 cup soy sauce",
    "1/4 cup calamansi juice",
    "1 head garlic, peeled and minced",
    "2 tablespoons sugar",
    "1/2 teaspoon salt",
    "1/4 teaspoon pepper",
    "Canola oil, for frying"
  ],
  "steps": [
    "Combine soy sauce, calamansi juice, garlic, sugar, salt, and pepper; stir until dissolved.",
    "Add the beef and massage to coat; refrigerate overnight to cure.",
    "Drain the meat, then heat 1 tablespoon oil in a wide pan over medium heat.",
    "Cook the beef in a single layer, turning, 3 to 5 minutes until the expelled liquid is almost absorbed.",
    "Add another tablespoon of oil and cook until lightly browned and caramelized.",
    "Cut into serving portions and serve hot with garlic fried rice and a fried egg (tapsilog)."
  ],
  "notes": "'Tapsilog' = tapsi (tapa) + sinangag (garlic rice) + itlog (egg) — the all-day Filipino breakfast. Slice thinly across the grain for tenderness.",
  "source": "https://www.kawalingpinoy.com/filipino-beef-tapa/"
},
{
  "id": "longganisa",
  "dish": "Longganisa",
  "kind": "Savory",
  "type": "Traditional",
  "name": "Skinless Longganisa",
  "category": "Sausage / Breakfast",
  "region": "Nationwide",
  "difficulty": "Medium",
  "prep": "20 min",
  "cook": "20 min",
  "servings": "6",
  "image": "images/longganisa.webp",
  "ingredients": [
    "1 3/4 lbs ground pork (high fat)",
    "9 tablespoons dark brown sugar",
    "1 tablespoon smoked paprika",
    "3 tablespoons vegetable oil",
    "1 1/4 tablespoons coarse salt",
    "1 teaspoon ground black pepper",
    "2 heads garlic, crushed and minced"
  ],
  "steps": [
    "Peel, crush, and mince the garlic to release its flavor.",
    "Combine all ingredients in a bowl and mix well by hand (or stand mixer with dough hook).",
    "Refrigerate the mixture 2 hours to help it bind.",
    "Scoop about 3 tablespoons per link and shape into sausage rolls using wax paper and a card (or just form into patties).",
    "In a pan, combine 1 cup water and 4 tablespoons oil; add the longganisa, bring to a boil, then lower heat.",
    "Simmer until the water fully evaporates, then fry both sides in the remaining oil until caramelized. Serve with garlic rice, salted egg, and atchara."
  ],
  "notes": "Sweet-garlicky with no preservatives. Add vinegar and cut the sugar for Vigan-style; add oregano for a Lucban feel.",
  "source": "https://panlasangpinoy.com/skinless-longganisa-recipe/"
}
];

// --- DOM helpers ---
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

// --- Recipe kind (Savory vs Dessert). Existing dessert recipes have no `kind`
//     field and default to "Dessert"; new savory recipes set kind: "Savory". ---
function kindOf(r) { return r.kind || "Dessert"; }
function kindKey(r) { return kindOf(r).toLowerCase(); }

// --- Render collection cards ---
function renderCards() {
  const grid = $("#collectionGrid");
  grid.innerHTML = "";
  RECIPES.forEach((r) => {
    const dish = r.dish || r.dessert;
    const card = document.createElement("article");
    card.className = "card reveal";
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `${r.name} — ${r.type} ${kindOf(r).toLowerCase()} recipe`);
    card.dataset.id = r.id;
    card.dataset.type = r.type.toLowerCase();
    card.dataset.kind = kindKey(r);

    const modern = r.type === "Modern" ? " card__badge--modern" : "";
    card.innerHTML = `
      <div class="card__media">
        <img src="${r.image}" alt="${r.name}" loading="lazy" />
        <span class="card__badge${modern}">${r.type}</span>
        <span class="card__kind card__kind--${kindKey(r)}">${kindOf(r)}</span>
      </div>
      <div class="card__body">
        <span class="card__cat">${dish}</span>
        <h3 class="card__title">${r.name}</h3>
        <div class="card__meta">
          <span>${r.difficulty}</span><span class="dot">·</span>
          <span>${r.cook}</span><span class="dot">·</span>
          <span>Serves ${r.servings}</span>
        </div>
      </div>
    `;
    card.addEventListener("click", () => openModal(r));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openModal(r);
      }
    });
    grid.appendChild(card);
  });
}

// --- Modal ---
const modal = $("#recipeModal");

function openModal(r) {
  $("#modalImage").src = r.image;
  $("#modalImage").alt = r.name;
  $("#modalBadge").textContent = r.type;
  $("#modalTitle").textContent = r.name;
  $("#modalRegion").textContent = r.region;

  $("#modalMeta").innerHTML = `
    <li><strong>Difficulty</strong>${r.difficulty}</li>
    <li><strong>Prep</strong>${r.prep}</li>
    <li><strong>Cook</strong>${r.cook}</li>
    <li><strong>Serves</strong>${r.servings}</li>
  `;

  $("#modalIngredients").innerHTML = r.ingredients
    .map((i) => `<li>${i}</li>`)
    .join("");

  $("#modalSteps").innerHTML = r.steps.map((s) => `<li>${s}</li>`).join("");

  $("#modalNotes").textContent = r.notes;
  const src = $("#modalSource");
  src.href = r.source;

  modal.hidden = false;
  document.body.style.overflow = "hidden";
  modal.querySelector(".modal__panel").scrollTop = 0;
  const focusTarget = $("#modalTitle");
  focusTarget.setAttribute("tabindex", "-1");
  focusTarget.focus();
}

function closeModal() {
  modal.hidden = true;
  document.body.style.overflow = "";
  lastFocused?.focus?.();
}

let lastFocused = null;
document.addEventListener("click", (e) => {
  if (e.target.closest(".card")) {
    lastFocused = e.target.closest(".card");
  }
});
modal.addEventListener("click", (e) => {
  if (e.target.closest("[data-close]")) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.hidden) closeModal();
});

// --- Nav: scrolled state + mobile toggle ---
const nav = $("#nav");
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 40);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

const navToggle = $("#navToggle");
navToggle.addEventListener("click", () => {
  const open = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!open));
  nav.classList.toggle("open", !open);
});
// Close mobile nav on link tap
$$(".nav__links a", nav).forEach((a) =>
  a.addEventListener("click", () => {
    navToggle.setAttribute("aria-expanded", "false");
    nav.classList.remove("open");
  })
);

// --- Scroll reveal ---
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
const observeReveals = () =>
  $$(".reveal:not(.is-visible)").forEach((el) => revealObserver.observe(el));

// --- Filter (two dimensions: Dish × Noon/Ngayon) ---
const filterButtons = $$(".filter");
let activeKind = "all";
let activeType = "all";

function applyFilters() {
  const cards = $$(".card");
  const visible = [];
  cards.forEach((card) => {
    const show =
      (activeKind === "all" || card.dataset.kind === activeKind) &&
      (activeType === "all" || card.dataset.type === activeType);
    card.classList.toggle("is-filtered", !show);
    if (show) {
      card.classList.add("is-visible");
      visible.push(card);
    }
  });

  // Staggered re-entry animation
  visible.forEach((card, i) => {
    card.style.animationDelay = `${i * 55}ms`;
    card.classList.remove("card-enter");
    void card.offsetWidth; // restart the animation
    card.classList.add("card-enter");
  });

  setFilterCounts();
}

function setFilterCounts() {
  $$(".filter").forEach((b) => {
    const dim = b.dataset.dim;
    const val = b.dataset.filter;
    let count = 0;
    if (dim === "kind") {
      count = RECIPES.filter(
        (r) =>
          (val === "all" || kindKey(r) === val) &&
          (activeType === "all" || r.type.toLowerCase() === activeType)
      ).length;
    } else {
      count = RECIPES.filter(
        (r) =>
          (val === "all" || r.type.toLowerCase() === val) &&
          (activeKind === "all" || kindKey(r) === activeKind)
      ).length;
    }
    b.querySelector(".filter__count").textContent = count;
  });
}

filterButtons.forEach((b) =>
  b.addEventListener("click", () => {
    if (b.dataset.dim === "kind") activeKind = b.dataset.filter;
    else activeType = b.dataset.filter;

    $$(`.filter[data-dim="${b.dataset.dim}"]`).forEach((x) => {
      const on = x === b;
      x.classList.toggle("filter--active", on);
      x.setAttribute("aria-pressed", String(on));
    });

    applyFilters();
  })
);

// --- Footer year ---
$("#year").textContent = new Date().getFullYear();

// --- Shuffle collection so savory and dessert mix together ---
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// --- Init ---
shuffle(RECIPES);
renderCards();
setFilterCounts();
observeReveals();
