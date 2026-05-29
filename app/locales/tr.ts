import { SubmitKey } from "../store/config";
import type { PartialLocaleType } from "./index";
import { getClientConfig } from "../config/client";
import { SAAS_CHAT_UTM_URL } from "@/app/constant";
const isApp = !!getClientConfig()?.isApp;

const tr: PartialLocaleType = {
  WIP: "Ã‡alÄ±ÅŸma devam ediyor...",
  Error: {
    Unauthorized: isApp
      ? `ðŸ˜† Sohbet bazÄ± sorunlarla karÅŸÄ±laÅŸtÄ±, endiÅŸelenmeyin:
    \\ 1ï¸âƒ£ EÄŸer sÄ±fÄ±r yapÄ±landÄ±rma ile baÅŸlamak istiyorsanÄ±z, [buraya tÄ±klayarak hemen sohbete baÅŸlayÄ±n ðŸš€](${SAAS_CHAT_UTM_URL})
    \\ 2ï¸âƒ£ Kendi OpenAI kaynaklarÄ±nÄ±zÄ± kullanmak istiyorsanÄ±z, [buraya tÄ±klayarak](/#/settings) ayarlarÄ± deÄŸiÅŸtirin âš™ï¸`
      : `ðŸ˜† Sohbet bazÄ± sorunlarla karÅŸÄ±laÅŸtÄ±, endiÅŸelenmeyin:
    \ 1ï¸âƒ£ EÄŸer sÄ±fÄ±r yapÄ±landÄ±rma ile baÅŸlamak istiyorsanÄ±z, [buraya tÄ±klayarak hemen sohbete baÅŸlayÄ±n ðŸš€](${SAAS_CHAT_UTM_URL})
    \ 2ï¸âƒ£ EÄŸer Ã¶zel daÄŸÄ±tÄ±m sÃ¼rÃ¼mÃ¼ kullanÄ±yorsanÄ±z, [buraya tÄ±klayarak](/#/auth) eriÅŸim anahtarÄ±nÄ± girin ðŸ”‘
    \ 3ï¸âƒ£ Kendi OpenAI kaynaklarÄ±nÄ±zÄ± kullanmak istiyorsanÄ±z, [buraya tÄ±klayarak](/#/settings) ayarlarÄ± deÄŸiÅŸtirin âš™ï¸
 `,
  },
  Auth: {
    Title: "Åžifre Gerekli",
    Tips: "YÃ¶netici ÅŸifre doÄŸrulamasÄ±nÄ± etkinleÅŸtirdi, lÃ¼tfen aÅŸaÄŸÄ±ya eriÅŸim kodunu girin",
    SubTips: "Veya OpenAI veya Google API anahtarÄ±nÄ±zÄ± girin",
    Input: "EriÅŸim kodunu buraya girin",
    Confirm: "Onayla",
    Later: "Sonra",
    Return: "Geri",
    SaasTips: "Ayarlar Ã§ok karmaÅŸÄ±k, hemen kullanmak istiyorum",
    TopTips:
      "ðŸ¥³ HeyChat AI lansman teklifi, OpenAI o1, GPT-4o, Claude-3.5 ve en son bÃ¼yÃ¼k modelleri ÅŸimdi aÃ§Ä±n",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} konuÅŸma`,
  },
  Chat: {
    SubTitle: (count: number) => `Toplam ${count} konuÅŸma`,
    EditMessage: {
      Title: "Mesaj KayÄ±tlarÄ±nÄ± DÃ¼zenle",
      Topic: {
        Title: "Sohbet Konusu",
        SubTitle: "GeÃ§erli sohbet konusunu deÄŸiÅŸtir",
      },
    },
    Actions: {
      ChatList: "Mesaj listesine bak",
      CompressedHistory: "SÄ±kÄ±ÅŸtÄ±rÄ±lmÄ±ÅŸ geÃ§miÅŸi gÃ¶r",
      Export: "Sohbet kayÄ±tlarÄ±nÄ± dÄ±ÅŸa aktar",
      Copy: "Kopyala",
      Stop: "Durdur",
      Retry: "Yeniden dene",
      Pin: "SabitlenmiÅŸ",
      PinToastContent: "1 konuÅŸma varsayÄ±lan ifadeye sabitlendi",
      PinToastAction: "GÃ¶rÃ¼nÃ¼m",
      Delete: "Sil",
      Edit: "DÃ¼zenle",
      RefreshTitle: "BaÅŸlÄ±ÄŸÄ± Yenile",
      RefreshToast: "BaÅŸlÄ±k yenileme isteÄŸi gÃ¶nderildi",
    },
    Commands: {
      new: "Yeni sohbet",
      newm: "Maske ile yeni sohbet oluÅŸtur",
      next: "Sonraki sohbet",
      prev: "Ã–nceki sohbet",
      clear: "Konteksti temizle",
      del: "Sohbeti sil",
    },
    InputActions: {
      Stop: "YanÄ±tÄ± durdur",
      ToBottom: "En alta git",
      Theme: {
        auto: "Otomatik tema",
        light: "AÃ§Ä±k mod",
        dark: "Koyu mod",
      },
      Prompt: "KÄ±sayol komutu",
      Masks: "TÃ¼m maskeler",
      Clear: "Sohbeti temizle",
      Settings: "Sohbet ayarlarÄ±",
      UploadImage: "Resim yÃ¼kle",
    },
    Rename: "Sohbeti yeniden adlandÄ±r",
    Typing: "YazÄ±yorâ€¦",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey} gÃ¶nder`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += " Shift + Enter satÄ±r sonu iÃ§in";
      }
      return inputHints + " / tamamlama iÃ§in, : komutlar iÃ§in";
    },
    Send: "GÃ¶nder",
    Config: {
      Reset: "HafÄ±zayÄ± temizle",
      SaveAs: "Maske olarak kaydet",
    },
    IsContext: "VarsayÄ±lan ifade",
  },
  Export: {
    Title: "Sohbet kayÄ±tlarÄ±nÄ± paylaÅŸ",
    Copy: "Hepsini kopyala",
    Download: "DosyayÄ± indir",
    Share: "ShareGPT'ye paylaÅŸ",
    MessageFromYou: "KullanÄ±cÄ±",
    MessageFromChatGPT: "ChatGPT",
    Format: {
      Title: "DÄ±ÅŸa aktarma formatÄ±",
      SubTitle: "Markdown metni veya PNG resmi olarak dÄ±ÅŸa aktarabilirsiniz",
    },
    IncludeContext: {
      Title: "Maske baÄŸlamÄ±nÄ± dahil et",
      SubTitle: "Mesajlarda maske baÄŸlamÄ±nÄ± gÃ¶stermek ister misiniz",
    },
    Steps: {
      Select: "SeÃ§",
      Preview: "Ã–nizleme",
    },
    Image: {
      Toast: "Ekran gÃ¶rÃ¼ntÃ¼sÃ¼ oluÅŸturuluyor",
      Modal: "Resmi uzun basÄ±n veya saÄŸ tÄ±klayÄ±n ve kaydedin",
    },
  },
  Select: {
    Search: "MesajlarÄ± ara",
    All: "Hepsini seÃ§",
    Latest: "Son birkaÃ§ mesaj",
    Clear: "SeÃ§imi temizle",
  },
  Memory: {
    Title: "GeÃ§miÅŸ Ã–zeti",
    EmptyContent: "Sohbet iÃ§eriÄŸi Ã§ok kÄ±sa, Ã¶zetleme gerek yok",
    Send: "Sohbet kayÄ±tlarÄ±nÄ± otomatik olarak sÄ±kÄ±ÅŸtÄ±r ve baÄŸlam olarak gÃ¶nder",
    Copy: "Ã–zeti kopyala",
    Reset: "[kullanÄ±lmadÄ±]",
    ResetConfirm: "GeÃ§miÅŸ Ã¶zetini temizlemek istediÄŸinize emin misiniz?",
  },
  Home: {
    NewChat: "Yeni sohbet",
    DeleteChat: "SeÃ§ilen sohbeti silmek istediÄŸinize emin misiniz?",
    DeleteToast: "Sohbet silindi",
    Revert: "Geri al",
  },
  Settings: {
    Title: "Ayarlar",
    SubTitle: "TÃ¼m ayar seÃ§enekleri",

    Danger: {
      Reset: {
        Title: "TÃ¼m ayarlarÄ± sÄ±fÄ±rla",
        SubTitle: "TÃ¼m ayarlarÄ± varsayÄ±lan deÄŸerlere sÄ±fÄ±rla",
        Action: "Hemen sÄ±fÄ±rla",
        Confirm: "TÃ¼m ayarlarÄ± sÄ±fÄ±rlamak istediÄŸinizden emin misiniz?",
      },
      Clear: {
        Title: "TÃ¼m verileri temizle",
        SubTitle: "TÃ¼m sohbet ve ayar verilerini temizle",
        Action: "Hemen temizle",
        Confirm:
          "TÃ¼m sohbet ve ayar verilerini temizlemek istediÄŸinizden emin misiniz?",
      },
    },
    Lang: {
      Name: "Language", // Dikkat: yeni bir Ã§eviri eklemek isterseniz, bu deÄŸeri Ã§evirmeyin, `Language` olarak bÄ±rakÄ±n
      All: "TÃ¼m diller",
    },
    Avatar: "Profil Resmi",
    FontSize: {
      Title: "YazÄ± Boyutu",
      SubTitle: "Sohbet iÃ§eriÄŸinin yazÄ± boyutu",
    },
    FontFamily: {
      Title: "Sohbet YazÄ± Tipi",
      SubTitle:
        "Sohbet iÃ§eriÄŸinin yazÄ± tipi, boÅŸ bÄ±rakÄ±ldÄ±ÄŸÄ±nda kÃ¼resel varsayÄ±lan yazÄ± tipi uygulanÄ±r",
      Placeholder: "YazÄ± Tipi AdÄ±",
    },
    InjectSystemPrompts: {
      Title: "Sistem Seviyesi Ä°pucu Enjeksiyonu",
      SubTitle: "Her isteÄŸin baÅŸÄ±na ChatGPT benzeri bir sistem ipucu ekle",
    },
    InputTemplate: {
      Title: "KullanÄ±cÄ± Girdisi Ã–n Ä°ÅŸleme",
      SubTitle: "KullanÄ±cÄ±nÄ±n en son mesajÄ± bu ÅŸablona doldurulur",
    },

    Update: {
      Version: (x: string) => `Mevcut sÃ¼rÃ¼m: ${x}`,
      IsLatest: "En son sÃ¼rÃ¼m",
      CheckUpdate: "GÃ¼ncellemeleri kontrol et",
      IsChecking: "GÃ¼ncellemeler kontrol ediliyor...",
      FoundUpdate: (x: string) => `Yeni sÃ¼rÃ¼m bulundu: ${x}`,
      GoToUpdate: "GÃ¼ncellemeye git",
    },
    SendKey: "GÃ¶nderme TuÅŸu",
    Theme: "Tema",
    TightBorder: "SÄ±nÄ±r Yok Modu",
    SendPreviewBubble: {
      Title: "Ã–nizleme Balonu",
      SubTitle: "Markdown iÃ§eriÄŸini Ã¶nizleme balonunda gÃ¶rÃ¼ntÃ¼le",
    },
    AutoGenerateTitle: {
      Title: "BaÅŸlÄ±ÄŸÄ± Otomatik OluÅŸtur",
      SubTitle: "Sohbet iÃ§eriÄŸine gÃ¶re uygun baÅŸlÄ±k oluÅŸtur",
    },
    Sync: {
      CloudState: "Bulut Verisi",
      NotSyncYet: "HenÃ¼z senkronize edilmedi",
      Success: "Senkronizasyon baÅŸarÄ±lÄ±",
      Fail: "Senkronizasyon baÅŸarÄ±sÄ±z",

      Config: {
        Modal: {
          Title: "Bulut Senkronizasyonu YapÄ±landÄ±r",
          Check: "KullanÄ±labilirliÄŸi kontrol et",
        },
        SyncType: {
          Title: "Senkronizasyon TÃ¼rÃ¼",
          SubTitle: "Tercih ettiÄŸiniz senkronizasyon sunucusunu seÃ§in",
        },
        Proxy: {
          Title: "Proxy'yi EtkinleÅŸtir",
          SubTitle:
            "TarayÄ±cÄ±da senkronize ederken proxy'yi etkinleÅŸtirin, aksi takdirde Ã§apraz kaynak kÄ±sÄ±tlamalarÄ±yla karÅŸÄ±laÅŸabilirsiniz",
        },
        ProxyUrl: {
          Title: "Proxy Adresi",
          SubTitle: "Sadece bu projeye ait Ã§apraz kaynak proxy iÃ§in",
        },

        WebDav: {
          Endpoint: "WebDAV Adresi",
          UserName: "KullanÄ±cÄ± AdÄ±",
          Password: "Åžifre",
        },

        UpStash: {
          Endpoint: "UpStash Redis REST Url",
          UserName: "Yedekleme AdÄ±",
          Password: "UpStash Redis REST Token",
        },
      },

      LocalState: "Yerel Veri",
      Overview: (overview: any) => {
        return `${overview.chat} konuÅŸma, ${overview.message} mesaj, ${overview.prompt} ipucu, ${overview.mask} maske`;
      },
      ImportFailed: "Ä°Ã§eri aktarma baÅŸarÄ±sÄ±z",
    },
    Mask: {
      Splash: {
        Title: "Maske BaÅŸlangÄ±Ã§ SayfasÄ±",
        SubTitle:
          "Yeni sohbet baÅŸlatÄ±ldÄ±ÄŸÄ±nda maske baÅŸlangÄ±Ã§ sayfasÄ±nÄ± gÃ¶ster",
      },
      Builtin: {
        Title: "YerleÅŸik Maskeleri Gizle",
        SubTitle: "TÃ¼m maskeler listesindeki yerleÅŸik maskeleri gizle",
      },
    },
    Prompt: {
      Disable: {
        Title: "Ä°pucu TamamlamayÄ± Devre DÄ±ÅŸÄ± BÄ±rak",
        SubTitle:
          "GiriÅŸ kutusunun baÅŸÄ±na / yazarak otomatik tamamlamayÄ± tetikle",
      },
      List: "Ã–zelleÅŸtirilmiÅŸ Ä°pucu Listesi",
      ListCount: (builtin: number, custom: number) =>
        `YerleÅŸik ${builtin} tane, kullanÄ±cÄ± tanÄ±mlÄ± ${custom} tane`,
      Edit: "DÃ¼zenle",
      Modal: {
        Title: "Ä°pucu Listesi",
        Add: "Yeni Ekle",
        Search: "Ä°pucu Ara",
      },
      EditModal: {
        Title: "Ä°pucu DÃ¼zenle",
      },
    },
    HistoryCount: {
      Title: "Ekli GeÃ§miÅŸ Mesaj SayÄ±sÄ±",
      SubTitle: "Her istekte taÅŸÄ±nan geÃ§miÅŸ mesaj sayÄ±sÄ±",
    },
    CompressThreshold: {
      Title: "GeÃ§miÅŸ Mesaj UzunluÄŸu SÄ±kÄ±ÅŸtÄ±rma EÅŸiÄŸi",
      SubTitle:
        "SÄ±kÄ±ÅŸtÄ±rÄ±lmamÄ±ÅŸ geÃ§miÅŸ mesaj bu deÄŸeri aÅŸtÄ±ÄŸÄ±nda sÄ±kÄ±ÅŸtÄ±rma yapÄ±lÄ±r",
    },

    Usage: {
      Title: "Bakiye Sorgulama",
      SubTitle(used: any, total: any) {
        return `Bu ay kullanÄ±lan $${used}, toplam abonelik Ã¼creti $${total}`;
      },
      IsChecking: "Kontrol ediliyorâ€¦",
      Check: "Yeniden kontrol et",
      NoAccess:
        "Bakiye gÃ¶rÃ¼ntÃ¼lemek iÃ§in API AnahtarÄ± veya eriÅŸim ÅŸifresi girin",
    },

    Access: {
      SaasStart: {
        Title: "HeyChat AI kullanÄ±n",
        Label: "(En maliyet etkin Ã§Ã¶zÃ¼m)",
        SubTitle:
          "HeyChat tarafÄ±ndan resmi olarak yÃ¶netilmektedir, yapÄ±landÄ±rma olmadan hemen kullanÄ±ma hazÄ±rdÄ±r, OpenAI o1, GPT-4o, Claude-3.5 gibi en son bÃ¼yÃ¼k modelleri destekler",
        ChatNow: "Åžimdi sohbet et",
      },

      AccessCode: {
        Title: "EriÅŸim Åžifresi",
        SubTitle: "YÃ¶netici ÅŸifreli eriÅŸimi etkinleÅŸtirdi",
        Placeholder: "EriÅŸim ÅŸifrenizi girin",
      },
      CustomEndpoint: {
        Title: "Ã–zelleÅŸtirilmiÅŸ API",
        SubTitle:
          "Ã–zelleÅŸtirilmiÅŸ Azure veya OpenAI hizmeti kullanmak ister misiniz?",
      },
      Provider: {
        Title: "Model SaÄŸlayÄ±cÄ±sÄ±",
        SubTitle: "FarklÄ± saÄŸlayÄ±cÄ±lara geÃ§iÅŸ yapÄ±n",
      },
      OpenAI: {
        ApiKey: {
          Title: "API AnahtarÄ±",
          SubTitle:
            "Ã–zelleÅŸtirilmiÅŸ OpenAI AnahtarÄ± kullanarak ÅŸifreli eriÅŸim kÄ±sÄ±tlamalarÄ±nÄ± atlayÄ±n",
          Placeholder: "OpenAI API AnahtarÄ±",
        },

        Endpoint: {
          Title: "API Adresi",
          SubTitle: "VarsayÄ±lan adres dÄ±ÅŸÄ±nda, http(s):// iÃ§ermelidir",
        },
      },
      Azure: {
        ApiKey: {
          Title: "API AnahtarÄ±",
          SubTitle:
            "Ã–zelleÅŸtirilmiÅŸ Azure AnahtarÄ± kullanarak ÅŸifreli eriÅŸim kÄ±sÄ±tlamalarÄ±nÄ± atlayÄ±n",
          Placeholder: "Azure API AnahtarÄ±",
        },

        Endpoint: {
          Title: "API Adresi",
          SubTitle: "Ã–rnek:",
        },

        ApiVerion: {
          Title: "API Versiyonu (azure api version)",
          SubTitle: "Belirli bir versiyonu seÃ§in",
        },
      },
      Anthropic: {
        ApiKey: {
          Title: "API AnahtarÄ±",
          SubTitle:
            "Ã–zelleÅŸtirilmiÅŸ Anthropic AnahtarÄ± kullanarak ÅŸifreli eriÅŸim kÄ±sÄ±tlamalarÄ±nÄ± atlayÄ±n",
          Placeholder: "Anthropic API AnahtarÄ±",
        },

        Endpoint: {
          Title: "API Adresi",
          SubTitle: "Ã–rnek:",
        },

        ApiVerion: {
          Title: "API Versiyonu (claude api version)",
          SubTitle: "Belirli bir API versiyonunu seÃ§in",
        },
      },
      Google: {
        ApiKey: {
          Title: "API AnahtarÄ±",
          SubTitle: "Google AI'den API AnahtarÄ±nÄ±zÄ± alÄ±n",
          Placeholder: "Google AI Studio API AnahtarÄ±nÄ±zÄ± girin",
        },

        Endpoint: {
          Title: "UÃ§ Nokta Adresi",
          SubTitle: "Ã–rnek:",
        },

        ApiVersion: {
          Title: "API Versiyonu (sadece gemini-pro)",
          SubTitle: "Belirli bir API versiyonunu seÃ§in",
        },
        GoogleSafetySettings: {
          Title: "Google GÃ¼venlik Filtreleme Seviyesi",
          SubTitle: "Ä°Ã§erik filtreleme seviyesini ayarlayÄ±n",
        },
      },
      Baidu: {
        ApiKey: {
          Title: "API AnahtarÄ±",
          SubTitle: "Ã–zelleÅŸtirilmiÅŸ Baidu API AnahtarÄ± kullanÄ±n",
          Placeholder: "Baidu API AnahtarÄ±",
        },
        SecretKey: {
          Title: "Secret AnahtarÄ±",
          SubTitle: "Ã–zelleÅŸtirilmiÅŸ Baidu Secret AnahtarÄ± kullanÄ±n",
          Placeholder: "Baidu Secret AnahtarÄ±",
        },
        Endpoint: {
          Title: "API Adresi",
          SubTitle: "Ã–zelleÅŸtirilmiÅŸ yapÄ±landÄ±rma iÃ§in .env'ye gidin",
        },
      },
      ByteDance: {
        ApiKey: {
          Title: "API AnahtarÄ±",
          SubTitle: "Ã–zelleÅŸtirilmiÅŸ ByteDance API AnahtarÄ± kullanÄ±n",
          Placeholder: "ByteDance API AnahtarÄ±",
        },
        Endpoint: {
          Title: "API Adresi",
          SubTitle: "Ã–rnek:",
        },
      },
      Alibaba: {
        ApiKey: {
          Title: "API AnahtarÄ±",
          SubTitle: "Ã–zelleÅŸtirilmiÅŸ Alibaba Cloud API AnahtarÄ± kullanÄ±n",
          Placeholder: "Alibaba Cloud API AnahtarÄ±",
        },
        Endpoint: {
          Title: "API Adresi",
          SubTitle: "Ã–rnek:",
        },
      },
      AI302: {
        ApiKey: {
          Title: "API AnahtarÄ±",
          SubTitle: "Ã–zelleÅŸtirilmiÅŸ 302.AI API AnahtarÄ± kullanÄ±n",
          Placeholder: "302.AI API AnahtarÄ±",
        },
        Endpoint: {
          Title: "API Adresi",
          SubTitle: "Ã–rnek:",
        },
      },
      CustomModel: {
        Title: "Ã–zelleÅŸtirilmiÅŸ Model AdÄ±",
        SubTitle:
          "Ã–zelleÅŸtirilmiÅŸ model seÃ§enekleri ekleyin, Ä°ngilizce virgÃ¼l ile ayÄ±rÄ±n",
      },
    },

    Model: "Model (model)",
    CompressModel: {
      Title: "SÄ±kÄ±ÅŸtÄ±rma Modeli",
      SubTitle: "GeÃ§miÅŸi sÄ±kÄ±ÅŸtÄ±rmak iÃ§in kullanÄ±lan model",
    },
    Temperature: {
      Title: "Rastgelelik (temperature)",
      SubTitle: "DeÄŸer arttÄ±kÃ§a yanÄ±t daha rastgele olur",
    },
    TopP: {
      Title: "NÃ¼kleer Ã–rnekleme (top_p)",
      SubTitle:
        "RastgeleliÄŸe benzer, ancak rastgelelik ile birlikte deÄŸiÅŸtirmeyin",
    },
    MaxTokens: {
      Title: "Tek YanÄ±t Limiti (max_tokens)",
      SubTitle: "Tek etkileÅŸimde kullanÄ±lan maksimum Token sayÄ±sÄ±",
    },
    PresencePenalty: {
      Title: "Konu TazeliÄŸi (presence_penalty)",
      SubTitle: "DeÄŸer arttÄ±kÃ§a, yeni konulara geÃ§iÅŸ olasÄ±lÄ±ÄŸÄ± artar",
    },
    FrequencyPenalty: {
      Title: "Frekans CezasÄ± (frequency_penalty)",
      SubTitle:
        "DeÄŸer arttÄ±kÃ§a, tekrar eden kelimelerin azalmasÄ± olasÄ±lÄ±ÄŸÄ± artar",
    },
  },
  Store: {
    DefaultTopic: "Yeni Sohbet",
    BotHello: "Size nasÄ±l yardÄ±mcÄ± olabilirim?",
    Error: "Bir hata oluÅŸtu, lÃ¼tfen daha sonra tekrar deneyin",
    Prompt: {
      History: (content: string) => "Bu, geÃ§miÅŸ sohbetin Ã¶zeti: " + content,
      Topic:
        "Bu cÃ¼mlenin dÃ¶rt ila beÅŸ kelimelik kÄ±sa baÅŸlÄ±ÄŸÄ±nÄ± doÄŸrudan verin, aÃ§Ä±klama yapmayÄ±n, noktalama iÅŸareti, duygu kelimesi veya fazla metin eklemeyin, kalÄ±n yapmayÄ±n. BaÅŸlÄ±k yoksa, doÄŸrudan 'Sohbet' yanÄ±tÄ±nÄ± verin.",
      Summarize:
        "Sohbet iÃ§eriÄŸini kÄ±saca Ã¶zetleyin, bu Ã¶zet sonraki baÄŸlam ipucu olarak kullanÄ±lacaktÄ±r, 200 kelime iÃ§inde tutun",
    },
  },
  Copy: {
    Success: "Panoya yazÄ±ldÄ±",
    Failed: "Kopyalama baÅŸarÄ±sÄ±z, lÃ¼tfen panoya eriÅŸim izni verin",
  },
  Download: {
    Success: "Ä°Ã§erik dizininize indirildi.",
    Failed: "Ä°ndirme baÅŸarÄ±sÄ±z.",
  },
  Context: {
    Toast: (x: any) => `${x} tane Ã¶nceden tanÄ±mlÄ± ipucu iÃ§eriyor`,
    Edit: "Mevcut sohbet ayarlarÄ±",
    Add: "Yeni bir sohbet ekle",
    Clear: "BaÄŸlam temizlendi",
    Revert: "BaÄŸlamÄ± geri getir",
  },
  Plugin: {
    Name: "Eklenti",
  },
  FineTuned: {
    Sysmessage: "Sen bir asistansÄ±n",
  },
  SearchChat: {
    Name: "Ara",
    Page: {
      Title: "Sohbet geÃ§miÅŸini ara",
      Search: "Arama anahtar kelimelerini girin",
      NoResult: "SonuÃ§ bulunamadÄ±",
      NoData: "Veri yok",
      Loading: "YÃ¼kleniyor",

      SubTitle: (count: number) => `${count} sonuÃ§ bulundu`,
    },
    Item: {
      View: "GÃ¶rÃ¼ntÃ¼le",
    },
  },
  Mask: {
    Name: "Maske",
    Page: {
      Title: "Ã–nceden TanÄ±mlÄ± Karakter Maskeleri",
      SubTitle: (count: number) =>
        `${count} tane Ã¶nceden tanÄ±mlÄ± karakter tanÄ±mÄ±`,
      Search: "Karakter maskesi ara",
      Create: "Yeni oluÅŸtur",
    },
    Item: {
      Info: (count: number) => `${count} tane Ã¶nceden tanÄ±mlÄ± sohbet iÃ§eriyor`,
      Chat: "Sohbet",
      View: "GÃ¶rÃ¼ntÃ¼le",
      Edit: "DÃ¼zenle",
      Delete: "Sil",
      DeleteConfirm: "Silmek istediÄŸinizden emin misiniz?",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `Ã–nceden TanÄ±mlÄ± Maskeyi DÃ¼zenle ${readonly ? " (Salt Okunur)" : ""}`,
      Download: "Ã–nceden TanÄ±mlÄ± Maskeyi Ä°ndir",
      Clone: "Ã–nceden TanÄ±mlÄ± Maskeyi Kopyala",
    },
    Config: {
      Avatar: "Karakter Profil Resmi",
      Name: "Karakter AdÄ±",
      Sync: {
        Title: "KÃ¼resel AyarlarÄ± Kullan",
        SubTitle: "Mevcut sohbet kÃ¼resel model ayarlarÄ±nÄ± mÄ± kullanacak?",
        Confirm:
          "Mevcut sohbetin Ã¶zelleÅŸtirilmiÅŸ ayarlarÄ± otomatik olarak Ã¼zerine yazÄ±lacaktÄ±r, kÃ¼resel ayarlarÄ± etkinleÅŸtirmek istediÄŸinizden emin misiniz?",
      },
      HideContext: {
        Title: "Ã–nceden TanÄ±mlÄ± Sohbetleri Gizle",
        SubTitle:
          "GizlendiÄŸinde, Ã¶nceden tanÄ±mlÄ± sohbetler sohbet ekranÄ±nda gÃ¶rÃ¼nmeyecek",
      },
      Share: {
        Title: "Bu Maskeyi PaylaÅŸ",
        SubTitle: "Bu maskenin doÄŸrudan baÄŸlantÄ±sÄ±nÄ± oluÅŸtur",
        Action: "BaÄŸlantÄ±yÄ± Kopyala",
      },
    },
  },
  NewChat: {
    Return: "Geri dÃ¶n",
    Skip: "DoÄŸrudan baÅŸla",
    NotShow: "Bir daha gÃ¶sterme",
    ConfirmNoShow:
      "Devre dÄ±ÅŸÄ± bÄ±rakmak istediÄŸinizden emin misiniz? Devre dÄ±ÅŸÄ± bÄ±raktÄ±ktan sonra ayarlardan tekrar etkinleÅŸtirebilirsiniz.",
    Title: "Bir Maske SeÃ§in",
    SubTitle:
      "Åžimdi baÅŸlayÄ±n ve maskenin arkasÄ±ndaki zihinle etkileÅŸimde bulunun",
    More: "TÃ¼mÃ¼nÃ¼ GÃ¶r",
  },

  URLCommand: {
    Code: "BaÄŸlantÄ±da eriÅŸim kodu bulundu, otomatik olarak doldurulsun mu?",
    Settings:
      "BaÄŸlantÄ±da Ã¶nceden tanÄ±mlÄ± ayarlar bulundu, otomatik olarak doldurulsun mu?",
  },

  UI: {
    Confirm: "Onayla",
    Cancel: "Ä°ptal et",
    Close: "Kapat",
    Create: "Yeni oluÅŸtur",
    Edit: "DÃ¼zenle",
    Export: "DÄ±ÅŸa Aktar",
    Import: "Ä°Ã§e Aktar",
    Sync: "Senkronize et",
    Config: "YapÄ±landÄ±r",
  },
  Exporter: {
    Description: {
      Title: "Sadece baÄŸlam temizlendikten sonraki mesajlar gÃ¶sterilecektir",
    },
    Model: "Model",
    Messages: "Mesajlar",
    Topic: "Konu",
    Time: "Zaman",
  },
};

export default tr;

