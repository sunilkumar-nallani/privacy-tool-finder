export interface Question {
  id: number;
  question: string;
  options: {
    id: string;
    text: string;
    weight: {
      [key: string]: number;
    };
  }[];
}

export interface Tool {
  name: string;
  category: string;
  description: string;
  website: string;
  icon: string;
}

export const questions: Question[] = [
  {
    id: 1,
    question: "How important is privacy to you in your digital life?",
    options: [
      {
        id: "privacy_critical",
        text: "Extremely important - I want maximum privacy",
        weight: { tor: 3, signal: 3, protonvpn: 3, linux: 3, grapheneos: 3 }
      },
      {
        id: "privacy_important",
        text: "Very important - I care about privacy",
        weight: { firefox: 2, signal: 2, protonvpn: 2, linux: 2 }
      },
      {
        id: "privacy_moderate",
        text: "Somewhat important - I want some privacy",
        weight: { brave: 2, firefox: 1, signal: 1, mullvad: 1 }
      },
      {
        id: "privacy_basic",
        text: "Basic privacy is fine",
        weight: { brave: 1, firefox: 1 }
      }
    ]
  },
  {
    id: 2,
    question: "How tech-savvy are you?",
    options: [
      {
        id: "expert",
        text: "Expert - I love complex tools and configurations",
        weight: { tor: 3, linux: 3, grapheneos: 2, session: 1 }
      },
      {
        id: "advanced",
        text: "Advanced - I can handle some complexity",
        weight: { firefox: 2, linux: 2, mullvad: 2, signal: 1 }
      },
      {
        id: "intermediate",
        text: "Intermediate - I prefer user-friendly tools",
        weight: { brave: 2, firefox: 1, protonvpn: 2, signal: 2 }
      },
      {
        id: "beginner",
        text: "Beginner - I want simple, easy-to-use tools",
        weight: { brave: 3, protonvpn: 1, signal: 2 }
      }
    ]
  },
  {
    id: 3,
    question: "What's your primary concern about online privacy?",
    options: [
      {
        id: "government",
        text: "Government surveillance",
        weight: { tor: 3, signal: 3, mullvad: 2, linux: 2 }
      },
      {
        id: "corporations",
        text: "Corporate data collection",
        weight: { firefox: 2, brave: 2, protonvpn: 2, signal: 1 }
      },
      {
        id: "hackers",
        text: "Hackers and cybercriminals",
        weight: { protonvpn: 3, signal: 2, firefox: 1 }
      },
      {
        id: "advertising",
        text: "Targeted advertising",
        weight: { brave: 3, firefox: 2, protonvpn: 1 }
      }
    ]
  },
  {
    id: 4,
    question: "Which operating system do you currently use?",
    options: [
      {
        id: "windows",
        text: "Windows",
        weight: { brave: 1, firefox: 2, protonvpn: 1, signal: 1 }
      },
      {
        id: "macos",
        text: "macOS",
        weight: { firefox: 1, brave: 1, protonvpn: 2, signal: 2 }
      },
      {
        id: "linux",
        text: "Linux",
        weight: { firefox: 2, tor: 2, linux: 3, mullvad: 2 }
      },
      {
        id: "android",
        text: "Android (mobile focus)",
        weight: { brave: 1, signal: 3, grapheneos: 2, protonvpn: 1 }
      },
      {
        id: "ios",
        text: "iOS (mobile focus)",
        weight: { firefox: 1, signal: 2, protonvpn: 2 }
      }
    ]
  },
  {
    id: 5,
    question: "How often do you use a VPN?",
    options: [
      {
        id: "always",
        text: "Always - I never browse without one",
        weight: { mullvad: 3, protonvpn: 2, tor: 2 }
      },
      {
        id: "often",
        text: "Often - for sensitive activities",
        weight: { protonvpn: 3, mullvad: 2, brave: 1 }
      },
      {
        id: "sometimes",
        text: "Sometimes - when I remember",
        weight: { protonvpn: 2, brave: 1, firefox: 1 }
      },
      {
        id: "never",
        text: "Never - I don't use VPNs",
        weight: { brave: 1, firefox: 1, tor: 1 }
      }
    ]
  },
  {
    id: 6,
    question: "What's most important to you in a web browser?",
    options: [
      {
        id: "privacy_browser",
        text: "Maximum privacy and anonymity",
        weight: { tor: 3, firefox: 2, brave: 1 }
      },
      {
        id: "speed_browser",
        text: "Speed and performance",
        weight: { brave: 3, firefox: 1 }
      },
      {
        id: "ease_browser",
        text: "Ease of use and compatibility",
        weight: { brave: 2, firefox: 2 }
      },
      {
        id: "features_browser",
        text: "Built-in privacy features",
        weight: { brave: 2, firefox: 2, tor: 1 }
      }
    ]
  },
  {
    id: 7,
    question: "How do you primarily communicate with others?",
    options: [
      {
        id: "messaging",
        text: "Text messaging and chat apps",
        weight: { signal: 3, session: 2 }
      },
      {
        id: "email",
        text: "Email",
        weight: { signal: 1, protonvpn: 1 }
      },
      {
        id: "social",
        text: "Social media platforms",
        weight: { signal: 2, brave: 1, firefox: 1 }
      },
      {
        id: "calls",
        text: "Voice and video calls",
        weight: { signal: 3, session: 1 }
      }
    ]
  },
  {
    id: 8,
    question: "Are you willing to pay for privacy tools?",
    options: [
      {
        id: "pay_premium",
        text: "Yes, I'll pay for premium privacy",
        weight: { mullvad: 3, protonvpn: 2, grapheneos: 1 }
      },
      {
        id: "pay_reasonable",
        text: "Yes, if reasonably priced",
        weight: { protonvpn: 2, mullvad: 1, signal: 1 }
      },
      {
        id: "free_preferred",
        text: "I prefer free options",
        weight: { firefox: 2, brave: 2, signal: 3, tor: 2 }
      },
      {
        id: "free_only",
        text: "Only free tools",
        weight: { firefox: 3, brave: 3, signal: 3, tor: 3, linux: 2 }
      }
    ]
  },
  {
    id: 9,
    question: "How important is anonymity vs. just privacy?",
    options: [
      {
        id: "anonymity_critical",
        text: "Anonymity is critical - no one should trace me",
        weight: { tor: 3, mullvad: 2, session: 2, linux: 1 }
      },
      {
        id: "anonymity_important",
        text: "Anonymity is important but not critical",
        weight: { tor: 2, mullvad: 2, signal: 1, firefox: 1 }
      },
      {
        id: "privacy_enough",
        text: "Privacy is enough - some tracking is okay",
        weight: { brave: 2, firefox: 2, protonvpn: 2, signal: 2 }
      },
      {
        id: "convenience_first",
        text: "I prioritize convenience over anonymity",
        weight: { brave: 3, firefox: 1, protonvpn: 1, signal: 1 }
      }
    ]
  },
  {
    id: 10,
    question: "What's your main device type?",
    options: [
      {
        id: "desktop",
        text: "Desktop/Laptop computer",
        weight: { firefox: 2, brave: 2, tor: 2, linux: 3, mullvad: 1 }
      },
      {
        id: "mobile",
        text: "Smartphone",
        weight: { signal: 3, grapheneos: 3, brave: 1, protonvpn: 1 }
      },
      {
        id: "both",
        text: "Both desktop and mobile equally",
        weight: { firefox: 1, brave: 1, signal: 2, protonvpn: 2 }
      },
      {
        id: "tablet",
        text: "Tablet",
        weight: { brave: 1, firefox: 1, signal: 1, protonvpn: 1 }
      }
    ]
  }
];

export const extendedQuestions: Question[] = [
  {
    id: 11,
    question: "How often do you download files from the internet?",
    options: [
      {
        id: "daily",
        text: "Daily - I download lots of files",
        weight: { linux: 2, tor: 1, mullvad: 2 }
      },
      {
        id: "weekly",
        text: "Weekly - moderate downloading",
        weight: { firefox: 1, brave: 1, protonvpn: 1 }
      },
      {
        id: "monthly",
        text: "Monthly - occasional downloads",
        weight: { brave: 1, firefox: 1 }
      },
      {
        id: "rarely",
        text: "Rarely - I mostly browse and stream",
        weight: { brave: 2, signal: 1 }
      }
    ]
  },
  {
    id: 12,
    question: "Do you use cloud storage services?",
    options: [
      {
        id: "avoid_cloud",
        text: "No, I avoid cloud storage for privacy",
        weight: { linux: 3, tor: 2, session: 2, grapheneos: 1 }
      },
      {
        id: "encrypted_cloud",
        text: "Only encrypted cloud services",
        weight: { mullvad: 2, protonvpn: 2, signal: 1 }
      },
      {
        id: "mainstream_cloud",
        text: "Yes, mainstream services (Google, Apple, etc.)",
        weight: { brave: 1, firefox: 1, signal: 1 }
      },
      {
        id: "mixed_cloud",
        text: "Mix of encrypted and mainstream",
        weight: { firefox: 1, brave: 1, protonvpn: 1 }
      }
    ]
  },
  {
    id: 13,
    question: "How do you feel about cryptocurrency?",
    options: [
      {
        id: "crypto_advocate",
        text: "Strong advocate - I use crypto for privacy",
        weight: { mullvad: 3, tor: 2, session: 2 }
      },
      {
        id: "crypto_interested",
        text: "Interested - I use some crypto",
        weight: { mullvad: 2, protonvpn: 1, tor: 1 }
      },
      {
        id: "crypto_neutral",
        text: "Neutral - don't really use it",
        weight: { firefox: 1, brave: 1, signal: 1 }
      },
      {
        id: "crypto_avoid",
        text: "Avoid - prefer traditional payments",
        weight: { brave: 1, firefox: 1, protonvpn: 1 }
      }
    ]
  },
  {
    id: 14,
    question: "What's your approach to social media?",
    options: [
      {
        id: "social_avoid",
        text: "I avoid social media completely",
        weight: { tor: 3, session: 2, linux: 2, grapheneos: 1 }
      },
      {
        id: "social_minimal",
        text: "Minimal use with privacy settings",
        weight: { firefox: 2, brave: 2, signal: 2, mullvad: 1 }
      },
      {
        id: "social_moderate",
        text: "Moderate use - I'm somewhat careful",
        weight: { brave: 2, firefox: 1, signal: 1, protonvpn: 1 }
      },
      {
        id: "social_heavy",
        text: "Heavy user - convenience over privacy",
        weight: { brave: 1, firefox: 1 }
      }
    ]
  },
  {
    id: 15,
    question: "How important is open-source software to you?",
    options: [
      {
        id: "opensource_essential",
        text: "Essential - I only use open-source when possible",
        weight: { firefox: 3, tor: 3, linux: 3, signal: 2, session: 2 }
      },
      {
        id: "opensource_preferred",
        text: "Preferred - I choose open-source when available",
        weight: { firefox: 2, linux: 2, signal: 2, tor: 1 }
      },
      {
        id: "opensource_neutral",
        text: "Neutral - I don't really care",
        weight: { brave: 1, protonvpn: 1, mullvad: 1 }
      },
      {
        id: "proprietary_fine",
        text: "I'm fine with proprietary software",
        weight: { brave: 1, protonvpn: 1 }
      }
    ]
  },
  {
    id: 16,
    question: "How do you handle software updates?",
    options: [
      {
        id: "updates_immediate",
        text: "Install immediately for security",
        weight: { firefox: 2, brave: 2, signal: 2, protonvpn: 1 }
      },
      {
        id: "updates_reviewed",
        text: "Review and install carefully",
        weight: { linux: 2, tor: 1, firefox: 1 }
      },
      {
        id: "updates_delayed",
        text: "Wait and see - install later",
        weight: { brave: 1, firefox: 1 }
      },
      {
        id: "updates_automatic",
        text: "Automatic updates - I don't think about it",
        weight: { brave: 1, signal: 1 }
      }
    ]
  },
  {
    id: 17,
    question: "What's your biggest privacy concern on mobile?",
    options: [
      {
        id: "mobile_tracking",
        text: "Location and behavioral tracking",
        weight: { grapheneos: 3, signal: 2, mullvad: 1 }
      },
      {
        id: "mobile_apps",
        text: "App permissions and data collection",
        weight: { grapheneos: 2, signal: 2, linux: 1 }
      },
      {
        id: "mobile_communication",
        text: "Message and call interception",
        weight: { signal: 3, session: 2, grapheneos: 1 }
      },
      {
        id: "mobile_government",
        text: "Government surveillance",
        weight: { grapheneos: 3, signal: 2, session: 2, tor: 1 }
      }
    ]
  },
  {
    id: 18,
    question: "How comfortable are you with command-line interfaces?",
    options: [
      {
        id: "cli_expert",
        text: "Very comfortable - I prefer command line",
        weight: { linux: 3, tor: 2, mullvad: 1 }
      },
      {
        id: "cli_comfortable",
        text: "Comfortable when needed",
        weight: { linux: 2, firefox: 1, tor: 1 }
      },
      {
        id: "cli_basic",
        text: "Basic usage only",
        weight: { firefox: 1, brave: 1, protonvpn: 1 }
      },
      {
        id: "cli_avoid",
        text: "I avoid command line interfaces",
        weight: { brave: 2, protonvpn: 2, signal: 1 }
      }
    ]
  },
  {
    id: 19,
    question: "What's your tolerance for slower performance for privacy?",
    options: [
      {
        id: "performance_sacrifice",
        text: "I'll sacrifice significant performance for privacy",
        weight: { tor: 3, linux: 2, session: 2, grapheneos: 1 }
      },
      {
        id: "performance_some",
        text: "Some slowdown is acceptable",
        weight: { tor: 2, firefox: 2, mullvad: 2, signal: 1 }
      },
      {
        id: "performance_minimal",
        text: "Minimal impact only",
        weight: { brave: 2, firefox: 1, protonvpn: 2 }
      },
      {
        id: "performance_priority",
        text: "Performance is my priority",
        weight: { brave: 3, firefox: 1 }
      }
    ]
  },
  {
    id: 20,
    question: "How do you prefer to learn about new privacy tools?",
    options: [
      {
        id: "learn_research",
        text: "Deep research and technical documentation",
        weight: { linux: 2, tor: 2, session: 1, grapheneos: 1 }
      },
      {
        id: "learn_guides",
        text: "Step-by-step guides and tutorials",
        weight: { firefox: 2, signal: 2, protonvpn: 2, mullvad: 1 }
      },
      {
        id: "learn_recommendations",
        text: "Trusted recommendations from others",
        weight: { brave: 2, signal: 2, protonvpn: 1 }
      },
      {
        id: "learn_simple",
        text: "Simple explanations and quick setup",
        weight: { brave: 3, signal: 1, protonvpn: 1 }
      }
    ]
  }
];

export const tools: { [key: string]: Tool } = {
  brave: {
    name: "Brave Browser",
    category: "Browser",
    description: "Privacy-focused browser with built-in ad blocking and tracker protection. Fast and user-friendly.",
    website: "https://brave.com",
    icon: "🦁"
  },
  firefox: {
    name: "Firefox",
    category: "Browser", 
    description: "Open-source browser with strong privacy features and extensive customization options.",
    website: "https://firefox.com",
    icon: "🦊"
  },
  tor: {
    name: "Tor Browser",
    category: "Browser",
    description: "Maximum anonymity browser that routes traffic through the Tor network for ultimate privacy.",
    website: "https://torproject.org",
    icon: "🧅"
  },
  signal: {
    name: "Signal",
    category: "Messaging",
    description: "End-to-end encrypted messaging app trusted by privacy advocates worldwide.",
    website: "https://signal.org",
    icon: "💬"
  },
  session: {
    name: "Session",
    category: "Messaging",
    description: "Anonymous messaging app that doesn't require phone numbers and routes through onion network.",
    website: "https://getsession.org",
    icon: "🔒"
  },
  protonvpn: {
    name: "ProtonVPN",
    category: "VPN",
    description: "User-friendly VPN from the makers of ProtonMail with strong privacy policies.",
    website: "https://protonvpn.com",
    icon: "🛡️"
  },
  mullvad: {
    name: "Mullvad VPN",
    category: "VPN",
    description: "Privacy-focused VPN that accepts anonymous payments and doesn't log user data.",
    website: "https://mullvad.net",
    icon: "🦫"
  },
  linux: {
    name: "Linux OS",
    category: "Operating System",
    description: "Open-source operating system with strong privacy and security features.",
    website: "https://distrowatch.com",
    icon: "🐧"
  },
  grapheneos: {
    name: "GrapheneOS",
    category: "Operating System",
    description: "Hardened Android-based OS focused on privacy and security for mobile devices.",
    website: "https://grapheneos.org",
    icon: "📱"
  }
};