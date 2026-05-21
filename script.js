/**
 * Layer.ONE — Navigation and interactions
 */

document.addEventListener("DOMContentLoaded", function () {
  initSmoothScroll();
  initI18n();
  initHeaderScroll();
  initMobileNav();
  initNavActiveState();
  initScrollReveal();
  initFaqAccordion();
  initHeroCanvas();
});

/**
 * Smooth scroll for all anchor links
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      var href = this.getAttribute("href");
      if (href === "#") return;
      var target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

/* ─────────────────────────────────────────────────────────────────
 * Internationalization (i18n)
 *
 * Usage:
 *   - Add data-i18n="section.key" to any element whose text content
 *     should be translated. Values may contain inline HTML (e.g. <br>).
 *   - Add data-i18n-title to <title> and data-i18n-meta="meta.description"
 *     to the description <meta> element.
 *   - Call applyTranslations(lang) to switch language at any time.
 *   - To add a new language: add an entry to the TRANSLATIONS object
 *     with the same key structure as "en".
 * ───────────────────────────────────────────────────────────────── */

var TRANSLATIONS = {

  en: {
    title: "Layer.ONE — Enterprise Intelligence Platform",
    meta: {
      description: "Layer.ONE is an enterprise intelligence platform for financial institutions — combining graph analytics, entity resolution, and behavioral modeling for financial crime detection."
    },
    nav: {
      problem:          "Problem",
      platform:         "Platform",
      howitworks:       "How It Works",
      usecases:         "Use Cases",
      dataintegrations: "Data & Integrations",
      deployment:       "Security",
      customers:        "Customers",
      faq:              "FAQ",
      contact:          "Contact",
      platformarch:     "Platform Architecture",
      menuAriaOpen:     "Open navigation menu",
      menuAriaClose:    "Close navigation menu"
    },
    hero: {
      eyebrow:      "Financial Crime Intelligence Platform",
      headline:     "Financial crime hides<br>in complex networks.",
      sub:          "Layer.ONE is a financial crime intelligence platform for banks, fintechs, and regulated institutions — supporting detection, network analysis, and investigation through a single integrated system.",
      btnPrimary:   "Explore the Platform",
      btnSecondary: "Request Demo",
      cap1:         "Detection",
      cap2:         "Network Analysis",
      cap3:         "Investigation"
    },
    problem: {
      eyebrow:    "The Problem",
      headline:   "Modern financial crime<br>operates as a network.",
      lead:       "Financial crime rarely appears as a single suspicious transaction. It emerges through patterns across many accounts, identities, and transfers — structured to evade detection.",
      p1Title:    "Distributed across transactions",
      p1Body:     "Funds move through dozens of transfers, each appearing legitimate in isolation. The pattern only emerges when the full sequence is analyzed together.",
      p2Title:    "Fragmented across identities",
      p2Body:     "Multiple accounts, shell entities, and synthetic identities are used in concert. Individual-level analysis cannot see the coordinated structure beneath.",
      p3Title:    "Obscured by shared infrastructure",
      p3Body:     "Shared devices, IP addresses, and layered transfers mask the true structure of the network — and the actors who control it.",
      conclusion: "Traditional AML systems evaluate events one at a time. Real financial crime patterns only become visible at the network level."
    },
    insight: {
      eyebrow:  "The Insight",
      headline: "The connections matter<br>more than the events.",
      lead:     "Traditional monitoring systems are designed to flag isolated events. But financial crime is structural — it lives in the relationships between entities, accounts, devices, and transfers. Those relationships only become visible when analyzed together, across time and across institutions.",
      b1Title:  "Relationship visibility",
      b1Body:   "A single account tells one story. The network of accounts behind it tells another. Investigators need to see both — and understand how they connect.",
      b2Title:  "Behavioral patterns over time",
      b2Body:   "Financial crime rarely reveals itself in a single event. It builds across weeks and months — detectable only when entity behavior is modeled continuously and in context.",
      b3Title:  "Structure through entity resolution",
      b3Body:   "Criminals use many names, documents, and identities. Entity resolution collapses fragmented records into unified actors — making the true network structure legible."
    },
    platform: {
      eyebrow:   "The Platform",
      headline:  "An intelligence layer on top<br>of your existing infrastructure.",
      lead:      "Layer.ONE does not replace your current AML or fraud systems. It extends them — adding network-level intelligence on top of transaction-level monitoring, without requiring changes to your existing data architecture.",
      wideLabel: "Core design",
      wideTitle: "Modular. Non-disruptive. Enterprise-ready.",
      wideBody:  "Layer.ONE integrates with existing banking systems, data warehouses, and AML platforms through standard APIs. It ingests raw financial data — transactions, entities, devices, events — and transforms it into structured intelligence available to compliance teams and investigators.",
      c1Label:   "01 — Graph Intelligence",
      c1Body:    "Constructs real-time relationship graphs across accounts, entities, and transactions. Enables investigators to trace the full network structure behind a suspicious event.",
      c2Label:   "02 — Behavioral Risk Modeling",
      c2Body:    "Builds continuous behavioral profiles for every entity in the system. Detects anomalies not through rules, but through deviation from established patterns over time.",
      c3Label:   "03 — Entity Resolution",
      c3Body:    "Identifies and links fragmented identities across data sources. Resolves aliases, synthetic identities, and shared infrastructure into unified actor records.",
      c4Label:   "04 — Network Analysis",
      c4Body:    "Surfaces the structural patterns that define financial crime networks — including layering schemes, money mule rings, and coordinated fraud clusters — before they are visible through manual review."
    },
    arch: {
      eyebrow:  "Architecture",
      headline: "From raw data to investigative intelligence.",
      lead:     "Layer.ONE processes financial data through a structured pipeline — each stage adding a layer of resolution, context, and intelligence before it reaches the investigator.",
      s1Title:  "Data Sources",
      s1Desc:   "Core banking, payment rails, KYC records, device signals, third-party feeds.",
      s2Title:  "Ingestion Layer",
      s2Desc:   "Normalizes, validates, and structures incoming data streams in real time.",
      s3Title:  "Entity Resolution",
      s3Desc:   "Deduplicates and unifies fragmented identities across accounts, documents, and devices.",
      s4Title:  "Graph Intelligence Engine",
      s4Desc:   "Constructs and queries the relationship graph — mapping connections across the full entity network.",
      s5Title:  "Behavioral Modeling",
      s5Desc:   "Continuously profiles entity behavior and detects anomalies relative to established baselines.",
      s6Title:  "Risk Scoring",
      s6Desc:   "Aggregates graph, behavioral, and network signals into a unified, explainable risk score per entity.",
      s6Note:   "We reduce false positives by requiring multi-dimensional confirmation across network, behavior, and control signals.",
      s7Title:  "Investigation Interface",
      s7Desc:   "Delivers structured intelligence, case context, and network visualizations to the investigator."
    },
    platformarch: {
      eyebrow:   "From data to intelligence",
      headline:  "Platform Architecture",
      f1:        "Data",
      f2:        "Screening",
      f3:        "Detection",
      f4:        "Intelligence",
      f5:        "Investigation",
      stackTitle: "Layer.ONE Platform",
      l1Title:   "1. Data Layer",
      l1i1:      "Transactions",
      l1i2:      "Accounts",
      l1i3:      "Identities (KYC)",
      l1i4:      "Devices",
      l1i5:      "External data",
      l2Title:   "2. Screening (Basic Layer)",
      l2i1:      "Sanctions check",
      l2i2:      "PEP check",
      l3Title:   "3. Detection Layer",
      l3i1:      "Rule engine",
      l3i2:      "Behavioral models",
      l3i3:      "Anomaly detection",
      l4Title:   "4. Intelligence Layer (CORE)",
      l4i1:      "Entity resolution",
      l4i2:      "Graph engine",
      l4i3:      "Network analysis",
      l4i4:      "Risk propagation",
      l5Title:   "5. Investigation Layer (CORE)",
      l5i1:      "Graph visualization",
      l5i2:      "Case analysis",
      l5i3:      "Relationship exploration",
      l6Title:   "6. Platform Layer",
      l6i1:      "Integrations",
      l6i2:      "API",
      l6i3:      "Deployment (on-prem / cloud)",
      l6i4:      "Security &amp; audit"
    },
    modules: {
      eyebrow:  "Modules",
      headline: "A modular intelligence system.",
      lead:     "Each module addresses a distinct layer of financial crime detection. They operate independently or as a unified platform.",
      m1Title:  "Graph Intelligence",
      m1Desc:   "Constructs and traverses entity relationship graphs in real time. Surfaces hidden connections across accounts, transactions, and actors that are invisible to transaction-level monitoring.",
      m2Title:  "Behavioral Risk Engine",
      m2Desc:   "Builds longitudinal behavioral profiles for every entity in the system. Detects structural anomalies and risk escalation without relying on static rules.",
      m3Title:  "Entity Resolution",
      m3Desc:   "Deduplicates and unifies fragmented identities across data sources. Resolves synthetic profiles, aliases, and shared credentials into authoritative actor records.",
      m4Title:  "Shared Device Detection",
      m4Desc:   "Identifies device and infrastructure reuse across seemingly unrelated accounts. Exposes coordinated fraud rings and mule networks operating behind distinct identities.",
      m5Title:  "Network Risk Propagation",
      m5Desc:   "Propagates risk signals across the entity graph. When one node is flagged, risk flows through connected entities — scoring the full network, not just the triggering event.",
      m6Title:  "Case Intelligence",
      m6Desc:   "Assembles structured investigation packages from graph data, risk scores, and entity timelines. Reduces manual effort and delivers a complete picture of a case from the first alert."
    },
    howitworks: {
      eyebrow: "How It Works",
      headline: "Connect. Ingest. Analyze. Investigate.",
      lead:     "Layer.ONE integrates with existing infrastructure and delivers intelligence without disrupting your current systems or workflows.",
      s1Title:  "Connect",
      s1Desc:   "Integrates with core banking, AML, and payment systems via standard APIs. No changes to existing architecture required.",
      s2Title:  "Ingest",
      s2Desc:   "Processes transactions, account records, identity data, device signals, and third-party feeds in real time.",
      s3Title:  "Analyze",
      s3Desc:   "Builds entity relationship graphs, behavioral profiles, and network-level risk scores across all ingested data.",
      s4Title:  "Investigate",
      s4Desc:   "Delivers structured intelligence, network maps, and full case context to compliance teams and investigators."
    },
    usecases: {
      eyebrow:  "Use Cases",
      headline: "One platform.<br>Multiple intelligence capabilities.",
      lead:     "Layer.ONE is not a collection of separate tools. It is a single intelligence platform that supports detection, investigation, and network analysis as integrated, connected capabilities.",
      uc1Tag:   "Detection",
      uc1Title: "Transaction Monitoring",
      uc1Desc:  "Analyzes transaction patterns across accounts and time — detecting structuring, layering, and behavioral anomalies at the network level, beyond what rules-based systems surface.",
      uc2Tag:   "Detection",
      uc2Title: "Fraud Detection",
      uc2Desc:  "Identifies coordinated fraud rings, synthetic identity schemes, and device reuse patterns before they scale — surfacing the full network behind each fraud signal.",
      uc3Tag:   "Investigation",
      uc3Title: "Financial Crime Investigation",
      uc3Desc:  "Delivers full entity network context, risk timelines, and evidence-grade documentation from the first alert — reducing manual effort and accelerating case closure.",
      uc4Tag:   "Analysis",
      uc4Title: "Network Risk Analysis",
      uc4Desc:  "Propagates risk signals across the full entity graph — scoring every connected node, not just the flagged event. Exposes systemic exposure before it becomes a compliance failure."
    },
    dataintegrations: {
      eyebrow:  "Data &amp; Integrations",
      headline: "Works with what you already have.",
      lead:     "Layer.ONE connects to the data you already hold — without replacing your current systems or requiring changes to your data architecture.",
      g1Title:  "Data Sources",
      d1Label:  "Transactions",      d1Desc:   "Payments, transfers, clearing events, settlement records",
      d2Label:  "Accounts",          d2Desc:   "Account records, balances, ownership structures",
      d3Label:  "Customer Identities", d3Desc: "KYC / CDD records, identity documents, beneficial ownership",
      d4Label:  "Device Signals",    d4Desc:   "Device fingerprints, IP addresses, session metadata",
      d5Label:  "Payment Activity",  d5Desc:   "Card events, wallet activity, merchant transaction data",
      d6Label:  "External Intelligence", d6Desc: "Sanctions lists, watchlists, adverse media feeds",
      g2Title:  "Integration Points",
      i1Label:  "Core Banking Systems",    i1Desc: "Direct integration via standard and proprietary APIs",
      i2Label:  "Payment Infrastructure",  i2Desc: "ISO 20022, SWIFT, domestic payment rails",
      i3Label:  "AML / Fraud Platforms",   i3Desc: "Complements — does not replace — existing monitoring tools",
      i4Label:  "Internal Data Platforms", i4Desc: "Data warehouses, data lakes, streaming pipelines",
      i5Label:  "Case Management",         i5Desc: "Feeds structured intelligence into existing investigation workflows",
      i6Label:  "Regulatory Reporting",    i6Desc: "Supports SAR / STR preparation and evidence packaging"
    },
    deploy: {
      eyebrow:    "Deployment &amp; Security",
      headline:   "Designed for regulated environments.",
      lead:       "Layer.ONE is built for financial institutions that cannot compromise on data residency, access control, or infrastructure sovereignty.",
      g1Title:    "Deployment",
      g1I1Strong: "On-premise installation",
      g1I1Body:   "Runs entirely within your institution's infrastructure. No data leaves your environment.",
      g1I2Strong: "Private cloud support",
      g1I2Body:   "Deployable on dedicated private cloud environments with full tenant isolation.",
      g1I3Strong: "Infrastructure integration",
      g1I3Body:   "Connects to existing core banking, AML, and data warehouse systems via standard APIs.",
      g2Title:    "Security",
      g2I1Strong: "Encrypted data pipelines",
      g2I1Body:   "All data in transit and at rest is encrypted. Pipeline integrity is continuously verified.",
      g2I2Strong: "Role-based access control",
      g2I2Body:   "Fine-grained permissions govern access to data, modules, and investigation records.",
      g2I3Strong: "Full auditability",
      g2I3Body:   "Every action, query, and decision is logged with a complete, tamper-evident audit trail."
    },
    customers: {
      eyebrow:  "Who It's Built For",
      headline: "Built for the entire<br>financial crime ecosystem.",
      lead:     "Layer.ONE serves organizations across the full financial crime ecosystem — from banks and fintechs to payment processors, regulatory bodies, and government agencies.",
      b1Tag:    "Financial Institution",
      b1Title:  "Banks",
      b1Desc:   "Identify complex money laundering networks across accounts, subsidiaries, and correspondent relationships. Prioritize investigation capacity on the highest-risk entity clusters.",
      b2Tag:    "Financial Institution",
      b2Title:  "Fintech Platforms",
      b2Desc:   "Detect coordinated fraud, synthetic identity schemes, and behavioral anomalies across users, devices, and payment flows — at scale, without building in-house intelligence infrastructure.",
      b3Tag:    "Financial Institution",
      b3Title:  "Payment Processors",
      b3Desc:   "Monitor transaction ecosystems for hidden risk signals, device reuse, and structural indicators of layering or fund aggregation across merchant and acquirer networks.",
      b4Tag:    "Regulatory · Government",
      b4Title:  "Regulators &amp; Government Agencies",
      b4Desc:   "Analyze financial crime patterns across institutions at the systemic level. Map cross-border money laundering networks, support multi-institution investigations, and build evidence-grade intelligence for enforcement and prosecution."
    },
    faq: {
      eyebrow:  "FAQ",
      headline: "Frequently Asked Questions",
      q1:  "What is Layer.ONE?",
      a1:  "Layer.ONE is a Financial Crime Intelligence Platform designed to detect, analyze, and investigate complex financial crime networks. It combines graph intelligence, behavioral modeling, and entity resolution to reveal hidden relationships across transactions, accounts, identities, and devices.",
      q2:  "Who is Layer.ONE built for?",
      a2:  "Layer.ONE is designed for banks, fintech platforms, payment processors, regulators, and financial crime investigation teams that need advanced intelligence capabilities to detect and analyze financial crime.",
      q3:  "Does Layer.ONE replace existing AML systems?",
      a3:  "No. Layer.ONE can operate alongside existing AML and fraud systems. It acts as an intelligence layer that enhances detection and investigation capabilities without requiring institutions to replace their current infrastructure.",
      q4:  "What types of financial crime can Layer.ONE detect?",
      a4:  "Layer.ONE supports detection and investigation of money laundering, coordinated fraud, account networks, mule networks, suspicious transaction patterns, and other complex financial crime structures.",
      q5:  "What data sources can Layer.ONE analyze?",
      a5:  "Layer.ONE can analyze transaction data, account information, customer identities, device signals, payment activity, and other relevant financial intelligence data sources.",
      q6:  "How does Layer.ONE detect hidden financial crime patterns?",
      a6:  "Layer.ONE uses graph-based analysis to identify relationships between entities, accounts, transactions, and devices. This network-level intelligence helps reveal patterns that traditional transaction-level monitoring systems often miss.",
      q7:  "Where does the data processed by Layer.ONE reside?",
      a7:  "Layer.ONE supports on-premise and private cloud deployments. Financial institutions can run the platform within their own infrastructure so that sensitive data never leaves their environment.",
      q8:  "Can Layer.ONE integrate with existing banking systems?",
      a8:  "Yes. Layer.ONE is designed to integrate with core banking systems, payment platforms, data warehouses, and existing AML or fraud monitoring systems.",
      q9:  "Does Layer.ONE support investigation workflows?",
      a9:  "Yes. Layer.ONE helps investigators analyze suspicious networks, explore entity relationships, and uncover hidden financial crime structures during investigations.",
      q10: "Can regulators and government agencies use Layer.ONE?",
      a10: "Yes. Layer.ONE can support regulators and government agencies in analyzing financial crime networks across institutions and identifying systemic patterns of illicit activity.",
      q11: "Is Layer.ONE suitable for regulated financial environments?",
      a11: "Yes. Layer.ONE is designed for regulated financial environments and supports secure deployments, encrypted data pipelines, and strict access control.",
      q12: "How is Layer.ONE different from traditional AML systems?",
      a12: "Traditional AML systems often analyze transactions individually. Layer.ONE focuses on network-level intelligence, enabling institutions to identify hidden relationships and complex financial crime structures across large datasets."
    },
    cta: {
      headline:     "Expose hidden financial crime networks.",
      sub:          "Discover how Layer.ONE brings graph intelligence to financial crime detection.",
      btnPrimary:   "Explore the Platform",
      btnSecondary: "Request Demo"
    },
    footer: {
      tagline:     "Intelligence platform for financial crime detection.",
      navPlatform: "Platform",
      navTech:     "Technology",
      navSecurity: "Security",
      navContact:  "Contact",
      copy:        "&copy; 2025 Layer.ONE. All rights reserved."
    }
  },

  /* ── Turkish ─────────────────────────────────────────────────── */

  tr: {
    title: "Layer.ONE — Kurumsal Zeka Platformu",
    meta: {
      description: "Layer.ONE, finansal kurumlar için kurumsal bir zeka platformudur — finansal suç tespiti için graf analitiği, kuruluş çözünürlüğü ve davranışsal modellemeyi bir araya getirir."
    },
    nav: {
      problem:          "Sorun",
      platform:         "Platform",
      howitworks:       "Nasıl Çalışır",
      usecases:         "Kullanım Alanları",
      dataintegrations: "Veri ve Entegrasyon",
      deployment:       "Güvenlik",
      customers:        "Müşteriler",
      faq:              "SSS",
      contact:          "İletişim",
      platformarch:     "Platform Mimarisi"
    },
    hero: {
      eyebrow:      "Finansal Suç İstihbarat Platformu",
      headline:     "Finansal suç karmaşık<br>ağların içinde gizlenir.",
      sub:          "Layer.ONE, bankalar, fintechler ve düzenlenmiş kurumlar için bir finansal suç istihbarat platformudur — tespit, ağ analizi ve soruşturmayı tek entegre bir sistemde destekler.",
      btnPrimary:   "Platformu Keşfedin",
      btnSecondary: "Demo Talep Edin",
      cap1:         "Tespit",
      cap2:         "Ağ Analizi",
      cap3:         "Soruşturma"
    },
    problem: {
      eyebrow:    "Sorun",
      headline:   "Modern finansal suç<br>bir ağ olarak işler.",
      lead:       "Finansal suç nadiren tek bir şüpheli işlem olarak görünür. Birçok hesap, kimlik ve transfer genelindeki örüntüler aracılığıyla ortaya çıkar — tespiti engellemek için yapılandırılmış.",
      p1Title:    "İşlemler genelinde dağıtılmış",
      p1Body:     "Fonlar düzinelerce transfer aracılığıyla hareket eder; her biri tek başına meşru görünür. Örüntü yalnızca tam dizi birlikte analiz edildiğinde ortaya çıkar.",
      p2Title:    "Kimlikler genelinde parçalanmış",
      p2Body:     "Birden fazla hesap, paravan şirket ve sentetik kimlik uyum içinde kullanılır. Bireysel düzeyde analiz, altındaki koordineli yapıyı göremez.",
      p3Title:    "Paylaşılan altyapıyla gizlenmiş",
      p3Body:     "Paylaşılan cihazlar, IP adresleri ve katmanlı transferler ağın gerçek yapısını maskeler — ve onu kontrol eden aktörleri.",
      conclusion: "Geleneksel AML sistemleri olayları birer birer değerlendirir. Gerçek finansal suç örüntüleri yalnızca ağ düzeyinde görünür hale gelir."
    },
    insight: {
      eyebrow:  "Öngörü",
      headline: "Olaylardan çok<br>bağlantılar önem taşır.",
      lead:     "Geleneksel izleme sistemleri izole olayları işaretlemek için tasarlanmıştır. Ancak finansal suç yapısaldır — kuruluşlar, hesaplar, cihazlar ve transferler arasındaki ilişkilerde gizlenir. Bu ilişkiler yalnızca zaman ve kurumlar genelinde birlikte analiz edildiğinde görünür hale gelir.",
      b1Title:  "İlişki görünürlüğü",
      b1Body:   "Tek bir hesap bir hikaye anlatır. Arkasındaki hesap ağı başkasını. Soruşturmacıların ikisini de görmesi ve bağlantıları anlaması gerekir.",
      b2Title:  "Zaman içinde davranışsal örüntüler",
      b2Body:   "Finansal suç nadiren tek bir olayda kendini ele verir. Haftalarca ve aylarca birikir — yalnızca kuruluş davranışı sürekli ve bağlamsal olarak modellendiğinde tespit edilebilir.",
      b3Title:  "Kuruluş çözünürlüğü yoluyla yapı",
      b3Body:   "Suçlular birçok isim, belge ve kimlik kullanır. Kuruluş çözünürlüğü parçalanmış kayıtları birleşik aktörlere indirger — gerçek ağ yapısını okunabilir kılar."
    },
    platform: {
      eyebrow:   "Platform",
      headline:  "Mevcut altyapınızın<br>üzerinde bir zeka katmanı.",
      lead:      "Layer.ONE mevcut AML veya dolandırıcılık önleme sistemlerinizin yerini almaz. Bunları genişletir — mevcut veri mimarinizde değişiklik gerektirmeden işlem düzeyindeki izlemenin üzerine ağ düzeyinde zeka ekler.",
      wideLabel: "Temel tasarım",
      wideTitle: "Modüler. Yıkıcı olmayan. Kurumsal hazır.",
      wideBody:  "Layer.ONE, standart API'ler aracılığıyla mevcut bankacılık sistemleri, veri ambarları ve AML platformlarıyla entegre olur. Ham finansal verileri — işlemler, kuruluşlar, cihazlar, olaylar — alır ve uyum ekipleri ile soruşturmacılar için yapılandırılmış zekaya dönüştürür.",
      c1Label:   "01 — Graf Zekası",
      c1Body:    "Hesaplar, kuruluşlar ve işlemler genelinde gerçek zamanlı ilişki grafları oluşturur. Soruşturmacıların şüpheli bir olayın arkasındaki tam ağ yapısını izlemesini sağlar.",
      c2Label:   "02 — Davranışsal Risk Modellemesi",
      c2Body:    "Sistemdeki her kuruluş için sürekli davranışsal profiller oluşturur. Anormallikleri kurallar aracılığıyla değil, zaman içindeki örüntü sapmalarıyla tespit eder.",
      c3Label:   "03 — Kuruluş Çözünürlüğü",
      c3Body:    "Veri kaynakları genelinde parçalanmış kimlikleri tanımlar ve bağlar. Takma adları, sentetik kimlikleri ve paylaşılan altyapıyı birleşik aktör kayıtlarına çözer.",
      c4Label:   "04 — Ağ Analizi",
      c4Body:    "Finansal suç ağlarını tanımlayan yapısal örüntüleri — katmanlama planları, para katırı halkacıkları ve koordineli dolandırıcılık kümeleri dahil — manuel incelemeye görünür olmadan önce yüzeye çıkarır."
    },
    arch: {
      eyebrow:  "Mimari",
      headline: "Ham veriden soruşturma zekasına.",
      lead:     "Layer.ONE finansal verileri yapılandırılmış bir boru hattı aracılığıyla işler — soruşturmacıya ulaşmadan önce her aşama bir çözünürlük, bağlam ve zeka katmanı ekler.",
      s1Title:  "Veri Kaynakları",
      s1Desc:   "Temel bankacılık, ödeme altyapısı, KYC kayıtları, cihaz sinyalleri, üçüncü taraf beslemeleri.",
      s2Title:  "Alım Katmanı",
      s2Desc:   "Gelen veri akışlarını gerçek zamanlı olarak normalleştirir, doğrular ve yapılandırır.",
      s3Title:  "Kuruluş Çözünürlüğü",
      s3Desc:   "Hesaplar, belgeler ve cihazlar genelinde parçalanmış kimlikleri tekilleştirir ve birleştirir.",
      s4Title:  "Graf Zeka Motoru",
      s4Desc:   "İlişki grafını oluşturur ve sorgular — tam kuruluş ağı genelinde bağlantıları eşleştirir.",
      s5Title:  "Davranışsal Modelleme",
      s5Desc:   "Sürekli olarak kuruluş davranışını profiler ve yerleşik temel çizgilerine göre anormallikleri tespit eder.",
      s6Title:  "Risk Puanlama",
      s6Desc:   "Graf, davranışsal ve ağ sinyallerini kuruluş başına birleşik, açıklanabilir bir risk puanında toplar.",
      s6Note:   "Yanlış pozitifleri azaltmak için ağ, davranış ve kontrol sinyalleri boyunca çok boyutlu onay zorunlu tutuyoruz.",
      s7Title:  "Soruşturma Arayüzü",
      s7Desc:   "Soruşturmacıya yapılandırılmış zeka, dava bağlamı ve ağ görselleştirmeleri sunar."
    },
    platformarch: {
      eyebrow:   "Veriden istihbarata",
      headline:  "Platform Mimarisi",
      f1:        "Veri",
      f2:        "Tarama",
      f3:        "Tespit",
      f4:        "İstihbarat",
      f5:        "Soruşturma",
      stackTitle: "Layer.ONE Platform",
      l1Title:   "1. Veri Katmanı",
      l1i1:      "İşlemler",
      l1i2:      "Hesaplar",
      l1i3:      "Kimlikler (KYC)",
      l1i4:      "Cihazlar",
      l1i5:      "Harici veri",
      l2Title:   "2. Tarama (Temel Katman)",
      l2i1:      "Yaptırım kontrolü",
      l2i2:      "PEP kontrolü",
      l3Title:   "3. Tespit Katmanı",
      l3i1:      "Kural motoru",
      l3i2:      "Davranışsal modeller",
      l3i3:      "Anomali tespiti",
      l4Title:   "4. İstihbarat Katmanı (ÇEKİRDEK)",
      l4i1:      "Kuruluş çözünürlüğü",
      l4i2:      "Graf motoru",
      l4i3:      "Ağ analizi",
      l4i4:      "Risk yayılımı",
      l5Title:   "5. Soruşturma Katmanı (ÇEKİRDEK)",
      l5i1:      "Graf görselleştirme",
      l5i2:      "Dava analizi",
      l5i3:      "İlişki keşfi",
      l6Title:   "6. Platform Katmanı",
      l6i1:      "Entegrasyonlar",
      l6i2:      "API",
      l6i3:      "Kurulum (yerinde / bulut)",
      l6i4:      "Güvenlik ve denetim"
    },
    modules: {
      eyebrow:  "Modüller",
      headline: "Modüler bir zeka sistemi.",
      lead:     "Her modül finansal suç tespitinin farklı bir katmanını ele alır. Bağımsız veya birleşik platform olarak çalışırlar.",
      m1Title:  "Graf Zekası",
      m1Desc:   "Kuruluş ilişki graflarını gerçek zamanlı olarak oluşturur ve geçer. İşlem düzeyindeki izleme için görünmez olan hesaplar, işlemler ve aktörler genelindeki gizli bağlantıları yüzeye çıkarır.",
      m2Title:  "Davranışsal Risk Motoru",
      m2Desc:   "Sistemdeki her kuruluş için boylamsal davranışsal profiller oluşturur. Statik kurallara dayanmadan yapısal anormallikleri ve risk tırmanmasını tespit eder.",
      m3Title:  "Kuruluş Çözünürlüğü",
      m3Desc:   "Veri kaynakları genelinde parçalanmış kimlikleri tekilleştirir ve birleştirir. Sentetik profilleri, takma adları ve paylaşılan kimlik bilgilerini yetkili aktör kayıtlarına çözer.",
      m4Title:  "Paylaşılan Cihaz Tespiti",
      m4Desc:   "Görünüşte ilgisiz hesaplar genelinde cihaz ve altyapı yeniden kullanımını belirler. Farklı kimlikler arkasında faaliyet gösteren koordineli dolandırıcılık halkalarını ve para katırı ağlarını ifşa eder.",
      m5Title:  "Ağ Risk Yayılımı",
      m5Desc:   "Risk sinyallerini kuruluş grafı genelinde yayar. Bir düğüm işaretlendiğinde risk bağlı kuruluşlara akar — yalnızca tetikleyici olayı değil, tam ağı puanlar.",
      m6Title:  "Dava Zekası",
      m6Desc:   "Graf verisi, risk puanları ve kuruluş zaman çizelgelerinden yapılandırılmış soruşturma paketleri oluşturur. Manuel çabayı azaltır ve ilk uyarıdan itibaren davanın tam resmini sunar."
    },
    howitworks: {
      eyebrow: "Nasıl Çalışır",
      headline: "Bağlan. Al. Analiz Et. Soruştur.",
      lead:     "Layer.ONE mevcut altyapıyla entegre olur ve mevcut sistem ve iş akışlarınızı bozmadan istihbarat sunar.",
      s1Title:  "Bağlan",
      s1Desc:   "Standart API'ler aracılığıyla temel bankacılık, AML ve ödeme sistemleriyle entegre olur. Mevcut mimaride değişiklik gerekmez.",
      s2Title:  "Al",
      s2Desc:   "İşlemleri, hesap kayıtlarını, kimlik verilerini, cihaz sinyallerini ve üçüncü taraf beslemelerini gerçek zamanlı olarak işler.",
      s3Title:  "Analiz Et",
      s3Desc:   "Alınan tüm veriler genelinde kuruluş ilişki grafları, davranışsal profiller ve ağ düzeyinde risk puanları oluşturur.",
      s4Title:  "Soruştur",
      s4Desc:   "Uyum ekiplerine ve soruşturmacılara yapılandırılmış istihbarat, ağ haritaları ve tam dava bağlamı sunar."
    },
    usecases: {
      eyebrow:  "Kullanım Alanları",
      headline: "Tek platform.<br>Çoklu istihbarat kapasitesi.",
      lead:     "Layer.ONE ayrı araçların koleksiyonu değildir. Tespit, soruşturma ve ağ analizini entegre, bağlı yetenekler olarak destekleyen tek bir istihbarat platformudur.",
      uc1Tag:   "Tespit",
      uc1Title: "İşlem İzleme",
      uc1Desc:  "Hesaplar ve zaman genelindeki işlem örüntülerini analiz eder — kural tabanlı sistemlerin yüzeye çıkarabileceğinin ötesinde ağ düzeyinde yapılandırma, katmanlama ve davranışsal anormallikleri tespit eder.",
      uc2Tag:   "Tespit",
      uc2Title: "Dolandırıcılık Tespiti",
      uc2Desc:  "Koordineli dolandırıcılık halkalarını, sentetik kimlik planlarını ve cihaz yeniden kullanım örüntülerini ölçeklenmeden önce tanımlar — her dolandırıcılık sinyalinin arkasındaki tam ağı yüzeye çıkarır.",
      uc3Tag:   "Soruşturma",
      uc3Title: "Finansal Suç Soruşturması",
      uc3Desc:  "İlk uyarıdan itibaren tam kuruluş ağı bağlamı, risk zaman çizelgeleri ve kanıt kalitesinde belgeleme sunar — manuel çabayı azaltır ve dava kapanışını hızlandırır.",
      uc4Tag:   "Analiz",
      uc4Title: "Ağ Risk Analizi",
      uc4Desc:  "Risk sinyallerini tam kuruluş grafı genelinde yayar — yalnızca işaretlenen olayı değil, her bağlı düğümü puanlar. Sistemik maruziyeti uyum başarısızlığına dönüşmeden önce ortaya çıkarır."
    },
    dataintegrations: {
      eyebrow:  "Veri ve Entegrasyon",
      headline: "Zaten sahip olduklarınızla çalışır.",
      lead:     "Layer.ONE halihazırda sahip olduğunuz verilere bağlanır — mevcut sistemlerinizi değiştirmeden veya veri mimarinizde değişiklik gerektirmeden.",
      g1Title:  "Veri Kaynakları",
      d1Label:  "İşlemler",        d1Desc:   "Ödemeler, transferler, takas olayları, uzlaşma kayıtları",
      d2Label:  "Hesaplar",        d2Desc:   "Hesap kayıtları, bakiyeler, sahiplik yapıları",
      d3Label:  "Müşteri Kimlikleri", d3Desc: "KYC / CDD kayıtları, kimlik belgeleri, nihai faydalanıcı sahipliği",
      d4Label:  "Cihaz Sinyalleri", d4Desc:  "Cihaz parmak izleri, IP adresleri, oturum meta verileri",
      d5Label:  "Ödeme Aktivitesi", d5Desc:  "Kart olayları, cüzdan aktivitesi, işyeri işlem verileri",
      d6Label:  "Harici İstihbarat", d6Desc: "Yaptırım listeleri, izleme listeleri, olumsuz medya beslemeleri",
      g2Title:  "Entegrasyon Noktaları",
      i1Label:  "Temel Bankacılık Sistemleri",  i1Desc: "Standart ve tescilli API'ler aracılığıyla doğrudan entegrasyon",
      i2Label:  "Ödeme Altyapısı",              i2Desc: "ISO 20022, SWIFT, yurt içi ödeme altyapısı",
      i3Label:  "AML / Dolandırıcılık Araçları", i3Desc: "Mevcut izleme araçlarının yerini almaz, onları tamamlar",
      i4Label:  "Dahili Veri Platformları",      i4Desc: "Veri ambarları, veri gölleri, akış boru hatları",
      i5Label:  "Dava Yönetimi",                 i5Desc: "Yapılandırılmış istihbaratı mevcut soruşturma iş akışlarına besler",
      i6Label:  "Düzenleyici Raporlama",         i6Desc: "ŞPB / STR hazırlığını ve kanıt belgelerini destekler"
    },
    deploy: {
      eyebrow:    "Kurulum ve Güvenlik",
      headline:   "Düzenlenmiş ortamlar için tasarlandı.",
      lead:       "Layer.ONE, veri yerleşimi, erişim kontrolü veya altyapı egemenliğinden taviz veremeyen finansal kurumlar için inşa edilmiştir.",
      g1Title:    "Kurulum",
      g1I1Strong: "Yerinde kurulum",
      g1I1Body:   "Tamamen kurumunuzun altyapısı içinde çalışır. Ortamınızdan hiçbir veri ayrılmaz.",
      g1I2Strong: "Özel bulut desteği",
      g1I2Body:   "Tam kiracı izolasyonuyla ayrılmış özel bulut ortamlarında konuşlandırılabilir.",
      g1I3Strong: "Altyapı entegrasyonu",
      g1I3Body:   "Standart API'ler aracılığıyla mevcut temel bankacılık, AML ve veri ambarı sistemlerine bağlanır.",
      g2Title:    "Güvenlik",
      g2I1Strong: "Şifreli veri boru hatları",
      g2I1Body:   "Aktarımdaki ve beklemedeki tüm veriler şifrelenir. Boru hattı bütünlüğü sürekli doğrulanır.",
      g2I2Strong: "Rol tabanlı erişim kontrolü",
      g2I2Body:   "İnce taneli izinler, verilere, modüllere ve soruşturma kayıtlarına erişimi yönetir.",
      g2I3Strong: "Tam denetlenebilirlik",
      g2I3Body:   "Her eylem, sorgu ve karar tam, kurcalamaya dayanıklı bir denetim izi ile günlüğe kaydedilir."
    },
    customers: {
      eyebrow:  "Kimler İçin İnşa Edildi",
      headline: "Tüm finansal suç<br>ekosistemi için inşa edildi.",
      lead:     "Layer.ONE, bankalar ve fintechlerden ödeme işlemcilerine, düzenleyici kurumlara ve devlet kurumlarına kadar finansal suç ekosistemindeki organizasyonlara hizmet eder.",
      b1Tag:    "Finansal Kurum",
      b1Title:  "Bankalar",
      b1Desc:   "Birden fazla hesap, yan kuruluş ve muhabir ilişkileri kapsayan karmaşık kara para aklaması ağlarını belirleyin. Soruşturma kapasitesini en yüksek riskli kuruluş kümeleri üzerinde yoğunlaştırın.",
      b2Tag:    "Finansal Kurum",
      b2Title:  "Fintech Platformları",
      b2Desc:   "Kullanıcılar, cihazlar ve ödeme akışlarında koordineli dolandırıcılık, sentetik kimlik planları ve davranışsal anormallikleri ölçekte tespit edin — şirket içi zeka altyapısı oluşturmadan.",
      b3Tag:    "Finansal Kurum",
      b3Title:  "Ödeme İşlemcileri",
      b3Desc:   "İşlem ekosistemlerini gizli risk sinyalleri, cihaz yeniden kullanımı ve işyeri ile edinici ağlarında katmanlama veya fon birleştirmenin yapısal göstergeleri açısından izleyin.",
      b4Tag:    "Düzenleyici · Devlet",
      b4Title:  "Düzenleyiciler ve Devlet Kurumları",
      b4Desc:   "Kurumlar genelinde finansal suç örüntülerini sistemik düzeyde analiz edin. Sınır ötesi kara para aklaması ağlarını haritalayın, çok kurumlu soruşturmaları destekleyin ve yaptırım ile kovuşturma için kanıt kalitesinde istihbarat oluşturun."
    },
    faq: {
      eyebrow:  "SSS",
      headline: "Sıkça Sorulan Sorular",
      q1:  "Layer.ONE nedir?",
      a1:  "Layer.ONE, karmaşık finansal suç ağlarını tespit etmek, analiz etmek ve soruşturmak için tasarlanmış bir Finansal Suç İstihbarat Platformudur. İşlemler, hesaplar, kimlikler ve cihazlar arasındaki gizli ilişkileri ortaya çıkarmak için graf zekasını, davranışsal modellemeyi ve kuruluş çözünürlüğünü bir araya getirir.",
      q2:  "Layer.ONE kimler için tasarlandı?",
      a2:  "Layer.ONE; finansal suçu tespit etmek ve analiz etmek için gelişmiş istihbarat yeteneklerine ihtiyaç duyan bankalar, fintech platformları, ödeme işlemcileri, düzenleyiciler ve finansal suç soruşturma ekipleri için tasarlanmıştır.",
      q3:  "Layer.ONE mevcut AML sistemlerinin yerini alır mı?",
      a3:  "Hayır. Layer.ONE mevcut AML ve dolandırıcılık önleme sistemlerinin yanında çalışabilir. Kurumların mevcut altyapılarını değiştirmesini gerektirmeden tespit ve soruşturma yeteneklerini geliştiren bir istihbarat katmanı olarak işlev görür.",
      q4:  "Layer.ONE hangi tür finansal suçları tespit edebilir?",
      a4:  "Layer.ONE; kara para aklaması, koordineli dolandırıcılık, hesap ağları, para katırı ağları, şüpheli işlem örüntüleri ve diğer karmaşık finansal suç yapılarının tespitini ve soruşturulmasını destekler.",
      q5:  "Layer.ONE hangi veri kaynaklarını analiz edebilir?",
      a5:  "Layer.ONE; işlem verilerini, hesap bilgilerini, müşteri kimliklerini, cihaz sinyallerini, ödeme aktivitesini ve diğer ilgili finansal istihbarat veri kaynaklarını analiz edebilir.",
      q6:  "Layer.ONE gizli finansal suç örüntülerini nasıl tespit eder?",
      a6:  "Layer.ONE, kuruluşlar, hesaplar, işlemler ve cihazlar arasındaki ilişkileri tanımlamak için graf tabanlı analiz kullanır. Bu ağ düzeyindeki istihbarat, geleneksel işlem düzeyindeki izleme sistemlerinin sıklıkla kaçırdığı örüntüleri ortaya çıkarmaya yardımcı olur.",
      q7:  "Layer.ONE tarafından işlenen veriler nerede bulunur?",
      a7:  "Layer.ONE, yerinde ve özel bulut dağıtımlarını destekler. Finansal kurumlar platformu kendi altyapıları dahilinde çalıştırabilir; böylece hassas veriler hiçbir zaman kendi ortamlarını terk etmez.",
      q8:  "Layer.ONE mevcut bankacılık sistemleriyle entegre olabilir mi?",
      a8:  "Evet. Layer.ONE, temel bankacılık sistemleri, ödeme platformları, veri ambarları ve mevcut AML veya dolandırıcılık izleme sistemleriyle entegre olmak üzere tasarlanmıştır.",
      q9:  "Layer.ONE soruşturma iş akışlarını destekliyor mu?",
      a9:  "Evet. Layer.ONE, soruşturmacıların şüpheli ağları analiz etmesine, kuruluş ilişkilerini keşfetmesine ve soruşturmalar sırasında gizli finansal suç yapılarını ortaya çıkarmasına yardımcı olur.",
      q10: "Düzenleyiciler ve devlet kurumları Layer.ONE'ı kullanabilir mi?",
      a10: "Evet. Layer.ONE, düzenleyicileri ve devlet kurumlarını kurumlar genelinde finansal suç ağlarını analiz etmede ve yasadışı faaliyetin sistemik örüntülerini belirlemede destekleyebilir.",
      q11: "Layer.ONE düzenlenmiş finansal ortamlar için uygun mu?",
      a11: "Evet. Layer.ONE, düzenlenmiş finansal ortamlar için tasarlanmıştır ve güvenli dağıtımları, şifreli veri boru hatlarını ve katı erişim kontrolünü destekler.",
      q12: "Layer.ONE geleneksel AML sistemlerinden nasıl farklıdır?",
      a12: "Geleneksel AML sistemleri genellikle işlemleri tek tek analiz eder. Layer.ONE ağ düzeyindeki istihbarata odaklanarak kurumların büyük veri setlerinde gizli ilişkileri ve karmaşık finansal suç yapılarını tespit etmesini sağlar."
    },
    cta: {
      headline:     "Gizli finansal suç ağlarını ortaya çıkarın.",
      sub:          "Layer.ONE'ın finansal suç tespitine graf zekasını nasıl getirdiğini keşfedin.",
      btnPrimary:   "Platformu Keşfedin",
      btnSecondary: "Demo Talep Edin"
    },
    footer: {
      tagline:     "Finansal suç tespiti için zeka platformu.",
      navPlatform: "Platform",
      navTech:     "Teknoloji",
      navSecurity: "Güvenlik",
      navContact:  "İletişim",
      copy:        "&copy; 2025 Layer.ONE. Tüm hakları saklıdır."
    }
  }

};

/* ── Helpers ────────────────────────────────────────────────────── */

/**
 * Resolve a dot-separated key path against an object.
 * e.g. getVal(obj, "hero.headline") → obj.hero.headline
 */
function getVal(obj, key) {
  return key.split(".").reduce(function (o, k) {
    return o != null ? o[k] : undefined;
  }, obj);
}

/** Keep mobile nav toggle aria-label in sync with open state and language */
function syncNavToggleAria(t) {
  var header = document.querySelector(".header");
  var toggle = document.querySelector(".nav__toggle");
  if (!toggle || !t || !t.nav) return;
  var open = header && header.classList.contains("header--nav-open");
  var label = open ? t.nav.menuAriaClose : t.nav.menuAriaOpen;
  if (label) toggle.setAttribute("aria-label", label);
}

/**
 * Apply the given language to the entire page without reloading.
 * Touches: document.title, meta[description], all [data-i18n] elements,
 * html[lang], and lang button aria-pressed / active states.
 */
function applyTranslations(lang) {
  var t = TRANSLATIONS[lang];
  if (!t) return;

  /* Title */
  if (t.title) {
    document.title = t.title;
  }

  /* Meta description */
  var metaDesc = document.querySelector("meta[data-i18n-meta]");
  if (metaDesc && t.meta && t.meta.description) {
    metaDesc.setAttribute("content", t.meta.description);
  }

  /* All translatable elements */
  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    var key = el.getAttribute("data-i18n");
    var val = getVal(t, key);
    if (val !== undefined) {
      el.innerHTML = val;
    }
  });

  /* html[lang] */
  document.documentElement.lang = lang;

  /* Lang button states */
  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    var isActive = btn.getAttribute("data-lang") === lang;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-pressed", String(isActive));
  });

  syncNavToggleAria(t);
}

/* ── Init ───────────────────────────────────────────────────────── */

function initI18n() {
  /* Determine initial language from html[lang]; fallback to "en" */
  var currentLang = document.documentElement.lang || "en";
  if (!TRANSLATIONS[currentLang]) currentLang = "en";

  /* Apply on boot so the translation object is always the source of truth */
  applyTranslations(currentLang);

  /* Wire up every lang button (header + footer) */
  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var lang = this.getAttribute("data-lang");
      if (TRANSLATIONS[lang]) {
        applyTranslations(lang);
      }
    });
  });
}

/**
 * Toggle .header--scrolled when the page scrolls past the hero.
 * This transitions the header from transparent (top) to opaque (scrolled).
 */
function initHeaderScroll() {
  var header = document.querySelector(".header");
  if (!header) return;

  var THRESHOLD = 40; // px from top before header solidifies

  function update() {
    header.classList.toggle("header--scrolled", window.scrollY > THRESHOLD);
  }

  window.addEventListener("scroll", update, { passive: true });
  update();
}

/**
 * Mobile: hamburger opens full-height link panel; backdrop + Escape close.
 */
function initMobileNav() {
  var header = document.querySelector(".header");
  var toggle = document.querySelector(".nav__toggle");
  var backdrop = document.querySelector(".nav__backdrop");
  if (!header || !toggle) return;

  var mq = window.matchMedia("(max-width: 900px)");

  var panel = document.getElementById("primary-navigation");

  function syncNavPanelAria() {
    if (!panel) return;
    if (!mq.matches) {
      panel.removeAttribute("aria-hidden");
    } else {
      panel.setAttribute(
        "aria-hidden",
        header.classList.contains("header--nav-open") ? "false" : "true"
      );
    }
  }

  function setOpen(open) {
    header.classList.toggle("header--nav-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    document.body.classList.toggle("nav-open", open);
    if (backdrop) {
      backdrop.hidden = !open;
      backdrop.setAttribute("aria-hidden", open ? "false" : "true");
    }
    syncNavPanelAria();
    var lang = document.documentElement.lang || "en";
    var t = TRANSLATIONS[lang];
    if (t) syncNavToggleAria(t);
  }

  toggle.addEventListener("click", function () {
    if (!mq.matches) return;
    setOpen(!header.classList.contains("header--nav-open"));
  });

  if (backdrop) {
    backdrop.addEventListener("click", function () {
      setOpen(false);
    });
  }

  document.querySelectorAll(".nav__links a").forEach(function (a) {
    a.addEventListener("click", function () {
      if (mq.matches) setOpen(false);
    });
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && header.classList.contains("header--nav-open")) {
      setOpen(false);
    }
  });

  window.addEventListener(
    "resize",
    function () {
      if (!mq.matches) setOpen(false);
      else syncNavPanelAria();
    },
    { passive: true }
  );

  syncNavPanelAria();

  var lang0 = document.documentElement.lang || "en";
  if (TRANSLATIONS[lang0]) syncNavToggleAria(TRANSLATIONS[lang0]);
}

/**
 * Highlight the active nav link based on scroll position.
 *
 * Approach: on every scroll event, find the last section whose top edge
 * has crossed a threshold from the top of the viewport. That section
 * is considered "active". More reliable than IntersectionObserver alone
 * because it handles all viewport sizes and short sections correctly.
 */
function initNavActiveState() {
  var navLinks = document.querySelectorAll(".nav__links a");
  if (!navLinks.length) return;

  var sections = Array.from(navLinks)
    .map(function (a) {
      var id = a.getAttribute("href").replace("#", "");
      return document.getElementById(id);
    })
    .filter(Boolean);

  if (!sections.length) return;

  function update() {
    /* Trigger point: 35% down the viewport — feels natural as reading line */
    var triggerY = Math.min(window.innerHeight * 0.35, 220);
    var active = null;

    for (var i = 0; i < sections.length; i++) {
      if (sections[i].getBoundingClientRect().top <= triggerY) {
        active = sections[i];
      }
    }

    navLinks.forEach(function (link) {
      link.classList.toggle(
        "active",
        active !== null &&
          link.getAttribute("href") === "#" + active.getAttribute("id")
      );
    });
  }

  window.addEventListener("scroll", update, { passive: true });
  update();
}

/**
 * Scroll reveal — fade + lift for section content as it enters the viewport.
 *
 * Two tiers:
 *   1. Section headers  → .reveal     (14px, 0.65s, no stagger)
 *   2. Grid/list items  → .reveal--item (8px, 0.55s, staggered)
 *
 * Stagger is applied via the CSS custom property --reveal-delay.
 * Grids are observed as a unit; when the grid enters the viewport
 * all children animate sequentially.
 *
 * Respects prefers-reduced-motion: if reduced motion is preferred,
 * no classes are added and the CSS transitions never apply.
 */
function initScrollReveal() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -50px 0px" }
  );

  /* ── 1. Section headers — reveal as a unit ─────────────── */
  var HEADERS = [
    ".problem__header",
    ".problem__conclusion",
    ".insight__header",
    ".platform__header",
    ".how-it-works__header",
    ".architecture__header",
    ".platform-arch__header",
    ".modules__header",
    ".use-cases__header",
    ".data-integrations__intro",
    ".deployment__header",
    ".customers__header",
    ".faq__header",
    ".cta__content",
  ];

  HEADERS.forEach(function (sel) {
    var el = document.querySelector(sel);
    if (!el) return;
    el.classList.add("reveal");
    observer.observe(el);
  });

  /* ── 2. Grid and list containers — stagger direct children ─ */

  /*
    staggerStep: delay increment between siblings (ms)
    childSel:    which direct children to animate (defaults to all)
  */
  var GRIDS = [
    { sel: ".problem__points",         staggerStep: 90  },
    { sel: ".insight__blocks",         staggerStep: 90  },
    { sel: ".platform__grid",          staggerStep: 70  },
    { sel: ".how-it-works__steps",     staggerStep: 75  },
    { sel: ".arch-flow",               staggerStep: 65  }, // pipeline — sequential feel
    { sel: ".platform-arch__layers",   staggerStep: 55  },
    { sel: ".modules__grid",           staggerStep: 55  }, // 6 items — tighter
    { sel: ".use-cases__grid",         staggerStep: 75  },
    { sel: ".data-integrations__layout", staggerStep: 100 },
    { sel: ".deployment__groups",        staggerStep: 100 },
    { sel: ".customers__grid",           staggerStep: 80  },
    { sel: ".faq__list",                 staggerStep: 40  },
  ];

  GRIDS.forEach(function (cfg) {
    var container = document.querySelector(cfg.sel);
    if (!container) return;

    var children = Array.from(container.children);

    children.forEach(function (child, i) {
      child.classList.add("reveal--item");
      child.style.setProperty("--reveal-delay", i * cfg.staggerStep + "ms");
      observer.observe(child);
    });
  });
}

/**
 * FAQ accordion — smooth expand/collapse with keyboard support.
 * One item open at a time; clicking an open item closes it.
 */
function initFaqAccordion() {
  var items = Array.from(document.querySelectorAll(".faq-item"));
  if (!items.length) return;

  items.forEach(function (item) {
    var btn    = item.querySelector(".faq-question");
    var answer = item.querySelector(".faq-answer");
    if (!btn || !answer) return;

    btn.addEventListener("click", function () {
      var isOpen = item.classList.contains("is-open");

      /* Close every item */
      items.forEach(function (i) {
        i.classList.remove("is-open");
        i.querySelector(".faq-question").setAttribute("aria-expanded", "false");
        var a = i.querySelector(".faq-answer");
        a.style.maxHeight = "0";
        a.setAttribute("aria-hidden", "true");
      });

      /* If the clicked item was closed, open it */
      if (!isOpen) {
        item.classList.add("is-open");
        btn.setAttribute("aria-expanded", "true");
        answer.style.maxHeight = answer.scrollHeight + "px";
        answer.setAttribute("aria-hidden", "false");
      }
    });
  });
}

/**
 * Hero — financial intelligence network graph
 *
 * Visual system
 * ─────────────────────────────────────────────────────────────
 *  Tier 0  Hub     Large nodes. Banking/institution entities.
 *                  Orbit ring + targeting crosshair + interior
 *                  ledger lines (two tiny horizontal bars inside).
 *  Tier 1  Node    Standard nodes. ~30% rendered as diamonds
 *                  (mobile/device — vertical bar inside).
 *                  Rest are account circles with outer ring.
 *  Tier 2  Dust    Tiny dim nodes. Background texture (desktop only).
 *
 *  Edges (normal)   Cyan lines; quadratic opacity falloff.
 *  Edges (cluster)  Amber lines with shadowBlur glow — drawn in a
 *                   separate pass to batch the GPU state change.
 *
 *  Cluster   Every ~10s a random hub activates. Nearby nodes highlight
 *            in amber (threat-detected palette). Two expanding rings
 *            emanate from the hub. Cluster particles trace transactions.
 *            Bell-curve fade in/out over CLUSTER_DURATION.
 *
 *  Transactions  Continuous comet pulses travel along edges (always on).
 *                Biased toward hub-connected edges (major account flows).
 *                Normal = white/light cyan; cluster-adjacent = amber.
 *                On arrival: a quick ripple ring expands at the destination.
 *
 * Performance
 * ─────────────────────────────────────────────────────────────
 *  · Dust–dust edge pairs are skipped.
 *  · Edges with alpha < 0.006 are culled before draw.
 *  · shadowBlur is set only once per frame (cluster pass).
 *  · Transaction pool capped at TXN_MAX; dust nodes excluded.
 *  · Animation pauses when document is hidden (visibilitychange).
 *  · Respects prefers-reduced-motion.
 */
function initHeroCanvas() {
  var canvas = document.querySelector(".hero__canvas");
  if (!canvas) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var ctx = canvas.getContext("2d");

  /* Secondary accent — #00D4FF (graph / highlights) */
  var CR = 0,  CG = 212, CB = 255;
  function ac(a) { return "rgba(" + CR + "," + CG + "," + CB + "," + a.toFixed(3) + ")"; }

  /* Alert accent — amber #fb923c  (threat / cluster state) */
  var AR = 251, AG = 146, AB = 60;
  function aa(a) { return "rgba(" + AR + "," + AG + "," + AB + "," + a.toFixed(3) + ")"; }

  /* ── Config ───────────────────────────────────────────── */

  var MOBILE = window.innerWidth < 680;

  /*
   * Speeds are intentionally slow: financial networks are near-static
   * topologies with infrequent updates, not organic particle swarms.
   */
  var T_HUB  = { level: 0, n: MOBILE ? 5  : 9,  rLo: 2.6, rHi: 4.2, aLo: 0.75, aHi: 0.92, sLo: 0.012, sHi: 0.030 };
  var T_NODE = { level: 1, n: MOBILE ? 32 : 58, rLo: 0.9, rHi: 2.0, aLo: 0.20, aHi: 0.44, sLo: 0.020, sHi: 0.055 };
  var T_DUST = { level: 2, n: MOBILE ? 0  : 24, rLo: 0.4, rHi: 0.9, aLo: 0.05, aHi: 0.14, sLo: 0.008, sHi: 0.022 };

  var MAX_DIST  = MOBILE ? 130 : 172; /* longer edges = more visible connections */
  var MAX_DIST2 = MAX_DIST * MAX_DIST;
  var EDGE_BASE = 0.100;              /* brighter edges for denser network feel  */
  var HUB_GLOW  = 14;

  var CLUSTER_DELAY    = 5800;
  var CLUSTER_GAP_MIN  = 8500;
  var CLUSTER_GAP_RND  = 5000;
  var CLUSTER_DURATION = 5600;
  var CLUSTER_RING_DUR = 1600;
  var CLUSTER_RADIUS   = MAX_DIST * 0.78;
  var CLUSTER_RADIUS2  = CLUSTER_RADIUS * CLUSTER_RADIUS;

  /* Transaction pulse config */
  var TXN_MAX        = MOBILE ? 4 : 8;   /* max concurrent pulses         */
  var TXN_SPAWN_PROB = 0.032;            /* spawn chance per frame        */
  var TXN_SPD_LO     = 0.006;           /* transit speed range           */
  var TXN_SPD_HI     = 0.013;
  var TXN_ARRIVAL_DUR = 700;            /* ms for arrival ring to fade   */

  /* ── State ────────────────────────────────────────────── */

  var nodes     = [];
  var particles = []; /* data-flow dots along cluster edges */
  var txns      = []; /* { i, j, t, spd } — continuous transaction pulses */
  var arrivals  = []; /* { x, y, t0 } — ripple rings at txn destinations  */
  var W = 0, H = 0, dpr = 1;
  var rafId = 0;

  var clusterOn     = false;
  var clusterT0     = 0;
  var clusterMap    = {};
  var clusterHubIdx = -1;
  var clusterNext   = 0;

  /* ── Helpers ──────────────────────────────────────────── */

  function rn(lo, hi) { return lo + Math.random() * (hi - lo); }

  /* Random financial amount label: "+$847K" or "+$2.1M" */
  function randomAmount() {
    if (Math.random() < 0.28) {
      return "+$" + (1 + Math.floor(Math.random() * 9)) + "." + Math.floor(Math.random() * 9) + "M";
    }
    return "+$" + (Math.floor(Math.random() * 890) + 110) + "K";
  }

  /* ── Canvas sizing ────────────────────────────────────── */

  function resize() {
    W   = canvas.offsetWidth;
    H   = canvas.offsetHeight;
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width  = W * dpr;
    canvas.height = H * dpr;
    ctx.scale(dpr, dpr);
  }

  /* ── Node population ──────────────────────────────────── */

  function spawnTier(def) {
    for (var i = 0; i < def.n; i++) {
      var ang = Math.random() * Math.PI * 2;
      var spd = rn(def.sLo, def.sHi);

      /* Assign visual type: bank for hubs, dust for background, varied for nodes */
      var nodeType;
      if (def.level === 0) {
        nodeType = "bank";
      } else if (def.level === 2) {
        nodeType = "dust";
      } else {
        var rt = Math.random();
        if      (rt < 0.28) nodeType = "person";
        else if (rt < 0.52) nodeType = "phone";
        else if (rt < 0.72) nodeType = "laptop";
        else if (rt < 0.87) nodeType = "card";
        else                nodeType = "account";
      }

      nodes.push({
        x: rn(0, W), y: rn(0, H),
        vx: Math.cos(ang) * spd, vy: Math.sin(ang) * spd,
        wander:     ang,
        r:          rn(def.rLo, def.rHi),
        baseAlpha:  rn(def.aLo, def.aHi),
        level:      def.level,
        isHub:      def.level === 0,
        sMax:       def.sHi,
        phase:      Math.random() * Math.PI * 2,
        phaseSpeed: 0.00038 + Math.random() * 0.00082,
        nodeType:   nodeType,
      });
    }
  }

  function populate() {
    nodes     = [];
    particles = [];
    txns      = [];
    arrivals  = [];
    spawnTier(T_HUB);
    spawnTier(T_NODE);
    spawnTier(T_DUST);
  }

  /* ── Cluster system ───────────────────────────────────── */

  function startCluster(ts) {
    var hubIdxList = [];
    for (var i = 0; i < nodes.length; i++) {
      if (nodes[i].isHub) hubIdxList.push(i);
    }
    if (!hubIdxList.length) return;

    var pick = hubIdxList[Math.floor(Math.random() * hubIdxList.length)];
    var hub  = nodes[pick];

    clusterMap     = {};
    clusterHubIdx  = pick;
    clusterMap[pick] = true;

    for (var j = 0; j < nodes.length; j++) {
      if (j === pick || nodes[j].level === 2) continue;
      var dx = nodes[j].x - hub.x;
      var dy = nodes[j].y - hub.y;
      if (dx * dx + dy * dy <= CLUSTER_RADIUS2) clusterMap[j] = true;
    }

    /* Spawn data-flow particles along edges inside the cluster */
    particles = [];
    var keys = Object.keys(clusterMap).map(Number);
    for (var pi = 0; pi < keys.length; pi++) {
      for (var pj = pi + 1; pj < keys.length; pj++) {
        var ni = keys[pi], nj = keys[pj];
        var pdx = nodes[ni].x - nodes[nj].x;
        var pdy = nodes[ni].y - nodes[nj].y;
        if (pdx * pdx + pdy * pdy < MAX_DIST2) {
          particles.push({
            i: ni, j: nj,
            t:   Math.random(),
            spd: 0.0028 + Math.random() * 0.0038,
            dir: Math.random() > 0.5 ? 1 : -1,
          });
        }
      }
    }

    clusterOn = true;
    clusterT0 = ts;
  }

  /* Bell-curve intensity: 0 → 1 → 0 over CLUSTER_DURATION */
  function bell(ts) {
    if (!clusterOn) return 0;
    var t = (ts - clusterT0) / CLUSTER_DURATION;
    return t >= 1 ? 0 : Math.sin(t * Math.PI);
  }

  /* ── Physics ──────────────────────────────────────────── */

  /*
   * Three-layer force model:
   *
   *  1. Wander steering  — slow random walk (very gentle, not a particle swarm)
   *  2. Hub attraction   — non-hub nodes are weakly pulled toward the nearest hub
   *                        within HUB_PULL_RADIUS. Creates visible satellite clusters
   *                        that look like account groups around an institution.
   *  3. Node repulsion   — nodes within REP_DIST of each other push apart.
   *                        Prevents clumping; gives the force-directed graph spacing
   *                        that makes a network look structured.
   *  4. Edge spring      — proportional repulsion from canvas edges.
   *  5. Hard clamp       — nodes can never escape canvas bounds.
   */
  function step() {
    var MARGIN = 88;
    var EDGE_SPRING     = 0.0030;  /* canvas-edge repulsion                   */
    var HUB_ATTRACT     = 0.00010; /* weak pull of hub on nearby satellites    */
    var HUB_PULL_RADIUS = CLUSTER_RADIUS * 1.3;
    var HUB_PULL_R2     = HUB_PULL_RADIUS * HUB_PULL_RADIUS;
    var REP_DIST        = MOBILE ? 28 : 36; /* node-node repulsion radius      */
    var REP_DIST2       = REP_DIST * REP_DIST;
    var REP_FORCE       = 0.0016;  /* repulsion strength                      */

    /* ── Pass 1: wander + hub attraction + edge spring ─── */
    for (var i = 0; i < nodes.length; i++) {
      var n = nodes[i];

      /* Gentle random walk — much slower than before */
      n.wander += (Math.random() - 0.5) * 0.022;
      n.vx += Math.cos(n.wander) * 0.0018;
      n.vy += Math.sin(n.wander) * 0.0018;

      /* Hub attraction: pull non-hub nodes toward the nearest hub */
      if (!n.isHub) {
        for (var h = 0; h < T_HUB.n; h++) {
          var hub = nodes[h];
          var hdx = hub.x - n.x;
          var hdy = hub.y - n.y;
          var hd2 = hdx * hdx + hdy * hdy;
          if (hd2 < HUB_PULL_R2 && hd2 > 0) {
            var hd = Math.sqrt(hd2);
            /* Force tapers off with distance (linear falloff) */
            var hf = HUB_ATTRACT * (1 - hd / HUB_PULL_RADIUS);
            n.vx += (hdx / hd) * hf;
            n.vy += (hdy / hd) * hf;
          }
        }
      }

      /* Canvas-edge spring */
      if (n.x < MARGIN)     n.vx += (MARGIN - n.x) * EDGE_SPRING;
      if (n.x > W - MARGIN) n.vx -= (n.x - (W - MARGIN)) * EDGE_SPRING;
      if (n.y < MARGIN)     n.vy += (MARGIN - n.y) * EDGE_SPRING;
      if (n.y > H - MARGIN) n.vy -= (n.y - (H - MARGIN)) * EDGE_SPRING;

      /* Speed cap */
      var spd = Math.sqrt(n.vx * n.vx + n.vy * n.vy);
      if (spd > n.sMax) { n.vx = n.vx / spd * n.sMax; n.vy = n.vy / spd * n.sMax; }

      n.x += n.vx;
      n.y += n.vy;

      if (n.x < 0) { n.x = 0; n.vx =  Math.abs(n.vx) * 0.4; }
      if (n.x > W) { n.x = W; n.vx = -Math.abs(n.vx) * 0.4; }
      if (n.y < 0) { n.y = 0; n.vy =  Math.abs(n.vy) * 0.4; }
      if (n.y > H) { n.y = H; n.vy = -Math.abs(n.vy) * 0.4; }
    }

    /* ── Pass 2: node-node repulsion (skip dust) ──────── */
    for (var ri = 0; ri < nodes.length; ri++) {
      if (nodes[ri].level === 2) continue;
      for (var rj = ri + 1; rj < nodes.length; rj++) {
        if (nodes[rj].level === 2) continue;
        var rdx = nodes[ri].x - nodes[rj].x;
        var rdy = nodes[ri].y - nodes[rj].y;
        var rd2 = rdx * rdx + rdy * rdy;
        if (rd2 >= REP_DIST2 || rd2 === 0) continue;
        var rd = Math.sqrt(rd2);
        var f  = REP_FORCE * (REP_DIST - rd) / REP_DIST;
        var fx = (rdx / rd) * f;
        var fy = (rdy / rd) * f;
        nodes[ri].vx += fx; nodes[ri].vy += fy;
        nodes[rj].vx -= fx; nodes[rj].vy -= fy;
      }
    }
  }

  /* ── Draw: edges — two passes to batch shadow GPU state ─ */

  function drawEdges(ts) {
    var b = bell(ts);
    ctx.lineCap = "round";

    /* Pass 1 — normal (non-cluster) edges, no shadow */
    ctx.shadowColor = "transparent";
    ctx.shadowBlur  = 0;

    for (var i = 0; i < nodes.length; i++) {
      for (var j = i + 1; j < nodes.length; j++) {
        if (nodes[i].level === 2 && nodes[j].level === 2) continue;

        var iC = b > 0 && !!clusterMap[i];
        var jC = b > 0 && !!clusterMap[j];
        if (iC && jC) continue; /* handled in pass 2 */

        var dx = nodes[i].x - nodes[j].x;
        var dy = nodes[i].y - nodes[j].y;
        if (dx * dx + dy * dy >= MAX_DIST2) continue;

        var dist  = Math.sqrt(dx * dx + dy * dy);
        var ratio = 1 - dist / MAX_DIST;
        var a     = EDGE_BASE * ratio * ratio;

        var iH = nodes[i].isHub, jH = nodes[j].isHub;
        var lw;
        if (iH && jH)      { a *= 3.0; lw = 0.90; }
        else if (iH || jH) { a *= 1.8; lw = 0.55; }
        else               { a *= 1.0; lw = 0.32; }

        if (b > 0 && (iC || jC)) a += b * a * 0.8; /* partial cluster lift */

        a = Math.min(a, 0.46);
        if (a < 0.006) continue;

        ctx.beginPath();
        ctx.moveTo(nodes[i].x, nodes[i].y);
        ctx.lineTo(nodes[j].x, nodes[j].y);
        ctx.strokeStyle = ac(a);
        ctx.lineWidth   = lw;
        ctx.stroke();
      }
    }

    /* Pass 2 — cluster-internal edges: amber + glow (one shadowBlur set) */
    if (b > 0) {
      ctx.save();
      ctx.shadowColor = aa(b * 0.55);
      ctx.shadowBlur  = 7;
      ctx.lineCap     = "round";

      for (var ci = 0; ci < nodes.length; ci++) {
        if (!clusterMap[ci]) continue;
        for (var cj = ci + 1; cj < nodes.length; cj++) {
          if (!clusterMap[cj]) continue;

          var cdx = nodes[ci].x - nodes[cj].x;
          var cdy = nodes[ci].y - nodes[cj].y;
          if (cdx * cdx + cdy * cdy >= MAX_DIST2) continue;

          var cdist  = Math.sqrt(cdx * cdx + cdy * cdy);
          var cratio = 1 - cdist / MAX_DIST;
          var ca     = EDGE_BASE * cratio * cratio * 5.5 * b;
          var clw    = (nodes[ci].isHub || nodes[cj].isHub) ? 1.2 : 0.85;

          ca = Math.min(ca, 0.80);
          if (ca < 0.006) continue;

          ctx.beginPath();
          ctx.moveTo(nodes[ci].x, nodes[ci].y);
          ctx.lineTo(nodes[cj].x, nodes[cj].y);
          ctx.strokeStyle = aa(ca);
          ctx.lineWidth   = clw;
          ctx.stroke();
        }
      }
      ctx.restore();
    }
  }

  /* ── Node icon drawing helpers ───────────────────────── */
  /*
   * Each helper draws a minimal stroke-only icon centered at (cx, cy).
   * s = half the bounding box (total icon ≈ 2s × 2s px).
   * col = css color string, lw = lineWidth.
   */

  function iconBank(cx, cy, s, col, lw) {
    /* Institution: pediment triangle + two columns + base */
    ctx.strokeStyle = col;
    ctx.lineWidth   = lw;
    var top = cy - s * 0.78, mid = cy - s * 0.04, bot = cy + s * 0.74;
    ctx.beginPath(); /* roof triangle */
    ctx.moveTo(cx - s * 0.92, mid);
    ctx.lineTo(cx, top);
    ctx.lineTo(cx + s * 0.92, mid);
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath(); /* two columns */
    ctx.moveTo(cx - s * 0.36, mid); ctx.lineTo(cx - s * 0.36, bot);
    ctx.moveTo(cx + s * 0.36, mid); ctx.lineTo(cx + s * 0.36, bot);
    ctx.stroke();
    ctx.beginPath(); /* base */
    ctx.moveTo(cx - s * 0.92, bot); ctx.lineTo(cx + s * 0.92, bot);
    ctx.stroke();
  }

  function iconPerson(cx, cy, s, col, lw) {
    /* Account holder: circle head + shoulders arc */
    ctx.strokeStyle = col;
    ctx.lineWidth   = lw;
    ctx.beginPath();
    ctx.arc(cx, cy - s * 0.36, s * 0.30, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(cx, cy + s * 0.52, s * 0.64, Math.PI + 0.38, -0.38);
    ctx.stroke();
  }

  function iconPhone(cx, cy, s, col, lw) {
    /* Mobile device: rounded rectangle + home dot */
    ctx.strokeStyle = col;
    ctx.lineWidth   = lw;
    var w = s * 0.58, h = s * 0.92, r = s * 0.14;
    /* Manual rounded rect */
    ctx.beginPath();
    ctx.moveTo(cx - w + r, cy - h);
    ctx.lineTo(cx + w - r, cy - h);
    ctx.arcTo(cx + w, cy - h, cx + w, cy - h + r, r);
    ctx.lineTo(cx + w, cy + h - r);
    ctx.arcTo(cx + w, cy + h, cx + w - r, cy + h, r);
    ctx.lineTo(cx - w + r, cy + h);
    ctx.arcTo(cx - w, cy + h, cx - w, cy + h - r, r);
    ctx.lineTo(cx - w, cy - h + r);
    ctx.arcTo(cx - w, cy - h, cx - w + r, cy - h, r);
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath(); /* home button */
    ctx.arc(cx, cy + h * 0.73, r * 0.65, 0, Math.PI * 2);
    ctx.stroke();
  }

  function iconLaptop(cx, cy, s, col, lw) {
    /* Laptop: screen rect + hinge line + base trapezoid */
    ctx.strokeStyle = col;
    ctx.lineWidth   = lw;
    ctx.strokeRect(cx - s * 0.68, cy - s * 0.76, s * 1.36, s * 0.88);
    ctx.beginPath(); /* hinge */
    ctx.moveTo(cx - s, cy + s * 0.12); ctx.lineTo(cx + s, cy + s * 0.12);
    ctx.stroke();
    ctx.beginPath(); /* base */
    ctx.moveTo(cx - s * 0.82, cy + s * 0.12);
    ctx.lineTo(cx - s * 0.68, cy + s * 0.52);
    ctx.lineTo(cx + s * 0.68, cy + s * 0.52);
    ctx.lineTo(cx + s * 0.82, cy + s * 0.12);
    ctx.stroke();
  }

  function iconCard(cx, cy, s, col, lw) {
    /* Credit/debit card: outline + EMV chip + stripe */
    ctx.strokeStyle = col;
    ctx.lineWidth   = lw;
    ctx.strokeRect(cx - s, cy - s * 0.60, s * 2, s * 1.20);
    ctx.strokeRect(cx - s * 0.65, cy - s * 0.20, s * 0.46, s * 0.40);
    ctx.beginPath(); /* magnetic stripe line */
    ctx.moveTo(cx - s, cy + s * 0.24); ctx.lineTo(cx + s, cy + s * 0.24);
    ctx.stroke();
  }

  /* ── Draw: regular + dust nodes ──────────────────────── */

  function drawNodes(ts) {
    var b = bell(ts);

    for (var i = 0; i < nodes.length; i++) {
      var n = nodes[i];
      if (n.isHub) continue;

      var pulse = 0.84 + 0.16 * Math.sin(ts * n.phaseSpeed + n.phase);
      var a     = n.baseAlpha * pulse;
      var inC   = b > 0 && !!clusterMap[i];

      /* Dust: simple dot only */
      if (n.level === 2) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = ac(a);
        ctx.fill();
        continue;
      }

      if (inC) {
        /* Soft aura behind icon */
        ctx.beginPath();
        ctx.arc(n.x, n.y, 11, 0, Math.PI * 2);
        ctx.fillStyle = aa(b * 0.042);
        ctx.fill();
        a = Math.min(a + b * 0.45, 0.88);
      }

      var col = inC ? aa(a) : ac(a);
      var lw  = inC ? 0.88 : 0.72;

      switch (n.nodeType) {
        case "person":  iconPerson(n.x, n.y, 7.0, col, lw); break;
        case "phone":   iconPhone( n.x, n.y, 6.5, col, lw); break;
        case "laptop":  iconLaptop(n.x, n.y, 7.0, col, lw); break;
        case "card":    iconCard(  n.x, n.y, 7.0, col, lw); break;
        default:        /* account — small dot with outer ring */
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
          ctx.fillStyle = col;
          ctx.fill();
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.r * 2.6, 0, Math.PI * 2);
          ctx.strokeStyle = inC ? aa(a * 0.22) : ac(a * 0.18);
          ctx.lineWidth = 0.5;
          ctx.stroke();
      }
    }
  }

  /* ── Draw: hub nodes ──────────────────────────────────── */

  function drawHubs(ts) {
    var b     = bell(ts);
    var ICON  = 7.0; /* half-size of bank icon (14px total) */
    var ORBIT = ICON * 2.2;

    ctx.save();
    for (var i = 0; i < nodes.length; i++) {
      var n = nodes[i];
      if (!n.isHub) continue;

      var pulse  = 0.88 + 0.12 * Math.sin(ts * n.phaseSpeed + n.phase);
      var a      = n.baseAlpha * pulse;
      var gBlur  = HUB_GLOW;
      var gAlpha = 0.55;
      var inC    = b > 0 && !!clusterMap[i];

      if (inC) {
        gBlur  += b * 20;
        gAlpha  = 0.55 + b * 0.45;
        a       = Math.min(a + b * 0.12, 0.98);

        /* Wide corona behind icon */
        ctx.shadowColor = aa(b * 0.26);
        ctx.shadowBlur  = gBlur * 2.8;
        ctx.beginPath();
        ctx.arc(n.x, n.y, ICON * 1.9, 0, Math.PI * 2);
        ctx.fillStyle = aa(b * 0.06);
        ctx.fill();
      }

      /* Bank icon with glow */
      ctx.shadowColor = inC ? aa(gAlpha) : ac(gAlpha);
      ctx.shadowBlur  = gBlur;
      iconBank(n.x, n.y, ICON, inC ? aa(a) : ac(a), inC ? 1.0 : 0.88);

      /* No shadow below this point */
      ctx.shadowBlur  = 0;
      ctx.shadowColor = "transparent";

      /* Orbit ring */
      ctx.beginPath();
      ctx.arc(n.x, n.y, ORBIT, 0, Math.PI * 2);
      ctx.strokeStyle = inC ? aa(a * 0.28) : ac(a * 0.16);
      ctx.lineWidth   = 0.6;
      ctx.stroke();

      /* Targeting crosshair ticks */
      var cGap = ORBIT + 2, cLen = ICON * 1.6;
      ctx.strokeStyle = inC ? aa(a * 0.46) : ac(a * 0.32);
      ctx.lineWidth   = 0.55;
      ctx.beginPath();
      ctx.moveTo(n.x - cGap - cLen, n.y); ctx.lineTo(n.x - cGap, n.y);
      ctx.moveTo(n.x + cGap,        n.y); ctx.lineTo(n.x + cGap + cLen, n.y);
      ctx.moveTo(n.x, n.y - cGap - cLen); ctx.lineTo(n.x, n.y - cGap);
      ctx.moveTo(n.x, n.y + cGap);        ctx.lineTo(n.x, n.y + cGap + cLen);
      ctx.stroke();

      /* "$" label above orbit ring */
      ctx.font         = "8px 'Courier New', Courier, monospace";
      ctx.textAlign    = "center";
      ctx.textBaseline = "bottom";
      ctx.fillStyle    = inC ? aa(a * 0.58) : ac(a * 0.40);
      ctx.fillText("$", n.x, n.y - ORBIT - 3);
      ctx.textBaseline = "alphabetic";
    }
    ctx.restore();
  }

  /* ── Draw: cluster activation rings ──────────────────── */
  /*
   * Two staggered expanding rings emanate from the triggering hub
   * (second ring delayed 420ms). Amber color signals detection event.
   */
  function drawActivationRing(ts) {
    if (!clusterOn || clusterHubIdx < 0) return;

    var hub = nodes[clusterHubIdx];

    function ring(delay, maxScale, baseAlpha, lw) {
      var t = (ts - clusterT0 - delay) / CLUSTER_RING_DUR;
      if (t <= 0 || t >= 1) return;
      var r = hub.r + t * MAX_DIST * maxScale;
      var a = baseAlpha * (1 - t) * (1 - t);
      ctx.beginPath();
      ctx.arc(hub.x, hub.y, r, 0, Math.PI * 2);
      ctx.strokeStyle = aa(a);
      ctx.lineWidth   = lw;
      ctx.stroke();
    }

    ring(0,   0.62, 0.40, 0.90);
    ring(420, 0.62, 0.24, 0.55);
  }

  /* ── Draw: data-flow particles ────────────────────────── */
  /*
   * Amber dots travel along cluster edges, suggesting traced
   * transactions propagating through the flagged network.
   */
  function drawParticles(ts) {
    if (!clusterOn || particles.length === 0) return;
    var b = bell(ts);
    if (b <= 0) return;

    for (var i = 0; i < particles.length; i++) {
      var p = particles[i];
      p.t += p.spd * p.dir;
      if (p.t > 1) p.t = 0;
      if (p.t < 0) p.t = 1;

      var ni = nodes[p.i], nj = nodes[p.j];
      var px = ni.x + (nj.x - ni.x) * p.t;
      var py = ni.y + (nj.y - ni.y) * p.t;

      ctx.beginPath();
      ctx.arc(px, py, 1.3, 0, Math.PI * 2);
      ctx.fillStyle = aa(b * 0.90);
      ctx.fill();
    }
  }

  /* ── Transaction system (always active) ──────────────── */
  /*
   * Continuous comet pulses travel along edges to simulate live
   * financial transactions. Biased 65% toward hub-connected edges
   * (major institution flows). Normal color: light white-cyan.
   * Alert state (near cluster): switches to amber automatically.
   * On arrival: a quick ripple ring expands at the destination node.
   */

  function spawnTxn() {
    if (txns.length >= TXN_MAX) return;

    var useHub = Math.random() < 0.65;

    for (var attempt = 0; attempt < 30; attempt++) {
      var ni = Math.floor(Math.random() * nodes.length);
      var nj = Math.floor(Math.random() * nodes.length);
      if (ni === nj) continue;
      if (nodes[ni].level === 2 || nodes[nj].level === 2) continue;
      if (useHub && !nodes[ni].isHub && !nodes[nj].isHub) continue;

      var dx = nodes[ni].x - nodes[nj].x;
      var dy = nodes[ni].y - nodes[nj].y;
      if (dx * dx + dy * dy < MAX_DIST2) {
        txns.push({ i: ni, j: nj, t: 0, spd: rn(TXN_SPD_LO, TXN_SPD_HI) });
        return;
      }
    }

    /* Fallback: any valid non-dust edge */
    for (var fb = 0; fb < 15; fb++) {
      var fni = Math.floor(Math.random() * nodes.length);
      var fnj = Math.floor(Math.random() * nodes.length);
      if (fni === fnj || nodes[fni].level === 2 || nodes[fnj].level === 2) continue;
      var fdx = nodes[fni].x - nodes[fnj].x;
      var fdy = nodes[fni].y - nodes[fnj].y;
      if (fdx * fdx + fdy * fdy < MAX_DIST2) {
        txns.push({ i: fni, j: fnj, t: 0, spd: rn(TXN_SPD_LO, TXN_SPD_HI) });
        return;
      }
    }
  }

  function drawTxns(ts) {
    var b = bell(ts);

    for (var i = txns.length - 1; i >= 0; i--) {
      var tx = txns[i];
      tx.t += tx.spd;

      var ni = nodes[tx.i], nj = nodes[tx.j];
      var isAlert = b > 0 && (!!clusterMap[tx.i] || !!clusterMap[tx.j]);

      if (tx.t >= 1) {
        /* Arrival: record ripple + floating amount label */
        arrivals.push({
          x:       nj.x,
          y:       nj.y,
          t0:      ts,
          amount:  randomAmount(),
          isAlert: isAlert,
        });
        txns.splice(i, 1);
        continue;
      }

      /* Comet trail: 4 steps from tail (dim, small) to head (bright, larger) */
      var STEPS = 4;
      for (var s = STEPS; s >= 0; s--) {
        var trailT = tx.t - s * tx.spd * 2.8;
        if (trailT < 0) continue;
        var px   = ni.x + (nj.x - ni.x) * trailT;
        var py   = ni.y + (nj.y - ni.y) * trailT;
        var frac = 1 - s / (STEPS + 1);
        var r    = 1.7 * frac;
        var a    = 0.88 * frac;

        ctx.beginPath();
        ctx.arc(px, py, r, 0, Math.PI * 2);
        ctx.fillStyle = isAlert
          ? aa(a)
          : "rgba(0,212,255," + a.toFixed(3) + ")";
        ctx.fill();
      }
    }
  }

  /* ── Arrival ripple rings ──────────────────────────────── */
  /*
   * When a transaction reaches its destination node, a quick cyan ring
   * expands and fades — visual confirmation of a settled payment.
   */
  function drawArrivals(ts) {
    ctx.font      = "9px 'Courier New', Courier, monospace";
    ctx.textAlign = "center";

    for (var i = arrivals.length - 1; i >= 0; i--) {
      var ar = arrivals[i];
      var elapsed = ts - ar.t0;

      if (elapsed > TXN_ARRIVAL_DUR) {
        arrivals.splice(i, 1);
        continue;
      }

      var t = elapsed / TXN_ARRIVAL_DUR;

      /* Ripple ring */
      var ringR = 2.5 + t * 13;
      var ringA = 0.52 * (1 - t) * (1 - t);
      ctx.beginPath();
      ctx.arc(ar.x, ar.y, ringR, 0, Math.PI * 2);
      ctx.strokeStyle = ar.isAlert ? aa(ringA) : ac(ringA);
      ctx.lineWidth   = 0.65;
      ctx.stroke();

      /* Floating amount label — rises upward and fades */
      var labelA = 0.72 * (1 - t);           /* linear fade */
      var labelY = ar.y - 10 - t * 22;       /* floats upward 22px */
      ctx.fillStyle = ar.isAlert ? aa(labelA) : ac(labelA);
      ctx.fillText(ar.amount, ar.x, labelY);
    }
  }

  /* ── Main animation loop ──────────────────────────────── */

  function frame(ts) {
    ctx.clearRect(0, 0, W, H);
    step();

    if (!clusterOn && ts >= clusterNext) {
      startCluster(ts);
      clusterNext = ts + CLUSTER_GAP_MIN + Math.random() * CLUSTER_GAP_RND;
    }
    if (clusterOn && ts - clusterT0 >= CLUSTER_DURATION) {
      clusterOn     = false;
      clusterMap    = {};
      clusterHubIdx = -1;
      particles     = [];
    }

    /* Spawn a new transaction pulse occasionally */
    if (Math.random() < TXN_SPAWN_PROB) spawnTxn();

    drawEdges(ts);
    drawTxns(ts);
    drawArrivals(ts);
    drawActivationRing(ts);
    drawParticles(ts);
    drawNodes(ts);
    drawHubs(ts);

    rafId = requestAnimationFrame(frame);
  }

  /* ── Lifecycle ────────────────────────────────────────── */

  function start() {
    cancelAnimationFrame(rafId);
    resize();
    populate(); /* also clears txns, arrivals, particles */
    clusterOn     = false;
    clusterMap    = {};
    clusterHubIdx = -1;
    particles     = [];
    clusterNext   = performance.now() + CLUSTER_DELAY;
    rafId = requestAnimationFrame(frame);
  }

  start();

  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      cancelAnimationFrame(rafId);
    } else {
      if (clusterOn && performance.now() - clusterT0 >= CLUSTER_DURATION) {
        clusterOn = false; clusterMap = {}; clusterHubIdx = -1; particles = [];
      }
      /* Clear stale arrivals — their timestamps are no longer valid after pause */
      arrivals = [];
      rafId = requestAnimationFrame(frame);
    }
  });

  var resizeTimer;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(start, 220);
  });
}
