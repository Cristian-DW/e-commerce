/**
 * Props for the Container component.
 */
interface ContainerProps {
   /**
    * The content to be wrapped by the container.
    */
   children: React.ReactNode;
}

/**
 * A React component that serves as a responsive container with padding.
 * @param props The properties for the component, including the children to be wrapped.
 */
const Container: React.FC<ContainerProps> = ({ children }) => {
   return (
      <div className="max-w-[1920px] mx-auto xl:px-20 md:px-2 px-4">{children}</div>
   );
}

export default Container;
