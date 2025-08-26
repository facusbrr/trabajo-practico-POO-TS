import type IBibliotecaItem from "../interfaces/biblioteca.interface.js";

export abstract class Material implements IBibliotecaItem {
  constructor(
    public readonly id: number,
    public readonly titulo: string,
    public readonly autor: string,
    private readonly disponible: boolean
  ) {
  }


  mostrarInfo(): string {
    return `ID: ${this.id}, Título: ${this.titulo}, Autor: ${this.autor}`;
  }

  get disponibilidad() {
    return this.disponible
  }

  set disponibilidad(disponible: boolean) {
    this.disponibilidad = disponible
  }
}
