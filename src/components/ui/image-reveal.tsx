'use client';

import React, { useState } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface ImageData {
  id: number;
  src?: string;
  images?: string[];
  alt: string;
  desc?: string;
}

export interface ImageRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  images: ImageData[];
  variant?: 'default' | 'blue-theme' | 'green-theme' | 'dark-theme';
  size?: 'default' | 'compact' | 'expanded';
  asChild?: boolean;
}

const ImageReveal = React.forwardRef<HTMLDivElement, ImageRevealProps>(
  ({ images, variant = 'dark-theme', size = 'default', asChild, className, children, ...props }, ref) => {
    const [activeImage, setActiveImage] = useState<ImageData | null>(null);

    const variantClasses = {
      default: 'dark:bg-gradient-to-b from-black from-10% to-gray-950 to-100% bg-gray-100',
      'blue-theme': 'dark:bg-gradient-to-b from-blue-900 from-10% to-blue-950 to-100% bg-blue-100',
      'green-theme': 'dark:bg-gradient-to-b from-green-900 from-10% to-green-950 to-100% bg-green-100',
      'dark-theme': 'bg-transparent border-t border-b border-white/10',
    };

    const sizeClasses = {
      default: 'py-6 md:py-10 px-4 md:px-8',
      compact: 'py-4 md:py-6 px-4',
      expanded: 'py-8 md:py-12 px-6 md:px-10',
    };

    const h2SizeClasses = {
      default: 'text-[24px] leading-[32px] md:text-[36px] md:leading-[44px]',
      compact: 'text-[20px] leading-[30px] md:text-[24px] md:leading-[32px]',
      expanded: 'text-[36px] leading-[44px] md:text-[48px] md:leading-[60px]',
    };

    const commonClasses = cn(
      'relative w-full min-h-fit',
      variantClasses[variant],
      className
    );

    if (asChild) {
      return React.isValidElement(children)
        ? React.cloneElement(children, {
          ref,
          className: cn(children.props.className, commonClasses),
          ...props,
        } as any)
        : <div ref={ref} className={commonClasses} {...props}>{children}</div>;
    }

    return (
      <div
        ref={ref}
        className={commonClasses}
        onMouseLeave={() => setActiveImage(null)}
        {...props}
      >
        {images.map((image) => (
          <div
            key={image.id}
            className={cn(
              `cursor-pointer relative flex flex-col md:flex-row md:items-center justify-between transition-colors duration-300 py-8 px-4 md:px-8 group overflow-hidden border-b border-white/5 last:border-b-0`,
              activeImage?.id === image.id ? 'bg-[#5586ff]/[0.02]' : 'bg-transparent'
            )}
            onMouseEnter={() => setActiveImage(image)}
          >
            {/* Active Row Hover Beam Effect */}
            {activeImage?.id === image.id && (
              <div className="absolute inset-0 pointer-events-none z-0">
                {/* Soft ambient background glow */}
                <div className="absolute bottom-0 left-0 w-full h-[80px] bg-[#5586ff] opacity-15 blur-[40px]" />
                {/* Bright bottom edge beam that reaches the edges perfectly */}
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#5586ff]/80 via-[#5586ff] to-[#5586ff]/80" />
                {/* Intense center core without transparent gaps */}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#8ab4f8]/30 via-[#8ab4f8] to-[#8ab4f8]/30 shadow-[0_0_15px_3px_rgba(85,134,255,0.8)]" />
              </div>
            )}
            
            {/* Col 1: Title */}
            <div className="w-full md:w-[30%] shrink-0 relative z-10">
              <h2
                className={cn(
                  `font-bold text-[22px] md:text-[28px] leading-[1.2] tracking-tight transition-colors duration-300 font-['Mirage_Display_Medium','Mirage_Display_Medium_Placeholder',sans-serif]`,
                  activeImage?.id === image.id
                    ? 'text-[#5586ff]'
                    : 'text-white'
                )}
              >
                {image.alt}
              </h2>
            </div>

            {/* Col 2: Description */}
            <div className="w-full md:w-[45%] shrink-0 mt-3 md:mt-0 pr-0 md:pr-4 relative z-10">
              {image.desc && (
                <p className={cn(
                  "text-[16px] md:text-[18px] leading-[28px] transition-colors duration-300",
                  activeImage?.id === image.id ? "text-zinc-300" : "text-zinc-500"
                )}>
                  {image.desc}
                </p>
              )}
            </div>

            {/* Col 3: Image (Single gray placeholder box / Image) */}
            <div className="w-full md:w-[25%] shrink-0 flex justify-start md:justify-end mt-6 md:mt-0 items-center relative z-10">
              <div className={cn(
                "transition-all duration-500 ease-out w-[240px] h-[120px] rounded-[6px] overflow-hidden bg-white/5 border border-white/10",
                activeImage?.id === image.id ? "opacity-100 md:translate-x-0" : "opacity-100 md:opacity-0 md:translate-x-8 pointer-events-none hidden md:block"
              )}>
                <img src={image.images?.[0] || image.src} className="w-full h-full object-cover" alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
);

ImageReveal.displayName = 'ImageReveal';

export default ImageReveal;
