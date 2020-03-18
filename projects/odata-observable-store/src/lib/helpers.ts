export class Helpers {
  /**
   * parses the query string
   * @param queryString
   * @param additionalParams - array of addition parameters to parse
   */
  public static queryParser(
    queryString: string,
    additionalParams: string[] = undefined
  ): string {
    const segments: string[] = [];
    if (queryString) {
      segments.push(...queryString.split("&"));
    }
    if (additionalParams) {
      segments.push(...additionalParams);
    }
    const query: string = segments.length > 0 ? `?${segments.join("&")}` : "";
    return query;
  }
  /**Determines if string key should be single quoted .
   * @description The main use case for this method is to determine if the key is a guid.
   * If so, do not quote the string.
   */
  public static quoteKey(id: string | number): string {
    let quotes: string = "";
    if (typeof id === "string" && !Helpers.IsGuid(id)) {
      quotes = "'";
    }
    return `${quotes}${id}${quotes}`;
  }

  public static IsGuid(value: string): boolean {
    const GuidPattern: RegExp = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return GuidPattern.test(value);
  }
}
