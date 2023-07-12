import { Module } from '@nestjs/common';
import { TestService } from './test.service';
import { TestController } from './test.controller';

@Module({
  controllers: [TestController],
  providers: [
    {
      provide: 'TestService',
      useClass: TestService,
    },
    {
      provide: 'JD',
      useValue: ['TB', 'PDD', 'JD'],
    },
  ],
  exports: ['TestService'],
})
export class TestModule {}
