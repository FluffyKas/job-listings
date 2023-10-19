interface FilterLabelProps {
  text: string;
  index?: number;
  hasCancelIcon: boolean;
  onClick?: () => void;
}

const FilterLabel = ({ text, index, hasCancelIcon, onClick }: FilterLabelProps) => {
  return (
    <button
      onClick={onClick}
      key={index}
      className={`filter-label ${
        hasCancelIcon ? 'rounded-l-[0.25rem]' : 'rounded-[0.25rem] hover:text-white hover:bg-custom_green_600 duration-200 ease-out'
      } bg-custom_green_100 text-custom_green_600 flex font-medium`}
    >
      <span className="py-1 px-2">{text}</span>
      {hasCancelIcon && (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className="cancel-icon" d="M0 0H28C30.2091 0 32 1.79086 32 4V28C32 30.2091 30.2091 32 28 32H0V0Z" fill="#5CA5A5" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22.435 11.1213L20.3137 9L15.7175 13.5962L11.1213 9L9 11.1213L13.5962 15.7175L9 20.3137L11.1213 22.435L15.7175 17.8388L20.3137 22.435L22.435 20.3137L17.8388 15.7175L22.435 11.1213Z"
            fill="white"
          />
        </svg>
      )}
    </button>
  );
};

export default FilterLabel;
