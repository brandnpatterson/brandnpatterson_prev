export function trimAndLower(string) {
  if (string) {
    return string
      .toLowerCase()
      .trim(' ')
      .replace(/\s+/g, '');
  }
}
