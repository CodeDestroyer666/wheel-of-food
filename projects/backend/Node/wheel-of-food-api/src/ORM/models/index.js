export class Rental {
    constructor() {
        this.type = 'rentals';
        this.id = '';
        this.attributes = {
            title: '',
            owner: '',
            city: '',
            category: '',
            bedrooms: 1,
            image: '',
            description: ''
        };
    }
}

export class Menu {
    constructor() {
        this.type = 'menus';
        this.id = '';
        this.attributes = {
            createdTime: Date,
            recipes: [],
        };
    }
}

export class Recipe {
    constructor() {
        this.type = 'recipes';
        this.id = '';
        this.attributes = {
            name: '',
            instructions: '',
            ingredients: [],
            tags: [],
            createdTime: Date,
            image: '' // TODO: binary data or URL?
        };
    }
}

export class Ingredient {
    constructor() {
        this.type = 'ingredients';
        this.id = '';
        this.attributes = {
            name: ''
        };
    }
}

export class IngredientAmount extends Ingredient {
    constructor() {
        super();
        super.attributes.amount = '';
    }
}

export class Tag {
    constructor() {
        this.type = 'tags';
        this.id = '';
        this.attributes = {
            name: ''
        };
    }
}

export class RecipeEvent {
    constructor() {
        this.type = 'recipeevents';
        this.attributes = {
            name: '',
            recipeId: '',
            createdTime: Date,
        };
    }
}

export class RecipeIncludeEvent extends RecipeEvent {
    constructor() {
        super();
        super.attributes.name = 'INCLUDE';
    }
}

export class RecipeExcludeEvent extends RecipeEvent {
    constructor() {
        super();
        super.attributes.name = 'EXCLUDE';
    }
}
