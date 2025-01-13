[⬅ Atras](https://github.com/jdtb4/adventJS)

## Reto #16 ❄ Limpiando la nieve del camino

<details>
    <summary>📝 Instrucciones</summary>

<br/>

Los elfos están trabajando arduamente para limpiar los caminos llenos de nieve mágica ❄️. Esta nieve tiene una propiedad especial: si dos montículos de nieve idénticos y adyacentes se encuentran, desaparecen automáticamente.

Tu tarea es escribir una función que ayude a los elfos a simular este proceso. El camino se representa por una cadena de texto y cada montículo de nieve un carácter.

Tienes que eliminar todos los montículos de nieve adyacentes que sean iguales hasta que no queden más movimientos posibles.

El resultado debe ser el camino final después de haber eliminado todos los montículos duplicados:

``` js

removeSnow('zxxzoz') // -> "oz"
// 1. Eliminamos "xx", quedando "zzoz"
// 2. Eliminamos "zz", quedando "oz"

removeSnow('abcdd') // -> "abc"
// 1. Eliminamos "dd", quedando "abc"

removeSnow('zzz') // -> "z"
// 1. Eliminamos "zz", quedando "z"

removeSnow('a') // -> "a"
// No hay montículos repetidos

```

</details>

<br/>

## Solución

```javascript

function removeSnow(s) {
    let arr = s.split('');
    let i = 0;
    while (i < arr.length) {
        if (arr[i] === arr[i + 1]) {
            arr.splice(i, 2);
            i = 0;
        } else {
            i++;
        }
    }
    return arr.join('');
}

```	

<br/>

> Puntuación 🌟🌟🌟🌟🌟


[⬅ Atras](https://github.com/jdtb4/adventJS)

