import { getClientConfig } from "../config/client";
import { SubmitKey } from "../store/config";
import type { PartialLocaleType } from "./index";
import { SAAS_CHAT_UTM_URL } from "@/app/constant";
// if you are adding a new translation, please use PartialLocaleType instead of LocaleType

const isApp = !!getClientConfig()?.isApp;
const sk: PartialLocaleType = {
  WIP: "UÅ¾ Äoskoro...",
  Error: {
    Unauthorized: isApp
      ? `ðŸ˜† Rozhovor narazil na nejakÃ© problÃ©my, nebojte sa:
    \\ 1ï¸âƒ£ Ak chcete zaÄaÅ¥ bez konfigurÃ¡cie, [kliknite sem, aby ste okamÅ¾ite zaÄali chatovaÅ¥ ðŸš€](${SAAS_CHAT_UTM_URL})
    \\ 2ï¸âƒ£ Ak chcete pouÅ¾Ã­vaÅ¥ svoje vlastnÃ© zdroje OpenAI, kliknite [sem](/#/settings), aby ste upravili nastavenia âš™ï¸`
      : `ðŸ˜† Rozhovor narazil na nejakÃ© problÃ©my, nebojte sa:
    \ 1ï¸âƒ£ Ak chcete zaÄaÅ¥ bez konfigurÃ¡cie, [kliknite sem, aby ste okamÅ¾ite zaÄali chatovaÅ¥ ðŸš€](${SAAS_CHAT_UTM_URL})
    \ 2ï¸âƒ£ Ak pouÅ¾Ã­vate verziu sÃºkromnÃ©ho nasadenia, kliknite [sem](/#/auth), aby ste zadali prÃ­stupovÃ½ kÄ¾ÃºÄ ðŸ”‘
    \ 3ï¸âƒ£ Ak chcete pouÅ¾Ã­vaÅ¥ svoje vlastnÃ© zdroje OpenAI, kliknite [sem](/#/settings), aby ste upravili nastavenia âš™ï¸
 `,
  },
  Auth: {
    Title: "PotrebnÃ½ prÃ­stupovÃ½ kÃ³d",
    Tips: "ProsÃ­m, zadajte prÃ­stupovÃ½ kÃ³d niÅ¾Å¡ie",
    SubTips: "Alebo zadajte vÃ¡Å¡ OpenAI alebo Google API kÄ¾ÃºÄ",
    Input: "prÃ­stupovÃ½ kÃ³d",
    Confirm: "PotvrdiÅ¥",
    Later: "NeskÃ´r",
    Return: "NÃ¡vrat",
    SaasTips: "Nastavenie je prÃ­liÅ¡ zloÅ¾itÃ©, chcem to okamÅ¾ite pouÅ¾iÅ¥",
    TopTips:
      "ðŸ¥³ UvÃ­tacia ponuka HeyChat AI, okamÅ¾ite odomknite OpenAI o1, GPT-4o, Claude-3.5 a najnovÅ¡ie veÄ¾kÃ© modely",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} sprÃ¡v`,
  },
  Chat: {
    SubTitle: (count: number) => `${count} sprÃ¡v`,
    EditMessage: {
      Title: "UpraviÅ¥ vÅ¡etky sprÃ¡vy",
      Topic: {
        Title: "TÃ©ma",
        SubTitle: "ZmeniÅ¥ aktuÃ¡lnu tÃ©mu",
      },
    },
    Actions: {
      ChatList: "PrejsÅ¥ na zoznam chatov",
      CompressedHistory: "KomprimovanÃ¡ histÃ³ria vÃ½ziev",
      Export: "ExportovaÅ¥ vÅ¡etky sprÃ¡vy ako Markdown",
      Copy: "KopÃ­rovaÅ¥",
      Stop: "ZastaviÅ¥",
      Retry: "SkÃºsiÅ¥ znova",
      Pin: "PripnÃºÅ¥",
      PinToastContent: "PripnutÃ© 1 sprÃ¡vy do kontextovÃ½ch vÃ½ziev",
      PinToastAction: "ZobraziÅ¥",
      Delete: "VymazaÅ¥",
      Edit: "UpraviÅ¥",
      RefreshTitle: "ObnoviÅ¥ nÃ¡zov",
      RefreshToast: "PoÅ¾iadavka na obnovenie nÃ¡zvu bola odoslanÃ¡",
    },
    Commands: {
      new: "ZaÄaÅ¥ novÃ½ chat",
      newm: "ZaÄaÅ¥ novÃ½ chat s maskou",
      next: "ÄŽalÅ¡Ã­ Chat",
      prev: "PredchÃ¡dzajÃºci Chat",
      clear: "VymazaÅ¥ kontext",
      del: "VymazaÅ¥ Chat",
    },
    InputActions: {
      Stop: "ZastaviÅ¥",
      ToBottom: "Na najnovÅ¡ie",
      Theme: {
        auto: "Automaticky",
        light: "SvetlÃ½ motÃ­v",
        dark: "TmavÃ½ motÃ­v",
      },
      Prompt: "VÃ½zvy",
      Masks: "Masky",
      Clear: "VymazaÅ¥ kontext",
      Settings: "Nastavenia",
    },
    Rename: "PremenovaÅ¥ Chat",
    Typing: "PÃ­sanieâ€¦",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey} na odoslanie`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", Shift + Enter na zalomenie";
      }
      return inputHints + ", / na vyhÄ¾adÃ¡vanie vÃ½ziev, : na pouÅ¾itie prÃ­kazov";
    },
    Send: "OdoslaÅ¥",
    Config: {
      Reset: "ResetovaÅ¥ na predvolenÃ©",
      SaveAs: "UloÅ¾iÅ¥ ako masku",
    },
    IsContext: "KontextovÃ¡ vÃ½zva",
  },
  Export: {
    Title: "Export sprÃ¡v",
    Copy: "KopÃ­rovaÅ¥ vÅ¡etko",
    Download: "StiahnuÅ¥",
    MessageFromYou: "SprÃ¡va od vÃ¡s",
    MessageFromChatGPT: "SprÃ¡va od ChatGPT",
    Share: "ZdieÄ¾aÅ¥ na ShareGPT",
    Format: {
      Title: "FormÃ¡t exportu",
      SubTitle: "Markdown alebo PNG obrÃ¡zok",
    },
    IncludeContext: {
      Title: "VrÃ¡tane kontextu",
      SubTitle: "ExportovaÅ¥ kontextovÃ© vÃ½zvy v maske alebo nie",
    },
    Steps: {
      Select: "VybraÅ¥",
      Preview: "NÃ¡hÄ¾ad",
    },
    Image: {
      Toast: "SnÃ­manie obrÃ¡zka...",
      Modal:
        "DlhÃ½m stlaÄenÃ­m alebo kliknutÃ­m pravÃ½m tlaÄidlom myÅ¡i uloÅ¾te obrÃ¡zok",
    },
  },
  Select: {
    Search: "HÄ¾adaÅ¥",
    All: "VybraÅ¥ vÅ¡etko",
    Latest: "VybraÅ¥ najnovÅ¡ie",
    Clear: "VymazaÅ¥",
  },
  Memory: {
    Title: "VÃ½zva pamÃ¤ti",
    EmptyContent: "ZatiaÄ¾ niÄ.",
    Send: "OdoslaÅ¥ pamÃ¤Å¥",
    Copy: "KopÃ­rovaÅ¥ pamÃ¤Å¥",
    Reset: "ResetovaÅ¥ relÃ¡ciu",
    ResetConfirm:
      "ResetovanÃ­m sa vymaÅ¾e aktuÃ¡lna histÃ³ria konverzÃ¡cie a historickÃ¡ pamÃ¤Å¥. Ste si istÃ­, Å¾e chcete resetovaÅ¥?",
  },
  Home: {
    NewChat: "NovÃ½ Chat",
    DeleteChat: "PotvrdiÅ¥ vymazanie vybranej konverzÃ¡cie?",
    DeleteToast: "Chat vymazanÃ½",
    Revert: "VrÃ¡tiÅ¥ spÃ¤Å¥",
  },
  Settings: {
    Title: "Nastavenia",
    SubTitle: "VÅ¡etky nastavenia",
    Danger: {
      Reset: {
        Title: "ResetovaÅ¥ vÅ¡etky nastavenia",
        SubTitle: "ResetovaÅ¥ vÅ¡etky poloÅ¾ky nastavenÃ­ na predvolenÃ©",
        Action: "ResetovaÅ¥",
        Confirm: "PotvrdiÅ¥ resetovanie vÅ¡etkÃ½ch nastavenÃ­ na predvolenÃ©?",
      },
      Clear: {
        Title: "VymazaÅ¥ vÅ¡etky Ãºdaje",
        SubTitle: "VymazaÅ¥ vÅ¡etky sprÃ¡vy a nastavenia",
        Action: "VymazaÅ¥",
        Confirm: "PotvrdiÅ¥ vymazanie vÅ¡etkÃ½ch sprÃ¡v a nastavenÃ­?",
      },
    },
    Lang: {
      Name: "Jazyk", // POZOR: ak pridÃ¡vate novÃ½ preklad, prosÃ­m neprekladajte tÃºto hodnotu, nechajte ju ako "Jazyk"
      All: "VÅ¡etky jazyky",
    },
    Avatar: "Avatar",
    FontSize: {
      Title: "VeÄ¾kosÅ¥ pÃ­sma",
      SubTitle: "NastaviÅ¥ veÄ¾kosÅ¥ pÃ­sma obsahu chatu",
    },
    FontFamily: {
      Title: "ChatovÃ© PÃ­smo",
      SubTitle:
        "PÃ­smo obsahu chatu, ponechajte prÃ¡zdne pre pouÅ¾itie globÃ¡lneho predvolenÃ©ho pÃ­sma",
      Placeholder: "NÃ¡zov PÃ­sma",
    },
    InjectSystemPrompts: {
      Title: "VloÅ¾iÅ¥ systÃ©movÃ© vÃ½zvy",
      SubTitle: "VloÅ¾iÅ¥ globÃ¡lnu systÃ©movÃº vÃ½zvu pre kaÅ¾dÃº poÅ¾iadavku",
    },
    InputTemplate: {
      Title: "Å ablÃ³na vstupu",
      SubTitle: "NajnovÅ¡ia sprÃ¡va bude vyplnenÃ¡ do tejto Å¡ablÃ³ny",
    },

    Update: {
      Version: (x: string) => `Verzia: ${x}`,
      IsLatest: "NajnovÅ¡ia verzia",
      CheckUpdate: "SkontrolovaÅ¥ aktualizÃ¡cie",
      IsChecking: "Kontrola aktualizÃ¡ciÃ­...",
      FoundUpdate: (x: string) => `NÃ¡jdenÃ¡ novÃ¡ verzia: ${x}`,
      GoToUpdate: "AktualizovaÅ¥",
    },
    SendKey: "OdoslaÅ¥ kÄ¾ÃºÄ",
    Theme: "MotÃ­v",
    TightBorder: "TesnÃ½ okraj",
    SendPreviewBubble: {
      Title: "Bublina nÃ¡hÄ¾adu odoslania",
      SubTitle: "NÃ¡hÄ¾ad markdownu v bubline",
    },
    AutoGenerateTitle: {
      Title: "Automaticky generovaÅ¥ nÃ¡zov",
      SubTitle: "GenerovaÅ¥ vhodnÃ½ nÃ¡zov na zÃ¡klade obsahu konverzÃ¡cie",
    },
    Sync: {
      CloudState: "PoslednÃ¡ aktualizÃ¡cia",
      NotSyncYet: "ZatiaÄ¾ nesynchronizovanÃ©",
      Success: "SynchronizÃ¡cia ÃºspeÅ¡nÃ¡",
      Fail: "SynchronizÃ¡cia zlyhala",

      Config: {
        Modal: {
          Title: "KonfigurÃ¡cia synchronizÃ¡cie",
          Check: "SkontrolovaÅ¥ pripojenie",
        },
        SyncType: {
          Title: "Typ synchronizÃ¡cie",
          SubTitle: "Vyberte svoju obÄ¾ÃºbenÃº sluÅ¾bu synchronizÃ¡cie",
        },
        Proxy: {
          Title: "PovoliÅ¥ CORS Proxy",
          SubTitle: "PovoliÅ¥ proxy na obÃ­denie obmedzenÃ­ cross-origin",
        },
        ProxyUrl: {
          Title: "KoncovÃ½ bod Proxy",
          SubTitle: "PlatnÃ© len pre vstavanÃ½ CORS proxy tohto projektu",
        },

        WebDav: {
          Endpoint: "KoncovÃ½ bod WebDAV",
          UserName: "Meno pouÅ¾Ã­vateÄ¾a",
          Password: "Heslo",
        },

        UpStash: {
          Endpoint: "URL REST sluÅ¾by UpStash Redis",
          UserName: "NÃ¡zov zÃ¡lohy",
          Password: "Token REST sluÅ¾by UpStash Redis",
        },
      },

      LocalState: "LokÃ¡lne Ãºdaje",
      Overview: (overview: any) => {
        return `${overview.chat} chaty, ${overview.message} sprÃ¡vy, ${overview.prompt} vÃ½zvy, ${overview.mask} masky`;
      },
      ImportFailed: "Import z sÃºboru zlyhal",
    },
    Mask: {
      Splash: {
        Title: "ÃšvodnÃ¡ obrazovka masky",
        SubTitle: "ZobraziÅ¥ ÃºvodnÃº obrazovku masky pred zaÄatÃ­m novÃ©ho chatu",
      },
      Builtin: {
        Title: "SkryÅ¥ vstavanÃ© masky",
        SubTitle: "SkryÅ¥ vstavanÃ© masky v zozname masiek",
      },
    },
    Prompt: {
      Disable: {
        Title: "ZakÃ¡zaÅ¥ automatickÃ© dopÄºÅˆanie",
        SubTitle: "Zadajte / na spustenie automatickÃ©ho dopÄºÅˆania",
      },
      List: "Zoznam vÃ½ziev",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} vstavanÃ½ch, ${custom} uÅ¾Ã­vateÄ¾sky definovanÃ½ch`,
      Edit: "UpraviÅ¥",
      Modal: {
        Title: "Zoznam vÃ½ziev",
        Add: "PridaÅ¥ jednu",
        Search: "HÄ¾adaÅ¥ vÃ½zvy",
      },
      EditModal: {
        Title: "UpraviÅ¥ vÃ½zvu",
      },
    },
    HistoryCount: {
      Title: "PoÄet pripojenÃ½ch sprÃ¡v",
      SubTitle: "PoÄet odoslanÃ½ch sprÃ¡v pripojenÃ½ch na poÅ¾iadavku",
    },
    CompressThreshold: {
      Title: "PrÃ¡h kompresie histÃ³rie",
      SubTitle:
        "Bude komprimovanÃ©, ak dÄºÅ¾ka nekomprimovanÃ½ch sprÃ¡v presiahne tÃºto hodnotu",
    },

    Usage: {
      Title: "Stav ÃºÄtu",
      SubTitle(used: any, total: any) {
        return `Tento mesiac pouÅ¾itÃ© ${used}, predplatnÃ© ${total}`;
      },
      IsChecking: "Kontroluje sa...",
      Check: "SkontrolovaÅ¥",
      NoAccess: "Zadajte API kÄ¾ÃºÄ na skontrolovanie zostatku",
    },
    Access: {
      SaasStart: {
        Title: "PouÅ¾ite HeyChat AI",
        Label: "(NajvÃ½hodnejÅ¡ie rieÅ¡enie)",
        SubTitle:
          "OficiÃ¡lne udrÅ¾iavanÃ© HeyChat, pripravenÃ© na pouÅ¾itie bez konfigurÃ¡cie, podporuje najnovÅ¡ie veÄ¾kÃ© modely ako OpenAI o1, GPT-4o a Claude-3.5",
        ChatNow: "ChatovaÅ¥ teraz",
      },

      AccessCode: {
        Title: "PrÃ­stupovÃ½ kÃ³d",
        SubTitle: "PovolenÃ½ prÃ­stupovÃ½ kÃ³d",
        Placeholder: "Zadajte kÃ³d",
      },
      CustomEndpoint: {
        Title: "VlastnÃ½ koncovÃ½ bod",
        SubTitle: "PouÅ¾iÅ¥ vlastnÃº sluÅ¾bu Azure alebo OpenAI",
      },
      Provider: {
        Title: "PoskytovateÄ¾ modelu",
        SubTitle: "Vyberte Azure alebo OpenAI",
      },
      OpenAI: {
        ApiKey: {
          Title: "API kÄ¾ÃºÄ OpenAI",
          SubTitle: "PouÅ¾iÅ¥ vlastnÃ½ API kÄ¾ÃºÄ OpenAI",
          Placeholder: "sk-xxx",
        },

        Endpoint: {
          Title: "KoncovÃ½ bod OpenAI",
          SubTitle:
            "MusÃ­ zaÄÃ­naÅ¥ http(s):// alebo pouÅ¾iÅ¥ /api/openai ako predvolenÃ½",
        },
      },
      Azure: {
        ApiKey: {
          Title: "API kÄ¾ÃºÄ Azure",
          SubTitle: "Skontrolujte svoj API kÄ¾ÃºÄ v Azure konzole",
          Placeholder: "API kÄ¾ÃºÄ Azure",
        },

        Endpoint: {
          Title: "KoncovÃ½ bod Azure",
          SubTitle: "PrÃ­klad: ",
        },

        ApiVerion: {
          Title: "Verzia API Azure",
          SubTitle: "Skontrolujte svoju verziu API v Azure konzole",
        },
      },
      Anthropic: {
        ApiKey: {
          Title: "API kÄ¾ÃºÄ Anthropic",
          SubTitle: "Skontrolujte svoj API kÄ¾ÃºÄ v Anthropic konzole",
          Placeholder: "API kÄ¾ÃºÄ Anthropic",
        },

        Endpoint: {
          Title: "Adresa koncovÃ©ho bodu",
          SubTitle: "PrÃ­klad:",
        },

        ApiVerion: {
          Title: "Verzia API (claude verzia API)",
          SubTitle: "Vyberte Å¡pecifickÃº verziu Äasti",
        },
      },
      CustomModel: {
        Title: "VlastnÃ© modely",
        SubTitle: "MoÅ¾nosti vlastnÃ©ho modelu, oddelenÃ© Äiarkou",
      },
      Google: {
        ApiKey: {
          Title: "API kÄ¾ÃºÄ",
          SubTitle:
            "ObÃ­sÅ¥ obmedzenia prÃ­stupu heslom pomocou vlastnÃ©ho API kÄ¾ÃºÄa Google AI Studio",
          Placeholder: "API kÄ¾ÃºÄ Google AI Studio",
        },

        Endpoint: {
          Title: "Adresa koncovÃ©ho bodu",
          SubTitle: "PrÃ­klad:",
        },

        ApiVersion: {
          Title: "Verzia API (gemini-pro verzia API)",
          SubTitle: "Vyberte Å¡pecifickÃº verziu Äasti",
        },
      },
      AI302: {
        ApiKey: {
          Title: "API kÄ¾ÃºÄ",
          SubTitle: "PouÅ¾iÅ¥ vlastnÃ½ API kÄ¾ÃºÄ 302.AI",
          Placeholder: "302.AI API kÄ¾ÃºÄ",
        },
        Endpoint: {
          Title: "Adresa koncovÃ©ho bodu",
          SubTitle: "PrÃ­klad:",
        },
      },
    },

    Model: "Model",
    CompressModel: {
      Title: "KompresnÃ½ model",
      SubTitle: "Model pouÅ¾Ã­vanÃ½ na kompresiu histÃ³rie",
    },
    Temperature: {
      Title: "Teplota",
      SubTitle: "VyÅ¡Å¡ia hodnota robÃ­ vÃ½stup nÃ¡hodnejÅ¡Ã­m",
    },
    TopP: {
      Title: "Top P",
      SubTitle: "Neupravujte tÃºto hodnotu spolu s teplotou",
    },
    MaxTokens: {
      Title: "MaximÃ¡lny poÄet tokenov",
      SubTitle: "MaximÃ¡lna dÄºÅ¾ka vstupnÃ½ch tokenov a generovanÃ½ch tokenov",
    },
    PresencePenalty: {
      Title: "PenalizÃ¡cia za prÃ­tomnosÅ¥",
      SubTitle:
        "VyÅ¡Å¡ia hodnota zvyÅ¡uje pravdepodobnosÅ¥ hovorenia o novÃ½ch tÃ©mach",
    },
    FrequencyPenalty: {
      Title: "PenalizÃ¡cia za frekvenciu",
      SubTitle:
        "VyÅ¡Å¡ia hodnota zniÅ¾uje pravdepodobnosÅ¥ opakovania rovnakej lÃ­nie",
    },
  },
  Store: {
    DefaultTopic: "NovÃ¡ konverzÃ¡cia",
    BotHello: "Ahoj! Ako vÃ¡m dnes mÃ´Å¾em pomÃ´cÅ¥?",
    Error: "NieÄo sa pokazilo, skÃºste to prosÃ­m neskÃ´r znova.",
    Prompt: {
      History: (content: string) =>
        "Toto je zhrnutie histÃ³rie chatu ako rekapitulÃ¡cia: " + content,
      Topic:
        "ProsÃ­m, vygenerujte Å¡tvor- aÅ¾ pÃ¤Å¥slovnÃ½ titul, ktorÃ½ zhrnie naÅ¡u konverzÃ¡ciu bez akÃ©hokoÄ¾vek Ãºvodu, interpunkcie, Ãºvodzoviek, bodiek, symbolov, tuÄnÃ©ho textu alebo ÄalÅ¡ieho textu. OdstrÃ¡Åˆte uzatvÃ¡racie Ãºvodzovky.",
      Summarize:
        "StruÄne zhrÅˆte diskusiu na menej ako 200 slov, aby ste ju mohli pouÅ¾iÅ¥ ako vÃ½zvu pre budÃºci kontext.",
    },
  },
  Copy: {
    Success: "SkopÃ­rovanÃ© do schrÃ¡nky",
    Failed:
      "KopÃ­rovanie zlyhalo, prosÃ­m udeÄ¾te povolenie na prÃ­stup k schrÃ¡nke",
  },
  Download: {
    Success: "Obsah stiahnutÃ½ do vÃ¡Å¡ho adresÃ¡ra.",
    Failed: "Stiahnutie zlyhalo.",
  },
  Context: {
    Toast: (x: any) => `S ${x} kontextovÃ½mi vÃ½zvami`,
    Edit: "AktuÃ¡lne nastavenia chatu",
    Add: "PridaÅ¥ vÃ½zvu",
    Clear: "Kontext vyÄistenÃ½",
    Revert: "VrÃ¡tiÅ¥ spÃ¤Å¥",
  },
  Plugin: {
    Name: "Plugin",
  },
  FineTuned: {
    Sysmessage: "Ste asistent, ktorÃ½",
  },
  SearchChat: {
    Name: "HÄ¾adaÅ¥",
    Page: {
      Title: "HÄ¾adaÅ¥ v histÃ³rii chatu",
      Search: "Zadajte kÄ¾ÃºÄovÃ© slovÃ¡ na vyhÄ¾adÃ¡vanie",
      NoResult: "NenaÅ¡li sa Å¾iadne vÃ½sledky",
      NoData: "Å½iadne Ãºdaje",
      Loading: "NaÄÃ­tava sa",

      SubTitle: (count: number) => `NÃ¡jdenÃ½ch ${count} vÃ½sledkov`,
    },
    Item: {
      View: "ZobraziÅ¥",
    },
  },
  Mask: {
    Name: "Maska",
    Page: {
      Title: "Å ablÃ³na vÃ½ziev",
      SubTitle: (count: number) => `${count} Å¡ablÃ³n vÃ½ziev`,
      Search: "HÄ¾adaÅ¥ Å¡ablÃ³ny",
      Create: "VytvoriÅ¥",
    },
    Item: {
      Info: (count: number) => `${count} vÃ½ziev`,
      Chat: "Chat",
      View: "ZobraziÅ¥",
      Edit: "UpraviÅ¥",
      Delete: "VymazaÅ¥",
      DeleteConfirm: "PotvrdiÅ¥ vymazanie?",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `UpraviÅ¥ Å¡ablÃ³nu vÃ½ziev ${readonly ? "(iba na ÄÃ­tanie)" : ""}`,
      Download: "StiahnuÅ¥",
      Clone: "KlonovaÅ¥",
    },
    Config: {
      Avatar: "Avatar robota",
      Name: "Meno robota",
      Sync: {
        Title: "PouÅ¾iÅ¥ globÃ¡lne nastavenia",
        SubTitle: "PouÅ¾iÅ¥ globÃ¡lne nastavenia v tomto chate",
        Confirm: "PotvrdiÅ¥ prepÃ­sanie vlastnÃ©ho nastavenia globÃ¡lnym?",
      },
      HideContext: {
        Title: "SkryÅ¥ kontextovÃ© vÃ½zvy",
        SubTitle: "NezobrazovaÅ¥ kontextovÃ© vÃ½zvy v chate",
      },
      Share: {
        Title: "ZdieÄ¾aÅ¥ tÃºto masku",
        SubTitle: "VygenerovaÅ¥ odkaz na tÃºto masku",
        Action: "KopÃ­rovaÅ¥ odkaz",
      },
    },
  },
  NewChat: {
    Return: "VrÃ¡tiÅ¥ sa",
    Skip: "Len zaÄaÅ¥",
    Title: "VybraÅ¥ masku",
    SubTitle: "ChatovaÅ¥ s duÅ¡ou za maskou",
    More: "NÃ¡jsÅ¥ viac",
    NotShow: "UÅ¾ nezobrazovaÅ¥",
    ConfirmNoShow:
      "PotvrdiÅ¥ deaktivÃ¡ciu? MÃ´Å¾ete ju neskÃ´r znova povoliÅ¥ v nastaveniach.",
  },

  UI: {
    Confirm: "PotvrdiÅ¥",
    Cancel: "ZruÅ¡iÅ¥",
    Close: "ZavrieÅ¥",
    Create: "VytvoriÅ¥",
    Edit: "UpraviÅ¥",
    Export: "ExportovaÅ¥",
    Import: "ImportovaÅ¥",
    Sync: "SynchronizovaÅ¥",
    Config: "KonfigurÃ¡cia",
  },
  Exporter: {
    Description: {
      Title: "Zobrazia sa len sprÃ¡vy po vyÄistenÃ­ kontextu",
    },
    Model: "Model",
    Messages: "SprÃ¡vy",
    Topic: "TÃ©ma",
    Time: "ÄŒas",
  },

  URLCommand: {
    Code: "ZistenÃ½ prÃ­stupovÃ½ kÃ³d z URL, potvrdiÅ¥ na aplikovanie?",
    Settings: "ZistenÃ© nastavenia z URL, potvrdiÅ¥ na aplikovanie?",
  },
};

export default sk;

