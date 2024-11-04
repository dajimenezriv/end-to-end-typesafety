import { autoInjectable } from 'tsyringe';

@autoInjectable()
export class GetAuthenticatedUserService {
  async execute() {
    return { id: 1 };
  }
}
