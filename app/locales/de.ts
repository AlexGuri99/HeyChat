import { SubmitKey } from "../store/config";
import type { PartialLocaleType } from "./index";
import { getClientConfig } from "../config/client";
import { SAAS_CHAT_UTM_URL } from "@/app/constant";
const isApp = !!getClientConfig()?.isApp;

const de: PartialLocaleType = {
  WIP: "In Bearbeitung...",
  Error: {
    Unauthorized: isApp
      ? `ðŸ˜† Das GesprÃ¤ch hatte einige Probleme, keine Sorge:
    \\ 1ï¸âƒ£ Wenn du ohne Konfiguration sofort starten mÃ¶chtest, [klicke hier, um sofort zu chatten ðŸš€](${SAAS_CHAT_UTM_URL})
    \\ 2ï¸âƒ£ Wenn du deine eigenen OpenAI-Ressourcen verwenden mÃ¶chtest, klicke [hier](/#/settings), um die Einstellungen zu Ã¤ndern âš™ï¸`
      : `ðŸ˜† Das GesprÃ¤ch hatte einige Probleme, keine Sorge:
    \ 1ï¸âƒ£ Wenn du ohne Konfiguration sofort starten mÃ¶chtest, [klicke hier, um sofort zu chatten ðŸš€](${SAAS_CHAT_UTM_URL})
    \ 2ï¸âƒ£ Wenn du eine private Bereitstellung verwendest, klicke [hier](/#/auth), um den ZugriffsschlÃ¼ssel einzugeben ðŸ”‘
    \ 3ï¸âƒ£ Wenn du deine eigenen OpenAI-Ressourcen verwenden mÃ¶chtest, klicke [hier](/#/settings), um die Einstellungen zu Ã¤ndern âš™ï¸
 `,
  },
  Auth: {
    Title: "Passwort erforderlich",
    Tips: "Der Administrator hat die PasswortÃ¼berprÃ¼fung aktiviert. Bitte geben Sie den Zugangscode unten ein.",
    SubTips: "Oder geben Sie Ihren OpenAI oder Google API-SchlÃ¼ssel ein.",
    Input: "Geben Sie hier den Zugangscode ein",
    Confirm: "BestÃ¤tigen",
    Later: "SpÃ¤ter",
    Return: "ZurÃ¼ck",
    SaasTips:
      "Die Konfiguration ist zu kompliziert, ich mÃ¶chte es sofort nutzen",
    TopTips:
      "ðŸ¥³ HeyChat AI EinfÃ¼hrungsangebot, schalte jetzt OpenAI o1, GPT-4o, Claude-3.5 und die neuesten groÃŸen Modelle frei",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} GesprÃ¤che`,
  },
  Chat: {
    SubTitle: (count: number) => `Insgesamt ${count} GesprÃ¤che`,
    EditMessage: {
      Title: "Nachricht bearbeiten",
      Topic: {
        Title: "Chat-Thema",
        SubTitle: "Ã„ndern Sie das aktuelle Chat-Thema",
      },
    },
    Actions: {
      ChatList: "Nachrichtliste anzeigen",
      CompressedHistory: "Komprimierte Historie anzeigen",
      Export: "Chatverlauf exportieren",
      Copy: "Kopieren",
      Stop: "Stoppen",
      Retry: "Erneut versuchen",
      Pin: "Anheften",
      PinToastContent: "1 GesprÃ¤ch an den voreingestellten Prompt angeheftet",
      PinToastAction: "Ansehen",
      Delete: "LÃ¶schen",
      Edit: "Bearbeiten",
      RefreshTitle: "Titel aktualisieren",
      RefreshToast: "Anfrage zur Titelaktualisierung gesendet",
    },
    Commands: {
      new: "Neues GesprÃ¤ch",
      newm: "Neues GesprÃ¤ch aus Maske erstellen",
      next: "NÃ¤chstes GesprÃ¤ch",
      prev: "Vorheriges GesprÃ¤ch",
      clear: "Kontext lÃ¶schen",
      del: "GesprÃ¤ch lÃ¶schen",
    },
    InputActions: {
      Stop: "Antwort stoppen",
      ToBottom: "Zum neuesten Beitrag",
      Theme: {
        auto: "Automatisches Thema",
        light: "Helles Thema",
        dark: "Dunkles Thema",
      },
      Prompt: "Schnellbefehle",
      Masks: "Alle Masken",
      Clear: "Chat lÃ¶schen",
      Settings: "GesprÃ¤chseinstellungen",
      UploadImage: "Bild hochladen",
    },
    Rename: "GesprÃ¤ch umbenennen",
    Typing: "Tipptâ€¦",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey} senden`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += "ï¼ŒShift + Enter fÃ¼r Zeilenumbruch";
      }
      return inputHints + "ï¼Œ/ fÃ¼r AutovervollstÃ¤ndigung, : fÃ¼r Befehle";
    },
    Send: "Senden",
    Config: {
      Reset: "Erinnerung lÃ¶schen",
      SaveAs: "Als Maske speichern",
    },
    IsContext: "Voreingestellter Prompt",
  },
  Export: {
    Title: "Chatverlauf teilen",
    Copy: "Alles kopieren",
    Download: "Datei herunterladen",
    Share: "Auf ShareGPT teilen",
    MessageFromYou: "Benutzer",
    MessageFromChatGPT: "ChatGPT",
    Format: {
      Title: "Exportformat",
      SubTitle: "Kann als Markdown-Text oder PNG-Bild exportiert werden",
    },
    IncludeContext: {
      Title: "Maske Kontext einbeziehen",
      SubTitle: "Soll der Maskenkontext in den Nachrichten angezeigt werden?",
    },
    Steps: {
      Select: "AuswÃ¤hlen",
      Preview: "Vorschau",
    },
    Image: {
      Toast: "Screenshot wird erstellt",
      Modal: "Lang drÃ¼cken oder Rechtsklick, um Bild zu speichern",
    },
  },
  Select: {
    Search: "Nachrichten suchen",
    All: "Alles auswÃ¤hlen",
    Latest: "Neueste",
    Clear: "Auswahl aufheben",
  },
  Memory: {
    Title: "Historische Zusammenfassung",
    EmptyContent:
      "GesprÃ¤chsinhalte sind zu kurz, keine Zusammenfassung erforderlich",
    Send: "Chatverlauf automatisch komprimieren und als Kontext senden",
    Copy: "Zusammenfassung kopieren",
    Reset: "[nicht verwendet]",
    ResetConfirm: "Zusammenfassung lÃ¶schen bestÃ¤tigen?",
  },
  Home: {
    NewChat: "Neues GesprÃ¤ch",
    DeleteChat: "BestÃ¤tigen Sie das LÃ¶schen des ausgewÃ¤hlten GesprÃ¤chs?",
    DeleteToast: "GesprÃ¤ch gelÃ¶scht",
    Revert: "RÃ¼ckgÃ¤ngig machen",
  },
  Settings: {
    Title: "Einstellungen",
    SubTitle: "Alle EinstellungsmÃ¶glichkeiten",

    Danger: {
      Reset: {
        Title: "Alle Einstellungen zurÃ¼cksetzen",
        SubTitle: "Setzt alle Einstellungen auf die Standardwerte zurÃ¼ck",
        Action: "Jetzt zurÃ¼cksetzen",
        Confirm: "BestÃ¤tigen Sie das ZurÃ¼cksetzen aller Einstellungen?",
      },
      Clear: {
        Title: "Alle Daten lÃ¶schen",
        SubTitle: "LÃ¶scht alle Chats und Einstellungsdaten",
        Action: "Jetzt lÃ¶schen",
        Confirm:
          "BestÃ¤tigen Sie das LÃ¶schen aller Chats und Einstellungsdaten?",
      },
    },
    Lang: {
      Name: "Sprache", // ACHTUNG: Wenn Sie eine neue Ãœbersetzung hinzufÃ¼gen mÃ¶chten, Ã¼bersetzen Sie diesen Wert bitte nicht, lassen Sie ihn als `Sprache`
      All: "Alle Sprachen",
    },
    Avatar: "Avatar",
    FontSize: {
      Title: "SchriftgrÃ¶ÃŸe",
      SubTitle: "SchriftgrÃ¶ÃŸe des Chat-Inhalts",
    },
    FontFamily: {
      Title: "Chat-Schriftart",
      SubTitle:
        "Schriftart des Chat-Inhalts, leer lassen, um die globale Standardschriftart anzuwenden",
      Placeholder: "Schriftartname",
    },
    InjectSystemPrompts: {
      Title: "Systemweite Eingabeaufforderungen einfÃ¼gen",
      SubTitle:
        "FÃ¼gt jeder Nachricht am Anfang der Nachrichtenliste eine simulierte ChatGPT-Systemaufforderung hinzu",
    },
    InputTemplate: {
      Title: "Benutzer-Eingabeverarbeitung",
      SubTitle:
        "Die neueste Nachricht des Benutzers wird in diese Vorlage eingefÃ¼gt",
    },

    Update: {
      Version: (x: string) => `Aktuelle Version: ${x}`,
      IsLatest: "Bereits die neueste Version",
      CheckUpdate: "Auf Updates Ã¼berprÃ¼fen",
      IsChecking: "ÃœberprÃ¼fe auf Updates...",
      FoundUpdate: (x: string) => `Neue Version gefunden: ${x}`,
      GoToUpdate: "Zum Update gehen",
    },
    SendKey: "Sende-Taste",
    Theme: "Thema",
    TightBorder: "Randloser Modus",
    SendPreviewBubble: {
      Title: "Vorschau-Bubble",
      SubTitle: "Markdown-Inhalt in der Vorschau-Bubble anzeigen",
    },
    AutoGenerateTitle: {
      Title: "Titel automatisch generieren",
      SubTitle:
        "Basierend auf dem Chat-Inhalt einen passenden Titel generieren",
    },
    Sync: {
      CloudState: "Cloud-Daten",
      NotSyncYet: "Noch nicht synchronisiert",
      Success: "Synchronisation erfolgreich",
      Fail: "Synchronisation fehlgeschlagen",

      Config: {
        Modal: {
          Title: "Cloud-Synchronisation konfigurieren",
          Check: "VerfÃ¼gbarkeit Ã¼berprÃ¼fen",
        },
        SyncType: {
          Title: "Synchronisationstyp",
          SubTitle: "WÃ¤hlen Sie den bevorzugten Synchronisationsserver aus",
        },
        Proxy: {
          Title: "Proxy aktivieren",
          SubTitle:
            "Beim Synchronisieren im Browser muss ein Proxy aktiviert werden, um Cross-Origin-BeschrÃ¤nkungen zu vermeiden",
        },
        ProxyUrl: {
          Title: "Proxy-Adresse",
          SubTitle: "Nur fÃ¼r projektinterne Cross-Origin-Proxy",
        },

        WebDav: {
          Endpoint: "WebDAV-Adresse",
          UserName: "Benutzername",
          Password: "Passwort",
        },

        UpStash: {
          Endpoint: "UpStash Redis REST-Url",
          UserName: "Sicherungsname",
          Password: "UpStash Redis REST-Token",
        },
      },

      LocalState: "Lokale Daten",
      Overview: (overview: any) => {
        return `${overview.chat} Chats, ${overview.message} Nachrichten, ${overview.prompt} Eingabeaufforderungen, ${overview.mask} Masken`;
      },
      ImportFailed: "Import fehlgeschlagen",
    },
    Mask: {
      Splash: {
        Title: "Masken-Startseite",
        SubTitle:
          "Zeige die Masken-Startseite beim Erstellen eines neuen Chats",
      },
      Builtin: {
        Title: "Eingebaute Masken ausblenden",
        SubTitle: "Blendet eingebaute Masken in allen Maskenlisten aus",
      },
    },
    Prompt: {
      Disable: {
        Title: "Automatische Eingabeaufforderung deaktivieren",
        SubTitle:
          "Geben Sie am Anfang des Eingabefelds / ein, um die automatische VervollstÃ¤ndigung auszulÃ¶sen",
      },
      List: "Benutzerdefinierte Eingabeaufforderungsliste",
      ListCount: (builtin: number, custom: number) =>
        `Eingebaut ${builtin} StÃ¼ck, Benutzerdefiniert ${custom} StÃ¼ck`,
      Edit: "Bearbeiten",
      Modal: {
        Title: "Eingabeaufforderungsliste",
        Add: "Neu erstellen",
        Search: "Eingabeaufforderungen suchen",
      },
      EditModal: {
        Title: "Eingabeaufforderung bearbeiten",
      },
    },
    HistoryCount: {
      Title: "Anzahl der historischen Nachrichten",
      SubTitle:
        "Anzahl der historischen Nachrichten, die bei jeder Anfrage mitgesendet werden",
    },
    CompressThreshold: {
      Title: "Komprimierungsschwelle fÃ¼r historische NachrichtenlÃ¤nge",
      SubTitle:
        "Wenn die unkomprimierten historischen Nachrichten diesen Wert Ã¼berschreiten, wird komprimiert",
    },

    Usage: {
      Title: "Guthabenabfrage",
      SubTitle(used: any, total: any) {
        return `In diesem Monat verwendet $${used}, Abonnement insgesamt $${total}`;
      },
      IsChecking: "Wird Ã¼berprÃ¼ftâ€¦",
      Check: "Erneut Ã¼berprÃ¼fen",
      NoAccess:
        "Geben Sie API-SchlÃ¼ssel oder Zugangspasswort ein, um das Guthaben einzusehen",
    },

    Access: {
      SaasStart: {
        Title: "HeyChat AI verwenden",
        Label: "(Die kosteneffektivste LÃ¶sung)",
        SubTitle:
          "Offiziell von HeyChat verwaltet, sofort einsatzbereit ohne Konfiguration, unterstÃ¼tzt die neuesten groÃŸen Modelle wie OpenAI o1, GPT-4o und Claude-3.5",
        ChatNow: "Jetzt chatten",
      },

      AccessCode: {
        Title: "Zugangscode",
        SubTitle:
          "Der Administrator hat die verschlÃ¼sselte Zugriffskontrolle aktiviert",
        Placeholder: "Geben Sie den Zugangscode ein",
      },
      CustomEndpoint: {
        Title: "Benutzerdefinierte Schnittstelle",
        SubTitle: "Benutzerdefinierte Azure- oder OpenAI-Dienste verwenden",
      },
      Provider: {
        Title: "Modellanbieter",
        SubTitle: "Wechseln Sie zu verschiedenen Anbietern",
      },
      OpenAI: {
        ApiKey: {
          Title: "API-SchlÃ¼ssel",
          SubTitle:
            "Verwenden Sie benutzerdefinierten OpenAI-SchlÃ¼ssel, um PasswortzugangsbeschrÃ¤nkungen zu umgehen",
          Placeholder: "OpenAI API-SchlÃ¼ssel",
        },

        Endpoint: {
          Title: "Schnittstellenadresse",
          SubTitle: "Neben der Standardadresse muss http(s):// enthalten sein",
        },
      },
      Azure: {
        ApiKey: {
          Title: "SchnittstellenschlÃ¼ssel",
          SubTitle:
            "Verwenden Sie benutzerdefinierten Azure-SchlÃ¼ssel, um PasswortzugangsbeschrÃ¤nkungen zu umgehen",
          Placeholder: "Azure API-SchlÃ¼ssel",
        },

        Endpoint: {
          Title: "Schnittstellenadresse",
          SubTitle: "Beispiel:",
        },

        ApiVerion: {
          Title: "Schnittstellenversion (azure api version)",
          SubTitle: "WÃ¤hlen Sie eine spezifische Teilversion aus",
        },
      },
      Anthropic: {
        ApiKey: {
          Title: "SchnittstellenschlÃ¼ssel",
          SubTitle:
            "Verwenden Sie benutzerdefinierten Anthropic-SchlÃ¼ssel, um PasswortzugangsbeschrÃ¤nkungen zu umgehen",
          Placeholder: "Anthropic API-SchlÃ¼ssel",
        },

        Endpoint: {
          Title: "Schnittstellenadresse",
          SubTitle: "Beispiel:",
        },

        ApiVerion: {
          Title: "Schnittstellenversion (claude api version)",
          SubTitle: "WÃ¤hlen Sie eine spezifische API-Version aus",
        },
      },
      Google: {
        ApiKey: {
          Title: "API-SchlÃ¼ssel",
          SubTitle: "Holen Sie sich Ihren API-SchlÃ¼ssel von Google AI",
          Placeholder: "Geben Sie Ihren Google AI Studio API-SchlÃ¼ssel ein",
        },

        Endpoint: {
          Title: "Endpunktadresse",
          SubTitle: "Beispiel:",
        },

        ApiVersion: {
          Title: "API-Version (nur fÃ¼r gemini-pro)",
          SubTitle: "WÃ¤hlen Sie eine spezifische API-Version aus",
        },
        GoogleSafetySettings: {
          Title: "Google Sicherheitsfilterstufe",
          SubTitle: "Inhaltfilterstufe einstellen",
        },
      },
      Baidu: {
        ApiKey: {
          Title: "API-SchlÃ¼ssel",
          SubTitle: "Verwenden Sie benutzerdefinierten Baidu API-SchlÃ¼ssel",
          Placeholder: "Baidu API-SchlÃ¼ssel",
        },
        SecretKey: {
          Title: "GeheimschlÃ¼ssel",
          SubTitle: "Verwenden Sie benutzerdefinierten Baidu GeheimschlÃ¼ssel",
          Placeholder: "Baidu GeheimschlÃ¼ssel",
        },
        Endpoint: {
          Title: "Schnittstellenadresse",
          SubTitle:
            "Keine benutzerdefinierten Adressen unterstÃ¼tzen, konfigurieren Sie in .env",
        },
      },
      ByteDance: {
        ApiKey: {
          Title: "SchnittstellenschlÃ¼ssel",
          SubTitle: "Verwenden Sie benutzerdefinierten ByteDance API-SchlÃ¼ssel",
          Placeholder: "ByteDance API-SchlÃ¼ssel",
        },
        Endpoint: {
          Title: "Schnittstellenadresse",
          SubTitle: "Beispiel:",
        },
      },
      Alibaba: {
        ApiKey: {
          Title: "SchnittstellenschlÃ¼ssel",
          SubTitle:
            "Verwenden Sie benutzerdefinierten Alibaba Cloud API-SchlÃ¼ssel",
          Placeholder: "Alibaba Cloud API-SchlÃ¼ssel",
        },
        Endpoint: {
          Title: "Schnittstellenadresse",
          SubTitle: "Beispiel:",
        },
      },
      AI302: {
        ApiKey: {
          Title: "SchnittstellenschlÃ¼ssel",
          SubTitle: "Verwenden Sie einen benutzerdefinierten 302.AI API-SchlÃ¼ssel",
          Placeholder: "302.AI API-SchlÃ¼ssel",
        },
        Endpoint: {
          Title: "Endpunktadresse",
          SubTitle: "Beispiel:",
        },
      },
      CustomModel: {
        Title: "Benutzerdefinierter Modellname",
        SubTitle:
          "FÃ¼gen Sie benutzerdefinierte Modelloptionen hinzu, getrennt durch Kommas",
      },
    },

    Model: "Modell",
    CompressModel: {
      Title: "Kompressionsmodell",
      SubTitle: "Modell zur Komprimierung des Verlaufs",
    },
    Temperature: {
      Title: "ZufÃ¤lligkeit (temperature)",
      SubTitle: "Je hÃ¶her der Wert, desto zufÃ¤lliger die Antwort",
    },
    TopP: {
      Title: "Kern-Sampling (top_p)",
      SubTitle:
        "Ã„hnlich der ZufÃ¤lligkeit, aber nicht zusammen mit ZufÃ¤lligkeit Ã¤ndern",
    },
    MaxTokens: {
      Title: "Maximale Token-Anzahl pro Antwort",
      SubTitle: "Maximale Anzahl der Tokens pro Interaktion",
    },
    PresencePenalty: {
      Title: "Themenfrische (presence_penalty)",
      SubTitle:
        "Je hÃ¶her der Wert, desto wahrscheinlicher wird auf neue Themen eingegangen",
    },
    FrequencyPenalty: {
      Title: "HÃ¤ufigkeitsstrafe (frequency_penalty)",
      SubTitle:
        "Je hÃ¶her der Wert, desto wahrscheinlicher werden wiederholte WÃ¶rter reduziert",
    },
  },
  Store: {
    DefaultTopic: "Neuer Chat",
    BotHello: "Wie kann ich Ihnen helfen?",
    Error:
      "Ein Fehler ist aufgetreten, bitte versuchen Sie es spÃ¤ter noch einmal",
    Prompt: {
      History: (content: string) =>
        "Dies ist eine Zusammenfassung des bisherigen Chats als Hintergrundinformation: " +
        content,
      Topic:
        "Geben Sie ein kurzes Thema in vier bis fÃ¼nf WÃ¶rtern zurÃ¼ck, ohne ErklÃ¤rungen, ohne Satzzeichen, ohne FÃ¼llwÃ¶rter, ohne zusÃ¤tzliche Texte und ohne Fettdruck. Wenn kein Thema vorhanden ist, geben Sie bitte â€žAllgemeines GesprÃ¤châ€œ zurÃ¼ck.",
      Summarize:
        "Fassen Sie den GesprÃ¤chsinhalt zusammen, um als Kontextaufforderung fÃ¼r den nÃ¤chsten Schritt zu dienen, halten Sie es unter 200 Zeichen",
    },
  },
  Copy: {
    Success: "In die Zwischenablage geschrieben",
    Failed:
      "Kopieren fehlgeschlagen, bitte erlauben Sie Zugriff auf die Zwischenablage",
  },
  Download: {
    Success: "Inhalt wurde in Ihrem Verzeichnis heruntergeladen.",
    Failed: "Download fehlgeschlagen.",
  },
  Context: {
    Toast: (x: any) => `Beinhaltet ${x} vordefinierte Eingabeaufforderungen`,
    Edit: "Aktuelle GesprÃ¤chseinstellungen",
    Add: "Neues GesprÃ¤ch hinzufÃ¼gen",
    Clear: "Kontext gelÃ¶scht",
    Revert: "Kontext wiederherstellen",
  },
  Plugin: {
    Name: "Plugins",
  },
  FineTuned: {
    Sysmessage: "Du bist ein Assistent",
  },
  SearchChat: {
    Name: "Suche",
    Page: {
      Title: "Chatverlauf durchsuchen",
      Search: "Suchbegriff eingeben",
      NoResult: "Keine Ergebnisse gefunden",
      NoData: "Keine Daten",
      Loading: "Laden",

      SubTitle: (count: number) => `${count} Ergebnisse gefunden`,
    },
    Item: {
      View: "Ansehen",
    },
  },
  Mask: {
    Name: "Masken",
    Page: {
      Title: "Vordefinierte Rollenmasken",
      SubTitle: (count: number) =>
        `${count} vordefinierte Rollenbeschreibungen`,
      Search: "Rollenmasken suchen",
      Create: "Neu erstellen",
    },
    Item: {
      Info: (count: number) => `Beinhaltet ${count} vordefinierte GesprÃ¤che`,
      Chat: "GesprÃ¤ch",
      View: "Anzeigen",
      Edit: "Bearbeiten",
      Delete: "LÃ¶schen",
      DeleteConfirm: "BestÃ¤tigen Sie das LÃ¶schen?",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `Vordefinierte Maske bearbeiten ${readonly ? "ï¼ˆNur lesenï¼‰" : ""}`,
      Download: "Vorgabe herunterladen",
      Clone: "Vorgabe klonen",
    },
    Config: {
      Avatar: "Rollen-Avatar",
      Name: "Rollenname",
      Sync: {
        Title: "Globale Einstellungen verwenden",
        SubTitle:
          "Soll das aktuelle GesprÃ¤ch die globalen Modelleinstellungen verwenden?",
        Confirm:
          "Die benutzerdefinierten Einstellungen des aktuellen GesprÃ¤chs werden automatisch Ã¼berschrieben. BestÃ¤tigen Sie, dass Sie die globalen Einstellungen aktivieren mÃ¶chten?",
      },
      HideContext: {
        Title: "Vordefinierte GesprÃ¤che ausblenden",
        SubTitle:
          "Nach dem Ausblenden werden vordefinierte GesprÃ¤che nicht mehr im Chat angezeigt",
      },
      Share: {
        Title: "Diese Maske teilen",
        SubTitle: "Generieren Sie einen Direktlink zu dieser Maske",
        Action: "Link kopieren",
      },
    },
  },
  NewChat: {
    Return: "ZurÃ¼ck",
    Skip: "Direkt beginnen",
    NotShow: "Nicht mehr anzeigen",
    ConfirmNoShow:
      "BestÃ¤tigen Sie die Deaktivierung? Nach der Deaktivierung kÃ¶nnen Sie jederzeit in den Einstellungen wieder aktivieren.",
    Title: "WÃ¤hlen Sie eine Maske aus",
    SubTitle:
      "Starten Sie jetzt und lassen Sie sich von den Gedanken hinter der Maske inspirieren",
    More: "Alle anzeigen",
  },

  URLCommand: {
    Code: "Ein Zugangscode wurde im Link gefunden. MÃ¶chten Sie diesen automatisch einfÃ¼gen?",
    Settings:
      "Vordefinierte Einstellungen wurden im Link gefunden. MÃ¶chten Sie diese automatisch einfÃ¼gen?",
  },

  UI: {
    Confirm: "BestÃ¤tigen",
    Cancel: "Abbrechen",
    Close: "SchlieÃŸen",
    Create: "Neu erstellen",
    Edit: "Bearbeiten",
    Export: "Exportieren",
    Import: "Importieren",
    Sync: "Synchronisieren",
    Config: "Konfigurieren",
  },
  Exporter: {
    Description: {
      Title: "Nur Nachrichten nach dem LÃ¶schen des Kontexts werden angezeigt",
    },
    Model: "Modell",
    Messages: "Nachrichten",
    Topic: "Thema",
    Time: "Zeit",
  },
};

export default de;

