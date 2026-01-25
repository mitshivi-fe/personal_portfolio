interface ContainerProps {
  children: React.ReactNode;
}

function Container({ children }: ContainerProps) {
  return <div className="bg-bg-200 min-h-screen w-full p-4 flex flex-col">{children}</div>;
}

export default Container;
