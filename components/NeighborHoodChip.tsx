interface Props {
  item: GeoJSON.Feature;
  onClose: () => void;
}

const NeighborHoodChip = ({ item, onClose }: Props) => {
  return (
    <div className="inline-block mt-3 mr-4">
      <div className="neighborhood-chip rounded-[100px] items-center flex">
        <p className="text-[18px] leading-[27px] font-normal tracking-[.02em] m-0">
          {item.properties?.name}
        </p>
        <button
          className="inline-flex p-0 ml-4 border-none cursor-pointer bg-none"
          onClick={onClose}
        >
          <span className="w-5 min-w-5 h-5 #263238 inline-block">
            <svg
              viewBox="0 0 24 24"
              fill="black"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.21747 6.21967C6.51037 5.92678 6.98524 5.92678 7.27813 6.21967L11.998 10.9395L16.7175 6.22004C17.0104 5.92715 17.4852 5.92715 17.7781 6.22004C18.071 6.51294 18.071 6.98781 17.7781 7.2807L13.0586 12.0002L17.7777 16.7192C18.0706 17.0121 18.0706 17.487 17.7777 17.7799C17.4848 18.0728 17.0099 18.0728 16.717 17.7799L11.998 13.0608L7.27856 17.7803C6.98567 18.0732 6.51079 18.0732 6.2179 17.7803C5.92501 17.4874 5.92501 17.0125 6.2179 16.7196L10.9373 12.0002L6.21747 7.28033C5.92458 6.98744 5.92458 6.51256 6.21747 6.21967Z"
                className="Icon-fill-color"
                stroke="transparent"
              ></path>
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default NeighborHoodChip;
