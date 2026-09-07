# Hapag Savory Build — Progress & Source Map

Status: IN PROGRESS. 20 savory dishes × 2 (traditional + modern) = 40 recipes.

## Data files (written so far)
- `_data/batch1.json` — 5 traditional recipes (Adobo, Sinigang, Lechon Kawali, Kare-Kare, Sisig)
- `_data/batch2.json` — 3 traditional recipes (Crispy Pata, Lumpiang Shanghai, Chicken Inasal)

## Traditional recipes (20) — source URLs
1. Adobo — https://www.kawalingpinoy.com/pork-adobo/ — EXTRACTED (batch1)
2. Sinigang — https://panlasangpinoy.com/pork-sinigang-na-baboy-recipe/ — EXTRACTED (batch1)
3. Lechon Kawali — https://www.kawalingpinoy.com/lechon-kawali/ — EXTRACTED (batch1)
4. Kare-Kare — https://www.kawalingpinoy.com/kare-kare/ — EXTRACTED (batch1)
5. Sisig — https://www.kawalingpinoy.com/sisig/ — EXTRACTED (batch1)
6. Crispy Pata — https://panlasangpinoy.com/crispy-pata-pulutan-recipe/ — EXTRACTED (batch2)
7. Lumpiang Shanghai — https://panlasangpinoy.com/how-to-cook-lumpiang-shanghai-lumpia-knr-pc/ — EXTRACTED (batch2)
8. Chicken Inasal — https://panlasangpinoy.com/grilled-chicken-inasal-recipe/ — EXTRACTED (batch2)
9. Pancit Palabok — https://panlasangpinoy.com/pancit-palabok-recipe/ — TODO extract
10. Bulalo — https://panlasangpinoy.com/bulalo-stewed-beef-shank/ — TODO extract
11. Tinola — https://panlasangpinoy.com/classic-tinolang-manok-recipe/ — TODO extract
12. Bistek Tagalog — https://panlasangpinoy.com/bistek-tagalog-beefsteak-recipe/ — TODO extract
13. Dinuguan — https://panlasangpinoy.com/pork-dinuguan-recipe/ — TODO extract
14. Laing — https://panlasangpinoy.com/laing-recipe/ — TODO extract
15. Pinakbet — https://panlasangpinoy.com/pinakbet-tagalog-recipe-knr-sc/ — TODO extract
16. Arroz Caldo — https://panlasangpinoy.com/chicken-arroz-caldo-recipe-glutinous-rice-porridge/ — TODO extract
17. Pork BBQ — https://panlasangpinoy.com/filipino-style-pork-bbq/ — TODO extract
18. Kinilaw — https://panlasangpinoy.com/kinilaw-na-tanigue-recipe-fish-ceviche/ — TODO extract
19. Tapsilog (Beef Tapa) — https://www.kawalingpinoy.com/filipino-beef-tapa/ — TODO extract
20. Longganisa — https://panlasangpinoy.com/skinless-longganisa-recipe/ — TODO extract

## Modern recipes (20) — planned riffs, NOT yet sourced
1. Adobo → Adobo Fried Rice
2. Sinigang → Sinigang na Salmon sa Miso
3. Lechon → Crispy Pork Belly Lechon Roll (https://www.kawalingpinoy.com/pork-belly-lechon-roll/)
4. Kare-Kare → Crispy Kare-Kare
5. Sisig → Sisig Tacos
6. Crispy Pata → Crispy Pata Kare-Kare
7. Lumpia → Cheeseburger Lumpia
8. Chicken Inasal → (find modern) Inasal — maybe Inasal Bowls / Inasal in gata
9. Pancit Palabok → (find modern) Loaded/Special Palabok
10. Bulalo → (find modern) Bulalo Steak
11. Tinola → (find modern) Tinola sa Gata (coconut)
12. Bistek → (find modern) Bistek Sliders/Burger
13. Dinuguan → (find modern) Dinuguan w/ Puto bumbong / Dinuguan pizza
14. Laing → (find modern) Crispy Laing
15. Pinakbet → (find modern) Pinakbet with Lechon Kawali (panlasangpinoy.com/pinakbet-with-lechon-kawali/)
16. Arroz Caldo → (find modern) Adobo Arroz Caldo / Lugaw with toppings
17. Pork BBQ → (find modern) BBQ Bowl / BBQ rice
18. Kinilaw → (find modern) Kinilaw na Tuna / Kilawin with coconut milk
19. Tapsilog → (find modern) Tapa Benedict
20. Longganisa → (find modern) Longganisa Burger / Longganisa Pasta

## Recipe JSON schema (must match main.js render)
id, dish (family name), kind ("Savory"), type ("Traditional"/"Modern"), name, category,
region, difficulty ("Easy"/"Medium"/"Hard"), prep, cook, servings, image ("images/<id>.webp"),
ingredients[], steps[], notes, source

## TODO (remaining)
- Extract traditional dishes 9-20 (12 more)
- Find + extract 20 modern recipes (search → extract)
- Convert all batch JSON → merge into js/main.js RECIPES array (image paths .webp)
- Generate ~40 savory food images (image_generate, landscape/square, save to images/)
- Verify locally + commit + deploy

## Notes
- Delegation is BROKEN (subagent model gpt-5.4-mini returns expired-token 401) — flagged for Scarlet.
- Do research directly with web_search + web_extract.