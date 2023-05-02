const updateLocalStorage = ({ isClicked, followersCount, name, filter }) => {
  localStorage.setItem(
    name,
    JSON.stringify({ isClicked: !isClicked, followersCount })
  );

  const savedFilter = localStorage.getItem('filter');

  if (savedFilter && savedFilter !== filter) {
    const savedData = JSON.parse(localStorage.getItem(savedFilter)) || [];
    const updatedData = savedData.filter(item => item.name !== name);
    localStorage.setItem(savedFilter, JSON.stringify(updatedData));
  }

  const currentFilter = localStorage.getItem('filter');
  const isFollow = currentFilter === 'follow' && !isClicked;
  const isFollowing = currentFilter === 'following' && isClicked;

  if (isFollow || isFollowing) {
    const savedData = JSON.parse(localStorage.getItem(currentFilter)) || [];
    const updatedData = savedData.filter(item => item.name !== name);
    localStorage.setItem(currentFilter, JSON.stringify(updatedData));
  }
};

export default updateLocalStorage;
