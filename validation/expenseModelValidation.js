function expenseModelValidation(props) {
  if (!props?.title?.trim()) {
    throw new Error('Title is required, please check if provided');
  }

  if (!props?.price?.trim()) {
    throw new Error('Price is required, please check if provided');
  }
}

module.exports = { expenseModelValidation };
