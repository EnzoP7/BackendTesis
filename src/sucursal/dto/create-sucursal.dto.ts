import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateSucursalDto {


    @IsInt()
    @IsNotEmpty()
id: number


@IsString()
@IsNotEmpty()
direccion: string;

}
