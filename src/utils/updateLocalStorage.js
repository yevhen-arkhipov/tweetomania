const updateLocalStorage = ({ isClicked, followersCount, name }) => {
  localStorage.setItem(
    name,
    JSON.stringify({ isClicked: !isClicked, followersCount })
  );

  const savedFilter = localStorage.getItem(name);

  if (savedFilter && savedFilter !== name) {
    const savedData = JSON.parse(localStorage.getItem(savedFilter)) || {};
    if (Array.isArray(savedData)) {
      const updatedData = savedData.filter(item => item.name !== name);
      localStorage.setItem(savedFilter, JSON.stringify(updatedData));
    }
  }

  const currentFilter = localStorage.getItem(name);
  const isFollow = currentFilter === 'follow' && !isClicked;
  const isFollowing = currentFilter === 'following' && isClicked;

  if (isFollow || isFollowing) {
    const savedData = JSON.parse(localStorage.getItem(currentFilter)) || {};
    if (Array.isArray(savedData)) {
      const updatedData = savedData.filter(item => item.name !== name);
      localStorage.setItem(currentFilter, JSON.stringify(updatedData));
    }
  }
};

export default updateLocalStorage;
