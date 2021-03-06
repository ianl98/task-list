//la interfaz en este caso sirve para declarar el tipo de dato que van a tener las columnas de la "Base de datos" hardcodeada
import {Task} from "./Task";

export const TASKS: Task[] = [
  {
    id: 1,
    text: 'Terminar de aprender Angular',
    day: 'Marzo 4 a las 22:00',
    reminder: true
  },
  {
    id: 2,
    text: 'Hacer las compras para la cena',
    day: 'Marzo 2 a las 18:00',
    reminder: true
  },
  {
    id: 3,
    text: 'Investigar sobre Java',
    day: 'Marzo 5 a las 08:00',
    reminder: false
  },
  {
    id: 4,
    text: 'Leer mi libro favorito',
    day: 'Marzo 6 a las 21:00',
    reminder: false
  },
]
