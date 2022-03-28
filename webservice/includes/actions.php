<?php
/**
 * @return array
 */
function getDishes() {
    return [
        [
            "id" => 1,
            "name" => "Pizza",
            "kitchen" => "Italian",
            "image" => 'https://images.newyorkpizza.nl/Products/Original/Margherita-7253.png'
        ],
        [
            "id" => 2,
            "name" => "Kale",
            "kitchen" => "Dutch",
            "image" => "sad"
        ],
        [
            "id" => 3,
            "name" => "Lasagna",
            "kitchen" => "Italian",
            "image" => "asd"
        ],
        [
            "id" => 4,
            "name" => "Kebab",
            "kitchen" => "Turkish",
            "image" => "asasas"
        ],
        [
            "id" => 5,
            "name" => "Paella",
            "kitchen" => "Spanish",
            "image" => "fffg"
        ],
        [
            "id" => 6,
            "name" => "Pasta",
            "kitchen" => "Italian",
            "image" => "dfgfdgfgd"
        ],
        [
            "id" => 7,
            "name" => "Baguette",
            "kitchen" => "French",
            "image" => "dffsdfds"
        ],
        [
            "id" => 8,
            "name" => "Wraps",
            "kitchen" => "Mexican",
            "image" => "ewqwe"
        ],
        [
            "id" => 9,
            "name" => "Risotto",
            "kitchen" => "Italian",
            "image" => "assadsad"
        ],
        [
            "id" => 10,
            "name" => "Stew",
            "kitchen" => "Dutch",
            "image" => "vvvvvvv"
        ]
    ];
}

/**
 * @param $id
 * @return mixed
 */
function getDishDetails($id) {
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
