import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";

/**
 * Props for the Avatar component.
 */
interface AvatarProps {
   /**
    * The source URL of the avatar image. Can be a string, null, or undefined.
    */
   src?: string | null | undefined;
}

/**
 * A React component to display an avatar. If a source URL is provided, it displays the image.
 * Otherwise, it displays a default user icon.
 * @param props The properties for the component, including the optional source URL of the avatar image.
 */
const Avatar: React.FC<AvatarProps> = ({ src }) => {
   if (src) {
      return (
         <Image
            src={src}
            alt="Avatar"
            className="rounded-full"
            width={30}
            height={30}
         />
      );
   }

   return <FaUserCircle size={24} />;
}

export default Avatar;
