import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  useThemeCustomizer,
  COLOR_PALETTES,
  FONT_OPTIONS,
  type PaletteId,
  type FontId,
} from "@/contexts/ThemeCustomizerContext";

function PaintIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/>
      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/>
      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>
      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/>
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 011.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      fontSize: 10, fontWeight: 700, letterSpacing: "0.12em",
      textTransform: "uppercase", color: "var(--text-subtle,#8ba3cc)",
      marginBottom: 10, marginTop: 0,
    }}>{children}</p>
  );
}

export function ThemeCustomizerPanel() {
  const [open, setOpen] = useState(false);
  const {
    palette, font, shadeMapping, designSystem,
    pendingPalette, pendingFont, pendingShadeMapping, pendingDesignSystem,
    setPendingPalette, setPendingFont, setPendingShade, setPendingDesignSystem,
    saveChanges, discardChanges,
  } = useThemeCustomizer();

  const hasChanges =
    pendingPalette.id !== palette.id || pendingFont.id !== font.id ||
    pendingDesignSystem !== designSystem ||
    JSON.stringify(pendingShadeMapping) !== JSON.stringify(shadeMapping);

  function handleClose() {
    discardChanges();
    setOpen(false);
  }

  function handleSave() {
    saveChanges();
    setOpen(false);
  }

  return (
    <>
      {/* ── Trigger button ── */}
      <motion.button
        id="theme-customizer-trigger"
        onClick={() => setOpen((o) => !o)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        title="Customize theme"
        style={{
          display: "flex", alignItems: "center", justifyContent: "center",
          width: 38, height: 38, borderRadius: "50%",
          border: "1px solid var(--border,rgba(255,255,255,0.12))",
          background: open
            ? `var(--brand-800,#0040C1)`
            : "var(--secondary,rgba(255,255,255,0.05))",
          color: open ? "#fff" : "var(--foreground,#f0f4ff)",
          cursor: "pointer",
          transition: "background 0.2s, color 0.2s",
          flexShrink: 0,
          position: "relative",
        }}
      >
        <PaintIcon />
        {/* Dot indicator when saved palette ≠ default */}
        {palette.id !== "blue" && (
          <span style={{
            position: "absolute", top: 5, right: 5,
            width: 7, height: 7, borderRadius: "50%",
            background: palette.shades[shadeMapping[palette.id]],
            border: "1.5px solid var(--background,#080c14)",
          }}/>
        )}
      </motion.button>

      {/* ── Panel ── */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="bd"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={handleClose}
              style={{ position: "fixed", inset: 0, zIndex: 9998, cursor: "default" }}
            />

            <motion.div
              key="panel"
              id="theme-customizer-panel"
              initial={{ opacity: 0, y: -10, scale: 0.97 }}
              animate={{ opacity: 1, y: 0,  scale: 1 }}
              exit={{   opacity: 0, y: -10, scale: 0.97 }}
              transition={{ type: "spring", stiffness: 420, damping: 32 }}
              style={{
                position: "fixed", top: 78, right: 24, zIndex: 9999,
                width: 308,
                background: "var(--surface-card,#0f1623)",
                border: "1px solid var(--surface-border,#1e2d45)",
                borderRadius: 18,
                boxShadow: "0 28px 64px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04) inset",
                overflow: "hidden",
              }}
            >
              {/* Panel header */}
              <div style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "16px 18px 13px",
                borderBottom: "1px solid var(--surface-border,#1e2d45)",
              }}>
                <div>
                  <p style={{ fontSize: 14, fontWeight: 700, color: "var(--text-heading,#e8f0fe)", margin: 0 }}>
                    Customize
                  </p>
                  <p style={{ fontSize: 11, color: "var(--text-subtle,#8ba3cc)", margin: 0, marginTop: 1 }}>
                    Choose palette & typography
                  </p>
                </div>
                <button onClick={handleClose} style={{
                  background: "none", border: "none", cursor: "pointer",
                  color: "var(--text-subtle,#8ba3cc)", padding: 4,
                  borderRadius: 6, lineHeight: 0,
                }}>
                  <CloseIcon />
                </button>
              </div>

              <div style={{ padding: "18px 18px 0" }}>
                {/* ── Design System ── */}
                <SectionLabel>Design System</SectionLabel>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 22 }}>
                  <motion.button
                    onClick={() => setPendingDesignSystem("cinematic")}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    style={{
                      display: "flex", flexDirection: "column", gap: 7, padding: "10px 11px", borderRadius: 11,
                      border: pendingDesignSystem === "cinematic" ? "2px solid var(--primary)" : "1.5px solid var(--surface-border,#1e2d45)",
                      background: pendingDesignSystem === "cinematic" ? "var(--surface-hover,#18253a)" : "var(--surface-card,#0f1623)",
                      textAlign: "left", cursor: "pointer", transition: "background 0.2s, border-color 0.2s",
                    }}
                  >
                    <span style={{ fontSize: 13, fontWeight: 600, color: "var(--text-heading,#e8f0fe)" }}>Cinematic</span>
                    <span style={{ fontSize: 11, color: "var(--text-subtle,#8ba3cc)" }}>Dark, glowing</span>
                  </motion.button>
                  <motion.button
                    onClick={() => setPendingDesignSystem("ebay")}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    style={{
                      display: "flex", flexDirection: "column", gap: 7, padding: "10px 11px", borderRadius: 11,
                      border: pendingDesignSystem === "ebay" ? "2px solid var(--primary)" : "1.5px solid var(--surface-border,#1e2d45)",
                      background: pendingDesignSystem === "ebay" ? "var(--surface-hover,#18253a)" : "var(--surface-card,#0f1623)",
                      textAlign: "left", cursor: "pointer", transition: "background 0.2s, border-color 0.2s",
                    }}
                  >
                    <span style={{ fontSize: 13, fontWeight: 600, color: "var(--text-heading,#e8f0fe)" }}>Design System 2</span>
                    <span style={{ fontSize: 11, color: "var(--text-subtle,#8ba3cc)" }}>Light, flat</span>
                  </motion.button>
                </div>

                {/* ── Color palette ── */}
                <SectionLabel>Color palette</SectionLabel>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 22 }}>
                  {COLOR_PALETTES.map((p) => {
                    const active = pendingPalette.id === p.id;
                    const activeShade = pendingShadeMapping[p.id as PaletteId];
                    const activeColor = p.shades[activeShade];
                    return (
                      <motion.button
                        key={p.id}
                        id={`palette-btn-${p.id}`}
                        onClick={() => setPendingPalette(p.id as PaletteId)}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        style={{
                          display: "flex", flexDirection: "column", gap: 7,
                          padding: "10px 11px", borderRadius: 11,
                          border: active
                            ? `2px solid ${activeColor}`
                            : "1.5px solid var(--surface-border,#1e2d45)",
                          background: active ? `${activeColor}1A` : "var(--surface-secondary,#0b1120)",
                          cursor: "pointer", textAlign: "left",
                          transition: "border 0.15s, background 0.15s",
                          position: "relative",
                        }}
                      >
                        {/* Shade swatches */}
                        <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
                          {(["400","500","600","800"] as const).map((sh) => (
                            <div 
                              key={sh} 
                              onClick={(e) => {
                                e.stopPropagation();
                                setPendingShade(p.id as PaletteId, sh);
                                setPendingPalette(p.id as PaletteId);
                              }}
                              style={{
                                width: 14, height: 14, borderRadius: "50%",
                                background: p.shades[sh], flexShrink: 0,
                                border: activeShade === sh ? "2px solid #fff" : "none",
                                boxShadow: activeShade === sh ? "0 0 0 1px rgba(255,255,255,0.2)" : "none",
                                cursor: "pointer"
                              }}
                              title={`Select ${sh} shade`}
                            />
                          ))}
                          {active && (
                            <div style={{
                              marginLeft: "auto", width: 16, height: 16, borderRadius: "50%",
                              background: activeColor,
                              display: "flex", alignItems: "center", justifyContent: "center",
                              color: "#fff", flexShrink: 0,
                            }}>
                              <CheckIcon />
                            </div>
                          )}
                        </div>
                        <p style={{ fontSize: 12, fontWeight: 600, color: "var(--text-heading,#e8f0fe)", margin: 0 }}>
                          {p.label}
                        </p>
                        <p style={{ fontSize: 10, color: "var(--text-subtle,#8ba3cc)", margin: 0, lineHeight: 1.35 }}>
                          {p.description}
                        </p>
                      </motion.button>
                    );
                  })}
                </div>

                {/* ── Typography ── */}
                <SectionLabel>Typography</SectionLabel>
                <div style={{ display: "flex", flexDirection: "column", gap: 5, marginBottom: 20 }}>
                  {FONT_OPTIONS.map((f) => {
                    const active = pendingFont.id === f.id;
                    return (
                      <motion.button
                        key={f.id}
                        id={`font-btn-${f.id}`}
                        onClick={() => setPendingFont(f.id as FontId)}
                        whileHover={{ x: 3 }}
                        whileTap={{ scale: 0.98 }}
                        style={{
                          display: "flex", alignItems: "center", justifyContent: "space-between",
                          padding: "9px 11px", borderRadius: 9,
                          border: active
                            ? `1.5px solid ${pendingPalette.shades[pendingShadeMapping[pendingPalette.id]]}`
                            : "1.5px solid var(--surface-border,#1e2d45)",
                          background: active ? `${pendingPalette.shades[pendingShadeMapping[pendingPalette.id]]}14` : "transparent",
                          cursor: "pointer",
                          transition: "border 0.15s, background 0.15s",
                        }}
                      >
                        <div style={{ textAlign: "left" }}>
                          <p style={{
                            fontSize: 13, fontWeight: 600,
                            color: "var(--text-heading,#e8f0fe)",
                            margin: 0, fontFamily: f.stack,
                          }}>{f.label}</p>
                          <p style={{ fontSize: 10, color: "var(--text-subtle,#8ba3cc)", margin: 0 }}>
                            {f.description}
                          </p>
                        </div>
                        {active && (
                          <div style={{
                            width: 18, height: 18, borderRadius: "50%",
                            background: pendingPalette.shades[pendingShadeMapping[pendingPalette.id]],
                            display: "flex", alignItems: "center", justifyContent: "center",
                            color: "#fff", flexShrink: 0,
                          }}>
                            <CheckIcon />
                          </div>
                        )}
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* ── Footer actions ── */}
              <div style={{
                padding: "14px 18px 18px",
                borderTop: "1px solid var(--surface-border,#1e2d45)",
                display: "flex", gap: 8,
              }}>
                {/* Reset */}
                <motion.button
                  whileHover={{ opacity: 0.8 }} whileTap={{ scale: 0.97 }}
                  onClick={() => { 
                    setPendingPalette("blue"); 
                    setPendingFont("mirage"); 
                    setPendingShade("blue", "800"); 
                    setPendingShade("orange", "500"); 
                    setPendingShade("green", "500"); 
                    setPendingShade("purple", "600"); 
                  }}
                  style={{
                    flex: 1, padding: "9px 0", borderRadius: 9,
                    border: "1px solid var(--surface-border,#1e2d45)",
                    background: "transparent", fontSize: 12, fontWeight: 500,
                    color: "var(--text-subtle,#8ba3cc)", cursor: "pointer",
                  }}
                >
                  Reset
                </motion.button>

                {/* Save — primary action */}
                <motion.button
                  id="theme-customizer-save"
                  whileHover={{
                    scale: 1.03,
                    boxShadow: `0 8px 20px ${pendingPalette.shades[pendingShadeMapping[pendingPalette.id]]}40`,
                  }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleSave}
                  style={{
                    flex: 2, padding: "9px 0", borderRadius: 9,
                    border: "none",
                    background: hasChanges
                      ? pendingPalette.shades[pendingShadeMapping[pendingPalette.id]]
                      : "var(--surface-secondary,#0b1120)",
                    color: hasChanges ? "#fff" : "var(--text-subtle,#8ba3cc)",
                    fontSize: 13, fontWeight: 700, cursor: "pointer",
                    transition: "background 0.2s, color 0.2s",
                  }}
                >
                  {hasChanges ? "Apply changes" : "Saved ✓"}
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
