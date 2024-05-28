interface FooterListProps {
  children: React.ReactNode;
}

/**
 * FooterList Component
 *
 * This component serves as a container for lists within the footer.
 * It is used to group related links together.
 *
 * @component
 * @example
 * return (
 *   <FooterList>
 *     <h3>Category</h3>
 *     <Link href="#">Item 1</Link>
 *     <Link href="#">Item 2</Link>
 *   </FooterList>
 * )
 * 
 * @param {FooterListProps} props - The properties for the FooterList component.
 * @param {React.ReactNode} props.children - The child elements to be rendered inside the FooterList.
 * 
 * @returns {JSX.Element} The rendered FooterList component
 */
const FooterList: React.FC<FooterListProps> = ({ children }) => {
  return (
    <div className="
      w-full
      sm:w-1/2
      md:w-1/4
      lg:w-1/6
      mb-6
      flex
      flex-col
      gap-2
    ">
      {children}
    </div>
  );
};

export default FooterList;
