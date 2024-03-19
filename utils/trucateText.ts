/**
 * Truncates a string to a maximum length and appends '...' if the
 * string is longer than the maximum length.
 *
 * @param str string to truncate
 * @returns truncated string
 */
export const trucateText = (str: string): string => {
    /**
     * Maximum length of the string. If the original string is shorter
     * than this, it will not be truncated.
     */
    const maxLength = 22;
    
    if (str.length <= maxLength) {
        return str;
    }
    
    return str.substring(0, maxLength) + "...";
}

   
   