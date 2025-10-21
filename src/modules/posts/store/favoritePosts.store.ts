import { Post } from "@/modules/posts/types/post.types";
import { create } from "zustand";

interface FavoritePostsState {
  favoritePosts: Post[];
  addFavoritePost: (post: Post) => void;
  removeFavoritePost: (postId: number) => void;
}

export const useFavoritePostsStore = create<FavoritePostsState>((set, get) => ({
  favoritePosts: [],

  addFavoritePost: (post: Post) =>
    set(state => ({
      favoritePosts: [...state.favoritePosts, post],
    })),

  removeFavoritePost: (postId: number) =>
    set(state => ({
      favoritePosts: state.favoritePosts.filter(post => post.id !== postId),
    })),
}));
