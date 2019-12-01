class regExpService {
  isValidName(name) {
    const exp = new RegExp(REGEXP.NAME);
    if (exp.test(name)) {
      return true;
    }
    return false;
  }

  isValidName(alias) {
    const exp = new RegExp(REGEXP.ALIAS);
    if (exp.test(alias)) {
      return true;
    }
    return false;
  }

  isValidBornDate(value) {
    const exp = new RegExp(REGEXP.SPBIRTHDAY);
    if (exp.test(value)) {
      return true;
    }
    return false;
  }
}
