// Mock data for HelpHere services in Corfu

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
      name: {
        en: "Pharmacy Chrysanthou",
        gr: "Φαρμακείο Χρυσάνθου"
      },
      address: {
        en: "25 Georgios Theotoki Street, Corfu Old Town",
        gr: "Γεωργίου Θεοτόκη 25, Παλιά Πόλη Κέρκυρας"
      },
      description: {
        en: "24/7 pharmacy with English-speaking staff. Emergency medications available.",
        gr: "24ωρο φαρμακείο με αγγλόφωνο προσωπικό. Διατίθενται φάρμακα έκτακτης ανάγκης."
      },
      phone: "+30 2661 039285",
      coordinates: "39.6243,19.9217",
      hours: {
        en: "24/7",
        gr: "24/7"
      }
    },
    {
      id: 2,
      name: {
        en: "Kerkyra Pharmacy",
        gr: "Φαρμακείο Κέρκυρας"
      },
      address: {
        en: "12 Alexandras Avenue, Corfu",
        gr: "Λεωφόρος Αλεξάνδρας 12, Κέρκυρα"
      },
      description: {
        en: "Modern pharmacy with tourist-friendly service. Prescription refills available.",
        gr: "Μοντέρνο φαρμακείο με φιλική εξυπηρέτηση για τουρίστες. Διαθέσιμες ανανεώσεις συνταγών."
      },
      phone: "+30 2661 042156",
      coordinates: "39.6198,19.9156",
      hours: {
        en: "Mon-Sat: 8:00-22:00, Sun: 9:00-14:00",
        gr: "Δευ-Σαβ: 8:00-22:00, Κυρ: 9:00-14:00"
      }
    },
    {
      id: 3,
      name: {
        en: "Gouvia Pharmacy",
        gr: "Φαρμακείο Γουβιάς"
      },
      address: {
        en: "Main Street, Gouvia",
        gr: "Κεντρική Οδός, Γουβιά"
      },
      description: {
        en: "Tourist area pharmacy with sunscreen, first aid supplies, and common medications.",
        gr: "Φαρμακείο τουριστικής περιοχής με αντηλιακά, είδη πρώτων βοηθειών και συνήθη φάρμακα."
      },
      phone: "+30 2661 091234",
      coordinates: "39.6789,19.8456",
      hours: {
        en: "Daily: 9:00-21:00",
        gr: "Καθημερινά: 9:00-21:00"
      }
    }
  ],
  doctor: [
    {
      id: 4,
      name: {
        en: "Dr. Maria Papadopoulos - General Practice",
        gr: "Δρ. Μαρία Παπαδοπούλου - Γενική Ιατρική"
      },
      address: {
        en: "45 Kapodistrias Street, Corfu",
        gr: "Καποδιστριακή 45, Κέρκυρα"
      },
      description: {
        en: "English-speaking family doctor. Emergency consultations available for tourists.",
        gr: "Αγγλόφωνη οικογενειακή γιατρός. Διαθέσιμες επείγουσες συμβουλές για τουρίστες."
      },
      phone: "+30 2661 045678",
      coordinates: "39.6198,19.9234",
      hours: {
        en: "Mon-Fri: 9:00-17:00, Emergency: 24/7",
        gr: "Δευ-Παρ: 9:00-17:00, Επείγοντα: 24/7"
      }
    },
    {
      id: 5,
      name: {
        en: "Corfu Medical Center",
        gr: "Ιατρικό Κέντρο Κέρκυρας"
      },
      address: {
        en: "18 Mantzarou Street, Corfu",
        gr: "Μαντζάρου 18, Κέρκυρα"
      },
      description: {
        en: "Multi-specialty clinic with emergency services. Tourist insurance accepted.",
        gr: "Πολυϊατρείο με υπηρεσίες επειγόντων. Γίνεται δεκτή τουριστική ασφάλιση."
      },
      phone: "+30 2661 038291",
      coordinates: "39.6156,19.9178",
      hours: {
        en: "24/7 Emergency Services",
        gr: "24/7 Υπηρεσίες Επειγόντων"
      }
    }
  ],
  dentist: [
    {
      id: 13,
      name: {
        en: "Dr. Dimitris Kostas - Dental Clinic",
        gr: "Δρ. Δημήτρης Κώστας - Οδοντιατρική Κλινική"
      },
      address: {
        en: "32 Ioannou Theotoki Street, Corfu",
        gr: "Ιωάννου Θεοτόκη 32, Κέρκυρα"
      },
      description: {
        en: "Modern dental clinic with emergency services. English-speaking dentist available.",
        gr: "Μοντέρνη οδοντιατρική κλινική με υπηρεσίες επειγόντων. Διαθέσιμος αγγλόφωνος οδοντίατρος."
      },
      phone: "+30 2661 047890",
      coordinates: "39.6234,19.9123",
      hours: {
        en: "Mon-Fri: 9:00-18:00, Emergency: 24/7",
        gr: "Δευ-Παρ: 9:00-18:00, Επείγοντα: 24/7"
      }
    },
    {
      id: 14,
      name: {
        en: "Smile Dental Care",
        gr: "Χαμόγελο Οδοντιατρική Φροντίδα"
      },
      address: {
        en: "8 Samaras Street, Corfu",
        gr: "Σαμαρά 8, Κέρκυρα"
      },
      description: {
        en: "Tourist-friendly dental clinic. Quick appointments for dental emergencies.",
        gr: "Φιλική προς τουρίστες οδοντιατρική κλινική. Γρήγορα ραντεβού για οδοντιατρικές επείγουσες καταστάσεις."
      },
      phone: "+30 2661 055432",
      coordinates: "39.6145,19.9201",
      hours: {
        en: "Mon-Sat: 10:00-20:00",
        gr: "Δευ-Σαβ: 10:00-20:00"
      }
    }
  ],
  pediatrician: [
    {
      id: 15,
      name: {
        en: "Dr. Sofia Nikolaou - Pediatrics",
        gr: "Δρ. Σοφία Νικολάου - Παιδιατρική"
      },
      address: {
        en: "22 Evgeniou Voulgareos Street, Corfu",
        gr: "Ευγενίου Βουλγαρέως 22, Κέρκυρα"
      },
      description: {
        en: "Experienced pediatrician with multilingual staff. Child-friendly environment.",
        gr: "Έμπειρη παιδίατρος με πολύγλωσσο προσωπικό. Φιλικό περιβάλλον για παιδιά."
      },
      phone: "+30 2661 056789",
      coordinates: "39.6178,19.9089",
      hours: {
        en: "Mon-Fri: 8:00-16:00, Emergency: 24/7",
        gr: "Δευ-Παρ: 8:00-16:00, Επείγοντα: 24/7"
      }
    },
    {
      id: 16,
      name: {
        en: "Kids Care Clinic",
        gr: "Κλινική Φροντίδας Παιδιών"
      },
      address: {
        en: "15 Palaiologou Street, Corfu",
        gr: "Παλαιολόγου 15, Κέρκυρα"
      },
      description: {
        en: "Specialized pediatric clinic. English-speaking doctors available for tourists with children.",
        gr: "Εξειδικευμένη παιδιατρική κλινική. Αγγλόφωνοι γιατροί διαθέσιμοι για τουρίστες με παιδιά."
      },
      phone: "+30 2661 051234",
      coordinates: "39.6267,19.9145",
      hours: {
        en: "Daily: 9:00-17:00",
        gr: "Καθημερινά: 9:00-17:00"
      }
    }
  ],
  veterinary: [
    {
      id: 17,
      name: {
        en: "Corfu Veterinary Clinic",
        gr: "Κτηνιατρική Κλινική Κέρκυρας"
      },
      address: {
        en: "55 Ethnikis Antistaseos Street, Corfu",
        gr: "Εθνικής Αντιστάσεως 55, Κέρκυρα"
      },
      description: {
        en: "Full-service veterinary clinic. Emergency care for pets. English-speaking staff.",
        gr: "Πλήρης κτηνιατρική κλινική. Φροντίδα έκτακτης ανάγκης για κατοικίδια. Αγγλόφωνο προσωπικό."
      },
      phone: "+30 2661 062345",
      coordinates: "39.6089,19.9234",
      hours: {
        en: "Mon-Fri: 9:00-19:00, Emergency: 24/7",
        gr: "Δευ-Παρ: 9:00-19:00, Επείγοντα: 24/7"
      }
    },
    {
      id: 18,
      name: {
        en: "Animal Care Dassia",
        gr: "Φροντίδα Ζώων Δασσιά"
      },
      address: {
        en: "Main Road, Dassia",
        gr: "Κεντρικός Δρόμος, Δασσιά"
      },
      description: {
        en: "Tourist area veterinary service. Quick assistance for traveling pets.",
        gr: "Κτηνιατρική υπηρεσία τουριστικής περιοχής. Γρήγορη βοήθεια για κατοικίδια που ταξιδεύουν."
      },
      phone: "+30 2661 093456",
      coordinates: "39.6445,19.8678",
      hours: {
        en: "Daily: 10:00-18:00",
        gr: "Καθημερινά: 10:00-18:00"
      }
    }
  ],
  roadside: [
    {
      id: 6,
      name: {
        en: "Corfu Roadside Assistance",
        gr: "Οδική Βοήθεια Κέρκυρας"
      },
      address: {
        en: "24/7 Mobile Service - Island Wide",
        gr: "24/7 Κινητή Υπηρεσία - Σε όλο το νησί"
      },
      description: {
        en: "24/7 roadside assistance for breakdowns, flat tires, and emergencies. English service.",
        gr: "24/7 οδική βοήθεια για βλάβες, σκασμένα λάστιχα και επείγουσες καταστάσεις. Αγγλική εξυπηρέτηση."
      },
      phone: "+30 2661 099999",
      coordinates: "39.6243,19.9217",
      hours: {
        en: "24/7",
        gr: "24/7"
      }
    },
    {
      id: 7,
      name: {
        en: "AA Hellas Corfu",
        gr: "AA Hellas Κέρκυρα"
      },
      address: {
        en: "Mobile Service - Northern Corfu",
        gr: "Κινητή Υπηρεσία - Βόρεια Κέρκυρα"
      },
      description: {
        en: "Professional roadside assistance specializing in tourist vehicle support.",
        gr: "Επαγγελματική οδική βοήθεια ειδικευμένη στην υποστήριξη τουριστικών οχημάτων."
      },
      phone: "+30 2661 088888",
      coordinates: "39.7123,19.8901",
      hours: {
        en: "24/7",
        gr: "24/7"
      }
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
      id: 11,
      name: {
        en: "Corfu General Hospital",
        gr: "Γενικό Νοσοκομείο Κέρκυρας"
      },
      address: {
        en: "Kontokali, Corfu",
        gr: "Κοντοκάλι, Κέρκυρα"
      },
      description: {
        en: "Main public hospital with emergency department. Tourist emergency services available.",
        gr: "Κύριο δημόσιο νοσοκομείο με τμήμα επειγόντων. Διαθέσιμες υπηρεσίες έκτακτης ανάγκης για τουρίστες."
      },
      phone: "+30 2661 060000",
      coordinates: "39.6789,19.8901",
      hours: {
        en: "24/7 Emergency",
        gr: "24/7 Επείγοντα"
      }
    }
  ],
  fire: [
    {
      id: 19,
      name: {
        en: "Corfu Fire Department",
        gr: "Πυροσβεστική Υπηρεσία Κέρκυρας"
      },
      address: {
        en: "25 Dikigorou Street, Corfu",
        gr: "Δικηγόρου 25, Κέρκυρα"
      },
      description: {
        en: "Main fire station with emergency response. 24/7 firefighting and rescue services.",
        gr: "Κύριος πυροσβεστικός σταθμός με επείγουσα ανταπόκριση. 24/7 υπηρεσίες πυρόσβεσης και διάσωσης."
      },
      phone: "+30 199",
      coordinates: "39.6198,19.9167",
      hours: {
        en: "24/7",
        gr: "24/7"
      }
    },
    {
      id: 20,
      name: {
        en: "Corfu North Fire Station",
        gr: "Πυροσβεστικός Σταθμός Βόρειας Κέρκυρας"
      },
      address: {
        en: "Acharavi, North Corfu",
        gr: "Αχαράβη, Βόρεια Κέρκυρα"
      },
      description: {
        en: "Northern region fire station. Forest fire prevention and beach rescue services.",
        gr: "Πυροσβεστικός σταθμός βόρειας περιοχής. Πρόληψη δασικών πυρκαγιών και υπηρεσίες διάσωσης παραλίας."
      },
      phone: "+30 199",
      coordinates: "39.7234,19.8123",
      hours: {
        en: "24/7",
        gr: "24/7"
      }
    }
  ],
  embassy: [
    {
      id: 21,
      name: {
        en: "British Vice Consulate",
        gr: "Βρετανικό Υποπροξενείο"
      },
      address: {
        en: "2 Menekratous Street, Corfu",
        gr: "Μενεκράτους 2, Κέρκυρα"
      },
      description: {
        en: "British consular services for UK citizens. Emergency assistance and document services.",
        gr: "Βρετανικές προξενικές υπηρεσίες για πολίτες του Ηνωμένου Βασιλείου. Βοήθεια έκτακτης ανάγκης και υπηρεσίες εγγράφων."
      },
      phone: "+30 2661 030055",
      coordinates: "39.6234,19.9189",
      hours: {
        en: "Mon-Fri: 9:00-16:00",
        gr: "Δευ-Παρ: 9:00-16:00"
      }
    },
    {
      id: 22,
      name: {
        en: "German Honorary Consulate",
        gr: "Γερμανικό Επίτιμο Προξενείο"
      },
      address: {
        en: "12 Guilford Street, Corfu",
        gr: "Γκίλφορντ 12, Κέρκυρα"
      },
      description: {
        en: "German consular services. Emergency assistance for German citizens visiting Corfu.",
        gr: "Γερμανικές προξενικές υπηρεσίες. Βοήθεια έκτακτης ανάγκης για Γερμανούς πολίτες που επισκέπτονται την Κέρκυρα."
      },
      phone: "+30 2661 031571",
      coordinates: "39.6245,19.9201",
      hours: {
        en: "Mon-Wed-Fri: 10:00-13:00",
        gr: "Δευ-Τετ-Παρ: 10:00-13:00"
      }
    },
    {
      id: 23,
      name: {
        en: "Italian Honorary Consulate",
        gr: "Ιταλικό Επίτιμο Προξενείο"
      },
      address: {
        en: "31 Kapodistrias Street, Corfu",
        gr: "Καποδιστρίου 31, Κέρκυρα"
      },
      description: {
        en: "Italian consular services. Document assistance and emergency support for Italian tourists.",
        gr: "Ιταλικές προξενικές υπηρεσίες. Βοήθεια εγγράφων και υποστήριξη έκτακτης ανάγκης για Ιταλούς τουρίστες."
      },
      phone: "+30 2661 038351",
      coordinates: "39.6198,19.9156",
      hours: {
        en: "Tue-Thu: 9:00-12:00",
        gr: "Τρι-Πεμ: 9:00-12:00"
      }
    }
  ],
  boat: [
    {
      id: 24,
      name: {
        en: "Corfu Port Authority",
        gr: "Λιμεναρχείο Κέρκυρας"
      },
      address: {
        en: "Port of Corfu, New Port",
        gr: "Λιμάνι Κέρκυρας, Νέο Λιμάνι"
      },
      description: {
        en: "Marine emergency services and coast guard. 24/7 sea rescue and assistance.",
        gr: "Υπηρεσίες θαλάσσιας έκτακτης ανάγκης και λιμενικό σώμα. 24/7 διάσωση και βοήθεια στη θάλασσα."
      },
      phone: "+30 108",
      coordinates: "39.6198,19.9234",
      hours: {
        en: "24/7",
        gr: "24/7"
      }
    },
    {
      id: 25,
      name: {
        en: "Sea Rescue Corfu",
        gr: "Θαλάσσια Διάσωση Κέρκυρας"
      },
      address: {
        en: "Gouvia Marina, Corfu",
        gr: "Μαρίνα Γουβιάς, Κέρκυρα"
      },
      description: {
        en: "Professional sea rescue service. Emergency assistance for boats and water activities.",
        gr: "Επαγγελματική υπηρεσία θαλάσσιας διάσωσης. Βοήθεια έκτακτης ανάγκης για σκάφη και υδάτινες δραστηριότητες."
      },
      phone: "+30 2661 091000",
      coordinates: "39.6789,19.8456",
      hours: {
        en: "24/7",
        gr: "24/7"
      }
    }
  ],
  police: [
    {
      id: 12,
      name: {
        en: "Corfu Police Station",
        gr: "Αστυνομικό Τμήμα Κέρκυρας"
      },
      address: {
        en: "Alexandras Avenue, Corfu",
        gr: "Λεωφόρος Αλεξάνδρας, Κέρκυρα"
      },
      description: {
        en: "Main police station with tourist police unit. English-speaking officers available.",
        gr: "Κύριο αστυνομικό τμήμα με μονάδα τουριστικής αστυνομίας. Διαθέσιμοι αγγλόφωνοι αστυνομικοί."
      },
      phone: "+30 2661 039503",
      coordinates: "39.6198,19.9156",
      hours: {
        en: "24/7",
        gr: "24/7"
      }
    }
  ]
};

export const translations = {
  en: {
    appTitle: "HelpHere",
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
    appTitle: "HelpHere",
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