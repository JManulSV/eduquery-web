import Link from "next/link";

export interface SidebarItemProps{
    title: string,
    logo: any,
    href: string,
    expanded: boolean,
    actualPath: string,
}

export default function SidebarItem({title, logo, href, expanded, actualPath}: SidebarItemProps) {

  return (
    <Link href={href} className={`flex items-center  text-gray-700 ${expanded ? 'gap-4':'flex-col gap-2'} ${actualPath === href ? ' text-blue-500' : ''}`}>
        <div className="text-xl">{logo}</div>
        <p className={ `${expanded ? 'text-md': 'text-sm'}` }>{title}</p>
    </Link>
  )
}
