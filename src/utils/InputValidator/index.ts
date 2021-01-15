/**
 * The milestones that would
 *  that will be shown in the page.
 *  */
class InputValidator {
  /**
   * return the boolean value if a given string passes a given condition.
   *
   * @param {string} s its a variable that contains the string
   *
   * @param {number} maxNumberOfCharacters its a variable that checks
   * if s is within limits the default value is 100
   *
   * @return {boolean} a boolean that tells if the value is alphabetic .
   * @since 1.0.0
   */
  static chekForString(
      s: string,
      maxNumberOfCharacters:number = 100,
  ): boolean {
    const justLettersRegex = /^[a-z A-Z]+$/g;
    const regexResult = justLettersRegex.test(s);
    const lengthCheck = s.length <= maxNumberOfCharacters;

    return regexResult && lengthCheck;
  }

  /**
   * Returns if the given string
   *
   * @param {string} mail is a variable that
   * contains the email string to be verified
   *
   * @param {number} maxNumberOfCharacters its a variable that checks
   * if s is within limits the default value is 100
   *
   * @return {boolean} a boolean that tells if the value is alphabetic .
   * @since 1.0.0
   */
  static checkForMail(
      mail: string,
      maxNumberOfCharacters:number = 100,
  ): boolean {
    if (mail.length > 0 ) {
      const mailRegex = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/g;
      const lengthCheck = mail.length <= maxNumberOfCharacters;
      return mailRegex.test(mail) && lengthCheck;
    }
    return true;
  }

  /**
   * Returns if the given string are just numbers
   * @param {string} str to be checked
   *
   * @param {number} maxNumberOfCharacters its a variable that checks
   * if s is within limits the default value is 5
   *
   * @return {boolean} a boolean that tells if the value is alphabetic .
   * @since 1.0.0
   */
  static checkForOnlyNumbers(
      str: string,
      maxNumberOfCharacters:number = 5,
  ): boolean {
    if (str.length > 0 ) {
      const justNumbersRegex = /^[0-9]+$/g;
      const lengthCheck = str.length <= maxNumberOfCharacters;

      return justNumbersRegex.test(str) && lengthCheck;
    }
    return true;
  }

  /**
   * Returns if the given string are just numbers
   * @param {string} str to be checked
   *
   * @param {number} maxNumberOfCharacters its a variable that checks
   * if s is within limits the default value is 5
   *
   * @return {boolean} a boolean that tells if the value is alphabetic .
   * @since 1.0.0
   */
  static checkForAlphanumeric(
      str: string,
      maxNumberOfCharacters:number = 5,
  ): boolean {
    if (str.length > 0 ) {
      const alphanumericRegex = /^[a-z A-Z0-9]+$/g;
      const lengthCheck = str.length <= maxNumberOfCharacters;
      return alphanumericRegex.test(str) && lengthCheck;
    }

    return true;
  }

  /**
   * Returns if the given string are letter numbers or mail symbols
   * @param {string} str to be checked
   *
   * @param {number} maxNumberOfCharacters its a variable that checks
   * if s is within limits the default value is 5
   *
   * @return {boolean} a boolean that tells if the value is alphabetic .
   * @since 1.0.0
   */
  static checkForAlphanumericWithSymbols(
      str: string,
      maxNumberOfCharacters:number = 5,
  ): boolean {
    if (str.length > 0 ) {
      const alphanumericRegex = /^[a-z A-Z0-9.\_\-+@]+$/g;
      const lengthCheck = str.length <= maxNumberOfCharacters;
      return alphanumericRegex.test(str) && lengthCheck;
    }

    return true;
  }
}

export default InputValidator;
