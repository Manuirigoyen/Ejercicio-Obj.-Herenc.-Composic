export class ModuloWifi {
    private velocidadMbps: number;
    private frecuenciaGHz: number;
  
    constructor(velocidadMbps: number, frecuenciaGHz: number) {
      this.velocidadMbps = velocidadMbps;
      this.frecuenciaGHz = frecuenciaGHz;
    }
  
    public getVelocidadMbps(): number {
      return this.velocidadMbps;
    }
  
    public setVelocidadMbps(velocidadMbps: number): void {
      this.velocidadMbps = velocidadMbps;
    }
  
    public getFrecuenciaGHz(): number {
      return this.frecuenciaGHz;
    }
  
    public setFrecuenciaGHz(frecuenciaGHz: number): void {
      this.frecuenciaGHz = frecuenciaGHz;
    }
  }