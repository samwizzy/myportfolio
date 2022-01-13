class Helpers {
  classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
}

const helper = new Helpers();

export const { classNames } = helper;
