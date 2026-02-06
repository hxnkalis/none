// ========== DONNÉES DE TRADUCTION ==========
const translations = {
    fr: {
        nav_home: "Accueil",
        nav_browse: "Parcourir",
        nav_sell: "Vendre",
        hero_title: "Achetez et Vendez vos Manuels Scolaires",
        hero_subtitle: "La plateforme simple et économique pour échanger vos livres scolaires",
        btn_browse: "Parcourir les Livres",
        btn_sell: "Vendre un Livre",
        why_title: "Pourquoi utiliser ReBook ?",
        feature1_title: "Économique",
        feature1_desc: "Achetez des livres d'occasion à prix réduit et vendez ceux dont vous n'avez plus besoin.",
        feature2_title: "Écologique",
        feature2_desc: "Donnez une seconde vie aux manuels scolaires et réduisez le gaspillage.",
        feature3_title: "Simple",
        feature3_desc: "Interface intuitive pour publier une annonce en quelques clics.",
        browse_title: "Parcourir les Manuels",
        filter_subject: "Matière",
        filter_level: "Niveau",
        filter_condition: "État",
        filter_max_price: "Prix max (DH)",
        filter_all: "Toutes",
        subject_math: "Mathématiques",
        subject_physics: "Physique",
        subject_french: "Français",
        subject_english: "Anglais",
        subject_history: "Histoire",
        level_college: "Collège",
        level_lycee: "Lycée",
        condition_excellent: "Excellent",
        condition_good: "Bon",
        condition_fair: "Correct",
        sell_title: "Vendre un Manuel",
        form_title: "Titre du livre",
        form_subject: "Matière",
        form_level: "Niveau",
        form_condition: "État",
        form_price: "Prix (DH)",
        form_description: "Description",
        form_contact: "Contact (email ou téléphone)",
        btn_publish: "Publier l'annonce",
        success_message: "Votre annonce a été publiée avec succès !",
        seller: "Vendeur",
        contact: "Contact",
        description: "Description",
        btn_back: "← Retour",
        dh: "DH",
        btn_report: "🚩 Signaler cette annonce",
        report_title: "Signaler cette annonce",
        report_reason: "Raison du signalement",
        report_reason_spam: "Spam ou arnaque",
        report_reason_inappropriate: "Contenu inapproprié",
        report_reason_wrong_info: "Informations incorrectes",
        report_reason_other: "Autre",
        report_details: "Détails (optionnel)",
        report_details_placeholder: "Expliquez pourquoi vous signalez cette annonce...",
        btn_submit_report: "Envoyer le signalement",
        btn_cancel: "Annuler",
        report_success: "Merci ! Votre signalement a été envoyé.",
        bc_balance: "Solde BC",
        bc_currency: "BC",
        form_payment_type: "Type de paiement",
        payment_cash: "💵 Cash (DH)",
        payment_bc: "💰 Book Coins (BC)",
        btn_buy_cash: "Acheter pour",
        btn_buy_bc: "Acheter pour",
        insufficient_bc: "Solde BC insuffisant !",
        ticket_title: "Ticket d'Achat",
        ticket_book: "Livre",
        ticket_price: "Prix",
        ticket_payment: "Paiement",
        ticket_seller: "Vendeur",
        ticket_code: "Code de Transaction",
        ticket_footer: "Présentez ce code au vendeur pour finaliser l'achat",
        ticket_close: "Fermer",
        payment_type_cash: "💵 Espèces",
        payment_type_bc: "💰 Book Coins",
        out_of_stock: "Hors Stock",
        theme_shop: "🎨 Boutique de Thèmes",
        theme_shop_desc: "Débloquez de nouveaux thèmes avec vos BC !",
        theme_unlocked: "Débloqué",
        theme_locked: "Verrouillé",
        theme_price: "Prix",
        btn_unlock: "Débloquer",
        theme_unlock_success: "Thème débloqué avec succès !",
        theme_already_unlocked: "Thème déjà débloqué !",
        profile_titre: "Mon Profil",
        profile_name: "Nom",
        profile_avatar: "Avatar (emoji)",
        profile_theme: "Thème de couleur",
        profile_stats: "Statistiques",
        profile_sales: "Ventes",
        profile_purchases: "Achats",
        profile_status: "Statut",
        status_bronze: "🥉 Bronze",
        status_silver: "🥈 Argent",
        status_gold: "🥇 Or",
        status_platinum: "💎 Platine",
        theme_green: "Vert",
        // Messagerie
        nav_messages: "Messages",
        messages_title: "Mes Messages",
        conversations_title: "Conversations",
        chat_empty: "Sélectionnez une conversation pour commencer",
        chat_input_placeholder: "Tapez votre message...",
        btn_send: "Envoyer",
        btn_contact_seller: "💬 Contacter le vendeur",
        new_message: "Nouveau message de",
        // Photos
        form_photo: "Photo du livre",
        photo_placeholder: "Cliquez pour ajouter une photo",
        btn_remove_photo: "Supprimer la photo",
        theme_blue: "Bleu",
        theme_red: "Rouge",
        theme_purple: "Violet",
        theme_orange: "Orange",
        btn_save_profile: "Enregistrer",
        profile_saved: "Profil enregistré avec succès !"
    },
    en: {
        nav_home: "Home",
        nav_browse: "Browse",
        nav_sell: "Sell",
        hero_title: "Buy and Sell Your School Textbooks",
        hero_subtitle: "The simple and affordable platform to exchange your school books",
        btn_browse: "Browse Books",
        btn_sell: "Sell a Book",
        why_title: "Why use ReBook?",
        feature1_title: "Economical",
        feature1_desc: "Buy used books at reduced prices and sell those you no longer need.",
        feature2_title: "Ecological",
        feature2_desc: "Give textbooks a second life and reduce waste.",
        feature3_title: "Simple",
        feature3_desc: "Intuitive interface to post an ad in just a few clicks.",
        browse_title: "Browse Textbooks",
        filter_subject: "Subject",
        filter_level: "Level",
        filter_condition: "Condition",
        filter_max_price: "Max price (DH)",
        filter_all: "All",
        subject_math: "Mathematics",
        subject_physics: "Physics",
        subject_french: "French",
        subject_english: "English",
        subject_history: "History",
        level_college: "Middle School",
        level_lycee: "High School",
        condition_excellent: "Excellent",
        condition_good: "Good",
        condition_fair: "Fair",
        sell_title: "Sell a Textbook",
        form_title: "Book title",
        form_subject: "Subject",
        form_level: "Level",
        form_condition: "Condition",
        form_price: "Price (DH)",
        form_description: "Description",
        form_contact: "Contact (email or phone)",
        btn_publish: "Publish Ad",
        success_message: "Your ad has been published successfully!",
        seller: "Seller",
        contact: "Contact",
        description: "Description",
        btn_back: "← Back",
        dh: "DH",
        btn_report: "🚩 Report this ad",
        report_title: "Report this ad",
        report_reason: "Reason for report",
        report_reason_spam: "Spam or scam",
        report_reason_inappropriate: "Inappropriate content",
        report_reason_wrong_info: "Incorrect information",
        report_reason_other: "Other",
        report_details: "Details (optional)",
        report_details_placeholder: "Explain why you're reporting this ad...",
        btn_submit_report: "Submit report",
        profile_title: "My Profile",
        profile_name: "Name",
        profile_avatar: "Avatar (emoji)",
        profile_theme: "Color Theme",
        profile_stats: "Statistics",
        profile_sales: "Sales",
        profile_purchases: "Purchases",
        profile_status: "Status",
        status_bronze: "🥉 Bronze",
        status_silver: "🥈 Silver",
        status_gold: "🥇 Gold",
        status_platinum: "💎 Platinum",
        theme_green: "Green",
        // Messaging
        nav_messages: "Messages",
        messages_title: "My Messages",
        conversations_title: "Conversations",
        chat_empty: "Select a conversation to start",
        chat_input_placeholder: "Type your message...",
        btn_send: "Send",
        btn_contact_seller: "💬 Contact Seller",
        new_message: "New message from",
        // Photos
        form_photo: "Book Photo",
        photo_placeholder: "Click to add a photo",
        btn_remove_photo: "Remove photo",
        theme_blue: "Blue",
        theme_red: "Red",
        theme_purple: "Purple",
        theme_orange: "Orange",
        btn_save_profile: "Save",
        profile_saved: "Profile saved successfully!",
        btn_cancel: "Cancel",
        report_success: "Thank you! Your report has been submitted.",
        bc_balance: "BC Balance",
        bc_currency: "BC",
        form_payment_type: "Payment type",
        payment_cash: "💵 Cash (DH)",
        payment_bc: "💰 Book Coins (BC)",
        btn_buy_cash: "Buy for",
        btn_buy_bc: "Buy for",
        insufficient_bc: "Insufficient BC balance!",
        ticket_title: "Purchase Ticket",
        ticket_book: "Book",
        ticket_price: "Price",
        ticket_payment: "Payment",
        ticket_seller: "Seller",
        ticket_code: "Transaction Code",
        ticket_footer: "Present this code to the seller to finalize the purchase",
        ticket_close: "Close",
        payment_type_cash: "💵 Cash",
        payment_type_bc: "💰 Book Coins",
        out_of_stock: "Out of Stock",
        theme_shop: "🎨 Theme Shop",
        theme_shop_desc: "Unlock new themes with your BC!",
        theme_unlocked: "Unlocked",
        theme_locked: "Locked",
        theme_price: "Price",
        btn_unlock: "Unlock",
        theme_unlock_success: "Theme unlocked successfully!",
        theme_already_unlocked: "Theme already unlocked!"
    },
    ar: {
        nav_home: "الرئيسية",
        nav_browse: "تصفح",
        nav_sell: "بيع",
        hero_title: "اشترِ وبع كتبك المدرسية",
        hero_subtitle: "المنصة البسيطة والاقتصادية لتبادل كتبك المدرسية",
        btn_browse: "تصفح الكتب",
        btn_sell: "بيع كتاب",
        why_title: "لماذا تستخدم ReBook؟",
        feature1_title: "اقتصادي",
        feature1_desc: "اشترِ كتبًا مستعملة بأسعار مخفضة وبع تلك التي لم تعد بحاجة إليها.",
        feature2_title: "بيئي",
        feature2_desc: "امنح الكتب المدرسية حياة ثانية وقلل من الهدر.",
        feature3_title: "بسيط",
        feature3_desc: "واجهة بديهية لنشر إعلان ببضع نقرات فقط.",
        browse_title: "تصفح الكتب المدرسية",
        filter_subject: "المادة",
        filter_level: "المستوى",
        filter_condition: "الحالة",
        filter_max_price: "السعر الأقصى (درهم)",
        filter_all: "الكل",
        subject_math: "الرياضيات",
        subject_physics: "الفيزياء",
        subject_french: "الفرنسية",
        subject_english: "الإنجليزية",
        subject_history: "التاريخ",
        level_college: "الإعدادي",
        level_lycee: "الثانوي",
        condition_excellent: "ممتاز",
        condition_good: "جيد",
        condition_fair: "مقبول",
        sell_title: "بيع كتاب مدرسي",
        form_title: "عنوان الكتاب",
        form_subject: "المادة",
        form_level: "المستوى",
        form_condition: "الحالة",
        profile_title: "ملفي الشخصي",
        profile_name: "الاسم",
        profile_avatar: "الصورة الرمزية (إيموجي)",
        profile_theme: "لون السمة",
        profile_stats: "الإحصائيات",
        profile_sales: "المبيعات",
        profile_purchases: "المشتريات",
        profile_status: "الحالة",
        status_bronze: "🥉 برونزي",
        status_silver: "🥈 فضي",
        status_gold: "🥇 ذهبي",
        status_platinum: "💎 بلاتيني",
        theme_green: "أخضر",
        // Messaging
        nav_messages: "الرسائل",
        messages_title: "رسائلي",
        conversations_title: "المحادثات",
        chat_empty: "اختر محادثة للبدء",
        chat_input_placeholder: "اكتب رسالتك...",
        btn_send: "إرسال",
        btn_contact_seller: "💬 اتصل بالبائع",
        new_message: "رسالة جديدة من",
        // Photos
        form_photo: "صورة الكتاب",
        photo_placeholder: "انقر لإضافة صورة",
        btn_remove_photo: "حذف الصورة",
        theme_blue: "أزرق",
        theme_red: "أحمر",
        theme_purple: "بنفسجي",
        theme_orange: "برتقالي",
        btn_save_profile: "حفظ",
        profile_saved: "تم حفظ الملف الشخصي بنجاح!",
        form_price: "السعر (درهم)",
        form_description: "الوصف",
        form_contact: "الاتصال (البريد الإلكتروني أو الهاتف)",
        btn_publish: "نشر الإعلان",
        success_message: "تم نشر إعلانك بنجاح!",
        seller: "البائع",
        contact: "الاتصال",
        description: "الوصف",
        btn_back: "رجوع ←",
        dh: "درهم",
        btn_report: "🚩 الإبلاغ عن هذا الإعلان",
        report_title: "الإبلاغ عن هذا الإعلان",
        report_reason: "سبب الإبلاغ",
        report_reason_spam: "رسائل غير مرغوب فيها أو احتيال",
        report_reason_inappropriate: "محتوى غير لائق",
        report_reason_wrong_info: "معلومات خاطئة",
        report_reason_other: "أخرى",
        report_details: "التفاصيل (اختياري)",
        report_details_placeholder: "اشرح لماذا تبلغ عن هذا الإعلان...",
        btn_submit_report: "إرسال البلاغ",
        btn_cancel: "إلغاء",
        report_success: "شكرًا! تم إرسال بلاغك.",
        bc_balance: "رصيد BC",
        bc_currency: "BC",
        form_payment_type: "نوع الدفع",
        payment_cash: "💵 نقدًا (درهم)",
        payment_bc: "💰 عملات الكتب (BC)",
        btn_buy_cash: "شراء مقابل",
        btn_buy_bc: "شراء مقابل",
        insufficient_bc: "رصيد BC غير كافٍ!",
        ticket_title: "تذكرة الشراء",
        ticket_book: "الكتاب",
        ticket_price: "السعر",
        ticket_payment: "الدفع",
        ticket_seller: "البائع",
        ticket_code: "كود المعاملة",
        ticket_footer: "قدم هذا الكود للبائع لإتمام عملية الشراء",
        ticket_close: "إغلاق",
        payment_type_cash: "💵 نقدًا",
        payment_type_bc: "💰 عملات الكتب",
        out_of_stock: "غير متوفر",
        theme_shop: "🎨 متجر الثيمات",
        theme_shop_desc: "افتح ثيمات جديدة باستخدام BC!",
        theme_unlocked: "مفتوح",
        theme_locked: "مقفل",
        theme_price: "السعر",
        btn_unlock: "فتح",
        theme_unlock_success: "تم فتح الثيم بنجاح!",
        theme_already_unlocked: "الثيم مفتوح بالفعل!"
    }
};

// ========== VARIABLES GLOBALES ==========
let currentLang = 'fr';
let bcBalance = 500;
let books = [
    { 
        id: 1, 
        title: "Mathématiques 1ère année BAC", 
        subject: "math", 
        level: "lycee", 
        condition: "excellent", 
        price: 60, 
        paymentType: "cash",
        seller: "Ahmed M.", 
        contact: "ahmed@email.com", 
        description: "Livre en excellent état, jamais utilisé. Toutes les pages sont intactes.",
        sold: false
    },
    { 
        id: 2, 
        title: "Physique-Chimie 3ème", 
        subject: "physics", 
        level: "college", 
        condition: "good", 
        price: 40, 
        paymentType: "bc",
        seller: "Sara L.", 
        contact: "0612345678", 
        description: "Quelques annotations au crayon facilement effaçables.",
        sold: false
    },
    { 
        id: 3, 
        title: "Français Tronc Commun", 
        subject: "french", 
        level: "lycee", 
        condition: "excellent", 
        price: 50, 
        paymentType: "cash",
        seller: "Karim B.", 
        contact: "karim@email.com", 
        description: "Comme neuf, couverture protégée avec film plastique.",
        sold: false
    },
    { 
        id: 4, 
        title: "English for All 2BAC", 
        subject: "english", 
        level: "lycee", 
        condition: "good", 
        price: 45, 
        paymentType: "bc",
        seller: "Yasmine K.", 
        contact: "0698765432", 
        description: "Bon état général, pages propres.",
        sold: false
    },
    { 
        id: 5, 
        title: "Histoire-Géographie 4ème", 
        subject: "history", 
        level: "college", 
        condition: "fair", 
        price: 30, 
        paymentType: "cash",
        seller: "Omar T.", 
        contact: "omar@email.com", 
        description: "État correct, couverture légèrement usée mais pages intactes.",
        sold: false
    },
    { 
        id: 6, 
        title: "Algèbre 2BAC Sciences", 
        subject: "math", 
        level: "lycee", 
        condition: "excellent", 
        price: 50, 
        paymentType: "bc",
        seller: "Nadia F.", 
        contact: "0655443322", 
        description: "Neuf, jamais ouvert. Emballage d'origine.",
        sold: false
    }
];

// ========== GÉNÉRATION DE CODE ALÉATOIRE ==========
function generateTicketCode() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < 12; i++) {
        if (i > 0 && i % 4 === 0) {
            code += '-';
        }
        code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
}

// ========== AFFICHAGE DU TICKET ==========
function showTicket(book, ticketCode, paymentType) {
    const currentDate = new Date().toLocaleString(currentLang === 'fr' ? 'fr-FR' : currentLang === 'ar' ? 'ar-MA' : 'en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });

    document.getElementById('ticketBookTitle').textContent = book.title;
    const priceText = paymentType === 'bc' 
        ? `${book.price} ${translations[currentLang].bc_currency}`
        : `${book.price} ${translations[currentLang].dh}`;
    document.getElementById('ticketPrice').textContent = priceText;
    
    const paymentTypeText = paymentType === 'bc'
        ? translations[currentLang].payment_type_bc
        : translations[currentLang].payment_type_cash;
    document.getElementById('ticketPaymentType').textContent = paymentTypeText;
    
    document.getElementById('ticketSeller').textContent = book.seller;
    document.getElementById('ticketCode').textContent = ticketCode;
    document.getElementById('ticketDate').textContent = currentDate;

    // Traduire les éléments du ticket
    translatePage();

    // Afficher la modal
    const modal = document.getElementById('ticketModal');
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// ========== FERMER LE TICKET ==========
function closeTicket() {
    const modal = document.getElementById('ticketModal');
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Fermer avec Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeTicket();
    }
});

// Fermer en cliquant sur l'overlay
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('ticket-overlay')) {
        closeTicket();
    }
});

// ========== FONCTION DE TRADUCTION ==========
function translatePage() {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(el => {
        const key = el.getAttribute('data-translate');
        if (translations[currentLang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[currentLang][key];
            } else {
                el.textContent = translations[currentLang][key];
            }
        }
    });

    document.body.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
    updateBCDisplay();
            incrementSales();
}

// ========== GESTION DU SOLDE BC ==========
function updateBCDisplay() {
    const bcBalanceElement = document.getElementById('bcBalance');
    if (bcBalanceElement) {
        bcBalanceElement.textContent = bcBalance;
    }
}

function addBC(amount) {
    bcBalance += amount;
    updateBCDisplay();
    
    const bcContainer = document.querySelector('.bc-balance-container');
    if (bcContainer) {
        bcContainer.style.animation = 'none';
        setTimeout(() => {
            bcContainer.style.animation = 'bounceBC 0.5s ease';
        }, 10);
    }
}

function subtractBC(amount) {
    if (bcBalance >= amount) {
        bcBalance -= amount;
        updateBCDisplay();
        return true;
    }
    return false;
}

// ========== INITIALISATION DES ÉVÉNEMENTS ==========
function initEvents() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentLang = btn.getAttribute('data-lang');
            translatePage();
            renderBooks();
        });
    });

    document.querySelectorAll('[data-page]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetPage = link.getAttribute('data-page');
            showPage(targetPage);
        });
    });

    ['filterSubject', 'filterLevel', 'filterCondition', 'filterPrice'].forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('change', renderBooks);
            element.addEventListener('input', renderBooks);
        }
    });

    const sellForm = document.getElementById('sellForm');
    if (sellForm) {
        sellForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const newBook = {
                id: books.length + 1,
                title: document.getElementById('bookTitle').value,
                subject: document.getElementById('bookSubject').value,
                level: document.getElementById('bookLevel').value,
                condition: document.getElementById('bookCondition').value,
                price: parseInt(document.getElementById('bookPrice').value),
                paymentType: document.getElementById('bookPaymentType').value,
                seller: "Vous",
                contact: document.getElementById('bookContact').value,
                description: document.getElementById('bookDescription').value || "Aucune description fournie",
                photo: window.currentBookPhoto || null,
                sold: false
            };

            books.push(newBook);
            addBC(50);
            
            const msg = document.getElementById('successMessage');
            msg.classList.add('show');
            setTimeout(() => msg.classList.remove('show'), 4000);
            
            e.target.reset();
            if (typeof window.removePhoto === 'function') {
                window.removePhoto();
            }
            renderBooks();
            incrementSales();
        });
    }
}

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ========== AFFICHAGE DES LIVRES ==========
function displayBooks(booksToDisplay) {
    renderBooks();
}

function renderBooks() {
    const grid = document.getElementById('booksGrid');
    const subject = document.getElementById('filterSubject').value;
    const level = document.getElementById('filterLevel').value;
    const condition = document.getElementById('filterCondition').value;
    const maxPrice = document.getElementById('filterPrice').value;

    let filteredBooks = books.filter(book => {
        if (subject && book.subject !== subject) return false;
        if (level && book.level !== level) return false;
        if (condition && book.condition !== condition) return false;
        if (maxPrice && book.price > parseInt(maxPrice)) return false;
        return true;
    });

    grid.innerHTML = filteredBooks.map(book => {
        // Afficher la photo ou un placeholder
        const imageHtml = book.photo 
            ? `<img src="${book.photo}" class="book-image" alt="${book.title}">` 
            : `<div class="book-image-placeholder">📖</div>`;
        
        return `
        <div class="book-card ${book.sold ? 'sold' : ''}" 
             data-sold-text="${translations[currentLang].out_of_stock}"
             onclick="${book.sold ? '' : `showBookDetails(${book.id})`}">
            ${imageHtml}
            <div class="book-content">
                <div class="book-title">${book.title}</div>
                <div class="book-info">${translations[currentLang]['subject_' + book.subject]} • ${translations[currentLang]['level_' + book.level]}</div>
                <span class="badge badge-${book.condition}">${translations[currentLang]['condition_' + book.condition]}</span>
                <div class="book-price">
                    ${book.price} ${book.paymentType === 'bc' ? translations[currentLang].bc_currency : translations[currentLang].dh}
                    ${book.paymentType === 'bc' ? '💰' : '💵'}
                </div>
            </div>
        </div>
        `;
    }).join('');
}

// ========== AFFICHAGE DÉTAILS DU LIVRE ==========
function showBookDetails(bookId) {
    const book = books.find(b => b.id === bookId);
    if (!book) return;

    const content = document.getElementById('bookDetailsContent');
    
    // Afficher la photo ou un placeholder
    const imageHtml = book.photo 
        ? `<img src="${book.photo}" class="book-detail-image" alt="${book.title}">` 
        : `<div class="book-detail-image-placeholder">📖</div>`;
    
    // Si le livre est vendu, ne pas afficher le bouton d'achat
    const buyButton = book.sold 
        ? `<div style="background: #e74c3c; color: white; padding: 1rem; border-radius: 10px; text-align: center; font-weight: 700; margin-top: 1rem;">
            ${translations[currentLang].out_of_stock}
           </div>`
        : (book.paymentType === 'bc' 
            ? `<button class="btn btn-primary" onclick="buyWithBC(${book.id})" style="margin-top: 1rem; width: 100%;">
                ${translations[currentLang].btn_buy_bc} ${book.price} ${translations[currentLang].bc_currency} 💰
               </button>`
            : `<button class="btn btn-primary" onclick="buyWithCash(${book.id})" style="margin-top: 1rem; width: 100%;">
                ${translations[currentLang].btn_buy_cash} ${book.price} ${translations[currentLang].dh} 💵
               </button>`);
    
    // Bouton de contact vendeur (si ce n'est pas votre propre annonce)
    const contactButton = book.seller !== "Vous" && book.seller !== "Moi"
        ? `<button class="btn-contact-seller" onclick="contactSeller(${book.id}, '${book.seller}')">
            ${translations[currentLang].btn_contact_seller}
           </button>`
        : '';
    
    content.innerHTML = `
        <button class="btn btn-secondary" onclick="showPage('browse')" style="margin-bottom: 2rem;">${translations[currentLang].btn_back}</button>
        <div class="details-grid">
            <div class="details-image">${imageHtml}</div>
            <div class="details-info">
                <h2>${book.title}</h2>
                <p><strong>${translations[currentLang].filter_subject}:</strong> ${translations[currentLang]['subject_' + book.subject]}</p>
                <p><strong>${translations[currentLang].filter_level}:</strong> ${translations[currentLang]['level_' + book.level]}</p>
                <p><strong>${translations[currentLang].filter_condition}:</strong> ${translations[currentLang]['condition_' + book.condition]}</p>
                <div class="book-price">
                    ${book.price} ${book.paymentType === 'bc' ? translations[currentLang].bc_currency : translations[currentLang].dh}
                    ${book.paymentType === 'bc' ? '💰' : '💵'}
                </div>
                ${buyButton}
                ${contactButton}
                <div class="seller-info">
                    <h3>${translations[currentLang].seller}</h3>
                    <p><strong>${translations[currentLang].contact}:</strong> ${book.contact}</p>
                    <p><strong>${translations[currentLang].description}:</strong> ${book.description}</p>
                </div>
                <button class="btn-report" onclick="openReportModal(${book.id})" data-translate="btn_report">${translations[currentLang].btn_report}</button>
            </div>
        </div>
    `;
    showPage('details');
}

// ========== INITIALISATION ==========
document.addEventListener('DOMContentLoaded', () => {
    initEvents();
    renderBooks();
    translatePage();
    initReportForm();
});

// ========== GESTION DE LA MODAL DE SIGNALEMENT ==========
let currentReportBookId = null;

function openReportModal(bookId) {
    currentReportBookId = bookId;
    const modal = document.getElementById('reportModal');
    modal.classList.add('show');
    document.getElementById('reportForm').reset();
}

function closeReportModal() {
    const modal = document.getElementById('reportModal');
    modal.classList.remove('show');
    currentReportBookId = null;
}

function initReportForm() {
    const reportForm = document.getElementById('reportForm');
    if (reportForm) {
        reportForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const reason = document.getElementById('reportReason').value;
            const details = document.getElementById('reportDetails').value;
            const book = books.find(b => b.id === currentReportBookId);
            
            console.log('Signalement:', {
                bookId: currentReportBookId,
                bookTitle: book?.title,
                reason: reason,
                details: details,
                timestamp: new Date().toISOString()
            });
            
            alert(translations[currentLang].report_success);
            closeReportModal();
        });
    }
    
    const modal = document.getElementById('reportModal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeReportModal();
            }
        });
    }
}

// ========== FONCTIONS D'ACHAT ==========
function buyWithBC(bookId) {
    const book = books.find(b => b.id === bookId);
    if (!book) return;
    
    if (subtractBC(book.price)) {
        // Marquer le livre comme vendu
        book.sold = true;
        
        const ticketCode = generateTicketCode();
        showTicket(book, ticketCode, 'bc');
        incrementPurchases();
        
        console.log('Achat avec BC:', {
            bookId: bookId,
            bookTitle: book.title,
            price: book.price,
            ticketCode: ticketCode,
            timestamp: new Date().toISOString()
        });
        
        // Rafraîchir l'affichage des livres
        displayBooks(books);
    } else {
        alert(translations[currentLang].insufficient_bc);
    }
}

function buyWithCash(bookId) {
    const book = books.find(b => b.id === bookId);
    if (!book) return;
    
    // Marquer le livre comme vendu
    book.sold = true;
    
    const ticketCode = generateTicketCode();
    showTicket(book, ticketCode, 'cash');
    incrementPurchases();
    
    console.log('Achat avec Cash:', {
        bookId: bookId,
        bookTitle: book.title,
        price: book.price,
        ticketCode: ticketCode,
        timestamp: new Date().toISOString()
    });
    
    // Rafraîchir l'affichage des livres
    displayBooks(books);
}
// ========== SYSTÈME DE PROFIL ET STATUTS ==========
let userProfile = {
    name: "Utilisateur",
    avatar: "👤",
    theme: "green", // green, blue, red, purple, orange
    salesCount: 0,
    purchasesCount: 0,
    status: "bronze", // bronze, silver, gold, platinum
    unlockedThemes: ["green"] // Thèmes débloqués (green est gratuit par défaut)
};

// Coûts des thèmes en BC
const themePrices = {
    green: 0,      // Gratuit
    blue: 50,
    red: 75,
    purple: 100,
    orange: 150
};

// Charger le profil depuis localStorage si disponible
function loadProfile() {
    const saved = localStorage.getItem('rebookProfile');
    if (saved) {
        userProfile = { ...userProfile, ...JSON.parse(saved) };
    }
    updateProfileStatus();
    applyTheme();
}

// Sauvegarder le profil
function saveProfile() {
    localStorage.setItem('rebookProfile', JSON.stringify(userProfile));
}

// Calculer le statut en fonction de l'activité
function updateProfileStatus() {
    const totalActivity = userProfile.salesCount + userProfile.purchasesCount;
    
    if (totalActivity >= 20) {
        userProfile.status = "platinum";
    } else if (totalActivity >= 10) {
        userProfile.status = "gold";
    } else if (totalActivity >= 5) {
        userProfile.status = "silver";
    } else {
        userProfile.status = "bronze";
    }
    
    saveProfile();
}

// Incrémenter les compteurs
function incrementSales() {
    userProfile.salesCount++;
    updateProfileStatus();
    updateProfileDisplay();
}

function incrementPurchases() {
    userProfile.purchasesCount++;
    updateProfileStatus();
    updateProfileDisplay();
}

// Appliquer le thème choisi
function applyTheme() {
    const root = document.documentElement;
    
    const themes = {
        green: { primary: '#2ecc71', secondary: '#27ae60' },
        blue: { primary: '#3498db', secondary: '#2980b9' },
        red: { primary: '#e74c3c', secondary: '#c0392b' },
        purple: { primary: '#9b59b6', secondary: '#8e44ad' },
        orange: { primary: '#e67e22', secondary: '#d35400' }
    };
    
    const selectedTheme = themes[userProfile.theme] || themes.green;
    root.style.setProperty('--primary', selectedTheme.primary);
    root.style.setProperty('--secondary', selectedTheme.secondary);
    
    saveProfile();
}

// Mettre à jour l'affichage du profil
function updateProfileDisplay() {
    const profileBtn = document.querySelector('.profile-btn');
    if (profileBtn) {
        const statusIcon = getStatusIcon(userProfile.status);
        profileBtn.innerHTML = `${userProfile.avatar} ${statusIcon}`;
    }
}

// Icônes de statut
function getStatusIcon(status) {
    const icons = {
        bronze: '🥉',
        silver: '🥈',
        gold: '🥇',
        platinum: '💎'
    };
    return icons[status] || icons.bronze;
}

// Ouvrir la modal de profil
function openProfileModal() {
    const modal = document.getElementById('profileModal');
    modal.classList.add('show');
    
    // Remplir les informations
    document.getElementById('profileName').value = userProfile.name;
    document.getElementById('profileAvatar').value = userProfile.avatar;
    document.getElementById('profileSales').textContent = userProfile.salesCount;
    document.getElementById('profilePurchases').textContent = userProfile.purchasesCount;
    document.getElementById('profileStatus').textContent = translations[currentLang]['status_' + userProfile.status];
    
    // Sélectionner le thème actuel et masquer les thèmes non débloqués
    document.querySelectorAll('.theme-option').forEach(opt => {
        opt.classList.remove('selected');
        const theme = opt.dataset.theme;
        
        // Vérifier si le thème est débloqué
        if (userProfile.unlockedThemes.includes(theme)) {
            opt.style.opacity = '1';
            opt.style.pointerEvents = 'auto';
            if (theme === userProfile.theme) {
                opt.classList.add('selected');
            }
        } else {
            opt.style.opacity = '0.3';
            opt.style.pointerEvents = 'none';
            opt.title = translations[currentLang].theme_locked;
        }
    });
}

// Fermer la modal de profil
function closeProfileModal() {
    const modal = document.getElementById('profileModal');
    modal.classList.remove('show');
}

// Sauvegarder les modifications du profil
function saveProfileChanges() {
    userProfile.name = document.getElementById('profileName').value || "Utilisateur";
    userProfile.avatar = document.getElementById('profileAvatar').value || "👤";
    
    saveProfile();
    updateProfileDisplay();
    closeProfileModal();
    
    // Message de confirmation
    const msg = document.createElement('div');
    msg.className = 'success-message show';
    msg.textContent = translations[currentLang].profile_saved;
    msg.style.position = 'fixed';
    msg.style.top = '20px';
    msg.style.right = '20px';
    msg.style.zIndex = '10000';
    document.body.appendChild(msg);
    setTimeout(() => {
        msg.remove();
    }, 3000);
}

// Changer de thème
function selectTheme(theme) {
    // Vérifier si le thème est débloqué
    if (!userProfile.unlockedThemes.includes(theme)) {
        alert(translations[currentLang].theme_locked);
        return;
    }
    
    userProfile.theme = theme;
    applyTheme();
    
    document.querySelectorAll('.theme-option').forEach(opt => {
        opt.classList.remove('selected');
        if (opt.dataset.theme === theme) {
            opt.classList.add('selected');
        }
    });
}

// Débloquer un thème avec BC
function unlockTheme(theme) {
    // Vérifier si déjà débloqué
    if (userProfile.unlockedThemes.includes(theme)) {
        alert(translations[currentLang].theme_already_unlocked);
        return;
    }
    
    const price = themePrices[theme];
    
    // Vérifier si assez de BC
    if (subtractBC(price)) {
        userProfile.unlockedThemes.push(theme);
        saveProfile();
        
        // Message de succès
        const msg = document.createElement('div');
        msg.className = 'success-message show';
        msg.textContent = translations[currentLang].theme_unlock_success;
        msg.style.position = 'fixed';
        msg.style.top = '20px';
        msg.style.right = '20px';
        msg.style.zIndex = '10000';
        document.body.appendChild(msg);
        setTimeout(() => {
            msg.remove();
        }, 3000);
        
        // Rafraîchir l'affichage du profil
        openProfileModal();
    } else {
        alert(translations[currentLang].insufficient_bc);
    }
}

// Ouvrir la boutique de thèmes
function openThemeShop() {
    const modal = document.getElementById('themeShopModal');
    if (modal) {
        modal.classList.add('show');
        updateThemeShopDisplay();
    }
}

// Fermer la boutique de thèmes
function closeThemeShop() {
    const modal = document.getElementById('themeShopModal');
    if (modal) {
        modal.classList.remove('show');
    }
}

// Mettre à jour l'affichage de la boutique
function updateThemeShopDisplay() {
    document.querySelectorAll('.theme-shop-item').forEach(item => {
        const theme = item.dataset.theme;
        const isUnlocked = userProfile.unlockedThemes.includes(theme);
        const btn = item.querySelector('.theme-unlock-btn');
        const statusBadge = item.querySelector('.theme-status');
        
        if (isUnlocked) {
            btn.disabled = true;
            btn.textContent = translations[currentLang].theme_unlocked;
            btn.style.background = '#95a5a6';
            if (statusBadge) statusBadge.textContent = '✓ ' + translations[currentLang].theme_unlocked;
        } else {
            btn.disabled = false;
            btn.textContent = `${translations[currentLang].btn_unlock} (${themePrices[theme]} BC)`;
            btn.style.background = '';
            if (statusBadge) statusBadge.textContent = '🔒 ' + translations[currentLang].theme_locked;
        }
    });
}

// Initialiser le profil au chargement
document.addEventListener('DOMContentLoaded', () => {
    loadProfile();
    updateProfileDisplay();
});


// ========== GESTION DES PHOTOS ==========
let currentBookPhoto = null;

function handlePhotoUpload(event) {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = function(e) {
            currentBookPhoto = e.target.result;
            displayPhotoPreview(e.target.result);
        };
        reader.readAsDataURL(file);
    }
}

function displayPhotoPreview(imageUrl) {
    const preview = document.getElementById('photoPreview');
    const removeBtn = document.getElementById('removePhotoBtn');
    
    preview.innerHTML = `<img src="${imageUrl}" alt="Photo du livre">`;
    preview.classList.add('has-image');
    removeBtn.style.display = 'block';
}

function removePhoto() {
    currentBookPhoto = null;
    const preview = document.getElementById('photoPreview');
    const removeBtn = document.getElementById('removePhotoBtn');
    const photoInput = document.getElementById('bookPhoto');
    
    preview.innerHTML = `
        <div class="photo-placeholder">
            <span class="photo-icon">📷</span>
            <span data-translate="photo_placeholder">Cliquez pour ajouter une photo</span>
        </div>
    `;
    preview.classList.remove('has-image');
    removeBtn.style.display = 'none';
    if (photoInput) photoInput.value = '';
    translatePage();
}

// ========== DONNÉES DE MESSAGERIE ==========
let conversations = [
    {
        id: 1,
        bookId: 1,
        bookTitle: "Mathématiques 1ère année BAC",
        otherUser: {
            name: "Ahmed M.",
            avatar: "👨"
        },
        messages: [
            {
                id: 1,
                sender: "other",
                text: "Bonjour, le livre est-il toujours disponible ?",
                timestamp: new Date(Date.now() - 3600000)
            },
            {
                id: 2,
                sender: "me",
                text: "Oui, il est disponible ! Vous êtes intéressé ?",
                timestamp: new Date(Date.now() - 3000000)
            }
        ],
        unread: 1
    },
    {
        id: 2,
        bookId: 3,
        bookTitle: "Français Tronc Commun",
        otherUser: {
            name: "Sara L.",
            avatar: "👩"
        },
        messages: [
            {
                id: 1,
                sender: "other",
                text: "Est-ce que vous pouvez baisser le prix ?",
                timestamp: new Date(Date.now() - 7200000)
            },
            {
                id: 2,
                sender: "me",
                text: "Je peux faire 45 DH au lieu de 50 DH",
                timestamp: new Date(Date.now() - 6600000)
            },
            {
                id: 3,
                sender: "other",
                text: "D'accord, je le prends !",
                timestamp: new Date(Date.now() - 6000000)
            }
        ],
        unread: 0
    }
];

let activeConversationId = null;

// ========== AFFICHAGE DES CONVERSATIONS ==========
function displayConversations() {
    const conversationsList = document.getElementById('conversationsList');
    if (!conversationsList) return;
    
    let totalUnread = 0;
    
    conversationsList.innerHTML = conversations.map(conv => {
        totalUnread += conv.unread;
        const lastMessage = conv.messages[conv.messages.length - 1];
        const isActive = activeConversationId === conv.id ? 'active' : '';
        
        return `
            <div class="conversation-item ${isActive}" onclick="openConversation(${conv.id})">
                <div class="conversation-avatar">${conv.otherUser.avatar}</div>
                <div class="conversation-info">
                    <div class="conversation-name">${conv.otherUser.name}</div>
                    <div class="conversation-book">${conv.bookTitle}</div>
                    <div class="conversation-last-message">${lastMessage.text}</div>
                </div>
                ${conv.unread > 0 ? `<div class="conversation-unread">${conv.unread}</div>` : ''}
            </div>
        `;
    }).join('');
    
    updateMessageBadge(totalUnread);
}

function updateMessageBadge(count) {
    const badge = document.getElementById('messageBadge');
    if (!badge) return;
    
    if (count > 0) {
        badge.textContent = count;
        badge.style.display = 'inline-block';
    } else {
        badge.style.display = 'none';
    }
}

// ========== OUVRIR UNE CONVERSATION ==========
function openConversation(conversationId) {
    activeConversationId = conversationId;
    const conversation = conversations.find(c => c.id === conversationId);
    
    if (!conversation) return;
    
    conversation.unread = 0;
    
    document.getElementById('chatEmpty').style.display = 'none';
    document.getElementById('chatActive').style.display = 'flex';
    
    document.getElementById('chatUserAvatar').textContent = conversation.otherUser.avatar;
    document.getElementById('chatUserName').textContent = conversation.otherUser.name;
    document.getElementById('chatBookTitle').textContent = conversation.bookTitle;
    
    displayMessages(conversation.messages);
    displayConversations();
    
    setTimeout(() => {
        const chatMessages = document.getElementById('chatMessages');
        if (chatMessages) chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 100);
}

// ========== AFFICHAGE DES MESSAGES ==========
function displayMessages(messages) {
    const chatMessages = document.getElementById('chatMessages');
    if (!chatMessages) return;
    
    chatMessages.innerHTML = messages.map(msg => {
        const messageClass = msg.sender === 'me' ? 'sent' : 'received';
        const avatar = msg.sender === 'me' ? '👤' : conversations.find(c => c.id === activeConversationId).otherUser.avatar;
        const time = formatMessageTime(msg.timestamp);
        
        return `
            <div class="message ${messageClass}">
                <div class="message-avatar">${avatar}</div>
                <div class="message-content">
                    <div class="message-text">${msg.text}</div>
                    <div class="message-time">${time}</div>
                </div>
            </div>
        `;
    }).join('');
}

function formatMessageTime(timestamp) {
    const now = new Date();
    const msgDate = new Date(timestamp);
    const diffMs = now - msgDate;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);
    
    if (diffMins < 1) return "À l'instant";
    if (diffMins < 60) return `${diffMins}min`;
    if (diffHours < 24) return `${diffHours}h`;
    if (diffDays < 7) return `${diffDays}j`;
    
    return msgDate.toLocaleDateString(currentLang === 'fr' ? 'fr-FR' : currentLang === 'ar' ? 'ar-MA' : 'en-US');
}

// ========== ENVOYER UN MESSAGE ==========
function sendMessage() {
    const input = document.getElementById('chatInput');
    if (!input) return;
    
    const text = input.value.trim();
    if (!text || !activeConversationId) return;
    
    const conversation = conversations.find(c => c.id === activeConversationId);
    if (!conversation) return;
    
    const newMessage = {
        id: conversation.messages.length + 1,
        sender: 'me',
        text: text,
        timestamp: new Date()
    };
    
    conversation.messages.push(newMessage);
    input.value = '';
    
    displayMessages(conversation.messages);
    displayConversations();
    
    setTimeout(() => {
        const chatMessages = document.getElementById('chatMessages');
        if (chatMessages) chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 100);
    
    setTimeout(() => simulateResponse(conversation), 2000);
}

function simulateResponse(conversation) {
    const responses = [
        "Merci pour votre message !",
        "D'accord, pas de problème.",
        "On peut se rencontrer quand ?",
        "Super, merci !",
        "Je vous envoie mes coordonnées."
    ];
    
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    
    const newMessage = {
        id: conversation.messages.length + 1,
        sender: 'other',
        text: randomResponse,
        timestamp: new Date()
    };
    
    conversation.messages.push(newMessage);
    conversation.unread++;
    
    if (activeConversationId === conversation.id) {
        displayMessages(conversation.messages);
        conversation.unread = 0;
    }
    
    displayConversations();
    
    if (activeConversationId === conversation.id) {
        setTimeout(() => {
            const chatMessages = document.getElementById('chatMessages');
            if (chatMessages) chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 100);
    }
}

// ========== CONTACTER LE VENDEUR ==========
function contactSeller(bookId, sellerName) {
    let conversation = conversations.find(c => c.bookId === bookId);
    
    if (!conversation) {
        const book = books.find(b => b.id === bookId);
        conversation = {
            id: conversations.length + 1,
            bookId: bookId,
            bookTitle: book.title,
            otherUser: {
                name: sellerName,
                avatar: "👤"
            },
            messages: [],
            unread: 0
        };
        conversations.push(conversation);
    }
    
    showPage('messages');
    
    setTimeout(() => {
        displayConversations();
        openConversation(conversation.id);
    }, 100);
}

// ========== INITIALISATION COMPLÈTE ==========
document.addEventListener('DOMContentLoaded', () => {
    // Initialisation originale
    initEvents();
    renderBooks();
    translatePage();
    initReportForm();
    loadProfile();
    updateProfileDisplay();
    
    // Initialisation upload de photos
    const photoInput = document.getElementById('bookPhoto');
    if (photoInput) {
        photoInput.addEventListener('change', handlePhotoUpload);
    }
    
    // Initialisation messagerie
    displayConversations();
    
    // Listener pour envoyer avec Entrée
    const chatInput = document.getElementById('chatInput');
    if (chatInput) {
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
});
