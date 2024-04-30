function expenseModelValidation(props) {
  const monthsOfYear = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  //title validation
  if (!props?.title?.trim()) {
    throw new Error('Title is required');
  }
  //price validation
  if (props.price === null || props.price <= 0) {
    throw new Error('Price is empty or invalid');
  }
  //month validation
  if (!props?.month?.trim() || !monthsOfYear.includes(props.month)) {
    throw new Error('Month is empty or not valid');
  }
  //year validation
  if (props.year <= 0 || props.year === null) {
    throw new Error('Year provided is invalid');
  }

  //shop validation
  if (!props?.shop?.trim()) {
    throw new Error('Shop is required');
  }
}

module.exports = { expenseModelValidation };
