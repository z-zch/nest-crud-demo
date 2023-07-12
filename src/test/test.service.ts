import { Injectable } from '@nestjs/common';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';

@Injectable()
export class TestService {
  create(createTestDto: CreateTestDto) {
    console.log(createTestDto);
    return { code: 200, msg: 'This action adds a new test' };
  }

  findAll() {
    return `This action returns all test`;
  }

  findOne(id: number) {
    return `This action returns a #${id} test`;
  }

  update(id: number, updateTestDto: UpdateTestDto) {
    console.log(updateTestDto);
    return `This action updates a #${id} test`;
  }

  remove(id: number) {
    return `This action removes a #${id} test`;
  }
}
