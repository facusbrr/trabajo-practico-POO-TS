import { Material } from "./class.material.js";

export class Revista extends Material {
  constructor(
    id: number,
    titulo: string,
    autor: string,
    disponible: boolean,
    public readonly edicion: string
  ) {
    super(id, titulo, autor, disponible);
  }
}
