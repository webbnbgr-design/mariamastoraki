import React, { useState, useEffect } from 'react';
import { 
  Scale, 
  Briefcase, 
  Car, 
  ShieldCheck, 
  Users, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Menu, 
  X, 
  ChevronRight,
  Star,
  Quote,
  BookOpen,
  Gavel
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Αρχική', href: '#home' },
    { name: 'Το Γραφείο', href: '#about' },
    { name: 'Υπηρεσίες', href: '#services' },
    { name: 'Επικοινωνία', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed w-full z-50 transition-all duration-300",
      scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex flex-col">
            <span className={cn(
              "font-display text-xl font-bold tracking-tight",
              scrolled ? "text-primary" : "text-white"
            )}>
              ΜΑΡΙΑ ΜΑΣΤΟΡΑΚΗ
            </span>
            <span className={cn(
              "text-[10px] font-medium uppercase tracking-[0.2em]",
              scrolled ? "text-gray-500" : "text-gray-300"
            )}>
              ΔΙΚΗΓΟΡΟΣ ΠΑΡ' ΑΡΕΙΩ ΠΑΓΩ
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "px-3 py-2 text-sm font-medium transition-colors hover:text-secondary",
                    scrolled ? "text-gray-700" : "text-white"
                  )}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "p-2 rounded-md",
                scrolled ? "text-gray-700" : "text-white"
              )}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2000"
          alt="Law Books"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Μάχιμη Δικηγορία & Εξειδικευμένη Νομική Υποστήριξη
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 font-light leading-relaxed">
            Με συνέπεια, ήθος και πολυετή εμπειρία, παρέχουμε ολοκληρωμένες νομικές υπηρεσίες για την προάσπιση των συμφερόντων σας.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-semibold rounded-sm text-white bg-secondary hover:bg-red-900 transition-all shadow-lg hover:shadow-xl"
            >
              Κλείστε Ραντεβού
              <ChevronRight className="ml-2" size={20} />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-base font-semibold rounded-sm text-white hover:bg-white hover:text-primary transition-all"
            >
              Οι Υπηρεσίες μας
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=1000"
                alt="Law Office"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-secondary p-8 text-white hidden md:block rounded-sm shadow-xl">
              <p className="text-4xl font-bold mb-1">20+</p>
              <p className="text-sm uppercase tracking-wider font-medium">Έτη Εμπειρίας</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-4">Το Γραφείο</h2>
            <h3 className="font-display text-4xl font-bold text-primary mb-8">Μαρία Μαστοράκη</h3>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Η Μαρία Μαστοράκη είναι Δικηγόρος παρ' Αρείω Πάγω, απόφοιτος της Νομικής Σχολής του Εθνικού και Καποδιστριακού Πανεπιστημίου Αθηνών.
              </p>
              <p>
                Με πολυετή μάχιμη δικηγορία και βαθιά γνώση του ελληνικού δικαίου, το γραφείο μας προσφέρει εξειδικευμένη νομική υποστήριξη σε ένα ευρύ φάσμα υποθέσεων, με ιδιαίτερη έμφαση στο Εργατικό και Αστικό Δίκαιο.
              </p>
              <p>
                Στόχος μας είναι η παροχή υψηλού επιπέδου νομικών υπηρεσιών, βασισμένων στην προσωπική επαφή με τον εντολέα, την ειλικρίνεια και την αποτελεσματικότητα. Κάθε υπόθεση αντιμετωπίζεται με τη δέουσα προσοχή και επαγγελματισμό.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-primary mb-2">Εξειδίκευση</h4>
                <p className="text-gray-500">Εργατολόγος - Αστικολόγος</p>
              </div>
              <div>
                <h4 className="font-bold text-primary mb-2">Εκπαίδευση</h4>
                <p className="text-gray-500">Νομική Σχολή Αθηνών</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Εργατικό Δίκαιο',
      description: 'Απολύσεις, δεδουλευμένα, εργατικά ατυχήματα, συμβάσεις εργασίας και διεκδικήσεις.',
      icon: <Briefcase className="text-secondary" size={32} />,
    },
    {
      title: 'Τροχαία Ατυχήματα',
      description: 'Πλήρης νομική κάλυψη για αποζημιώσεις από τροχαία ατυχήματα και υλικές ζημιές.',
      icon: <Car className="text-secondary" size={32} />,
    },
    {
      title: 'Αστικό Δίκαιο',
      description: 'Ενοχικό, Εμπράγματο, Οικογενειακό και Κληρονομικό δίκαιο.',
      icon: <Scale className="text-secondary" size={32} />,
    },
    {
      title: 'Διαζύγια',
      description: 'Συναινετικά και κατ\' αντιδικία διαζύγια, επιμέλεια τέκνων και διατροφές.',
      icon: <Users className="text-secondary" size={32} />,
    },
    {
      title: 'Ασφαλιστικά Μέτρα',
      description: 'Προσωρινή δικαστική προστασία και επείγουσες νομικές ενέργειες.',
      icon: <ShieldCheck className="text-secondary" size={32} />,
    },
    {
      title: 'Δικαστική Συμπαράσταση',
      description: 'Νομική εκπροσώπηση και προστασία ατόμων με αδυναμία αυτοδιαχείρισης.',
      icon: <Gavel className="text-secondary" size={32} />,
    },
    {
      title: 'Απαλλοτριώσεις',
      description: 'Διεκδίκηση αποζημιώσεων για αναγκαστικές απαλλοτριώσεις ακινήτων.',
      icon: <BookOpen className="text-secondary" size={32} />,
    },
    {
      title: 'Αποζημιώσεις',
      description: 'Διεκδίκηση αποζημιώσεων από κάθε είδους αδικοπραξία ή ενδοσυμβατική ευθύνη.',
      icon: <Scale className="text-secondary" size={32} />,
    },
  ];

  return (
    <section id="services" className="py-24 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-4">Υπηρεσίες</h2>
          <h3 className="font-display text-4xl font-bold text-primary mb-4">Τομείς Ειδίκευσης</h3>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-all group border-b-4 border-transparent hover:border-secondary"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-primary mb-4">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  const reviews = [
    {
      name: 'Γιώργος Π.',
      text: 'Εξαιρετική επαγγελματίας με βαθιά γνώση του αντικειμένου. Με βοήθησε σε μια δύσκολη εργατική διαφορά με απόλυτη επιτυχία.',
      rating: 5,
    },
    {
      name: 'Ελένη Μ.',
      text: 'Άμεση ανταπόκριση και ειλικρίνεια. Αισθάνθηκα ασφάλεια από την πρώτη στιγμή της συνεργασίας μας.',
      rating: 5,
    },
    {
      name: 'Νίκος Κ.',
      text: 'Πολύ έμπειρη δικηγόρος. Χειρίστηκε την υπόθεση του τροχαίου ατυχήματος με μεγάλη προσοχή στη λεπτομέρεια.',
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-gray-300 uppercase tracking-[0.2em] mb-4">Μαρτυρίες</h2>
          <h3 className="font-display text-4xl font-bold mb-4">Τι λένε οι πελάτες μας</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white/5 p-8 rounded-sm relative"
            >
              <Quote className="absolute top-4 right-4 text-white/10" size={48} />
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-500 fill-yellow-500 mr-1" />
                ))}
              </div>
              <p className="text-lg italic mb-6 text-gray-300">"{review.text}"</p>
              <p className="font-bold text-white">— {review.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-4">Επικοινωνία</h2>
            <h3 className="font-display text-4xl font-bold text-primary mb-8">Είμαστε στη διάθεσή σας</h3>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              Επικοινωνήστε μαζί μας για να προγραμματίσουμε μια συνάντηση και να συζητήσουμε την υπόθεσή σας.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-accent p-3 rounded-sm mr-4">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Διεύθυνση</h4>
                  <p className="text-gray-600">Σκύρου 64 (Έναντι Δικαστηρίων), 4ος όροφος</p>
                  <p className="text-gray-600">Αθήνα, Τ.Κ. 11362</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-accent p-3 rounded-sm mr-4">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Τηλέφωνο / Fax</h4>
                  <p className="text-gray-600">210 8837333</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-accent p-3 rounded-sm mr-4">
                  <Clock className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Ωράριο Λειτουργίας</h4>
                  <p className="text-gray-600">Δευτέρα - Παρασκευή: 09:00 - 20:00</p>
                  <p className="text-gray-600">Σάββατο - Κυριακή: Κλειστά</p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[450px] bg-gray-100 rounded-sm overflow-hidden shadow-inner relative">
            {/* Placeholder for Google Maps */}
            <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
              <div className="text-center p-8">
                <MapPin className="mx-auto text-primary mb-4" size={48} />
                <p className="text-gray-500 font-medium">Χάρτης Τοποθεσίας</p>
                <p className="text-gray-400 text-sm mt-2">Σκύρου 64, Αθήνα</p>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Σκύρου+64+Αθήνα" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-secondary font-bold hover:underline"
                >
                  Προβολή στους Χάρτες Google
                </a>
              </div>
            </div>
            {/* In a real app, you'd use an iframe or a map component here */}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <span className="font-display text-2xl font-bold tracking-tight block">
              ΜΑΡΙΑ ΜΑΣΤΟΡΑΚΗ
            </span>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">
              ΔΙΚΗΓΟΡΟΣ ΠΑΡ' ΑΡΕΙΩ ΠΑΓΩ
            </span>
          </div>
          
          <div className="flex space-x-8 text-sm text-gray-400">
            <a href="#home" className="hover:text-white transition-colors">Αρχική</a>
            <a href="#about" className="hover:text-white transition-colors">Το Γραφείο</a>
            <a href="#services" className="hover:text-white transition-colors">Υπηρεσίες</a>
            <a href="#contact" className="hover:text-white transition-colors">Επικοινωνία</a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/5 text-center text-gray-500 text-xs">
          <p>© {new Date().getFullYear()} Μαρία Μαστοράκη. Με επιφύλαξη παντός δικαιώματος.</p>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
