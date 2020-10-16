import { Injectable } from '@nestjs/common';
import { InjectSendGrid } from '@ntegral/nestjs-sendgrid/dist/common/sendgrid.decorator';
import { SendGridService } from '@ntegral/nestjs-sendgrid/dist/services/sendgrid.service';

@Injectable()
export class EmailsService {
	constructor(@InjectSendGrid() private readonly client: SendGridService) {}
}
