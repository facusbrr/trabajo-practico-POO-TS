import type { IUsuario } from "../interfaces/usuario.interface.js";
import type { Material } from "./class.material.js";

class Usuario implements IUsuario {
  constructor(
    public readonly id: number,
    public readonly nombre: string,
    private readonly material: string,
  )
  prestar(material: Material): void {

  }
}
