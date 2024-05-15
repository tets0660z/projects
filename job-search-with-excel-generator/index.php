<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    body {
        background-color: #0d0d0d;
        color: #f9f6;
        font-weight: bold;
        font-size: 1.5rem;
    }
</style>

<body>
    <?php

    $items = [
        [
            'name' => 'Do Androids Dream of Electric Sheep',
            'author' => 'Philip K. Dick',
            'releaseYear' => 1968,
            'purchaseUrl' => 'http://example.com'
        ],
        [
            'name' => 'Project Hail Mary',
            'author' => 'Andy Weir',
            'releaseYear' => 2021,
            'purchaseUrl' => 'http://example.com'
        ],
        [
            'name' => 'The Martian',
            'author' => 'Andy Weir',
            'releaseYear' => 2011,
            'purchaseUrl' => 'http://example.com'
        ],
    ];

    function filter($items, $key, $value)
    {
        $filteredItems = [];
        foreach ($items as $item) {
            if ($item[$key] === $value)
                $filteredItems[] =  $item;
        }
        return $filteredItems;
    }
    $filteredItems = filter($items, 'author', 'Andy Weir')

    ?>

    <!-- <pre><?= var_dump($items); ?></pre> -->
    <ol>
        <?php foreach ($filteredItems as $item) : ?>
            <!-- <li><?= $item['name'] . " " . $item['releaseYear'] ?></li> -->
        <?php endforeach;; ?>
    </ol>

    <script>

    </script>
</body>

</html>