## Reto #20 🎁 Encuentra los regalos faltantes y duplicados

<details>
    <summary>📝 Instrucciones</summary>

<br/>

Santa Claus 🎅 está revisando la lista de regalos que debe entregar esta Navidad. Sin embargo, algunos regalos faltan, otros están duplicados, y algunos tienen cantidades incorrectas. Necesita tu ayuda para resolver el problema.

Recibirás dos arrays:

- received: Lista con los regalos que Santa tiene actualmente.
- expected: Lista con los regalos que Santa debería tener.

Tu tarea es escribir una función que, dado received y expected, devuelva un objeto con dos propiedades:

- missing: Un objeto donde las claves son los nombres de los regalos faltantes y los valores son las cantidades que faltan.
- extra: Un objeto donde las claves son los nombres de los regalos extra o duplicados y los valores son las cantidades que sobran.

Ten en cuenta que:

- Los regalos pueden repetirse en ambas listas.
- Las listas de regalos están desordenadas.
- Si no hay regalos que falten o sobren, las propiedades correspondientes (missing o extra) deben ser objetos vacíos.

``` js	

fixGiftList(['puzzle', 'car', 'doll', 'car'], ['car', 'puzzle', 'doll', 'ball'])
// Devuelve:
// {
//   missing: { ball: 1 },
//   extra: { car: 1 }
// }

fixGiftList(
  ['book', 'train', 'kite', 'train'],
  ['train', 'book', 'kite', 'ball', 'kite']
)
// Devuelve:
// {
//   missing: { ball: 1, kite: 1 },
//   extra: { train: 1 }
// }

fixGiftList(
  ['bear', 'bear', 'car'],
  ['bear', 'car', 'puzzle', 'bear', 'car', 'car']
)
// Devuelve:
// {
//   missing: { puzzle: 1, car: 2 },
//   extra: {}
// }

fixGiftList(['bear', 'bear', 'car'], ['car', 'bear', 'bear'])
// Devuelve:
// {
//   missing: {},
//   extra: {}
// }

```

</details>

<br/>

## Solución

``` js

function fixGiftList(received, expected) {
  const countItems = (arr) =>
    arr.reduce((acc, item) => {
      acc[item] = (acc[item] || 0) + 1;
      return acc;
    }, {});

  const receivedCount = countItems(received);
  const expectedCount = countItems(expected);

  const missing = {},
    extra = {};

  for (const item in expectedCount) {
    const receivedQty = receivedCount[item] || 0;
    if (receivedQty < expectedCount[item]) {
      missing[item] = expectedCount[item] - receivedQty;
    }
  }

  for (const item in receivedCount) {
    const expectedQty = expectedCount[item] || 0;
    if (receivedCount[item] > expectedQty) {
      extra[item] = receivedCount[item] - expectedQty;
    }
  }

  return { missing, extra };
}

```

> Puntuación: 🌟🌟🌟🌟🌟

<br/>

[⬅ Atras](https://github.com/jdtb4/adventJS)