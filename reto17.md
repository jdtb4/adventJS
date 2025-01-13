## Reto #17 💣 Busca las bombas del Grinch

<details>
    <summary>📝 Instrucciones</summary>

<br/>

El Grinch ha estado haciendo de las suyas en el Polo Norte y ha sembrado bombas de carbón explosivo 💣 en la fábrica de juguetes de los duendes. Quiere que todos los juguetes queden inutilizados y por eso ha dejado una cuadrícula donde algunas celdas tienen carbón explosivo (true) y otras están vacías (false).

Los duendes necesitan tu ayuda para mapear las zonas peligrosas. Cada celda vacía debe mostrar un número que indique cuántas bombas de carbón explosivo hay en las posiciones adyacentes, incluidas las diagonales.

``` js

detectBombs([
  [true, false, false],
  [false, true, false],
  [false, false, false]
])
// [
//   [1, 2, 1],
//   [2, 1, 1],
//   [1, 1, 1]
// ]

detectBombs([
  [true, false],
  [false, false]
])
// [
//   [0, 1],
//   [1, 1]
// ]

detectBombs([
  [true, true],
  [false, false],
  [true, true]
])

// [
//   [1, 1],
//   [4, 4],
//   [1, 1]
// ]

```

Nota: ¿Quieres una pista? Seguro que has jugado al juego de buscaminas antes… 😉

</details>

<br/>

## Solución

```js

function detectBombs(grid) {
  let result = [];
  for (let i = 0; i < grid.length; i++) {
    let row = [];
    for (let j = 0; j < grid[i].length; j++) {
      let count = 0;
      for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
          if (grid[i + x] && grid[i + x][j + y]) {
            count++;
          }
        }
      }
      if (grid[i][j]) {
        count--;
      }
      row.push(count);
    }
    result.push(row);
  }
  return result;
}

```

> Puntuación: 🌟🌟🌟🌟🌟

<br/>

[⬅ Atras](https://github.com/jdtb4/adventJS)