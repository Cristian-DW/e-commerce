export const trucateText = (str: string) => {
   if (str.length < 22) {
      return str;
   }
      return str.substring(0.22) + "...";
   }
   
   