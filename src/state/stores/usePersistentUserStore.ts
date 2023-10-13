import {create} from "zustand";
import {createJSONStorage, persist} from "zustand/middleware";

interface UsePersistentUserStoreInterface {
  userName: string;
  token?: string;
  setName: Function;
  resetName: Function;
  storeToken: any;
  chats: any[];
  storeChats: any;
}

export const usePersistentUserStore = create(
  persist<UsePersistentUserStoreInterface>(
    set => ({
      userName: 'Markske',
      token: undefined,
      chats: [],
      setName: (newName: string) => set(state => ({userName: newName})),
      resetName: () => set({userName: ""}),
      storeToken: (token: string) => set({token: token}),
      storeChats: (chats: any[]) => set({chats: chats}),
    }),
    {
      name: "userStore", // unique name
      storage: createJSONStorage(() => window.localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
