// Data untuk semua layanan dengan gambar
const servicesData = {
    // Jasa Joki per game dengan gambar
    joki: {
        'blox-fruits': [
            {
                id: 'joki-bf1',
                name: 'Leveling 0-1000',
                description: 'Joki leveling dari level 0 sampai 1000 dengan metode aman',
                price: 14000,
                oldPrice: 18000,
                game: 'blox-fruits',
                image: 'https://img.icons8.com/color/96/000000/level-up.png',
                features: ['Level 0-1000', 'Method: Manual', 'Waktu: 1 Hari', 'Garansi aman'],
                estimatedTime: '1 Hari'
            },
            {
                id: 'joki-bf2',
                name: 'Race V4 Quest',
                description: 'Complete semua quest untuk unlock Race V4',
                price: 150000,
                oldPrice: 200000,
                game: 'blox-fruits',
                image: 'https://img.icons8.com/color/96/000000/quest.png',
                features: ['Full Race V4 Quest', 'Includes Trials', 'Waktu: 2-3 Hari', 'Pro player'],
                estimatedTime: '2-3 Hari'
            },
            {
                id: 'joki-bf3',
                name: 'Leveling per 100 Level',
                description: 'Joki leveling per 100 level sesuai permintaan',
                price: 2000,
                oldPrice: 5000,
                game: 'blox-fruits',
                image: 'https://img.icons8.com/color/96/000000/stairs.png',
                features: ['Custom Leveling', 'Safe Method', 'Waktu: Tergantung Pemesanan', 'Garansi'],
                estimatedTime: 'tergantung pemesanan'
            }
        ],
        'king-legacy': [
            {
                id: 'joki-kl1',
                name: 'Leveling Max Level',
                description: 'Joki leveling sampai max level King Legacy',
                price: 100000,
                oldPrice: 130000,
                game: 'king-legacy',
                image: 'https://img.icons8.com/color/96/000000/king.png',
                features: ['Max Level', 'All Stats Max', 'Waktu: 2-3 Hari', 'Garansi'],
                estimatedTime: '2-3 Hari'
            }
        ],
        'pet-simulator': [
            {
                id: 'joki-ps1',
                name: 'Huge Pet Grind',
                description: 'Grind untuk mendapatkan huge pet terbaru',
                price: 200000,
                oldPrice: 250000,
                game: 'pet-simulator',
                image: 'https://img.icons8.com/color/96/000000/dog.png',
                features: ['Latest Huge Pet', 'Fast Grind', 'Waktu: 3-5 Hari', 'Pro method'],
                estimatedTime: '3-5 Hari'
            }
        ],
        'adopt-me': [
            {
                id: 'joki-am1',
                name: 'Full Pet Collection',
                description: 'Joki untuk mendapatkan semua pet lengkap',
                price: 120000,
                oldPrice: 150000,
                game: 'adopt-me',
                image: 'https://img.icons8.com/color/96/000000/pet-commands-follow.png',
                features: ['All Legendary Pets', 'Full Collection', 'Waktu: 1-2 Minggu', 'Pro player'],
                estimatedTime: '1-2 Minggu'
            }
        ],
        'mm2': [
            {
                id: 'joki-mm1',
                name: 'Godly Knife Collection',
                description: 'Joki untuk mendapatkan koleksi godly knife',
                price: 80000,
                oldPrice: 100000,
                game: 'mm2',
                image: 'https://img.icons8.com/color/96/000000/knife.png',
                features: ['Multiple Godly Knives', 'Fast Trade', 'Waktu: 3-5 Hari', 'Safe method'],
                estimatedTime: '3-5 Hari'
            }
        ]
    },
    
    // Akun Roblox dengan gambar
    accounts: [
        {
            id: 'acc1',
            name: 'Account Fish It Element Rod',
            description: 'Akun fish it dengan Element Rod dan beberapa limited',
            price: 120000,
            oldPrice: 150000,
            image: 'https://tr.rbxcdn.com/abf5c8e9b7d3e4f5a6b7c8d9e0f1a2b3/420/420/Avatar/Png',
            features: ['No Email', 'Element Rod', 'Full access'],
            limiteds: ['-']
        },
        {
            id: 'acc2',
            name: 'Account Fish It Ghostfin Rod',
            description: 'Akun fish it dengan Ghostfin Rod dan beberapa item lainnya',
            price: 50000,
            oldPrice: 75000,
            image: 'https://tr.rbxcdn.com/bc6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f/420/420/Avatar/Png',
            features: ['No Email', 'Ghostfin Rod', 'Full access'],
            limiteds: ['-']
        },
        {
            id: 'acc3',
            name: 'Account Blox Fruit level 2550',
            description: 'Akun dengan level 2550 dengan inventory random',
            price: 30000,
            oldPrice: 40000,
            image: 'https://tr.rbxcdn.com/cd7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a/420/420/Avatar/Png',
            features: ['No Email', 'Fragment Random', 'Coin Random'],
            limiteds: ['-']
        }
    ],
    
    // Item Limited dengan gambar (kosong sesuai request)
    items: [
        {
            id: 'item1',
            name: 'Coming Soon',
            description: 'Item limited akan segera tersedia',
            price: 0,
            oldPrice: 0,
            image: 'https://img.icons8.com/color/96/000000/coming-soon.png',
            rarity: '-',
            demand: '-'
        },
        {
            id: 'item2',
            name: 'Coming Soon',
            description: 'Item limited akan segera tersedia',
            price: 0,
            oldPrice: 0,
            image: 'https://img.icons8.com/color/96/000000/hourglass.png',
            rarity: '-',
            demand: '-'
        },
        {
            id: 'item3',
            name: 'Coming Soon',
            description: 'Item limited akan segera tersedia',
            price: 0,
            oldPrice: 0,
            image: 'https://img.icons8.com/color/96/000000/time-machine.png',
            rarity: '-',
            demand: '-'
        }
    ],
    
    // Gamepass dengan gambar
    gamepass: [
        {
            id: 'gp1',
            name: 'Blox Fruits - Dark Blade',
            description: 'Complete gamepass Dark Blade Blox Fruits',
            price: 82000,
            oldPrice: 98000,
            game: 'Blox Fruits',
            image: 'https://img.icons8.com/color/96/000000/sword.png',
            includes: ['Dark Blade']
        },
        {
            id: 'gp2',
            name: 'Blox Fruits - 2x Mastery',
            description: 'Complete gamepass 2x Mastery Blox Fruits',
            price: 25000,
            oldPrice: 35000,
            game: 'Blox Fruits',
            image: 'https://img.icons8.com/color/96/000000/training.png',
            includes: ['2x Mastery']
        },
        {
            id: 'gp3',
            name: 'Adopt Me! - Full Bundle',
            description: 'Semua gamepass Adopt Me termasuk fly & ride',
            price: 150000,
            oldPrice: 200000,
            game: 'Adopt Me!',
            image: 'https://img.icons8.com/color/96/000000/baby.png',
            includes: ['Fly', 'Ride', 'Money Bags', 'More']
        }
    ]
};

// Data tambahan untuk section baru
const additionalData = {
    // Blox Fruits Gamepass
    bloxfruitsGamepass: [
        {
            id: 'bf-gp-1',
            name: '2x Money',
            description: 'Gamepass untuk mendapatkan 2x uang',
            price: 120000,
            oldPrice: 150000,
            image: 'https://img.icons8.com/color/96/000000/double.png'
        },
        {
            id: 'bf-gp-2',
            name: '2x Mastery',
            description: 'Gamepass untuk mendapatkan 2x mastery',
            price: 120000,
            oldPrice: 150000,
            image: 'https://img.icons8.com/color/96/000000/experience-skill.png'
        },
        {
            id: 'bf-gp-3',
            name: '+1 Fruit Storage',
            description: 'Tambah slot penyimpanan buah',
            price: 250000,
            oldPrice: 300000,
            image: 'https://img.icons8.com/color/96/000000/box.png'
        },
        {
            id: 'bf-gp-4',
            name: '+1 Fruit Storage (Tambahan)',
            description: 'Slot penyimpanan buah tambahan',
            price: 400000,
            oldPrice: 500000,
            image: 'https://img.icons8.com/color/96/000000/warehouse.png'
        },
        {
            id: 'bf-gp-5',
            name: '2x Boss Drop',
            description: 'Peluang dapat drop dari boss 2x lebih besar',
            price: 150000,
            oldPrice: 180000,
            image: 'https://img.icons8.com/color/96/000000/boss.png'
        },
        {
            id: 'bf-gp-6',
            name: 'Fast Boats',
            description: 'Perahu lebih cepat untuk menjelajah laut',
            price: 80000,
            oldPrice: 100000,
            image: 'https://img.icons8.com/color/96/000000/sword.png'
        },
        {
            id: 'bf-gp-7',
            name: 'Paket All Gamepass',
            description: 'Semua gamepass Blox Fruits lengkap',
            price: 850000,
            oldPrice: 1200000,
            image: 'https://img.icons8.com/color/96/000000/package.png'
        },
        {
            id: 'bf-gp-8',
            name: 'Dark Blade',
            description: 'Sword legendary yang sangat kuat',
            price: 700000,
            oldPrice: 850000,
            image: 'https://img.icons8.com/color/96/000000/dark-souls.png'
        }
    ],
    
    // King Legacy Gamepass
    kinglegacyGamepass: [
        {
            id: 'kl-gp-1',
            name: '2x Money',
            description: 'Mendapatkan uang 2x lebih banyak',
            price: 100000,
            oldPrice: 120000,
            image: 'https://img.icons8.com/color/96/000000/coins.png'
        },
        {
            id: 'kl-gp-2',
            name: '2x Mastery',
            description: 'Mastery meningkat 2x lebih cepat',
            price: 100000,
            oldPrice: 120000,
            image: 'https://img.icons8.com/color/96/000000/experience.png'
        },
        {
            id: 'kl-gp-3',
            name: '2x Beli',
            description: 'Harga beli item 2x lebih murah',
            price: 150000,
            oldPrice: 180000,
            image: 'https://img.icons8.com/color/96/000000/online-store.png'
        },
        {
            id: 'kl-gp-4',
            name: 'Auto Farm',
            description: 'Fitur auto farm untuk leveling otomatis',
            price: 250000,
            oldPrice: 300000,
            image: 'https://img.icons8.com/color/96/000000/find-matching-job.png'
        },
        {
            id: 'kl-gp-5',
            name: 'Paket Komplit',
            description: 'Semua gamepass King Legacy',
            price: 500000,
            oldPrice: 650000,
            image: 'https://img.icons8.com/color/96/000000/star.png'
        },
        {
            id: 'kl-gp-6',
            name: 'Stat Reset',
            description: 'Reset stat karakter tanpa kehilangan level',
            price: 80000,
            oldPrice: 100000,
            image: 'https://img.icons8.com/color/96/000000/statue.png'
        }
    ],
    
    // Jasa Joki Detail
    jokiDetail: {
        'bloxfruits': [
            {
                id: 'bf-joki-1',
                name: 'Leveling 0-100',
                description: 'Leveling dari awal hingga level 100',
                price: 50000,
                estimatedTime: '1-2 Hari'
            },
            {
                id: 'bf-joki-2',
                name: 'Leveling 0-500',
                description: 'Leveling cepat hingga level 500',
                price: 150000,
                estimatedTime: '3-5 Hari'
            },
            {
                id: 'bf-joki-3',
                name: 'Leveling 0-1000',
                description: 'Leveling hingga max level pertama',
                price: 300000,
                estimatedTime: '5-7 Hari'
            },
            {
                id: 'bf-joki-4',
                name: 'Leveling 0-2000',
                description: 'Leveling hingga max level kedua',
                price: 600000,
                estimatedTime: '10-14 Hari'
            },
            {
                id: 'bf-joki-5',
                name: 'Sea 1 to Sea 2',
                description: 'Bantu naik ke sea 2 + boss farming',
                price: 100000,
                estimatedTime: '1-2 Hari'
            },
            {
                id: 'bf-joki-6',
                name: 'Sea 2 to Sea 3',
                description: 'Bantu naik ke sea 3 + awaken fruit',
                price: 150000,
                estimatedTime: '2-3 Hari'
            },
            {
                id: 'bf-joki-7',
                name: 'Raid Service',
                description: 'Jasa raid untuk awaken buah',
                price: 25000,
                estimatedTime: 'Instant'
            },
            {
                id: 'bf-joki-8',
                name: 'Boss Farming',
                description: 'Farm boss untuk drops dan fragmen',
                price: 50000,
                estimatedTime: 'Flexibel'
            }
        ],
        'kinglegacy': [
            {
                id: 'kl-joki-1',
                name: 'Leveling 0-100',
                description: 'Leveling awal game',
                price: 40000,
                estimatedTime: '1 Hari'
            },
            {
                id: 'kl-joki-2',
                name: 'Leveling 0-500',
                description: 'Leveling hingga mid game',
                price: 120000,
                estimatedTime: '3-4 Hari'
            },
            {
                id: 'kl-joki-3',
                name: 'Leveling 0-1000',
                description: 'Leveling hingga max level',
                price: 250000,
                estimatedTime: '5-7 Hari'
            },
            {
                id: 'kl-joki-4',
                name: 'Boss Farming',
                description: 'Farm boss untuk drops dan fragmen',
                price: 40000,
                estimatedTime: 'Flexibel'
            }
        ]
    },
    
    // Robux Price Table
    robuxPrices: [
        { robux: '400 Robux', normalPrice: 65000, promoPrice: 55000, time: '5-15 menit' },
        { robux: '800 Robux', normalPrice: 120000, promoPrice: 105000, time: '5-15 menit' },
        { robux: '1,000 Robux', normalPrice: 155000, promoPrice: 150000, time: '5-15 menit', popular: true },
        { robux: '2,000 Robux', normalPrice: 310000, promoPrice: 302000, time: '10-30 menit' },
        { robux: '3,000 Robux', normalPrice: 450000, promoPrice: 425000, time: '10-30 menit' },
        { robux: '4,000 Robux', normalPrice: 600000, promoPrice: 580000, time: '15-45 menit' },
        { robux: '5,000 Robux', normalPrice: 750000, promoPrice: 720000, time: '15-45 menit' },
        { robux: '10,000 Robux', normalPrice: 1500000, promoPrice: 1491000, time: '30-60 menit', bestValue: true },
        { robux: '20,000 Robux', normalPrice: 3000000, promoPrice: 2950000, time: '1-2 jam' },
        { robux: '50,000 Robux', normalPrice: 7500000, promoPrice: 7250000, time: '3-5 jam' }
    ]
};

// Cart system
let cart = [];
let currentCartTotal = 0;

// DOM Elements
const cartButton = document.getElementById('cartButton');
const cartModal = document.getElementById('cartModal');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const cartEmpty = document.getElementById('cartEmpty');
const cartSummary = document.getElementById('cartSummary');
const cartSubtotal = document.getElementById('cartSubtotal');
const cartFee = document.getElementById('cartFee');
const cartTotal = document.getElementById('cartTotal');
const checkoutBtn = document.getElementById('checkoutBtn');
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const filterButtons = document.querySelectorAll('.filter-btn');
const quickOrderForm = document.getElementById('quickOrderForm');
const contactForm = document.getElementById('contactForm');

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initJokiServices();
    initAccounts();
    initItems();
    initGamepass();
    initAdditionalSections();
    initSwiper();
    setupEventListeners();
    updateCartCount();
});

// Initialize Joki Services dengan gambar
function initJokiServices() {
    const container = document.getElementById('jokiServices');
    if (!container) return;
    
    container.innerHTML = '';
    
    // Load all joki services
    Object.keys(servicesData.joki).forEach(game => {
        servicesData.joki[game].forEach(service => {
            const serviceElement = createServiceElement(service, game);
            container.appendChild(serviceElement);
        });
    });
}

// Create service element dengan gambar
function createServiceElement(service, game) {
    const div = document.createElement('div');
    div.className = 'service-item';
    div.dataset.game = game;
    
    // Nama game untuk display
    const gameNames = {
        'blox-fruits': 'BLOX FRUITS',
        'king-legacy': 'KING LEGACY',
        'pet-simulator': 'PET SIMULATOR X',
        'adopt-me': 'ADOPT ME!',
        'mm2': 'MURDER MYSTERY 2'
    };
    
    div.innerHTML = `
        <div class="service-image">
            <img src="${service.image}" alt="${service.name}">
        </div>
        <div class="service-content">
            <div class="service-header">
                <h3 class="service-name">${service.name}</h3>
                <span class="service-game">${gameNames[game] || game.replace('-', ' ').toUpperCase()}</span>
            </div>
            <p class="service-description">${service.description}</p>
            <ul class="service-features">
                ${service.features.map(feature => `<li><i class="fas fa-check"></i> ${feature}</li>`).join('')}
            </ul>
            <div class="service-price">
                <div>
                    <span class="price">Rp ${formatCurrency(service.price)}</span>
                    ${service.oldPrice ? `<span class="price-old">Rp ${formatCurrency(service.oldPrice)}</span>` : ''}
                </div>
                <button class="btn-primary" onclick="addToCart('joki', '${service.name.replace(/'/g, "\\'")}', ${service.price}, '${game}')">
                    <i class="fas fa-cart-plus"></i> Pesan
                </button>
            </div>
        </div>
    `;
    
    return div;
}

// Initialize Accounts dengan gambar
function initAccounts() {
    const container = document.querySelector('.accounts-grid');
    if (!container) return;
    
    container.innerHTML = servicesData.accounts.map(account => `
        <div class="account-card">
            <div class="card-image">
                <img src="${account.image}" alt="${account.name}">
            </div>
            <div class="card-content">
                <span class="card-badge">${account.features[0]}</span>
                <h3>${account.name}</h3>
                <p>${account.description}</p>
                <ul class="card-features">
                    ${account.features.map(feature => `<li><i class="fas fa-check"></i> ${feature}</li>`).join('')}
                </ul>
                <div class="card-price">
                    <div>
                        <span class="price">Rp ${formatCurrency(account.price)}</span>
                        ${account.oldPrice ? `<span class="price-old">Rp ${formatCurrency(account.oldPrice)}</span>` : ''}
                    </div>
                    <button class="btn-primary" onclick="addToCart('account', '${account.name.replace(/'/g, "\\'")}', ${account.price})">
                        <i class="fas fa-cart-plus"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Initialize Items dengan gambar
function initItems() {
    const container = document.querySelector('.items-grid');
    if (!container) return;
    
    container.innerHTML = servicesData.items.map(item => `
        <div class="item-card">
            <div class="card-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="card-content">
                <span class="card-badge">${item.rarity}</span>
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                ${item.demand !== '-' ? `<p><strong>Demand:</strong> ${item.demand}</p>` : ''}
                <div class="card-price">
                    <div>
                        ${item.price > 0 ? `
                            <span class="price">Rp ${formatCurrency(item.price)}</span>
                            ${item.oldPrice > 0 ? `<span class="price-old">Rp ${formatCurrency(item.oldPrice)}</span>` : ''}
                        ` : `
                            <span class="price" style="color: var(--gray);">Coming Soon</span>
                        `}
                    </div>
                    ${item.price > 0 ? `
                        <button class="btn-primary" onclick="addToCart('item', '${item.name.replace(/'/g, "\\'")}', ${item.price})">
                            <i class="fas fa-cart-plus"></i>
                        </button>
                    ` : `
                        <button class="btn-secondary" disabled style="opacity: 0.6; cursor: not-allowed;">
                            <i class="fas fa-clock"></i>
                        </button>
                    `}
                </div>
            </div>
        </div>
    `).join('');
}

// Initialize Gamepass dengan gambar
function initGamepass() {
    const container = document.querySelector('.gamepass-grid');
    if (!container) return;
    
    container.innerHTML = servicesData.gamepass.map(gamepass => `
        <div class="gamepass-card">
            <div class="card-image" style="background: linear-gradient(135deg, var(--primary), var(--accent));">
                <img src="${gamepass.image}" alt="${gamepass.name}">
            </div>
            <div class="card-content">
                <span class="card-badge">${gamepass.game}</span>
                <h3>${gamepass.name}</h3>
                <p>${gamepass.description}</p>
                <p><strong>Includes:</strong> ${gamepass.includes.join(', ')}</p>
                <div class="card-price">
                    <div>
                        <span class="price">Rp ${formatCurrency(gamepass.price)}</span>
                        ${gamepass.oldPrice ? `<span class="price-old">Rp ${formatCurrency(gamepass.oldPrice)}</span>` : ''}
                    </div>
                    <button class="btn-primary" onclick="addToCart('gamepass', '${gamepass.name.replace(/'/g, "\\'")}', ${gamepass.price}, '${gamepass.game}')">
                        <i class="fas fa-cart-plus"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Initialize Additional Sections (baru ditambahkan)
function initAdditionalSections() {
    initBloxFruitsGamepass();
    initKingLegacyGamepass();
    initJokiDetail();
    initRobuxPriceTable();
    setupAdditionalTabs();
}

// Initialize Blox Fruits Gamepass
function initBloxFruitsGamepass() {
    const container = document.querySelector('#bloxfruits-gamepass .gamepass-detailed-grid');
    if (!container) return;
    
    container.innerHTML = additionalData.bloxfruitsGamepass.map((gamepass, index) => {
        const isPopular = index === 6; // Paket All Gamepass adalah yang paling laris
        return `
            <div class="gamepass-item-card ${isPopular ? 'popular' : ''}">
                ${isPopular ? '<div class="gamepass-badge">PALING LARIS</div>' : ''}
                <div class="gamepass-icon" style="background: linear-gradient(135deg, #FF6B6B, #FFE66D);">
                    <img src="${gamepass.image}" alt="${gamepass.name}">
                </div>
                <h3>${gamepass.name}</h3>
                <p>${gamepass.description}</p>
                <div class="gamepass-price">
                    <span class="price">Rp ${formatCurrency(gamepass.price)}</span>
                    <span class="price-old">Rp ${formatCurrency(gamepass.oldPrice)}</span>
                </div>
                <button class="btn-primary btn-small" onclick="addToCart('gamepass', 'Blox Fruits ${gamepass.name}', ${gamepass.price})">
                    <i class="fas fa-cart-plus"></i> Tambah
                </button>
            </div>
        `;
    }).join('');
}

// Initialize King Legacy Gamepass
function initKingLegacyGamepass() {
    const container = document.querySelector('#kinglegacy-gamepass .gamepass-detailed-grid');
    if (!container) return;
    
    container.innerHTML = additionalData.kinglegacyGamepass.map((gamepass, index) => {
        const isPopular = index === 4; // Paket Komplit adalah yang terpopuler
        return `
            <div class="gamepass-item-card ${isPopular ? 'popular' : ''}">
                ${isPopular ? '<div class="gamepass-badge">TERPOPULER</div>' : ''}
                <div class="gamepass-icon" style="background: linear-gradient(135deg, #FF9A9E, #FAD0C4);">
                    <img src="${gamepass.image}" alt="${gamepass.name}">
                </div>
                <h3>${gamepass.name}</h3>
                <p>${gamepass.description}</p>
                <div class="gamepass-price">
                    <span class="price">Rp ${formatCurrency(gamepass.price)}</span>
                    <span class="price-old">Rp ${formatCurrency(gamepass.oldPrice)}</span>
                </div>
                <button class="btn-primary btn-small" onclick="addToCart('gamepass', 'King Legacy ${gamepass.name}', ${gamepass.price})">
                    <i class="fas fa-cart-plus"></i> Tambah
                </button>
            </div>
        `;
    }).join('');
}

// Initialize Joki Detail
function initJokiDetail() {
    const bloxfruitsContainer = document.querySelector('#bloxfruits-joki .joki-services-grid');
    const kinglegacyContainer = document.querySelector('#kinglegacy-joki .joki-services-grid');
    
    if (bloxfruitsContainer) {
        bloxfruitsContainer.innerHTML = additionalData.jokiDetail.bloxfruits.map((service, index) => {
            const isPopular = index === 2; // Leveling 0-1000 adalah yang paling diminati
            return `
                <div class="joki-service-card ${isPopular ? 'popular' : ''}">
                    ${isPopular ? '<div class="popular-badge">PALING DIMINATI</div>' : ''}
                    <h4>${service.name}</h4>
                    <p>${service.description}</p>
                    <div class="joki-price">
                        <span class="price">Rp ${formatCurrency(service.price)}</span>
                        <span class="time"><i class="fas fa-clock"></i> ${service.estimatedTime}</span>
                    </div>
                    <button class="btn-primary btn-small" onclick="addToCart('joki', '${service.name}', ${service.price})">
                        Order
                    </button>
                </div>
            `;
        }).join('');
    }
    
    if (kinglegacyContainer) {
        kinglegacyContainer.innerHTML = additionalData.jokiDetail.kinglegacy.map((service, index) => {
            const isPopular = index === 3; // Boss Farming adalah yang recommended
            return `
                <div class="joki-service-card ${isPopular ? 'popular' : ''}">
                    ${isPopular ? '<div class="popular-badge">RECOMMENDED</div>' : ''}
                    <h4>${service.name}</h4>
                    <p>${service.description}</p>
                    <div class="joki-price">
                        <span class="price">${service.name.includes('per jam') ? 'Rp ' + formatCurrency(service.price) + '/jam' : 'Rp ' + formatCurrency(service.price)}</span>
                        <span class="time"><i class="fas fa-clock"></i> ${service.estimatedTime}</span>
                    </div>
                    <button class="btn-primary btn-small" onclick="addToCart('joki', '${service.name}', ${service.price})">
                        Order
                    </button>
                </div>
            `;
        }).join('');
    }
}

// Initialize Robux Price Table
function initRobuxPriceTable() {
    const tableBody = document.querySelector('.robux-price-table tbody');
    if (!tableBody) return;
    
    tableBody.innerHTML = additionalData.robuxPrices.map(item => {
        const isPopular = item.popular || false;
        const isBestValue = item.bestValue || false;
        const rowClass = isPopular ? 'popular-row' : isBestValue ? 'best-value' : '';
        
        return `
            <tr class="${rowClass}">
                <td><strong>${item.robux}</strong> ${isPopular ? '<span class="badge">POPULER</span>' : ''} ${isBestValue ? '<span class="badge">BEST VALUE</span>' : ''}</td>
                <td><span class="price-old">Rp ${formatCurrency(item.normalPrice)}</span></td>
                <td><span class="price">Rp ${formatCurrency(item.promoPrice)}</span></td>
                <td>${item.time}</td>
                <td><button class="btn-primary btn-small" onclick="addToCart('robux', '${item.robux}', ${item.promoPrice})">Beli</button></td>
            </tr>
        `;
    }).join('');
}

// Setup Additional Tabs
function setupAdditionalTabs() {
    // Joki Game Tabs
    const jokiTabs = document.querySelectorAll('.joki-tab');
    jokiTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const game = tab.dataset.game;
            
            // Remove active class from all tabs
            jokiTabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Hide all game content
            document.querySelectorAll('.joki-game-content').forEach(content => {
                content.classList.remove('active');
            });
            
            // Show selected game content
            const gameContent = document.getElementById(`${game}-joki`);
            if (gameContent) {
                gameContent.classList.add('active');
            }
        });
    });
    
    // Robux Method Tabs
    const robuxTabs = document.querySelectorAll('.robux-tab');
    robuxTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const method = tab.dataset.method;
            
            // Remove active class from all tabs
            robuxTabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Show notification about selected method
            const methodNames = {
                'groupfunds': 'Group Funds',
                'gamepass': 'Gamepass',
                'clothing': 'Clothing',
                'premium': 'Premium Payout'
            };
            
            showNotification(`Metode ${methodNames[method] || method} dipilih. Proses transaksi tetap sama.`);
        });
    });
}

// Initialize Swiper
function initSwiper() {
    if (typeof Swiper !== 'undefined') {
        const swiper = new Swiper('.swiper', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                }
            }
        });
    }
}

// Setup Event Listeners
function setupEventListeners() {
    // Cart Modal
    if (cartButton) cartButton.addEventListener('click', showCart);
    if (closeCart) closeCart.addEventListener('click', hideCart);
    
    // Close modal on outside click
    window.addEventListener('click', (e) => {
        if (e.target === cartModal) hideCart();
    });
    
    // Mobile Menu
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            if (navMenu) navMenu.classList.toggle('active');
        });
    }
    
    // Filter Buttons
    if (filterButtons) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                button.classList.add('active');
                
                const game = button.dataset.game;
                filterServices(game);
            });
        });
    }
    
    // Quick Order Form
    if (quickOrderForm) {
        quickOrderForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const serviceType = document.getElementById('serviceType')?.value;
            const username = quickOrderForm[1]?.value;
            const whatsapp = quickOrderForm[2]?.value;
            
            if (!serviceType || !username || !whatsapp) {
                alert('Harap lengkapi semua data!');
                return;
            }
            
            sendWhatsAppOrder(serviceType, username, whatsapp);
            quickOrderForm.reset();
        });
    }
    
    // Contact Form
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Pesan Anda telah terkirim! Kami akan membalas segera.');
            contactForm.reset();
        });
    }
    
    // Checkout Button
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', checkout);
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
            
            // Close mobile menu if open
            if (navMenu) navMenu.classList.remove('active');
        });
    });
}

// Filter Services
function filterServices(game) {
    const services = document.querySelectorAll('.service-item');
    
    services.forEach(service => {
        if (game === 'all' || service.dataset.game === game) {
            service.style.display = 'flex';
        } else {
            service.style.display = 'none';
        }
    });
}

// Add to Cart
function addToCart(type, name, price, game = '') {
    const item = {
        id: Date.now(),
        type,
        name,
        price,
        game,
        quantity: 1
    };
    
    // Check if item already in cart
    const existingItem = cart.find(i => i.name === name && i.type === type);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push(item);
    }
    
    updateCart();
    showCart();
    
    // Show notification
    showNotification(`${name} ditambahkan ke keranjang!`);
}

// Remove from Cart
function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    updateCart();
}

// Update Cart Quantity
function updateQuantity(itemId, change) {
    const item = cart.find(i => i.id === itemId);
    if (item) {
        item.quantity += change;
        if (item.quantity < 1) {
            removeFromCart(itemId);
        } else {
            updateCart();
        }
    }
}

// Update Cart Display
function updateCart() {
    updateCartCount();
    updateCartItems();
    updateCartSummary();
}

// Update Cart Count
function updateCartCount() {
    const cartBadge = document.querySelector('.cart-badge');
    if (cartBadge) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartBadge.textContent = totalItems;
    }
}

// Update Cart Items
function updateCartItems() {
    if (!cartItems || !cartEmpty || !cartSummary) return;
    
    if (cart.length === 0) {
        cartEmpty.style.display = 'block';
        cartItems.style.display = 'none';
        cartSummary.style.display = 'none';
        return;
    }
    
    cartEmpty.style.display = 'none';
    cartItems.style.display = 'block';
    cartSummary.style.display = 'block';
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>${item.game ? `Game: ${item.game}` : ''} | Rp ${formatCurrency(item.price)}</p>
            </div>
            <div class="cart-item-actions">
                <div class="cart-item-quantity">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
                <button class="remove-item" onclick="removeFromCart(${item.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `).join('');
}

// Update Cart Summary
function updateCartSummary() {
    if (!cartSubtotal || !cartFee || !cartTotal) return;
    
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const fee = subtotal * 0.05; // 5% admin fee
    const total = subtotal + fee;
    
    currentCartTotal = total;
    
    cartSubtotal.textContent = `Rp ${formatCurrency(subtotal)}`;
    cartFee.textContent = `Rp ${formatCurrency(fee)}`;
    cartTotal.textContent = `Rp ${formatCurrency(total)}`;
}

// Show Cart
function showCart() {
    if (cartModal) {
        cartModal.style.display = 'flex';
    }
}

// Hide Cart
function hideCart() {
    if (cartModal) {
        cartModal.style.display = 'none';
    }
}

// Checkout
function checkout() {
    if (cart.length === 0) {
        alert('Keranjang belanja kosong!');
        return;
    }
    
    let message = `Halo, saya ingin checkout item berikut:%0A%0A`;
    
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        message += `${index + 1}. ${item.name}%0A`;
        message += `   Jumlah: ${item.quantity} x Rp ${formatCurrency(item.price)}%0A`;
        message += `   Subtotal: Rp ${formatCurrency(itemTotal)}%0A%0A`;
    });
    
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const fee = subtotal * 0.05;
    const total = subtotal + fee;
    
    message += `📊 *Ringkasan Pembayaran:*%0A`;
    message += `Subtotal: Rp ${formatCurrency(subtotal)}%0A`;
    message += `Biaya Admin (5%): Rp ${formatCurrency(fee)}%0A`;
    message += `*TOTAL: Rp ${formatCurrency(total)}*%0A%0A`;
    message += `Silakan berikan data diri Anda untuk proses pemesanan.`;
    
    // Ganti dengan nomor WhatsApp Anda
    const whatsappURL = `https://wa.me/62895331688882?text=${message}`;
    
    window.open(whatsappURL, '_blank');
    hideCart();
    
    // Clear cart after checkout
    cart = [];
    updateCart();
}

// Send WhatsApp Order
function sendWhatsAppOrder(serviceType, username, whatsapp) {
    const serviceNames = {
        'joki': 'Jasa Joki',
        'account': 'Akun Roblox',
        'robux': 'Robux',
        'gamepass': 'Gamepass',
        'limited': 'Item Limited',
        'group': 'Roblox Group',
        'development': 'Game Development'
    };
    
    let message = `Halo, saya ingin order layanan via form cepat:%0A%0A`;
    message += `📋 *Data Pemesan:*%0A`;
    message += `Layanan: ${serviceNames[serviceType] || serviceType}%0A`;
    message += `Username Roblox: ${username}%0A`;
    message += `No WhatsApp: ${whatsapp}%0A%0A`;
    message += `Silakan berikan informasi lengkap mengenai layanan yang ingin dipesan.`;
    
    // Ganti dengan nomor WhatsApp Anda
    const whatsappURL = `https://wa.me/62895331688882?text=${message}`;
    
    window.open(whatsappURL, '_blank');
}

// Show Notification
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>${message}</span>
    `;
    
    // Style notification
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--success);
        color: white;
        padding: 15px 20px;
        border-radius: var(--border-radius);
        display: flex;
        align-items: center;
        gap: 10px;
        z-index: 3000;
        box-shadow: var(--shadow-lg);
        animation: slideIn 0.3s ease, fadeOut 0.3s ease 2.7s;
    `;
    
    // Add to body
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 3000);
}

// Format Currency
function formatCurrency(amount) {
    return amount.toLocaleString('id-ID');
}

// Add CSS for notification animation dan style tambahan
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes fadeOut {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
    
    /* Style untuk service item dengan gambar */
    .service-item {
        display: flex;
        flex-direction: column;
        background: white;
        border-radius: var(--border-radius);
        overflow: hidden;
        box-shadow: var(--shadow);
        transition: var(--transition);
    }
    
    .service-item:hover {
        transform: translateY(-5px);
        box-shadow: var(--shadow-hover);
    }
    
    .service-image {
        height: 180px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, var(--primary), var(--accent));
    }
    
    .service-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    .service-content {
        padding: 1.5rem;
        flex: 1;
        display: flex;
        flex-direction: column;
    }
    
    .service-header {
        margin-bottom: 1rem;
    }
    
    .service-name {
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
        color: var(--dark);
    }
    
    .service-game {
        display: inline-block;
        background: var(--light);
        color: var(--primary);
        padding: 3px 12px;
        border-radius: 20px;
        font-size: 0.8rem;
        font-weight: 500;
    }
    
    .service-description {
        color: var(--gray);
        margin-bottom: 1rem;
        font-size: 0.95rem;
        flex: 1;
    }
    
    .service-features {
        list-style: none;
        margin-bottom: 1.5rem;
    }
    
    .service-features li {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 0.5rem;
        font-size: 0.9rem;
    }
    
    .service-features i {
        color: var(--success);
        font-size: 0.9rem;
    }
    
    .service-price {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 1.5rem;
        border-top: 1px solid var(--gray-light);
    }
    
    /* Style untuk gambar di card */
    .card-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    /* Responsive untuk service grid */
    @media (max-width: 768px) {
        .service-item {
            flex-direction: column;
        }
        
        .service-image {
            height: 150px;
        }
    }
    
    /* Style untuk gamepass detail */
    .gamepass-detailed-grid {
        margin-top: 2rem;
    }
    
    .gamepass-item-card .btn-small {
        padding: 8px 16px;
        font-size: 0.9rem;
        width: 100%;
    }
    
    /* Style untuk joki detail */
    .joki-service-card .btn-small {
        width: 100%;
        margin-top: 10px;
    }
    
    /* Style untuk robux table */
    .robux-price-table {
        width: 100%;
        border-collapse: collapse;
    }
    
    .robux-price-table th {
        text-align: left;
        padding: 12px;
        background-color: #f8f9fa;
        font-weight: 600;
    }
    
    .robux-price-table td {
        padding: 12px;
        border-top: 1px solid #dee2e6;
    }
    
    .popular-row {
        background-color: #fff9e6;
    }
    
    .best-value {
        background-color: #e6f7ff;
    }
    
    .badge {
        display: inline-block;
        padding: 3px 8px;
        font-size: 0.7rem;
        font-weight: bold;
        border-radius: 10px;
        color: white;
        margin-left: 5px;
    }
    
    .popular-row .badge {
        background-color: #ff6b6b;
    }
    
    .best-value .badge {
        background-color: #1dd1a1;
    }
`;
document.head.appendChild(style);