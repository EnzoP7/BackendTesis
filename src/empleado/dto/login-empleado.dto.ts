import { IsNotEmpty, IsString } from "class-validator";



export class LoginEmpleadoDto {


    @IsNotEmpty()
    @IsString()
mail: string;

@IsNotEmpty()
@IsString()
password:string

}