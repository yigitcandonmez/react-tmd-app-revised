export const getLikedMovies = () => {
  let store = [];
  const items = localStorage.getItem("likedMovies");
  const splitItems = items?.split(",");

  if (splitItems) {
    store = [...splitItems];
  }

  return store;
};

export const setLocalLikedMovies = (img) => {
  let likedMovies = getLikedMovies();

  if (!likedMovies.includes(img)) {
    localStorage.setItem("likedMovies", [...likedMovies, img]);
  } else {
    const filteredMovies = likedMovies.filter((e) => {
      return e !== img;
    });
    localStorage.setItem("likedMovies", filteredMovies);
  }
};
