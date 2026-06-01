import React, { useEffect, useState, useMemo } from 'react';

interface CosmicParallaxBgProps {
  head: string;
  text: string;
  loop?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const CosmicParallaxBg: React.FC<CosmicParallaxBgProps> = ({
  head,
  text,
  loop = true,
  className = '',
  children,
}) => {
  const [smallStars, setSmallStars] = useState<string>('');
  const [mediumStars, setMediumStars] = useState<string>('');
  const [bigStars, setBigStars] = useState<string>('');

  const textParts = text.split(',').map(part => part.trim());

  const generateStarBoxShadow = (count: number): string => {
    const shadows = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() * 100).toFixed(2);
      const y = Math.floor(Math.random() * 2000);
      shadows.push(`${x}vw ${y}px #FFF`);
    }
    return shadows.join(', ');
  };

  useEffect(() => {
    setSmallStars(generateStarBoxShadow(700));
    setMediumStars(generateStarBoxShadow(200));
    setBigStars(generateStarBoxShadow(100));

    document.documentElement.style.setProperty(
      '--cosmic-anim-iteration',
      loop ? 'infinite' : '1'
    );
  }, [loop]);

  const animIterVar = loop ? 'infinite' : '1';

  return (
    <div className={`cosmic-root ${className}`}>
      <style>{`
        /* ---- Container ---- */
        .cosmic-root {
          position: relative;
          overflow: hidden;
          background: linear-gradient(
            180deg,
            #0c1020 0%,
            #080d1a 30%,
            #050912 55%,
            #020406 75%,
            #000000 100%
          );
        }

        /* ---- Stars ---- */
        .cosmic-s1,
        .cosmic-s2,
        .cosmic-s3 {
          position: absolute;
          top: 0;
          left: 0;
          background: transparent;
        }
        .cosmic-s1 {
          width: 1px; height: 1px;
          animation: cosmicDrift 50s linear ${animIterVar};
        }
        .cosmic-s1::after {
          content: '';
          position: absolute;
          top: 2000px;
          width: 1px; height: 1px;
          background: transparent;
          box-shadow: inherit;
        }
        .cosmic-s2 {
          width: 2px; height: 2px;
          animation: cosmicDrift 100s linear ${animIterVar};
        }
        .cosmic-s2::after {
          content: '';
          position: absolute;
          top: 2000px;
          width: 2px; height: 2px;
          background: transparent;
          box-shadow: inherit;
        }
        .cosmic-s3 {
          width: 3px; height: 3px;
          animation: cosmicDrift 150s linear ${animIterVar};
        }
        .cosmic-s3::after {
          content: '';
          position: absolute;
          top: 2000px;
          width: 3px; height: 3px;
          background: transparent;
          box-shadow: inherit;
        }

        /* ---- Earth (dark mass below curve) ---- */
        .cosmic-earth {
          position: absolute;
          width: 200%;
          height: 200%;
          left: -50%;
          bottom: -163%;
          border-radius: 50%;
          background: #000000;
          z-index: 2;
        }

        /* ---- Blue atmospheric glow (soft haze above curve edge) ---- */
        .cosmic-atmosphere {
          position: absolute;
          width: 200%;
          height: 200%;
          left: -50%;
          bottom: -164%;
          border-radius: 50%;
          background: transparent;
          z-index: 3;
          box-shadow:
            0 -4px 25px 4px color-mix(in srgb, var(--glow-secondary) 60%, transparent),
            0 -8px 50px 8px color-mix(in srgb, var(--glow-primary) 40%, transparent),
            0 -12px 100px 15px color-mix(in srgb, var(--brand-900) 25%, transparent);
        }

        /* ---- Crisp atmosphere edge line ---- */
        .cosmic-atmo-line {
          position: absolute;
          width: 200%;
          height: 200%;
          left: -50%;
          bottom: -165%;
          border-radius: 50%;
          z-index: 4;
          border-top: 2px solid color-mix(in srgb, var(--glow-secondary) 90%, transparent);
          background: transparent;
        }

        /* ---- Text Container ---- */
        .cosmic-text-container {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 65%; /* Space above the earth curve */
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 5;
          padding: 0 24px;
        }

        /* ---- Heading ---- */
        .cosmic-heading {
          text-align: center;
          font-family: 'Mirage Display Medium', 'Mirage_Display_Medium_Placeholder', sans-serif;
          font-size: clamp(36px, 5vw, 64px);
          font-weight: 600;
          line-height: 1.05;
          letter-spacing: -0.02em;
          color: rgba(255, 255, 255, 0.95);
          text-shadow:
            0 0 20px rgba(180, 210, 255, 0.08),
            0 1px 2px rgba(0, 0, 0, 0.6);
          margin-bottom: 24px;
        }

        /* ---- Subtitle ---- */
        .cosmic-subtitle {
          text-align: center;
          font-family: 'Mirage Display Medium', 'Mirage_Display_Medium_Placeholder', sans-serif;
          font-size: clamp(14px, 1.2vw, 16px);
          font-weight: 400;
          letter-spacing: 0;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.7);
          max-width: 800px;
        }

        .cosmic-sub-part-1 {
          display: inline;
          opacity: 0;
          animation: cosmicFadeIn 0.8s ease-out 0.3s forwards;
        }
        .cosmic-sub-part-2 {
          display: inline;
          opacity: 0;
          animation: cosmicFadeIn 0.8s ease-out 0.6s forwards;
        }
        .cosmic-sub-part-3 {
          display: inline;
          opacity: 0;
          animation: cosmicFadeIn 0.8s ease-out 0.9s forwards;
        }
        .cosmic-sub-part-4 {
          display: inline;
          opacity: 0;
          animation: cosmicFadeIn 0.8s ease-out 1.2s forwards;
        }

        /* ---- Keyframes ---- */
        @keyframes cosmicDrift {
          from { transform: translateY(0px); }
          to   { transform: translateY(-2000px); }
        }
        @keyframes cosmicFadeIn {
          0%   { opacity: 0; transform: translateY(8px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Star layers */}
      <div className="cosmic-s1" style={{ boxShadow: smallStars }} />
      <div className="cosmic-s2" style={{ boxShadow: mediumStars }} />
      <div className="cosmic-s3" style={{ boxShadow: bigStars }} />

      {/* Earth + atmosphere */}
      <div className="cosmic-earth" />
      <div className="cosmic-atmosphere" />
      <div className="cosmic-atmo-line" />

      {/* Text Content */}
      <div className="cosmic-text-container">
        {/* Title */}
        <div className="cosmic-heading">{head}</div>

        {/* Subtitle */}
        <div className="cosmic-subtitle">
          {textParts.map((part, index) => (
            <React.Fragment key={index}>
              <span className={`cosmic-sub-part-${index + 1}`}>
                {part}
              </span>
              {index < textParts.length - 1 && ' '}
            </React.Fragment>
          ))}
        </div>
      </div>

      {children}
    </div>
  );
};

export { CosmicParallaxBg };
