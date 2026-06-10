import { getClientConfig } from "../config/client";
import { SubmitKey } from "../store/config";
import { SAAS_CHAT_UTM_URL } from "@/app/constant";

const isApp = !!getClientConfig()?.isApp;

const cn = {
  WIP: "è¯¥åŠŸèƒ½ä»åœ¨å¼€å‘ä¸­â€¦â€¦",
  Error: {
    Unauthorized: isApp
      ? `ðŸ˜† å¯¹è¯é‡åˆ°äº†ä¸€äº›é—®é¢˜ï¼Œä¸ç”¨æ…Œ:
       \\ 1ï¸âƒ£ æƒ³è¦é›¶é…ç½®å¼€ç®±å³ç”¨ï¼Œ[ç‚¹å‡»è¿™é‡Œç«‹åˆ»å¼€å¯å¯¹è¯ ðŸš€](${SAAS_CHAT_UTM_URL})
       \\ 2ï¸âƒ£ å¦‚æžœä½ æƒ³æ¶ˆè€—è‡ªå·±çš„ OpenAI èµ„æºï¼Œç‚¹å‡»[è¿™é‡Œ](/#/settings)ä¿®æ”¹è®¾ç½® âš™ï¸`
      : `ðŸ˜† å¯¹è¯é‡åˆ°äº†ä¸€äº›é—®é¢˜ï¼Œä¸ç”¨æ…Œ:
       \ 1ï¸âƒ£ æƒ³è¦é›¶é…ç½®å¼€ç®±å³ç”¨ï¼Œ[ç‚¹å‡»è¿™é‡Œç«‹åˆ»å¼€å¯å¯¹è¯ ðŸš€](${SAAS_CHAT_UTM_URL})
       \ 2ï¸âƒ£ å¦‚æžœä½ æ­£åœ¨ä½¿ç”¨ç§æœ‰éƒ¨ç½²ç‰ˆæœ¬ï¼Œç‚¹å‡»[è¿™é‡Œ](/#/auth)è¾“å…¥è®¿é—®ç§˜é’¥ ðŸ”‘
       \ 3ï¸âƒ£ å¦‚æžœä½ æƒ³æ¶ˆè€—è‡ªå·±çš„ OpenAI èµ„æºï¼Œç‚¹å‡»[è¿™é‡Œ](/#/settings)ä¿®æ”¹è®¾ç½® âš™ï¸
       `,
  },
  Auth: {
    Return: "è¿”å›ž",
    Title: "éœ€è¦å¯†ç ",
    Tips: "ç®¡ç†å‘˜å¼€å¯äº†å¯†ç éªŒè¯ï¼Œè¯·åœ¨ä¸‹æ–¹å¡«å…¥è®¿é—®ç ",
    SubTips: "æˆ–è€…è¾“å…¥ä½ çš„ OpenAI æˆ– Google AI å¯†é’¥",
    Input: "åœ¨æ­¤å¤„å¡«å†™è®¿é—®ç ",
    Confirm: "ç¡®è®¤",
    Later: "ç¨åŽå†è¯´",
    SaasTips: "é…ç½®å¤ªéº»çƒ¦ï¼Œæƒ³è¦ç«‹å³ä½¿ç”¨",
    TopTips:
      "ðŸ¥³ HeyChat AI é¦–å‘ä¼˜æƒ ï¼Œç«‹åˆ»è§£é” OpenAI o1, GPT-4o, Claude-3.5 ç­‰æœ€æ–°å¤§æ¨¡åž‹",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} æ¡å¯¹è¯`,
  },
  Chat: {
    SubTitle: (count: number) => `å…± ${count} æ¡å¯¹è¯`,
    EditMessage: {
      Title: "ç¼–è¾‘æ¶ˆæ¯è®°å½•",
      Topic: {
        Title: "èŠå¤©ä¸»é¢˜",
        SubTitle: "æ›´æ”¹å½“å‰èŠå¤©ä¸»é¢˜",
      },
    },
    Actions: {
      ChatList: "æŸ¥çœ‹æ¶ˆæ¯åˆ—è¡¨",
      CompressedHistory: "æŸ¥çœ‹åŽ‹ç¼©åŽçš„åŽ†å² Prompt",
      Export: "å¯¼å‡ºèŠå¤©è®°å½•",
      Copy: "å¤åˆ¶",
      Stop: "åœæ­¢",
      Retry: "é‡è¯•",
      Pin: "å›ºå®š",
      PinToastContent: "å·²å°† 1 æ¡å¯¹è¯å›ºå®šè‡³é¢„è®¾æç¤ºè¯",
      PinToastAction: "æŸ¥çœ‹",
      Delete: "åˆ é™¤",
      Edit: "ç¼–è¾‘",
      FullScreen: "å…¨å±",
      RefreshTitle: "åˆ·æ–°æ ‡é¢˜",
      RefreshToast: "å·²å‘é€åˆ·æ–°æ ‡é¢˜è¯·æ±‚",
      Speech: "æœ—è¯»",
      StopSpeech: "åœæ­¢",
    },
    Commands: {
      new: "æ–°å»ºèŠå¤©",
      newm: "ä»Žé¢å…·æ–°å»ºèŠå¤©",
      next: "ä¸‹ä¸€ä¸ªèŠå¤©",
      prev: "ä¸Šä¸€ä¸ªèŠå¤©",
      clear: "æ¸…é™¤ä¸Šä¸‹æ–‡",
      fork: "å¤åˆ¶èŠå¤©",
      del: "åˆ é™¤èŠå¤©",
    },
    InputActions: {
      Stop: "åœæ­¢å“åº”",
      ToBottom: "æ»šåˆ°æœ€æ–°",
      Theme: {
        auto: "è‡ªåŠ¨ä¸»é¢˜",
        light: "äº®è‰²æ¨¡å¼",
        dark: "æ·±è‰²æ¨¡å¼",
      },
      Prompt: "å¿«æ·æŒ‡ä»¤",
      Masks: "æ‰€æœ‰é¢å…·",
      Clear: "æ¸…é™¤èŠå¤©",
      Settings: "å¯¹è¯è®¾ç½®",
      UploadImage: "ä¸Šä¼ å›¾ç‰‡",
    },
    Rename: "é‡å‘½åå¯¹è¯",
    Typing: "æ­£åœ¨è¾“å…¥â€¦",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey} å‘é€`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += "ï¼ŒShift + Enter æ¢è¡Œ";
      }
      return inputHints + "ï¼Œ/ è§¦å‘è¡¥å…¨ï¼Œ: è§¦å‘å‘½ä»¤";
    },
    Send: "å‘é€",
    StartSpeak: "è¯´è¯",
    StopSpeak: "åœæ­¢",
    Config: {
      Reset: "æ¸…é™¤è®°å¿†",
      SaveAs: "å­˜ä¸ºé¢å…·",
    },
    IsContext: "é¢„è®¾æç¤ºè¯",
    ShortcutKey: {
      Title: "é”®ç›˜å¿«æ·æ–¹å¼",
      newChat: "æ‰“å¼€æ–°èŠå¤©",
      focusInput: "èšç„¦è¾“å…¥æ¡†",
      copyLastMessage: "å¤åˆ¶æœ€åŽä¸€ä¸ªå›žå¤",
      copyLastCode: "å¤åˆ¶æœ€åŽä¸€ä¸ªä»£ç å—",
      showShortcutKey: "æ˜¾ç¤ºå¿«æ·æ–¹å¼",
      clearContext: "æ¸…é™¤ä¸Šä¸‹æ–‡",
    },
  },
  Export: {
    Title: "åˆ†äº«èŠå¤©è®°å½•",
    Copy: "å…¨éƒ¨å¤åˆ¶",
    Download: "ä¸‹è½½æ–‡ä»¶",
    Share: "åˆ†äº«åˆ° ShareGPT",
    MessageFromYou: "ç”¨æˆ·",
    MessageFromChatGPT: "ChatGPT",
    Format: {
      Title: "å¯¼å‡ºæ ¼å¼",
      SubTitle: "å¯ä»¥å¯¼å‡º Markdown æ–‡æœ¬æˆ–è€… PNG å›¾ç‰‡",
    },
    IncludeContext: {
      Title: "åŒ…å«é¢å…·ä¸Šä¸‹æ–‡",
      SubTitle: "æ˜¯å¦åœ¨æ¶ˆæ¯ä¸­å±•ç¤ºé¢å…·ä¸Šä¸‹æ–‡",
    },
    Steps: {
      Select: "é€‰å–",
      Preview: "é¢„è§ˆ",
    },
    Image: {
      Toast: "æ­£åœ¨ç”Ÿæˆæˆªå›¾",
      Modal: "é•¿æŒ‰æˆ–å³é”®ä¿å­˜å›¾ç‰‡",
    },
    Artifacts: {
      Title: "åˆ†äº«é¡µé¢",
      Error: "åˆ†äº«å¤±è´¥",
    },
  },
  Select: {
    Search: "æœç´¢æ¶ˆæ¯",
    All: "é€‰å–å…¨éƒ¨",
    Latest: "æœ€è¿‘å‡ æ¡",
    Clear: "æ¸…é™¤é€‰ä¸­",
  },
  Memory: {
    Title: "åŽ†å²æ‘˜è¦",
    EmptyContent: "å¯¹è¯å†…å®¹è¿‡çŸ­ï¼Œæ— éœ€æ€»ç»“",
    Send: "è‡ªåŠ¨åŽ‹ç¼©èŠå¤©è®°å½•å¹¶ä½œä¸ºä¸Šä¸‹æ–‡å‘é€",
    Copy: "å¤åˆ¶æ‘˜è¦",
    Reset: "[unused]",
    ResetConfirm: "ç¡®è®¤æ¸…ç©ºåŽ†å²æ‘˜è¦ï¼Ÿ",
  },
  Home: {
    NewChat: "æ–°çš„èŠå¤©",
    DeleteChat: "ç¡®è®¤åˆ é™¤é€‰ä¸­çš„å¯¹è¯ï¼Ÿ",
    DeleteToast: "å·²åˆ é™¤ä¼šè¯",
    Revert: "æ’¤é”€",
  },
  Settings: {
    Title: "è®¾ç½®",
    SubTitle: "æ‰€æœ‰è®¾ç½®é€‰é¡¹",
    ShowPassword: "æ˜¾ç¤ºå¯†ç ",

    Danger: {
      Reset: {
        Title: "é‡ç½®æ‰€æœ‰è®¾ç½®",
        SubTitle: "é‡ç½®æ‰€æœ‰è®¾ç½®é¡¹å›žé»˜è®¤å€¼",
        Action: "ç«‹å³é‡ç½®",
        Confirm: "ç¡®è®¤é‡ç½®æ‰€æœ‰è®¾ç½®ï¼Ÿ",
      },
      Clear: {
        Title: "æ¸…é™¤æ‰€æœ‰æ•°æ®",
        SubTitle: "æ¸…é™¤æ‰€æœ‰èŠå¤©ã€è®¾ç½®æ•°æ®",
        Action: "ç«‹å³æ¸…é™¤",
        Confirm: "ç¡®è®¤æ¸…é™¤æ‰€æœ‰èŠå¤©ã€è®¾ç½®æ•°æ®ï¼Ÿ",
      },
    },
    Lang: {
      Name: "Language", // æ³¨æ„ï¼šå¦‚æžœè¦æ·»åŠ æ–°çš„ç¿»è¯‘ï¼Œè¯·ä¸è¦ç¿»è¯‘æ­¤å€¼ï¼Œå°†å®ƒä¿ç•™ä¸º `Language`
      All: "æ‰€æœ‰è¯­è¨€",
    },
    Avatar: "å¤´åƒ",
    FontSize: {
      Title: "å­—ä½“å¤§å°",
      SubTitle: "èŠå¤©å†…å®¹çš„å­—ä½“å¤§å°",
    },
    FontFamily: {
      Title: "èŠå¤©å­—ä½“",
      SubTitle: "èŠå¤©å†…å®¹çš„å­—ä½“ï¼Œè‹¥ç½®ç©ºåˆ™åº”ç”¨å…¨å±€é»˜è®¤å­—ä½“",
      Placeholder: "å­—ä½“åç§°",
    },
    InjectSystemPrompts: {
      Title: "æ³¨å…¥ç³»ç»Ÿçº§æç¤ºä¿¡æ¯",
      SubTitle: "å¼ºåˆ¶ç»™æ¯æ¬¡è¯·æ±‚çš„æ¶ˆæ¯åˆ—è¡¨å¼€å¤´æ·»åŠ ä¸€ä¸ªæ¨¡æ‹Ÿ ChatGPT çš„ç³»ç»Ÿæç¤º",
    },
    InputTemplate: {
      Title: "ç”¨æˆ·è¾“å…¥é¢„å¤„ç†",
      SubTitle: "ç”¨æˆ·æœ€æ–°çš„ä¸€æ¡æ¶ˆæ¯ä¼šå¡«å……åˆ°æ­¤æ¨¡æ¿",
    },

    Update: {
      Version: (x: string) => `å½“å‰ç‰ˆæœ¬ï¼š${x}`,
      IsLatest: "å·²æ˜¯æœ€æ–°ç‰ˆæœ¬",
      CheckUpdate: "æ£€æŸ¥æ›´æ–°",
      IsChecking: "æ­£åœ¨æ£€æŸ¥æ›´æ–°...",
      FoundUpdate: (x: string) => `å‘çŽ°æ–°ç‰ˆæœ¬ï¼š${x}`,
      GoToUpdate: "å‰å¾€æ›´æ–°",
      Success: "æ›´æ–°æˆåŠŸï¼",
      Failed: "æ›´æ–°å¤±è´¥",
    },
    SendKey: "å‘é€é”®",
    Theme: "ä¸»é¢˜",
    TightBorder: "æ— è¾¹æ¡†æ¨¡å¼",
    SendPreviewBubble: {
      Title: "é¢„è§ˆæ°”æ³¡",
      SubTitle: "åœ¨é¢„è§ˆæ°”æ³¡ä¸­é¢„è§ˆ Markdown å†…å®¹",
    },
    AutoGenerateTitle: {
      Title: "è‡ªåŠ¨ç”Ÿæˆæ ‡é¢˜",
      SubTitle: "æ ¹æ®å¯¹è¯å†…å®¹ç”Ÿæˆåˆé€‚çš„æ ‡é¢˜",
    },
    Sync: {
      CloudState: "äº‘ç«¯æ•°æ®",
      NotSyncYet: "è¿˜æ²¡æœ‰è¿›è¡Œè¿‡åŒæ­¥",
      Success: "åŒæ­¥æˆåŠŸ",
      Fail: "åŒæ­¥å¤±è´¥",

      Config: {
        Modal: {
          Title: "é…ç½®äº‘åŒæ­¥",
          Check: "æ£€æŸ¥å¯ç”¨æ€§",
        },
        SyncType: {
          Title: "åŒæ­¥ç±»åž‹",
          SubTitle: "é€‰æ‹©å–œçˆ±çš„åŒæ­¥æœåŠ¡å™¨",
        },
        Proxy: {
          Title: "å¯ç”¨ä»£ç†",
          SubTitle: "åœ¨æµè§ˆå™¨ä¸­åŒæ­¥æ—¶ï¼Œå¿…é¡»å¯ç”¨ä»£ç†ä»¥é¿å…è·¨åŸŸé™åˆ¶",
        },
        ProxyUrl: {
          Title: "ä»£ç†åœ°å€",
          SubTitle: "ä»…é€‚ç”¨äºŽæœ¬é¡¹ç›®è‡ªå¸¦çš„è·¨åŸŸä»£ç†",
        },

        WebDav: {
          Endpoint: "WebDAV åœ°å€",
          UserName: "ç”¨æˆ·å",
          Password: "å¯†ç ",
        },

        UpStash: {
          Endpoint: "UpStash Redis REST Url",
          UserName: "å¤‡ä»½åç§°",
          Password: "UpStash Redis REST Token",
        },
      },

      LocalState: "æœ¬åœ°æ•°æ®",
      Overview: (overview: any) => {
        return `${overview.chat} æ¬¡å¯¹è¯ï¼Œ${overview.message} æ¡æ¶ˆæ¯ï¼Œ${overview.prompt} æ¡æç¤ºè¯ï¼Œ${overview.mask} ä¸ªé¢å…·`;
      },
      ImportFailed: "å¯¼å…¥å¤±è´¥",
    },
    Mask: {
      Splash: {
        Title: "é¢å…·å¯åŠ¨é¡µ",
        SubTitle: "æ–°å»ºèŠå¤©æ—¶ï¼Œå±•ç¤ºé¢å…·å¯åŠ¨é¡µ",
      },
      Builtin: {
        Title: "éšè—å†…ç½®é¢å…·",
        SubTitle: "åœ¨æ‰€æœ‰é¢å…·åˆ—è¡¨ä¸­éšè—å†…ç½®é¢å…·",
      },
    },
    Prompt: {
      Disable: {
        Title: "ç¦ç”¨æç¤ºè¯è‡ªåŠ¨è¡¥å…¨",
        SubTitle: "åœ¨è¾“å…¥æ¡†å¼€å¤´è¾“å…¥ / å³å¯è§¦å‘è‡ªåŠ¨è¡¥å…¨",
      },
      List: "è‡ªå®šä¹‰æç¤ºè¯åˆ—è¡¨",
      ListCount: (builtin: number, custom: number) =>
        `å†…ç½® ${builtin} æ¡ï¼Œç”¨æˆ·å®šä¹‰ ${custom} æ¡`,
      Edit: "ç¼–è¾‘",
      Modal: {
        Title: "æç¤ºè¯åˆ—è¡¨",
        Add: "æ–°å»º",
        Search: "æœç´¢æç¤ºè¯",
      },
      EditModal: {
        Title: "ç¼–è¾‘æç¤ºè¯",
      },
    },
    HistoryCount: {
      Title: "é™„å¸¦åŽ†å²æ¶ˆæ¯æ•°",
      SubTitle: "æ¯æ¬¡è¯·æ±‚æºå¸¦çš„åŽ†å²æ¶ˆæ¯æ•°",
    },
    CompressThreshold: {
      Title: "åŽ†å²æ¶ˆæ¯é•¿åº¦åŽ‹ç¼©é˜ˆå€¼",
      SubTitle: "å½“æœªåŽ‹ç¼©çš„åŽ†å²æ¶ˆæ¯è¶…è¿‡è¯¥å€¼æ—¶ï¼Œå°†è¿›è¡ŒåŽ‹ç¼©",
    },

    Usage: {
      Title: "ä½™é¢æŸ¥è¯¢",
      SubTitle(used: any, total: any) {
        return `æœ¬æœˆå·²ä½¿ç”¨ $${used}ï¼Œè®¢é˜…æ€»é¢ $${total}`;
      },
      IsChecking: "æ­£åœ¨æ£€æŸ¥â€¦",
      Check: "é‡æ–°æ£€æŸ¥",
      NoAccess: "è¾“å…¥ API Key æˆ–è®¿é—®å¯†ç æŸ¥çœ‹ä½™é¢",
    },

    Access: {
      SaasStart: {
        Title: "ä½¿ç”¨ HeyChat AI",
        Label: "ï¼ˆæ€§ä»·æ¯”æœ€é«˜çš„æ–¹æ¡ˆï¼‰",
        SubTitle:
          "ç”± HeyChat å®˜æ–¹ç»´æŠ¤, é›¶é…ç½®å¼€ç®±å³ç”¨ï¼Œæ”¯æŒ OpenAI o1, GPT-4o, Claude-3.5 ç­‰æœ€æ–°å¤§æ¨¡åž‹",
        ChatNow: "ç«‹åˆ»å¯¹è¯",
      },
      AccessCode: {
        Title: "è®¿é—®å¯†ç ",
        SubTitle: "ç®¡ç†å‘˜å·²å¼€å¯åŠ å¯†è®¿é—®",
        Placeholder: "è¯·è¾“å…¥è®¿é—®å¯†ç ",
      },
      CustomEndpoint: {
        Title: "è‡ªå®šä¹‰æŽ¥å£",
        SubTitle: "æ˜¯å¦ä½¿ç”¨è‡ªå®šä¹‰ Azure æˆ– OpenAI æœåŠ¡",
      },
      Provider: {
        Title: "æ¨¡åž‹æœåŠ¡å•†",
        SubTitle: "åˆ‡æ¢ä¸åŒçš„æœåŠ¡å•†",
      },
      OpenAI: {
        ApiKey: {
          Title: "API Key",
          SubTitle: "ä½¿ç”¨è‡ªå®šä¹‰ OpenAI Key ç»•è¿‡å¯†ç è®¿é—®é™åˆ¶",
          Placeholder: "OpenAI API Key",
        },

        Endpoint: {
          Title: "æŽ¥å£åœ°å€",
          SubTitle: "é™¤é»˜è®¤åœ°å€å¤–ï¼Œå¿…é¡»åŒ…å« http(s)://",
        },
      },
      Azure: {
        ApiKey: {
          Title: "æŽ¥å£å¯†é’¥",
          SubTitle: "ä½¿ç”¨è‡ªå®šä¹‰ Azure Key ç»•è¿‡å¯†ç è®¿é—®é™åˆ¶",
          Placeholder: "Azure API Key",
        },

        Endpoint: {
          Title: "æŽ¥å£åœ°å€",
          SubTitle: "æ ·ä¾‹ï¼š",
        },

        ApiVerion: {
          Title: "æŽ¥å£ç‰ˆæœ¬ (azure api version)",
          SubTitle: "é€‰æ‹©æŒ‡å®šçš„éƒ¨åˆ†ç‰ˆæœ¬",
        },
      },
      Anthropic: {
        ApiKey: {
          Title: "æŽ¥å£å¯†é’¥",
          SubTitle: "ä½¿ç”¨è‡ªå®šä¹‰ Anthropic Key ç»•è¿‡å¯†ç è®¿é—®é™åˆ¶",
          Placeholder: "Anthropic API Key",
        },

        Endpoint: {
          Title: "æŽ¥å£åœ°å€",
          SubTitle: "æ ·ä¾‹ï¼š",
        },

        ApiVerion: {
          Title: "æŽ¥å£ç‰ˆæœ¬ (claude api version)",
          SubTitle: "é€‰æ‹©ä¸€ä¸ªç‰¹å®šçš„ API ç‰ˆæœ¬è¾“å…¥",
        },
      },
      Google: {
        ApiKey: {
          Title: "API å¯†é’¥",
          SubTitle: "ä»Ž Google AI èŽ·å–æ‚¨çš„ API å¯†é’¥",
          Placeholder: "Google AI API KEY",
        },

        Endpoint: {
          Title: "ç»ˆç«¯åœ°å€",
          SubTitle: "ç¤ºä¾‹ï¼š",
        },

        ApiVersion: {
          Title: "API ç‰ˆæœ¬ï¼ˆä»…é€‚ç”¨äºŽ gemini-proï¼‰",
          SubTitle: "é€‰æ‹©ä¸€ä¸ªç‰¹å®šçš„ API ç‰ˆæœ¬",
        },
        GoogleSafetySettings: {
          Title: "Google å®‰å…¨è¿‡æ»¤çº§åˆ«",
          SubTitle: "è®¾ç½®å†…å®¹è¿‡æ»¤çº§åˆ«",
        },
      },
      Baidu: {
        ApiKey: {
          Title: "API Key",
          SubTitle: "ä½¿ç”¨è‡ªå®šä¹‰ Baidu API Key",
          Placeholder: "Baidu API Key",
        },
        SecretKey: {
          Title: "Secret Key",
          SubTitle: "ä½¿ç”¨è‡ªå®šä¹‰ Baidu Secret Key",
          Placeholder: "Baidu Secret Key",
        },
        Endpoint: {
          Title: "æŽ¥å£åœ°å€",
          SubTitle: "ä¸æ”¯æŒè‡ªå®šä¹‰å‰å¾€.envé…ç½®",
        },
      },
      Tencent: {
        ApiKey: {
          Title: "API Key",
          SubTitle: "ä½¿ç”¨è‡ªå®šä¹‰è…¾è®¯äº‘API Key",
          Placeholder: "Tencent API Key",
        },
        SecretKey: {
          Title: "Secret Key",
          SubTitle: "ä½¿ç”¨è‡ªå®šä¹‰è…¾è®¯äº‘Secret Key",
          Placeholder: "Tencent Secret Key",
        },
        Endpoint: {
          Title: "æŽ¥å£åœ°å€",
          SubTitle: "ä¸æ”¯æŒè‡ªå®šä¹‰å‰å¾€.envé…ç½®",
        },
      },
      ByteDance: {
        ApiKey: {
          Title: "æŽ¥å£å¯†é’¥",
          SubTitle: "ä½¿ç”¨è‡ªå®šä¹‰ ByteDance API Key",
          Placeholder: "ByteDance API Key",
        },
        Endpoint: {
          Title: "æŽ¥å£åœ°å€",
          SubTitle: "æ ·ä¾‹ï¼š",
        },
      },
      Alibaba: {
        ApiKey: {
          Title: "æŽ¥å£å¯†é’¥",
          SubTitle: "ä½¿ç”¨è‡ªå®šä¹‰é˜¿é‡Œäº‘API Key",
          Placeholder: "Alibaba Cloud API Key",
        },
        Endpoint: {
          Title: "æŽ¥å£åœ°å€",
          SubTitle: "æ ·ä¾‹ï¼š",
        },
      },
      Moonshot: {
        ApiKey: {
          Title: "æŽ¥å£å¯†é’¥",
          SubTitle: "ä½¿ç”¨è‡ªå®šä¹‰æœˆä¹‹æš—é¢API Key",
          Placeholder: "Moonshot API Key",
        },
        Endpoint: {
          Title: "æŽ¥å£åœ°å€",
          SubTitle: "æ ·ä¾‹ï¼š",
        },
      },
      DeepSeek: {
        ApiKey: {
          Title: "æŽ¥å£å¯†é’¥",
          SubTitle: "ä½¿ç”¨è‡ªå®šä¹‰DeepSeek API Key",
          Placeholder: "DeepSeek API Key",
        },
        Endpoint: {
          Title: "æŽ¥å£åœ°å€",
          SubTitle: "æ ·ä¾‹ï¼š",
        },
      },
      XAI: {
        ApiKey: {
          Title: "æŽ¥å£å¯†é’¥",
          SubTitle: "ä½¿ç”¨è‡ªå®šä¹‰XAI API Key",
          Placeholder: "XAI API Key",
        },
        Endpoint: {
          Title: "æŽ¥å£åœ°å€",
          SubTitle: "æ ·ä¾‹ï¼š",
        },
      },
      ChatGLM: {
        ApiKey: {
          Title: "æŽ¥å£å¯†é’¥",
          SubTitle: "ä½¿ç”¨è‡ªå®šä¹‰ ChatGLM API Key",
          Placeholder: "ChatGLM API Key",
        },
        Endpoint: {
          Title: "æŽ¥å£åœ°å€",
          SubTitle: "æ ·ä¾‹ï¼š",
        },
      },
      SiliconFlow: {
        ApiKey: {
          Title: "æŽ¥å£å¯†é’¥",
          SubTitle: "ä½¿ç”¨è‡ªå®šä¹‰ç¡…åŸºæµåŠ¨ API Key",
          Placeholder: "ç¡…åŸºæµåŠ¨ API Key",
        },
        Endpoint: {
          Title: "æŽ¥å£åœ°å€",
          SubTitle: "æ ·ä¾‹ï¼š",
        },
      },
      Stability: {
        ApiKey: {
          Title: "æŽ¥å£å¯†é’¥",
          SubTitle: "ä½¿ç”¨è‡ªå®šä¹‰ Stability API Key",
          Placeholder: "Stability API Key",
        },
        Endpoint: {
          Title: "æŽ¥å£åœ°å€",
          SubTitle: "æ ·ä¾‹ï¼š",
        },
      },
      Iflytek: {
        ApiKey: {
          Title: "ApiKey",
          SubTitle: "ä»Žè®¯é£žæ˜Ÿç«æŽ§åˆ¶å°èŽ·å–çš„ APIKey",
          Placeholder: "APIKey",
        },
        ApiSecret: {
          Title: "ApiSecret",
          SubTitle: "ä»Žè®¯é£žæ˜Ÿç«æŽ§åˆ¶å°èŽ·å–çš„ APISecret",
          Placeholder: "APISecret",
        },
        Endpoint: {
          Title: "æŽ¥å£åœ°å€",
          SubTitle: "æ ·ä¾‹ï¼š",
        },
      },
      CustomModel: {
        Title: "è‡ªå®šä¹‰æ¨¡åž‹å",
        SubTitle: "å¢žåŠ è‡ªå®šä¹‰æ¨¡åž‹å¯é€‰é¡¹ï¼Œä½¿ç”¨è‹±æ–‡é€—å·éš”å¼€",
      },
      AI302: {
        ApiKey: {
          Title: "æŽ¥å£å¯†é’¥",
          SubTitle: "ä½¿ç”¨è‡ªå®šä¹‰302.AI API Key",
          Placeholder: "302.AI API Key",
        },
        Endpoint: {
          Title: "æŽ¥å£åœ°å€",
          SubTitle: "æ ·ä¾‹ï¼š",
        },
      },
      OpenRouter: {
        ApiKey: {
          Title: "OpenRouter API Key",
          SubTitle: "使用自定义 OpenRouter API Key",
          Placeholder: "OpenRouter API Key",
        },
        Endpoint: {
          Title: "接口地址",
          SubTitle: "样例：",
        },
      },
    },

    Model: "æ¨¡åž‹ (model)",
    CompressModel: {
      Title: "å¯¹è¯æ‘˜è¦æ¨¡åž‹",
      SubTitle: "ç”¨äºŽåŽ‹ç¼©åŽ†å²è®°å½•ã€ç”Ÿæˆå¯¹è¯æ ‡é¢˜çš„æ¨¡åž‹",
    },
    Temperature: {
      Title: "éšæœºæ€§ (temperature)",
      SubTitle: "å€¼è¶Šå¤§ï¼Œå›žå¤è¶Šéšæœº",
    },
    TopP: {
      Title: "æ ¸é‡‡æ · (top_p)",
      SubTitle: "ä¸Žéšæœºæ€§ç±»ä¼¼ï¼Œä½†ä¸è¦å’Œéšæœºæ€§ä¸€èµ·æ›´æ”¹",
    },
    MaxTokens: {
      Title: "å•æ¬¡å›žå¤é™åˆ¶ (max_tokens)",
      SubTitle: "å•æ¬¡äº¤äº’æ‰€ç”¨çš„æœ€å¤§ Token æ•°",
    },
    PresencePenalty: {
      Title: "è¯é¢˜æ–°é²œåº¦ (presence_penalty)",
      SubTitle: "å€¼è¶Šå¤§ï¼Œè¶Šæœ‰å¯èƒ½æ‰©å±•åˆ°æ–°è¯é¢˜",
    },
    FrequencyPenalty: {
      Title: "é¢‘çŽ‡æƒ©ç½šåº¦ (frequency_penalty)",
      SubTitle: "å€¼è¶Šå¤§ï¼Œè¶Šæœ‰å¯èƒ½é™ä½Žé‡å¤å­—è¯",
    },
    TTS: {
      Enable: {
        Title: "å¯ç”¨æ–‡æœ¬è½¬è¯­éŸ³",
        SubTitle: "å¯ç”¨æ–‡æœ¬ç”Ÿæˆè¯­éŸ³æœåŠ¡",
      },
      Autoplay: {
        Title: "å¯ç”¨è‡ªåŠ¨æœ—è¯»",
        SubTitle: "è‡ªåŠ¨ç”Ÿæˆè¯­éŸ³å¹¶æ’­æ”¾ï¼Œéœ€å…ˆå¼€å¯æ–‡æœ¬è½¬è¯­éŸ³å¼€å…³",
      },
      Model: "æ¨¡åž‹",
      Engine: "è½¬æ¢å¼•æ“Ž",
      Voice: {
        Title: "å£°éŸ³",
        SubTitle: "ç”Ÿæˆè¯­éŸ³æ—¶ä½¿ç”¨çš„å£°éŸ³",
      },
      Speed: {
        Title: "é€Ÿåº¦",
        SubTitle: "ç”Ÿæˆè¯­éŸ³çš„é€Ÿåº¦",
      },
    },
    Realtime: {
      Enable: {
        Title: "å®žæ—¶èŠå¤©",
        SubTitle: "å¼€å¯å®žæ—¶èŠå¤©åŠŸèƒ½",
      },
      Provider: {
        Title: "æ¨¡åž‹æœåŠ¡å•†",
        SubTitle: "åˆ‡æ¢ä¸åŒçš„æœåŠ¡å•†",
      },
      Model: {
        Title: "æ¨¡åž‹",
        SubTitle: "é€‰æ‹©ä¸€ä¸ªæ¨¡åž‹",
      },
      ApiKey: {
        Title: "API Key",
        SubTitle: "API Key",
        Placeholder: "API Key",
      },
      Azure: {
        Endpoint: {
          Title: "æŽ¥å£åœ°å€",
          SubTitle: "æŽ¥å£åœ°å€",
        },
        Deployment: {
          Title: "éƒ¨ç½²åç§°",
          SubTitle: "éƒ¨ç½²åç§°",
        },
      },
      Temperature: {
        Title: "éšæœºæ€§ (temperature)",
        SubTitle: "å€¼è¶Šå¤§ï¼Œå›žå¤è¶Šéšæœº",
      },
    },
  },
  Store: {
    DefaultTopic: "æ–°çš„èŠå¤©",
    BotHello: "æœ‰ä»€ä¹ˆå¯ä»¥å¸®ä½ çš„å—",
    Error: "å‡ºé”™äº†ï¼Œç¨åŽé‡è¯•å§",
    Prompt: {
      History: (content: string) => "è¿™æ˜¯åŽ†å²èŠå¤©æ€»ç»“ä½œä¸ºå‰æƒ…æè¦ï¼š" + content,
      Topic:
        "ä½¿ç”¨å››åˆ°äº”ä¸ªå­—ç›´æŽ¥è¿”å›žè¿™å¥è¯çš„ç®€è¦ä¸»é¢˜ï¼Œä¸è¦è§£é‡Šã€ä¸è¦æ ‡ç‚¹ã€ä¸è¦è¯­æ°”è¯ã€ä¸è¦å¤šä½™æ–‡æœ¬ï¼Œä¸è¦åŠ ç²—ï¼Œå¦‚æžœæ²¡æœ‰ä¸»é¢˜ï¼Œè¯·ç›´æŽ¥è¿”å›žâ€œé—²èŠâ€",
      Summarize:
        "ç®€è¦æ€»ç»“ä¸€ä¸‹å¯¹è¯å†…å®¹ï¼Œç”¨ä½œåŽç»­çš„ä¸Šä¸‹æ–‡æç¤º promptï¼ŒæŽ§åˆ¶åœ¨ 200 å­—ä»¥å†…",
    },
  },
  Copy: {
    Success: "å·²å†™å…¥å‰ªè´´æ¿",
    Failed: "å¤åˆ¶å¤±è´¥ï¼Œè¯·èµ‹äºˆå‰ªè´´æ¿æƒé™",
  },
  Download: {
    Success: "å†…å®¹å·²ä¸‹è½½åˆ°æ‚¨çš„ç›®å½•ã€‚",
    Failed: "ä¸‹è½½å¤±è´¥ã€‚",
  },
  Context: {
    Toast: (x: any) => `åŒ…å« ${x} æ¡é¢„è®¾æç¤ºè¯`,
    Edit: "å½“å‰å¯¹è¯è®¾ç½®",
    Add: "æ–°å¢žä¸€æ¡å¯¹è¯",
    Clear: "ä¸Šä¸‹æ–‡å·²æ¸…é™¤",
    Revert: "æ¢å¤ä¸Šä¸‹æ–‡",
  },
  Mcp: {
    Name: "MCP",
  },
  FineTuned: {
    Sysmessage: "ä½ æ˜¯ä¸€ä¸ªåŠ©æ‰‹",
  },
  SearchChat: {
    Name: "æœç´¢èŠå¤©è®°å½•",
    Page: {
      Title: "æœç´¢èŠå¤©è®°å½•",
      Search: "è¾“å…¥æœç´¢å…³é”®è¯",
      NoResult: "æ²¡æœ‰æ‰¾åˆ°ç»“æžœ",
      NoData: "æ²¡æœ‰æ•°æ®",
      Loading: "åŠ è½½ä¸­",

      SubTitle: (count: number) => `æœç´¢åˆ° ${count} æ¡ç»“æžœ`,
    },
    Item: {
      View: "æŸ¥çœ‹",
    },
  },
  Plugin: {
    Name: "æ’ä»¶",
    Page: {
      Title: "æ’ä»¶",
      SubTitle: (count: number) => `${count} ä¸ªæ’ä»¶`,
      Search: "æœç´¢æ’ä»¶",
      Create: "æ–°å»º",
      Find: "æ‚¨å¯ä»¥åœ¨Githubä¸Šæ‰¾åˆ°ä¼˜ç§€çš„æ’ä»¶ï¼š",
    },
    Item: {
      Info: (count: number) => `${count} æ–¹æ³•`,
      View: "æŸ¥çœ‹",
      Edit: "ç¼–è¾‘",
      Delete: "åˆ é™¤",
      DeleteConfirm: "ç¡®è®¤åˆ é™¤ï¼Ÿ",
    },
    Auth: {
      None: "ä¸éœ€è¦æŽˆæƒ",
      Basic: "Basic",
      Bearer: "Bearer",
      Custom: "è‡ªå®šä¹‰",
      CustomHeader: "è‡ªå®šä¹‰å‚æ•°åç§°",
      Token: "Token",
      Proxy: "ä½¿ç”¨ä»£ç†",
      ProxyDescription: "ä½¿ç”¨ä»£ç†è§£å†³ CORS é”™è¯¯",
      Location: "ä½ç½®",
      LocationHeader: "Header",
      LocationQuery: "Query",
      LocationBody: "Body",
    },
    EditModal: {
      Title: (readonly: boolean) => `ç¼–è¾‘æ’ä»¶ ${readonly ? "ï¼ˆåªè¯»ï¼‰" : ""}`,
      Download: "ä¸‹è½½",
      Auth: "æŽˆæƒæ–¹å¼",
      Content: "OpenAPI Schema",
      Load: "ä»Žç½‘é¡µåŠ è½½",
      Method: "æ–¹æ³•",
      Error: "æ ¼å¼é”™è¯¯",
    },
  },
  NewChat: {
    Return: "è¿”å›ž",
    Skip: "ç›´æŽ¥å¼€å§‹",
    NotShow: "ä¸å†å±•ç¤º",
    ConfirmNoShow: "ç¡®è®¤ç¦ç”¨ï¼Ÿç¦ç”¨åŽå¯ä»¥éšæ—¶åœ¨è®¾ç½®ä¸­é‡æ–°å¯ç”¨ã€‚",
    Title: "æŒ‘é€‰ä¸€ä¸ªé¢å…·",
    SubTitle: "çŽ°åœ¨å¼€å§‹ï¼Œä¸Žé¢å…·èƒŒåŽçš„çµé­‚æ€ç»´ç¢°æ’ž",
    More: "æŸ¥çœ‹å…¨éƒ¨",
  },

  URLCommand: {
    Code: "æ£€æµ‹åˆ°é“¾æŽ¥ä¸­å·²ç»åŒ…å«è®¿é—®ç ï¼Œæ˜¯å¦è‡ªåŠ¨å¡«å…¥ï¼Ÿ",
    Settings: "æ£€æµ‹åˆ°é“¾æŽ¥ä¸­åŒ…å«äº†é¢„åˆ¶è®¾ç½®ï¼Œæ˜¯å¦è‡ªåŠ¨å¡«å…¥ï¼Ÿ",
  },

  UI: {
    Confirm: "ç¡®è®¤",
    Cancel: "å–æ¶ˆ",
    Close: "å…³é—­",
    Create: "æ–°å»º",
    Edit: "ç¼–è¾‘",
    Export: "å¯¼å‡º",
    Import: "å¯¼å…¥",
    Sync: "åŒæ­¥",
    Config: "é…ç½®",
  },
  Exporter: {
    Description: {
      Title: "åªæœ‰æ¸…é™¤ä¸Šä¸‹æ–‡ä¹‹åŽçš„æ¶ˆæ¯ä¼šè¢«å±•ç¤º",
    },
    Model: "æ¨¡åž‹",
    Messages: "æ¶ˆæ¯",
    Topic: "ä¸»é¢˜",
    Time: "æ—¶é—´",
  },
  SdPanel: {
    Prompt: "ç”»é¢æç¤º",
    NegativePrompt: "å¦å®šæç¤º",
    PleaseInput: (name: string) => `è¯·è¾“å…¥${name}`,
    AspectRatio: "æ¨ªçºµæ¯”",
    ImageStyle: "å›¾åƒé£Žæ ¼",
    OutFormat: "è¾“å‡ºæ ¼å¼",
    AIModel: "AIæ¨¡åž‹",
    ModelVersion: "æ¨¡åž‹ç‰ˆæœ¬",
    Submit: "æäº¤ç”Ÿæˆ",
    ParamIsRequired: (name: string) => `${name}ä¸èƒ½ä¸ºç©º`,
    Styles: {
      D3Model: "3Dæ¨¡åž‹",
      AnalogFilm: "æ¨¡æ‹Ÿç”µå½±",
      Anime: "åŠ¨æ¼«",
      Cinematic: "ç”µå½±é£Žæ ¼",
      ComicBook: "æ¼«ç”»ä¹¦",
      DigitalArt: "æ•°å­—è‰ºæœ¯",
      Enhance: "å¢žå¼º",
      FantasyArt: "å¹»æƒ³è‰ºæœ¯",
      Isometric: "ç­‰è§’",
      LineArt: "çº¿æ",
      LowPoly: "ä½Žå¤šè¾¹å½¢",
      ModelingCompound: "å»ºæ¨¡ææ–™",
      NeonPunk: "éœ“è™¹æœ‹å…‹",
      Origami: "æŠ˜çº¸",
      Photographic: "æ‘„å½±",
      PixelArt: "åƒç´ è‰ºæœ¯",
      TileTexture: "è´´å›¾",
    },
  },
  Sd: {
    SubTitle: (count: number) => `å…± ${count} æ¡ç»˜ç”»`,
    Actions: {
      Params: "æŸ¥çœ‹å‚æ•°",
      Copy: "å¤åˆ¶æç¤ºè¯",
      Delete: "åˆ é™¤",
      Retry: "é‡è¯•",
      ReturnHome: "è¿”å›žé¦–é¡µ",
      History: "æŸ¥çœ‹åŽ†å²",
    },
    EmptyRecord: "æš‚æ— ç»˜ç”»è®°å½•",
    Status: {
      Name: "çŠ¶æ€",
      Success: "æˆåŠŸ",
      Error: "å¤±è´¥",
      Wait: "ç­‰å¾…ä¸­",
      Running: "è¿è¡Œä¸­",
    },
    Danger: {
      Delete: "ç¡®è®¤åˆ é™¤ï¼Ÿ",
    },
    GenerateParams: "ç”Ÿæˆå‚æ•°",
    Detail: "è¯¦æƒ…",
  },
};

type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

export type LocaleType = typeof cn;
export type PartialLocaleType = DeepPartial<typeof cn>;

export default cn;

