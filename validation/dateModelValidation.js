function dateModelValidation(props) {
  if (!props?.year?.trim()) {
    throw new Error('Year is required, please check if provided');
  }

  if (!props?.month?.trim()) {
    throw new Error('Month is required, please check if provided');
  }

  if (!props?.day?.trim()) {
    throw new Error('Day is required, please check if provided');
  }

  if (!props?.shop?.trim()) {
    throw new Error('Shop is required, please check if provided');
  }
}

module.exports = { dateModelValidation };
