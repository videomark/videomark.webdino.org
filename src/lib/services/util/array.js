/**
 * Remove duplicate items from the given object array.
 * @param {Array.<Object>} array Original array.
 * @param {String} key Object key to be checked.
 * @returns {Array.<Object>} Filtered array.
 */
export const unique = (array, key) => {
  if (!Array.isArray(array)) {
    return [];
  }

  return array.filter(
    (item, index) => array.findIndex((_item) => _item[key] === item[key]) === index,
  );
};
