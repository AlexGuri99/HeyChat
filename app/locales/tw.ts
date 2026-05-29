import { getClientConfig } from "../config/client";
import { SubmitKey } from "../store/config";
import { SAAS_CHAT_UTM_URL } from "@/app/constant";
const isApp = !!getClientConfig()?.isApp;

const tw = {
  WIP: "æ­¤åŠŸèƒ½ä»åœ¨é–‹ç™¼ä¸­â€¦â€¦",
  Error: {
    Unauthorized: isApp
      ? `ðŸ˜† å°è©±é‡åˆ°äº†ä¸€äº›å•é¡Œï¼Œä¸ç”¨æ…Œ:
    \\ 1ï¸âƒ£ æƒ³è¦ç„¡é ˆè¨­å®šé–‹ç®±å³ç”¨ï¼Œ[é»žé¸é€™è£¡ç«‹åˆ»é–‹å•Ÿå°è©± ðŸš€](${SAAS_CHAT_UTM_URL})
    \\ 2ï¸âƒ£ å¦‚æžœä½ æƒ³æ¶ˆè€—è‡ªå·±çš„ OpenAI è³‡æºï¼Œé»žé¸[é€™è£¡](/#/settings)ä¿®æ”¹è¨­å®š âš™ï¸`
      : `ðŸ˜† å°è©±é‡åˆ°äº†ä¸€äº›å•é¡Œï¼Œä¸ç”¨æ…Œ:
    \ 1ï¸âƒ£ æƒ³è¦ç„¡é ˆè¨­å®šé–‹ç®±å³ç”¨ï¼Œ[é»žé¸é€™è£¡ç«‹åˆ»é–‹å•Ÿå°è©± ðŸš€](${SAAS_CHAT_UTM_URL})
    \ 2ï¸âƒ£ å¦‚æžœä½ æ­£åœ¨ä½¿ç”¨ç§æœ‰éƒ¨ç½²ç‰ˆæœ¬ï¼Œé»žé¸[é€™è£¡](/#/auth)è¼¸å…¥å­˜å–é‡‘é‘° ðŸ”‘
    \ 3ï¸âƒ£ å¦‚æžœä½ æƒ³æ¶ˆè€—è‡ªå·±çš„ OpenAI è³‡æºï¼Œé»žé¸[é€™è£¡](/#/settings)ä¿®æ”¹è¨­å®š âš™ï¸
 `,
  },

  Auth: {
    Title: "éœ€è¦å¯†ç¢¼",
    Tips: "ç®¡ç†å“¡é–‹å•Ÿäº†å¯†ç¢¼é©—è­‰ï¼Œè«‹åœ¨ä¸‹æ–¹å¡«å…¥å­˜å–å¯†ç¢¼",
    SubTips: "æˆ–è€…è¼¸å…¥ä½ çš„ OpenAI æˆ– Google API é‡‘é‘°",
    Input: "åœ¨æ­¤è™•å¡«å¯«å­˜å–å¯†ç¢¼",
    Confirm: "ç¢ºèª",
    Later: "ç¨å€™å†èªª",
    Return: "è¿”å›ž",
    SaasTips: "è¨­å®šå¤ªéº»ç…©ï¼Œæƒ³è¦ç«‹å³ä½¿ç”¨",
    TopTips:
      "ðŸ¥³ HeyChat AI é¦–ç™¼å„ªæƒ ï¼Œç«‹åˆ»è§£éŽ– OpenAI o1, GPT-4o, Claude-3.5 ç­‰æœ€æ–°çš„å¤§åž‹èªžè¨€æ¨¡åž‹",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} å‰‡å°è©±`,
  },
  Chat: {
    SubTitle: (count: number) => `æ‚¨å·²ç¶“èˆ‡ ChatGPT é€²è¡Œäº† ${count} å‰‡å°è©±`,
    EditMessage: {
      Title: "ç·¨è¼¯è¨Šæ¯è¨˜éŒ„",
      Topic: {
        Title: "èŠå¤©ä¸»é¡Œ",
        SubTitle: "æ›´æ”¹ç›®å‰èŠå¤©ä¸»é¡Œ",
      },
    },
    Actions: {
      ChatList: "æª¢è¦–è¨Šæ¯åˆ—è¡¨",
      CompressedHistory: "æª¢è¦–å£“ç¸®å¾Œçš„æ­·å² Prompt",
      Export: "åŒ¯å‡ºèŠå¤©ç´€éŒ„",
      Copy: "è¤‡è£½",
      Stop: "åœæ­¢",
      Retry: "é‡è©¦",
      Pin: "å›ºå®š",
      PinToastContent: "å·²å°‡ 1 æ¢å°è©±å›ºå®šè‡³é è¨­æç¤ºè©ž",
      PinToastAction: "æª¢è¦–",
      Delete: "åˆªé™¤",
      Edit: "ç·¨è¼¯",
      RefreshTitle: "é‡æ–°æ•´ç†æ¨™é¡Œ",
      RefreshToast: "å·²å‚³é€é‡æ–°æ•´ç†æ¨™é¡Œè«‹æ±‚",
    },
    Commands: {
      new: "æ–°å»ºèŠå¤©",
      newm: "å¾žè§’è‰²ç¯„æœ¬æ–°å»ºèŠå¤©",
      next: "ä¸‹ä¸€å€‹èŠå¤©",
      prev: "ä¸Šä¸€å€‹èŠå¤©",
      clear: "æ¸…é™¤ä¸Šä¸‹æ–‡",
      del: "åˆªé™¤èŠå¤©",
    },
    InputActions: {
      Stop: "åœæ­¢å›žæ‡‰",
      ToBottom: "ç§»è‡³æœ€æ–°",
      Theme: {
        auto: "è‡ªå‹•ä¸»é¡Œ",
        light: "äº®è‰²æ¨¡å¼",
        dark: "æ·±è‰²æ¨¡å¼",
      },
      Prompt: "å¿«æ·æŒ‡ä»¤",
      Masks: "æ‰€æœ‰è§’è‰²ç¯„æœ¬",
      Clear: "æ¸…é™¤èŠå¤©",
      Settings: "å°è©±è¨­å®š",
      UploadImage: "ä¸Šå‚³åœ–ç‰‡",
    },
    Rename: "é‡æ–°å‘½åå°è©±",
    Typing: "æ­£åœ¨è¼¸å…¥â€¦",
    Input: (submitKey: string) => {
      var inputHints = `è¼¸å…¥è¨Šæ¯å¾Œï¼ŒæŒ‰ä¸‹ ${submitKey} éµå³å¯å‚³é€`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += "ï¼ŒShift + Enter éµæ›è¡Œ";
      }
      return inputHints;
    },
    Send: "å‚³é€",
    Config: {
      Reset: "é‡è¨­",
      SaveAs: "å¦å­˜æ–°æª”",
    },
    IsContext: "é è¨­æç¤ºè©ž",
    ShortcutKey: {
      Title: "éµç›¤å¿«æ·æ–¹å¼",
      newChat: "é–‹å•Ÿæ–°èŠå¤©",
      focusInput: "èšç„¦è¼¸å…¥æ¡†",
      copyLastMessage: "è¤‡è£½æœ€å¾Œä¸€å€‹å›žè¦†",
      copyLastCode: "è¤‡è£½æœ€å¾Œä¸€å€‹ç¨‹å¼ç¢¼å€å¡Š",
      showShortcutKey: "é¡¯ç¤ºå¿«æ·æ–¹å¼",
      clearContext: "æ¸…é™¤ä¸Šä¸‹æ–‡",
    },
  },
  Export: {
    Title: "å°‡èŠå¤©è¨˜éŒ„åŒ¯å‡ºç‚º Markdown",
    Copy: "è¤‡è£½å…¨éƒ¨",
    Download: "ä¸‹è¼‰æª”æ¡ˆ",
    Share: "åˆ†äº«åˆ° ShareGPT",
    MessageFromYou: "ä¾†è‡ªæ‚¨çš„è¨Šæ¯",
    MessageFromChatGPT: "ä¾†è‡ª ChatGPT çš„è¨Šæ¯",
    Format: {
      Title: "åŒ¯å‡ºæ ¼å¼",
      SubTitle: "å¯ä»¥åŒ¯å‡º Markdown æ–‡å­—æª”æˆ–è€… PNG åœ–ç‰‡",
    },
    IncludeContext: {
      Title: "åŒ…å«è§’è‰²ç¯„æœ¬ä¸Šä¸‹æ–‡",
      SubTitle: "æ˜¯å¦åœ¨è¨Šæ¯ä¸­é¡¯ç¤ºè§’è‰²ç¯„æœ¬ä¸Šä¸‹æ–‡",
    },
    Steps: {
      Select: "é¸å–",
      Preview: "é è¦½",
    },
    Image: {
      Toast: "æ­£åœ¨ç”¢ç”Ÿæˆªåœ–",
      Modal: "é•·æŒ‰æˆ–æŒ‰å³éµå„²å­˜åœ–ç‰‡",
    },
  },
  Select: {
    Search: "æŸ¥è©¢è¨Šæ¯",
    All: "é¸å–å…¨éƒ¨",
    Latest: "æœ€è¿‘å¹¾æ¢",
    Clear: "æ¸…é™¤é¸å–",
  },
  Memory: {
    Title: "ä¸Šä¸‹æ–‡è¨˜æ†¶ Prompt",
    EmptyContent: "å°šæœªè¨˜æ†¶",
    Copy: "è¤‡è£½å…¨éƒ¨",
    Send: "å‚³é€è¨˜æ†¶",
    Reset: "é‡è¨­å°è©±",
    ResetConfirm: "é‡è¨­å¾Œå°‡æ¸…é™¤ç›®å‰å°è©±è¨˜éŒ„ä»¥åŠæ­·å²è¨˜æ†¶ï¼Œç¢ºèªé‡è¨­ï¼Ÿ",
  },
  Home: {
    NewChat: "é–‹æ–°å°è©±",
    DeleteChat: "ç¢ºå®šè¦åˆªé™¤é¸å–çš„å°è©±å—Žï¼Ÿ",
    DeleteToast: "å·²åˆªé™¤å°è©±",
    Revert: "æ’¤éŠ·",
  },
  Settings: {
    Title: "è¨­å®š",
    SubTitle: "è¨­å®šé¸é …",

    Danger: {
      Reset: {
        Title: "é‡è¨­æ‰€æœ‰è¨­å®š",
        SubTitle: "é‡è¨­æ‰€æœ‰è¨­å®šé …å›žé è¨­å€¼",
        Action: "ç«‹å³é‡è¨­",
        Confirm: "ç¢ºèªé‡è¨­æ‰€æœ‰è¨­å®šï¼Ÿ",
      },
      Clear: {
        Title: "æ¸…é™¤æ‰€æœ‰è³‡æ–™",
        SubTitle: "æ¸…é™¤æ‰€æœ‰èŠå¤©ã€è¨­å®šè³‡æ–™",
        Action: "ç«‹å³æ¸…é™¤",
        Confirm: "ç¢ºèªæ¸…é™¤æ‰€æœ‰èŠå¤©ã€è¨­å®šè³‡æ–™ï¼Ÿ",
      },
    },
    Lang: {
      Name: "Language", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: "æ‰€æœ‰èªžè¨€",
    },
    Avatar: "å¤§é ­è²¼",
    FontSize: {
      Title: "å­—åž‹å¤§å°",
      SubTitle: "èŠå¤©å…§å®¹çš„å­—åž‹å¤§å°",
    },
    FontFamily: {
      Title: "èŠå¤©å­—åž‹",
      SubTitle: "èŠå¤©å…§å®¹çš„å­—åž‹ï¼Œè‹¥ç•™ç©ºå‰‡å¥—ç”¨å…¨åŸŸé è¨­å­—åž‹",
      Placeholder: "å­—åž‹åç¨±",
    },
    InjectSystemPrompts: {
      Title: "åŒ¯å…¥ç³»çµ±æç¤º",
      SubTitle: "å¼·åˆ¶åœ¨æ¯å€‹è«‹æ±‚çš„è¨Šæ¯åˆ—è¡¨é–‹é ­æ–°å¢žä¸€å€‹æ¨¡æ“¬ ChatGPT çš„ç³»çµ±æç¤º",
    },
    InputTemplate: {
      Title: "ä½¿ç”¨è€…è¼¸å…¥é è™•ç†",
      SubTitle: "ä½¿ç”¨è€…æœ€æ–°çš„ä¸€å‰‡è¨Šæ¯æœƒå¡«å……åˆ°æ­¤ç¯„æœ¬",
    },

    Update: {
      Version: (x: string) => `ç›®å‰ç‰ˆæœ¬ï¼š${x}`,
      IsLatest: "å·²æ˜¯æœ€æ–°ç‰ˆæœ¬",
      CheckUpdate: "æª¢æŸ¥æ›´æ–°",
      IsChecking: "æ­£åœ¨æª¢æŸ¥æ›´æ–°...",
      FoundUpdate: (x: string) => `ç™¼ç¾æ–°ç‰ˆæœ¬ï¼š${x}`,
      GoToUpdate: "å‰å¾€æ›´æ–°",
    },
    SendKey: "å‚³é€éµ",
    Theme: "ä¸»é¡Œ",
    TightBorder: "ç·Šæ¹Šé‚Šæ¡†",
    SendPreviewBubble: {
      Title: "é è¦½æ°£æ³¡",
      SubTitle: "åœ¨é è¦½æ°£æ³¡ä¸­é è¦½ Markdown å…§å®¹",
    },
    AutoGenerateTitle: {
      Title: "è‡ªå‹•ç”¢ç”Ÿæ¨™é¡Œ",
      SubTitle: "æ ¹æ“šå°è©±å…§å®¹ç”¢ç”Ÿåˆé©çš„æ¨™é¡Œ",
    },
    Sync: {
      CloudState: "é›²ç«¯è³‡æ–™",
      NotSyncYet: "é‚„æ²’æœ‰é€²è¡ŒéŽåŒæ­¥",
      Success: "åŒæ­¥æˆåŠŸ",
      Fail: "åŒæ­¥å¤±æ•—",

      Config: {
        Modal: {
          Title: "è¨­å®šé›²ç«¯åŒæ­¥",
          Check: "æª¢æŸ¥å¯ç”¨æ€§",
        },
        SyncType: {
          Title: "åŒæ­¥é¡žåž‹",
          SubTitle: "é¸æ“‡åå¥½çš„åŒæ­¥ä¼ºæœå™¨",
        },
        Proxy: {
          Title: "å•Ÿç”¨ä»£ç†ä¼ºæœå™¨",
          SubTitle: "åœ¨ç€è¦½å™¨ä¸­åŒæ­¥æ™‚ï¼Œå•Ÿç”¨ä»£ç†ä¼ºæœå™¨ä»¥é¿å…è·¨åŸŸé™åˆ¶",
        },
        ProxyUrl: {
          Title: "ä»£ç†ä¼ºæœå™¨ä½ç½®",
          SubTitle: "åƒ…é©ç”¨æ–¼æœ¬å°ˆæ¡ˆå…§å»ºçš„è·¨åŸŸä»£ç†",
        },

        WebDav: {
          Endpoint: "WebDAV ä½ç½®",
          UserName: "ä½¿ç”¨è€…åç¨±",
          Password: "å¯†ç¢¼",
        },

        UpStash: {
          Endpoint: "UpStash Redis REST Url",
          UserName: "å‚™ä»½åç¨±",
          Password: "UpStash Redis REST Token",
        },
      },

      LocalState: "æœ¬æ©Ÿè³‡æ–™",
      Overview: (overview: any) => {
        return `${overview.chat} æ¬¡å°è©±ï¼Œ${overview.message} å‰‡è¨Šæ¯ï¼Œ${overview.prompt} æ¢æç¤ºè©žï¼Œ${overview.mask} å€‹è§’è‰²ç¯„æœ¬`;
      },
      ImportFailed: "åŒ¯å…¥å¤±æ•—",
    },
    Mask: {
      Splash: {
        Title: "è§’è‰²ç¯„æœ¬å•Ÿå‹•é é¢",
        SubTitle: "æ–°å¢žèŠå¤©æ™‚ï¼Œå‘ˆç¾è§’è‰²ç¯„æœ¬å•Ÿå‹•é é¢",
      },
      Builtin: {
        Title: "éš±è—å…§å»ºè§’è‰²ç¯„æœ¬",
        SubTitle: "åœ¨æ‰€æœ‰è§’è‰²ç¯„æœ¬åˆ—è¡¨ä¸­éš±è—å…§å»ºè§’è‰²ç¯„æœ¬",
      },
    },
    Prompt: {
      Disable: {
        Title: "åœç”¨æç¤ºè©žè‡ªå‹•è£œé½Š",
        SubTitle: "åœ¨è¼¸å…¥æ¡†é–‹é ­è¼¸å…¥ / å³å¯è§¸ç™¼è‡ªå‹•è£œé½Š",
      },
      List: "è‡ªè¨‚æç¤ºè©žåˆ—è¡¨",
      ListCount: (builtin: number, custom: number) =>
        `å…§å»º ${builtin} æ¢ï¼Œä½¿ç”¨è€…è‡ªè¨‚ ${custom} æ¢`,
      Edit: "ç·¨è¼¯",
      Modal: {
        Title: "æç¤ºè©žåˆ—è¡¨",
        Add: "æ–°å¢žä¸€å‰‡",
        Search: "æœå°‹æç¤ºè©ž",
      },
      EditModal: {
        Title: "ç·¨è¼¯æç¤ºè©ž",
      },
    },
    HistoryCount: {
      Title: "é™„å¸¶æ­·å²è¨Šæ¯æ•¸",
      SubTitle: "æ¯æ¬¡è«‹æ±‚é™„å¸¶çš„æ­·å²è¨Šæ¯æ•¸",
    },
    CompressThreshold: {
      Title: "æ­·å²è¨Šæ¯é•·åº¦å£“ç¸®é–¾å€¼",
      SubTitle: "ç•¶æœªå£“ç¸®çš„æ­·å²è¨Šæ¯è¶…éŽè©²å€¼æ™‚ï¼Œå°‡é€²è¡Œå£“ç¸®",
    },

    Usage: {
      Title: "å¸³æˆ¶é¤˜é¡",
      SubTitle(used: any, total: any) {
        return `æœ¬æœˆå·²ä½¿ç”¨ $${used}ï¼Œè¨‚é–±ç¸½é¡ $${total}`;
      },
      IsChecking: "æ­£åœ¨æª¢æŸ¥â€¦",
      Check: "é‡æ–°æª¢æŸ¥",
      NoAccess: "è¼¸å…¥ API Key æª¢è¦–é¤˜é¡",
    },

    Access: {
      SaasStart: {
        Title: "ä½¿ç”¨ HeyChat AI",
        Label: "(æ€§åƒ¹æ¯”æœ€é«˜çš„æ–¹æ¡ˆ)",
        SubTitle:
          "ç”± HeyChat å®˜æ–¹ç¶­è­·ï¼Œç„¡é ˆè¨­å®šé–‹ç®±å³ç”¨ï¼Œæ”¯æ´ OpenAI o1ã€GPT-4oã€Claude-3.5 ç­‰æœ€æ–°çš„å¤§åž‹èªžè¨€æ¨¡åž‹",
        ChatNow: "ç«‹åˆ»é–‹å§‹å°è©±",
      },

      AccessCode: {
        Title: "å­˜å–å¯†ç¢¼",
        SubTitle: "ç®¡ç†å“¡å·²é–‹å•ŸåŠ å¯†å­˜å–",
        Placeholder: "è«‹è¼¸å…¥å­˜å–å¯†ç¢¼",
      },
      CustomEndpoint: {
        Title: "è‡ªè¨‚ API ç«¯é»ž (Endpoint)",
        SubTitle: "æ˜¯å¦ä½¿ç”¨è‡ªè¨‚ Azure æˆ– OpenAI æœå‹™",
      },
      Provider: {
        Title: "æ¨¡åž‹ä¾›æ‡‰å•†",
        SubTitle: "åˆ‡æ›ä¸åŒçš„æœå‹™ä¾›æ‡‰å•†",
      },
      OpenAI: {
        ApiKey: {
          Title: "API Key",
          SubTitle: "ä½¿ç”¨è‡ªè¨‚ OpenAI Key ç¹žéŽå¯†ç¢¼å­˜å–é™åˆ¶",
          Placeholder: "OpenAI API Key",
        },

        Endpoint: {
          Title: "API ç«¯é»ž (Endpoint) ä½å€",
          SubTitle: "é™¤é è¨­ä½å€å¤–ï¼Œå¿…é ˆåŒ…å« http(s)://",
        },
      },
      Azure: {
        ApiKey: {
          Title: "API é‡‘é‘°",
          SubTitle: "ä½¿ç”¨è‡ªè¨‚ Azure Key ç¹žéŽå¯†ç¢¼å­˜å–é™åˆ¶",
          Placeholder: "Azure API Key",
        },

        Endpoint: {
          Title: "API ç«¯é»ž (Endpoint) ä½å€",
          SubTitle: "ç¯„ä¾‹ï¼š",
        },

        ApiVerion: {
          Title: "API ç‰ˆæœ¬ (azure api version)",
          SubTitle: "æŒ‡å®šä¸€å€‹ç‰¹å®šçš„ API ç‰ˆæœ¬",
        },
      },
      Anthropic: {
        ApiKey: {
          Title: "API é‡‘é‘°",
          SubTitle: "å¾ž Anthropic AI å–å¾—æ‚¨çš„ API é‡‘é‘°",
          Placeholder: "Anthropic API Key",
        },

        Endpoint: {
          Title: "ç«¯é»žä½å€",
          SubTitle: "ç¯„ä¾‹ï¼š",
        },

        ApiVerion: {
          Title: "API ç‰ˆæœ¬ (claude api version)",
          SubTitle: "æŒ‡å®šä¸€å€‹ç‰¹å®šçš„ API ç‰ˆæœ¬",
        },
      },
      Google: {
        ApiKey: {
          Title: "API é‡‘é‘°",
          SubTitle: "å¾ž Google AI å–å¾—æ‚¨çš„ API é‡‘é‘°",
          Placeholder: "è¼¸å…¥æ‚¨çš„ Google AI Studio API é‡‘é‘°",
        },

        Endpoint: {
          Title: "ç«¯é»žä½å€",
          SubTitle: "ç¯„ä¾‹ï¼š",
        },

        ApiVersion: {
          Title: "API ç‰ˆæœ¬ï¼ˆåƒ…é©ç”¨æ–¼ gemini-proï¼‰",
          SubTitle: "é¸æ“‡ä¸€å€‹ç‰¹å®šçš„ API ç‰ˆæœ¬",
        },
      },
      AI302: {
        ApiKey: {
          Title: "API é‡‘é‘°",
          SubTitle: "ä½¿ç”¨è‡ªè¨‚ 302.AI API é‡‘é‘°",
          Placeholder: "302.AI API é‡‘é‘°",
        },
        Endpoint: {
          Title: "ç«¯é»žä½å€",
          SubTitle: "ç¯„ä¾‹ï¼š",
        },
      },
      CustomModel: {
        Title: "è‡ªè¨‚æ¨¡åž‹åç¨±",
        SubTitle: "å¢žåŠ è‡ªè¨‚æ¨¡åž‹å¯é¸æ“‡é …ç›®ï¼Œä½¿ç”¨è‹±æ–‡é€—è™Ÿéš”é–‹",
      },
    },

    Model: "æ¨¡åž‹ (model)",
    CompressModel: {
      Title: "å£“ç¸®æ¨¡åž‹",
      SubTitle: "ç”¨æ–¼å£“ç¸®æ­·å²è¨˜éŒ„çš„æ¨¡åž‹",
    },
    Temperature: {
      Title: "éš¨æ©Ÿæ€§ (temperature)",
      SubTitle: "å€¼è¶Šå¤§ï¼Œå›žæ‡‰è¶Šéš¨æ©Ÿ",
    },
    TopP: {
      Title: "æ ¸å¿ƒæŽ¡æ¨£ (top_p)",
      SubTitle: "èˆ‡éš¨æ©Ÿæ€§é¡žä¼¼ï¼Œä½†ä¸è¦å’Œéš¨æ©Ÿæ€§ä¸€èµ·æ›´æ”¹",
    },
    MaxTokens: {
      Title: "å–®æ¬¡å›žæ‡‰é™åˆ¶ (max_tokens)",
      SubTitle: "å–®æ¬¡äº’å‹•æ‰€ç”¨çš„æœ€å¤§ Token æ•¸",
    },
    PresencePenalty: {
      Title: "è©±é¡Œæ–°ç©Žåº¦ (presence_penalty)",
      SubTitle: "å€¼è¶Šå¤§ï¼Œè¶Šæœ‰å¯èƒ½æ‹“å±•åˆ°æ–°è©±é¡Œ",
    },
    FrequencyPenalty: {
      Title: "é »çŽ‡æ‡²ç½°åº¦ (frequency_penalty)",
      SubTitle: "å€¼è¶Šå¤§ï¼Œè¶Šæœ‰å¯èƒ½é™ä½Žé‡è¤‡å­—è©ž",
    },
  },
  Store: {
    DefaultTopic: "æ–°çš„å°è©±",
    BotHello: "è«‹å•éœ€è¦æˆ‘çš„å”åŠ©å—Žï¼Ÿ",
    Error: "å‡ºéŒ¯äº†ï¼Œè«‹ç¨å¾Œå†å˜—è©¦",
    Prompt: {
      History: (content: string) =>
        "é€™æ˜¯ AI èˆ‡ä½¿ç”¨è€…çš„æ­·å²èŠå¤©ç¸½çµï¼Œä½œç‚ºå‰æƒ…æè¦ï¼š" + content,
      Topic:
        "Use the language used by the user (e.g. en for english conversation, zh-hant for chinese conversation, etc.) to generate a title (at most 6 words) summarizing our conversation without any lead-in, quotation marks, preamble like 'Title:', direct text copies, single-word replies, quotation marks, translations, or brackets. Remove enclosing quotation marks. The title should make third-party grasp the essence of the conversation in first sight.",
      Summarize:
        "Use the language used by the user (e.g. en-us for english conversation, zh-hant for chinese conversation, etc.) to summarise the conversation in at most 200 words. The summary will be used as prompt for you to continue the conversation in the future.",
    },
  },
  Copy: {
    Success: "å·²è¤‡è£½åˆ°å‰ªè²¼ç°¿ä¸­",
    Failed: "è¤‡è£½å¤±æ•—ï¼Œè«‹è³¦äºˆå‰ªè²¼ç°¿æ¬Šé™",
  },
  Download: {
    Success: "å…§å®¹å·²ä¸‹è¼‰åˆ°æ‚¨çš„ç›®éŒ„ã€‚",
    Failed: "ä¸‹è¼‰å¤±æ•—ã€‚",
  },
  Context: {
    Toast: (x: any) => `å·²è¨­å®š ${x} æ¢å‰ç½®ä¸Šä¸‹æ–‡`,
    Edit: "å‰ç½®ä¸Šä¸‹æ–‡å’Œæ­·å²è¨˜æ†¶",
    Add: "æ–°å¢žä¸€å‰‡",
    Clear: "ä¸Šä¸‹æ–‡å·²æ¸…é™¤",
    Revert: "æ¢å¾©ä¸Šä¸‹æ–‡",
  },
  Plugin: { Name: "å¤–æŽ›" },
  FineTuned: { Sysmessage: "ä½ æ˜¯ä¸€å€‹åŠ©æ‰‹" },
  Mask: {
    Name: "è§’è‰²ç¯„æœ¬",
    Page: {
      Title: "é è¨­è§’è‰²è§’è‰²ç¯„æœ¬",
      SubTitle: (count: number) => `${count} å€‹é è¨­è§’è‰²å®šç¾©`,
      Search: "æœå°‹è§’è‰²è§’è‰²ç¯„æœ¬",
      Create: "æ–°å¢ž",
    },
    Item: {
      Info: (count: number) => `åŒ…å« ${count} æ¢é è¨­å°è©±`,
      Chat: "å°è©±",
      View: "æª¢è¦–",
      Edit: "ç·¨è¼¯",
      Delete: "åˆªé™¤",
      DeleteConfirm: "ç¢ºèªåˆªé™¤ï¼Ÿ",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `ç·¨è¼¯é è¨­è§’è‰²ç¯„æœ¬ ${readonly ? "ï¼ˆå”¯è®€ï¼‰" : ""}`,
      Download: "ä¸‹è¼‰é è¨­å€¼",
      Clone: "ä»¥æ­¤é è¨­å€¼å»ºç«‹å‰¯æœ¬",
    },
    Config: {
      Avatar: "è§’è‰²é ­åƒ",
      Name: "è§’è‰²åç¨±",
      Sync: {
        Title: "ä½¿ç”¨å…¨åŸŸè¨­å®š",
        SubTitle: "ç›®å‰å°è©±æ˜¯å¦ä½¿ç”¨å…¨åŸŸæ¨¡åž‹è¨­å®š",
        Confirm: "ç›®å‰å°è©±çš„è‡ªè¨‚è¨­å®šå°‡æœƒè¢«è‡ªå‹•è¦†è“‹ï¼Œç¢ºèªå•Ÿç”¨å…¨åŸŸè¨­å®šï¼Ÿ",
      },
      HideContext: {
        Title: "éš±è—é è¨­å°è©±",
        SubTitle: "éš±è—å¾Œé è¨­å°è©±ä¸æœƒå‡ºç¾åœ¨èŠå¤©ä»‹é¢",
      },
      Share: {
        Title: "åˆ†äº«æ­¤è§’è‰²ç¯„æœ¬",
        SubTitle: "ç”¢ç”Ÿæ­¤è§’è‰²ç¯„æœ¬çš„ç›´é”é€£çµ",
        Action: "è¤‡è£½é€£çµ",
      },
    },
  },
  SearchChat: {
    Name: "æœå°‹èŠå¤©è¨˜éŒ„",
    Page: {
      Title: "æœå°‹èŠå¤©è¨˜éŒ„",
      Search: "è¼¸å…¥æœå°‹é—œéµè©ž",
      NoResult: "æ²’æœ‰æ‰¾åˆ°çµæžœ",
      NoData: "æ²’æœ‰è³‡æ–™",
      Loading: "è¼‰å…¥ä¸­",

      SubTitle: (count: number) => `æ‰¾åˆ° ${count} æ¢çµæžœ`,
    },
    Item: {
      View: "æª¢è¦–",
    },
  },
  NewChat: {
    Return: "è¿”å›ž",
    Skip: "è·³éŽ",
    NotShow: "ä¸å†é¡¯ç¤º",
    ConfirmNoShow: "ç¢ºèªåœç”¨ï¼Ÿåœç”¨å¾Œå¯ä»¥éš¨æ™‚åœ¨è¨­å®šä¸­é‡æ–°å•Ÿç”¨ã€‚",
    Title: "æŒ‘é¸ä¸€å€‹è§’è‰²ç¯„æœ¬",
    SubTitle: "ç¾åœ¨é–‹å§‹ï¼Œèˆ‡è§’è‰²ç¯„æœ¬èƒŒå¾Œçš„éˆé­‚æ€ç¶­ç¢°æ’ž",
    More: "æœå°‹æ›´å¤š",
  },
  URLCommand: {
    Code: "åµæ¸¬åˆ°é€£çµä¸­å·²ç¶“åŒ…å«å­˜å–å¯†ç¢¼ï¼Œæ˜¯å¦è‡ªå‹•å¡«å…¥ï¼Ÿ",
    Settings: "åµæ¸¬åˆ°é€£çµä¸­åŒ…å«äº†é è¨­è¨­å®šï¼Œæ˜¯å¦è‡ªå‹•å¡«å…¥ï¼Ÿ",
  },
  UI: {
    Confirm: "ç¢ºèª",
    Cancel: "å–æ¶ˆ",
    Close: "é—œé–‰",
    Create: "æ–°å¢ž",
    Edit: "ç·¨è¼¯",
    Export: "åŒ¯å‡º",
    Import: "åŒ¯å…¥",
    Sync: "åŒæ­¥",
    Config: "è¨­å®š",
  },
  Exporter: {
    Description: {
      Title: "åªæœ‰æ¸…é™¤ä¸Šä¸‹æ–‡ä¹‹å¾Œçš„è¨Šæ¯æœƒè¢«é¡¯ç¤º",
    },
    Model: "æ¨¡åž‹",
    Messages: "è¨Šæ¯",
    Topic: "ä¸»é¡Œ",
    Time: "æ™‚é–“",
  },
};

type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

export type LocaleType = typeof tw;
export type PartialLocaleType = DeepPartial<typeof tw>;

export default tw;
// Translated by @chunkiuuu, feel free the submit new pr if there are typo/incorrect translations :D

