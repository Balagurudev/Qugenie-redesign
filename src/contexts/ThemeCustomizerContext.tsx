import { createContext, useContext, useEffect, useState, useCallback, type ReactNode } from "react";

// ─── Color Palettes ──────────────────────────────────────────────────────────

export type PaletteId = "blue" | "orange" | "green" | "purple";

export interface ColorPalette {
  id: PaletteId;
  label: string;
  description: string;
  swatch500: string;
  shades: {
    "25": string; "50": string; "100": string; "200": string;
    "300": string; "400": string; "500": string; "600": string;
    "700": string; "800": string; "900": string; "950": string;
  };
}

export const COLOR_PALETTES: ColorPalette[] = [
  {
    id: "blue",
    label: "Ocean Blue",
    description: "Default — deep trust, enterprise clarity",
    swatch500: "#2970FF",
    shades: {
      "25": "#F5F8FF", "50": "#EFF4FF", "100": "#D1E0FF", "200": "#B2CCFF",
      "300": "#84ADFF", "400": "#528BFF", "500": "#2970FF", "600": "#155EEF",
      "700": "#004EEB", "800": "#0040C1", "900": "#00359E", "950": "#002266",
    },
  },
  {
    id: "orange",
    label: "Ember Orange",
    description: "Bold energy, warmth & ambition",
    swatch500: "#FF4405",
    shades: {
      "25": "#FFF9F5", "50": "#FFF4ED", "100": "#FFE6D5", "200": "#FFD6AE",
      "300": "#FF9C66", "400": "#FF692E", "500": "#FF4405", "600": "#E62E05",
      "700": "#BC1B06", "800": "#97180C", "900": "#771A0D", "950": "#57130A",
    },
  },
  {
    id: "green",
    label: "Emerald Green",
    description: "Growth, success & sustainability",
    swatch500: "#16B364",
    shades: {
      "25": "#F6FEF9", "50": "#EDFCF2", "100": "#D3F8DF", "200": "#AAF0C4",
      "300": "#73E2A3", "400": "#3CCB7F", "500": "#16B364", "600": "#099250",
      "700": "#087443", "800": "#095C37", "900": "#084C2E", "950": "#052E1C",
    },
  },
  {
    id: "purple",
    label: "Royal Purple",
    description: "Innovation, creativity & premium",
    swatch500: "#6938EF",
    shades: {
      "25": "#FAFAFF", "50": "#F4F3FF", "100": "#EBE9FE", "200": "#D9D6FE",
      "300": "#BDB4FE", "400": "#9B8AFB", "500": "#7A5AF8", "600": "#6938EF",
      "700": "#5925DC", "800": "#4A1FB8", "900": "#3E1C96", "950": "#27115F",
    },
  },
];

// ─── Typography Options ───────────────────────────────────────────────────────

export type FontId = "mirage" | "inter" | "inter-tight" | "plus-jakarta" | "dm-sans" | "geist";

export interface FontOption {
  id: FontId;
  label: string;
  description: string;
  stack: string;
  googleUrl: string | null;
}

export const FONT_OPTIONS: FontOption[] = [
  {
    id: "mirage",
    label: "Mirage Display",
    description: "Current — editorial, cinematic",
    stack: "'Mirage Display Medium', 'Mirage Display Medium Placeholder', sans-serif",
    googleUrl: null,
  },
  {
    id: "inter",
    label: "Inter",
    description: "Clean, modern — universal readability",
    stack: "'Inter', system-ui, sans-serif",
    googleUrl: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
  },
  {
    id: "inter-tight",
    label: "Inter Tight",
    description: "Condensed Inter — technical & compact",
    stack: "'Inter Tight', 'Inter', system-ui, sans-serif",
    googleUrl: "https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700&display=swap",
  },
  {
    id: "plus-jakarta",
    label: "Plus Jakarta Sans",
    description: "Neue Montreal alternative — geometric",
    stack: "'Plus Jakarta Sans', system-ui, sans-serif",
    googleUrl: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap",
  },
  {
    id: "dm-sans",
    label: "DM Sans",
    description: "Open, approachable — Market Sans feel",
    stack: "'DM Sans', system-ui, sans-serif",
    googleUrl: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap",
  },
  {
    id: "geist",
    label: "Geist Sans",
    description: "Vercel's typeface — precision, code-native",
    stack: "'Geist', system-ui, sans-serif",
    googleUrl: "https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&display=swap",
  },
];

// ─── CSS injection helpers ────────────────────────────────────────────────────

function injectCSSVariables(palette: ColorPalette, primaryKey: keyof ColorPalette["shades"]) {
  const root = document.documentElement;
  const s = palette.shades;

  // Brand palette primitives
  (["25","50","100","200","300","400","500","600","700","800","900","950"] as const).forEach((k) => {
    root.style.setProperty(`--brand-${k}`, s[k]);
  });

  // Semantic tokens
  root.style.setProperty("--primary",           s[primaryKey]);
  root.style.setProperty("--accent",            s["100"]);
  root.style.setProperty("--accent-foreground", s["600"]);
  root.style.setProperty("--ring",              s["300"]);
  root.style.setProperty("--text-brand",        s[primaryKey]);
  root.style.setProperty("--icon-brand-color",  s[primaryKey]);
  root.style.setProperty("--icon-brand-bg",     `${s[primaryKey]}12`);

  // Dark mode equivalents
  root.style.setProperty("--dark-primary",    s["400"]);
  root.style.setProperty("--dark-ring",       s["400"]);
  root.style.setProperty("--dark-text-brand", s["300"]);
  root.style.setProperty("--dark-icon-color", s["300"]);
  root.style.setProperty("--dark-icon-bg",    `${s["300"]}1A`);

  // Glow/beam vars used by CosmicBeamBackground, laser effects etc.
  root.style.setProperty("--glow-primary",   s["500"]);
  root.style.setProperty("--glow-secondary", s["300"]);
  root.style.setProperty("--glow-dim",       s["700"]);
}

/**
 * Injects a <style> tag that overrides ALL hardcoded blue hex values
 * used as Tailwind arbitrary-value classes throughout the codebase.
 * This ensures 100% site-wide color propagation even for components
 * that haven't been refactored to use CSS variables yet.
 */
function injectHardcodedOverrides(palette: ColorPalette) {
  const s = palette.shades;

  // Blue shades to replace (original default palette)
  const blueMap: Record<string, string> = {
    "#F5F8FF": s["25"],  "#EFF4FF": s["50"],  "#D1E0FF": s["100"], "#B2CCFF": s["200"],
    "#84ADFF": s["300"], "#528BFF": s["400"], "#2970FF": s["500"], "#155EEF": s["600"],
    "#004EEB": s["700"], "#0040C1": s["800"], "#00359E": s["900"], "#002266": s["950"],
    // lowercase variants
    "#f5f8ff": s["25"],  "#eff4ff": s["50"],  "#d1e0ff": s["100"], "#b2ccff": s["200"],
    "#84adff": s["300"], "#528bff": s["400"], "#2970ff": s["500"], "#155eef": s["600"],
    "#004eeb": s["700"], "#0040c1": s["800"], "#00359e": s["900"], "#002266": s["950"],
  };

  // Build attribute selector CSS for bg, text, border, fill, stroke
  const prefixes = ["bg", "text", "border", "fill", "stroke", "ring", "from", "to", "via", "shadow", "outline", "decoration", "caret", "accent"];
  const pseudos = ["", "hover:", "focus:", "active:", "group-hover:", "dark:"];

  let css = "/* QuGenie Palette Override — auto-generated */\n";

  for (const [oldHex, newHex] of Object.entries(blueMap)) {
    if (oldHex === newHex) continue; // skip if same palette

    for (const prefix of prefixes) {
      for (const pseudo of pseudos) {
        const cls = `${pseudo}${prefix}-[${oldHex}]`;
        // CSS attribute selector targeting class containing this value
        css += `[class*="${cls}"] { `;
        switch (prefix) {
          case "bg":         css += `background-color: ${newHex} !important;`; break;
          case "text":       css += `color: ${newHex} !important;`; break;
          case "border":     css += `border-color: ${newHex} !important;`; break;
          case "fill":       css += `fill: ${newHex} !important;`; break;
          case "stroke":     css += `stroke: ${newHex} !important;`; break;
          case "ring":       css += `--tw-ring-color: ${newHex} !important;`; break;
          case "from":       css += `--tw-gradient-from: ${newHex} !important;`; break;
          case "to":         css += `--tw-gradient-to: ${newHex} !important;`; break;
          case "via":        css += `--tw-gradient-via: ${newHex} !important;`; break;
          case "shadow":     css += `--tw-shadow-color: ${newHex} !important;`; break;
          case "outline":    css += `outline-color: ${newHex} !important;`; break;
          case "decoration": css += `text-decoration-color: ${newHex} !important;`; break;
          case "caret":      css += `caret-color: ${newHex} !important;`; break;
          case "accent":     css += `accent-color: ${newHex} !important;`; break;
        }
        css += " }\n";
      }
    }

    // Also target inline style attributes containing old hex
    // (box-shadows, gradients etc.)
    css += `[style*="${oldHex}"] { --qg-inline-brand: ${newHex}; }\n`;
  }

  // Handle rgba variants of the main blue (0, 64, 193 = #0040C1)
  // Replace box-shadow glow colours by setting a CSS custom property
  const r800 = parseInt(s["800"].slice(1,3),16);
  const g800 = parseInt(s["800"].slice(3,5),16);
  const b800 = parseInt(s["800"].slice(5,7),16);
  css += `:root { --brand-rgb-800: ${r800}, ${g800}, ${b800}; }\n`;
  const r500 = parseInt(s["500"].slice(1,3),16);
  const g500 = parseInt(s["500"].slice(3,5),16);
  const b500 = parseInt(s["500"].slice(5,7),16);
  css += `:root { --brand-rgb-500: ${r500}, ${g500}, ${b500}; }\n`;

  // Upsert the override style element
  let el = document.getElementById("qg-palette-override") as HTMLStyleElement | null;
  if (!el) {
    el = document.createElement("style");
    el.id = "qg-palette-override";
    document.head.appendChild(el);
  }
  el.textContent = css;
}

function injectFont(font: FontOption) {
  if (font.googleUrl) {
    const linkId = `gf-${font.id}`;
    if (!document.getElementById(linkId)) {
      const link = document.createElement("link");
      link.id = linkId;
      link.rel = "stylesheet";
      link.href = font.googleUrl;
      document.head.appendChild(link);
    }
  }

  // CSS variable + direct DOM application for broadest coverage
  document.documentElement.style.setProperty("--font-brand", font.stack);
  document.body.style.fontFamily = font.stack;

  // Also inject/update a style block so all elements inherit it
  let el = document.getElementById("qg-font-override") as HTMLStyleElement | null;
  if (!el) {
    el = document.createElement("style");
    el.id = "qg-font-override";
    document.head.appendChild(el);
  }
  el.textContent = `
    *, *::before, *::after {
      font-family: ${font.stack} !important;
    }
  `;
}

/** Master apply — call this on Save */
export function applyTheme(palette: ColorPalette, font: FontOption, primaryKey: keyof ColorPalette["shades"]) {
  injectCSSVariables(palette, primaryKey);
  injectHardcodedOverrides(palette);
  injectFont(font);
}

// ─── Context ──────────────────────────────────────────────────────────────────

interface ThemeCustomizerState {
  /** Currently active design system */
  designSystem: "cinematic" | "ebay";
  pendingDesignSystem: "cinematic" | "ebay";
  setPendingDesignSystem: (sys: "cinematic" | "ebay") => void;
  /** Currently saved & applied palette */
  palette: ColorPalette;
  /** Currently saved & applied font */
  font: FontOption;
  /** Pending (not yet saved) palette selection inside the panel */
  pendingPalette: ColorPalette;
  /** Pending (not yet saved) font selection inside the panel */
  pendingFont: FontOption;
  
  /** Current active primary shade key for each palette */
  shadeMapping: Record<PaletteId, keyof ColorPalette["shades"]>;
  /** Pending primary shade key for each palette */
  pendingShadeMapping: Record<PaletteId, keyof ColorPalette["shades"]>;
  
  setPendingPalette: (id: PaletteId) => void;
  setPendingFont: (id: FontId) => void;
  setPendingShade: (paletteId: PaletteId, shadeKey: keyof ColorPalette["shades"]) => void;
  /** Commit pending selections → save to localStorage + apply to whole site */
  saveChanges: () => void;
  /** Discard pending selections → revert to last saved state */
  discardChanges: () => void;
}

export const DEFAULT_SHADES: Record<PaletteId, keyof ColorPalette["shades"]> = {
  blue: "800",
  orange: "500",
  green: "500",
  purple: "600"
};

const ThemeCustomizerContext = createContext<ThemeCustomizerState | null>(null);

export function ThemeCustomizerProvider({ children }: { children: ReactNode }) {
  // ── Saved (applied) state ──────────────────────────────────────────────────
  const [paletteId, setPaletteId] = useState<PaletteId>(
    () => (localStorage.getItem("qg-palette") as PaletteId) ?? "blue"
  );
  const [fontId, setFontId] = useState<FontId>(
    () => (localStorage.getItem("qg-font") as FontId) ?? "mirage"
  );
  const [designSystem, setDesignSystem] = useState<"cinematic" | "ebay">(
    () => (localStorage.getItem("qg-design-system") as "cinematic" | "ebay") ?? "cinematic"
  );
  const [shadeMapping, setShadeMapping] = useState<Record<PaletteId, keyof ColorPalette["shades"]>>(
    () => {
      const saved = localStorage.getItem("qg-shade-mapping");
      return saved ? JSON.parse(saved) : DEFAULT_SHADES;
    }
  );

  // ── Pending (panel-only) state ─────────────────────────────────────────────
  const [pendingPaletteId, setPendingPaletteId] = useState<PaletteId>(paletteId);
  const [pendingFontId, setPendingFontId] = useState<FontId>(fontId);
  const [pendingDesignSystem, setPendingDesignSystem] = useState<"cinematic" | "ebay">(designSystem);
  const [pendingShadeMapping, setPendingShadeMapping] = useState(shadeMapping);

  const palette        = COLOR_PALETTES.find((p) => p.id === paletteId)!;
  const font           = FONT_OPTIONS.find((f) => f.id === fontId)!;
  const pendingPalette = COLOR_PALETTES.find((p) => p.id === pendingPaletteId)!;
  const pendingFont    = FONT_OPTIONS.find((f) => f.id === pendingFontId)!;

  // Apply saved theme on mount
  useEffect(() => {
    applyTheme(palette, font, shadeMapping[palette.id]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const saveChanges = useCallback(() => {
    const isDesignSystemChanged = designSystem !== pendingDesignSystem;

    setPaletteId(pendingPaletteId);
    setFontId(pendingFontId);
    setDesignSystem(pendingDesignSystem);
    setShadeMapping(pendingShadeMapping);
    
    localStorage.setItem("qg-palette", pendingPaletteId);
    localStorage.setItem("qg-font", pendingFontId);
    localStorage.setItem("qg-design-system", pendingDesignSystem);
    localStorage.setItem("qg-shade-mapping", JSON.stringify(pendingShadeMapping));
    
    applyTheme(pendingPalette, pendingFont, pendingShadeMapping[pendingPalette.id]);
    
    // Global body class for eBay layout mode
    if (pendingDesignSystem === "ebay") {
      document.body.classList.add("theme-ebay");
    } else {
      document.body.classList.remove("theme-ebay");
    }

    if (isDesignSystemChanged) {
      window.location.reload();
    }
  }, [designSystem, pendingPaletteId, pendingFontId, pendingDesignSystem, pendingPalette, pendingFont, pendingShadeMapping]);

  const discardChanges = useCallback(() => {
    setPendingPaletteId(paletteId);
    setPendingFontId(fontId);
    setPendingDesignSystem(designSystem);
    setPendingShadeMapping(shadeMapping);
  }, [paletteId, fontId, designSystem, shadeMapping]);

  return (
    <ThemeCustomizerContext.Provider value={{
      designSystem,
      pendingDesignSystem,
      setPendingDesignSystem,
      palette, font,
      pendingPalette, pendingFont,
      shadeMapping, pendingShadeMapping,
      setPendingPalette: (id) => setPendingPaletteId(id),
      setPendingFont:    (id) => setPendingFontId(id),
      setPendingShade:   (id, shade) => setPendingShadeMapping(prev => ({ ...prev, [id]: shade })),
      saveChanges,
      discardChanges,
    }}>
      {children}
    </ThemeCustomizerContext.Provider>
  );
}

export function useThemeCustomizer() {
  const ctx = useContext(ThemeCustomizerContext);
  if (!ctx) throw new Error("useThemeCustomizer must be used inside ThemeCustomizerProvider");
  return ctx;
}
