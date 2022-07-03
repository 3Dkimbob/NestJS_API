import { IsString } from 'class-validator';
import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create.movie.dto';

export class UpdateMovieDto extends OmitType(CreateMovieDto, ['title']) {}
