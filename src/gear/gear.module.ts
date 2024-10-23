import { Module, Provider } from '@nestjs/common';
import { GearService } from './gear.service';
import { GearController } from './gear.controller';
import { ConfigModule } from '@nestjs/config';
import * as Sails from 'sails';


const sailsProvider: Provider = {
  provide: 'SAILS',
  useFactory: async () => {
    const sailsApp = await new Promise((resolve, reject) => {
      Sails.lift({}, (err: any, sailsInstance: any) => {
        if (err) return reject(err);
        resolve(sailsInstance);
      });
    });
    return sailsApp;
  },
};

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [GearController],
  providers: [sailsProvider, GearService],
})
export class GearModule {}
