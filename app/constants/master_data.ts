export const allProjects: Project[] = [
  {
    title: "El Mercado Bangkok",
    subtitle: null,
    period: "Jun 2023 - Now",
    isActive: true,
    description:
      "Sole responsibility for front-end development using Flutter. Led the entire process from project initialization to structuring. configure Flavor environment for Dev, Prod, etc. Implemented the GetX Pattern for reactive state management.",
    details: [
      {
        title: "User Authentication",
        bullets: [
          "Implemented seamless email login/register.",
          "Integrated Apple, Facebook, and Google third-party authentication.",
        ],
      },
      {
        title: "Product Selection and Cart Management",
        bullets: [
          "Developed an intuitive product selection and cart management system.",
          "Utilized GetX for efficient and reactive cart management.",
        ],
      },
      {
        title: "Checkout and Payment",
        bullets: [
          "Implemented a smooth checkout process allowing users to choose delivery or pickup.",
          "Option to apply available coupons.",
          "Integrated payment options such as PromptPay and Credit Card via Stripe.",
        ],
      },
      {
        title: "Order Tracking",
        bullets: [
          "Implemented Firebase Cloud Messaging to get real-time order tracking.",
          "Users receive notifications for order confirmation, processing, and delivery.",
        ],
      },
      {
        title: "Dine-In",
        bullets: ["Implemented Scan QR Code to order in-restaurant dining."],
      },
      {
        title: "Google Maps Integration",
        bullets: [
          "Integrated Google Maps for user-friendly address selection and displaying restaurant locations.",
        ],
      },
      {
        title: "Marketing with Dynamic Links",
        bullets: [
          "Utilized Firebase Dynamic Links for marketing purposes, creating shareable links to attract new users",
        ],
      },
      {
        title: "Analytics and Crash Reporting",
        bullets: [
          "Integrated Firebase Crashlytics for crash reporting.",
          "Utilized Firebase Analytics for gathering insights into user behavior.",
        ],
      },
      {
        title: "Security Measures",
        bullets: ["Implemented SSL pinning for secure API communication."],
      },
    ],
    appIcon: "elmercado-app-icon.png",
    images: ["elmercado-01.png", "elmercado-02.png", "elmercado-03.png"],
    appleAppStoreUrl: "https://apps.apple.com/th/app/el-mercado/id6468034312",
    googlePlayStoreUrl:
      "https://play.google.com/store/apps/details?id=com.sybarite.elmercado",
    gitHubUrl: null,
  },
  {
    title: "Mewing by Mike Mew",
    subtitle: null,
    period: "Aug 2023 - Now",
    isActive: true,
    description:
      "Utilized Flutter (Rewritten from Ionic) for frontend development due to its readability and ease of comprehension for new developers. Led the entire process from project initialization to structuring. configure Flavor environment for Dev, Prod, etc. Implemented the GetX Pattern for reactive state management.",
    details: [
      {
        title: "Intern Training",
        bullets: [
          "Used as a teaching tool for interns to learn Flutter development.",
          "Focused on frontend development to enhance their understanding of UI/UX principles.",
          "Provides real-world application development experience.",
        ],
      },
      {
        title: "User Authentication",
        bullets: [
          "Implemented seamless email login/register.",
          "Integrated Apple, and Google third-party authentication.",
        ],
      },
      {
        title: "Instructional Videos",
        bullets: [
          "Display a comprehensive library of instructional videos and tutorials.",
          "Organized and tailored by Dr. Mike Mew to cater to users at different experience levels",
        ],
      },
      {
        title: "Personalized Guidance",
        bullets: [
          "Step-by-step guidance on tongue posture, jaw alignment, and facial development techniques.",
          "Personalized videos from Dr. Mike Mew based on user progress.",
        ],
      },
      {
        title: "Progress Tracking",
        bullets: [
          "Users can track their Mewing journey and monitor progress over time.",
          "Utilization of data chart graphs to visualize improvement.",
        ],
      },
      {
        title: "Subscription Model",
        bullets: [
          "Transitioned from a Paid-App model to Freemium with in-app purchase subscription.",
          "In-app purchase implementation for subscription activation.",
        ],
      },
      {
        title: "A/B Testing",
        bullets: [
          "Implemented Firebase A/B Testing to compare user journeys for purchasing subscriptions.",
          "Defined control and test variants to analyze and optimize the subscription purchase flow.",
        ],
      },
      {
        title: "Analytics and Crash Reporting",
        bullets: [
          "Integrated Firebase Crashlytics for crash reporting.",
          "Utilized Firebase Analytics for gathering insights into user behavior.",
        ],
      },
      {
        title: "Security Measures",
        bullets: ["Implemented SSL pinning for secure API communication."],
      },
    ],
    appIcon: "mewing-app-icon.png",
    images: ["mewing-01.png", "mewing-02.png", "mewing-03.png"],
    appleAppStoreUrl:
      "https://apps.apple.com/us/app/mewing-by-mike-mew/id1562833932",
    googlePlayStoreUrl:
      "https://play.google.com/store/apps/details?id=com.orthotropics.mewing",
    gitHubUrl: null,
  },
  {
    title: "VCTPDS",
    subtitle: "Internal App for Volvo Cars Thailand Central Distribution",
    period: "Nov 2022 - Now",
    isActive: true,
    description:
      "Sole responsibility for front-end development using Flutter. Led the entire process from project initialization to structuring. configure Flavor environment for Dev, Prod, etc. Implemented the GetX Pattern for reactive state management.",
    details: [
      {
        title: "User Authentication",
        bullets: [
          "Implemented email-based login/registration for technician access.",
        ],
      },
      {
        title: "Car Management",
        bullets: [
          "Displayed a list of cars assigned to technicians upon arrival.",
          "Integrated OCR ML Kit to scan VIN numbers for quick identification.",
        ],
      },
      {
        title: "Parking Position Tracking",
        bullets: [
          "Technicians can scan QR codes at parking positions to update the system.",
          "Allowed technicians to record fuel added in liters.",
        ],
      },
      {
        title: "Image Capture and Upload",
        bullets: [
          "Provided the option to take photos and add reports if the car has damage.",
          "Enabled technicians to take photos of the car from different angles and upload them for record-keeping.",
        ],
      },
      {
        title: "Document Scanning and Viewing",
        bullets: [
          "Implemented document scanning to PDF and uploading to the system.",
          "Provided a feature to view uploaded PDF documents.",
        ],
      },
      {
        title: "Status Updates",
        bullets: [
          "Technicians can update the status of cars based on their work progress.",
        ],
      },
      {
        title: "Security Measures",
        bullets: ["Implemented SSL pinning for secure API communication."],
      },
    ],
    appIcon: "vctpds-app-icon.png",
    images: ["vctpds-01.png", "vctpds-02.png", "vctpds-03.png"],
    appleAppStoreUrl: null,
    googlePlayStoreUrl: null,
    gitHubUrl: null,
  },
  {
    title: "JUST (v1.0.2 - 1.0.12)",
    subtitle: null,
    period: "Mar 2023 - Sep 2023",
    isActive: false,
    description:
      "Responsibility for front-end development using Flutter. Led the entire process from project initialization to structuring. configure Flavor environment for Dev, Prod, etc. Refactor from Clean Architecture to GetX Pattern (MVC) for reactive state management. ",
    details: [
      {
        title: "User Authentication",
        bullets: [
          "Implemented seamless email login/register.",
          "Integrated Apple, Facebook, and Google third-party authentication.",
        ],
      },
      {
        title: "Google Maps Integration",
        bullets: [
          "Integrated Google Maps for user-friendly address selection.",
        ],
      },
      {
        title: "Marketing with Dynamic Links",
        bullets: [
          "Utilized Firebase Dynamic Links for marketing purposes, creating shareable links to attract new users",
        ],
      },
      {
        title: "Analytics and Crash Reporting",
        bullets: [
          "Integrated Firebase Crashlytics for crash reporting.",
          "Utilized Firebase Analytics for gathering insights into user behavior.",
        ],
      },
    ],
    appIcon: "just-app-icon.png",
    images: ["just-01.png", "just-02.png", "just-03.png"],
    appleAppStoreUrl: "https://apps.apple.com/th/app/just/id1633206350",
    googlePlayStoreUrl:
      "https://play.google.com/store/apps/details?id=com.justcar.justcar",
    gitHubUrl: null,
  },
  {
    title: "Sabuy Wash (v1.0.0 - 1.0.5)",
    subtitle: null,
    period: "Oct 2022 - Aug 2023",
    isActive: false,
    description:
      "Sole responsibility for front-end development using Flutter. Led the entire process from project initialization to structuring. configure Flavor environment for Dev, Prod, etc. Implemented the GetX Pattern for reactive state management.",
    details: [
      {
        title: "User Authentication",
        bullets: ["Implemented phone and email for login/register."],
      },
      {
        title: "Machine Selection and Payment",
        bullets: [
          "Users can select washing or drying machines, view availability, and make payments seamlessly.",
          "Users can choose available coupons to enhance their experience.",
          "Option to apply available coupons.",
        ],
      },
      {
        title: "Order Status and Branch Information",
        bullets: [
          "Easily check the status of current orders.",
          "Users receive notifications for current orders.",
          "Access information about different branches.",
        ],
      },
      {
        title: "Google Maps Integration",
        bullets: [
          "Displayed branch locations as markers on a map using Google Maps",
        ],
      },
      {
        title: "Marketing with Dynamic Links",
        bullets: [
          "Utilized Firebase Dynamic Links for marketing purposes, creating shareable links to attract new users",
        ],
      },
      {
        title: "Analytics and Crash Reporting",
        bullets: [
          "Integrated Firebase Crashlytics for crash reporting.",
          "Utilized Firebase Analytics for gathering insights into user behavior.",
        ],
      },
      {
        title: "Security Measures",
        bullets: ["Implemented SSL pinning for secure API communication."],
      },
    ],
    appIcon: "sabuywash-app-icon.png",
    images: ["sabuywash-01.png", "sabuywash-02.png", "sabuywash-03.png"],
    appleAppStoreUrl: "https://apps.apple.com/th/app/sabuy-wash/id1659660313",
    googlePlayStoreUrl:
      "https://play.google.com/store/apps/details?id=com.sabuywash.sabuywashapp",
    gitHubUrl: null,
  },

  {
    title: "SBITO",
    subtitle: null,
    period: "Nov 2020 - Now",
    isActive: true,
    description:
      "",
    details: [
    ],
    appIcon: "sbito-app-icon.png",
    images: ["sbito-01.png", "sbito-02.png", "sbito-03.png"],
    appleAppStoreUrl: "https://apps.apple.com/th/app/sbito/id1533272611",
    googlePlayStoreUrl:
      null,
    gitHubUrl: null,
  },
  {
    title: "evRiderz",
    subtitle: null,
    period: "Aug 2021 - Mar 2023",
    isActive: false,
    description:
      "",
    details: [
    ],
    appIcon: "evriderz-app-icon.png",
    // images: ["evriderz-01.png", "evriderz-02.png", "evriderz-03.png"],
    images: ["iphone15-pro-portrait.png", "iphone15-pro-portrait.png", "iphone15-pro-portrait.png"],
    appleAppStoreUrl: null,
    googlePlayStoreUrl:
      null,
    gitHubUrl: null,
  },
  {
    title: "evDriverz",
    subtitle: null,
    period: "Aug 2021 - Mar 2023",
    isActive: false,
    description:
      "",
    details: [
    ],
    appIcon: "evdriverz-app-icon.png",
    // images: ["evdriverz-01.png", "evdriverz-02.png", "evdriverz-03.png"],
    images: ["iphone15-pro-portrait.png", "iphone15-pro-portrait.png", "iphone15-pro-portrait.png"],
    appleAppStoreUrl: null,
    googlePlayStoreUrl:
      null,
    gitHubUrl: null,
  },
  {
    title: "Rabbit Rewards (v2.0.0 - 2.1.6)",
    subtitle: null,
    period: "Nov 2019 - Mar 2023",
    isActive: false,
    description:
      "",
    details: [
    ],
    appIcon: "rabbitrewards-app-icon.png",
    images: ["rabbitrewards-01.png", "rabbitrewards-02.png", "rabbitrewards-03.png"],
    appleAppStoreUrl: null,
    googlePlayStoreUrl:
      null,
    gitHubUrl: null,
  },
  {
    title: "Perfumist",
    subtitle: null,
    period: "Oct 2019 - Dec 2021",
    isActive: false,
    description:
      "",
    details: [
    ],
    appIcon: "perfumist-app-icon.png",
    images: ["perfumist-01.png", "perfumist-02.png", "perfumist-03.png"],
    appleAppStoreUrl: null,
    googlePlayStoreUrl:
      null,
    gitHubUrl: null,
  }
];
