// Mock data for HelpHere services in Corfu
export const serviceCategories = {
  pharmacy: {
    en: { name: "Pharmacies", icon: "💊" },
    gr: { name: "Φαρμακεία", icon: "💊" }
  },
  doctor: {
    en: { name: "Doctors", icon: "👩‍⚕️" },
    gr: { name: "Γιατροί", icon: "👩‍⚕️" }
  },
  dentist: {
    en: { name: "Dentists", icon: "🦷" },
    gr: { name: "Οδοντίατροι", icon: "🦷" }
  },
  pediatrician: {
    en: { name: "Pediatricians", icon: "👶" },
    gr: { name: "Παιδίατροι", icon: "👶" }
  },
  veterinary: {
    en: { name: "Veterinary Clinics", icon: "🐾" },
    gr: { name: "Κτηνιατρικές Κλινικές", icon: "🐾" }
  },
  roadside: {
    en: { name: "Roadside Assistance", icon: "🚗" },
    gr: { name: "Οδική Βοήθεια", icon: "🚗" }
  },
  atm: {
    en: { name: "ATMs", icon: "🏧" },
    gr: { name: "ΑΤΜ", icon: "🏧" }
  },
  hospital: {
    en: { name: "Hospitals", icon: "🏥" },
    gr: { name: "Νοσοκομεία", icon: "🏥" }
  },
  fire: {
    en: { name: "Fire Department", icon: "🚒" },
    gr: { name: "Πυροσβεστική", icon: "🚒" }
  },
  embassy: {
    en: { name: "Embassies & Consulates", icon: "🏛️" },
    gr: { name: "Πρεσβείες & Προξενεία", icon: "🏛️" }
  },
  boat: {
    en: { name: "Emergency Boat Help", icon: "⛵" },
    gr: { name: "Ναυτική Βοήθεια", icon: "⛵" }
  },
  police: {
    en: { name: "Police", icon: "👮" },
    gr: { name: "Αστυνομία", icon: "👮" }
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
    emergencyNumber: "Emergency: 112",
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
    emergencyNumber: "Έκτακτη Ανάγκη: 112",
    loading: "Φόρτωση...",
    searchPlaceholder: "Αναζήτηση υπηρεσιών...",
    nearbyServices: "Κοντινές Υπηρεσίες",
    allServices: "Όλες οι Υπηρεσίες"
  }
};