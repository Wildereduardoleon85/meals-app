export enum Screens {
  Categories = 'Categories',
  MealsOverview = 'MealsOverview',
  MealDetails = 'MealDetails',
  Drawer = 'Drawer',
  Favorites = 'Favorites',
}

export type Meal = {
  id: string
  title: string
  imageUrl: string
  duration: number
  complexity: string
  affordability: string
  ingredients: string[]
  steps: string[]
}
