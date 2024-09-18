/**
 * Controller for application-wide routes.
 */
export class AppController {
  /**
   * Handles the root route.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   */
  static getHomepage(req, res) {
    res.status(200).send('Hello Holberton School!');
  }
}

