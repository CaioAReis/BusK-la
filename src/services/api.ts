import { DATA } from "@/utils/data";
import { AuthPhone, UserData } from "@/utils/types";

export const API = {
  //  Send SMS code to phone
  sendAuthCode: async (phone: string) => {
    if (phone === "79996712821") return { error: false, message: "Código enviado" };
    throw new Error("Erro ao enviar código");
  },

  //  Verify phone and code
  verifyCode: async ({ phone, code }: AuthPhone) => {
    if (phone === "79996712821") {
      if (code === "918311") return { error: false, message: "", user: null };
      if (code === "918312") return { error: false, message: "", user: DATA.user };

      throw new Error("Código inválido");
    }
  },

  createAccount: async (userData: UserData) => {
    const newUser: UserData = {
      ...userData,
      _id: "ROKAUm05KyjGPGGSo93Q",
      cityToWork: "KDFpA0ew9CWNM7LJeQBM",

      totalDeliveries: 0,
      deliveryTime: 0,
      totalKM: 0.0,

      AVGRating: 0.0,
      totalRatings: 0,
    };

    return { error: false, message: "Usuário criado com sucesso!", user: newUser };
  },

  getDeliveryList: async () => {
    const result = {};
    return result;
  },

  getUserDeliveryList: async () => {
    const result = {};
    return result;
  },
};