import { Controller, Post, UseGuards, Request, Get } from '@nestjs/common';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthService } from './auth.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { LoginDto } from './dto/login-body.dto';

@Controller('auth')
@ApiTags('Authenticate')
export class AuthController {
    constructor(private authService: AuthService) {}
    
    @UseGuards(LocalAuthGuard)
    @Post('/login')
    @ApiBody({type: LoginDto})
    async login(@Request() req: { user: { userId: number; username: string } }) {
        return this.authService.login(req.user);
    }

}
