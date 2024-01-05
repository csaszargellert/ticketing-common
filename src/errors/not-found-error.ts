import { CustomError } from './custom-error';

export class NotFoundError extends CustomError {
  statusCode = 404;
  error = 'Not Found';

  constructor() {
    super('Not found');

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors() {
    return [{ message: this.error }];
  }
}
