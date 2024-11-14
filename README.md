# Pokedex Cards

A frontend app that utilizes the [PokeAPI](https://pokeapi.co/) to search for Pokémon and display them as interactive cards.

[![MIT License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)
![GitHub stars](https://img.shields.io/github/stars/JuCJeff/pokedex-cards?style=social)

https://github.com/user-attachments/assets/b6caf092-fc4a-4235-ac7c-fe5bd614fdee

## Visit the website

Explore the live app here: [Pokedex Cards](https://jucjeff.github.io/pokedex-cards).

## Table of Contents
1. [Current Features](#current-features)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Technologies Used](#technologies-used)
5. [Contributing](#contributing)
6. [License](#license)
7. [Acknowledgements](#acknowledgements)

## Current features

- Search by Pokémon name (exact match, case incensitive)
- Search by national Pokedex number (1-1025)
- Hover on web over the Pokémon image to hear the sound of the Pokémon
- Shiny toggle to see the shiny version of the Pokémon
- Abilities section and a toggle for showing hidden abilities
- Details button that links to the Pokémon's page on [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Main_Page)
- Display trophies for Pokémon that has International tournament accolades
  - Trophy icons are included for Pokémon that are VGC (Masters division) international championship winners and runner-ups
  - The gathered data are from 2011-2024 and does not include any tournaments from 2020-2021
 
## Installation

To get started with this project locally, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/JuCJeff/pokedex-cards.git
    ```

2. **Navigate to the project folder:**
    ```bash
    cd pokedex-cards
    ```

3. **Install dependencies:**
    This project uses [Yarn](https://yarnpkg.com/), a package manager for managing dependencies. If you don't have Yarn installed, follow the [installation instructions here](https://yarnpkg.com/getting-started/install).

    Once Yarn is installed, run the following command to install the project dependencies:
    ```bash
    yarn install
    ```

4. **Run the development server:**
    Once the dependencies are installed, you can start the app locally. Run the following command to start the development server:
    ```bash
    yarn dev
    ```

    This will launch the app locally. You can access it by opening your browser and navigating to `http://localhost:3000`.

## Usage

Once the app is open in your browser, you can:

- **Search for Pokémon** by name or by National Pokédex number.
- **Hover over Pokémon images** to hear their unique sound effects.
- Use the **Shiny toggle** to see the shiny variant of the Pokémon.
- View additional information in the **Abilities** section, including a toggle for hidden abilities.
- Click the **Details button** to view detailed Pokémon info on Bulbapedia.

## Technologies Used

- **HTML5**: For the structure of the app.
- **CSS3**: For the styling and responsive design.
- **JavaScript (ES6+)**: For dynamic functionality and interaction.
- **[PokeAPI](https://pokeapi.co/)**: To fetch Pokémon data.
- **[Bulbapedia](https://bulbapedia.bulbagarden.net/)**: External link for detailed Pokémon info.

## Contributing

We welcome contributions! To contribute to the project:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to your fork (`git push origin feature-name`).
6. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

### Pokémon Data

The Pokémon data used in this app is provided by the fantastic [PokeAPI](https://pokeapi.co/).

### International Tournament Trophy Results

The international tournament trophy data is sourced from various places, including VGCPedia and the official Pokémon website. The following links provide detailed results from multiple years of Pokémon World Championships:

- [2011 Pokémon World Championships - VGCPedia](https://www.vgcpedia.com/2011-pokemon-world-championships/)
- [2012 Pokémon World Championships - VGCPedia](https://www.vgcpedia.com/2012-pokemon-world-championships/)
- [2013 Pokémon World Championships - VGCPedia](https://www.vgcpedia.com/2013-pokemon-world-championships/)
- [2014 Pokémon World Championships - VGCPedia](https://www.vgcpedia.com/2014-pokemon-world-championships/)
- [2015 Pokémon World Championships - VGCPedia](https://www.vgcpedia.com/2015-pokemon-world-championships/)
- [2016 Pokémon World Championships - VGCPedia](https://www.vgcpedia.com/2016-pokemon-world-championships/)
- [2017 Pokémon World Championships - VGCPedia](https://www.vgcpedia.com/2017-pokemon-world-championships/)
- [2018 Pokémon World Championships - VGCPedia](https://www.vgcpedia.com/2018-pokemon-world-championships/)
- [2019 Pokémon World Championships - VGCPedia](https://www.vgcpedia.com/2019-pokemon-world-championships/)
- [2022 Pokémon World Championships - VGCPedia](https://www.vgcpedia.com/2022-pokemon-world-championships/)
- [2023 Pokémon World Championships - Pokémon Website](https://www.pokemon.com/us/play-pokemon/worlds/2023/vgc-masters)
- [2024 Pokémon World Championships - Pokémon Website](https://www.pokemon.com/us/play-pokemon/worlds/2024/vgc-masters)
