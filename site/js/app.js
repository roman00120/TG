const PRODUCTS = [
    // PROTECCIÓN - PUESTA A TIERRA
    { id: 1, name: "Electrodo Magnetoactivo KDA-Series", category: "puesta-a-tierra", price: "Contactar", image: "https://totalground.com/assets/img/iconos/puesta-a-tierra.png", icon: "🌍" },
    { id: 2, name: "Compuesto H2O Ohm", category: "puesta-a-tierra", price: "Contactar", image: "https://totalground.com/assets/img/iconos/puesta-a-tierra.png", icon: "🧪" },
    { id: 3, name: "Acoplador de Impedancias", category: "puesta-a-tierra", price: "Contactar", image: "https://totalground.com/assets/img/iconos/puesta-a-tierra.png", icon: "🔗" },
    { id: 17, name: "Gema - Relleno Conductivo", category: "puesta-a-tierra", price: "Contactar", image: "https://totalground.com/assets/img/iconos/puesta-a-tierra.png", icon: "💎" },
    { id: 18, name: "Barra de Unión a Tierra", category: "puesta-a-tierra", price: "Contactar", image: "https://totalground.com/assets/img/iconos/puesta-a-tierra.png", icon: "➖" },

    // PROTECCIÓN - PARARRAYOS
    { id: 4, name: "Punta Dipolo Corona", category: "pararrayos", price: "Contactar", image: "https://totalground.com/assets/img/iconos/pararrayos.png", icon: "🗼" },
    { id: 5, name: "Sistema de Pararrayos KDA-01", category: "pararrayos", price: "Contactar", image: "https://totalground.com/assets/img/iconos/pararrayos.png", icon: "⛈️" },
    { id: 19, name: "Mástil Galvanizado 3m", category: "pararrayos", price: "Contactar", image: "https://totalground.com/assets/img/iconos/pararrayos.png", icon: "📏" },
    { id: 20, name: "Contador de Descargas", category: "pararrayos", price: "Contactar", image: "https://totalground.com/assets/img/iconos/pararrayos.png", icon: "🔢" },

    // PROTECCIÓN - SUPRESORES
    { id: 6, name: "Supresor de Transitorios Din Rail", category: "supresores", price: "Contactar", image: "https://totalground.com/assets/img/iconos/supresores.png", icon: "🛡️" },
    { id: 7, name: "Supresor Clase B+C", category: "supresores", price: "Contactar", image: "https://totalground.com/assets/img/iconos/supresores.png", icon: "⚡" },
    { id: 21, name: "Supresor Trifásico 480V", category: "supresores", price: "Contactar", image: "https://totalground.com/assets/img/iconos/supresores.png", icon: "🛡️" },

    // REGULACIÓN Y RESPALDO
    { id: 8, name: "UPS Gama 600/1000/2000", category: "regulador-respaldo", price: "Contactar", image: "https://totalground.com/assets/img/iconos/regulacion-y-respaldo.png", icon: "🔋" },
    { id: 9, name: "Regulador Monofásico TG-360W", category: "regulador-respaldo", price: "Contactar", image: "https://totalground.com/assets/img/iconos/regulacion-y-respaldo.png", icon: "🔌" },
    { id: 10, name: "UPS On Line Omega 10-260 KVA", category: "regulador-respaldo", price: "Contactar", image: "https://totalground.com/assets/img/iconos/regulacion-y-respaldo.png", icon: "📟" },
    { id: 22, name: "UPS Interactivo Serie-X", category: "regulador-respaldo", price: "Contactar", image: "https://totalground.com/assets/img/iconos/regulacion-y-respaldo.png", icon: "🔋" },

    // TELEMETRÍA Y CONTROL
    { id: 11, name: "Total View Analizador", category: "telemetria", price: "Contactar", image: "https://totalground.com/assets/img/iconos/telemetria-y-control.png", icon: "📊" },
    { id: 12, name: "Smart View GSM/Ethernet", category: "telemetria", price: "Contactar", image: "https://totalground.com/assets/img/iconos/telemetria-y-control.png", icon: "📱" },
    { id: 23, name: "Sensor de Corriente", category: "telemetria", price: "Contactar", image: "https://totalground.com/assets/img/iconos/telemetria-y-control.png", icon: "🌀" },

    // TG ONE (IIoT)
    { id: 13, name: "Industrial TRX 4.0", category: "bot-tgone", price: "Contactar", image: "https://totalground.com/assets/img/iconos/iot.png", icon: "🤖" },
    { id: 14, name: "CHECKTHOR Gateway", category: "bot-tgone", price: "Contactar", image: "https://totalground.com/assets/img/iconos/iot.png", icon: "🛰️" },
    { id: 24, name: "TG-ONE Node Wireless", category: "bot-tgone", price: "Contactar", image: "https://totalground.com/assets/img/iconos/iot.png", icon: "📡" },

    // BANCO DE CAPACITORES
    { id: 15, name: "Banco de Capacitores Automático", category: "banco-capacitores", price: "Contactar", image: "https://totalground.com/assets/img/iconos/bancos-capacitores.png", icon: "📦" },
    { id: 25, name: "Capacitor de Bote Fijo", category: "banco-capacitores", price: "Contactar", image: "https://totalground.com/assets/img/iconos/bancos-capacitores.png", icon: "🔋" },

    // INFRAESTRUCTURA
    { id: 16, name: "Torre Arriostrada G25/G35/G45", category: "infraestructura", price: "Contactar", image: "https://testing.totalground.com/assets/img/iconos/torres.png", icon: "🏗️" },
    { id: 26, name: "Tramo de Torre 3m", category: "infraestructura", price: "Contactar", image: "https://testing.totalground.com/assets/img/iconos/torres.png", icon: "🧱" }
];

document.addEventListener('DOMContentLoaded', () => {
    injectModal();
    injectWhatsApp();
    initNavigation();
    initScrollAnimations();
    initContactPopups();
    if (document.getElementById('productGrid')) initCatalog();
    if (document.getElementById('contactForm')) initContact();
    initParallax();
});

/**
 * 2026 WhatsApp FAB Injector
 */
function injectWhatsApp() {
    if (!document.getElementById('whatsappBtn')) {
        const wa = document.createElement('a');
        wa.id = 'whatsappBtn';
        wa.href = 'https://wa.me/521234567890';
        wa.target = '_blank';
        wa.className = 'whatsapp-fab';
        wa.innerHTML = `
            <div class="wa-tooltip">Asesoría Directa</div>
            <svg viewBox="0 0 448 512" class="wa-svg"><path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.6-2.8-23.5-8.7-44.8-27.7-16.6-14.8-27.8-33-31.1-38.6-3.3-5.6-.3-8.6 2.5-11.4 2.5-2.5 5.5-6.5 8.3-9.7 2.8-3.3 3.7-5.6 5.6-9.3 1.9-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.6 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
        `;
        document.body.appendChild(wa);
    }
}

function initContactPopups() {
    const contactBtns = document.querySelectorAll('a[href="contacto.html"], .cta-btn:not([href="catalogo.html"])');
    contactBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (btn.classList.contains('nav-link')) return; // Allow normal nav if it's the nav link
            e.preventDefault();
            openContactPopup();
        });
    });
}

function openContactPopup() {
    const content = `
        <div class="contact-popup-header">
            <h2>Hablemos</h2>
            <p style="margin-bottom:20px; font-size: 0.9rem; color: var(--text-secondary);">
                Ingresa tu información para que un asesor se ponga en contacto contigo, nos encargaremos que sea rápido.
            </p>
            <div class="contact-options" style="display:flex; gap:10px; margin-bottom:25px;">
                <div style="flex:1; background: var(--brand-soft); padding: 10px; border-radius:10px; font-size:0.75rem;">
                    <strong>🏢 Oficinas:</strong> Agendar visita
                </div>
                <div style="flex:1; background: var(--brand-soft); padding: 10px; border-radius:10px; font-size:0.75rem;">
                    <strong>📞 Llámanos:</strong> Más info
                </div>
            </div>
        </div>
        <form id="popupContactForm" class="modern-form">
            <div class="form-row" style="display:flex; gap:10px; margin-bottom:10px;">
                <div style="flex:1">
                    <label>Nombre *</label>
                    <input type="text" name="name" placeholder="Nombre completo" required>
                </div>
                <div style="flex:1">
                    <label>Empresa *</label>
                    <input type="text" name="company" placeholder="Empresa o Razón Social" required>
                </div>
            </div>
            <div class="form-row" style="margin-bottom:10px;">
                <label>Solicita información de *</label>
                <select name="topic" required style="width:100%; padding: 10px; border: 1px solid var(--border); border-radius:10px;">
                    <option value="">Seleccione una opción</option>
                    <option value="bot">BOT TG-ONE</option>
                    <option value="reg">Reguladores</option>
                    <option value="ground">Puesta a Tierra</option>
                    <option value="other">Otro</option>
                </select>
            </div>
            <div class="form-row" style="display:flex; gap:10px; margin-bottom:10px;">
                <div style="flex:1">
                    <label>Cargo *</label>
                    <input type="text" name="position" placeholder="Cargo que ocupa" required>
                </div>
                <div style="flex:1">
                    <label>Celular *</label>
                    <input type="tel" name="phone" placeholder="Número de contacto" required>
                </div>
            </div>
            <div class="form-row" style="margin-bottom:10px;">
                <label>Correo electrónico *</label>
                <input type="email" name="email" placeholder="Correo electrónico" required>
            </div>
            <div class="form-row" style="margin-bottom:15px;">
                <label>Mensaje *</label>
                <textarea name="message" rows="3" placeholder="Tu mensaje..." required></textarea>
            </div>
            <button type="submit" class="cta-btn" style="width:100%">Enviar Solicitud</button>
        </form>
    `;
    openModal(content);

    setTimeout(() => {
        const form = document.getElementById('popupContactForm');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                alert('¡Gracias! Un asesor de Total Ground se pondrá en contacto contigo muy pronto.');
                closeModal();
            });
        }
    }, 100);
}

/**
 * 2026 Ghost Modal Injector
 * Injects modal structure if not present in the HTML
 */
function injectModal() {
    if (!document.getElementById('mediaModal')) {
        const modal = document.createElement('div');
        modal.id = 'mediaModal';
        modal.className = 'modal';
        modal.innerHTML = `
            <span class="close-modal" onclick="closeModal()">&times;</span>
            <div class="modal-content">
                <div id="modalBody"></div>
            </div>
        `;
        document.body.appendChild(modal);
    }
}

function initCatalog() {
    const grid = document.getElementById('productGrid');
    const searchInput = document.getElementById('productSearch');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const paginationBtns = document.querySelectorAll('.page-btn');

    let currentFilter = 'all';
    let searchQuery = '';
    let currentPage = 1;
    const itemsPerPage = 4;

    // URL Category Support
    const urlParams = new URLSearchParams(window.location.search);
    const urlCat = urlParams.get('cat');
    if (urlCat) {
        currentFilter = urlCat;
        filterBtns.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.category === urlCat) btn.classList.add('active');
        });
    }

    function renderProducts() {
        if (!grid) return;
        grid.innerHTML = '';
        const filtered = PRODUCTS.filter(p => {
            const matchesFilter = currentFilter === 'all' || p.category === currentFilter;
            const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesFilter && matchesSearch;
        });

        // Pagination Logic
        const totalPages = Math.ceil(filtered.length / itemsPerPage);
        if (currentPage > totalPages) currentPage = 1;

        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const pageItems = filtered.slice(start, end);

        pageItems.forEach(p => {
            const card = document.createElement('div');
            card.className = 'product-card animate-on-scroll';
            card.innerHTML = `
                <div class="product-img-container">
                    <img src="${p.image}" alt="${p.name}" class="product-card-img" onerror="this.innerHTML='${p.icon}'; this.parentElement.classList.add('no-img');">
                </div>
                <div class="product-info">
                    <span class="product-price">${p.price}</span>
                    <h3 class="product-name">${p.name}</h3>
                </div>
                <button class="product-action" data-product="${p.name}" data-price="${p.price}" data-category="${p.category}">Ver detalles</button>
            `;
            grid.appendChild(card);
        });

        // Update Pagination Buttons
        updatePagination(totalPages);

        document.querySelectorAll('.product-action').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const { product, price, category } = e.target.dataset;
                openModal(`
                    <div class="modal-product-header">
                        <span class="badge">${category.toUpperCase()}</span>
                        <h2>${product}</h2>
                        <p class="modal-price">${price}</p>
                    </div>
                    <div class="modal-specs" style="margin-top:20px; border-top: 1px solid var(--border); padding-top:20px;">
                        <p><strong>Disponibilidad:</strong> En Stock</p>
                        <p><strong>Garantía:</strong> 2 años</p>
                        <p style="margin-top:15px; color: var(--text-secondary);">Esta es una solución industrial de alta precisión diseñada para entornos críticos.</p>
                    </div>
                `);
            });
        });
    }

    function updatePagination(totalPages) {
        const paginationContainer = document.querySelector('.pagination');
        if (!paginationContainer) return;

        paginationContainer.innerHTML = '';
        for (let i = 1; i <= totalPages; i++) {
            const btn = document.createElement('button');
            btn.className = `page-btn ${i === currentPage ? 'active' : ''}`;
            btn.textContent = i;
            btn.addEventListener('click', () => {
                currentPage = i;
                renderProducts();
                window.scrollTo({ top: grid.offsetTop - 100, behavior: 'smooth' });
            });
            paginationContainer.appendChild(btn);
        }
    }

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value;
            currentPage = 1;
            renderProducts();
        });
    }

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.category;
            currentPage = 1;
            renderProducts();

            // Update URL without reload
            const newUrl = currentFilter === 'all' ? 'catalogo.html' : `catalogo.html?cat=${currentFilter}`;
            window.history.pushState({ path: newUrl }, '', newUrl);
        });
    });

    renderProducts();
}

/**
 * Handle Active Navigation Links
 */
function initNavigation() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileToggle = document.querySelector('.mobile-toggle');
    const mainNav = document.querySelector('.main-nav');

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    if (mobileToggle && mainNav) {
        mobileToggle.addEventListener('click', () => {
            mainNav.classList.toggle('show');
            mobileToggle.classList.toggle('active');
        });
    }
}

/**
 * 2026 Parallax Effect
 */
function initParallax() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    window.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        hero.style.transform = `translate(${x}px, ${y}px)`;
    });
}

/**
 * Modal System for Multimedia
 */
function openModal(content) {
    const modal = document.getElementById('mediaModal');
    const body = document.getElementById('modalBody');
    if (modal && body) {
        body.innerHTML = content;
        modal.style.display = "flex"; // Changed to flex for centering
    }
}

function closeModal() {
    document.getElementById('mediaModal').style.display = "none";
}

/**
 * Contact Form Validation
 */
function initContact() {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        if (name.length < 3) {
            alert('Por favor, ingrese un nombre válido.');
            return;
        }

        alert(`¡Gracias ${name}! Hemos recibido su mensaje. Nos pondremos en contacto a ${email} pronto.`);
        form.reset();
    });
}

/**
 * Simple Scroll Animations for Stats & Sections
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
                if (entry.target.dataset.count) {
                    animateValue(entry.target);
                }
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll, .stat-number').forEach(el => {
        observer.observe(el);
    });
}

/**
 * Number counting animation for statistics
 */
function animateValue(obj) {
    const target = parseInt(obj.dataset.count);
    let current = 0;
    const duration = 1500;
    const stepTime = 20;
    const increment = target / (duration / stepTime);

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            obj.textContent = target + (obj.dataset.suffix || '');
            clearInterval(timer);
        } else {
            obj.textContent = Math.floor(current) + (obj.dataset.suffix || '');
        }
    }, stepTime);
}
