import { SubmitKey } from "../store/config";
import type { PartialLocaleType } from "./index";
import { getClientConfig } from "../config/client";
import { SAAS_CHAT_UTM_URL } from "@/app/constant";
const isApp = !!getClientConfig()?.isApp;

const fr: PartialLocaleType = {
  WIP: "Prochainement...",
  Error: {
    Unauthorized: isApp
      ? `ðŸ˜† La conversation a rencontrÃ© quelques problÃ¨mes, pas de panique :
    \\ 1ï¸âƒ£ Si vous souhaitez commencer sans configuration, [cliquez ici pour dÃ©marrer la conversation immÃ©diatement ðŸš€](${SAAS_CHAT_UTM_URL})
    \\ 2ï¸âƒ£ Si vous souhaitez utiliser vos propres ressources OpenAI, cliquez [ici](/#/settings) pour modifier les paramÃ¨tres âš™ï¸`
      : `ðŸ˜† La conversation a rencontrÃ© quelques problÃ¨mes, pas de panique :
    \ 1ï¸âƒ£ Si vous souhaitez commencer sans configuration, [cliquez ici pour dÃ©marrer la conversation immÃ©diatement ðŸš€](${SAAS_CHAT_UTM_URL})
    \ 2ï¸âƒ£ Si vous utilisez une version dÃ©ployÃ©e privÃ©e, cliquez [ici](/#/auth) pour entrer la clÃ© d'accÃ¨s ðŸ”‘
    \ 3ï¸âƒ£ Si vous souhaitez utiliser vos propres ressources OpenAI, cliquez [ici](/#/settings) pour modifier les paramÃ¨tres âš™ï¸
 `,
  },
  Auth: {
    Title: "Mot de passe requis",
    Tips: "L'administrateur a activÃ© la vÃ©rification par mot de passe. Veuillez entrer le code d'accÃ¨s ci-dessous",
    SubTips: "Ou entrez votre clÃ© API OpenAI ou Google",
    Input: "Entrez le code d'accÃ¨s ici",
    Confirm: "Confirmer",
    Later: "Plus tard",
    Return: "Retour",
    SaasTips:
      "La configuration est trop compliquÃ©e, je veux l'utiliser immÃ©diatement",
    TopTips:
      "ðŸ¥³ Offre de lancement HeyChat AI, dÃ©bloquez OpenAI o1, GPT-4o, Claude-3.5 et les derniers grands modÃ¨les",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} conversations`,
  },
  Chat: {
    SubTitle: (count: number) => `Total de ${count} conversations`,
    EditMessage: {
      Title: "Modifier l'historique des messages",
      Topic: {
        Title: "Sujet de la discussion",
        SubTitle: "Modifier le sujet de la discussion actuel",
      },
    },
    Actions: {
      ChatList: "Voir la liste des messages",
      CompressedHistory: "Voir l'historique des prompts compressÃ©s",
      Export: "Exporter l'historique de la discussion",
      Copy: "Copier",
      Stop: "ArrÃªter",
      Retry: "RÃ©essayer",
      Pin: "Ã‰pingler",
      PinToastContent: "1 conversation Ã©pinglÃ©e aux prompts prÃ©dÃ©finis",
      PinToastAction: "Voir",
      Delete: "Supprimer",
      Edit: "Modifier",
      RefreshTitle: "Actualiser le titre",
      RefreshToast: "Demande d'actualisation du titre envoyÃ©e",
    },
    Commands: {
      new: "Nouvelle discussion",
      newm: "CrÃ©er une discussion Ã  partir du masque",
      next: "Discussion suivante",
      prev: "Discussion prÃ©cÃ©dente",
      clear: "Effacer le contexte",
      del: "Supprimer la discussion",
    },
    InputActions: {
      Stop: "ArrÃªter la rÃ©ponse",
      ToBottom: "Aller au plus rÃ©cent",
      Theme: {
        auto: "ThÃ¨me automatique",
        light: "Mode clair",
        dark: "Mode sombre",
      },
      Prompt: "Commandes rapides",
      Masks: "Tous les masques",
      Clear: "Effacer la discussion",
      Settings: "ParamÃ¨tres de la discussion",
      UploadImage: "TÃ©lÃ©charger une image",
    },
    Rename: "Renommer la discussion",
    Typing: "En train d'Ã©crireâ€¦",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey} pour envoyer`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += "ï¼ŒShift + Enter pour passer Ã  la ligne";
      }
      return inputHints + "ï¼Œ/ pour complÃ©ter, : pour dÃ©clencher des commandes";
    },
    Send: "Envoyer",
    Config: {
      Reset: "Effacer la mÃ©moire",
      SaveAs: "Enregistrer comme masque",
    },
    IsContext: "Prompt prÃ©dÃ©fini",
  },
  Export: {
    Title: "Partager l'historique des discussions",
    Copy: "Tout copier",
    Download: "TÃ©lÃ©charger le fichier",
    Share: "Partager sur ShareGPT",
    MessageFromYou: "Utilisateur",
    MessageFromChatGPT: "ChatGPT",
    Format: {
      Title: "Format d'exportation",
      SubTitle: "Vous pouvez exporter en texte Markdown ou en image PNG",
    },
    IncludeContext: {
      Title: "Inclure le contexte du masque",
      SubTitle: "Afficher le contexte du masque dans les messages",
    },
    Steps: {
      Select: "SÃ©lectionner",
      Preview: "AperÃ§u",
    },
    Image: {
      Toast: "GÃ©nÃ©ration de la capture d'Ã©cran",
      Modal:
        "Appuyez longuement ou faites un clic droit pour enregistrer l'image",
    },
  },
  Select: {
    Search: "Rechercher des messages",
    All: "Tout sÃ©lectionner",
    Latest: "Derniers messages",
    Clear: "Effacer la sÃ©lection",
  },
  Memory: {
    Title: "RÃ©sumÃ© historique",
    EmptyContent: "Le contenu de la discussion est trop court pour Ãªtre rÃ©sumÃ©",
    Send: "Compresser automatiquement l'historique des discussions et l'envoyer comme contexte",
    Copy: "Copier le rÃ©sumÃ©",
    Reset: "[unused]",
    ResetConfirm: "Confirmer la suppression du rÃ©sumÃ© historique ?",
  },
  Home: {
    NewChat: "Nouvelle discussion",
    DeleteChat: "Confirmer la suppression de la discussion sÃ©lectionnÃ©e ?",
    DeleteToast: "Discussion supprimÃ©e",
    Revert: "Annuler",
  },
  Settings: {
    Title: "ParamÃ¨tres",
    SubTitle: "Toutes les options de configuration",

    Danger: {
      Reset: {
        Title: "RÃ©initialiser tous les paramÃ¨tres",
        SubTitle:
          "RÃ©initialiser toutes les options de configuration aux valeurs par dÃ©faut",
        Action: "RÃ©initialiser maintenant",
        Confirm: "Confirmer la rÃ©initialisation de tous les paramÃ¨tres ?",
      },
      Clear: {
        Title: "Effacer toutes les donnÃ©es",
        SubTitle:
          "Effacer toutes les discussions et les donnÃ©es de configuration",
        Action: "Effacer maintenant",
        Confirm:
          "Confirmer l'effacement de toutes les discussions et donnÃ©es de configuration ?",
      },
    },
    Lang: {
      Name: "Language", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: "Toutes les langues",
    },
    Avatar: "Avatar",
    FontSize: {
      Title: "Taille de la police",
      SubTitle: "Taille de la police pour le contenu des discussions",
    },
    FontFamily: {
      Title: "Police de Chat",
      SubTitle:
        "Police du contenu du chat, laissez vide pour appliquer la police par dÃ©faut globale",
      Placeholder: "Nom de la Police",
    },
    InjectSystemPrompts: {
      Title: "Injecter des invites systÃ¨me",
      SubTitle:
        "Ajouter de maniÃ¨re forcÃ©e une invite systÃ¨me simulÃ©e de ChatGPT au dÃ©but de chaque liste de messages",
    },
    InputTemplate: {
      Title: "PrÃ©traitement des entrÃ©es utilisateur",
      SubTitle:
        "Le dernier message de l'utilisateur sera intÃ©grÃ© dans ce modÃ¨le",
    },

    Update: {
      Version: (x: string) => `Version actuelle : ${x}`,
      IsLatest: "Vous avez la derniÃ¨re version",
      CheckUpdate: "VÃ©rifier les mises Ã  jour",
      IsChecking: "VÃ©rification des mises Ã  jour en cours...",
      FoundUpdate: (x: string) => `Nouvelle version trouvÃ©e : ${x}`,
      GoToUpdate: "Aller Ã  la mise Ã  jour",
    },
    SendKey: "Touche d'envoi",
    Theme: "ThÃ¨me",
    TightBorder: "Mode sans bordure",
    SendPreviewBubble: {
      Title: "Bulle d'aperÃ§u",
      SubTitle: "AperÃ§u du contenu Markdown dans la bulle d'aperÃ§u",
    },
    AutoGenerateTitle: {
      Title: "GÃ©nÃ©ration automatique de titres",
      SubTitle:
        "GÃ©nÃ©rer un titre appropriÃ© en fonction du contenu de la discussion",
    },
    Sync: {
      CloudState: "DonnÃ©es cloud",
      NotSyncYet: "Pas encore synchronisÃ©",
      Success: "Synchronisation rÃ©ussie",
      Fail: "Ã‰chec de la synchronisation",

      Config: {
        Modal: {
          Title: "Configurer la synchronisation cloud",
          Check: "VÃ©rifier la disponibilitÃ©",
        },
        SyncType: {
          Title: "Type de synchronisation",
          SubTitle: "Choisissez le serveur de synchronisation prÃ©fÃ©rÃ©",
        },
        Proxy: {
          Title: "Activer le proxy",
          SubTitle:
            "Lors de la synchronisation dans le navigateur, le proxy doit Ãªtre activÃ© pour Ã©viter les restrictions de domaine croisÃ©",
        },
        ProxyUrl: {
          Title: "Adresse du proxy",
          SubTitle:
            "Uniquement pour le proxy de domaine croisÃ© fourni par le projet",
        },

        WebDav: {
          Endpoint: "Adresse WebDAV",
          UserName: "Nom d'utilisateur",
          Password: "Mot de passe",
        },

        UpStash: {
          Endpoint: "URL REST Redis UpStash",
          UserName: "Nom de sauvegarde",
          Password: "Token REST Redis UpStash",
        },
      },

      LocalState: "DonnÃ©es locales",
      Overview: (overview: any) => {
        return `${overview.chat} discussions, ${overview.message} messages, ${overview.prompt} invites, ${overview.mask} masques`;
      },
      ImportFailed: "Ã‰chec de l'importation",
    },
    Mask: {
      Splash: {
        Title: "Page de dÃ©marrage du masque",
        SubTitle:
          "Afficher la page de dÃ©marrage du masque lors de la crÃ©ation d'une nouvelle discussion",
      },
      Builtin: {
        Title: "Masquer les masques intÃ©grÃ©s",
        SubTitle:
          "Masquer les masques intÃ©grÃ©s dans toutes les listes de masques",
      },
    },
    Prompt: {
      Disable: {
        Title: "DÃ©sactiver la complÃ©tion automatique des invites",
        SubTitle:
          "Saisir / au dÃ©but de la zone de texte pour dÃ©clencher la complÃ©tion automatique",
      },
      List: "Liste des invites personnalisÃ©es",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} intÃ©grÃ©es, ${custom} dÃ©finies par l'utilisateur`,
      Edit: "Modifier",
      Modal: {
        Title: "Liste des invites",
        Add: "CrÃ©er",
        Search: "Rechercher des invites",
      },
      EditModal: {
        Title: "Modifier les invites",
      },
    },
    HistoryCount: {
      Title: "Nombre de messages historiques",
      SubTitle: "Nombre de messages historiques envoyÃ©s avec chaque demande",
    },
    CompressThreshold: {
      Title: "Seuil de compression des messages historiques",
      SubTitle:
        "Compresser les messages historiques lorsque leur longueur dÃ©passe cette valeur",
    },

    Usage: {
      Title: "VÃ©rification du solde",
      SubTitle(used: any, total: any) {
        return `UtilisÃ© ce mois-ci : $${used}, Total d'abonnement : $${total}`;
      },
      IsChecking: "VÃ©rification en coursâ€¦",
      Check: "Re-vÃ©rifier",
      NoAccess:
        "Entrez la clÃ© API ou le mot de passe d'accÃ¨s pour vÃ©rifier le solde",
    },

    Access: {
      SaasStart: {
        Title: "Utiliser HeyChat AI",
        Label: "(La solution la plus rentable)",
        SubTitle:
          "Officiellement maintenu par HeyChat, prÃªt Ã  l'emploi sans configuration, prend en charge les derniers grands modÃ¨les comme OpenAI o1, GPT-4o et Claude-3.5",
        ChatNow: "Discuter maintenant",
      },

      AccessCode: {
        Title: "Mot de passe d'accÃ¨s",
        SubTitle: "L'administrateur a activÃ© l'accÃ¨s sÃ©curisÃ©",
        Placeholder: "Veuillez entrer le mot de passe d'accÃ¨s",
      },
      CustomEndpoint: {
        Title: "Interface personnalisÃ©e",
        SubTitle: "Utiliser un service Azure ou OpenAI personnalisÃ©",
      },
      Provider: {
        Title: "Fournisseur de modÃ¨le",
        SubTitle: "Changer de fournisseur de service",
      },
      OpenAI: {
        ApiKey: {
          Title: "ClÃ© API",
          SubTitle:
            "Utiliser une clÃ© OpenAI personnalisÃ©e pour contourner les restrictions d'accÃ¨s par mot de passe",
          Placeholder: "ClÃ© API OpenAI",
        },

        Endpoint: {
          Title: "Adresse de l'interface",
          SubTitle: "Doit inclure http(s):// en dehors de l'adresse par dÃ©faut",
        },
      },
      Azure: {
        ApiKey: {
          Title: "ClÃ© d'interface",
          SubTitle:
            "Utiliser une clÃ© Azure personnalisÃ©e pour contourner les restrictions d'accÃ¨s par mot de passe",
          Placeholder: "ClÃ© API Azure",
        },

        Endpoint: {
          Title: "Adresse de l'interface",
          SubTitle: "Exemple :",
        },

        ApiVerion: {
          Title: "Version de l'interface (version API azure)",
          SubTitle: "Choisissez une version spÃ©cifique",
        },
      },
      Anthropic: {
        ApiKey: {
          Title: "ClÃ© d'interface",
          SubTitle:
            "Utiliser une clÃ© Anthropic personnalisÃ©e pour contourner les restrictions d'accÃ¨s par mot de passe",
          Placeholder: "ClÃ© API Anthropic",
        },

        Endpoint: {
          Title: "Adresse de l'interface",
          SubTitle: "Exemple :",
        },

        ApiVerion: {
          Title: "Version de l'interface (version API claude)",
          SubTitle: "Choisissez une version spÃ©cifique de l'API",
        },
      },
      Google: {
        ApiKey: {
          Title: "ClÃ© API",
          SubTitle: "Obtenez votre clÃ© API Google AI",
          Placeholder: "Entrez votre clÃ© API Google AI Studio",
        },

        Endpoint: {
          Title: "Adresse de l'interface",
          SubTitle: "Exemple :",
        },

        ApiVersion: {
          Title: "Version de l'API (pour gemini-pro uniquement)",
          SubTitle: "Choisissez une version spÃ©cifique de l'API",
        },
        GoogleSafetySettings: {
          Title: "Niveau de filtrage de sÃ©curitÃ© Google",
          SubTitle: "DÃ©finir le niveau de filtrage du contenu",
        },
      },
      Baidu: {
        ApiKey: {
          Title: "ClÃ© API",
          SubTitle: "Utiliser une clÃ© API Baidu personnalisÃ©e",
          Placeholder: "ClÃ© API Baidu",
        },
        SecretKey: {
          Title: "ClÃ© secrÃ¨te",
          SubTitle: "Utiliser une clÃ© secrÃ¨te Baidu personnalisÃ©e",
          Placeholder: "ClÃ© secrÃ¨te Baidu",
        },
        Endpoint: {
          Title: "Adresse de l'interface",
          SubTitle:
            "Non pris en charge pour les configurations personnalisÃ©es dans .env",
        },
      },
      ByteDance: {
        ApiKey: {
          Title: "ClÃ© d'interface",
          SubTitle: "Utiliser une clÃ© API ByteDance personnalisÃ©e",
          Placeholder: "ClÃ© API ByteDance",
        },
        Endpoint: {
          Title: "Adresse de l'interface",
          SubTitle: "Exemple :",
        },
      },
      Alibaba: {
        ApiKey: {
          Title: "ClÃ© d'interface",
          SubTitle: "Utiliser une clÃ© API Alibaba Cloud personnalisÃ©e",
          Placeholder: "ClÃ© API Alibaba Cloud",
        },
        Endpoint: {
          Title: "Adresse de l'interface",
          SubTitle: "Exemple :",
        },
      },
      AI302: {
        ApiKey: {
          Title: "ClÃ© d'interface",
          SubTitle: "Utiliser une clÃ© API 302.AI personnalisÃ©e",
          Placeholder: "ClÃ© API 302.AI",
        },
        Endpoint: {
          Title: "Adresse de l'endpoint",
          SubTitle: "Exemple :",
        },
      },
      CustomModel: {
        Title: "Nom du modÃ¨le personnalisÃ©",
        SubTitle:
          "Ajouter des options de modÃ¨les personnalisÃ©s, sÃ©parÃ©es par des virgules",
      },
    },

    Model: "ModÃ¨le",
    CompressModel: {
      Title: "ModÃ¨le de compression",
      SubTitle: "ModÃ¨le utilisÃ© pour compresser l'historique",
    },
    Temperature: {
      Title: "AlÃ©atoire (temperature)",
      SubTitle: "Plus la valeur est Ã©levÃ©e, plus les rÃ©ponses sont alÃ©atoires",
    },
    TopP: {
      Title: "Ã‰chantillonnage par noyau (top_p)",
      SubTitle:
        "Semblable Ã  l'alÃ©atoire, mais ne pas modifier en mÃªme temps que l'alÃ©atoire",
    },
    MaxTokens: {
      Title: "Limite de rÃ©ponse unique (max_tokens)",
      SubTitle: "Nombre maximal de tokens utilisÃ©s pour une interaction unique",
    },
    PresencePenalty: {
      Title: "NouveautÃ© du sujet (presence_penalty)",
      SubTitle:
        "Plus la valeur est Ã©levÃ©e, plus il est probable d'Ã©largir aux nouveaux sujets",
    },
    FrequencyPenalty: {
      Title: "PÃ©nalitÃ© de frÃ©quence (frequency_penalty)",
      SubTitle:
        "Plus la valeur est Ã©levÃ©e, plus il est probable de rÃ©duire les rÃ©pÃ©titions",
    },
  },
  Store: {
    DefaultTopic: "Nouvelle discussion",
    BotHello: "Comment puis-je vous aider ?",
    Error: "Une erreur est survenue, veuillez rÃ©essayer plus tard",
    Prompt: {
      History: (content: string) =>
        "Voici le rÃ©sumÃ© de la discussion prÃ©cÃ©dente : " + content,
      Topic:
        "Utilisez quatre Ã  cinq mots pour retourner le sujet succinct de cette phrase, sans explication, sans ponctuation, sans interjections, sans texte superflu, sans gras. Si aucun sujet, retournez simplement Â« discussion informelle Â»",
      Summarize:
        "Faites un rÃ©sumÃ© succinct de la discussion, Ã  utiliser comme prompt de contexte ultÃ©rieur, en moins de 200 mots",
    },
  },
  Copy: {
    Success: "CopiÃ© dans le presse-papiers",
    Failed: "Ã‰chec de la copie, veuillez autoriser l'accÃ¨s au presse-papiers",
  },
  Download: {
    Success: "Le contenu a Ã©tÃ© tÃ©lÃ©chargÃ© dans votre rÃ©pertoire.",
    Failed: "Ã‰chec du tÃ©lÃ©chargement.",
  },
  Context: {
    Toast: (x: any) => `Contient ${x} invites prÃ©dÃ©finies`,
    Edit: "ParamÃ¨tres de la discussion actuelle",
    Add: "Ajouter une discussion",
    Clear: "Contexte effacÃ©",
    Revert: "Restaurer le contexte",
  },
  Plugin: {
    Name: "Plugin",
  },
  FineTuned: {
    Sysmessage: "Vous Ãªtes un assistant",
  },
  SearchChat: {
    Name: "Recherche",
    Page: {
      Title: "Rechercher dans l'historique des discussions",
      Search: "Entrez le mot-clÃ© de recherche",
      NoResult: "Aucun rÃ©sultat trouvÃ©",
      NoData: "Aucune donnÃ©e",
      Loading: "Chargement",

      SubTitle: (count: number) => `${count} rÃ©sultats trouvÃ©s`,
    },
    Item: {
      View: "Voir",
    },
  },
  Mask: {
    Name: "Masque",
    Page: {
      Title: "Masques de rÃ´le prÃ©dÃ©finis",
      SubTitle: (count: number) => `${count} dÃ©finitions de rÃ´le prÃ©dÃ©finies`,
      Search: "Rechercher des masques de rÃ´le",
      Create: "CrÃ©er",
    },
    Item: {
      Info: (count: number) => `Contient ${count} discussions prÃ©dÃ©finies`,
      Chat: "Discussion",
      View: "Voir",
      Edit: "Modifier",
      Delete: "Supprimer",
      DeleteConfirm: "Confirmer la suppression ?",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `Modifier le masque prÃ©dÃ©fini ${readonly ? " (lecture seule)" : ""}`,
      Download: "TÃ©lÃ©charger le masque",
      Clone: "Cloner le masque",
    },
    Config: {
      Avatar: "Avatar du rÃ´le",
      Name: "Nom du rÃ´le",
      Sync: {
        Title: "Utiliser les paramÃ¨tres globaux",
        SubTitle:
          "Cette discussion utilise-t-elle les paramÃ¨tres du modÃ¨le globaux ?",
        Confirm:
          "Les paramÃ¨tres personnalisÃ©s de cette discussion seront automatiquement remplacÃ©s. Confirmer l'activation des paramÃ¨tres globaux ?",
      },
      HideContext: {
        Title: "Masquer les discussions prÃ©dÃ©finies",
        SubTitle:
          "Les discussions prÃ©dÃ©finies ne seront pas affichÃ©es dans l'interface de discussion aprÃ¨s masquage",
      },
      Share: {
        Title: "Partager ce masque",
        SubTitle: "GÃ©nÃ©rer un lien direct pour ce masque",
        Action: "Copier le lien",
      },
    },
  },
  NewChat: {
    Return: "Retour",
    Skip: "Commencer directement",
    NotShow: "Ne plus afficher",
    ConfirmNoShow:
      "Confirmer la dÃ©sactivation ? Vous pourrez rÃ©activer cette option Ã  tout moment dans les paramÃ¨tres.",
    Title: "Choisir un masque",
    SubTitle: "Commencez maintenant, rencontrez les pensÃ©es derriÃ¨re le masque",
    More: "Voir tout",
  },

  URLCommand: {
    Code: "Code d'accÃ¨s dÃ©tectÃ© dans le lien, souhaitez-vous le remplir automatiquement ?",
    Settings:
      "ParamÃ¨tres prÃ©dÃ©finis dÃ©tectÃ©s dans le lien, souhaitez-vous les remplir automatiquement ?",
  },

  UI: {
    Confirm: "Confirmer",
    Cancel: "Annuler",
    Close: "Fermer",
    Create: "CrÃ©er",
    Edit: "Modifier",
    Export: "Exporter",
    Import: "Importer",
    Sync: "Synchroniser",
    Config: "Configurer",
  },
  Exporter: {
    Description: {
      Title:
        "Seuls les messages aprÃ¨s avoir effacÃ© le contexte seront affichÃ©s",
    },
    Model: "ModÃ¨le",
    Messages: "Messages",
    Topic: "Sujet",
    Time: "Temps",
  },
};

export default fr;

