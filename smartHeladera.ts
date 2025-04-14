import { Heladera } from './heladera';
import { ModuloWifi } from './moduloWifi';

export class SmartHeladera extends Heladera {
  private moduloWifi: ModuloWifi;

  constructor(marca: string, modelo: string) {
    super(marca, modelo);
    this.moduloWifi = new ModuloWifi(100, 2.4);
  
  }

  public conectarInternet(): void {
    if(this.estaEncendido)
    console.log('Conectado a internet');
  }

  public mostrarInfo(): void {
    super.mostrarInfo();
    console.log(`Velocidad de conexión: ${this.moduloWifi.getVelocidadMbps()} Mbps`);
    console.log(`Frecuencia de conexión: ${this.moduloWifi.getFrecuenciaGHz()} GHz`);
  }
}