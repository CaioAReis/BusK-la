import { AuthPhone, NotificationCardProps, UserData } from "../types";

export const DATA = {
  signIn: {
    code: "918312",
    phone: "79996712821",
  } as AuthPhone,

  user: {
    _id: "ROKAUm05KyjGPGGSo93Q",
    doc: "00000000000",
    name: "Caio AReis",
    email: "CaioAReis@mail.com",
    phone: "79999999999",
    picture: "",
    birthDate: "24/06/1998",
    vehicleType: "Moto",

    cityToWork: "KDFpA0ew9CWNM7LJeQBM",

    totalDeliveries: 10,
    deliveryTime: 12,
    totalKM: 12.323,

    AVGRating: 4.3,
    totalRatings: 1946,
  } as UserData,

  notifications: [
    {
      _id: "1",
      isNew: true,
      title: "Boas vindas!",
      createdAt: new Date(),
      body: "Seja bem vindo ao nosso app!",
    },
  ] as NotificationCardProps[],

  citiesToWork: [
    {
      name: "Lagarto - SE",
      _id: "KDFpA0ew9CWNM7LJeQBM",
      coords: [-10.91564482988727, -37.67127265944143],
    },

    {
      name: "Aracaju - SE",
      _id: "eyMYbBXXPzcIKTNyBBZp",
      coords: [-10.926928352712721, -37.07252443934193],
    },
  ],

  userDeliveryHistory: [
    {
      status: 0,
      _id: "XYMP99JETIE4",
      code: "XYMP99JETIE4",
      createdAt: new Date(),
      cityId: "KDFpA0ew9CWNM7LJeQBM",
      addresses: {
        toCollect: {
          coords: [-10.91564482988727, -37.67127265944143],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
        },

        toDelivery: {
          coords: [-10.91564482988727, -37.67127265944143],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
        },
      },
    },

    {
      status: 0,
      _id: "O5XJCY6APE13",
      code: "O5XJCY6APE13",
      createdAt: new Date(),
      cityId: "KDFpA0ew9CWNM7LJeQBM",
      addresses: {
        toCollect: {
          coords: [-10.91564482988727, -37.67127265944143],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
        },

        toDelivery: {
          coords: [-10.91564482988727, -37.67127265944143],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
        },
      },
    },

    {
      status: 0,
      _id: "I5FN8H9GUUWQ",
      code: "I5FN8H9GUUWQ",
      createdAt: new Date(),
      cityId: "KDFpA0ew9CWNM7LJeQBM",
      addresses: {
        toCollect: {
          coords: [-10.91564482988727, -37.67127265944143],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
        },

        toDelivery: {
          coords: [-10.91564482988727, -37.67127265944143],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
        },
      },
    },

    {
      status: 0,
      _id: "1DNRYPJURENP",
      code: "1DNRYPJURENP",
      createdAt: new Date(),
      cityId: "KDFpA0ew9CWNM7LJeQBM",
      addresses: {
        toCollect: {
          coords: [-10.91564482988727, -37.67127265944143],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
        },

        toDelivery: {
          coords: [-10.91564482988727, -37.67127265944143],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
        },
      },
    },
  ],

  deliveryList: [
    {
      status: 0,
      _id: "LRW4YUCER9T9",
      code: "LRW4YUCER9T9",
      createdAt: new Date(),
      cityId: "KDFpA0ew9CWNM7LJeQBM",
      addresses: {
        toCollect: {
          coords: [-10.91564482988727, -37.67127265944143],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
        },

        toDelivery: {
          coords: [-10.91564482988727, -37.67127265944143],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
        },
      },
    },

    {
      status: 0,
      _id: "CWTAQ468GQEY",
      code: "CWTAQ468GQEY",
      createdAt: new Date(),
      cityId: "KDFpA0ew9CWNM7LJeQBM",
      addresses: {
        toCollect: {
          coords: [-10.91564482988727, -37.67127265944143],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
        },

        toDelivery: {
          coords: [-10.91564482988727, -37.67127265944143],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
        },
      },
    },

    {
      status: 0,
      _id: "ZPJZCJUZRE4I",
      code: "ZPJZCJUZRE4I",
      createdAt: new Date(),
      cityId: "KDFpA0ew9CWNM7LJeQBM",
      addresses: {
        toCollect: {
          coords: [-10.91564482988727, -37.67127265944143],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
        },

        toDelivery: {
          coords: [-10.91564482988727, -37.67127265944143],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
        },
      },
    },

    {
      status: 0,
      _id: "QFQ31XXG06JW",
      code: "QFQ31XXG06JW",
      createdAt: new Date(),
      cityId: "KDFpA0ew9CWNM7LJeQBM",
      addresses: {
        toCollect: {
          coords: [-10.91564482988727, -37.67127265944143],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
        },

        toDelivery: {
          coords: [-10.91564482988727, -37.67127265944143],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
        },
      },
    },

    {
      status: 0,
      _id: "DSDLKL86LLJP",
      code: "DSDLKL86LLJP",
      createdAt: new Date(),
      cityId: "KDFpA0ew9CWNM7LJeQBM",
      addresses: {
        toCollect: {
          coords: [-10.91564482988727, -37.67127265944143],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
        },

        toDelivery: {
          coords: [-10.91564482988727, -37.67127265944143],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
        },
      },
    },

    {
      status: 0,
      _id: "RCREBZ30UXH7",
      code: "RCREBZ30UXH7",
      createdAt: new Date(),
      cityId: "KDFpA0ew9CWNM7LJeQBM",
      addresses: {
        toCollect: {
          coords: [-10.91564482988727, -37.67127265944143],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
        },

        toDelivery: {
          coords: [-10.91564482988727, -37.67127265944143],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
        },
      },
    },

    {
      status: 0,
      _id: "0W8JB92TY8ZP",
      code: "0W8JB92TY8ZP",
      createdAt: new Date(),
      cityId: "KDFpA0ew9CWNM7LJeQBM",
      addresses: {
        toCollect: {
          coords: [-10.91564482988727, -37.67127265944143],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
        },

        toDelivery: {
          coords: [-10.91564482988727, -37.67127265944143],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
        },
      },
    },

    {
      status: 0,
      _id: "ZEL3D32HINSB",
      code: "ZEL3D32HINSB",
      createdAt: new Date(),
      cityId: "KDFpA0ew9CWNM7LJeQBM",
      addresses: {
        toCollect: {
          coords: [-10.91564482988727, -37.67127265944143],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
        },

        toDelivery: {
          coords: [-10.91564482988727, -37.67127265944143],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
        },
      },
    },

    {
      status: 0,
      _id: "XXUN2J5JPG49",
      code: "XXUN2J5JPG49",
      createdAt: new Date(),
      cityId: "KDFpA0ew9CWNM7LJeQBM",
      addresses: {
        toCollect: {
          coords: [-10.91564482988727, -37.67127265944143],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
        },

        toDelivery: {
          coords: [-10.91564482988727, -37.67127265944143],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
        },
      },
    },

    {
      status: 0,
      _id: "FUI4IHU6T6ZL",
      code: "FUI4IHU6T6ZL",
      createdAt: new Date(),
      cityId: "KDFpA0ew9CWNM7LJeQBM",
      addresses: {
        toCollect: {
          coords: [-10.91564482988727, -37.67127265944143],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
        },

        toDelivery: {
          coords: [-10.91564482988727, -37.67127265944143],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
        },
      },
    },

    {
      status: 0,
      _id: "H17KFBU0A9AJ",
      code: "H17KFBU0A9AJ",
      createdAt: new Date(),
      cityId: "eyMYbBXXPzcIKTNyBBZp",
      addresses: {
        toCollect: {
          coords: [-10.926928352712721, -37.07252443934193],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
        },

        toDelivery: {
          coords: [-10.926928352712721, -37.07252443934193],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
        },
      },
    },

    {
      status: 0,
      _id: "NGOBUQYKG5G5",
      code: "NGOBUQYKG5G5",
      createdAt: new Date(),
      cityId: "eyMYbBXXPzcIKTNyBBZp",
      addresses: {
        toCollect: {
          coords: [-10.926928352712721, -37.07252443934193],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
        },

        toDelivery: {
          coords: [-10.926928352712721, -37.07252443934193],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
        },
      },
    },

    {
      status: 0,
      _id: "QOUTJBKKFEPD",
      code: "QOUTJBKKFEPD",
      createdAt: new Date(),
      cityId: "eyMYbBXXPzcIKTNyBBZp",
      addresses: {
        toCollect: {
          coords: [-10.926928352712721, -37.07252443934193],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
        },

        toDelivery: {
          coords: [-10.926928352712721, -37.07252443934193],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
        },
      },
    },

    {
      status: 0,
      _id: "DB4G0AHXXU8D",
      code: "DB4G0AHXXU8D",
      createdAt: new Date(),
      cityId: "eyMYbBXXPzcIKTNyBBZp",
      addresses: {
        toCollect: {
          coords: [-10.926928352712721, -37.07252443934193],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
        },

        toDelivery: {
          coords: [-10.926928352712721, -37.07252443934193],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
        },
      },
    },
  ],
};
