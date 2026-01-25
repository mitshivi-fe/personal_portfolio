interface CardContainerProps {
  children: React.ReactNode;
}

function CardContainer({ children }: CardContainerProps) {
  return (
    <div className="w-full flex justify-center items-center flex-grow">
      <div className="overflow-hidden rounded-lg bg-white shadow w-auto">
        <div className="px-2 py-5 sm:p-4">{children}</div>
      </div>
    </div>
  );
}

export default CardContainer;
