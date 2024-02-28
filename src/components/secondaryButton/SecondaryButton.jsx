
// eslint-disable-next-line react/prop-types
const SecondaryButton = ({text}) => {
  return (
    <div
      className="cursor rounded-md bg-orange-500 font-medium px-8 py-2 text-white sm:text-xs xs:text-[14px] sm:py-3 sm:px-6 lg:text-[0.65rem] xl:text-[0.75rem] lg:w-fit xl:w-fit"
    >
      {text}
    </div>
  );
};

export default SecondaryButton;
