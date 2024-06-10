/**
 * Props for the Heading component.
 */
interface HeadingProps {
   /**
    * The title text to be displayed in the heading.
    */
   title: string;

   /**
    * Flag to indicate if the title should be centered.
    */
   center?: boolean;
}

/**
 * A React component to display a heading with optional center alignment.
 * @param props The properties for the component, including the title and optional center alignment.
 */
const Heading: React.FC<HeadingProps> = ({ title, center }) => {
   return (
      <div className={center ? "text-center" : "text-start"}>
         <h1 className="text-2xl font-bold">{title}</h1>
      </div>
   );
}

export default Heading;
