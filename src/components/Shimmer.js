const Shimmer = () => {
  return (
    <>
      <div
        data-testid="shimmer"
        className="flex flex-wrap justify-center mt-5  w-full my-0 mx-auto"
      >
        {Array(15)
          .fill("")
          .map((item, index) => (
            <div
              key={index}
              className="animate-pulse w-[312px] h-[312px] m-4 shadow-[0_4px_8px_0_rgba(0,0,0,0.2)] hover:shadow-[0_8px_16px_0_rgba(0,0,0,0.2)] transition duration-[0.3s] rounded-[5px] cursor-pointer"
            >
              <div className="w-full h-[200px] rounded-t-[5px] bg-[#d3d3d3]"></div>
              <div className="w-[95%] my-4 mx-2  flex">
                <div className="h-10 w-10  bg-[#d3d3d3] rounded-full my-4 mx-2 "></div>
                <div className="w-[100%]">
                  <div className="w-[90%] h-5 my-4 mx-2 bg-[#d3d3d3]"></div>
                  <div className="w-[70%] h-5 my-4 mx-2 bg-[#d3d3d3]"></div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Shimmer;
