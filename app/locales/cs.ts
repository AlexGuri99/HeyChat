import { SubmitKey } from "../store/config";
import type { PartialLocaleType } from "./index";
import { getClientConfig } from "../config/client";
import { SAAS_CHAT_UTM_URL } from "@/app/constant";
const isApp = !!getClientConfig()?.isApp;

const cs: PartialLocaleType = {
  WIP: "V pÅ™Ã­pravÄ›...",
  Error: {
    Unauthorized: isApp
      ? `ðŸ˜† Rozhovor narazil na nÄ›jakÃ© problÃ©my, nebojte se:
    \\ 1ï¸âƒ£ Pokud chcete zaÄÃ­t bez konfigurace, [kliknÄ›te sem pro okamÅ¾itÃ½ zaÄÃ¡tek chatu ðŸš€](${SAAS_CHAT_UTM_URL})
    \\ 2ï¸âƒ£ Pokud chcete vyuÅ¾Ã­t svÃ© vlastnÃ­ zdroje OpenAI, kliknÄ›te [sem](/#/settings) a upravte nastavenÃ­ âš™ï¸`
      : `ðŸ˜† Rozhovor narazil na nÄ›jakÃ© problÃ©my, nebojte se:
    \ 1ï¸âƒ£ Pokud chcete zaÄÃ­t bez konfigurace, [kliknÄ›te sem pro okamÅ¾itÃ½ zaÄÃ¡tek chatu ðŸš€](${SAAS_CHAT_UTM_URL})
    \ 2ï¸âƒ£ Pokud pouÅ¾Ã­vÃ¡te verzi soukromÃ©ho nasazenÃ­, kliknÄ›te [sem](/#/auth) a zadejte pÅ™Ã­stupovÃ½ klÃ­Ä ðŸ”‘
    \ 3ï¸âƒ£ Pokud chcete vyuÅ¾Ã­t svÃ© vlastnÃ­ zdroje OpenAI, kliknÄ›te [sem](/#/settings) a upravte nastavenÃ­ âš™ï¸
 `,
  },
  Auth: {
    Title: "PotÅ™ebnÃ© heslo",
    Tips: "AdministrÃ¡tor povolil ovÄ›Å™enÃ­ heslem, prosÃ­m zadejte pÅ™Ã­stupovÃ½ kÃ³d nÃ­Å¾e",
    SubTips: "nebo zadejte svÅ¯j OpenAI nebo Google API klÃ­Ä",
    Input: "Zadejte pÅ™Ã­stupovÃ½ kÃ³d zde",
    Confirm: "Potvrdit",
    Later: "PozdÄ›ji",
    Return: "NÃ¡vrat",
    SaasTips: "Konfigurace je pÅ™Ã­liÅ¡ sloÅ¾itÃ¡, chci okamÅ¾itÄ› zaÄÃ­t pouÅ¾Ã­vat",
    TopTips:
      "ðŸ¥³ UvÃ­tacÃ­ nabÃ­dka HeyChat AI, okamÅ¾itÄ› odemknÄ›te OpenAI o1, GPT-4o, Claude-3.5 a nejnovÄ›jÅ¡Ã­ velkÃ© modely",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} konverzacÃ­`,
  },
  Chat: {
    SubTitle: (count: number) => `Celkem ${count} konverzacÃ­`,
    EditMessage: {
      Title: "Upravit zprÃ¡vy",
      Topic: {
        Title: "TÃ©ma konverzace",
        SubTitle: "ZmÄ›nit aktuÃ¡lnÃ­ tÃ©ma konverzace",
      },
    },
    Actions: {
      ChatList: "Zobrazit seznam zprÃ¡v",
      CompressedHistory: "Zobrazit komprimovanou historii Prompt",
      Export: "Exportovat konverzace",
      Copy: "KopÃ­rovat",
      Stop: "Zastavit",
      Retry: "Zkusit znovu",
      Pin: "PÅ™ipnout",
      PinToastContent: "1 konverzace byla pÅ™ipnuta k pÅ™ednastavenÃ½m promptÅ¯m",
      PinToastAction: "Zobrazit",
      Delete: "Smazat",
      Edit: "Upravit",
      RefreshTitle: "Obnovit nÃ¡zev",
      RefreshToast: "PoÅ¾adavek na obnovenÃ­ nÃ¡zvu byl odeslÃ¡n",
    },
    Commands: {
      new: "NovÃ¡ konverzace",
      newm: "NovÃ¡ konverzace z masky",
      next: "DalÅ¡Ã­ konverzace",
      prev: "PÅ™edchozÃ­ konverzace",
      clear: "Vymazat kontext",
      del: "Smazat konverzaci",
    },
    InputActions: {
      Stop: "Zastavit odpovÄ›Ä",
      ToBottom: "PÅ™ejÃ­t na nejnovÄ›jÅ¡Ã­",
      Theme: {
        auto: "AutomatickÃ© tÃ©ma",
        light: "SvÄ›telnÃ½ reÅ¾im",
        dark: "TmavÃ½ reÅ¾im",
      },
      Prompt: "RychlÃ© pÅ™Ã­kazy",
      Masks: "VÅ¡echny masky",
      Clear: "Vymazat konverzaci",
      Settings: "NastavenÃ­ konverzace",
      UploadImage: "NahrÃ¡t obrÃ¡zek",
    },
    Rename: "PÅ™ejmenovat konverzaci",
    Typing: "PÃ­Å¡e seâ€¦",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey} odeslat`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += "ï¼ŒShift + Enter pro novÃ½ Å™Ã¡dek";
      }
      return inputHints + "ï¼Œ/ pro doplnÄ›nÃ­, : pro pÅ™Ã­kaz";
    },
    Send: "Odeslat",
    Config: {
      Reset: "Vymazat pamÄ›Å¥",
      SaveAs: "UloÅ¾it jako masku",
    },
    IsContext: "PÅ™ednastavenÃ© prompty",
  },
  Export: {
    Title: "SdÃ­let konverzace",
    Copy: "KopÃ­rovat vÅ¡e",
    Download: "StÃ¡hnout soubor",
    Share: "SdÃ­let na ShareGPT",
    MessageFromYou: "UÅ¾ivatel",
    MessageFromChatGPT: "ChatGPT",
    Format: {
      Title: "FormÃ¡t exportu",
      SubTitle: "Lze exportovat jako Markdown text nebo PNG obrÃ¡zek",
    },
    IncludeContext: {
      Title: "Zahrnout kontext masky",
      SubTitle: "Zobrazit kontext masky ve zprÃ¡vÃ¡ch",
    },
    Steps: {
      Select: "Vybrat",
      Preview: "NÃ¡hled",
    },
    Image: {
      Toast: "GenerovÃ¡nÃ­ screenshotu",
      Modal: "DlouhÃ½m stiskem nebo pravÃ½m tlaÄÃ­tkem myÅ¡i uloÅ¾te obrÃ¡zek",
    },
  },
  Select: {
    Search: "Hledat zprÃ¡vy",
    All: "Vybrat vÅ¡e",
    Latest: "NÄ›kolik poslednÃ­ch",
    Clear: "ZruÅ¡it vÃ½bÄ›r",
  },
  Memory: {
    Title: "Historie shrnutÃ­",
    EmptyContent: "Obsah konverzace je pÅ™Ã­liÅ¡ krÃ¡tkÃ½, nenÃ­ tÅ™eba shrnovat",
    Send: "Automaticky komprimovat konverzace a odeslat jako kontext",
    Copy: "KopÃ­rovat shrnutÃ­",
    Reset: "[nepouÅ¾Ã­vÃ¡ se]",
    ResetConfirm: "Opravdu chcete vymazat historii shrnutÃ­?",
  },
  Home: {
    NewChat: "NovÃ¡ konverzace",
    DeleteChat: "Opravdu chcete smazat vybranou konverzaci?",
    DeleteToast: "Konverzace byla smazÃ¡na",
    Revert: "VrÃ¡tit",
  },
  Settings: {
    Title: "NastavenÃ­",
    SubTitle: "VÅ¡echny moÅ¾nosti nastavenÃ­",

    Danger: {
      Reset: {
        Title: "Obnovit vÅ¡echna nastavenÃ­",
        SubTitle: "Obnovit vÅ¡echny nastavenÃ­ na vÃ½chozÃ­ hodnoty",
        Action: "OkamÅ¾itÄ› obnovit",
        Confirm: "Opravdu chcete obnovit vÅ¡echna nastavenÃ­?",
      },
      Clear: {
        Title: "Smazat vÅ¡echna data",
        SubTitle: "Smazat vÅ¡echny chaty a nastavenÃ­",
        Action: "OkamÅ¾itÄ› smazat",
        Confirm: "Opravdu chcete smazat vÅ¡echny chaty a nastavenÃ­?",
      },
    },
    Lang: {
      Name: "Language", // POZOR: pokud chcete pÅ™idat novÃ½ pÅ™eklad, prosÃ­m, nechte tuto hodnotu jako `Language`
      All: "VÅ¡echny jazyky",
    },
    Avatar: "ProfilovÃ½ obrÃ¡zek",
    FontSize: {
      Title: "Velikost pÃ­sma",
      SubTitle: "Velikost pÃ­sma pro obsah chatu",
    },
    FontFamily: {
      Title: "ChatovÃ© PÃ­smo",
      SubTitle:
        "PÃ­smo obsahu chatu, ponechejte prÃ¡zdnÃ© pro pouÅ¾itÃ­ globÃ¡lnÃ­ho vÃ½chozÃ­ho pÃ­sma",
      Placeholder: "NÃ¡zev PÃ­sma",
    },
    InjectSystemPrompts: {
      Title: "VloÅ¾it systÃ©movÃ© vÃ½zvy",
      SubTitle:
        "Automaticky pÅ™idat systÃ©movou vÃ½zvu simulujÃ­cÃ­ ChatGPT na zaÄÃ¡tek seznamu zprÃ¡v pro kaÅ¾dÃ½ poÅ¾adavek",
    },
    InputTemplate: {
      Title: "PÅ™edzpracovÃ¡nÃ­ uÅ¾ivatelskÃ©ho vstupu",
      SubTitle: "NejnovÄ›jÅ¡Ã­ zprÃ¡va uÅ¾ivatele bude vyplnÄ›na do tÃ©to Å¡ablony",
    },

    Update: {
      Version: (x: string) => `AktuÃ¡lnÃ­ verze: ${x}`,
      IsLatest: "Jste na nejnovÄ›jÅ¡Ã­ verzi",
      CheckUpdate: "Zkontrolovat aktualizace",
      IsChecking: "Kontrola aktualizacÃ­...",
      FoundUpdate: (x: string) => `Nalezena novÃ¡ verze: ${x}`,
      GoToUpdate: "PÅ™ejÃ­t na aktualizaci",
    },
    SendKey: "KlÃ¡vesa pro odeslÃ¡nÃ­",
    Theme: "TÃ©ma",
    TightBorder: "ReÅ¾im bez okrajÅ¯",
    SendPreviewBubble: {
      Title: "NÃ¡hledovÃ¡ bublina",
      SubTitle: "NÃ¡hled Markdown obsahu v nÃ¡hledovÃ© bublinÄ›",
    },
    AutoGenerateTitle: {
      Title: "AutomatickÃ© generovÃ¡nÃ­ nÃ¡zvu",
      SubTitle: "Generovat vhodnÃ½ nÃ¡zev na zÃ¡kladÄ› obsahu konverzace",
    },
    Sync: {
      CloudState: "Data na cloudu",
      NotSyncYet: "JeÅ¡tÄ› nebylo synchronizovÃ¡no",
      Success: "Synchronizace ÃºspÄ›Å¡nÃ¡",
      Fail: "Synchronizace selhala",

      Config: {
        Modal: {
          Title: "NastavenÃ­ cloudovÃ© synchronizace",
          Check: "Zkontrolovat dostupnost",
        },
        SyncType: {
          Title: "Typ synchronizace",
          SubTitle: "Vyberte oblÃ­benÃ½ synchronizaÄnÃ­ server",
        },
        Proxy: {
          Title: "Povolit proxy",
          SubTitle:
            "PÅ™i synchronizaci v prohlÃ­Å¾eÄi musÃ­ bÃ½t proxy povolena, aby se pÅ™edeÅ¡lo problÃ©mÅ¯m s CORS",
        },
        ProxyUrl: {
          Title: "Adresa proxy",
          SubTitle: "Pouze pro internÃ­ proxy",
        },

        WebDav: {
          Endpoint: "WebDAV adresa",
          UserName: "UÅ¾ivatelskÃ© jmÃ©no",
          Password: "Heslo",
        },

        UpStash: {
          Endpoint: "UpStash Redis REST URL",
          UserName: "NÃ¡zev zÃ¡lohy",
          Password: "UpStash Redis REST Token",
        },
      },

      LocalState: "LokÃ¡lnÃ­ data",
      Overview: (overview: any) => {
        return `${overview.chat} konverzacÃ­, ${overview.message} zprÃ¡v, ${overview.prompt} promptÅ¯, ${overview.mask} masek`;
      },
      ImportFailed: "Import selhal",
    },
    Mask: {
      Splash: {
        Title: "ÃšvodnÃ­ strÃ¡nka masky",
        SubTitle: "PÅ™i zahÃ¡jenÃ­ novÃ© konverzace zobrazit ÃºvodnÃ­ strÃ¡nku masky",
      },
      Builtin: {
        Title: "SkrÃ½t vestavÄ›nÃ© masky",
        SubTitle: "SkrÃ½t vestavÄ›nÃ© masky v seznamu vÅ¡ech masek",
      },
    },
    Prompt: {
      Disable: {
        Title: "ZakÃ¡zat automatickÃ© doplÅˆovÃ¡nÃ­ promptÅ¯",
        SubTitle:
          "AutomatickÃ© doplÅˆovÃ¡nÃ­ se aktivuje zadÃ¡nÃ­m / na zaÄÃ¡tku textovÃ©ho pole",
      },
      List: "Seznam vlastnÃ­ch promptÅ¯",
      ListCount: (builtin: number, custom: number) =>
        `VestavÄ›nÃ© ${builtin} poloÅ¾ek, uÅ¾ivatelsky definovanÃ© ${custom} poloÅ¾ek`,
      Edit: "Upravit",
      Modal: {
        Title: "Seznam promptÅ¯",
        Add: "NovÃ½",
        Search: "Hledat prompty",
      },
      EditModal: {
        Title: "Upravit prompt",
      },
    },
    HistoryCount: {
      Title: "PoÄet historickÃ½ch zprÃ¡v",
      SubTitle: "PoÄet historickÃ½ch zprÃ¡v zahrnutÃ½ch v kaÅ¾dÃ©m poÅ¾adavku",
    },
    CompressThreshold: {
      Title: "PrahovÃ¡ hodnota komprese historickÃ½ch zprÃ¡v",
      SubTitle:
        "KdyÅ¾ nekomprimovanÃ© historickÃ© zprÃ¡vy pÅ™ekroÄÃ­ tuto hodnotu, dojde ke kompresi",
    },

    Usage: {
      Title: "Kontrola zÅ¯statku",
      SubTitle(used: any, total: any) {
        return `Tento mÄ›sÃ­c pouÅ¾ito $${used}, celkovÃ½ pÅ™edplatnÃ½ objem $${total}`;
      },
      IsChecking: "ProbÃ­hÃ¡ kontrolaâ€¦",
      Check: "Znovu zkontrolovat",
      NoAccess: "Zadejte API Key nebo pÅ™Ã­stupovÃ© heslo pro zobrazenÃ­ zÅ¯statku",
    },

    Access: {
      SaasStart: {
        Title: "PouÅ¾itÃ­ HeyChat AI",
        Label: "(NejlepÅ¡Ã­ nÃ¡kladovÄ› efektivnÃ­ Å™eÅ¡enÃ­)",
        SubTitle:
          "OficiÃ¡lnÄ› udrÅ¾ovÃ¡no HeyChat, pÅ™ipraveno k pouÅ¾itÃ­ bez konfigurace, podporuje nejnovÄ›jÅ¡Ã­ velkÃ© modely jako OpenAI o1, GPT-4o, Claude-3.5",
        ChatNow: "ZaÄnÄ›te chatovat nynÃ­",
      },

      AccessCode: {
        Title: "PÅ™Ã­stupovÃ½ kÃ³d",
        SubTitle: "AdministrÃ¡tor aktivoval Å¡ifrovanÃ½ pÅ™Ã­stup",
        Placeholder: "Zadejte pÅ™Ã­stupovÃ½ kÃ³d",
      },
      CustomEndpoint: {
        Title: "VlastnÃ­ rozhranÃ­",
        SubTitle: "PouÅ¾Ã­t vlastnÃ­ Azure nebo OpenAI sluÅ¾bu",
      },
      Provider: {
        Title: "Poskytovatel modelu",
        SubTitle: "PÅ™epnout mezi rÅ¯znÃ½mi poskytovateli",
      },
      OpenAI: {
        ApiKey: {
          Title: "API Key",
          SubTitle:
            "PouÅ¾ijte vlastnÃ­ OpenAI Key k obejitÃ­ pÅ™Ã­stupovÃ©ho omezenÃ­",
          Placeholder: "OpenAI API Key",
        },

        Endpoint: {
          Title: "Adresa rozhranÃ­",
          SubTitle: "KromÄ› vÃ½chozÃ­ adresy musÃ­ obsahovat http(s)://",
        },
      },
      Azure: {
        ApiKey: {
          Title: "RozhranÃ­ klÃ­Ä",
          SubTitle: "PouÅ¾ijte vlastnÃ­ Azure Key k obejitÃ­ pÅ™Ã­stupovÃ©ho omezenÃ­",
          Placeholder: "Azure API Key",
        },

        Endpoint: {
          Title: "Adresa rozhranÃ­",
          SubTitle: "PÅ™Ã­klad:",
        },

        ApiVerion: {
          Title: "Verze rozhranÃ­ (azure api version)",
          SubTitle: "Vyberte konkrÃ©tnÃ­ verzi",
        },
      },
      Anthropic: {
        ApiKey: {
          Title: "RozhranÃ­ klÃ­Ä",
          SubTitle:
            "PouÅ¾ijte vlastnÃ­ Anthropic Key k obejitÃ­ pÅ™Ã­stupovÃ©ho omezenÃ­",
          Placeholder: "Anthropic API Key",
        },

        Endpoint: {
          Title: "Adresa rozhranÃ­",
          SubTitle: "PÅ™Ã­klad:",
        },

        ApiVerion: {
          Title: "Verze rozhranÃ­ (claude api version)",
          SubTitle: "Vyberte konkrÃ©tnÃ­ verzi API",
        },
      },
      Google: {
        ApiKey: {
          Title: "API klÃ­Ä",
          SubTitle: "ZÃ­skejte svÅ¯j API klÃ­Ä od Google AI",
          Placeholder: "Zadejte svÅ¯j Google AI Studio API klÃ­Ä",
        },

        Endpoint: {
          Title: "KoneÄnÃ¡ adresa",
          SubTitle: "PÅ™Ã­klad:",
        },

        ApiVersion: {
          Title: "Verze API (pouze pro gemini-pro)",
          SubTitle: "Vyberte konkrÃ©tnÃ­ verzi API",
        },
        GoogleSafetySettings: {
          Title: "ÃšroveÅˆ bezpeÄnostnÃ­ho filtrovÃ¡nÃ­ Google",
          SubTitle: "Nastavit ÃºroveÅˆ filtrovÃ¡nÃ­ obsahu",
        },
      },
      Baidu: {
        ApiKey: {
          Title: "API Key",
          SubTitle: "PouÅ¾ijte vlastnÃ­ Baidu API Key",
          Placeholder: "Baidu API Key",
        },
        SecretKey: {
          Title: "Secret Key",
          SubTitle: "PouÅ¾ijte vlastnÃ­ Baidu Secret Key",
          Placeholder: "Baidu Secret Key",
        },
        Endpoint: {
          Title: "Adresa rozhranÃ­",
          SubTitle:
            "Nepodporuje vlastnÃ­ nastavenÃ­, pÅ™ejdÄ›te na .env konfiguraci",
        },
      },
      ByteDance: {
        ApiKey: {
          Title: "RozhranÃ­ klÃ­Ä",
          SubTitle: "PouÅ¾ijte vlastnÃ­ ByteDance API Key",
          Placeholder: "ByteDance API Key",
        },
        Endpoint: {
          Title: "Adresa rozhranÃ­",
          SubTitle: "PÅ™Ã­klad:",
        },
      },
      Alibaba: {
        ApiKey: {
          Title: "RozhranÃ­ klÃ­Ä",
          SubTitle: "PouÅ¾ijte vlastnÃ­ Alibaba Cloud API Key",
          Placeholder: "Alibaba Cloud API Key",
        },
        Endpoint: {
          Title: "Adresa rozhranÃ­",
          SubTitle: "PÅ™Ã­klad:",
        },
      },
      AI302: {
        ApiKey: {
          Title: "RozhranÃ­ klÃ­Ä",
          SubTitle: "PouÅ¾ijte vlastnÃ­ 302.AI API Key",
          Placeholder: "302.AI API Key",
        },
        Endpoint: {
          Title: "Adresa rozhranÃ­",
          SubTitle: "PÅ™Ã­klad:",
        },
      },
      CustomModel: {
        Title: "VlastnÃ­ nÃ¡zvy modelÅ¯",
        SubTitle: "PÅ™idejte moÅ¾nosti vlastnÃ­ch modelÅ¯, oddÄ›lenÃ© ÄÃ¡rkami",
      },
    },

    Model: "Model (model)",
    CompressModel: {
      Title: "KompresnÃ­ model",
      SubTitle: "Model pouÅ¾Ã­vanÃ½ pro kompresi historie",
    },
    Temperature: {
      Title: "NÃ¡hodnost (temperature)",
      SubTitle: "ÄŒÃ­m vyÅ¡Å¡Ã­ hodnota, tÃ­m nÃ¡hodnÄ›jÅ¡Ã­ odpovÄ›di",
    },
    TopP: {
      Title: "JÃ¡drovÃ© vzorkovÃ¡nÃ­ (top_p)",
      SubTitle: "PodobnÃ© nÃ¡hodnosti, ale nemÄ›Åˆte spolu s nÃ¡hodnostÃ­",
    },
    MaxTokens: {
      Title: "OmezenÃ­ odpovÄ›di (max_tokens)",
      SubTitle: "MaximÃ¡lnÃ­ poÄet TokenÅ¯ pouÅ¾itÃ½ch v jednom interakci",
    },
    PresencePenalty: {
      Title: "ÄŒerstvost tÃ©mat (presence_penalty)",
      SubTitle:
        "ÄŒÃ­m vyÅ¡Å¡Ã­ hodnota, tÃ­m vÄ›tÅ¡Ã­ pravdÄ›podobnost rozÅ¡Ã­Å™enÃ­ na novÃ¡ tÃ©mata",
    },
    FrequencyPenalty: {
      Title: "Penalizace frekvence (frequency_penalty)",
      SubTitle:
        "ÄŒÃ­m vyÅ¡Å¡Ã­ hodnota, tÃ­m vÄ›tÅ¡Ã­ pravdÄ›podobnost snÃ­Å¾enÃ­ opakovÃ¡nÃ­ slov",
    },
  },
  Store: {
    DefaultTopic: "NovÃ½ chat",
    BotHello: "Jak vÃ¡m mohu pomoci?",
    Error: "DoÅ¡lo k chybÄ›, zkuste to prosÃ­m znovu pozdÄ›ji.",
    Prompt: {
      History: (content: string) =>
        "Toto je shrnutÃ­ historie chatu jako kontext: " + content,
      Topic:
        "PouÅ¾ijte ÄtyÅ™i aÅ¾ pÄ›t slov pro struÄnÃ© tÃ©ma tÃ©to vÄ›ty, bez vysvÄ›tlenÃ­, interpunkce, citoslovcÃ­, nadbyteÄnÃ©ho textu, bez tuÄnÃ©ho pÃ­sma. Pokud tÃ©ma neexistuje, vraÅ¥te pouze 'neformÃ¡lnÃ­ chat'.",
      Summarize:
        "StruÄnÄ› shrÅˆte obsah konverzace jako kontextovÃ½ prompt pro budoucÃ­ pouÅ¾itÃ­, do 200 slov",
    },
  },
  Copy: {
    Success: "ZkopÃ­rovÃ¡no do schrÃ¡nky",
    Failed: "KopÃ­rovÃ¡nÃ­ selhalo, prosÃ­m, povolte pÅ™Ã­stup ke schrÃ¡nce",
  },
  Download: {
    Success: "Obsah byl staÅ¾en do vaÅ¡eho adresÃ¡Å™e.",
    Failed: "StahovÃ¡nÃ­ selhalo.",
  },
  Context: {
    Toast: (x: any) => `Obsahuje ${x} pÅ™ednastavenÃ½ch promptÅ¯`,
    Edit: "NastavenÃ­ aktuÃ¡lnÃ­ konverzace",
    Add: "PÅ™idat novou konverzaci",
    Clear: "Kontext byl vymazÃ¡n",
    Revert: "Obnovit kontext",
  },
  Plugin: {
    Name: "Plugin",
  },
  FineTuned: {
    Sysmessage: "Jste asistent",
  },
  SearchChat: {
    Name: "Hledat",
    Page: {
      Title: "Hledat v historii chatu",
      Search: "Zadejte hledanÃ© klÃ­ÄovÃ© slovo",
      NoResult: "Nebyly nalezeny Å¾Ã¡dnÃ© vÃ½sledky",
      NoData: "Å½Ã¡dnÃ¡ data",
      Loading: "NaÄÃ­tÃ¡nÃ­",

      SubTitle: (count: number) => `Nalezeno ${count} vÃ½sledkÅ¯`,
    },
    Item: {
      View: "Zobrazit",
    },
  },
  Mask: {
    Name: "Maska",
    Page: {
      Title: "PÅ™ednastavenÃ© role masky",
      SubTitle: (count: number) => `${count} definovanÃ½ch rolÃ­`,
      Search: "Hledat role masky",
      Create: "NovÃ½",
    },
    Item: {
      Info: (count: number) => `Obsahuje ${count} pÅ™ednastavenÃ½ch konverzacÃ­`,
      Chat: "Chat",
      View: "Zobrazit",
      Edit: "Upravit",
      Delete: "Smazat",
      DeleteConfirm: "Opravdu chcete smazat?",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `Upravit pÅ™ednastavenou masku ${readonly ? " (jen pro ÄtenÃ­)" : ""}`,
      Download: "StÃ¡hnout pÅ™ednastavenÃ­",
      Clone: "Klonovat pÅ™ednastavenÃ­",
    },
    Config: {
      Avatar: "ProfilovÃ½ obrÃ¡zek",
      Name: "NÃ¡zev role",
      Sync: {
        Title: "PouÅ¾Ã­t globÃ¡lnÃ­ nastavenÃ­",
        SubTitle: "PouÅ¾Ã­t globÃ¡lnÃ­ modelovÃ¡ nastavenÃ­ pro aktuÃ¡lnÃ­ konverzaci",
        Confirm:
          "VaÅ¡e vlastnÃ­ nastavenÃ­ konverzace bude automaticky pÅ™epsÃ¡no, opravdu chcete pouÅ¾Ã­t globÃ¡lnÃ­ nastavenÃ­?",
      },
      HideContext: {
        Title: "SkrÃ½t pÅ™ednastavenÃ© konverzace",
        SubTitle:
          "Po skrytÃ­ se pÅ™ednastavenÃ© konverzace nebudou zobrazovat v chatovÃ©m rozhranÃ­",
      },
      Share: {
        Title: "SdÃ­let tuto masku",
        SubTitle: "Generovat pÅ™Ã­mÃ½ odkaz na tuto masku",
        Action: "KopÃ­rovat odkaz",
      },
    },
  },
  NewChat: {
    Return: "ZpÄ›t",
    Skip: "ZaÄÃ­t hned",
    NotShow: "Zobrazit uÅ¾ nikdy",
    ConfirmNoShow:
      "Opravdu chcete zakÃ¡zat? ZakÃ¡zÃ¡nÃ­ mÅ¯Å¾ete kdykoli znovu povolit v nastavenÃ­.",
    Title: "Vyberte masku",
    SubTitle: "ZaÄnÄ›te nynÃ­ a konfrontujte se s myslÃ­ za maskou",
    More: "Zobrazit vÅ¡e",
  },

  URLCommand: {
    Code: "Byl detekovÃ¡n pÅ™Ã­stupovÃ½ kÃ³d v odkazu, chcete jej automaticky vyplnit?",
    Settings:
      "Byla detekovÃ¡na pÅ™ednastavenÃ¡ nastavenÃ­ v odkazu, chcete je automaticky vyplnit?",
  },

  UI: {
    Confirm: "Potvrdit",
    Cancel: "ZruÅ¡it",
    Close: "ZavÅ™Ã­t",
    Create: "NovÃ½",
    Edit: "Upravit",
    Export: "Exportovat",
    Import: "Importovat",
    Sync: "Synchronizovat",
    Config: "Konfigurovat",
  },
  Exporter: {
    Description: {
      Title: "Pouze zprÃ¡vy po vymazÃ¡nÃ­ kontextu budou zobrazeny",
    },
    Model: "Model",
    Messages: "ZprÃ¡vy",
    Topic: "TÃ©ma",
    Time: "ÄŒas",
  },
};

export default cs;

