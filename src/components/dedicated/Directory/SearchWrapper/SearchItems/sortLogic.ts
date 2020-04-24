export const sortLogic = (action, ubi, direction): any => {
  let filtered = [];
  let dir = direction ? `<` : `>`;
  switch (action) {
    case 'Location':
      filtered = ubi.sort((first, second) => {
        return first.location.toUpperCase() < second.location.toUpperCase() ? -1 : 1;
      });
      break;
    case 'Active':
      filtered = ubi.filter(item => item.isActive);
      break;
    case 'Income':
      filtered = ubi.sort((first, second) => {
        return first.incomeAverage > second.incomeAverage ? -1 : 1;
      });
      break;
    case 'Length':
      filtered = ubi.sort((first, second) => {
        return first.length > second.length ? -1 : 1;
      });
      break;
    default:
      filtered = ubi.map(item => item);
      return;
  }
  return filtered;
};
