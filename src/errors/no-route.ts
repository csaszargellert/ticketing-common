import { CustomError } from './custom-error';

export class NoRoute extends CustomError {
  statusCode = 404;
  error = 'Not Found';

  constructor() {
    super('No Route');

    Object.setPrototypeOf(this, NoRoute.prototype);
  }

  serializeErrors() {
    return [{ message: this.error }];
  }
}
