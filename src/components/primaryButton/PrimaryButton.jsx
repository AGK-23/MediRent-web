// text-[#61297F]

// eslint-disable-next-line react/prop-types
function PrimaryButton ({text}){
  return (
    <div
      className="cursor rounded-md bg-transparent border-none font-bold  text-black sm:text-xs sm:py-3 sm:px-6 mr-4 lg:text-[14px] lg:w-fit xl:w-fit"
    >
      {text}

    </div>
  );
}

export default PrimaryButton


