export default interface IBibliotecaItem {
  id: number,
  titulo: string,
  autor: string,
  mostrarInfo(): string
}
