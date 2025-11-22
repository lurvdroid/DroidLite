export const savePosts = (posts) => {
  localStorage.setItem("droidlite-posts", JSON.stringify(posts));
};

export const loadPosts = () => {
  if (typeof window === "undefined") return [];
  return JSON.parse(localStorage.getItem("droidlite-posts") || "[]");
};
