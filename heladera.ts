import { Electrodomestico } from './electrodomestico';

export class Heladera extends Electrodomestico {
  private temperatura: number;

  constructor(marca: string, modelo: string) {
    super(marca, modelo);
    this.temperatura = 0;
  }

  public cambiarTemperatura(nuevaTemp: number): void {
    this.temperatura = nuevaTemp;
    console.log(`Temperatura cambiada a ${this.temperatura}°C`);
  }

  public mostrarInfo(): void {
    super.mostrarInfo();
    console.log(`Temperatura: ${this.temperatura}°C`);
  }
}