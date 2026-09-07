import json, subprocess, os
from PIL import Image

base = os.path.dirname(os.path.abspath(__file__))
hapag = os.path.dirname(base)
manifest = json.load(open(os.path.join(base, "images.json")))
out = os.path.join(hapag, "images")

for mid, url in manifest.items():
    png = os.path.join(out, mid + ".png")
    webp = os.path.join(out, mid + ".webp")
    subprocess.run(["curl", "-sL", url, "-o", png], check=True)
    im = Image.open(png).convert("RGB")
    im.save(webp, "WEBP", quality=82, method=6)
    os.remove(png)
    print("saved", webp)
print("done:", len(manifest), "images")