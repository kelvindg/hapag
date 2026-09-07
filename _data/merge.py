import json, glob

base = "/home/d3g7760/Documents/Hermes/hapag"
files = sorted(glob.glob(base + "/_data/batch*.json"))

recipes = []
for f in files:
    with open(f) as fh:
        recipes.extend(json.load(fh))

# sanity: expect 40 (20 traditional + 20 modern)
trad = [r for r in recipes if r.get("type") == "Traditional"]
mod  = [r for r in recipes if r.get("type") == "Modern"]
print(f"loaded {len(recipes)} recipes ({len(trad)} traditional, {len(mod)} modern)")
for r in recipes:
    assert "kind" in r and r["kind"] == "Savory", f"missing kind: {r.get('id')}"
    assert "image" in r and "source" in r, f"missing fields: {r.get('id')}"

# Build a JS array body (JSON objects are valid JS literals)
entries = []
for r in recipes:
    entries.append(json.dumps(r, indent=2, ensure_ascii=False))
body = ",\n".join(entries)

# Read main.js and insert before the closing of RECIPES
with open(base + "/js/main.js") as fh:
    content = fh.read()

anchor = "\n];\n\n// --- DOM helpers ---"
if anchor not in content:
    raise SystemExit("ANCHOR NOT FOUND — inspect main.js structure")

new_content = content.replace(
    anchor,
    ",\n" + body + "\n];\n\n// --- DOM helpers ---",
    1,
)

with open(base + "/js/main.js", "w") as fh:
    fh.write(new_content)

print("merged into js/main.js")

# Also emit a marker count check
with open(base + "/js/main.js") as fh:
    c = fh.read()
print("kindOf refs:", c.count("kindOf"))
print("savory images referenced:", c.count('"kind": "Savory"'))