import { ReactNode, CSSProperties } from "react";

/**
 * Props:
 * - id: optional anchor id (for #hash links and aria-labelledby)
 * - label: the vertical section label text (e.g., "Bio")
 * - children: section content (right column)
 * - className: extra classes for the outer <section>
 * - minH: controls the section's minimum height (layout rhythm)
 * - maxW: max width of the inner container
 * - padY: vertical padding inside the container (internal spacing)
 * - centerContent: vertically center the content column if it’s short
 * - lineExtendRem: visually extend the divider line above/below the section (in rem)
 */
type Props = {
  id?: string;
  label: string;
  children: ReactNode;
  className?: string;
  padY?: string;
  centerContent?: boolean;
};

export default function SideLabelSection({
  id,
  label,
  children,
  className = "",
  padY = "py-16",
  centerContent = false,
}: Props) {
  return (
    <div id={id} className={`relative ${className}`}>
      {/* Inner container: centers content, constrains width, adds horizontal padding */}
      <div className={`relative mx-auto w-full max-w-[80rem] px-6 ${padY}`}>
        {/* Two-column layout: rail (left) + content (right) */}
        <div
          // change items-stretch -> items-start so columns don't force each other to full height
          className={`grid grid-cols-[7rem_1fr] gap-10 items-start`}
        >
          {/* LEFT RAIL: label participates in layout (no absolute), rail height matches content */}
          <div className="relative hidden md:flex flex-col h-full items-stretch border-r-2">
            {/* Label: tight box so its bounding box matches text height */}
            <span
              id={id ? `${id}-title` : undefined}
              className="block leading-none whitespace-nowrap
                         [writing-mode:vertical-rl] [text-orientation:mixed] rotate-180
                         text-6xl font-bold tracking-[0.25em] uppercase pr-4"
            >
              {label}
            </span>
          </div>

          <div
            className={`relative w-full h-full ${centerContent ? "flex items-center" : ""}`}
          >
            {/* Content wrapper fills the column’s width and height */}
            <div className="w-full h-full">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
