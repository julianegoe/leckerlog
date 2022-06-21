export interface Meal {
    name: string;
    rating: number;
    imageUrl?: string;
}

export interface LeckerLog {
    restaurant: string;
    cuisine: string;
    meals: Meal[];
}

export const exampleData: LeckerLog[] = [
    {
        restaurant: 'Burgertime',
        cuisine: 'Burger',
        meals: [
            {
                name: 'Cheeseburger',
                rating: 5,
            },
            {
                name: 'Veggieburger',
                rating: 4,
            },
        ]
    },
    {
        restaurant: 'Mangiare',
        cuisine: 'Italienisch',
        meals: [
            {
                name: 'Pizza Hawaii',
                rating: 2,
            },
            {
                name: 'Pizza Mozzarella',
                rating: 4,
            },
        ]
    },
]