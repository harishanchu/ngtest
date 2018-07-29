export class Util {
  constructor() {
  }

  static mixin(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
      Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
        derivedCtor.prototype[name] = baseCtor.prototype[name];
      });
    });
  }

  static formatDate(date: any) {
    if (!(date instanceof Date)) {
      date = new Date(date);
    }

    let month = '' + (date.getMonth() + 1),
      day = '' + date.getDate();
    const year = date.getFullYear();

    if (month.length < 2) {
      month = '0' + month;
    }

    if (day.length < 2) {
      day = '0' + day;
    }

    return [year, month, day].join('-');
  }

  static handleMultiSelectWithAllOptionChange(formControl, selectionModel) {
    if (selectionModel.hasValue()) {
      const firstItem = selectionModel._selected[0];

      if (selectionModel.selected.length > 1 && firstItem.value === 'all') {
        if (firstItem.active) {
          formControl.setValue(['all']);
        } else {
          formControl.setValue(formControl.value.slice(1));
        }
      }
    } else {
      formControl.setValue(['all']);
    }
  }
}
