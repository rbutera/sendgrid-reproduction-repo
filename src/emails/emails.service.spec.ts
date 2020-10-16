import { SendGridModule } from '@ntegral/nestjs-sendgrid';
import { Test, TestingModule } from '@nestjs/testing';
import { EmailsService, baz } from './emails.service';

describe('EmailsService', () => {
  let service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        SendGridModule.forRoot({
          apiKey: 'SG.my_secret_key',
        }),
      ],
      providers: [EmailsService],
    }).compile();

    service = module.get<EmailsService>(EmailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should also export bar as baz', () => {
    expect(baz).toEqual('bar');
  });
});
