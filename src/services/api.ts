import { DATA } from "@/utils/data";
import { AuthPhone, UserData } from "@/utils/types";

export const API = {
  sendAuthCode: async (phone: string) => {
    if (phone === "79996712821") return { error: false, message: "Código enviado" };
    throw new Error("Erro ao enviar código");
  },

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
      _id: "ROKAUm05KyjGPGGSo93Q2",
      cityToWork: "KDFpA0ew9CWNM7LJeQBM",

      totalDeliveries: 0,
      deliveryTime: 0,
      totalKM: 0.0,

      AVGRating: 0.0,
      totalRatings: 0,
    };

    return { error: false, message: "Usuário criado com sucesso!", user: newUser };
  },

  updateAccount: async (userData: UserData) => {
    return { error: false, message: "Alterações realizadas com sucesso!" };
  },

  getDeliveryList: async (cityId: string) => {
    const result = DATA.deliveryList.filter((city) => city.cityId === cityId);
    return { error: false, message: "", list: result };
  },

  getDelivery: async (deliveryId: string) => {
    const result = DATA.deliveryList.find((delivery) => delivery._id === deliveryId);

    return { error: false, message: "", delivery: result };
  },

  getUserDeliveryList: async (userId: string) => {
    if (userId === "ROKAUm05KyjGPGGSo93Q")
      return { error: false, message: "", list: DATA.deliveriesOnWay };

    return { error: false, message: "", list: [] };
  },

  getDeliveryHistory: async (userId: string) => {
    if (userId === "ROKAUm05KyjGPGGSo93Q")
      return { error: false, message: "", list: DATA.userDeliveryHistory };

    return { error: false, message: "", list: [] };
  },

  getCities: async () => {
    return { error: false, message: "", list: DATA.citiesToWork };
  },
};
