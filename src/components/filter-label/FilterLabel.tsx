interface FilterLabelProps {
  text: string;
  index?: number;
}

const FilterLabel = ({ text, index }: FilterLabelProps) => {
  return (
    <button key={index} className="bg-custom_green_100 text-custom_green_600 rounded-[0.25rem] py-1 px-2 hover:text-white hover:bg-custom_green_600 duration-200 ease-out">
      {text}
    </button>
  );
};

export default FilterLabel;
