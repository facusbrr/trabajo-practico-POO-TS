import { Material } from "./class.material.js";

class Libro extends Material {
  constructor(
    id: number,
    titulo: string,
    autor: string,
    disponibilidad: boolean,
    public readonly paginas: number,
    public readonly genero?: string
  ) {
    super(id, titulo, autor, disponibilidad)
  }

}
