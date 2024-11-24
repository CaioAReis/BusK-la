import { AuthPhone, City, DeliveryCardProps, NotificationCardProps, UserData } from "../types";

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
    picture:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.tqQ6JWEYhmn155tklmfKkAHaEo%26pid%3DApi&f=1&ipt=04023229f18f7e9f22f9e316abfba0a6c71bf11c93013e34517fb625d2b75c90&ipo=images",
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
  ] as City[],

  userDeliveryHistory: [
    {
      status: 2,
      _id: "XYMP99JETIE4",
      code: "XYMP99JETIE4",
      createdAt: new Date(),
      userId: "ROKAUm05KyjGPGGSo93Q",
      cityId: "KDFpA0ew9CWNM7LJeQBM",
      addresses: {
        toCollect: {
          coords: [-10.91002957448953, -37.672034730230585],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
          user: { name: "José Antônio", picture: "", phone: "79999999999" },
        },

        toDelivery: {
          coords: [-10.914633335166796, -37.67558527404955],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
          user: { name: "José Antônio", picture: "", phone: "79999999999" },
        },
      },
    },

    {
      status: 2,
      _id: "O5XJCY6APE13",
      code: "O5XJCY6APE13",
      createdAt: new Date(),
      userId: "ROKAUm05KyjGPGGSo93Q",
      cityId: "KDFpA0ew9CWNM7LJeQBM",
      addresses: {
        toCollect: {
          coords: [-10.914946209517728, -37.667937948901],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
          user: { name: "José Antônio", picture: "", phone: "79999999999" },
        },

        toDelivery: {
          coords: [-10.910342453687322, -37.66566195927345],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
          user: { name: "José Antônio", picture: "", phone: "79999999999" },
        },
      },
    },

    {
      status: 2,
      _id: "I5FN8H9GUUWQ",
      code: "I5FN8H9GUUWQ",
      createdAt: new Date(),
      userId: "ROKAUm05KyjGPGGSo93Q",
      cityId: "KDFpA0ew9CWNM7LJeQBM",
      addresses: {
        toCollect: {
          coords: [-10.912934868656029, -37.68009173351211],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
          user: { name: "José Antônio", picture: "", phone: "79999999999" },
        },

        toDelivery: {
          coords: [-10.925851909503592, -37.674083120895375],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
          user: { name: "José Antônio", picture: "", phone: "79999999999" },
        },
      },
    },

    {
      status: 2,
      _id: "1DNRYPJURENP",
      code: "1DNRYPJURENP",
      createdAt: new Date(),
      userId: "ROKAUm05KyjGPGGSo93Q",
      cityId: "KDFpA0ew9CWNM7LJeQBM",
      addresses: {
        toCollect: {
          coords: [-10.92245509507899, -37.667209632220185],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
          user: { name: "José Antônio", picture: "", phone: "79999999999" },
        },

        toDelivery: {
          coords: [-10.92647763423682, -37.67927237724619],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
          user: { name: "José Antônio", picture: "", phone: "79999999999" },
        },
      },
    },
  ] as DeliveryCardProps[],

  deliveriesOnWay: [
    {
      status: 0,
      _id: "XYMP99JETIE4",
      code: "XYMP99JETIE4",
      createdAt: new Date(),
      userId: "ROKAUm05KyjGPGGSo93Q",
      cityId: "KDFpA0ew9CWNM7LJeQBM",
      addresses: {
        toCollect: {
          coords: [-10.911817451183708, -37.66834762703395],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
          user: { name: "José Antônio", picture: "", phone: "79999999999" },
        },

        toDelivery: {
          coords: [-10.917002232769976, -37.666344756161706],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
          user: { name: "José Antônio", picture: "", phone: "79999999999" },
        },
      },
    },

    {
      status: 0,
      _id: "O5XJCY6APE13",
      code: "O5XJCY6APE13",
      createdAt: new Date(),
      userId: "ROKAUm05KyjGPGGSo93Q",
      cityId: "KDFpA0ew9CWNM7LJeQBM",
      addresses: {
        toCollect: {
          coords: [-10.914990905826688, -37.67576735321976],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
          user: { name: "José Antônio", picture: "", phone: "79999999999" },
        },

        toDelivery: {
          coords: [-10.920488500543525, -37.66611715719896],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
          user: { name: "José Antônio", picture: "", phone: "79999999999" },
        },
      },
    },

    {
      status: 0,
      _id: "I5FN8H9GUUWQ",
      code: "I5FN8H9GUUWQ",
      createdAt: new Date(),
      userId: "ROKAUm05KyjGPGGSo93Q",
      cityId: "KDFpA0ew9CWNM7LJeQBM",
      addresses: {
        toCollect: {
          coords: [-10.913739406634459, -37.67126089375722],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
          user: { name: "José Antônio", picture: "", phone: "79999999999" },
        },

        toDelivery: {
          coords: [-10.913560620605262, -37.66256661337998],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
          user: { name: "José Antônio", picture: "", phone: "79999999999" },
        },
      },
    },

    {
      status: 1,
      _id: "1DNRYPJURENP",
      code: "1DNRYPJURENP",
      createdAt: new Date(),
      userId: "ROKAUm05KyjGPGGSo93Q",
      cityId: "KDFpA0ew9CWNM7LJeQBM",
      addresses: {
        toCollect: {
          coords: [-10.920488500543525, -37.669349062470076],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
          user: { name: "José Antônio", picture: "", phone: "79999999999" },
        },

        toDelivery: {
          coords: [-10.921337713418021, -37.66302181130549],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
          user: { name: "José Antônio", picture: "", phone: "79999999999" },
        },
      },
    },
  ] as DeliveryCardProps[],

  deliveryList: [
    {
      status: 0,
      userId: null,
      _id: "LRW4YUCER9T9",
      code: "LRW4YUCER9T9",
      createdAt: new Date(),
      cityId: "KDFpA0ew9CWNM7LJeQBM",
      addresses: {
        toCollect: {
          coords: [-10.923199302869017, -37.67696861332419],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
          user: { name: "José Antônio", picture: "", phone: "79999999999" },
        },

        toDelivery: {
          coords: [-10.91564482988727, -37.67127265944143],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
          user: { name: "Maria Silva", picture: "", phone: "79999999999" },
        },
      },
    },

    {
      status: 0,
      userId: null,
      _id: "CWTAQ468GQEY",
      code: "CWTAQ468GQEY",
      createdAt: new Date(),
      cityId: "KDFpA0ew9CWNM7LJeQBM",
      addresses: {
        toCollect: {
          coords: [-10.922169942886716, -37.66708578852559],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
          user: { name: "José Antônio", picture: "", phone: "79999999999" },
        },

        toDelivery: {
          coords: [-10.914062608943263, -37.66718069416629],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
          user: { name: "José Antônio", picture: "", phone: "79999999999" },
        },
      },
    },

    {
      status: 0,
      userId: null,
      _id: "ZPJZCJUZRE4I",
      code: "ZPJZCJUZRE4I",
      createdAt: new Date(),
      cityId: "KDFpA0ew9CWNM7LJeQBM",
      addresses: {
        toCollect: {
          coords: [-10.91336369048552, -37.66570965673538],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
          user: { name: "José Antônio", picture: "", phone: "79999999999" },
        },

        toDelivery: {
          coords: [-10.914901308922516, -37.675674749009325],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
          user: { name: "José Antônio", picture: "", phone: "79999999999" },
        },
      },
    },

    {
      status: 0,
      userId: null,
      _id: "QFQ31XXG06JW",
      code: "QFQ31XXG06JW",
      createdAt: new Date(),
      cityId: "KDFpA0ew9CWNM7LJeQBM",
      addresses: {
        toCollect: {
          coords: [-10.916485513534905, -37.672020881842215],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
          user: { name: "José Antônio", picture: "", phone: "79999999999" },
        },

        toDelivery: {
          coords: [-10.913643258065878, -37.66931607108214],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
          user: { name: "José Antônio", picture: "", phone: "79999999999" },
        },
      },
    },

    {
      status: 0,
      userId: null,
      _id: "DSDLKL86LLJP",
      code: "DSDLKL86LLJP",
      createdAt: new Date(),
      cityId: "KDFpA0ew9CWNM7LJeQBM",
      addresses: {
        toCollect: {
          coords: [-10.924224947626133, -37.677369405056616],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
          user: { name: "José Antônio", picture: "", phone: "79999999999" },
        },

        toDelivery: {
          coords: [-10.917403623901327, -37.6731043909772],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
          user: { name: "José Antônio", picture: "", phone: "79999999999" },
        },
      },
    },

    {
      status: 0,
      userId: null,
      _id: "RCREBZ30UXH7",
      code: "RCREBZ30UXH7",
      createdAt: new Date(),
      cityId: "KDFpA0ew9CWNM7LJeQBM",
      addresses: {
        toCollect: {
          coords: [-10.917921704618932, -37.66756426959567],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
          user: { name: "José Antônio", picture: "", phone: "79999999999" },
        },

        toDelivery: {
          coords: [-10.91692871578308, -37.675039036539],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
          user: { name: "José Antônio", picture: "", phone: "79999999999" },
        },
      },
    },

    {
      status: 0,
      userId: null,
      _id: "0W8JB92TY8ZP",
      code: "0W8JB92TY8ZP",
      createdAt: new Date(),
      cityId: "KDFpA0ew9CWNM7LJeQBM",
      addresses: {
        toCollect: {
          coords: [-10.911834199128164, -37.66848762315926],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
          user: { name: "José Antônio", picture: "", phone: "79999999999" },
        },

        toDelivery: {
          coords: [-10.915072249490775, -37.66558565481657],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
          user: { name: "José Antônio", picture: "", phone: "79999999999" },
        },
      },
    },

    {
      status: 0,
      userId: null,
      _id: "ZEL3D32HINSB",
      code: "ZEL3D32HINSB",
      createdAt: new Date(),
      cityId: "KDFpA0ew9CWNM7LJeQBM",
      addresses: {
        toCollect: {
          coords: [-10.921114236581246, -37.68268636168751],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
          user: { name: "José Antônio", picture: "", phone: "79999999999" },
        },

        toDelivery: {
          coords: [-10.922857351447533, -37.67148849271997],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
          user: { name: "José Antônio", picture: "", phone: "79999999999" },
        },
      },
    },

    {
      status: 0,
      userId: null,
      _id: "XXUN2J5JPG49",
      code: "XXUN2J5JPG49",
      createdAt: new Date(),
      cityId: "KDFpA0ew9CWNM7LJeQBM",
      addresses: {
        toCollect: {
          coords: [-10.919952154318906, -37.66479708321498],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
          user: { name: "José Antônio", picture: "", phone: "79999999999" },
        },

        toDelivery: {
          coords: [-10.915214387270598, -37.67863510015047],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
          user: { name: "José Antônio", picture: "", phone: "79999999999" },
        },
      },
    },

    {
      status: 0,
      userId: null,
      _id: "FUI4IHU6T6ZL",
      code: "FUI4IHU6T6ZL",
      createdAt: new Date(),
      cityId: "KDFpA0ew9CWNM7LJeQBM",
      addresses: {
        toCollect: {
          coords: [-10.916108311365184, -37.67340032400711],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
          user: { name: "José Antônio", picture: "", phone: "79999999999" },
        },

        toDelivery: {
          coords: [-10.919326415832579, -37.66734619159784],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
          user: { name: "José Antônio", picture: "", phone: "79999999999" },
        },
      },
    },

    {
      status: 0,
      userId: null,
      _id: "H17KFBU0A9AJ",
      code: "H17KFBU0A9AJ",
      createdAt: new Date(),
      cityId: "eyMYbBXXPzcIKTNyBBZp",
      addresses: {
        toCollect: {
          coords: [-10.912219721957749, -37.66110998001835],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
          user: { name: "José Antônio", picture: "", phone: "79999999999" },
        },

        toDelivery: {
          coords: [-10.911906844736102, -37.668848344752014],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
          user: { name: "José Antônio", picture: "", phone: "79999999999" },
        },
      },
    },

    {
      status: 0,
      userId: null,
      _id: "NGOBUQYKG5G5",
      code: "NGOBUQYKG5G5",
      createdAt: new Date(),
      cityId: "eyMYbBXXPzcIKTNyBBZp",
      addresses: {
        toCollect: {
          coords: [-10.911146998683671, -37.679181337661085],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
          user: { name: "José Antônio", picture: "", phone: "79999999999" },
        },

        toDelivery: {
          coords: [-10.919371111482477, -37.66998633956579],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
          user: { name: "José Antônio", picture: "", phone: "79999999999" },
        },
      },
    },

    {
      status: 0,
      userId: null,
      _id: "QOUTJBKKFEPD",
      code: "QOUTJBKKFEPD",
      createdAt: new Date(),
      cityId: "eyMYbBXXPzcIKTNyBBZp",
      addresses: {
        toCollect: {
          coords: [-10.913784103124941, -37.669212503092425],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
          user: { name: "José Antônio", picture: "", phone: "79999999999" },
        },

        toDelivery: {
          coords: [-10.91570604585547, -37.681639406458835],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
          user: { name: "José Antônio", picture: "", phone: "79999999999" },
        },
      },
    },

    {
      status: 0,
      userId: null,
      _id: "DB4G0AHXXU8D",
      code: "DB4G0AHXXU8D",
      createdAt: new Date(),
      cityId: "eyMYbBXXPzcIKTNyBBZp",
      addresses: {
        toCollect: {
          coords: [-10.919996849874622, -37.66274869255018],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
          user: { name: "José Antônio", picture: "", phone: "79999999999" },
        },

        toDelivery: {
          coords: [-10.913560620605262, -37.661656217528964],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
          user: { name: "José Antônio", picture: "", phone: "79999999999" },
        },
      },
    },
  ] as DeliveryCardProps[],
};
