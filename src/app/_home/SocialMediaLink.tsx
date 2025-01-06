interface RouteLinkProps {
  href: string;
  name: string;
}

export function SocialMediaLink({ href, name }: RouteLinkProps) {
  return (
    <a 
      href={href} 
      target="_blank" 
      className='text-sm hover:text-sky-50 transition-all p-2 font-bold uppercase hover:drop-shadow-sm'
    >
      {name}
    </a>
  )
}