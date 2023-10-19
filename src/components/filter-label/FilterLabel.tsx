import IconX from '../../assets/images/icon-x.svg';

interface FilterLabelProps {
  text: string;
  index?: number;
  hasCancelIcon: boolean;
  onClick?: () => void;
}

const FilterLabel = ({ text, index, hasCancelIcon, onClick }: FilterLabelProps) => {
  return (
    <div className="flex">
      <button
        onClick={onClick}
        key={index}
        className={`job-card ${
          hasCancelIcon ? 'rounded-l-[0.25rem]' : 'rounded-[0.25rem]'
        } bg-custom_green_100 text-custom_green_600 py-1 px-2 hover:text-white hover:bg-custom_green_600 duration-200 ease-out font-medium`}
      >
        {text}
      </button>
      {hasCancelIcon && <img src={IconX} alt="" />}
    </div>
  );
};

export default FilterLabel;
