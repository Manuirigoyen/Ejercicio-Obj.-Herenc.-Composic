export class Electrodomestico {
    protected marca: string;
    protected modelo: string;
    protected estaEncendido: boolean;
  
    constructor(marca: string, modelo: string) {
      this.marca = marca;
      this.modelo = modelo;
      this.estaEncendido = false;
    }
  
    public encender(): void {
      this.estaEncendido = true;
      console.log('Electrodoméstico encendido');
    }
  
    public apagar(): void {
      this.estaEncendido = false;
      console.log('Electrodoméstico apagado');
    }
  
    public mostrarInfo(): void {
      console.log(`Marca: ${this.marca}`);
      console.log(`Modelo: ${this.modelo}`);
      console.log(`Estado: ${this.estaEncendido ? 'Encendido' : 'Apagado'}`);
    }
  }