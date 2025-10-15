import { ReactNode } from "react";

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
      {/* max-w-[80rem], max sized used here to contain sub content */}
      <div className={`relative mx-auto w-full max-w-[80rem] px-6 ${padY}`}>
        <div className={`grid grid-cols-[7rem_1fr] gap-10 items-start`}>
          <div className="relative hidden md:flex flex-col h-full items-stretch border-r-2">
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
            <div className="w-full h-full">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
