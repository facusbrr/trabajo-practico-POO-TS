import type { Material } from "../models/class.material.js";

export interface IUsuario {
  id: number
  nombre: string
  prestar(material: Material): void;
}
