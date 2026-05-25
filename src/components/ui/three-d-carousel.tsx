import React from "react";

interface CarouselItem {
  id: string;
  num: string;
  role: string;
  desc: string;
  imgTag: string;
  name?: string;
  image?: string;
}

interface ThreeDCarouselProps {
  title: string;
  items: CarouselItem[];
  radius?: number;
  previewId: string;
}

export const ThreeDCarousel: React.FC<ThreeDCarouselProps> = ({
  title,
  items,
  radius = 500,
  previewId,
}) => {
  return (
    <>
      {/* Scene Container */}
      <div className="scene" data-radius={radius}>
        <h2 className="scene__title" data-speed="0.7">
          <span>{title}</span>
        </h2>
        
        <div className="carousel">
          {items.map((item) => (
            <div className="carousel__cell" key={item.id}>
              <div
                className="card"
                style={{ "--img": `url(${item.image})` } as React.CSSProperties}
              >
                <div className="card__face card__face--front">
                  {/* Gradient Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#03010a]/90 via-transparent to-transparent z-10" />
                  
                  {/* Floating Caption details */}
                  <div className="absolute bottom-0 left-0 w-full p-6 text-left z-20">
                    <span className="text-[10px] font-bold text-[#5586ff] uppercase tracking-widest block mb-1">
                      {item.role}
                    </span>
                    <h4 className="text-[15px] font-semibold text-white tracking-tight leading-none">
                      {item.name || "Profile coming soon"}
                    </h4>
                  </div>
                </div>
                <div className="card__face card__face--back"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Preview Overlay placed OUTSIDE of scene container to enable full viewport width positioning */}
      <div className="preview" id={previewId}>
        <header className="preview__header">
          <h2 className="preview__title">
            <span>{title}</span>
          </h2>
          <div className="preview__close text-gray-400 font-mono tracking-widest text-[11px] uppercase pointer-events-none">
            Scroll Up to Go Back ↑
          </div>
        </header>
        
        <div className="carousel-grid">
          {items.map((item) => (
            <figure key={item.id} className="grid__item animate-none" role="img">
              <div
                className="grid__item-image"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
              <figcaption className="grid__item-caption">
                <span className="text-[10px] font-bold text-[#5586ff] uppercase tracking-widest block mb-1">
                  {item.role}
                </span>
                <h3 className="text-[16px] md:text-[18px] font-semibold text-white tracking-tight leading-none mb-2">
                  {item.name || "Profile coming soon"}
                </h3>
                <p className="text-[12.5px] leading-[20px] text-gray-300 font-normal">
                  {item.desc}
                </p>
                <div className="text-[8px] font-mono tracking-widest text-gray-500 uppercase mt-3 pt-2 border-t border-white/5">
                  IMG-{item.num} // {item.imgTag}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </>
  );
};
