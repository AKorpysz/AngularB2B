export interface SearchPrompterInterface {
  search(phrase: string);
  getPrompts(phrase: string): string[];
}
