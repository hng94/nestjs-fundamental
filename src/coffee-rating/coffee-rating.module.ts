import { Module } from '@nestjs/common';
import { CoffeeModule } from 'src/coffees/coffees.module';
import { DatabaseModule } from 'src/database/database.module';
import { CoffeeRatingService } from './coffee-rating.service';

@Module({
  imports: [
    CoffeeModule,
    DatabaseModule.register({
      type: 'postgres',
      host: 'localhost',
      password: 'password',
    }),
  ],
  providers: [CoffeeRatingService],
})
export class CoffeeRatingModule {}
