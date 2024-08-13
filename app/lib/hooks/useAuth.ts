import {create} from "zustand";


interface AuthState {
    isLogin: boolean,
    data: {
        name?: string,
        surname?: string,
        patronymic?: string,
        email?: string,
        phoneNumber?: string,
        country?: string,
        dateOfBirth?: string,
        username?: string,
        profession?: string,
        role?: string
    }
}

interface AuthStore {
    auth: AuthState,
    update: () => void,
    deleteData: () => void
}

export const useAuth = create<AuthStore>((set) => ({
    auth: {
        isLogin: false,
        data: {}
    },
    update: async () => {
        let response = await fetch(`/api/user`, {credentials: "include"})
        let data = await response.json()

        if (data.body) {
            set({
                auth: {
                    data: data.body,
                    isLogin: true
                }
            })
        }
    },
    deleteData: () => {
        set({
            auth: {
                data: {},
                isLogin: false,
            }
        })
    }
}))