import { GenreController } from './genre.controller';
import { GenreService } from './genre.service';
import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { GenreModel } from './genre.model';

@Module({
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: GenreModel,
        schemaOptions: {
          collection: 'Genre',
        },
      },
    ]),
  ],
  controllers: [GenreController],
  providers: [GenreService],
})
export class GenreModule {}
