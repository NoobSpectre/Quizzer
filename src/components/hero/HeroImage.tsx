import { AnimateSvg } from "../app";

export const HeroImage = () => {
  return (
    <div className="relative h-full p-2">
      <div className="max-w-xs ml-auto h-full rounded-lg shadow-2xl grid grid-rows-5 p-2 gap-2">
        {/* question */}
        <AnimateSvg
          imageProps={{
            src: "/hero-image/question.svg",
            alt: "Question Mark",
            imageStyles: "-right-5",
          }}
          animation={{ textDelay: 0, imgDelay: 0.15 }} // textduration: 0.2, imgDuration: 0.2
        />

        {/* Option 1 */}
        <AnimateSvg
          imageProps={{
            src: "/hero-image/numeric-1.svg",
            alt: "Numeric 1",
            // imageStyles: "-left-0",
          }}
          direction={-1}
          animation={{ imgDelay: 0.3, textDelay: 0.45 }} // textduration: 0.2, imgDuration: 0.2
        />

        {/* Option 2 */}
        <AnimateSvg
          imageProps={{
            src: "/hero-image/numeric-2.svg",
            alt: "Numeric 2",
            imageStyles: "-right-4",
          }}
          animation={{ textDelay: 0.6, imgDelay: 0.75 }} // textduration: 0.2, imgDuration: 0.2
        />

        {/* Option 3 */}
        <AnimateSvg
          imageProps={{
            src: "/hero-image/numeric-3.svg",
            alt: "Numeric 3",
            imageStyles: "-left-3.5",
          }}
          direction={-1}
          animation={{ imgDelay: 0.9, textDelay: 1.05 }} // textduration: 0.2, imgDuration: 0.2
        />

        {/* Option 4 */}
        <AnimateSvg
          imageProps={{
            src: "/hero-image/numeric-4.svg",
            alt: "Numeric 4",
            imageStyles: "-right-2.5",
          }}
          animation={{ textDelay: 1.2, imgDelay: 1.35 }} // textduration: 0.2, imgDuration: 0.2
        />
      </div>
    </div>
  );
};
