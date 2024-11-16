export const allProjects: Project[] = [
  {
    title: "OC Trade",
    subtitle: null,
    startedAt: new Date(2024, 11),
    endedAt: null,
    description:
      "A copper price booking app for Oriental Copper, simplifying and automating the booking process for convenience. Rewritten from iOS Swift native to Flutter for enhanced flexibility and cross-platform benefits",
    details: [],
    appIcon: "oc-trade-app-icon.png",
    images: ["oc-trade-01.png", "oc-trade-02.png", "oc-trade-03.png"],
    tabletImage: null,
    appleAppStoreUrl: "https://apps.apple.com/th/app/oc-trade/id1498887539",
    googlePlayStoreUrl:
      "https://play.google.com/store/apps/details?id=com.orientalcopper.app",
    gitHubUrl: null,
  },
  {
    title: "Easy Health",
    subtitle: null,
    startedAt: new Date(2024, 6),
    endedAt: null,
    description:
      "A food delivery app for Easy Health restaurant, specializing in healthy meals with a feature to track the nutritional intake of each dish and subscription for meal plan (Stripe payment SDK)",
    details: [],
    appIcon: "easy-health-app-icon.png",
    images: ["easy-health-01.png", "easy-health-02.png", "easy-health-03.png"],
    tabletImage: null,
    appleAppStoreUrl: null,
    googlePlayStoreUrl: null,
    gitHubUrl: null,
  },
  {
    title: "Foamtec",
    subtitle: null,
    startedAt: new Date(2023, 11),
    endedAt: null,
    description:
      "A production line tracking app that allows staff to log their work progress at each station by scanning to start, pause, or complete tasks",
    details: [],
    appIcon: "foamtec-app-icon.png",
    images: [],
    tabletImage: "foamtec-01.png",
    appleAppStoreUrl: null,
    googlePlayStoreUrl: null,
    gitHubUrl: null,
  },
  {
    title: "Mewing by Mike Mew",
    subtitle: null,
    startedAt: new Date(2023, 7),
    endedAt: null,
    description:
      "Sole responsibility for utilized Flutter (Rewritten from Ionic) due to its readability and ease of comprehension for new developers. Led the entire process from project initialization to structuring. configure Flavor environment for Dev, Prod, etc. Implemented the GetX Pattern and Now move to Bloc already.",
    details: [
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
    tabletImage: null,
    appleAppStoreUrl:
      "https://apps.apple.com/th/app/mewing-by-mike-mew/id1562833932",
    googlePlayStoreUrl:
      "https://play.google.com/store/apps/details?id=com.orthotropics.mewing",
    gitHubUrl: null,
  },
  {
    title: "VCTPDS",
    subtitle: "Internal App for Volvo Cars Thailand Central Distribution",
    startedAt: new Date(2023, 10),
    endedAt: null,
    description:
      "Sole responsibility for development using Flutter. Led the entire process from project initialization to structuring. configure Flavor environment for Dev, Prod, etc. Implemented the GetX Pattern for reactive state management.",
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
    tabletImage: null,
    appleAppStoreUrl: null,
    googlePlayStoreUrl: null,
    gitHubUrl: null,
  },
  {
    title: "El Mercado",
    subtitle: null,
    startedAt: new Date(2023, 5),
    endedAt: null,
    description:
      "Sole responsibility for development using Flutter. Led the entire process from project initialization to structuring. configure Flavor environment for Dev, Prod, etc. Implemented the GetX Pattern for reactive state management.",
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
    tabletImage: null,
    appleAppStoreUrl: "https://apps.apple.com/th/app/el-mercado/id6468034312",
    googlePlayStoreUrl:
      "https://play.google.com/store/apps/details?id=com.sybarite.elmercado",
    gitHubUrl: null,
  },
  {
    title: "El Mercado Staff",
    subtitle: null,
    startedAt: new Date(2023, 5),
    endedAt: null,
    description:
      "Sole responsibility for development using Flutter with Bloc state management. The app equips restaurant staff with essential tools to",
    details: [
      {
        title: "Product catalog",
        bullets: [
          "View available menu items in real-time, ensuring staff are always aware of the current offerings.",
        ],
      },
      {
        title: "Handle incoming orders",
        bullets: [
          "Track new orders seamlessly, allowing staff to organize and fulfill them promptly.",
        ],
      },
      {
        title: "Monitor dine-in table availability",
        bullets: [
          "Visualize the status of dine-in tables, helping staff manage table turnover and reservations more effectively.",
        ],
      },
      {
        title: "Incident reporting",
        bullets: [
          "Allowing staff to quickly report any issues in the restaurant to supervisors or relevant personnel, ensuring fast response times and maintaining operational flow.",
        ],
      },
    ],
    appIcon: "elmercado-staff-app-icon.png",
    images: [
      "elmercado-staff-01.png",
      "elmercado-staff-02.png",
      "elmercado-staff-03.png",
    ],
    tabletImage: null,
    appleAppStoreUrl:
      "https://apps.apple.com/th/app/el-mercado-staff/id6472040124",
    googlePlayStoreUrl:
      "https://play.google.com/store/apps/details?id=com.sybarite.elmercado.staff",
    gitHubUrl: null,
  },
  {
    title: "JUST (v1.0.2 - 1.0.12)",
    subtitle: null,
    startedAt: new Date(2023, 2),
    endedAt: new Date(2023, 8),
    description:
      "Responsibility for development using Flutter. Led the entire process from project initialization to structuring. configure Flavor environment for Dev, Prod, etc. Refactor from Clean Architecture to GetX Pattern (MVC) for reactive state management. ",
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
    tabletImage: null,
    appleAppStoreUrl: "https://apps.apple.com/th/app/just/id1633206350",
    googlePlayStoreUrl:
      "https://play.google.com/store/apps/details?id=com.justcar.justcar",
    gitHubUrl: null,
  },
  {
    title: "Sabuy Wash (v1.0.0 - 1.0.5)",
    subtitle: null,
    startedAt: new Date(2022, 9),
    endedAt: new Date(2023, 7),
    description:
      "Sole responsibility for development using Flutter. Led the entire process from project initialization to structuring. configure Flavor environment for Dev, Prod, etc. Implemented the GetX Pattern for reactive state management.",
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
    tabletImage: null,
    appleAppStoreUrl: "https://apps.apple.com/th/app/sabuy-wash/id1659660313",
    googlePlayStoreUrl:
      "https://play.google.com/store/apps/details?id=com.sabuywash.sabuywashapp",
    gitHubUrl: null,
  },

  {
    title: "SBITO",
    subtitle: null,
    startedAt: new Date(2020, 10),
    endedAt: null,
    description:
      "iOS app (native), I developed the account opening section of the SBITO, allowing users to seamlessly create accounts through a step-by-step guided process. Key features include identity verification, selection of account types, and secure data submission. The flow supports multiple account types, including cash balance, credit balance, and mutual fund accounts, while also integrating with major banks for fast validation. This feature enhances the overall user experience by simplifying and speeding up the account creation process.",
    details: [],
    appIcon: "sbito-app-icon.png",
    images: ["sbito-01.png", "sbito-02.png", "sbito-03.png"],
    tabletImage: null,
    appleAppStoreUrl: "https://apps.apple.com/th/app/sbito/id1533272611",
    googlePlayStoreUrl: null,
    gitHubUrl: null,
  },
  {
    title: "evRiderz",
    subtitle: null,
    startedAt: new Date(2021, 7),
    endedAt: new Date(2023, 2),
    description:
      "Led the development of the entire food ordering, delivery, and transportation platform from. I integrated the 2C2P SDK for secure transactions and utilized Google Maps API for real-time tracking and route optimization. Additionally, I employed RxSwift to enhance the app's responsiveness and maintainability.",
    details: [],
    appIcon: "evriderz-app-icon.png",
    images: ["evriderz-01.png", "evriderz-02.png", "evriderz-03.png"],
    tabletImage: null,
    appleAppStoreUrl: null,
    googlePlayStoreUrl: null,
    gitHubUrl: null,
  },
  {
    title: "evDriverz",
    subtitle: null,
    startedAt: new Date(2021, 7),
    endedAt: new Date(2023, 2),
    description:
      "iOS app (native) with RxSwift, Collaborated closely with another developer to build the evDriverz app, while simultaneously leading the development of evRiderz, I contributed by implementing Socket.IO for real-time status updates. This integration ensured that drivers were promptly notified of new orders and changes in order status, enhancing the overall efficiency of the delivery process.",
    details: [],
    appIcon: "evdriverz-app-icon.png",
    images: ["evdriverz-01.png", "evdriverz-02.png", "evdriverz-03.png"],
    tabletImage: null,
    appleAppStoreUrl: null,
    googlePlayStoreUrl: null,
    gitHubUrl: null,
  },
  {
    title: "Rabbit Rewards (v2.0.0 - 2.1.6)",
    subtitle: null,
    startedAt: new Date(2019, 10),
    endedAt: new Date(2023, 2),
    description:
      "iOS app (native) with RxSwift, Led the development of the entire app, collaborating closely with the UI/UX designer to design and implement a new user interface that significantly enhanced user engagement and overall experience",
    details: [
      {
        title: "Refactoring with RxSwift",
        bullets: [
          "Refactored the existing codebase to utilize RxSwift, improving the app's performance and maintainability.",
        ],
      },
      {
        title: "Point Redemption",
        bullets: [
          "Created a seamless process for users to redeem their reward points.",
        ],
      },
      {
        title: "Subscription Management",
        bullets: [
          "Implemented subscription options for users to access premium features.",
        ],
      },
      {
        title: "User Challenges",
        bullets: [
          "Developed user challenges that incentivized point accumulation, enhancing user engagement.",
        ],
      },
      {
        title: "Card Management",
        bullets: [
          "Added functionality for users to add cards, view card information, and connect with partners.",
        ],
      },
    ],
    appIcon: "rabbitrewards-app-icon.png",
    images: [
      "rabbitrewards-01.png",
      "rabbitrewards-02.png",
      "rabbitrewards-03.png",
    ],
    tabletImage: null,
    appleAppStoreUrl: null,
    googlePlayStoreUrl: null,
    gitHubUrl: null,
  },
  {
    title: "SCG Family",
    subtitle: null,
    startedAt: new Date(2021, 0),
    endedAt: new Date(2021, 4),
    description:
      "iOS app (native), I was responsible for the membership component before the app was discontinued. My contributions included creating both UAT and production environments, as well as implementing cash card registration and related information features.",
    details: [],
    appIcon: "scgfamily2020-app-icon.png",
    images: [
      "scgfamily2020-01.png",
      "scgfamily2020-02.png",
      "scgfamily2020-03.png",
    ],
    tabletImage: null,
    appleAppStoreUrl: null,
    googlePlayStoreUrl: null,
    gitHubUrl: null,
  },
  {
    title: "PERFUMIST Perfumes Advisor",
    subtitle: null,
    startedAt: new Date(2019, 9),
    endedAt: new Date(2021, 11),
    description:
      "iOS app (native) with RxSwift, Led the development of the entire app, converting all pages to use RxSwift for more efficient and responsive code. After the refactoring process, I continued to implement all new features, ensuring optimal performance and a seamless user experience.",
    details: [],
    appIcon: "perfumist-app-icon.png",
    images: ["perfumist-01.png", "perfumist-02.png", "perfumist-03.png"],
    tabletImage: null,
    appleAppStoreUrl: null,
    googlePlayStoreUrl: null,
    gitHubUrl: null,
  },
  {
    title: "Dota Heroes",
    subtitle: null,
    startedAt: null,
    endedAt: null,
    description: "Flutter project to teach internship student using Bloc Cubit",
    details: [
      {
        title: "API",
        bullets: ["https://docs.opendota.com/"],
      },
    ],
    appIcon: null,
    images: ["dotaheroes-01.png", "dotaheroes-02.png", "dotaheroes-03.png"],
    tabletImage: null,
    appleAppStoreUrl: null,
    googlePlayStoreUrl: null,
    gitHubUrl: "https://github.com/knottx/dota-heroes-flutter",
  },
  {
    title: "Weather",
    subtitle: null,
    startedAt: null,
    endedAt: null,
    description: "Flutter project to teach internship student using GetX",
    details: [
      {
        title: "API",
        bullets: ["https://openweathermap.org/api"],
      },
    ],
    appIcon: null,
    images: ["weather-01.png", "weather-02.png", "weather-03.png"],
    tabletImage: null,
    appleAppStoreUrl: null,
    googlePlayStoreUrl: null,
    gitHubUrl: null,
  },
];
