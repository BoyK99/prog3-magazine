<?php
/**
 * @return array
 */
function getDishes()
{
    return [
        [
            "id" => 1,
            "name" => "Pizza",
            "kitchen" => "Italian",
        ],
        [
            "id" => 2,
            "name" => "Kale",
            "kitchen" => "Dutch",
        ],
        [
            "id" => 3,
            "name" => "Lasagna",
            "kitchen" => "Italian",
        ],
        [
            "id" => 4,
            "name" => "Kebab",
            "kitchen" => "Turkish",
        ],
        [
            "id" => 5,
            "name" => "Paella",
            "kitchen" => "Spanish",
        ],
        [
            "id" => 6,
            "name" => "Pasta",
            "kitchen" => "Italian",
        ],
        [
            "id" => 7,
            "name" => "Baguette",
            "kitchen" => "French",
        ],
        [
            "id" => 8,
            "name" => "Wraps",
            "kitchen" => "Mexican",
        ],
        [
            "id" => 9,
            "name" => "Risotto",
            "kitchen" => "Italian",
        ],
        [
            "id" => 10,
            "name" => "Stew",
            "kitchen" => "Dutch",
        ]
    ];
}

/**
 * @param $id
 * @return mixed
 */
function getDishDetails($id)
{
    $tags = [
        1 => [
            "recipe" => "Put it in the oven and go!",
            "tags" => ['cheese', 'oven']
        ],
        2 => [
            "recipe" => "You can make this delicious Dutch meal by ...",
            "tags" => ['unox', 'healthy', 'stamppot', 'boerenkool']
        ],
        3 => [
            "recipe" => "Very nice when your grandma prepares this meal",
            "tags" => ['omnomnom']
        ],
        4 => [
            "recipe" => "Everytime in the city after midnight",
            "tags" => ['kapsalon', 'tasty', 'meat']
        ],
        5 => [
            "recipe" => "Specialty when on holiday in Spain",
            "tags" => ['fish']
        ],
        6 => [
            "recipe" => "Famous Italian dish",
            "tags" => ['sauce', 'cheesy']
        ],
        7 => [
            "recipe" => "🥖",
            "tags" => ['bread']
        ],
        8 => [
            "recipe" => "Nice with chicken and guac",
            "tags" => ['guacamole']
        ],
        9 => [
            "recipe" => "Sticky rice with wine",
            "tags" => ['rice', 'wine']
        ],
        10 => [
            "recipe" => "Typical dutch",
            "tags" => ['worst']
        ]
    ];

    return $tags[$id];
}
