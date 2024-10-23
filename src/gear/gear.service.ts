import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GearApi } from '@gear-js/api';

@Injectable()
export class GearService {
  private gearApi: any;

  constructor(
    @Inject('SAILS') private sailsApp: any,
    private configService: ConfigService,
  ) {
    this.initGearApi();
  }

  private async initGearApi() {
    this.gearApi = await GearApi.create({
      providerAddress: 'wss://testnet.vara.network',
    });
  }

  public async chain(): Promise<any> {
    return this.sailsApp.config; // Retornar alguna configuración de Sails
  }

  public async fullState() {
    // Implementación para obtener el estado completo
    return { state: 'fullState' }; // Ajusta esto según tu lógica
  }

  public async getProgramOwner() {
    const ownerAddress = await this.gearApi.getProgramOwner();
    return { owner: ownerAddress };
  }

  public async stakeMessage(amount: number) {
    // Lógica de staking
    const response = await this.gearApi.tx.stake({ amount });
    return response; // Devuelve la respuesta de la transacción
  }

  public async sendMessage(message: string) {
    const response = await this.gearApi.tx.sendMessage({ message });
    return { status: 'Mensaje enviado', response };
  }
}
