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

// --- Init ---
renderCards();
setFilterCounts();
observeReveals();
