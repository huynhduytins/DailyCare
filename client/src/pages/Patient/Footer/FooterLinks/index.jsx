const FooterLinks = (props) => {
  return (
    <div>
      <h2 className="mb-8 basis-1/4 text-2xl font-bold text-[#1F2278]">
        {props.title}
      </h2>
      <div className="flex flex-col gap-5">
        {props.links.map((link) => {
          return (
            <a href="#" className="hover:text-[#565acf]" key={link}>
              {link}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default FooterLinks;
