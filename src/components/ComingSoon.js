function ComingSoon(props) {

  const { title } = props;

  return (
    <>
    <div className="flex-grow flex flex-col relative text-gray-80 pt-20">
      <div className="w-full flex-grow max-w-7xl mx-auto flex relative text-white">
        <div className="flex flex-col w-full mx-4 sm:mx-6 lg:mx-8">
          <div className="flex flex-col w-full mt-8"></div>
          <div className="text-4xl md:text-5xl font-extralight">
            {title}
          </div>
          <div className="m-auto text-white">
            Coming soon...
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default ComingSoon;
