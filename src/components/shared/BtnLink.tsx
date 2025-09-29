interface BtnLinkProps {
  href: string;
  text: string;
  className?: string;
}

const BtnLink = ({ href, text, className = "" }: BtnLinkProps) => {
  return (
    <a
      href={href}
      className={`px-6 py-3 rounded-full outline-none relative overflow-hidden
      bg-accent cursor-pointer transform transition duration-300
      hover:bg-[#8566bb] hover:scale-[0.98] ${className}`}
    >
      <span className="relative z-10 text-white">{text}</span>
    </a>
  );
};

export default BtnLink;
