function VerticalTabs(props) {
  const { itemList, activeItem, handleActiveItem } = props;

  if(!itemList) {
    return <></>;
  }

  return (
    <>
      <div className="flex flex-col w-auto overflow-y-scroll h-full md:ml-8">
        {itemList.map((item, i) => (
          <div key={`item-${i}`} className={`${activeItem == i ? 'text-white' : 'text-gray-70'} select-none cursor-pointer flex-nowrap text-4xl md:text-5xl lg:text-6xl font-black leading-tight font-tabs w-max`} onClick={() => handleActiveItem(i)}>
            {item}
          </div>
        ))}
      </div>
    </>
  );
}

export default VerticalTabs;
