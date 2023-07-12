import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getName(body: any): string {
    return JSON.stringify(body);
  }
}
