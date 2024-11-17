import React, { useState, ReactNode, useEffect } from 'react';
import {Moon,SunDim,Repeat,XOctagon, CheckCircle, AlertCircle, BookOpen, Bolt, Coins, ChevronRight, Globe, RefreshCw, Briefcase, Users, DollarSign } from 'lucide-react';
import Card from './lib/components/Card';
import CardContent from './lib/components/CardContent';
import CardHeader from './lib/components/CardHeader';
import CardTitle from './lib/components/CardTitle';
import Button from './lib/components/Button';
import Badge from './lib/components/Badge';
import ScrollArea from './lib/components/ScrollArea';

import patrickKnoblochPhoto from './lib/assets/patrick_knobloch.jpg';
import mikeTsakonasPhoto from './lib/assets/mike.jpg';
import pedroAugsutoPhoto from './lib/assets/gusto.jpg';

import audityLogo from './lib/assets/auditylogo.svg';
import swapyLogo from './lib/assets/swapylogo.svg';
import academyLogo from './lib/assets/acedemylogo.svg';
import tradyLogo from './lib/assets/tradylogo.svg';
import lootyLogo from './lib/assets/lootylogo.svg';
import poolyLogo from './lib/assets/poolylogo.svg';

import { Tabs, TabsContent, TabsList, TabsTrigger } from './lib/components/ShadeTabs';

interface FeaturesRevenueProps {
  features: string[];
  revenue: string[];
  title: string;
}

const FeaturesRevenueTabs: React.FC<FeaturesRevenueProps> = ({ features, revenue, title }) => {
  return (
    <Tabs defaultValue="features" className="space-y-6 ">
      <TabsList className="flex border dark:bg-neutral-800/20 dark:border-neutral-800 rounded-xl w-fit">
        <TabsTrigger value="features">Features</TabsTrigger>
        <TabsTrigger value="revenue">{title === 'Academy' ? 'Revenue Model' : 'Revenue Model'}</TabsTrigger>
      </TabsList>

      <TabsContent value="features" className="pt-4">
        <div>
          <h4 className="font-medium mb-2">Features</h4>
          <ul className="list-disc pl-5 space-y-1 opacity-70">
            {features.map((feature, idx) => (
              <li key={idx} className="text-base">{feature}</li>
            ))}
          </ul>
        </div>
      </TabsContent>

      <TabsContent value="revenue" className="pt-4">
        <div>
          <h4 className="font-medium mb-2">Revenue Model</h4>
          <ul className="list-disc pl-5 space-y-1 opacity-70">
            {revenue.map((rev, idx) => (
              <li key={idx} className="text-base">{rev}</li>
            ))}
          </ul>
        </div>
      </TabsContent>
    </Tabs>
  );
};

interface SectionProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ title,subtitle, children }) => (
  <Card className="w-full mb-6 border-none shadow-none p-0 py-3 md:py-6">
    <CardHeader className='border-none text-center flex flex-col'>
    <span className="font-normal text-2xl pb-3 opacity-50">{subtitle}</span>
      <CardTitle className="text-5xl md:text-7xl mb-12 font ">{title}</CardTitle>
    </CardHeader>
    <CardContent>{children}</CardContent>
  </Card>
);

interface LanguageToggleProps {
  language: 'de' | 'en';
  setLanguage: React.Dispatch<React.SetStateAction<'de' | 'en'>>;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ language, setLanguage }: LanguageToggleProps) => (
  <Button 
    variant="outline" 
    onClick={() => setLanguage(language === 'de' ? 'en' : 'de')}
    className="fixed top-4 right-4  z-50 flex items-center gap-2 text-neutral-900 dark:text-white/80 bg-white dark:bg-neutral-800 shadow-md p-3 rounded-full"
  >
    <Globe className="w-5 h-5" />
    <span className="font-medium">{language.toUpperCase()}</span>
  </Button>
);

interface ThemeToggleProps {
  theme: 'light' | 'dark';
  setTheme: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, setTheme }) => (
  <Button
    variant="outline"
    onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    className="fixed bottom-4 z-50 right-4 flex items-center gap-2 text-neutral-900 dark:text-white/80 bg-white dark:bg-neutral-800 shadow-md p-3 rounded-full"
  >
    {theme === 'light' ? (
      <>
        <Moon />
      </>
    ) : (
      <>
        <SunDim />
      </>
    )}
  </Button>
);


interface RevenueModelProps {
  title: string;
  items: string[];
  icon: React.ComponentType<{ className?: string }>;
}

const RevenueModel: React.FC<RevenueModelProps> = ({ title, items, icon: Icon }) => (
  <Card className="w-full h-full shadow-none p-0 bg-neutral-100/10 border border-neutral-200 dark:text-white rounded-xl dark:bg-neutral-800/10 dark:border-neutral-800">
    <CardContent className="pt-6 px-0">
      <div className="flex items-center gap-2 mb-6 pb-6 px-6 border-b border-neutral-600/20">
        <Icon className="w-5 h-5 text-neutral-500" />
        <h3 className="font-bold text-xl">{title}</h3>
      </div>
      <ul className="space-y-2 px-6 pb-4">
        {items.map((item, index) => {
          const [boldPart, regularPart] = item.split(":");
          return (
            <li key={index} className="flex items-center gap-2 text-base">
              <ChevronRight className="w-4 h-4 text-neutral-500" />
              <div>
                <strong>{boldPart}:</strong><br></br>
                {regularPart && <span className='opacity-70'> {regularPart}</span>}
              </div>
            </li>
          );
        })}
      </ul>

    </CardContent>
  </Card>
);

interface ProductCardProps {
  title: string;
  button: string;
  description: string[];
  status: string;
  color: string; 
  features: string[];
  image : string; 
  revenue: string[];
}

const ProductCard: React.FC<ProductCardProps> = ({ title, status, image,button, color, features,description, revenue }) => (
  <div className="group flex flex-col h-full bg-neutral-100/10 border border-neutral-200 dark:text-white rounded-xl dark:bg-neutral-800/10 dark:border-neutral-800">
    <div className={`h-52 flex flex-col justify-center items-center bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] rounded-t-xl ${
      color === 'yellow' ? 'from-yellow-500/10 to-yellow-700/0' :
      color === 'green' ? 'from-green-300/10 to-green-300/0' :
      color === 'blue' ? 'from-blue-500/10 to-blue-300/0' :
      color === 'indigo' ? 'from-indigo-500/10 to-indigo-300/0' :
      color === 'red' ? 'from-red-500/10 to-red-300/0' :
      color === 'cyan' ? 'from-cyan-300/10  to-cyan-300/0' : ''
      
    }`}>    <img
      src={image}
      className={`w-32 p-6 border shadow-2xl rounded-2xl ${
        color === 'yellow' ? 'border-yellow-500/30 shadow-yellow-500/30' :
        color === 'green' ? 'border-green-300/30 shadow-green-300/30' :
        color === 'blue' ? 'border-blue-500/30 shadow-blue-500/30' :
        color === 'indigo' ? 'border-indigo-500/30 shadow-indigo-500/30' :
        color === 'red' ? 'border-yellow-300/30 shadow-yellow-500/30' :
        color === 'cyan' ? 'border-cyan-500/50 shadow-cyan-600/30' : ''
      }`}
    />
    </div>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-6 border-t border-neutral-600/20">
      <CardTitle className="text-2xl font-bold flex items-center gap-2 p-3 pb-0">
        {title}
      </CardTitle>

      {button !== "" && (
        <Badge>
          {status}
        </Badge>
      ) ? (
      <a href='https://audity.w3bots.de' target='_blank'>
        <button className='bg-green-300 font-medium text-neutral-900 px-3 py-1 rounded-lg'>Test</button>
      </a>) : (
        <Badge>
          {status}
        </Badge>
      )}

    </CardHeader>
    <CardContent>
      <div className="space-y-4 p-3">
      <p className='pb-3'>{description}</p>

      <FeaturesRevenueTabs
      features={features}
      revenue={revenue}
      title="Academy"
    />

      </div>
    </CardContent>
  </div>
);

interface AdvisorCardProps {
  name: string;
  role: string;
  description: string;
}

const AdvisorCard: React.FC<AdvisorCardProps> = ({ name, role, description }) => (
  <Card className='p-3 shadow-none bg-neutral-100/10 border border-neutral-200 dark:text-white rounded-xl dark:bg-neutral-800/10 dark:border-neutral-800'>
    <CardContent className="pt-6">
      <h4 className="font-bold">{name}</h4>
      <Badge variant="outline" className="mt-1 mb-2">{role}</Badge>
      <p className="text-sm ">{description}</p>
    </CardContent>
  </Card>
);

interface TeamMemberCardProps {
  name: string;
  role: string;
  description: string;
  photo: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ name, role, description, photo }) => (
  <Card className='p-3 shadow-none bg-neutral-100/10 border border-neutral-200 dark:text-white rounded-xl dark:bg-neutral-800/10 dark:border-neutral-800'>
    <CardContent className="pt-6">
      <img src={photo} alt={name} className="w-full h-64 object-cover rounded-lg mb-4" />
      <h4 className="font-bold">{name}</h4>
      <Badge className="mt-1 mb-2 ">{role}</Badge>
      <p className="text-base mt-3 opacity-70">{description}</p>
    </CardContent>
  </Card>
);

export default function W3BotsPresentation() {

  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    document.documentElement.className = theme;  // Setze das HTML-Element entsprechend dem Thema
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const [language, setLanguage] = useState<'de' | 'en'>('en');

  interface PainPointProps {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
  }
  
  const PainPoint: React.FC<PainPointProps> = ({ icon: Icon, title, description }) => (
    <div className="flex dark:bg-neutral-800/20 gap-6 p-6 rounded-lg border dark:border-red-500/10">
      <Icon className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
      <div>
        <h4 className="font-bold">{title}</h4>
        <p className="opacity-70 mt-3">{description}</p>
      </div>
    </div>
  );
  
  interface SolutionProps {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
  }
  
  const Solution: React.FC<SolutionProps> = ({ icon: Icon, title, description }) => (
    <div className="flex gap-6 p-6 rounded-lg border dark:border-green-300/10 dark:bg-neutral-800/20">
      <Icon className="w-6 h-6 text-green-300 flex-shrink-0 mt-1" />
      <div>
        <h4 className="font-bold">{title}</h4>
        <p className="opacity-70 mt-3">{description}</p>
      </div>
    </div>
  );

  interface CoverLetterCardProps {
    language: 'de' | 'en';
  }
  
  const CoverLetterCard: React.FC<CoverLetterCardProps> = ({ language }) => {
    const letter = coverLetter[language];
    return (
      <Card className='p-6 dark:bg-neutral-800/30 py-6 shadow-none'>
        <CardContent className="pt-3">
          <h4 className="font-bold text-2xl mb-4">{letter.title}</h4>
            {letter.content.map((paragraph, index) => (
            <p key={index} className="mb-4  text-base opacity-80 ">{paragraph}</p>
          ))}
          <p className="font-semibold  text-base opacity-80 ">{letter.closing}</p>
        </CardContent>
      </Card>
    );
  };
  
  

  // Products, team, and revenue streams data remain the same as in your original code
  const products = [
    {
      title: "Audity",
      status: language === 'de' ? "In der Testphase" : "In Testing",
      image: audityLogo,
      button: "https://audity.w3bots.de/",
      color:'green',
      features: language === 'de' 
        ? [
            "Token-Sicherheitsbewertungen",
            "Liquiditätsprüfung",
            "Smart Contract Analyse",
            "Wash Trading Detection",
            "Social-Media-Bewertung",
            "Multichain Unterstützung (demnächst)"
          ]
        : [
            "Token Security Assessments",
            "Liquidity Analysis",
            "Smart Contract Analysis",
            "Wash Trading Detection",
            "Social Media Assessment",
            "Multichain Support (planned)"
          ],
        description: language === 'de' 
        ? [
            "Audity analysiert die Liquidität, Inhaber, Wash Trading, Smart Contracts und soziale Metriken und erstellt eine umfassende Bewertung für Kryptowährungs-Token."
          ]
        : [
            "Audity analyzes liquidity, holders, wash trading, smart contracts, and social metrics, generating a comprehensive score for cryptocurrency tokens."
          ],
      revenue: language === 'de'
        ? [
            "API-Nutzung mit Rate-Limits",
            "Premium API-Zugang",
            "Kanäle/Gruppen Abonnements",
            "Erweiterte Admin-Funktionen"
          ]
        : [
            "Limited API Usage / Free",
            "Premium API Access",
            "Channel/Group-Subscriptions",
            "Access to Advanced Features"
          ]
    },
    {
      title: "Swapy",
      status: language === 'de' ? "In der Testphase" : "In Testing",
      image: swapyLogo,
      color:'cyan',
      button: "",
      features: language === 'de' 
        ? [
            "DEX Aggregation",
            "Beste Preisfindung",
            "Optimierte Swap-Routen",
            "Multichain-Unterstützung (demnächst)"
          ]
        : [
            "DEX Aggregation",
            "Best Price Discovery",
            "Optimized Swap Routes",
            "Multichain Support (planned)"
          ],
      description: language === 'de' 
        ? [
            "Swapy kombiniert mehrere DEX-Anbieter zu einem einzigen Zugangspunkt, um Token-Swaps nahtlos und effizient zu gestalten"
          ]
        : [
            "Swapy combines multiple DEX providers into a single access point to make token swaps seamless and efficient."
          ],
      revenue: language === 'de'
        ? [
            "Transaktionsgebühren",
            "Werbeplatzierung",
            "Premium Angebote"
          ]
        : [
            "Transaction Fees",
            "Advertising Placement",
            "Premium Features"
          ]
    }
    ,{
      title: "Academy",
      status: language === 'de' ? "In der Entwicklung" : "In Development",
      image: academyLogo,
      button: "",
      color:'yellow',
      features: language === 'de' 
        ? [
            "Interaktive Lernmodule",
            "Praxisorientierte Übungen",
            "Blockchain-Grundlagen / Free",
            "DeFi-Masterclasses / Premium",
            "Community & Produkt Kurse"          
          ]
        : [
          "Interactive Learning Modules",
          "Practical Exercises",
          "Blockchain Basics / Free",
          "DeFi Masterclasses / Premium",
          "Community & Product Courses"
        ],
      description: language === 'de' 
        ? [
            "Academy ist eine KI-gestützte Lernplattform, die Nutzern hilft, Web3-Konzepte zu meistern – von Trading und Wallets bis hin zu Setups und Strategien. Perfekt für Anfänger und Profis gleichermaßen."
          ]
        : [
            "Academy is an AI-powered learning platform that helps users master Web3 concepts, from trading and wallets to setups and strategies. Perfect for beginners and pros alike."
          ],
      revenue: language === 'de'
        ? [
            "Premium-Kurse",
            "NFT Zertifizierungen (demnächst)",
            "Produktplatzierung",
            "Unternehmenslizenzen/White Label Lösungen"
          ]
        : [
          "remium Courses",
          "NFT Certifications (planned)",
          "Product Placement",
          "Corporate Licenses & Whitelabel Solutions"
        ]        
    },{
      title: "Trady",
      status: language === 'de' ? "Noch nicht begonnen" : "Not started yet",
      image: tradyLogo,
      color:'indigo',
      button: "",
      features: language === 'de' 
        ? [
            "KI-gestützte Trading-Strategien",
            "Automatisierte Trades",
            "Marktanalysen",
            "Risiko-Management",
            "Portfolio-Optimierung",
            "Multichain Unterstützung (demnächst)"
          ]
        : [
          "AI-powered trading strategies",
          "Automated trades",
          "Market Analysis",
          "Risk management",
          "Portfolio Optimizationn",
          "Multichain Support (planned)"
        ],
      description: language === 'de' 
        ? [
            "Trady ist ein KI-gesteuerter, automatischer/manueller Investment-Bot für Tokens, der Investitionen und Auszahlungen nahtlos verwaltet."
          ]
        : [
            "Trady is an AI-powered automatic investment bot for tokens, managing investments and payouts seamlessly."
          ],
      revenue: language === 'de'
        ? [
            "Transaktionsgebühren",
            "Premium Strategien",
            "Erweiterte Funktionen"
          ]
        : [
          "Transaction fees",
          "Premium strategies",
          "Advanced features"
        ]
        
    },
    {
      title: "Pooly",
      status: language === 'de' ? "In der Entwicklung" : "In Development",
      image: poolyLogo,
      button: "",
      color:'blue',
      features: language === 'de' 
        ? [
            "Vereinfachtes investieren",
            "Einzel-Asset Kauf/Verkauf",
            "Automatische Reinvestition",
            "Risiko-Management",
            "Performance/Portfolio Verfolgung"
          ]
        : [
            "Simple Invest",
            "Single Asset buy/sell",
            "Automatic re-investment",
            "Risk Management",
            "Performance/Portfolio Tracking",
          ],
      description: language === 'de' 
        ? [
            "Pooly vereinfacht Investitionen in Kryptowährungs-Liquiditätspools mit einem Single-Asset-Kauf und ermöglicht es Nutzern, problemlos an DeFi teilzunehmen und Belohnungen zu verdienen, ohne sich mit komplexen Paarungen auseinandersetzen zu müssen."
          ]
        : [
            "Pooly simplifies investing in cryptocurrency liquidity pools with a single asset purchase, making it easy for users to participate in DeFi and earn rewards without the complexity of pairings."
          ],
      revenue: language === 'de'
        ? [
            "Premium Strategien",
            "Transaktionsgebühren",
            "Premium API Zugriff"
          ]
        : [
            "Access to advanced features",
            "Transactions Fees",
            "Premium API Access"
          ]
    },{
      title: "Looty",
      status: language === 'de' ? "Noch nicht begonnen" : "Not started yet",
      image: lootyLogo,
      color:'red',
      button: "",
      features: language === 'de' 
        ?[
          "Interaktives Belohnungssystem",
          "Dynamische Belohnungsstufen",
          "Telegram Kanäle/Gruppen Integration",
          "Multichain-Unterstützung (demnächst)"
        ]
        : [
          "Interactive Reward System",
          "Dynamic Reward Tiers",
          "Telegram Channel/Group Integration",
          "Multichain Support (planned)"
      ],
      description: language === 'de' 
        ? [
            "Looty bietet eine flexible Möglichkeit, die Interaktion in Communities zu stärken und neue Einnahmemöglichkeiten für Projektinhaber zu schaffen."
          ]
        : [
            "Looty offers a flexible way to strengthen interaction in communities and create new revenue opportunities for project owners."
          ],
      revenue: language === 'de'
        ? [
            "Premium-API-Zugriff",
            "Aufgabenbasierte Werbung",
            "Whitelabel-Lizenzen",
            "Transaktionsgebühren"
          ]
          : [
            "Premium API Access",
            "Task-based Advertising",
            "Whitelabel Licenses",
            "Transaction Fees"
          ]
          
      
    }
  ];

  const team = {
    highlights: language === 'de'
      ? [
        { text: "Teil von Mint State Labs - Filecoin Techstars Accelerator Seattle 2022 Alumni", link: "https://www.crunchbase.com/acquisition/orange-comet-inc-acquires-mint-state-labs--69dec227" },
        { text: "NFTs für Hollywood: Collections auf ETH für William Shatner, Sir Anthony Hopkins, sowie Filmen/Serien wie The Walking Dead, Vampires Diaries uvm.", link: "https://opensea.io/OrangeComet/created?search%5BsortAscending%5D=false&search%5BsortBy%5D=FLOOR_PRICE" },
        { text: "Arbeiteten bereits an AAA Gaming Projekten für AMC & Netflix", link: "https://orangecomet.com/#games" },
        { text: "Bauten das erste dynamische NFT-Spiel auf der SUI Blockchain in Zusammenarbeit mit MystenLabs (ex-DIEM/META)", link: "https://www.youtube.com/watch?v=ACHHrjCibiI" },
      ]
    : [
        { text: "Part of Mint State Labs - Filecoin Techstars Accelerator Seattle 2022 Alumni", link: "https://www.crunchbase.com/acquisition/orange-comet-inc-acquires-mint-state-labs--69dec227" },
        { text: "NFTs for Hollywood: Collections on ETH for William Shatner, Sir Anthony Hopkins, as well as movies/series like The Walking Dead, Vampire Diaries, and more...", link: "https://opensea.io/OrangeComet/created?search%5BsortAscending%5D=false&search%5BsortBy%5D=FLOOR_PRICE" },
        { text: "Worked on AAA gaming projects for AMC & Netflix", link: "https://orangecomet.com/#games" },
        { text: "Built the first dynamic NFT game on the SUI blockchain in collaboration with MystenLabs (ex-DIEM/META)", link: "https://www.youtube.com/watch?v=ACHHrjCibiI" },
      ],
    advisors: language === 'de'
      ? [
          {
            name: "Peter Morales",
            role: "Gründer von Code Metal",
            description: "AI-Start-up mit 16 Mio. USD Seed-Finanzierung"
          },
          {
            name: "Ben Rosenberg",
            role: "Blockchain & Security Expert",
            description: "Berater für Plattform-Architektur und Sicherheitsstrategien"
          }
        ]
      : [
          {
            name: "Peter Morales",
            role: "Founder of Code Metal",
            description: "AI startup with $16M seed funding"
          },
          {
            name: "Ben Rosenberg",
            role: "Blockchain & Security Expert",
            description: "Advisor for platform architecture and security strategies"
          }
        ]
        ,
        members: language === 'de'
    ? [
        
        {
          name: "Mike Tsakonas",
          role: "CEO",
          description: "Überwachung der operativen Strategie und Ausführung. Umfangreiche Erfahrung in der Web3-Produktentwicklung, kreativen Content-Produktion und Projektmanagement.",
          photo: mikeTsakonasPhoto
        },
        {
          name: "Patrick Knobloch",
          role: "COO",
          description: "Umfangreiche Erfahrung in Blockchain-, App- und Webentwicklung, kombiniert mit Expertise im UI/UX-Design, ermöglicht die Entwicklung sicherer, skalierbarer und nutzerzentrierter Web3-Lösungen, die technische Innovation mit intuitiven Benutzererlebnissen verbinden.",
          photo: patrickKnoblochPhoto
        },
        {
          name: "Pedro Augusto",
          role: "CTO",
          description: "Leitung der allgemeinen Entwicklung von Infrastruktur und Anwendungen. Umfassende Erfahrung in Blockchain-, Web- und Spieleentwicklung.",
          photo: pedroAugsutoPhoto
        }
      ]
    : [
        
        {
          name: "Mike Tsakonas",
          role: "CEO",
          description: "Overseeing operational strategy and execution. Extensive background in Web3 product development, creative content production, and project management.",
          photo: mikeTsakonasPhoto
        },
        {
          name: "Patrick Knobloch",
          role: "COO",
          description: "Extensive experience in blockchain, app and web development, combined with expertise in UI/UX design, enabling the delivery of secure, scalable, and user-centric Web3 solutions while bridging technical innovation with intuitive user experiences.",
          photo: patrickKnoblochPhoto
        },
        {
          name: "Pedro Augusto",
          role: "CTO",
          description: "Leading general development of infrastructure and applications. Extensive experience in blockchain, web and game development.",
          photo: pedroAugsutoPhoto
        }
      ]
  };

  const revenueStreams = language === 'de'
    ? [
      {
        "title": "API & Dienste",
        "icon": Bolt,
        "items": [
          "Token-Scoring-API: Lizenzierung der Scoring- und Analysedaten von Audity an DeFi-Plattformen und institutionelle Kunden.",
          "DEX-Aggregations-API: Monetarisierung der Routing-Algorithmen von Swapy zur Integration in Drittanbieter-Wallets und Handelsplattformen.",
          "Individuelle Entwicklungsdienste: Bereitstellung maßgeschneiderter Blockchain-Lösungen, Web3-Integrationen für Spiele und die Entwicklung dezentraler Anwendungen für Unternehmenskunden.",
          "Werbedienst: Gesponserte Tokens, Projekte oder Dienstleistungen, die auf unseren Plattformen beworben werden."
        ]
      },
      {
        "title": "Bildung & Community",
        "icon": Users,
        "items": [
          "Abonnementpläne: Bereitstellung von Premiumzugriff auf Tools wie Lootys gamifiziertes Engagement-System.",
          "Kampagnenerstellung: Monetarisierung von Partnerschaften mit Web3-Projekten, die Community-Promotion und Wachstum suchen.",
          "Monetarisierung von Lerninhalten: Einnahmen aus der Akademie, einschließlich Premium-Kurse, Unternehmenslizenzen und KI-gesteuerte Lernpfade.",
          "Werbung & Platzierungen: Einnahmen aus beworbenen Kursen, Community-Kampagnen und gamifizierten Belohnungen."
        ]
      },
      {
        "title": "Handel(Trading) & DeFi",
        "icon": Repeat,
        "items": [
          "Transaktionsgebühren: Einbehaltung eines Prozentsatzes der über Swapy ausgeführten Trades oder der über Pooly getätigten Investitionen.",
          "Staking- und Liquiditätsgebühren: Erhebung eines Anteils der durch Liquiditätspools verdienten Belohnungen.",
          "Premium-Abonnements: Angebot von erweiterten Funktionen wie Multichain-Handel, benutzerdefinierte Handelsrouten und Risikomanalysen.",
          "Werbemöglichkeiten: Bezahlte Werbung für Projekte, Liquiditätspools und Handelspaare direkt auf Swapy oder Pooly."
        ]
      }
    ]
    : [
        {
          title: "API & Services",
          icon: Bolt,
          items: [
            "Token Scoring API: Licensing Audity's scoring and analytics data to DeFi platforms and institutional clients.",
            "DEX Aggregation API: Monetizing Swapy's routing algorithms for integration into third-party wallets and trading platforms.",
            "Custom Development Services: Delivering tailored blockchain solutions, Web3 integrations for games, and decentralized application development for enterprise clients. ",
            "Ad Placement Service: Sponsored tokens, projects, or services promoted on our platforms."
          ]
        },
        {
          title: "Education & Community",
          icon: Users,
          items: [
            "Subscription Plans: Providing premium access to tools such as Looty’s gamified engagement system.",
            "Campaign Creation: Monetizing partnerships with Web3 projects seeking community promotion and growth.",
            "Learning Monetization: Revenue from Academy, including premium courses, corporate licenses, and AI-driven learning paths.",
            "Advertising & Placements: Generating revenue from promoted courses, community campaigns, and gamified rewards."
          ]
        },
        {
          title: "Trading & DeFi",
          icon: Repeat,
          items: [
            "Transaction Fees: Collecting a percentage of trades executed via Swapy or investments through Pooly.",
            "Staking and Liquidity Fees: Charging a portion of rewards earned through liquidity pools.",
            "Premium Subscriptions: Offering advanced features such as multichain trading, custom trading routes, and risk analysis tools.",
            "Advertising Opportunities: Paid promotion of projects, liquidity pools, and trading pairs directly on Swapy or Pooly."
          ]
        }
      ];

  const problemSolution = {
        de: {
          problems: [
            {
              icon: XOctagon,
              title: "Komplexität bei DeFi-Interaktionen",
              description: "Nutzer müssen sich durch mehrere Plattformen und Tools navigieren, was oft zu Verwirrung und Fehlern führt."
            },
            {
              icon: XOctagon,
              title: "Unzureichende Sicherheit",
              description: "Schwachstellen in der Überprüfung von Smart Contracts und Tokens setzen Nutzer Betrugsrisiken aus."
            },
            {
              icon: XOctagon,
              title: "Hohe Einstiegshürden",
              description: "Die technische Lernkurve schreckt viele Neulinge davon ab, Web3-Lösungen zu nutzen."
            }
          ],
          solutions: [
            {
              icon: CheckCircle,
              title: "Sicheres Investieren",
              description: "Audity: Token-Bewertung und Analyse für fundierte Investitionsentscheidungen. Pooly: Liquiditätslösungen mit einem Ein-Asset-Ansatz für vereinfachte DeFi-Teilnahme."
            },
            {
              icon: CheckCircle,
              title: "Nahtloses Trading",
              description: "Swapy: Optimierte DEX-Aggregation für die besten Handelsrouten. Trady: Automatisierte Trading-Bots für mühelose Portfolioverwaltung."
            },
            {
              icon: CheckCircle,
              title: "Bildung & Gemeinschaft",
              description: "Academy: KI-gestützte Lernplattform für Blockchain-Expertise. Looty: Gamifizierte Tools zur Förderung der Gemeinschaftsbeteiligung."
            }
          ]
          
        },
        en: {
          problems: [
            {
              icon: XOctagon,
              title: "Complexity in DeFi Interactions",
              description: "Users must navigate multiple platforms and tools, often leading to confusion and mistakes."
            },
            {
              icon: XOctagon,
              title: "Insufficient Security",
              description: "Vulnerabilities in smart contract and token verification expose users to fraud."
            },
            {
              icon: XOctagon,
              title: "High Barriers to Entry",
              description: "The technical learning curve deters many newcomers from utilizing Web3 solutions."
            }
          ],
          solutions: [
            {
              icon: CheckCircle,
              title: "Secure Investing",
              description: "Audity: Token scoring and analytics for informed investment decisions. Pooly: Single-asset liquidity solutions for simplified DeFi participation."
            },
            {
              icon: CheckCircle,
              title: "Seamless Trading",
              description: "Swapy: Optimized DEX aggregation for the best trading routes. Trady: Automated trading bots for effortless portfolio management."
            },
            {
              icon: CheckCircle,
              title: "Education & Community",
              description: "Academy: AI-driven learning platform for blockchain expertise. Looty: Gamified tools to boost community engagement."
            }
          ]          
        }
      };


  const coverLetter = {
  de: {
    title: "Sehr geehrtes Techstars-Team,",
    introduction: "",
    content: [
      "mit großer Begeisterung reichen wir unsere Bewerbung für das Techstars Web3 Accelerator Programm 2024 ein. Als ein Team mit einer langen Historie an bahnbrechenden Web3-Lösungen setzen wir uns dafür ein, dezentralisierte Finanzsysteme zu vereinfachen und für Nutzer weltweit sicherer zu gestalten.",
      "Unsere Erfolgsbilanz umfasst wegweisende Projekte wie die Sir Anthony Hopkins NFT Collection, die zur schnellstverkauften Kollektion auf OpenSea wurde, sowie NFT-Kollaborationen mit Hollywood-Größen wie William Shatner. Darüber hinaus haben wir an Projekten für bekannte TV-Serien wie The Walking Dead und Vampire Diaries gearbeitet und Innovationen im Bereich dynamischer NFT-Spiele vorangetrieben, einschließlich des ersten dynamischen NFT-Spiels auf der SUI-Blockchain in Zusammenarbeit mit MystenLabs. Neben NFTs verfügen wir über umfassende Erfahrung in der Blockchain-Integration für Unity und Unreal Engine und haben sowohl blockchain-basierte als auch traditionelle Spieleentwicklungsprojekte umgesetzt.",
      "Dank dieser umfassenden Expertise kennen wir die Komplexität und die Herausforderungen, denen Nutzer im Web3-Bereich begegnen. Dieses Wissen treibt unsere Mission an, benutzerfreundliche, sichere und innovative Lösungen für dezentrale Finanzsysteme, Bildung und Community-Engagement zu entwickeln. Unser Ziel ist es, die Interaktion mit Blockchain-Technologien grundlegend zu transformieren, indem wir technische Innovationen mit intuitivem Design verbinden.",
      "Das Techstars Web3 Accelerator Programm bietet die ideale Plattform, um unsere Vision zu skalieren, unsere Lösungen zu verfeinern und uns mit Branchenführern zu vernetzen. Mit der Unterstützung und den Ressourcen von Techstars sind wir überzeugt, einen bedeutenden Beitrag zum Web3-Ökosystem leisten zu können.",
      "Vielen Dank für die Prüfung unserer Bewerbung. Wir freuen uns auf die Möglichkeit, Teil der Techstars-Community zu werden, und darauf, die Tradition der Innovation weiter voranzutreiben.",
      
    ],closing: "Mit freundlichen Grüßen, das W3BOTS-Team"
  },
  en: {
    title: "Dear Techstars Team,",
    introduction: "",
    content: [
      "We are thrilled to submit our application for the Techstars Web3 Accelerator 2024. As a team with a rich history of delivering cutting-edge Web3 solutions, we are committed to simplifying and securing decentralized finance for users worldwide.",
      "Our proven track record includes pioneering projects like the Sir Anthony Hopkins NFT Collection—which became the fastest collection ever sold on OpenSea—and NFT collaborations for iconic Hollywood figures such as William Shatner. We’ve also delivered projects for hit TV series like The Walking Dead and Vampire Diaries, and spearheaded innovations in dynamic NFT gaming, including the first-ever dynamic NFT game on the SUI blockchain in collaboration with MystenLabs. Beyond NFTs, our team has deep experience in blockchain integration for Web- and dApps, Unity and Unreal Engine and has contributed to both blockchain-powered and traditional game development projects.",
      "With this extensive background, we understand the complexity and challenges users face in the Web3 space. This insight drives our mission to develop user-friendly, secure, and innovative solutions for decentralized finance, education, and community engagement. We aim to transform how people interact with blockchain technology by building tools that bridge technical innovation with intuitive design.",
      "The Techstars Web3 Accelerator offers the perfect platform to scale our vision, enhance our solutions, and connect with industry leaders. With Techstars’ mentorship and resources, we are confident in our ability to make a meaningful impact in the Web3 ecosystem.",
      "Thank you for considering our application. We are excited about the opportunity to join the Techstars community and look forward to contributing to its legacy of innovation.",
      
    ], closing: "Sincerely, the W3BOTS Team"
  }
};


  return (
    <ScrollArea className="h-full p-3 md:p-6 pb-6 bg-white text-neutral-900 dark:bg-neutral-900 dark:text-white">
      <a target="_blank" href='https://w3bots.de/'>
      <svg
        className="absolute inset-0 opacity-5 z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true">
        <defs>
          <pattern id="0787a7c5-978c-4f66-83c7-11c213f99cb7" width="200" height="200" x="50%" y="-1"
            patternUnits="userSpaceOnUse">
            <path d="M.5 200V.5H200" fill="none"></path>
          </pattern>
        </defs>
        <rect width="100%" height="100%" stroke-width="0" fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"></rect>
      </svg>
      </a>

      <div className="w-full max-w-7xl mx-auto space-y-8 relative z-50">
        <LanguageToggle language={language} setLanguage={setLanguage} />
        <ThemeToggle theme={theme} setTheme={setTheme} />

        <div className="w-full flex items-center justify-items-center flex-col space-y-4 mb-12">
          
          <svg className='block mt-2 w-1/2 -ml-2 md:w-1/5 fill-slate-900 dark:fill-white mb-6' viewBox="0 0 4346 1023" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1446_118)">
             
              <g mask="url(#mask0_1446_118)">
              <path d="M427.257 456.911C427.257 446.428 418.308 437.931 407.267 437.931C396.228 437.931 387.277 446.428 387.277 456.911C387.277 467.392 396.228 475.889 407.267 475.889C418.308 475.889 427.257 467.392 427.257 456.911Z" />
              <path d="M311.951 456.911C311.951 446.428 303.002 437.931 291.961 437.931C280.922 437.931 271.973 446.428 271.973 456.911C271.973 467.392 280.922 475.889 291.961 475.889C303.002 475.889 311.951 467.392 311.951 456.911Z" />
              <path d="M196.739 456.911C196.739 446.428 187.788 437.931 176.749 437.931C165.709 437.931 156.759 446.428 156.759 456.911C156.759 467.392 165.709 475.889 176.749 475.889C187.788 475.889 196.739 467.392 196.739 456.911Z" />
              <path d="M427.257 566.287C427.257 555.806 418.308 547.309 407.267 547.309C396.228 547.309 387.277 555.806 387.277 566.287C387.277 576.77 396.228 585.265 407.267 585.265C418.308 585.265 427.257 576.77 427.257 566.287Z" />
              <path d="M542.471 566.287C542.471 555.806 533.522 547.309 522.481 547.309C511.442 547.309 502.491 555.806 502.491 566.287C502.491 576.77 511.442 585.265 522.481 585.265C533.522 585.265 542.471 576.77 542.471 566.287Z" />
              <path d="M311.951 566.287C311.951 555.806 303.002 547.309 291.961 547.309C280.922 547.309 271.973 555.806 271.973 566.287C271.973 576.77 280.922 585.265 291.961 585.265C303.002 585.265 311.951 576.77 311.951 566.287Z" />
              <path d="M196.739 566.287C196.739 555.806 187.788 547.309 176.749 547.309C165.709 547.309 156.759 555.806 156.759 566.287C156.759 576.77 165.709 585.265 176.749 585.265C187.788 585.265 196.739 576.77 196.739 566.287Z" />
              <path d="M311.951 675.668C311.951 665.187 303.002 656.69 291.961 656.69C280.922 656.69 271.973 665.187 271.973 675.668C271.973 686.151 280.922 694.646 291.961 694.646C303.002 694.646 311.951 686.151 311.951 675.668Z" />
              <path d="M196.739 675.668C196.739 665.187 187.788 656.69 176.749 656.69C165.709 656.69 156.759 665.187 156.759 675.668C156.759 686.151 165.709 694.646 176.749 694.646C187.788 694.646 196.739 686.151 196.739 675.668Z" />
              <path d="M427.257 785.156C427.257 774.673 418.308 766.176 407.267 766.176C396.228 766.176 387.277 774.673 387.277 785.156C387.277 795.637 396.228 804.134 407.267 804.134C418.308 804.134 427.257 795.637 427.257 785.156Z" />
              <path d="M542.471 785.156C542.471 774.673 533.522 766.176 522.481 766.176C511.442 766.176 502.491 774.673 502.491 785.156C502.491 795.637 511.442 804.134 522.481 804.134C533.522 804.134 542.471 795.637 542.471 785.156Z" />
              <path d="M657.795 785.156C657.795 774.673 648.845 766.176 637.806 766.176C626.765 766.176 617.816 774.673 617.816 785.156C617.816 795.637 626.765 804.134 637.806 804.134C648.845 804.134 657.795 795.637 657.795 785.156Z" />
              <path d="M427.257 894.532C427.257 884.051 418.308 875.554 407.267 875.554C396.228 875.554 387.277 884.051 387.277 894.532C387.277 905.014 396.228 913.51 407.267 913.51C418.308 913.51 427.257 905.014 427.257 894.532Z" />
              <path d="M542.471 894.532C542.471 884.051 533.522 875.554 522.481 875.554C511.442 875.554 502.491 884.051 502.491 894.532C502.491 905.014 511.442 913.51 522.481 913.51C533.522 913.51 542.471 905.014 542.471 894.532Z" />
              <path d="M542.471 1004.02C542.471 993.537 533.522 985.04 522.481 985.04C511.442 985.04 502.491 993.537 502.491 1004.02C502.491 1014.5 511.442 1023 522.481 1023C533.522 1023 542.471 1014.5 542.471 1004.02Z" />
              <path d="M657.795 894.532C657.795 884.051 648.845 875.554 637.806 875.554C626.765 875.554 617.816 884.051 617.816 894.532C617.816 905.014 626.765 913.51 637.806 913.51C648.845 913.51 657.795 905.014 657.795 894.532Z" />
              <path d="M773.007 785.156C773.007 774.673 764.059 766.176 753.02 766.176C741.978 766.176 733.03 774.673 733.03 785.156C733.03 795.637 741.978 804.134 753.02 804.134C764.059 804.134 773.007 795.637 773.007 785.156Z" />
              <path d="M311.951 785.156C311.951 774.673 303.002 766.176 291.961 766.176C280.922 766.176 271.973 774.673 271.973 785.156C271.973 795.637 280.922 804.134 291.961 804.134C303.002 804.134 311.951 795.637 311.951 785.156Z" />
              <path d="M427.257 347.423C427.257 336.942 418.308 328.445 407.267 328.445C396.228 328.445 387.277 336.942 387.277 347.423C387.277 357.906 396.228 366.401 407.267 366.401C418.308 366.401 427.257 357.906 427.257 347.423Z" />
              <path d="M542.471 347.423C542.471 336.942 533.522 328.445 522.481 328.445C511.442 328.445 502.491 336.942 502.491 347.423C502.491 357.906 511.442 366.401 522.481 366.401C533.522 366.401 542.471 357.906 542.471 347.423Z" />
              <path d="M311.951 347.423C311.951 336.942 303.002 328.445 291.961 328.445C280.922 328.445 271.973 336.942 271.973 347.423C271.973 357.906 280.922 366.401 291.961 366.401C303.002 366.401 311.951 357.906 311.951 347.423Z" />
              <path d="M196.739 347.423C196.739 336.942 187.788 328.445 176.749 328.445C165.709 328.445 156.759 336.942 156.759 347.423C156.759 357.906 165.709 366.401 176.749 366.401C187.788 366.401 196.739 357.906 196.739 347.423Z" />
              <path d="M888.204 347.423C888.204 336.942 879.254 328.445 868.215 328.445C857.174 328.445 848.225 336.942 848.225 347.423C848.225 357.906 857.174 366.401 868.215 366.401C879.254 366.401 888.204 357.906 888.204 347.423Z" />
              <path d="M773.007 347.423C773.007 336.942 764.059 328.445 753.02 328.445C741.978 328.445 733.03 336.942 733.03 347.423C733.03 357.906 741.978 366.401 753.02 366.401C764.059 366.401 773.007 357.906 773.007 347.423Z" />
              <path d="M888.204 456.911C888.204 446.428 879.254 437.931 868.215 437.931C857.174 437.931 848.225 446.428 848.225 456.911C848.225 467.392 857.174 475.889 868.215 475.889C879.254 475.889 888.204 467.392 888.204 456.911Z" />
              <path d="M773.007 456.911C773.007 446.428 764.059 437.931 753.02 437.931C741.978 437.931 733.03 446.428 733.03 456.911C733.03 467.392 741.978 475.889 753.02 475.889C764.059 475.889 773.007 467.392 773.007 456.911Z" />
              <path d="M888.204 566.287C888.204 555.806 879.254 547.309 868.215 547.309C857.174 547.309 848.225 555.806 848.225 566.287C848.225 576.77 857.174 585.265 868.215 585.265C879.254 585.265 888.204 576.77 888.204 566.287Z" />
              <path d="M773.007 566.287C773.007 555.806 764.059 547.309 753.02 547.309C741.978 547.309 733.03 555.806 733.03 566.287C733.03 576.77 741.978 585.265 753.02 585.265C764.059 585.265 773.007 576.77 773.007 566.287Z" />
              <path d="M888.204 675.668C888.204 665.187 879.254 656.69 868.215 656.69C857.174 656.69 848.225 665.187 848.225 675.668C848.225 686.151 857.174 694.646 868.215 694.646C879.254 694.646 888.204 686.151 888.204 675.668Z" />
              <path d="M773.007 675.668C773.007 665.187 764.059 656.69 753.02 656.69C741.978 656.69 733.03 665.187 733.03 675.668C733.03 686.151 741.978 694.646 753.02 694.646C764.059 694.646 773.007 686.151 773.007 675.668Z" />
              <path d="M888.204 238.042C888.204 227.561 879.254 219.064 868.215 219.064C857.174 219.064 848.225 227.561 848.225 238.042C848.225 248.523 857.174 257.02 868.215 257.02C879.254 257.02 888.204 248.523 888.204 238.042Z" />
              <path d="M773.007 238.042C773.007 227.561 764.059 219.064 753.02 219.064C741.978 219.064 733.03 227.561 733.03 238.042C733.03 248.523 741.978 257.02 753.02 257.02C764.059 257.02 773.007 248.523 773.007 238.042Z" />
              <path d="M311.951 238.042C311.951 227.561 303.002 219.064 291.961 219.064C280.922 219.064 271.973 227.561 271.973 238.042C271.973 248.523 280.922 257.02 291.961 257.02C303.002 257.02 311.951 248.523 311.951 238.042Z" />
              <path d="M196.739 238.042C196.739 227.561 187.788 219.064 176.749 219.064C165.709 219.064 156.759 227.561 156.759 238.042C156.759 248.523 165.709 257.02 176.749 257.02C187.788 257.02 196.739 248.523 196.739 238.042Z" />
              <path d="M311.951 128.56C311.951 118.079 303.002 109.582 291.961 109.582C280.922 109.582 271.973 118.079 271.973 128.56C271.973 139.042 280.922 147.539 291.961 147.539C303.002 147.539 311.951 139.042 311.951 128.56Z" />
              <path d="M196.739 128.56C196.739 118.079 187.788 109.582 176.749 109.582C165.709 109.582 156.759 118.079 156.759 128.56C156.759 139.042 165.709 147.539 176.749 147.539C187.788 147.539 196.739 139.042 196.739 128.56Z" />
              <path d="M542.471 128.56C542.471 118.079 533.522 109.582 522.481 109.582C511.442 109.582 502.491 118.079 502.491 128.56C502.491 139.042 511.442 147.539 522.481 147.539C533.522 147.539 542.471 139.042 542.471 128.56Z" />
              <path d="M427.257 128.56C427.257 118.079 418.308 109.582 407.267 109.582C396.228 109.582 387.277 118.079 387.277 128.56C387.277 139.042 396.228 147.539 407.267 147.539C418.308 147.539 427.257 139.042 427.257 128.56Z" />
              <path d="M773.007 128.56C773.007 118.079 764.059 109.582 753.02 109.582C741.978 109.582 733.03 118.079 733.03 128.56C733.03 139.042 741.978 147.539 753.02 147.539C764.059 147.539 773.007 139.042 773.007 128.56Z" />
              <path d="M888.204 128.56C888.204 118.079 879.254 109.582 868.215 109.582C857.174 109.582 848.225 118.079 848.225 128.56C848.225 139.042 857.174 147.539 868.215 147.539C879.254 147.539 888.204 139.042 888.204 128.56Z" />
              <path d="M542.471 19.1781C542.471 8.69724 533.522 0.200195 522.481 0.200195C511.442 0.200195 502.491 8.69724 502.491 19.1781C502.491 29.6608 511.442 38.1561 522.481 38.1561C533.522 38.1561 542.471 29.6608 542.471 19.1781Z" />
              <path d="M427.257 19.1781C427.257 8.69724 418.308 0.200195 407.267 0.200195C396.228 0.200195 387.277 8.69724 387.277 19.1781C387.277 29.6608 396.228 38.1561 407.267 38.1561C418.308 38.1561 427.257 29.6608 427.257 19.1781Z" />
              <path d="M657.795 19.1781C657.795 8.69724 648.845 0.200195 637.806 0.200195C626.765 0.200195 617.816 8.69724 617.816 19.1781C617.816 29.6608 626.765 38.1561 637.806 38.1561C648.845 38.1561 657.795 29.6608 657.795 19.1781Z" />
              <path d="M657.795 128.56C657.795 118.079 648.845 109.582 637.806 109.582C626.765 109.582 617.816 118.079 617.816 128.56C617.816 139.042 626.765 147.539 637.806 147.539C648.845 147.539 657.795 139.042 657.795 128.56Z" />
              <path d="M407.34 202.705H407.228C386.702 202.705 370.064 218.502 370.064 237.989V238.096C370.064 257.582 386.702 273.379 407.228 273.379H407.34C427.866 273.379 444.504 257.582 444.504 238.096V237.989C444.504 218.502 427.866 202.705 407.34 202.705Z" />
              <path d="M522.646 202.705H522.532C502.008 202.705 485.37 218.502 485.37 237.989V238.096C485.37 257.582 502.008 273.379 522.532 273.379H522.646C543.17 273.379 559.81 257.582 559.81 238.096V237.989C559.81 218.502 543.17 202.705 522.646 202.705Z" />
              <path d="M637.86 202.705H637.746C617.222 202.705 600.582 218.502 600.582 237.989V238.096C600.582 257.582 617.222 273.379 637.746 273.379H637.86C658.384 273.379 675.022 257.582 675.022 238.096V237.989C675.022 218.502 658.384 202.705 637.86 202.705Z" />
              <path d="M637.86 312.191H637.746C617.222 312.191 600.582 327.988 600.582 347.476V347.582C600.582 367.068 617.222 382.865 637.746 382.865H637.86C658.384 382.865 675.022 367.068 675.022 347.582V347.476C675.022 327.988 658.384 312.191 637.86 312.191Z" />
              <path d="M522.646 421.572H522.532C502.008 421.572 485.37 437.369 485.37 456.857V456.964C485.37 476.451 502.008 492.246 522.532 492.246H522.646C543.17 492.246 559.81 476.451 559.81 456.964V456.857C559.81 437.369 543.17 421.572 522.646 421.572Z" />
              <path d="M637.86 421.572H637.746C617.222 421.572 600.582 437.369 600.582 456.857V456.964C600.582 476.451 617.222 492.246 637.746 492.246H637.86C658.384 492.246 675.022 476.451 675.022 456.964V456.857C675.022 437.369 658.384 421.572 637.86 421.572Z" />
              <path d="M637.86 530.95H637.746C617.222 530.95 600.582 546.747 600.582 566.234V566.341C600.582 585.827 617.222 601.624 637.746 601.624H637.86C658.384 601.624 675.022 585.827 675.022 566.341V566.234C675.022 546.747 658.384 530.95 637.86 530.95Z" />
              <path d="M407.34 640.436H407.228C386.702 640.436 370.064 656.233 370.064 675.721V675.828C370.064 695.313 386.702 711.11 407.228 711.11H407.34C427.866 711.11 444.504 695.313 444.504 675.828V675.721C444.504 656.233 427.866 640.436 407.34 640.436Z" />
              <path d="M522.646 640.436H522.532C502.008 640.436 485.37 656.233 485.37 675.721V675.828C485.37 695.313 502.008 711.11 522.532 711.11H522.646C543.17 711.11 559.81 695.313 559.81 675.828V675.721C559.81 656.233 543.17 640.436 522.646 640.436Z" />
              <path d="M637.86 640.436H637.746C617.222 640.436 600.582 656.233 600.582 675.721V675.828C600.582 695.313 617.222 711.11 637.746 711.11H637.86C658.384 711.11 675.022 695.313 675.022 675.828V675.721C675.022 656.233 658.384 640.436 637.86 640.436Z" />
              </g>
              <path d="M1228.42 671.197L1087.76 248.888C1083.91 237.336 1089.05 230.918 1100.61 230.918H1161.62C1170.62 230.918 1177.04 235.41 1179.61 244.396L1277.87 566.583L1373.57 244.396C1376.14 234.769 1382.56 230.918 1391.55 230.918H1453.21C1462.2 230.918 1468.62 234.769 1471.19 244.396L1566.25 566.583L1665.15 244.396C1667.72 235.41 1674.14 230.918 1683.13 230.918H1744.15C1755.71 230.918 1760.85 237.336 1756.99 248.888L1616.34 671.197C1613.13 680.181 1606.71 684.032 1597.72 684.032H1534.13C1525.14 684.032 1518.72 680.181 1516.15 670.554L1422.38 355.428L1327.97 670.554C1325.4 680.181 1318.98 684.032 1309.99 684.032H1247.04C1238.05 684.032 1231.63 679.54 1228.42 671.197Z" />
              <path d="M1785.19 538.325C1784.5 526.649 1790.7 520.458 1801.7 520.458H1862.92C1873.93 520.458 1880.11 526.649 1880.81 537.643C1884.23 583.004 1903.51 593.315 1947.51 593.315H2086.45C2134.6 593.315 2157.3 583.686 2157.3 542.446V531.452C2157.3 490.894 2135.98 479.9 2094.02 479.9H1966.79C1955.77 479.9 1949.59 473.711 1949.59 462.717V419.405C1949.59 408.413 1955.77 402.222 1966.79 402.222H2090.59C2131.17 402.222 2153.18 393.277 2153.18 353.424V342.431C2153.18 301.19 2131.17 290.196 2081.64 290.196H1947.51C1903.49 290.196 1884.23 299.822 1880.81 345.183C1880.11 356.177 1873.93 362.368 1862.92 362.368H1801.7C1790.7 362.368 1784.5 356.177 1785.19 344.501C1789.99 246.905 1839.53 198.79 1947.51 198.79H2085.09C2196.51 198.79 2248.08 244.151 2248.79 332.823V339.698C2248.79 396.756 2226.09 424.249 2199.28 440.73C2226.78 457.23 2252.24 486.775 2252.24 546.586V552.777C2252.24 640.766 2201.32 684.057 2089.9 684.057H1947.53C1839.55 684.057 1790.01 635.942 1785.21 538.346L1785.19 538.325Z" />
              <path d="M2326.5 666.851V215.951C2326.5 204.959 2332.7 198.768 2343.69 198.768H2609.89C2726.12 198.768 2772.2 244.129 2773.59 332.801V339.674C2773.59 396.733 2750.21 423.523 2723.37 440.024C2750.89 456.524 2777.04 486.773 2777.04 546.564V552.755C2777.04 640.744 2730.96 684.035 2614.72 684.035H2343.69C2332.7 684.035 2326.5 677.843 2326.5 666.851ZM2611.95 402.22C2647.71 402.22 2674.55 393.275 2674.55 353.422V342.428C2674.55 301.188 2647.71 290.194 2603.68 290.194H2421.42V402.241H2611.93L2611.95 402.22ZM2608.52 593.313C2651.15 593.313 2679.37 583.684 2679.37 542.444V531.45C2679.37 490.892 2652.54 479.216 2615.39 479.216H2421.43V593.313H2608.52Z" />
              <path d="M2842.38 517.021V366.486C2842.38 263.384 2891.21 198.768 3005.39 198.768H3182.15C3296.33 198.768 3345.16 263.384 3345.16 366.486V517.021C3345.16 619.439 3296.33 684.055 3182.15 684.055H3005.39C2891.21 684.055 2842.38 619.439 2842.38 517.021ZM3182.17 592.629C3228.25 592.629 3249.59 579.565 3249.59 520.456V363.048C3249.59 303.258 3230.33 290.194 3182.17 290.194H3005.41C2957.96 290.194 2937.99 303.258 2937.99 363.048V520.456C2937.99 579.565 2959.33 592.629 3005.41 592.629H3182.17Z" />
              <path d="M3551.54 666.851V290.877H3402.97C3391.98 290.877 3385.78 284.686 3385.78 273.692V215.951C3385.78 204.959 3391.98 198.768 3402.97 198.768H3795.73C3806.72 198.768 3812.92 204.959 3812.92 215.951V273.692C3812.92 284.686 3806.72 290.877 3795.73 290.877H3647.16V666.851C3647.16 677.843 3640.96 684.035 3629.96 684.035H3568.74C3557.74 684.035 3551.54 677.843 3551.54 666.851Z" />
              <path d="M3850.05 538.325C3849.38 526.649 3855.56 520.458 3866.57 520.458H3927.79C3938.79 520.458 3944.29 526.649 3944.99 537.643C3949.11 577.517 3967.69 592.631 4012.41 592.631H4147.21C4199.49 592.631 4218.07 579.567 4218.07 539.713C4218.07 499.86 4200.18 490.915 4154.08 487.477L4000.7 475.801C3894.77 467.561 3852.8 433.194 3852.8 342.452C3852.8 251.708 3897.52 198.79 4017.2 198.79H4143.09C4251.77 198.79 4300.61 247.588 4305.41 344.501C4306.1 356.177 4299.9 362.368 4288.9 362.368H4226.99C4215.99 362.368 4210.49 356.177 4209.79 345.183C4205.67 305.309 4187.09 290.196 4143.09 290.196H4018.59C3965.63 290.196 3947.05 302.576 3947.05 343.113C3947.05 380.917 3964.94 390.546 4011.04 393.981L4164.42 405.659C4268.97 413.898 4312.99 450.336 4312.99 540.376C4312.99 630.414 4268.28 684.036 4147.92 684.036H4012.43C3903.04 684.036 3854.9 635.238 3850.09 538.325H3850.05Z" />
              </g>
              <defs>
              <clipPath id="clip0_1446_118">
              <rect width="4346" height="1023" />
              </clipPath>
              </defs>
          </svg>

          <p className="text-5xl font-normal text-center px-6 opacity-70">
            {language === 'de' 
              ? "Techstars Web3 Accelerator"
              : "Techstars Web3 Accelerator"
            }
          </p>
          <p className="text-6xl font-bold text-center px-6 pb-12">
            {language === 'de' 
              ? "Bewerbung 2024"
              : "Application 2024"
            }
          </p>
        </div>

        <CoverLetterCard language={language} />

        <Section title={language === 'de' ? "Problem & Lösung" : "Problem & Solution"} subtitle={language === 'de' ? "Web3 verstehen und vereinfachen" : "Understanding and Simplifying Web3"}>
          <Tabs defaultValue="problem" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-neutral-100/10 border border-neutral-200 dark:text-white rounded-xl dark:bg-neutral-800/10 dark:border-neutral-800">
              <TabsTrigger value="problem">
                {language === 'de' ? "Das Problem" : "The Problem"}
              </TabsTrigger>
              <TabsTrigger value="solution">
                {language === 'de' ? "Unsere Lösung" : "Our Solution"}
              </TabsTrigger>
            </TabsList>
            <TabsContent value="problem" className="mt-6 space-y-4">
              {problemSolution[language].problems.map((item, index) => (
                <PainPoint key={index} {...item} />
              ))}
            </TabsContent>
            <TabsContent value="solution" className="mt-6 space-y-4">
              {problemSolution[language].solutions.map((item, index) => (
                <Solution key={index} {...item} />
              ))}
            </TabsContent>
          </Tabs>
        </Section>

        <Section title={language === 'de' ? "Produkte, Funktionen und Geschäftsmodelle" : "Products, Features, and Business Models"} subtitle={language === 'de' ? "Mehrwert schaffen durch innovative Lösungen" : "Creating value through innovative solutions"}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {products.map((product) => (
              <ProductCard key={product.title} {...product} />
            ))}
          </div>
        </Section>
        
        <Section title={language === 'de' ? "Erlösströme" : "Revenue Streams"} subtitle={language === 'de' ? "Nachhaltiges Wachstum vorantreiben" : "Driving Sustainable Growth"}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {revenueStreams.map((stream) => (
              <RevenueModel key={stream.title} {...stream} />
            ))}
          </div>
        </Section>

        <Section title={language === 'de' ? "Team & Expertise" : "Team & Expertise"} subtitle={language === 'de' ? "Vereint durch Vision - gestärkt durch Expertise" : "United by vision - empowered by expertise"}>
          <div className="space-y-6 p-3">
          <div>
              <h3 className="font-bold text-lg mb-4">
                {language === 'de' ? "Unsere Erfolge" : "Our Achievements"}
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                {team.highlights.map((highlight, idx) => (
                  <li key={idx}>
                    {highlight.link ? (
                      <a href={highlight.link} target="_blank" rel="noopener noreferrer" className="underline hover:underline">
                        {highlight.text}
                      </a>
                    ) : (
                      highlight.text
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">
                {language === 'de' ? "Team Mitglieder" : "Who We Are"}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {team.members.map((member) => (
                  <TeamMemberCard key={member.name} {...member} />
                ))}
              </div>
            </div>
           
          </div>
        </Section>

        <Card className="w-full mb-6 border-none shadow-none p-0 py-3 md:py-6">
          <CardHeader className='border-none text-center flex flex-col'>
            <CardTitle className="text-5xl md:text-7xl mb-6 font ">{language === 'de' ? "Warum Techstars?" : "Why Techstars?"}</CardTitle>
          </CardHeader>
          <CardContent className='text-center md:w-2/3 mx-auto opacity-70'>
            {language === 'de' ? 
            "Der Techstars Web3 Accelerator bietet die ideale Plattform, um unsere Lösungen zu skalieren, unsere Geschäftsmodelle zu verfeinern und wichtige Partnerschaften im Web3-Bereich aufzubauen. Mit der Mentorschaft und den Ressourcen von Techstars wollen wir neu definieren, wie Nutzer mit dezentraler Finanztechnologie interagieren, und ein nachhaltiges, wirkungsvolles Web3-Ökosystem schaffen." 
            : 
            "The Techstars Web3 Accelerator offers the ideal platform to scale our solutions, refine our business models, and establish critical partnerships within the Web3 space. With Techstars’ mentorship and resources, we aim to redefine how users interact with decentralized finance and build a sustainable, impactful Web3 ecosystem."}
          </CardContent>
        </Card>

        <div className='w-full'>
            
        
        </div>

      </div>
    </ScrollArea>
  );
}
