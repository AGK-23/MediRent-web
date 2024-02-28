// text-[#61297F]

// eslint-disable-next-line react/prop-types
function PrimaryButton ({text}){
  return (
    <div
      className="cursor rounded-md bg-white border font-semibold px-8 py-2 text-primary sm:text-xs sm:py-3 sm:px-6 mr-4 lg:text-[0.65rem] xl:text-[0.75rem] lg:w-fit xl:w-fit"
    >
      {text}

    </div>
  );
}

export default PrimaryButton


