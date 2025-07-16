import { ReactNode } from "react";
import clsx from "clsx";

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
}

export default function SectionContainer({
  children,
  className,
}: SectionContainerProps) {
  return (
    <section className={clsx("py-16 md:py-24", className)}>
      <div className="container">{children}</div>
    </section>
  );
}
