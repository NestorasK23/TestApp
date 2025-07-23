// Mock data for CorfuLine services in Corfu

export const serviceCategories = {
  pharmacy: {
    en: { name: "Pharmacies", icon: "medical_services" },
    gr: { name: "Φαρμακεία", icon: "medical_services" }
  },
  doctor: {
    en: { name: "Doctors", icon: "medical_information" },
    gr: { name: "Γιατροί", icon: "medical_information" }
  },
  dentist: {
    en: { name: "Dentists", icon: "sentiment_very_satisfied" },
    gr: { name: "Οδοντίατροι", icon: "sentiment_very_satisfied" }
  },
  pediatrician: {
    en: { name: "Pediatricians", icon: "child_care" },
    gr: { name: "Παιδίατροι", icon: "child_care" }
  },
  veterinary: {
    en: { name: "Veterinary Clinics", icon: "pets" },
    gr: { name: "Κτηνιατρικές Κλινικές", icon: "pets" }
  },
  roadside: {
    en: { name: "Roadside Assistance", icon: "directions_car" },
    gr: { name: "Οδική Βοήθεια", icon: "directions_car" }
  },
  atm: {
    en: { name: "ATMs", icon: "credit_card" },
    gr: { name: "ΑΤΜ", icon: "credit_card" }
  },
  hospital: {
    en: { name: "Hospitals", icon: "local_hospital" },
    gr: { name: "Νοσοκομεία", icon: "local_hospital" }
  },
  fire: {
    en: { name: "Fire Department", icon: "fire_extinguisher" },
    gr: { name: "Πυροσβεστική", icon: "fire_extinguisher" }
  },
  embassy: {
    en: { name: "Embassies & Consulates", icon: "flag" },
    gr: { name: "Πρεσβείες & Προξενεία", icon: "flag" }
  },
  boat: {
    en: { name: "Emergency Boat Help", icon: "sailing" },
    gr: { name: "Ναυτική Βοήθεια", icon: "sailing" }
  },
  police: {
    en: { name: "Police", icon: "security" },
    gr: { name: "Αστυνομία", icon: "security" }
  }
};

export const services = {
  pharmacy: [
    {
      id: 1,
      name: { en: "PANDI CHRISTINA & SIA O.E.", gr: "PANDI CHRISTINA & SIA O.E." },
      address: { en: "2 Dionysiou Solomou St, Corfu Town", gr: "Διονυσίου Σολωμού 2, Κέρκυρα" },
      description: {
        en: "Main town pharmacy, analgesics, vitamins, oximeters. Open shifts daily.",
        gr: "Κεντρικό φαρμακείο, αναλγητικά, βιταμίνες, οξύμετρα. Ανοικτό καθημερινά με βάρδιες."
      },
      phone: "+30 26610 39281",
      coordinates: "39.6243,19.9217",
      hours: { en: "Mon–Sat: 08:30–15:00 & 17:00–21:00; Sun: Closed", gr: "Δευ–Σαβ: 08:30–15:00 & 17:00–21:00; Κυρ: Κλειστό" }
    },
    {
      id: 2,
      name: { en: "Systegasména Pharmakeía Alexopoulou Christina", gr: "Συστεγασμένα Φαρμακεία Αλεξοπούλου Χριστίνα" },
      address: { en: "Sidari, Corfu Prefecture", gr: "Σιντάρι, Κέρκυρα" },
      description: {
        en: "Tourist-area pharmacy in Sidari. Supplements, sunscreens, vaccines.",
        gr: "Φαρμακείο περιοχής τουριστών στο Σιντάρι. Συμπληρώματα, αντηλιακά, εμβόλια."
      },
      phone: "+30 26630 95400",
      coordinates: "39.8310,19.9100",
      hours: { en: "Mon–Sat: 08:00–14:00 & 17:00–21:00; Sun: Closed", gr: "Δευ–Σαβ: 08:00–14:00 & 17:00–21:00; Κυρ: Κλειστό" }
    },
    {
      id: 3,
      name: { en: "Alexaki Anastassia E.", gr: "Φαρμακείο Αλεξάκη Αναστασία" },
      address: { en: "Kontokali, Corfu", gr: "Κοντόκαλι, Κέρκυρα" },
      description: {
        en: "Suburban pharmacy near Kontokali. Blood pressure checks, OTC meds.",
        gr: "Φαρμακείο στα περίχωρα, κοντά στο Κοντόκαλι. Μέτρηση πίεσης, χωρίς συνταγή φάρμακα."
      },
      phone: "+30 26610 91700",
      coordinates: "39.6280,19.9030",
      hours: { en: "Mon–Sat: 08:00–14:00", gr: "Δευ–Σαβ: 08:00–14:00" }
    }
  ],
  pediatrician: [
    {
      id: 16,
      name: { en: "Dr. Sofia Nikolaou - Pediatrics", gr: "Δρ. Σοφία Νικολάου - Παιδιατρική" },
      address: { en: "22 Evgeniou Voulgareos St, Corfu Town", gr: "Ευγενίου Βουλγαρέως 22, Κέρκυρα" },
      description: {
        en: "Experienced pediatrician with English-speaking staff and well-child visits.",
        gr: "Έμπειρη παιδίατρος με αγγλόφωνο προσωπικό και πρόγραμμα τακτικών παιδιατρικών επισκέψεων."
      },
      phone: "+30 26610 56789",
      coordinates: "39.6178,19.9089",
      hours: { en: "Mon–Fri: 08:00–16:00", gr: "Δευ–Παρ: 08:00–16:00" }
    },
    {
      id: 17,
      name: { en: "Kids Care Clinic", gr: "Κλινική Φροντίδας Παιδιών" },
      address: { en: "15 Palaiologou St, Corfu Town", gr: "Παλαιολόγου 15, Κέρκυρα" },
      description: {
        en: "General pediatric consultations, vaccinations, English support for tourists.",
        gr: "Γενικές παιδιατρικές συνεδρίες, εμβολιασμοί, αγγλόφωνη υποστήριξη για τουρίστες."
      },
      phone: "+30 26610 51234",
      coordinates: "39.6267,19.9145",
      hours: { en: "Mon–Fri: 09:00–17:00", gr: "Δευ–Παρ: 09:00–17:00" }
    },
    {
      id: 18,
      name: { en: "Corfu Children & Teens Medical Center", gr: "Ιατρικό Κέντρο Παιδιών & Εφήβων Κέρκυρας" },
      address: { en: "10 Papadopoulou Avenue, Corfu Town", gr: "Λεωφόρος Παπαδοπούλου 10, Κέρκυρα" },
      description: {
        en: "Specialized clinic for children and adolescent care, English spoken.",
        gr: "Εξειδικευμένο κέντρο για παιδιά και εφήβους, με αγγλόφωνο προσωπικό."
      },
      phone: "+30 26610 60010",
      coordinates: "39.6225,19.9200",
      hours: { en: "Mon–Sat: 09:00–18:00", gr: "Δευ–Σαβ: 09:00–18:00" }
    }
  ],
  doctor: [
    {
      id: 4,
      name: { en: "Corfu General Clinic", gr: "Corfu General Clinic" },
      address: {
        en: "1st km Ethniki Paleokastritsas, Corfu Town",
        gr: "1ο χλμ Εθνικής Παλαιοκαστρίτσας, Κέρκυρα"
      },
      description: {
        en: "Private clinic with multiple departments & 24/7 ambulance service. English-spoken.",
        gr: "Ιδιωτικό ιατρικό κέντρο με πολλά τμήματα και ασθενοφόρο 24/7. Αγγλόφωνο προσωπικό."
      },
      phone: "+30 26610 36044",
      coordinates: "39.6190,19.8765",
      hours: { en: "24/7", gr: "24/7" }
    },
    {
      id: 5,
      name: { en: "Corfumedica Day Care Clinic", gr: "Corfumedica Day Care" },
      address: {
        en: "3 Mantzarou Street, Corfu Town",
        gr: "Μαντζάρου 3, Κέρκυρα"
      },
      description: {
        en: "Urgent care & diagnostics, house calls in Gouvia, Dassia, Kassiopi.",
        gr: "Επείγουσα φροντίδα και διαγνωστικά, κατ’ οίκον επισκέψεις σε Γουβιά, Δασιά, Κασσιόπη."
      },
      phone: "+30 26610 34580",
      coordinates: "39.6156,19.9178",
      hours: { en: "Mon–Sun: 09:00–21:30", gr: "Δευ–Κυρ: 09:00–21:30" }
    },
    {
      id: 6,
      name: {
        en: "Corfumedica Gouvia Clinic",
        gr: "Corfumedica Κλινική Γουβιάς"
      },
      address: {
        en: "Gouvia, Corfu (near Pandi Pharmacy)",
        gr: "Γουβιά Κέρκυρας (δίπλα στο φαρμακείο Πάνδι)"
      },
      description: {
        en: "Surgical & emergency services in Gouvia tourist area.",
        gr: "Χειρουργικά & επείγοντα περιστατικά στην τουριστική περιοχή Γουβιά."
      },
      phone: "+30 26610 91303",
      coordinates: "39.6780,19.8450",
      hours: { en: "Mon–Sun: 09:00–21:30", gr: "Καθημερινά: 09:00–21:30" }
    }
  ],

  dentist: [
    {
      id: 13,
      name: { 
        en: "Corfu Dental Care - Kostis Makrygiannakis & Eleni Panaretou", 
        gr: "Corfu Dental Care – Κώστας Μακρυγιαννάκης & Ελένη Παναρρέτου" 
      },
      address: { 
        en: "2 Samara Street, Corfu Town", 
        gr: "Σαμαρά 2, Κέρκυρα" 
      },
      description: {
        en: "General & cosmetic dentistry, air polishing, root canal; appointment only.",
        gr: "Γενική & αισθητική οδοντιατρική, air‑polishing, απονευρώσεις· μόνο με ραντεβού."
      },
      phone: "+30 2661 100315",
      coordinates: "39.6240,19.9210",
      hours: { en: "Mon–Fri: 09:00–19:00", gr: "Δευ–Παρ: 09:00–19:00" }
    },
    {
      id: 14,
      name: { 
        en: "Dr. Thymi Magdalini PhD, DDS", 
        gr: "Δρ. Θυμή Μαγδαληνή, PhD, DDS" 
      },
      address: { 
        en: "36 Grigoriou Marasli Street, Corfu Town", 
        gr: "Γρηγορίου Μαρασλή 36, Κέρκυρα" 
      },
      description: {
        en: "Highly-rated dentist since 2011; modern, English‑speaking, cosmetic treatments.",
        gr: "Αξιολογημένη οδοντίατρος από το 2011· σύγχρονο, αγγλόφωνο, αισθητική θεραπεία." 
      },
      phone: "+30 26610 34906",
      coordinates: "39.6235,19.9205",
      hours: { en: "Mon–Fri: 09:00–18:00", gr: "Δευ–Παρ: 09:00–18:00" }
    },
    {
      id: 15,
      name: { 
        en: "Dr. Nikolaos Pandis – Orthodontist", 
        gr: "Δρ. Νικόλαος Πανδής – Ορθοδοντικός" 
      },
      address: { 
        en: "29 Panou Zafeiropoulou Street, Corfu Town", 
        gr: "Πάνου Ζαφειροπούλου 29, Κέρκυρα" 
      },
      description: {
        en: "Orthodontics specialist with international training (USA, Switzerland).",
        gr: "Εξειδικευμένος ορθοδοντικός με διεθνή εκπαίδευση (ΗΠΑ, Ελβετία)."
      },
      phone: "+30 26610 35087",
      coordinates: "39.6242,19.9210",
      hours: { en: "Mon–Fri: 10:00–18:00", gr: "Δευ–Παρ: 10:00–18:00" }
    }
  ],

  atm: [
    {
      id: 19,
      name: { en: "National Bank ATM - Spianada", gr: "ΑΤΜ Εθνικής Τράπεζας - Σπιανάδα" },
      address: { en: "Spianada Square, Corfu Old Town", gr: "Πλατεία Σπιανάδα, Παλιά Πόλη Κέρκυρας" },
      description: {
        en: "ATM near the Liston area with 24/7 access. Accepts Visa, Mastercard, and UnionPay.",
        gr: "ΑΤΜ κοντά στη Λιστόν με 24ωρη πρόσβαση. Δέχεται Visa, Mastercard και UnionPay."
      },
      phone: "+30 210 4848484",
      coordinates: "39.6244,19.9220",
      hours: { en: "24/7", gr: "24/7" }
    },
    {
      id: 20,
      name: { en: "Eurobank ATM - Corfu Airport", gr: "ΑΤΜ Eurobank - Αεροδρόμιο Κέρκυρας" },
      address: { en: "Corfu International Airport (Ioannis Kapodistrias)", gr: "Αεροδρόμιο Κέρκυρας (Ιωάννης Καποδίστριας)" },
      description: {
        en: "Convenient ATM at airport arrivals. Tourist-friendly. Supports contactless withdrawals.",
        gr: "Εύκολα προσβάσιμο ΑΤΜ στον χώρο αφίξεων. Φιλικό προς τουρίστες. Υποστηρίζει ανέπαφες αναλήψεις."
      },
      phone: "+30 210 9555000",
      coordinates: "39.6019,19.9117",
      hours: { en: "24/7", gr: "24/7" }
    },
    {
      id: 21,
      name: { en: "Piraeus Bank ATM - Gouvia", gr: "ΑΤΜ Τράπεζας Πειραιώς - Γουβιά" },
      address: { en: "Main Road, Gouvia Marina", gr: "Κεντρικός Δρόμος, Μαρίνα Γουβιών" },
      description: {
        en: "ATM located next to tourist shops in Gouvia. Supports foreign cards and balance checks.",
        gr: "ΑΤΜ δίπλα σε τουριστικά καταστήματα στη Γουβιά. Υποστηρίζει ξένες κάρτες και έλεγχο υπολοίπου."
      },
      phone: "+30 210 3288000",
      coordinates: "39.6772,19.8435",
      hours: { en: "24/7", gr: "24/7" }
    }
  ],


  veterinary: [
    {
      id: 17,
      name: { en: "Corfu Veterinary Clinic", gr: "Κτηνιατρική Κλινική Κέρκυρας" },
      address: { en: "Ethnikis Antistaseos 55, Corfu Town", gr: "Εθνικής Αντιστάσεως 55, Κέρκυρα" },
      description: {
        en: "Full-service vet with emergency care, dental, diagnostics.",
        gr: "Πλήρης κτηνιατρική με έκτακτα περιστατικά, οδοντιατρική, διαγνώσεις."
      },
      phone: "+30 26610 30033",
      coordinates: "39.6089,19.9234",
      hours: { en: "Mon–Fri: 09:00–19:00; Sat: 10:00–18:00", gr: "Δευ–Παρ: 09:00–19:00; Σαβ: 10:00–18:00" }
    },
    {
      id: 18,
      name: { en: "Animal Care Dassia", gr: "Φροντίδα Ζώων Δασσιά" },
      address: { en: "Dassia, Corfu", gr: "Δασσιά, Κέρκυρα" },
      description: {
        en: "Tourist-area vet service. Quick assistance for traveling pets.",
        gr: "Κτηνιατρική υπηρεσία περιοχής τουριστών. Γρήγορη βοήθεια για κατοικίδια ταξιδιωτών."
      },
      phone: "+30 26610 93456",
      coordinates: "39.6445,19.8678",
      hours: { en: "Daily: 10:00–18:00", gr: "Καθημερινά: 10:00–18:00" }
    },
    {
      id: 19,
      name: { en: "Corfu Mobile Vet", gr: "Κινητός Κτηνίατρος Κέρκυρας" },
      address: { en: "Island-wide mobile service", gr: "Κινητή υπηρεσία σε όλο το νησί" },
      description: {
        en: "Mobile vet service covering all Corfu. Emergency home visits.",
        gr: "Κινητή κτηνιατρική σε όλο το νησί. Επείγουσες επισκέψεις κατ’ οίκον."
      },
      phone: "+30 6940000000",
      coordinates: "39.6240,19.9200",
      hours: { en: "24/7", gr: "24/7" }
    }
  ],
  roadside: [
    {
      id: 22,
      name: { en: "Express Service Corfu", gr: "Express Service Κέρκυρας" },
      address: { en: "Ethnikis Antistaseos 28, Corfu Town", gr: "Εθνικής Αντιστάσεως 28, Κέρκυρα" },
      description: {
        en: "24/7 roadside assistance covering the entire island. Special support for rental vehicles.",
        gr: "Οδική βοήθεια 24/7 σε όλο το νησί. Εξειδικευμένη υποστήριξη για ενοικιαζόμενα οχήματα."
      },
      phone: "+30 2661 048888",
      coordinates: "39.6142,19.9193",
      hours: { en: "24/7", gr: "24/7" }
    },
    {
      id: 23,
      name: { en: "Interamerican Road Assistance", gr: "Interamerican Οδική Βοήθεια" },
      address: { en: "Mobile Unit - Servicing Corfu", gr: "Κινητή Μονάδα - Κάλυψη Κέρκυρας" },
      description: {
        en: "Reliable breakdown and towing service. Multilingual support and fast response.",
        gr: "Αξιόπιστη οδική βοήθεια και ρυμούλκηση. Πολύγλωσση υποστήριξη και γρήγορη ανταπόκριση."
      },
      phone: "+30 1158",
      coordinates: "39.6239,19.9184",
      hours: { en: "24/7", gr: "24/7" }
    },
    {
      id: 24,
      name: { en: "ELPA Assistance Corfu", gr: "ΕΛΠΑ Οδική Βοήθεια Κέρκυρας" },
      address: { en: "Lefkimmi Road, Kanalia Area", gr: "Λεωφόρος Λευκίμμης, περιοχή Κανάλια" },
      description: {
        en: "Long-established company offering emergency roadside help. Coverage across Corfu.",
        gr: "Καθιερωμένη εταιρεία με υπηρεσίες οδικής βοήθειας. Κάλυψη σε όλη την Κέρκυρα."
      },
      phone: "+30 2661 030101",
      coordinates: "39.6015,19.9030",
      hours: { en: "24/7", gr: "24/7" }
    }
  ],

  atm: [
    {
      id: 8,
      name: {
        en: "National Bank of Greece ATM",
        gr: "ΑΤΜ Εθνικής Τράπεζας"
      },
      address: {
        en: "Spianada Square, Corfu Old Town",
        gr: "Πλατεία Σπιανάδα, Παλιά Πόλη"
      },
      description: {
        en: "ATM with multi-language support. Accepts all major international cards.",
        gr: "ΑΤΜ με υποστήριξη πολλών γλωσσών. Δέχεται όλες τις μεγάλες διεθνείς κάρτες."
      },
      phone: "+30 2661 044444",
      coordinates: "39.6243,19.9217",
      hours: {
        en: "24/7",
        gr: "24/7"
      }
    },
    {
      id: 9,
      name: {
        en: "Alpha Bank ATM - Airport",
        gr: "ΑΤΜ Alpha Bank - Αεροδρόμιο"
      },
      address: {
        en: "Corfu Airport, Arrivals Hall",
        gr: "Αεροδρόμιο Κέρκυρας, Αίθουσα Αφίξεων"
      },
      description: {
        en: "Convenient ATM located at the airport. Available 24/7 for arriving tourists.",
        gr: "Εύκολα προσβάσιμο ΑΤΜ στο αεροδρόμιο. Διαθέσιμο 24/7 για τουρίστες που φτάνουν."
      },
      phone: "+30 2661 089100",
      coordinates: "39.6019,19.9117",
      hours: {
        en: "24/7",
        gr: "24/7"
      }
    },
    {
      id: 10,
      name: {
        en: "Piraeus Bank ATM",
        gr: "ΑΤΜ Τράπεζας Πειραιώς"
      },
      address: {
        en: "Georgios Theotoki Street, Corfu",
        gr: "Γεωργίου Θεοτόκη, Κέρκυρα"
      },
      description: {
        en: "Central ATM location with low fees for international withdrawals.",
        gr: "Κεντρικό ΑΤΜ με χαμηλές χρεώσεις για διεθνείς αναλήψεις."
      },
      phone: "+30 2661 055555",
      coordinates: "39.6198,19.9156",
      hours: {
        en: "24/7",
        gr: "24/7"
      }
    }
  ],
  hospital: [
    {
      id: 25,
      name: { en: "Corfu General Hospital", gr: "Γενικό Νοσοκομείο Κέρκυρας" },
      address: { en: "Kontokali, Corfu", gr: "Κοντοκάλι, Κέρκυρα" },
      description: {
        en: "The island's main public hospital with full emergency, surgical, and inpatient services.",
        gr: "Το κύριο δημόσιο νοσοκομείο του νησιού με πλήρεις υπηρεσίες επειγόντων, χειρουργείων και νοσηλείας."
      },
      phone: "+30 2661 360500",
      coordinates: "39.6507,19.8503",
      hours: { en: "24/7 Emergency", gr: "24/7 Επείγοντα" }
    },
    {
      id: 26,
      name: { en: "Mediterraneo Medical Center", gr: "Ιατρικό Κέντρο Mediterraneo" },
      address: { en: "Ethnikis Lefkimmi Road, Alepou", gr: "Λεωφόρος Εθνικής Λευκίμμης, Αλεπού" },
      description: {
        en: "Private clinic offering diagnostics, imaging (MRI/CT), and urgent outpatient services.",
        gr: "Ιδιωτική κλινική με διαγνωστικά, απεικονιστικά (μαγνητική/αξονική) και υπηρεσίες επειγόντων περιστατικών."
      },
      phone: "+30 2661 048789",
      coordinates: "39.6023,19.9112",
      hours: { en: "Mon-Sat: 8:00-20:00", gr: "Δευ-Σαβ: 8:00-20:00" }
    },
    {
      id: 27,
      name: { en: "Iaso Corfu Private Clinic", gr: "Ιδιωτική Κλινική ΙΑΣΩ Κέρκυρας" },
      address: { en: "Kanoni area, Ioannou Theotoki Street", gr: "Περιοχή Κανόνι, Ιωάννου Θεοτόκη" },
      description: {
        en: "Modern private hospital offering specialist consultations and short hospital stays.",
        gr: "Σύγχρονο ιδιωτικό νοσοκομείο με ιατρικές ειδικότητες και δυνατότητα βραχείας νοσηλείας."
      },
      phone: "+30 2661 052222",
      coordinates: "39.6054,19.9133",
      hours: { en: "Mon-Fri: 9:00-17:00, Emergency: On Call", gr: "Δευ-Παρ: 9:00-17:00, Επείγοντα: Κατόπιν κλήσης" }
    }
  ],

  fire: [
    {
      id: 28,
      name: { en: "Corfu Fire Department Headquarters", gr: "Κεντρική Πυροσβεστική Υπηρεσία Κέρκυρας" },
      address: { en: "25 Dimokratias Avenue, Corfu", gr: "Λεωφόρος Δημοκρατίας 25, Κέρκυρα" },
      description: {
        en: "Main fire station providing 24/7 emergency response across Corfu town and surroundings.",
        gr: "Κύριος πυροσβεστικός σταθμός με 24/7 επείγουσα ανταπόκριση στην πόλη της Κέρκυρας και γύρω περιοχές."
      },
      phone: "+30 2661 031199",
      coordinates: "39.6198,19.9194",
      hours: { en: "24/7", gr: "24/7" }
    },
    {
      id: 29,
      name: { en: "North Corfu Fire Station – Acharavi", gr: "Πυροσβεστικός Σταθμός Βόρειας Κέρκυρας – Αχαράβη" },
      address: { en: "Acharavi Main Road, North Corfu", gr: "Κεντρική Οδός, Αχαράβη, Βόρεια Κέρκυρα" },
      description: {
        en: "Covers the northern part of Corfu including forest fire prevention and coastal response.",
        gr: "Εξυπηρετεί τη βόρεια Κέρκυρα με έμφαση στην πρόληψη δασικών πυρκαγιών και παροχή βοήθειας σε παραλίες."
      },
      phone: "+30 2663 063210",
      coordinates: "39.7956,19.8251",
      hours: { en: "24/7", gr: "24/7" }
    },
    {
      id: 30,
      name: { en: "South Corfu Fire Station – Lefkimmi", gr: "Πυροσβεστικός Σταθμός Νότιας Κέρκυρας – Λευκίμμη" },
      address: { en: "Lefkimmi Main Street, South Corfu", gr: "Κεντρική Οδός, Λευκίμμη, Νότια Κέρκυρα" },
      description: {
        en: "Regional station focused on the southern areas of the island and rural fire outbreaks.",
        gr: "Περιφερειακός σταθμός για τη νότια πλευρά του νησιού και τις αγροτικές περιοχές."
      },
      phone: "+30 2662 062311",
      coordinates: "39.4168,20.0172",
      hours: { en: "24/7", gr: "24/7" }
    }
  ],

  embassy: [
    {
      id: 31,
      name: { en: "British Vice Consulate Corfu", gr: "Βρετανικό Υποπροξενείο Κέρκυρας" },
      address: { en: "2 Menekratous St, Corfu Town", gr: "Οδός Μενεκράτους 2, Κέρκυρα" },
      description: {
        en: "Offers assistance to British nationals including emergency documents, legal guidance, and travel issues.",
        gr: "Προσφέρει βοήθεια σε Βρετανούς υπηκόους, όπως επείγοντα έγγραφα, νομική καθοδήγηση και θέματα ταξιδιού."
      },
      phone: "+30 2661 030055",
      coordinates: "39.6235,19.9188",
      hours: { en: "Mon–Fri: 9:00–16:00", gr: "Δευ–Παρ: 9:00–16:00" }
    },
    {
      id: 33,
      name: { en: "Italian Honorary Consulate Corfu", gr: "Ιταλικό Επίτιμο Προξενείο Κέρκυρας" },
      address: { en: "31 Kapodistriou Street, Corfu", gr: "Οδός Καποδιστρίου 31, Κέρκυρα" },
      description: {
        en: "Provides emergency assistance, passport support, and translation services for Italian visitors.",
        gr: "Παροχή επείγουσας βοήθειας, υποστήριξη διαβατηρίων και μεταφράσεις για Ιταλούς επισκέπτες."
      },
      phone: "+30 2661 038351",
      coordinates: "39.6197,19.9157",
      hours: { en: "Tue–Thu: 9:00–12:00", gr: "Τρί–Πέμ: 9:00–12:00" }
    }
  ],

  boat: [
    {
      id: 34,
      name: {
        en: "Corfu Port Authority",
        gr: "Λιμεναρχείο Κέρκυρας"
      },
      address: {
        en: "New Port, Corfu Town",
        gr: "Νέο Λιμάνι, Κέρκυρα"
      },
      description: {
        en: "Provides 24/7 maritime emergency response and coast guard coordination across Corfu's coastline.",
        gr: "Παρέχει 24/7 θαλάσσια βοήθεια και συντονισμό με το λιμενικό σώμα σε όλη την ακτογραμμή της Κέρκυρας."
      },
      phone: "+30 2661 038150",
      coordinates: "39.6289,19.9032",
      hours: {
        en: "24/7",
        gr: "24/7"
      }
    },
    {
      id: 35,
      name: {
        en: "Gouvia Marina Sea Rescue",
        gr: "Θαλάσσια Διάσωση Μαρίνας Γουβιάς"
      },
      address: {
        en: "Gouvia Marina, Kontokali",
        gr: "Μαρίνα Γουβιάς, Κοντοκάλι"
      },
      description: {
        en: "Rescue services for boats in distress, engine failure, or man-overboard situations around Central and North Corfu.",
        gr: "Υπηρεσίες διάσωσης για βλάβες σκαφών, πτώσεις στη θάλασσα και επείγοντα περιστατικά στο κεντρικό και βόρειο νησί."
      },
      phone: "+30 2661 091000",
      coordinates: "39.6789,19.8456",
      hours: {
        en: "24/7",
        gr: "24/7"
      }
    },
    {
      id: 36,
      name: {
        en: "Paleokastritsa Lifeguard & Marine Help",
        gr: "Ναυαγοσωστική & Θαλάσσια Βοήθεια Παλαιοκαστρίτσας"
      },
      address: {
        en: "Main Beach, Paleokastritsa",
        gr: "Κεντρική Παραλία, Παλαιοκαστρίτσα"
      },
      description: {
        en: "Lifeguard station and marine rescue center for western Corfu. Supports snorkeling, diving, and boat tour emergencies.",
        gr: "Ναυαγοσωστικός σταθμός και θαλάσσια βοήθεια για την δυτική Κέρκυρα. Υποστήριξη για καταδύσεις, snorkeling και τουριστικά σκάφη."
      },
      phone: "+30 2663 041234",
      coordinates: "39.6711,19.7072",
      hours: {
        en: "Daily: 8:00–20:00",
        gr: "Καθημερινά: 8:00–20:00"
      }
    }
  ],

police: [
  {
    id: 37,
    name: {
      en: "Corfu Police Headquarters",
      gr: "Γενική Αστυνομική Διεύθυνση Κέρκυρας"
    },
    address: {
      en: "7 Iakovou Polyla Street, Corfu",
      gr: "Ιάκωβου Πολυλά 7, Κέρκυρα"
    },
    description: {
      en: "Main police station handling crime reports, emergency response, and public safety services. English-speaking staff available.",
      gr: "Κύρια αστυνομική διεύθυνση που χειρίζεται αναφορές εγκλημάτων, επείγουσες καταστάσεις και δημόσια ασφάλεια. Διαθέσιμο αγγλόφωνο προσωπικό."
    },
    phone: "+30 2661 039503",
    coordinates: "39.6248,19.9213",
    hours: {
      en: "24/7",
      gr: "24/7"
    }
  },
  {
    id: 38,
    name: {
      en: "Tourist Police Corfu",
      gr: "Τουριστική Αστυνομία Κέρκυρας"
    },
    address: {
      en: "San Rocco Square, Corfu Town",
      gr: "Πλατεία Σαν Ρόκκο, Κέρκυρα"
    },
    description: {
      en: "Special unit assisting tourists with theft reports, lost documents, and multilingual support.",
      gr: "Ειδική μονάδα που βοηθά τουρίστες με κλοπές, απώλειες εγγράφων και πολύγλωσση υποστήριξη."
    },
    phone: "+30 2661 039530",
    coordinates: "39.6231,19.9185",
    hours: {
      en: "Mon–Sun: 08:00–22:00",
      gr: "Δευ–Κυρ: 08:00–22:00"
    }
  },
  {
    id: 39,
    name: {
      en: "Police Station North Corfu (Acharavi)",
      gr: "Αστυνομικό Τμήμα Βόρειας Κέρκυρας (Αχαράβη)"
    },
    address: {
      en: "Acharavi Main Road, North Corfu",
      gr: "Κεντρική Οδός Αχαράβης, Βόρεια Κέρκυρα"
    },
    description: {
      en: "Covers northern Corfu region with 24/7 emergency patrols and tourist support.",
      gr: "Εξυπηρετεί τη βόρεια Κέρκυρα με περιπολίες 24/7 και υποστήριξη τουριστών."
    },
    phone: "+30 2663 063222",
    coordinates: "39.7934,19.8132",
    hours: {
      en: "24/7",
      gr: "24/7"
    }
  }
]
};

export const translations = {
  en: {
    appTitle: "CorfuLine",
    appSubtitle: "Find emergency services in Corfu",
    selectCategory: "Select a service category",
    backToCategories: "← Back to Categories",
    callNow: "Call Now",
    directions: "Get Directions",
    openHours: "Hours",
    phoneNumber: "Phone",
    address: "Address",
    noServices: "No services available in this category.",
    loading: "Loading...",
    searchPlaceholder: "Search services...",
    nearbyServices: "Nearby Services",
    allServices: "All Services"
  },
  gr: {
    appTitle: "CorfuLine",
    appSubtitle: "Βρείτε υπηρεσίες έκτακτης ανάγκης στην Κέρκυρα",
    selectCategory: "Επιλέξτε κατηγορία υπηρεσίας",
    backToCategories: "← Πίσω στις Κατηγορίες",
    callNow: "Κλήση Τώρα",
    directions: "Οδηγίες",
    openHours: "Ώρες",
    phoneNumber: "Τηλέφωνο",
    address: "Διεύθυνση",
    noServices: "Δεν υπάρχουν διαθέσιμες υπηρεσίες σε αυτή την κατηγορία.",
    loading: "Φόρτωση...",
    searchPlaceholder: "Αναζήτηση υπηρεσιών...",
    nearbyServices: "Κοντινές Υπηρεσίες",
    allServices: "Όλες οι Υπηρεσίες"
  }
};
