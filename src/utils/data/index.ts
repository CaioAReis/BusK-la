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

    {
      status: 2,
      _id: "2NTW0N8YFASK",
      code: "2NTW0N8YFASK",
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
      _id: "GZUM7W9XACL2",
      code: "GZUM7W9XACL2",
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
      _id: "PZX935M57NF1",
      code: "PZX935M57NF1",
      createdAt: new Date(),
      userId: "ROKAUm05KyjGPGGSo93Q",
      cityId: "KDFpA0ew9CWNM7LJeQBM",
      addresses: {
        toCollect: {
          coords: [-10.916096479971023, -37.683953392753516],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
          user: { name: "José Antônio", picture: "", phone: "79999999999" },
        },

        toDelivery: {
          coords: [-10.923337917042751, -37.67531084859492],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
          user: { name: "José Antônio", picture: "", phone: "79999999999" },
        },
      },
    },

    {
      status: 2,
      _id: "OI4UQQZNYX3A",
      code: "OI4UQQZNYX3A",
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

    {
      status: 0,
      _id: "4CUAF3JQ9K9T",
      code: "4CUAF3JQ9K9T",
      createdAt: new Date(),
      userId: "ROKAUm05KyjGPGGSo93Q",
      cityId: "KDFpA0ew9CWNM7LJeQBM",
      addresses: {
        toCollect: {
          coords: [-10.912984870754464, -37.668166345423806],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
          user: { name: "José Antônio", picture: "", phone: "79999999999" },
        },

        toDelivery: {
          coords: [-10.920678972382628, -37.667359707969005],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
          user: { name: "José Antônio", picture: "", phone: "79999999999" },
        },
      },
    },

    {
      status: 0,
      _id: "WUJMCNESLY9R",
      code: "WUJMCNESLY9R",
      createdAt: new Date(),
      userId: "ROKAUm05KyjGPGGSo93Q",
      cityId: "KDFpA0ew9CWNM7LJeQBM",
      addresses: {
        toCollect: {
          coords: [-10.909703502103397, -37.67047102386611],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
          user: { name: "José Antônio", picture: "", phone: "79999999999" },
        },

        toDelivery: {
          coords: [-10.904565498019172, -37.67776032656796],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
          user: { name: "José Antônio", picture: "", phone: "79999999999" },
        },
      },
    },

    {
      status: 0,
      _id: "441G3QAF1ROM",
      code: "441G3QAF1ROM",
      createdAt: new Date(),
      userId: "ROKAUm05KyjGPGGSo93Q",
      cityId: "KDFpA0ew9CWNM7LJeQBM",
      addresses: {
        toCollect: {
          coords: [-10.91367944868949, -37.67876483774585],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
          user: { name: "José Antônio", picture: "", phone: "79999999999" },
        },

        toDelivery: {
          coords: [-10.913166549795461, -37.67157253771213],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
          user: { name: "José Antônio", picture: "", phone: "79999999999" },
        },
      },
    },

    {
      status: 1,
      _id: "ME1DYSFFZEDS",
      code: "ME1DYSFFZEDS",
      createdAt: new Date(),
      userId: "ROKAUm05KyjGPGGSo93Q",
      cityId: "KDFpA0ew9CWNM7LJeQBM",
      addresses: {
        toCollect: {
          coords: [-10.914665790228193, -37.66691160584671],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
          user: { name: "José Antônio", picture: "", phone: "79999999999" },
        },

        toDelivery: {
          coords: [-10.909970775207857, -37.66691160584671],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
          user: { name: "José Antônio", picture: "", phone: "79999999999" },
        },
      },
    },

    {
      status: 2,
      _id: "YT7P01K0AF5X",
      code: "YT7P01K0AF5X",
      createdAt: new Date(),
      userId: "ROKAUm05KyjGPGGSo93Q",
      cityId: "KDFpA0ew9CWNM7LJeQBM",
      addresses: {
        toCollect: {
          coords: [-10.923897788239307, -37.67651473270737],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
          user: { name: "José Antônio", picture: "", phone: "79999999999" },
        },

        toDelivery: {
          coords: [-10.920268148042554, -37.68222035619782],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
          user: { name: "José Antônio", picture: "", phone: "79999999999" },
        },
      },
    },

    {
      status: 2,
      _id: "6G67X63J1ZH3",
      code: "6G67X63J1ZH3",
      createdAt: new Date(),
      userId: "ROKAUm05KyjGPGGSo93Q",
      cityId: "KDFpA0ew9CWNM7LJeQBM",
      addresses: {
        toCollect: {
          coords: [-10.917230262904454, -37.67446552990447],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
          user: { name: "José Antônio", picture: "", phone: "79999999999" },
        },

        toDelivery: {
          coords: [-10.915888849188821, -37.66896080864961],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
          user: { name: "José Antônio", picture: "", phone: "79999999999" },
        },
      },
    },

    {
      status: 2,
      _id: "7U7M8X5NBGQO",
      code: "7U7M8X5NBGQO",
      createdAt: new Date(),
      userId: "ROKAUm05KyjGPGGSo93Q",
      cityId: "KDFpA0ew9CWNM7LJeQBM",
      addresses: {
        toCollect: {
          coords: [-10.925714865014077, -37.67942334392965],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
          user: { name: "José Antônio", picture: "", phone: "79999999999" },
        },

        toDelivery: {
          coords: [-10.926529258050612, -37.67404217337606],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
          user: { name: "José Antônio", picture: "", phone: "79999999999" },
        },
      },
    },

    {
      status: 2,
      _id: "SYNL0ITQOYFX",
      code: "SYNL0ITQOYFX",
      createdAt: new Date(),
      userId: "ROKAUm05KyjGPGGSo93Q",
      cityId: "KDFpA0ew9CWNM7LJeQBM",
      addresses: {
        toCollect: {
          coords: [-10.904684763031193, -37.669164876444285],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
          user: { name: "José Antônio", picture: "", phone: "79999999999" },
        },

        toDelivery: {
          coords: [-10.910599134196785, -37.664291341851914],
          address: "Avenida Primeiro de Maio 1391, Nº 349 - Centro",
          user: { name: "José Antônio", picture: "", phone: "79999999999" },
        },
      },
    },
  ] as DeliveryCardProps[],
};
