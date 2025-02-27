export const ContactItem = (prop) => {
  return (
    <div
      key={prop.contact.index}
      onClick={() => {
        return prop.selectedItem(prop);
      }}
      className="cursor-pointer"
    >
      <div
        className={
          "hover:bg-[rgba(28,62,156,0.2)]  flex flex-row h-12 w-full overflow-hidden rounded-lg my-1 relative"
        }
      >
        <div
          className={
            "bg-cyan-500 flex flex-col justify-center items-center w-10 h-10 text-sm mx-1 pt-1 rounded-full "
          }
        >
          {prop.contact.name[0]}
          {prop.contact.name[1]}
        </div>
        <div className="flex flex-col ">
          <p>{prop.contact.name}</p>
          <p className="text-xs text-start">متن اخرین پیام ... </p>
          {/* <p className="text-xs  text-start mt-1  text-white">{prop.contact.username}</p> */}
        </div>
        <div className="rounded-full w-4 h-4 text-xs absolute left-2 bottom-2 bg-blue-500">
          9
        </div>
      </div>
    </div>
  );
};
