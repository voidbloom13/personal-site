
function NavLink(props) {
  const anchorProps = {
    className: "w-full md:w-auto transition-all duration-200 font-[Montserrat] md:font-serif md:text-lg hover:bg-[rgba(0,0,0,0.2)] hover:md:bg-transparent hover:text-zinc-50 hover:md:text-sky-500 px-4 py-2 md:py-1",
    href: props.link,
    onClick: props.onClick
  };

  if (props.isExternal) {
    anchorProps.target = "_blank";
    anchorProps.rel = "noopener noreferrer";
  }

  return (
    <a {...anchorProps}>
      {props.icon
        ? <span className="block align-middle text-left md:text-center"><i className={props.icon}></i> {props.label}</span>
        : <span className="block align-middle text-left md:text-center">{props.label}</span>
      }
    </a>
  )
}

export default NavLink;

