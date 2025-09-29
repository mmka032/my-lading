interface NavItemProps {
  href: string;
  text: string;
}

const NavItem = ({ href, text }: NavItemProps) => {
  return (
    <li>
      <a
        href={href}
        className="font-medium ease-linear hover:text-primary"
      >
        {text}
      </a>
    </li>
  );
};

export default NavItem;
