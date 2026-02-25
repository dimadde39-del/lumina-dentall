"""
Lumina Dental — Premium Placeholder Image Generator
Generates 17 gradient-based placeholder JPGs for assets/
"""
import os, math, colorsys
from PIL import Image, ImageDraw, ImageFilter

OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "assets")
os.makedirs(OUT, exist_ok=True)

def hsl_to_rgb(h, s, l):
    r, g, b = colorsys.hls_to_rgb(h / 360, l / 100, s / 100)
    return (int(r * 255), int(g * 255), int(b * 255))

def lerp_color(c1, c2, t):
    return tuple(int(a + (b - a) * t) for a, b in zip(c1, c2))

def draw_gradient(draw, w, h, c1, c2, direction="diagonal"):
    for y in range(h):
        for x in range(w):
            if direction == "diagonal":
                t = (x / w * 0.6 + y / h * 0.4)
            elif direction == "vertical":
                t = y / h
            else:
                t = x / w
            c = lerp_color(c1, c2, t)
            draw.point((x, y), fill=c)

def add_radial_glow(img, cx_frac, cy_frac, radius_frac, color, alpha=40):
    w, h = img.size
    cx, cy = int(w * cx_frac), int(h * cy_frac)
    radius = int(max(w, h) * radius_frac)
    overlay = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    od = ImageDraw.Draw(overlay)
    for r in range(radius, 0, -2):
        a = int(alpha * (1 - (r / radius) ** 1.5))
        if a < 1:
            continue
        fill = (*color, a)
        od.ellipse([cx - r, cy - r, cx + r, cy + r], fill=fill)
    img.paste(Image.alpha_composite(img.convert("RGBA"), overlay).convert("RGB"))

def add_soft_line(draw, w, h, y_frac, color, thickness=2):
    y = int(h * y_frac)
    x1 = int(w * 0.3)
    x2 = int(w * 0.7)
    draw.line([(x1, y), (x2, y)], fill=color, width=thickness)

def add_circle_accent(draw, w, h, cx_frac, cy_frac, r_frac, color, width=2):
    cx, cy = int(w * cx_frac), int(h * cy_frac)
    r = int(min(w, h) * r_frac)
    draw.ellipse([cx - r, cy - r, cx + r, cy + r], outline=color, width=width)

def add_diamond(draw, w, h, cx_frac, cy_frac, size_frac, color):
    cx, cy = int(w * cx_frac), int(h * cy_frac)
    s = int(min(w, h) * size_frac)
    pts = [(cx, cy - s), (cx + s, cy), (cx, cy + s), (cx - s, cy)]
    draw.polygon(pts, outline=color, fill=None)

def add_arc_smile(draw, w, h, color, width=3):
    x1, y1 = int(w * 0.3), int(h * 0.35)
    x2, y2 = int(w * 0.7), int(h * 0.55)
    draw.arc([x1, y1, x2, y2], start=10, end=170, fill=color, width=width)

def add_silhouette(draw, w, h, hue):
    body_color = hsl_to_rgb(hue, 10, 55)
    coat_color = hsl_to_rgb(hue, 5, 85)
    cx = w // 2
    # Head
    hr = int(w * 0.13)
    head_y = int(h * 0.3)
    draw.ellipse([cx - hr, head_y - hr, cx + hr, head_y + hr], fill=body_color)
    # Shoulders
    sw, sh = int(w * 0.35), int(h * 0.35)
    body_y = int(h * 0.78)
    draw.ellipse([cx - sw, body_y - sh, cx + sw, body_y + sh], fill=body_color)
    # Coat
    cw, ch = int(w * 0.32), int(h * 0.32)
    draw.ellipse([cx - cw, body_y - ch, cx + cw, body_y + ch], fill=coat_color)
    # Collar line
    draw.line([(cx, int(h * 0.43)), (cx, int(h * 0.65))], fill=hsl_to_rgb(hue, 8, 70), width=2)


IMAGES = [
    # HERO
    {"name": "hero.jpg", "w": 1600, "h": 1000, "type": "hero"},
    # OG
    {"name": "og-cover.jpg", "w": 1200, "h": 630, "type": "og"},
    # SERVICES
    {"name": "service-implant.jpg", "w": 1200, "h": 800, "type": "service", "hue": 210, "accent": (60, 130, 200)},
    {"name": "service-veneers.jpg", "w": 1200, "h": 800, "type": "service", "hue": 195, "accent": (78, 168, 222)},
    {"name": "service-whitening.jpg", "w": 1200, "h": 800, "type": "service", "hue": 48, "accent": (230, 210, 140)},
    {"name": "service-therapy.jpg", "w": 1200, "h": 800, "type": "service", "hue": 170, "accent": (60, 180, 160)},
    {"name": "service-surgery.jpg", "w": 1200, "h": 800, "type": "service", "hue": 220, "accent": (80, 110, 190)},
    {"name": "service-orthodontics.jpg", "w": 1200, "h": 800, "type": "service", "hue": 280, "accent": (150, 100, 200)},
    # DOCTORS
    {"name": "doctor-1.jpg", "w": 900, "h": 1100, "type": "doctor", "hue": 200},
    {"name": "doctor-2.jpg", "w": 900, "h": 1100, "type": "doctor", "hue": 175},
    {"name": "doctor-3.jpg", "w": 900, "h": 1100, "type": "doctor", "hue": 190},
    # CASES
    {"name": "case-1-before.jpg", "w": 1200, "h": 800, "type": "before", "hue": 30},
    {"name": "case-1-after.jpg", "w": 1200, "h": 800, "type": "after", "hue": 200},
    {"name": "case-2-before.jpg", "w": 1200, "h": 800, "type": "before", "hue": 25},
    {"name": "case-2-after.jpg", "w": 1200, "h": 800, "type": "after", "hue": 195},
    {"name": "case-3-before.jpg", "w": 1200, "h": 800, "type": "before", "hue": 35},
    {"name": "case-3-after.jpg", "w": 1200, "h": 800, "type": "after", "hue": 205},
]

count = 0
for spec in IMAGES:
    w, h = spec["w"], spec["h"]
    t = spec["type"]
    name = spec["name"]
    hue = spec.get("hue", 210)

    img = Image.new("RGB", (w, h))
    draw = ImageDraw.Draw(img)

    if t == "hero":
        draw_gradient(draw, w, h, (15, 25, 40), (22, 35, 50))
        add_radial_glow(img, 0.65, 0.38, 0.4, (78, 168, 222), alpha=35)
        add_radial_glow(img, 0.28, 0.72, 0.3, (232, 145, 90), alpha=22)
        draw = ImageDraw.Draw(img)
        # Decorative diagonal lines
        for i in range(10):
            x_off = i * 80
            draw.line([(200 + x_off, 0), (100 + x_off, h)], fill=(78, 168, 222, 12), width=1)
        add_diamond(draw, w, h, 0.5, 0.4, 0.12, (255, 255, 255, 20))
        add_circle_accent(draw, w, h, 0.5, 0.4, 0.18, (78, 168, 222, 18), width=1)
        add_soft_line(draw, w, h, 0.72, (232, 145, 90, 80), thickness=2)

    elif t == "og":
        draw_gradient(draw, w, h, (10, 16, 24), (20, 30, 44))
        add_radial_glow(img, 0.5, 0.45, 0.35, (78, 168, 222), alpha=25)
        draw = ImageDraw.Draw(img)
        add_diamond(draw, w, h, 0.5, 0.38, 0.08, (255, 255, 255, 30))
        add_soft_line(draw, w, h, 0.78, (232, 145, 90, 90), thickness=2)

    elif t == "service":
        accent = spec.get("accent", (78, 168, 222))
        bg1 = hsl_to_rgb(hue, 28, 12)
        bg2 = hsl_to_rgb(hue + 20, 22, 16)
        draw_gradient(draw, w, h, bg1, bg2)
        add_radial_glow(img, 0.55, 0.45, 0.38, accent, alpha=28)
        draw = ImageDraw.Draw(img)
        add_circle_accent(draw, w, h, 0.5, 0.42, 0.15, (*accent[:3], 25), width=2)
        add_circle_accent(draw, w, h, 0.5, 0.42, 0.22, (*accent[:3], 15), width=1)
        add_soft_line(draw, w, h, 0.75, (*accent[:3], 60), thickness=2)

    elif t == "doctor":
        bg1 = hsl_to_rgb(hue, 12, 88)
        bg2 = hsl_to_rgb(hue, 8, 80)
        draw_gradient(draw, w, h, bg1, bg2, direction="vertical")
        add_radial_glow(img, 0.5, 0.45, 0.5, hsl_to_rgb(hue, 8, 68), alpha=30)
        draw = ImageDraw.Draw(img)
        add_silhouette(draw, w, h, hue)

    elif t == "before":
        bg1 = hsl_to_rgb(hue, 15, 13)
        bg2 = hsl_to_rgb(hue, 10, 10)
        draw_gradient(draw, w, h, bg1, bg2)
        add_radial_glow(img, 0.5, 0.5, 0.35, hsl_to_rgb(hue, 20, 30), alpha=18)
        draw = ImageDraw.Draw(img)
        add_arc_smile(draw, w, h, hsl_to_rgb(hue, 15, 35), width=3)
        # Muted small rectangles (abstract teeth)
        for i in range(6):
            x = int(w * 0.37 + i * w * 0.045)
            y = int(h * 0.44)
            rw, rh = int(w * 0.03), int(h * 0.06)
            draw.rectangle([x, y, x + rw, y + rh], fill=hsl_to_rgb(hue, 8, 20))

    elif t == "after":
        bg1 = hsl_to_rgb(hue, 25, 14)
        bg2 = hsl_to_rgb(hue, 18, 11)
        draw_gradient(draw, w, h, bg1, bg2)
        add_radial_glow(img, 0.5, 0.48, 0.38, hsl_to_rgb(hue, 45, 50), alpha=22)
        draw = ImageDraw.Draw(img)
        add_arc_smile(draw, w, h, hsl_to_rgb(hue, 40, 55), width=3)
        # Brighter rectangles
        for i in range(6):
            x = int(w * 0.37 + i * w * 0.045)
            y = int(h * 0.44)
            rw, rh = int(w * 0.03), int(h * 0.06)
            draw.rectangle([x, y, x + rw, y + rh], fill=hsl_to_rgb(hue, 20, 30))
        # Sparkle dots
        for px, py in [(0.62, 0.35), (0.38, 0.38), (0.55, 0.32)]:
            cx, cy = int(w * px), int(h * py)
            draw.ellipse([cx - 3, cy - 3, cx + 3, cy + 3], fill=hsl_to_rgb(hue, 40, 60))
        add_soft_line(draw, w, h, 0.82, hsl_to_rgb(hue, 40, 50), thickness=2)

    # Slight gaussian blur for softness
    img = img.filter(ImageFilter.GaussianBlur(radius=1.5))

    # Save
    path = os.path.join(OUT, name)
    img.save(path, "JPEG", quality=85, optimize=True)
    size_kb = os.path.getsize(path) / 1024
    count += 1
    print(f"  [{count:2d}/17] {name:30s} {w}x{h}  {size_kb:6.0f} KB")

print(f"\n  All {count} images saved to: {OUT}")
