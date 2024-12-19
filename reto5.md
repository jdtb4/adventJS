[⬅ Atras](https://github.com/jdtb4/adventJS)

## Reto #5 👞 Emparejando botas

<detais>
  <summary>📝 Instrucciones</summary>
<br/>

Los elfos 🧝🧝‍♂️ de Santa Claus han encontrado un montón de botas mágicas desordenadas en el taller. Cada bota se describe por dos valores:

- type indica si es una bota izquierda (I) o derecha (R).
- size indica el tamaño de la bota.

Tu tarea es ayudar a los elfos a emparejar todas las botas del mismo tamaño que tengan izquierda y derecha. Para ello, debes devolver una lista con los pares disponibles después de emparejar las botas.

¡Ten en cuenta que puedes tener más de una zapatilla emparejada del mismo tamaño!

```js

const shoes = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 42 }
]

organizeShoes(shoes)
// [38, 42]

const shoes2 = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'I', size: 38 },
  { type: 'I', size: 38 },
  { type: 'R', size: 38 }
]
// [38, 38]

const shoes3 = [
  { type: 'I', size: 38 },
  { type: 'R', size: 36 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 43 }
]

organizeShoes(shoes3)
// []

```

</details>
<br/>

## Solución

```js

function organizeShoes(shoes) {
  const shoeMap = new Map();
  const totalPairs = [];

  for (const { type: foot, size } of shoes) {
    if (!shoeMap.has(size)) {
      shoeMap.set(size, { I: 0, R: 0 });
    }

    const entry = shoeMap.get(size);
    entry[foot]++;

    if (entry.I > 0 && entry.R > 0) {
      totalPairs.push(size);
      entry.I--;
      entry.R--;
    }
  }

  return totalPairs;
}


```

>Puntuación: 🌟🌟🌟🌟🌟

<br/>

[⬅ Atras](https://github.com/jdtb4/adventJS)