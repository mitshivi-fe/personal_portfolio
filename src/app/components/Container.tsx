"use client";

import clsx from "clsx";
import { forwardRef } from "react";

interface OuterContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const OuterContainer = forwardRef<HTMLDivElement, OuterContainerProps>(
  function OuterContainer({ className, children, ...props }, ref) {
    return (
      <div ref={ref} className={clsx("sm:px-8", className)} {...props}>
        <div className="mx-auto w-full max-w-7xl lg:px-8">{children}</div>
      </div>
    );
  }
);

interface InnerContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const InnerContainer = forwardRef<HTMLDivElement, InnerContainerProps>(
  function InnerContainer({ className, children, ...props }, ref) {
    return (
      <div
        ref={ref}
        className={clsx("relative px-4 sm:px-8 lg:px-12", className)}
        {...props}
      >
        <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
      </div>
    );
  }
);

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(function Container(
  { children, ...props },
  ref
) {
  return (
    <OuterContainer ref={ref} {...props}>
      <InnerContainer>{children}</InnerContainer>
    </OuterContainer>
  );
});

export { Container, OuterContainer, InnerContainer };
export default Container;
