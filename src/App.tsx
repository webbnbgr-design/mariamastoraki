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
  Gavel,
  ArrowUp,
  CheckCircle2,
  Award
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { cn } from '@/src/lib/utils';

// --- Components ---

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-secondary z-[60] origin-left"
      style={{ scaleX }}
    />
  );
};

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
      "fixed w-full z-50 transition-all duration-500",
      scrolled ? "bg-white/90 backdrop-blur-lg shadow-lg py-3" : "bg-transparent py-6"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0 flex flex-col"
          >
            <span className={cn(
              "font-display text-2xl font-bold tracking-tight transition-colors duration-300",
              scrolled ? "text-primary" : "text-white"
            )}>
              ΜΑΡΙΑ ΜΑΣΤΟΡΑΚΗ
            </span>
            <span className={cn(
              "text-[10px] font-bold uppercase tracking-[0.3em] transition-colors duration-300",
              scrolled ? "text-secondary" : "text-gray-300"
            )}>
              ΔΙΚΗΓΟΡΟΣ ΠΑΡ' ΑΡΕΙΩ ΠΑΓΩ
            </span>
          </motion.div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-10">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className={cn(
                    "relative px-1 py-2 text-sm font-semibold transition-all group",
                    scrolled ? "text-slate-700" : "text-white"
                  )}
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
                </motion.a>
              ))}
              <a
                href="#contact"
                className={cn(
                  "px-6 py-2.5 rounded-sm text-sm font-bold transition-all transform hover:scale-105 active:scale-95",
                  scrolled 
                    ? "bg-primary text-white hover:bg-secondary shadow-md" 
                    : "bg-white text-primary hover:bg-secondary hover:text-white"
                )}
              >
                ΕΠΙΚΟΙΝΩΝΙΑ
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "p-2 rounded-md transition-colors",
                scrolled ? "text-primary" : "text-white"
              )}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-b border-slate-100 shadow-2xl overflow-hidden"
          >
            <div className="px-4 pt-4 pb-8 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-4 text-lg font-bold text-slate-800 hover:text-secondary hover:bg-slate-50 rounded-lg transition-all"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center py-4 bg-primary text-white font-bold rounded-lg shadow-lg"
                >
                  ΚΛΕΙΣΤΕ ΡΑΝΤΕΒΟΥ
                </a>
              </div>
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
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2000"
          alt="Law Library"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </motion.div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/70 to-transparent z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent z-10"></div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 bg-secondary/20 backdrop-blur-sm border border-secondary/30 text-secondary font-bold text-xs uppercase tracking-[0.4em] mb-6 rounded-full">
              Εξειδικευμένη Νομική Υποστήριξη
            </span>
            <h1 className="font-display text-6xl md:text-8xl font-bold mb-8 leading-[1.1] tracking-tight">
              Μάχιμη <span className="text-secondary italic">Δικηγορία</span> & Κύρος
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-12 font-light leading-relaxed max-w-2xl">
              Με πολυετή εμπειρία και απόλυτη προσήλωση στο δίκαιο, παρέχουμε στρατηγικές λύσεις για κάθε νομική σας πρόκληση.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="inline-flex items-center justify-center px-10 py-5 bg-secondary text-white text-base font-bold rounded-sm shadow-[0_10px_30px_-10px_rgba(127,29,29,0.5)] hover:bg-red-900 transition-all"
              >
                Κλείστε Ραντεβού
                <ChevronRight className="ml-2" size={20} />
              </motion.a>
              <motion.a
                whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                href="#services"
                className="inline-flex items-center justify-center px-10 py-5 border-2 border-white/30 text-white text-base font-bold rounded-sm backdrop-blur-sm transition-all"
              >
                Υπηρεσίες
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { label: 'Έτη Εμπειρίας', value: '20+' },
    { label: 'Υποθέσεις', value: '1500+' },
    { label: 'Επιτυχία', value: '98%' },
    { label: 'Εντολείς', value: '500+' },
  ];

  return (
    <section className="relative z-30 -mt-16 max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 bg-white shadow-2xl rounded-sm overflow-hidden divide-x divide-slate-100">
        {stats.map((stat, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="p-8 text-center"
          >
            <p className="text-4xl font-display font-bold text-secondary mb-2">{stat.value}</p>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-sm overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=1000"
                alt="Maria Mastoraki"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent -z-0"></div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 border-8 border-slate-100 -z-0"></div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-6 bg-secondary p-8 text-white z-20 shadow-xl"
            >
              <Award size={40} className="mb-4 text-white/50" />
              <p className="text-sm font-bold uppercase tracking-widest leading-tight">
                Νομική Σχολή Αθηνών<br/>
                <span className="text-white/70 font-normal">Απόφοιτος</span>
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-subtitle">Το Γραφείο</span>
            <h2 className="section-title">Μαρία Μαστοράκη</h2>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-light">
              <p className="font-medium text-primary">
                Η Μαρία Μαστοράκη είναι Δικηγόρος παρ' Αρείω Πάγω, με εξειδίκευση στο Εργατικό και Αστικό Δίκαιο.
              </p>
              <p>
                Μετά την αποφοίτησή της από τη Νομική Σχολή Αθηνών, ακολούθησε μια πορεία συνεχούς μάχιμης δικηγορίας, αναλαμβάνοντας υποθέσεις υψηλής πολυπλοκότητας. Η φιλοσοφία του γραφείου μας βασίζεται στην <strong>προσωπική ενασχόληση</strong> με κάθε εντολέα.
              </p>
              <p>
                Πιστεύουμε ότι η δικαιοσύνη απαιτεί όχι μόνο γνώση, αλλά και θάρρος, επιμονή και απόλυτη εχεμύθεια. Στο γραφείο μας, κάθε υπόθεση είναι μοναδική και αντιμετωπίζεται με τη δέουσα σοβαρότητα που αρμόζει στο λειτούργημά μας.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                'Προσωπική Επαφή',
                'Απόλυτη Εχεμύθεια',
                'Στρατηγική Προσέγγιση',
                'Άμεση Ανταπόκριση'
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <CheckCircle2 className="text-secondary" size={20} />
                  <span className="font-bold text-slate-800">{item}</span>
                </div>
              ))}
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
      desc: 'Απολύσεις, δεδουλευμένα, εργατικά ατυχήματα και συμβάσεις.',
      icon: <Briefcase size={32} />,
      color: 'bg-blue-50'
    },
    {
      title: 'Τροχαία Ατυχήματα',
      desc: 'Διεκδίκηση αποζημιώσεων για σωματικές βλάβες και υλικές ζημιές.',
      icon: <Car size={32} />,
      color: 'bg-red-50'
    },
    {
      title: 'Αστικό Δίκαιο',
      desc: 'Ενοχικό, Εμπράγματο, Οικογενειακό και Κληρονομικό δίκαιο.',
      icon: <Scale size={32} />,
      color: 'bg-slate-50'
    },
    {
      title: 'Διαζύγια',
      desc: 'Συναινετικά διαζύγια, επιμέλεια τέκνων και διατροφές.',
      icon: <Users size={32} />,
      color: 'bg-indigo-50'
    },
    {
      title: 'Ασφαλιστικά Μέτρα',
      desc: 'Προσωρινή δικαστική προστασία και επείγουσες ενέργειες.',
      icon: <ShieldCheck size={32} />,
      color: 'bg-emerald-50'
    },
    {
      title: 'Δικαστική Συμπαράσταση',
      desc: 'Προστασία ατόμων με αδυναμία αυτοδιαχείρισης.',
      icon: <Gavel size={32} />,
      color: 'bg-amber-50'
    },
    {
      title: 'Απαλλοτριώσεις',
      desc: 'Αποζημιώσεις για αναγκαστικές απαλλοτριώσεις ακινήτων.',
      icon: <BookOpen size={32} />,
      color: 'bg-cyan-50'
    },
    {
      title: 'Αποζημιώσεις',
      desc: 'Διεκδικήσεις από αδικοπραξίες και συμβατικές ευθύνες.',
      icon: <Scale size={32} />,
      color: 'bg-violet-50'
    },
  ];

  return (
    <section id="services" className="py-32 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="section-subtitle">Υπηρεσίες</span>
          <h2 className="section-title">Τομείς Ειδίκευσης</h2>
          <p className="text-slate-500 text-lg font-light">
            Παρέχουμε ολοκληρωμένες νομικές υπηρεσίες με εξειδίκευση στους παρακάτω τομείς, διασφαλίζοντας το καλύτερο δυνατό αποτέλεσμα.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-sm shadow-sm hover:shadow-2xl transition-all duration-500 group border border-slate-100"
            >
              <div className={cn("w-16 h-16 rounded-sm flex items-center justify-center mb-8 transition-colors duration-500 text-primary group-hover:bg-secondary group-hover:text-white", s.color)}>
                {s.icon}
              </div>
              <h4 className="text-xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors">{s.title}</h4>
              <p className="text-slate-500 leading-relaxed font-light">
                {s.desc}
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
      name: 'Ιωάννης Δ.',
      role: 'Επιχειρηματίας',
      text: 'Η κα Μαστοράκη χειρίστηκε μια πολύπλοκη εργατική υπόθεση της εταιρείας μας με απόλυτο επαγγελματισμό και επιτυχία. Την συστήνω ανεπιφύλακτα.',
      rating: 5,
    },
    {
      name: 'Μαρία Π.',
      role: 'Ιδιωτική Υπάλληλος',
      text: 'Εξαιρετική άνθρωπος και δικηγόρος. Με βοήθησε σε μια δύσκολη στιγμή της ζωής μου με ειλικρίνεια και αποτελεσματικότητα.',
      rating: 5,
    },
    {
      name: 'Κώστας Λ.',
      role: 'Συνταξιούχος',
      text: 'Πολύ έμπειρη και καταρτισμένη. Η καθοδήγησή της στο θέμα της αποζημίωσης από το τροχαίο ήταν καθοριστική.',
      rating: 5,
    },
  ];

  return (
    <section className="py-32 bg-primary relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 text-white"><Scale size={300} /></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="text-secondary font-bold uppercase tracking-[0.3em] text-sm mb-4 block">Μαρτυρίες</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Εμπιστοσύνη Εντολέων</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm p-10 rounded-sm border border-white/10 hover:bg-white/10 transition-all"
            >
              <div className="flex mb-6">
                {[...Array(r.rating)].map((_, idx) => (
                  <Star key={idx} size={16} className="text-amber-400 fill-amber-400 mr-1" />
                ))}
              </div>
              <Quote className="text-secondary mb-6 opacity-50" size={32} />
              <p className="text-slate-300 text-lg italic mb-8 leading-relaxed">
                "{r.text}"
              </p>
              <div>
                <p className="font-bold text-white text-lg">{r.name}</p>
                <p className="text-slate-400 text-sm uppercase tracking-widest">{r.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-subtitle">Επικοινωνία</span>
            <h2 className="section-title">Προγραμματίστε μια Συνάντηση</h2>
            <p className="text-slate-500 text-lg mb-12 font-light leading-relaxed">
              Βρισκόμαστε στην καρδιά της Αθήνας, ακριβώς απέναντι από τα Δικαστήρια. Είμαστε εδώ για να σας ακούσουμε και να βρούμε την καλύτερη νομική οδό.
            </p>

            <div className="space-y-10">
              <div className="flex items-start group">
                <div className="w-14 h-14 bg-accent rounded-sm flex items-center justify-center mr-6 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-lg mb-1">Διεύθυνση</h4>
                  <p className="text-slate-500">Σκύρου 64 (Έναντι Δικαστηρίων), 4ος όροφος</p>
                  <p className="text-slate-500">Αθήνα, Τ.Κ. 11362</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="w-14 h-14 bg-accent rounded-sm flex items-center justify-center mr-6 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-lg mb-1">Τηλέφωνο / Fax</h4>
                  <p className="text-slate-500 text-xl font-semibold">210 8837333</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="w-14 h-14 bg-accent rounded-sm flex items-center justify-center mr-6 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-lg mb-1">Ωράριο Λειτουργίας</h4>
                  <p className="text-slate-500">Δευτέρα - Παρασκευή: 09:00 - 20:00</p>
                </div>
              </div>
            </div>
            
            <div className="mt-16">
              <a 
                href="tel:2108837333"
                className="inline-flex items-center justify-center px-10 py-5 bg-primary text-white font-bold rounded-sm hover:bg-secondary transition-all shadow-xl"
              >
                <Phone className="mr-3" size={20} />
                ΚΑΛΕΣΤΕ ΤΩΡΑ
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[600px] rounded-sm overflow-hidden shadow-2xl border-8 border-slate-50"
          >
            <iframe
              title="Google Maps"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              src="https://maps.google.com/maps?q=Σκύρου%2064,%20Αθήνα&t=&z=16&ie=UTF8&iwloc=&output=embed"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          <div className="col-span-1 md:col-span-1">
            <span className="font-display text-3xl font-bold tracking-tight block mb-2">
              ΜΑΡΙΑ ΜΑΣΤΟΡΑΚΗ
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-secondary">
              ΔΙΚΗΓΟΡΟΣ ΠΑΡ' ΑΡΕΙΩ ΠΑΓΩ
            </span>
            <p className="mt-8 text-slate-400 font-light leading-relaxed">
              Εξειδικευμένη νομική υποστήριξη με επίκεντρο τον άνθρωπο και το δίκαιο. Πάνω από 20 χρόνια μάχιμης δικηγορίας.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-8 border-b border-white/10 pb-4">Γρήγοροι Σύνδεσμοι</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#home" className="hover:text-secondary transition-colors">Αρχική</a></li>
              <li><a href="#about" className="hover:text-secondary transition-colors">Το Γραφείο</a></li>
              <li><a href="#services" className="hover:text-secondary transition-colors">Υπηρεσίες</a></li>
              <li><a href="#contact" className="hover:text-secondary transition-colors">Επικοινωνία</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 border-b border-white/10 pb-4">Επικοινωνία</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-center"><MapPin size={18} className="mr-3 text-secondary" /> Σκύρου 64, Αθήνα</li>
              <li className="flex items-center"><Phone size={18} className="mr-3 text-secondary" /> 210 8837333</li>
              <li className="flex items-center"><Clock size={18} className="mr-3 text-secondary" /> Δευ - Παρ: 09:00 - 20:00</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs tracking-widest uppercase font-bold">
          <p>© {new Date().getFullYear()} ΜΑΡΙΑ ΜΑΣΤΟΡΑΚΗ. ALL RIGHTS RESERVED.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">ΠΟΛΙΤΙΚΗ ΑΠΟΡΡΗΤΟΥ</a>
            <a href="#" className="hover:text-white transition-colors">ΟΡΟΙ ΧΡΗΣΗΣ</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FloatingActions = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col space-y-4">
      <AnimatePresence>
        {show && (
          <>
            <motion.a
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              href="tel:2108837333"
              className="w-14 h-14 bg-secondary text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-red-900 transition-all transform hover:scale-110"
            >
              <Phone size={24} />
            </motion.a>
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-14 h-14 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-slate-800 transition-all transform hover:scale-110"
            >
              <ArrowUp size={24} />
            </motion.button>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-secondary selection:text-white">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
