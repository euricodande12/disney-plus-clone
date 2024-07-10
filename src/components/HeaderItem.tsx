import HeaderItemProps from "../interfaces/HeaderItemProps.interface"
//hidden md:block
const HeaderItem: React.FC<HeaderItemProps> = ({name, Icon}) => {
  return (
    <li className="px-1 lg:px-4 py-2 hover:underline underline-offset-8 transition-all cursor-pointer">
        <a href="#" className="flex items-center gap-1 md:gap-3 lg:text-[15px] text-[14px] font-semibold">
        <Icon />
        <h2 className="">{name}</h2>
        </a>
    </li>
  )
}

export default HeaderItem
