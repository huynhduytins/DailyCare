const Select = ({ items, title, name }) => {
  return (
    <div>
      <label htmlFor={name} className="font-semibold">
        {title}
      </label>
      <select
        name={name}
        className="mt-2 block h-9 w-full rounded border-[1px] border-slate-400 bg-[#f0f4f8] py-1 px-3 outline-none"
      >
        {items.map((el, id) => {
          return (
            <option value={el} key={id}>
              {el}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
