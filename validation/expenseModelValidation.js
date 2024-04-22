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

  const daysOfMonth = Array.from({ length: 31 }, (_, index) => index + 1);

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
  //day of the month validation
  if (props.day <= 0 || !daysOfMonth.includes(props.day)) {
    throw new Error('Day provided is invalid');
  }
  //shop validation
  if (!props?.shop?.trim()) {
    throw new Error('Shop is required');
  }
}

module.exports = { expenseModelValidation };
