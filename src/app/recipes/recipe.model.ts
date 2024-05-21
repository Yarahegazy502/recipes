export class Recipe {
  public name?: string;
  public description?: string;
  public imagePath?: string;
  public ingredients?: string[]

  constructor(name: string, description: string, imagePath: string, ingredients: string[]) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }
}
