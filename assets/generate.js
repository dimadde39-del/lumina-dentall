/**
 * Lumina Dental — Generate all placeholder images
 * Usage: npm install canvas && node generate.js
 * Creates 17 JPGs in the current directory.
 */
const { createCanvas } = require("canvas");
const fs = require("fs");
const path = require("path");

const IMAGES = [
    { name: "hero.jpg", w: 1600, h: 1000, type: "hero" },
    { name: "og-cover.jpg", w: 1200, h: 630, type: "og" },
    { name: "service-1.jpg", w: 1200, h: 800, type: "service", label: "Виниры E-max", hue: 195, icon: "◇" },
    { name: "service-2.jpg", w: 1200, h: 800, type: "service", label: "Имплантация", hue: 210, icon: "⊕" },
    { name: "service-3.jpg", w: 1200, h: 800, type: "service", label: "Отбеливание", hue: 185, icon: "☀" },
    { name: "service-4.jpg", w: 1200, h: 800, type: "service", label: "Лечение", hue: 170, icon: "⊙" },
    { name: "service-5.jpg", w: 1200, h: 800, type: "service", label: "Элайнеры", hue: 200, icon: "◎" },
    { name: "service-6.jpg", w: 1200, h: 800, type: "service", label: "Профгигиена", hue: 160, icon: "✧" },
    { name: "before-1.jpg", w: 1200, h: 800, type: "before", label: "Виниры" },
    { name: "after-1.jpg", w: 1200, h: 800, type: "after", label: "Виниры" },
    { name: "before-2.jpg", w: 1200, h: 800, type: "before", label: "Импланты" },
    { name: "after-2.jpg", w: 1200, h: 800, type: "after", label: "Импланты" },
    { name: "before-3.jpg", w: 1200, h: 800, type: "before", label: "Отбеливание" },
    { name: "after-3.jpg", w: 1200, h: 800, type: "after", label: "Отбеливание" },
    { name: "doctor-1.jpg", w: 900, h: 1100, type: "doctor", label: "Алексей Воронов", hue: 200 },
    { name: "doctor-2.jpg", w: 900, h: 1100, type: "doctor", label: "Марина Светлова", hue: 175 },
    { name: "doctor-3.jpg", w: 900, h: 1100, type: "doctor", label: "Дарья Ким", hue: 190 },
];

function hsl(h, s, l, a) { return a != null ? `hsla(${h},${s}%,${l}%,${a})` : `hsl(${h},${s}%,${l}%)` }

function draw(img) {
    const c = createCanvas(img.w, img.h);
    const ctx = c.getContext("2d");
    const W = img.w, H = img.h;

    switch (img.type) {
        case "hero": {
            let g = ctx.createLinearGradient(0, 0, W, H);
            g.addColorStop(0, "#0f1a28"); g.addColorStop(0.5, "#162232"); g.addColorStop(1, "#0d1620");
            ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);

            // Large soft orbs
            let r = ctx.createRadialGradient(W * 0.7, H * 0.35, 0, W * 0.7, H * 0.35, W * 0.45);
            r.addColorStop(0, "rgba(78,168,222,0.18)"); r.addColorStop(1, "transparent");
            ctx.fillStyle = r; ctx.fillRect(0, 0, W, H);

            r = ctx.createRadialGradient(W * 0.25, H * 0.75, 0, W * 0.25, H * 0.75, W * 0.35);
            r.addColorStop(0, "rgba(232,145,90,0.10)"); r.addColorStop(1, "transparent");
            ctx.fillStyle = r; ctx.fillRect(0, 0, W, H);

            // Decorative lines
            ctx.strokeStyle = "rgba(78,168,222,0.06)"; ctx.lineWidth = 1;
            for (let i = 0; i < 8; i++) {
                ctx.beginPath();
                ctx.moveTo(W * 0.3 + i * 60, 0); ctx.lineTo(W * 0.1 + i * 60, H);
                ctx.stroke();
            }

            // Symbol
            ctx.font = `${H * 0.22}px serif`; ctx.textAlign = "center"; ctx.textBaseline = "middle";
            ctx.fillStyle = "rgba(255,255,255,0.06)"; ctx.fillText("✦", W * 0.5, H * 0.4);

            // Text
            ctx.font = `800 ${H * 0.065}px sans-serif`;
            ctx.fillStyle = "rgba(255,255,255,0.65)"; ctx.fillText("Lumina Dental", W * 0.5, H * 0.6);
            ctx.font = `400 ${H * 0.028}px sans-serif`;
            ctx.fillStyle = "rgba(255,255,255,0.3)";
            ctx.fillText("Эстетическая стоматология · Алматы", W * 0.5, H * 0.68);

            // Bottom accent line
            ctx.fillStyle = "rgba(232,145,90,0.4)";
            ctx.fillRect(W * 0.35, H * 0.76, W * 0.3, 2);
            break;
        }
        case "og": {
            let g = ctx.createLinearGradient(0, 0, W, H);
            g.addColorStop(0, "#0a1018"); g.addColorStop(1, "#141e2c");
            ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);

            ctx.font = `${H * 0.14}px serif`; ctx.textAlign = "center"; ctx.textBaseline = "middle";
            ctx.fillStyle = "rgba(78,168,222,0.2)"; ctx.fillText("✦", W * 0.5, H * 0.35);

            ctx.font = `800 ${H * 0.09}px sans-serif`;
            ctx.fillStyle = "rgba(255,255,255,0.85)"; ctx.fillText("Lumina Dental", W * 0.5, H * 0.55);

            ctx.font = `400 ${H * 0.045}px sans-serif`;
            ctx.fillStyle = "rgba(255,255,255,0.35)";
            ctx.fillText("Эстетическая стоматология · Алматы", W * 0.5, H * 0.72);

            ctx.fillStyle = "rgba(232,145,90,0.5)"; ctx.fillRect(W * 0.3, H * 0.82, W * 0.4, 2);
            break;
        }
        case "service": {
            const hu = img.hue;
            let g = ctx.createLinearGradient(0, 0, W, H);
            g.addColorStop(0, hsl(hu, 28, 12)); g.addColorStop(1, hsl(hu + 20, 22, 16));
            ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);

            let r = ctx.createRadialGradient(W * 0.55, H * 0.45, 0, W * 0.55, H * 0.45, W * 0.4);
            r.addColorStop(0, hsl(hu, 45, 45, 0.1)); r.addColorStop(1, "transparent");
            ctx.fillStyle = r; ctx.fillRect(0, 0, W, H);

            // Geometric accent
            ctx.strokeStyle = hsl(hu, 40, 50, 0.08); ctx.lineWidth = 1.5;
            ctx.beginPath(); ctx.arc(W * 0.5, H * 0.43, H * 0.18, 0, Math.PI * 2); ctx.stroke();
            ctx.beginPath(); ctx.arc(W * 0.5, H * 0.43, H * 0.25, 0, Math.PI * 2); ctx.stroke();

            // Icon
            ctx.font = `${H * 0.12}px sans-serif`; ctx.textAlign = "center"; ctx.textBaseline = "middle";
            ctx.fillStyle = hsl(hu, 40, 60, 0.2); ctx.fillText(img.icon || "✦", W * 0.5, H * 0.42);

            // Label
            ctx.font = `600 ${H * 0.04}px sans-serif`;
            ctx.fillStyle = hsl(hu, 30, 80, 0.6); ctx.fillText(img.label, W * 0.5, H * 0.68);

            // Bottom line
            ctx.fillStyle = hsl(hu, 50, 50, 0.3); ctx.fillRect(W * 0.35, H * 0.78, W * 0.3, 1.5);
            break;
        }
        case "doctor": {
            const hu = img.hue;
            // Light clean background
            let g = ctx.createLinearGradient(0, 0, 0, H);
            g.addColorStop(0, hsl(hu, 12, 90)); g.addColorStop(1, hsl(hu, 8, 82));
            ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);

            // Subtle vignette
            let r = ctx.createRadialGradient(W * 0.5, H * 0.45, W * 0.2, W * 0.5, H * 0.45, W * 0.8);
            r.addColorStop(0, "transparent"); r.addColorStop(1, hsl(hu, 8, 70, 0.3));
            ctx.fillStyle = r; ctx.fillRect(0, 0, W, H);

            // Head silhouette
            const headR = W * 0.14;
            ctx.fillStyle = hsl(hu, 10, 62);
            ctx.beginPath(); ctx.arc(W * 0.5, H * 0.3, headR, 0, Math.PI * 2); ctx.fill();

            // Shoulders/body
            ctx.beginPath();
            ctx.ellipse(W * 0.5, H * 0.82, W * 0.3, H * 0.32, 0, Math.PI, 0);
            ctx.fill();

            // White coat
            ctx.fillStyle = hsl(hu, 5, 94, 0.6);
            ctx.beginPath();
            ctx.ellipse(W * 0.5, H * 0.82, W * 0.28, H * 0.3, 0, Math.PI, 0);
            ctx.fill();

            // Coat line
            ctx.strokeStyle = hsl(hu, 10, 55, 0.15); ctx.lineWidth = 1.5;
            ctx.beginPath(); ctx.moveTo(W * 0.5, H * 0.52); ctx.lineTo(W * 0.5, H * 0.82); ctx.stroke();

            // Name
            ctx.font = `600 ${H * 0.025}px sans-serif`; ctx.textAlign = "center";
            ctx.fillStyle = hsl(hu, 8, 40); ctx.fillText(img.label, W * 0.5, H * 0.93);

            // Role hint
            ctx.font = `400 ${H * 0.018}px sans-serif`;
            ctx.fillStyle = hsl(hu, 8, 55); ctx.fillText("Lumina Dental", W * 0.5, H * 0.96);
            break;
        }
        case "before": {
            let g = ctx.createLinearGradient(0, 0, W, H);
            g.addColorStop(0, "#2a2520"); g.addColorStop(1, "#1c1815");
            ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);

            // Muted warm vignette
            let r = ctx.createRadialGradient(W * 0.5, H * 0.5, 0, W * 0.5, H * 0.5, W * 0.5);
            r.addColorStop(0, "rgba(180,150,120,0.06)"); r.addColorStop(1, "transparent");
            ctx.fillStyle = r; ctx.fillRect(0, 0, W, H);

            // Abstract smile curve (muted)
            ctx.strokeStyle = "rgba(180,160,140,0.15)"; ctx.lineWidth = 2.5;
            ctx.beginPath();
            ctx.moveTo(W * 0.28, H * 0.48);
            ctx.quadraticCurveTo(W * 0.5, H * 0.62, W * 0.72, H * 0.48);
            ctx.stroke();

            // Teeth hints (muted rectangles)
            ctx.fillStyle = "rgba(200,190,170,0.06)";
            for (let i = 0; i < 6; i++) {
                const x = W * 0.36 + i * (W * 0.048);
                ctx.fillRect(x, H * 0.44, W * 0.035, H * 0.06);
            }

            ctx.font = `700 ${H * 0.05}px sans-serif`; ctx.textAlign = "center";
            ctx.fillStyle = "rgba(255,255,255,0.2)"; ctx.fillText("ДО", W * 0.5, H * 0.32);
            ctx.font = `400 ${H * 0.025}px sans-serif`;
            ctx.fillStyle = "rgba(255,255,255,0.12)"; ctx.fillText(img.label, W * 0.5, H * 0.78);
            break;
        }
        case "after": {
            let g = ctx.createLinearGradient(0, 0, W, H);
            g.addColorStop(0, "#142530"); g.addColorStop(1, "#0f1e28");
            ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);

            // Cool bright vignette
            let r = ctx.createRadialGradient(W * 0.5, H * 0.5, 0, W * 0.5, H * 0.5, W * 0.45);
            r.addColorStop(0, "rgba(78,168,222,0.08)"); r.addColorStop(1, "transparent");
            ctx.fillStyle = r; ctx.fillRect(0, 0, W, H);

            // Bright smile curve
            ctx.strokeStyle = "rgba(78,168,222,0.25)"; ctx.lineWidth = 2.5;
            ctx.beginPath();
            ctx.moveTo(W * 0.28, H * 0.48);
            ctx.quadraticCurveTo(W * 0.5, H * 0.62, W * 0.72, H * 0.48);
            ctx.stroke();

            // Bright teeth hints
            ctx.fillStyle = "rgba(220,240,255,0.08)";
            for (let i = 0; i < 6; i++) {
                const x = W * 0.36 + i * (W * 0.048);
                ctx.fillRect(x, H * 0.44, W * 0.035, H * 0.06);
            }

            // Sparkle accents
            ctx.fillStyle = "rgba(78,168,222,0.15)";
            ctx.font = `${H * 0.04}px serif`; ctx.textAlign = "center";
            ctx.fillText("✦", W * 0.65, H * 0.38); ctx.fillText("✦", W * 0.38, H * 0.42);

            ctx.font = `700 ${H * 0.05}px sans-serif`;
            ctx.fillStyle = "rgba(78,168,222,0.45)"; ctx.fillText("ПОСЛЕ", W * 0.5, H * 0.32);
            ctx.font = `400 ${H * 0.025}px sans-serif`;
            ctx.fillStyle = "rgba(255,255,255,0.2)"; ctx.fillText(img.label, W * 0.5, H * 0.78);

            // Accent line
            ctx.fillStyle = "rgba(78,168,222,0.3)"; ctx.fillRect(W * 0.35, H * 0.86, W * 0.3, 1.5);
            break;
        }
    }
    return c;
}

// Generate all
let count = 0;
for (const img of IMAGES) {
    const canvas = draw(img);
    const buf = canvas.toBuffer("image/jpeg", { quality: 0.88 });
    const out = path.join(__dirname, img.name);
    fs.writeFileSync(out, buf);
    const kb = (buf.length / 1024).toFixed(0);
    count++;
    console.log(`✔ [${count}/17] ${img.name} — ${img.w}×${img.h} — ${kb} KB`);
}
console.log(`\n✅ Все ${count} файлов сгенерированы в ${__dirname}`);
