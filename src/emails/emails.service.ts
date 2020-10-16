import { Injectable } from '@nestjs/common';
import { InjectSendGrid } from '@ntegral/nestjs-sendgrid/dist/common/sendgrid.decorator';
import { SendGridService } from '@ntegral/nestjs-sendgrid/dist/services/sendgrid.service';
import bar from 'src/bar'; // to demonstrate absolute import path

@Injectable()
export class EmailsService {
  constructor(@InjectSendGrid() private readonly client: SendGridService) {}
}

export const baz = bar;
