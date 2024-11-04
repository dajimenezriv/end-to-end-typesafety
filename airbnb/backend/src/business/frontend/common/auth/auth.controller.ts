import { Get, Route, Tags } from 'tsoa';
import { container } from 'tsyringe';

import { GetAuthenticatedUserService } from './out/get-authenticated-user.service';

@Route('frontend/common/auth')
@Tags('frontend/common/auth')
export class CommonAuthController {
  @Get('')
  async getAuthenticatedUser() {
    const service = container.resolve(GetAuthenticatedUserService);
    return await service.execute();
  }
}
