import { useMemo } from 'react';

const useFilteredItems = (state, searchText, sortOptions) => {
  return useMemo(() => {
    const filteredItems = state.filter(item =>
      item.name.toLowerCase().includes(searchText.toLowerCase()) ||
      item.description.toLowerCase().includes(searchText.toLowerCase())
    );

    const sortedItems = filteredItems.sort((a, b) => {
      if (sortOptions === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortOptions === 'description') {
        return a.description.localeCompare(b.description);
      }
      return 0;
    });

    return sortedItems;
  }, [state, searchText, sortOptions]);
};

export default useFilteredItems;
