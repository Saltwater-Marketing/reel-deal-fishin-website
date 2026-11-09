"""Make 800px phone copies of large photos and record image sizes.
Run after adding photos to src/images:  python3 scripts/make-image-variants.py"""
import json, pathlib
from PIL import Image
d = pathlib.Path(__file__).resolve().parent.parent / "src" / "images"
sizes = {}
for f in sorted(d.glob("*.webp")):
    if f.stem.endswith(("-800", "-300")):
        continue
    im = Image.open(f); w, h = im.size; sizes[f.stem] = [w, h]
    v = d / f"{f.stem}-800.webp"
    if w > 900 and not v.exists():
        im.convert("RGB").resize((800, round(h * 800 / w)), Image.LANCZOS).save(v, "WEBP", quality=78)
(d.parent / "_data" / "imgsizes.json").write_text(json.dumps(sizes))
print(len(sizes), "images")
