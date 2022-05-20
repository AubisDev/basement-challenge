const MarqueeText = () => {
  return (
    <div className="relative flex overflow-x-hidden my-12 h-[10%] w-full text-white  border-t border-b border-white">
      <div className="py-2 animate-marquee whitespace-nowrap">
        <span className="text-3xl sm:text-4xl mx-4">
          man can&apos;t have enough basement. swag -
        </span>
        <span className="text-3xl sm:text-4xl">A man can&apos;t have enough basement. swag -</span>
      </div>
      <div className="absolute top-0 animate-marquee2 py-2 whitespace-nowrap">
        <span className="text-3xl sm:text-4xl mx-4">
          A man can&apos;t have enough basement. swag -
        </span>
        <span className="text-3xl sm:text-4xl mx-4">
          A man can&apos;t have enough basement. swag -
        </span>
      </div>
    </div>
  );
};

export default MarqueeText;
