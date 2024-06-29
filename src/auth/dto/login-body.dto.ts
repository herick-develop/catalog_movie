import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({
    description: 'The user of authenticate',
    example: 'john',
  })
  username: string;

  @ApiProperty({
    description: 'The password of the user',
    example: 'senha',
  })
  password: string;
}
