// ===== ТОВАРЫ =====
const products = [
    { id: 1, name: "Трекер привычек", price: 790, rating: 4.8, category: "Товары", desc: "Планер на 90 дней с трекингом воды, сна и спорта. Поможет сформировать полезные привычки и не сбиваться с пути.", imgUrl: "img/2.jpg", stock: 25, specs: { "Формат": "A5, 90 страниц", "Материал": "Переработанная бумага", "Вес": "250 г", "Страна": "Россия" }, reviews: [{ name: "Анна", rating: 5, text: "Отличный трекер! Очень мотивирует" }, { name: "Михаил", rating: 4, text: "Хорошее качество, но маловато страниц" }] },
    { id: 2, name: "Марафон Осознанное утро", price: 1490, rating: 4.9, category: "Услуги", desc: "21 день онлайн-курса с куратором. Научитесь просыпаться легко и начинать день с пользой.", imgUrl: "img/4.jpg", stock: 50, specs: { "Длительность": "21 день", "Формат": "Видеоуроки", "Доступ": "Навсегда", "Куратор": "Екатерина М." }, reviews: [{ name: "Ольга", rating: 5, text: "Жизнь изменилась! Спасибо!" }, { name: "Дмитрий", rating: 5, text: "Очень полезный марафон" }] },
    { id: 3, name: "Набор для перекуса", price: 890, rating: 4.7, category: "Товары", desc: "Экологичный ланч-бокс + рецепты здоровых перекусов. Идеально для офиса и учёбы.", imgUrl: "img/3.jpg", stock: 15, specs: { "Объем": "800 мл", "Материал": "Бамбук", "Вес": "320 г", "В комплекте": "5 рецептов" }, reviews: [{ name: "Елена", rating: 5, text: "Очень удобный, беру с собой на работу" }] },
    { id: 4, name: "Челлендж 10 000 шагов", price: 0, rating: 5.0, category: "Бесплатно", desc: "Сообщество и трекер в Telegram. Ходите больше вместе с единомышленниками!", imgUrl: "img/1.webp", stock: 999, specs: { "Платформа": "Telegram", "Длительность": "30 дней", "Цена": "Бесплатно", "Старт": "Каждое 1 число" }, reviews: [{ name: "Павел", rating: 5, text: "Прошёл челлендж, похудел на 3 кг!" }] },
    { id: 5, name: "Курс Сон-гигиена", price: 1990, rating: 4.9, category: "Услуги", desc: "8 недель улучшения качества сна. Научитесь засыпать быстро и высыпаться.", imgUrl: "img/6.jpg", stock: 30, specs: { "Длительность": "8 недель", "Лекций": "16", "Бонус": "Гайд по сну", "Доступ": "Навсегда" }, reviews: [{ name: "Светлана", rating: 5, text: "Спать стала лучше, спасибо!" }] },
    { id: 6, name: "Медитационный коврик", price: 1250, rating: 4.6, category: "Товары", desc: "Эко-коврик для йоги и медитации. Противоскользящее покрытие.", imgUrl: "img/5.jpg", stock: 10, specs: { "Размер": "183x68 см", "Толщина": "6 мм", "Материал": "Натуральный каучук", "Вес": "1.2 кг" }, reviews: [{ name: "Ирина", rating: 5, text: "Отличный коврик, не скользит" }] },
    { id: 7, name: "Курс Правильное питание", price: 2490, rating: 4.8, category: "Услуги", desc: "6 недель сбалансированного меню. Научитесь питаться вкусно и полезно.", imgUrl: "img/7.jpg", stock: 20, specs: { "Длительность": "6 недель", "Рецептов": "50+", "Бонус": "План питания", "Доступ": "Навсегда" }, reviews: [{ name: "Марина", rating: 5, text: "Похудела на 5 кг за курс!" }] },
    { id: 8, name: "Бутылка для воды", price: 450, rating: 4.5, category: "Товары", desc: "Эко-бутылка с отметками времени. Поможет пить воду в течение дня.", imgUrl: "img/8.webp", stock: 40, specs: { "Объем": "500 мл", "Материал": "Стекло", "Вес": "350 г", "Цвет": "Прозрачный" }, reviews: [{ name: "Алексей", rating: 4, text: "Хорошая бутылка, удобно" }] },
    { id: 9, name: "Дневник благодарности", price: 590, rating: 4.7, category: "Товары", desc: "Ежедневник для практики благодарности. Поможет видеть хорошее каждый день.", imgUrl: "img/9.jpg", stock: 35, specs: { "Формат": "A6, 120 страниц", "Бумага": "Офсет", "Обложка": "Твердая", "Страна": "Россия" }, reviews: [{ name: "Татьяна", rating: 5, text: "Очень душевный дневник" }] },
    { id: 10, name: "Марафон Здоровый позвоночник", price: 1790, rating: 4.9, category: "Услуги", desc: "30 дней упражнений для спины. Забудьте о болях в спине!", imgUrl: "img/10.webp", stock: 25, specs: { "Длительность": "30 дней", "Упражнений": "25", "Уровень": "Любой", "Доступ": "Навсегда" }, reviews: [{ name: "Владимир", rating: 5, text: "Спина перестала болеть!" }] },
    { id: 11, name: "Аромалампа", price: 890, rating: 4.6, category: "Товары", desc: "Керамическая аромалампа с маслами. Создайте атмосферу уюта и спокойствия.", imgUrl: "img/11.webp", stock: 12, specs: { "Материал": "Керамика", "Питание": "USB", "Комплект": "3 масла", "Цвет": "Белый" }, reviews: [{ name: "Наталья", rating: 5, text: "Очень красивая, создаёт уют" }] },
    { id: 12, name: "Курс Антистресс", price: 1590, rating: 4.8, category: "Услуги", desc: "Техники релаксации и управления стрессом. Научитесь сохранять спокойствие в любой ситуации.", imgUrl: "img/12.webp", stock: 28, specs: { "Длительность": "4 недели", "Техник": "15", "Бонус": "Аудиомедитации", "Доступ": "Навсегда" }, reviews: [{ name: "Ксения", rating: 5, text: "Стала спокойнее относиться к работе" }] }
];

let currentUser = {
    isLoggedIn: true,
    name: "Александр",
    email: "alex@habitflow.ru",
    avatar: "https://ui-avatars.com/api/?background=2d6a4f&color=fff&name=Александр",
    joinDate: "2024-01-15",
    habits: [
        { name: "Утренняя зарядка", streak: 12, total: 45, icon: "fas fa-running" },
        { name: "Медитация", streak: 8, total: 30, icon: "fas fa-brain" },
        { name: "Чтение книг", streak: 5, total: 20, icon: "fas fa-book" },
        { name: "Пить воду", streak: 20, total: 50, icon: "fas fa-tint" }
    ],
    orders: [
        { id: "ORD-001", date: "2024-01-20", total: 1490, status: "Доставлен", items: ["Марафон Осознанное утро"] },
        { id: "ORD-002", date: "2024-02-10", total: 1840, status: "Доставлен", items: ["Трекер привычек", "Бутылка для воды"] },
        { id: "ORD-003", date: "2024-03-01", total: 990, status: "В пути", items: ["Дневник благодарности"] }
    ]
};

let adminProducts = [...products];
let cart = [];

// ===== ФУНКЦИИ РАБОТЫ С LOCALSTORAGE =====
function saveCartToLocalStorage() {
    localStorage.setItem('habitflow_cart', JSON.stringify(cart));
}

function loadCartFromLocalStorage() {
    const saved = localStorage.getItem('habitflow_cart');
    if (saved) {
        try {
            cart = JSON.parse(saved);
        } catch(e) {
            cart = [];
        }
    } else {
        cart = [];
    }
    updateCartCount();
}

// ===== КОРЗИНА =====
function addToCart(id, name, price, quantity = 1) {
    const existing = cart.find(i => i.id === id);
    if (existing) {
        existing.quantity += quantity;
    } else {
        cart.push({ id: id, name: name, price: price, quantity: quantity });
    }
    saveCartToLocalStorage();
    updateCartCount();
    updateCartTotal();
    showToast("Добавлено: " + name);
}

function updateCartCount() {
    const totalItems = cart.reduce((sum, i) => sum + i.quantity, 0);
    document.querySelectorAll("#cartCount").forEach(el => {
        if (el) el.innerText = totalItems;
    });
}

function updateCartTotal() {
    const total = cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);
    const totalSpan = document.getElementById("cartTotal");
    if (totalSpan) totalSpan.innerText = total + " ₽";
}

function clearCart() {
    if (cart.length > 0) {
        cart = [];
        saveCartToLocalStorage();
        updateCartCount();
        updateCartTotal();
        if (document.getElementById("cartItemsList")) renderCartPage();
        showToast("Корзина очищена");
    }
}

function renderCartPage() {
    const container = document.getElementById("cartItemsList");
    if (!container) return;
    
    if (cart.length === 0) {
        container.innerHTML = '<div class="empty-cart"><i class="fas fa-shopping-basket"></i><p>Корзина пуста</p><a href="catalog.html" class="btn-primary">Перейти в каталог</a></div>';
        updateCartTotal();
        return;
    }
    
    let html = '';
    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        html += `
            <div class="cart-item" data-id="${item.id}">
                <div class="cart-item-info">
                    <div class="cart-item-name">${escapeHtml(item.name)}</div>
                    <div class="cart-item-price">${item.price} ₽ / шт</div>
                </div>
                <div class="cart-item-quantity">
                    <button class="cart-dec" data-id="${item.id}">-</button>
                    <span class="cart-qty">${item.quantity}</span>
                    <button class="cart-inc" data-id="${item.id}">+</button>
                </div>
                <div class="cart-item-total">${item.price * item.quantity} ₽</div>
                <button class="cart-item-remove" data-id="${item.id}"><i class="fas fa-trash-alt"></i></button>
            </div>
        `;
    }
    container.innerHTML = html;
    
    // Обработчики для кнопок + и -
    document.querySelectorAll(".cart-inc").forEach(btn => {
        btn.addEventListener("click", function(e) {
            e.stopPropagation();
            const id = parseInt(this.dataset.id);
            const item = cart.find(i => i.id === id);
            if (item) {
                item.quantity++;
                saveCartToLocalStorage();
                updateCartCount();
                updateCartTotal();
                renderCartPage();
            }
        });
    });
    
    document.querySelectorAll(".cart-dec").forEach(btn => {
        btn.addEventListener("click", function(e) {
            e.stopPropagation();
            const id = parseInt(this.dataset.id);
            const index = cart.findIndex(i => i.id === id);
            if (index !== -1) {
                if (cart[index].quantity > 1) {
                    cart[index].quantity--;
                } else {
                    cart.splice(index, 1);
                }
                saveCartToLocalStorage();
                updateCartCount();
                updateCartTotal();
                renderCartPage();
            }
        });
    });
    
    document.querySelectorAll(".cart-item-remove").forEach(btn => {
        btn.addEventListener("click", function(e) {
            e.stopPropagation();
            const id = parseInt(this.dataset.id);
            cart = cart.filter(i => i.id !== id);
            saveCartToLocalStorage();
            updateCartCount();
            updateCartTotal();
            renderCartPage();
        });
    });
    
    updateCartTotal();
}

function initCartPage() {
    loadCartFromLocalStorage();
    renderCartPage();
    
    const clearBtn = document.getElementById("clearCartBtn");
    if (clearBtn) {
        clearBtn.addEventListener("click", function() {
            clearCart();
        });
    }
    
    const checkoutBtn = document.getElementById("checkoutBtn");
    if (checkoutBtn) {
        checkoutBtn.addEventListener("click", function() {
            if (cart.length > 0) {
                showToast("Заказ оформлен! Спасибо за покупку!");
                cart = [];
                saveCartToLocalStorage();
                updateCartCount();
                updateCartTotal();
                renderCartPage();
            } else {
                showToast("Корзина пуста");
            }
        });
    }
    
    // Калькулятор скидки
    const calcBtn = document.getElementById("applyCalcDemo");
    const qtyI = document.getElementById("calcQty");
    const priceI = document.getElementById("calcPrice");
    const discI = document.getElementById("calcDisc");
    const resSpan = document.getElementById("calcDemoResult");
    const applyToAll = document.getElementById("applyToAll");
    
    function updateCalc() {
        let q = parseInt(qtyI?.value) || 1;
        let p = parseInt(priceI?.value) || 0;
        let d = parseInt(discI?.value) || 0;
        if (resSpan) resSpan.innerText = (q * p * (1 - d / 100)).toFixed(2);
    }
    
    if (qtyI) qtyI.addEventListener("input", updateCalc);
    if (priceI) priceI.addEventListener("input", updateCalc);
    if (discI) discI.addEventListener("input", updateCalc);
    
    if (calcBtn) {
        calcBtn.addEventListener("click", function() {
            if (cart.length > 0) {
                let newPrice = (parseInt(priceI?.value) || 0) * (1 - (parseInt(discI?.value) || 0) / 100);
                cart[0].price = parseFloat(newPrice.toFixed(2));
                saveCartToLocalStorage();
                updateCartTotal();
                renderCartPage();
                showToast("Цена первого товара обновлена");
            } else {
                showToast("Корзина пуста, добавьте товар");
            }
        });
    }
    
    if (applyToAll) {
        applyToAll.addEventListener("click", function() {
            if (cart.length > 0) {
                const discount = (parseInt(discI?.value) || 0) / 100;
                for (let i = 0; i < cart.length; i++) {
                    cart[i].price = parseFloat((cart[i].price * (1 - discount)).toFixed(2));
                }
                saveCartToLocalStorage();
                updateCartTotal();
                renderCartPage();
                showToast("Скидка применена ко всем товарам");
            } else {
                showToast("Корзина пуста");
            }
        });
    }
    
    updateCalc();
}

// ===== КАТАЛОГ =====
let currentFilter = "all";
let currentSort = "default";
let searchQuery = "";
let searchDebounceTimer = null;

function filterAndSortProducts() {
    let filtered = products.filter(p => {
        if (currentFilter !== "all" && p.category !== currentFilter) return false;
        if (searchQuery && !p.name.toLowerCase().includes(searchQuery.toLowerCase()) && !p.desc.toLowerCase().includes(searchQuery.toLowerCase())) return false;
        return true;
    });
    if (currentSort === "price-asc") filtered.sort((a, b) => a.price - b.price);
    else if (currentSort === "price-desc") filtered.sort((a, b) => b.price - a.price);
    else if (currentSort === "rating") filtered.sort((a, b) => b.rating - a.rating);
    return filtered;
}

function renderCatalog() {
    let filtered = filterAndSortProducts();
    if (filtered.length === 0) {
        return '<div class="no-results"><i class="fas fa-search" style="font-size:3rem;"></i><h3>Ничего не найдено</h3></div>';
    }
    let html = '';
    for (let i = 0; i < filtered.length; i++) {
        const prod = filtered[i];
        html += `
            <div class="product-card" data-id="${prod.id}">
                <div class="product-image">
                    <img src="${prod.imgUrl}" alt="${escapeHtml(prod.name)}" loading="lazy" onerror="this.src='https://placehold.co/600x500/e8f3e8/2d6a4f?text=HabitFlow'">
                    ${prod.price === 0 ? '<span class="product-badge"><i class="fas fa-gift"></i> Бесплатно</span>' : ''}
                </div>
                <div class="product-info">
                    <div class="product-category"><i class="fas fa-tag"></i> ${prod.category}</div>
                    <div class="product-name">${escapeHtml(prod.name)}</div>
                    <div class="rating">${'★'.repeat(Math.floor(prod.rating))}${'☆'.repeat(5 - Math.floor(prod.rating))} ${prod.rating}</div>
                    <div class="product-desc">${escapeHtml(prod.desc.substring(0, 70))}${prod.desc.length > 70 ? '...' : ''}</div>
                    <div class="product-price">${prod.price === 0 ? "Бесплатно" : prod.price + " ₽"}</div>
                    <button class="btn-primary add-cart-btn" data-id="${prod.id}" data-name="${escapeHtml(prod.name)}" data-price="${prod.price}"><i class="fas fa-cart-plus"></i> В корзину</button>
                </div>
            </div>
        `;
    }
    return html;
}

function attachCatalogEvents() {
    const searchInput = document.getElementById("searchInput");
    const filterSelect = document.getElementById("filterSelect");
    const sortSelect = document.getElementById("sortSelect");
    const resetBtn = document.getElementById("resetFiltersBtn");
    const container = document.getElementById("catalogContainer");
    
    function updateCatalog() {
        if (container) {
            container.innerHTML = renderCatalog();
            attachCatalogEvents();
        }
    }
    
    if (searchInput) {
        searchInput.value = searchQuery;
        searchInput.addEventListener("input", function(e) {
            if (searchDebounceTimer) clearTimeout(searchDebounceTimer);
            searchDebounceTimer = setTimeout(function() {
                searchQuery = e.target.value;
                updateCatalog();
            }, 300);
        });
    }
    if (filterSelect) {
        filterSelect.value = currentFilter;
        filterSelect.addEventListener("change", function(e) {
            currentFilter = e.target.value;
            updateCatalog();
        });
    }
    if (sortSelect) {
        sortSelect.value = currentSort;
        sortSelect.addEventListener("change", function(e) {
            currentSort = e.target.value;
            updateCatalog();
        });
    }
    if (resetBtn) {
        resetBtn.addEventListener("click", function() {
            searchQuery = "";
            currentFilter = "all";
            currentSort = "default";
            if (searchInput) searchInput.value = "";
            if (filterSelect) filterSelect.value = "all";
            if (sortSelect) sortSelect.value = "default";
            updateCatalog();
        });
    }
    
    const addButtons = document.querySelectorAll(".add-cart-btn");
    for (let i = 0; i < addButtons.length; i++) {
        const btn = addButtons[i];
        btn.addEventListener("click", function(e) {
            e.stopPropagation();
            const id = parseInt(this.dataset.id);
            const name = this.dataset.name;
            const price = parseInt(this.dataset.price);
            addToCart(id, name, price, 1);
        });
    }
    
    const productCards = document.querySelectorAll(".product-card");
    for (let i = 0; i < productCards.length; i++) {
        const card = productCards[i];
        card.addEventListener("click", function(e) {
            if (e.target.classList.contains("add-cart-btn") || e.target.closest(".add-cart-btn")) return;
            window.location.href = "product-detail.html?id=" + this.dataset.id;
        });
    }
}

// ===== СТРАНИЦА ДЕТАЛЕЙ ТОВАРА =====
function renderProductDetailPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    const product = products.find(p => p.id === productId);
    
    if (!product) {
        document.getElementById("productDetailMain").innerHTML = '<div class="no-results"><i class="fas fa-box-open"></i><h3>Товар не найден</h3><a href="catalog.html" class="btn-primary">Вернуться в каталог</a></div>';
        return;
    }
    
    let qty = 1;
    const similar = products.filter(p => p.id !== productId && p.category === product.category).slice(0, 4);
    
    let specsHtml = '';
    if (product.specs && Object.keys(product.specs).length > 0) {
        specsHtml = '<div class="specs-container"><div class="specs-title"><i class="fas fa-clipboard-list"></i> Характеристики</div><div class="specs-grid">';
        for (const [key, val] of Object.entries(product.specs)) {
            specsHtml += '<div class="spec-item"><span class="spec-label">' + escapeHtml(key) + '</span><span class="spec-value">' + escapeHtml(val) + '</span></div>';
        }
        specsHtml += '</div></div>';
    }
    
    let reviewsHtml = '';
    if (product.reviews && product.reviews.length > 0) {
        reviewsHtml = '<div class="reviews-container"><div class="reviews-title"><i class="fas fa-star"></i> Отзывы покупателей (' + product.reviews.length + ')</div>';
        for (let i = 0; i < product.reviews.length; i++) {
            const r = product.reviews[i];
            reviewsHtml += '<div class="review-item"><div class="review-header"><span class="review-author">' + escapeHtml(r.name) + '</span><span class="review-rating">' + '★'.repeat(r.rating) + '☆'.repeat(5 - r.rating) + '</span></div><p class="review-text">' + escapeHtml(r.text) + '</p></div>';
        }
        reviewsHtml += '</div>';
    }
    
    let similarHtml = '';
    if (similar.length > 0) {
        similarHtml = '<div class="similar-products"><h3><i class="fas fa-layer-group"></i> Похожие товары</h3><div class="similar-grid">';
        for (let i = 0; i < similar.length; i++) {
            const p = similar[i];
            similarHtml += '<div class="similar-card" data-id="' + p.id + '"><img src="' + p.imgUrl + '" alt="' + escapeHtml(p.name) + '" onerror="this.src=\'https://placehold.co/600x500/e8f3e8/2d6a4f?text=HabitFlow\'"><div class="similar-name">' + escapeHtml(p.name) + '</div><div class="similar-price">' + (p.price === 0 ? "Бесплатно" : p.price + " ₽") + '</div></div>';
        }
        similarHtml += '</div></div>';
    }
    
    const html = `
        <div class="product-detail-page">
            <div class="back-button-wrapper">
                <button id="backToCatalog" class="btn-outline"><i class="fas fa-arrow-left"></i> Назад в каталог</button>
            </div>
            <div class="detail-grid">
                <div class="detail-image">
                    <img src="${product.imgUrl}" alt="${escapeHtml(product.name)}" onerror="this.src='https://placehold.co/600x500/e8f3e8/2d6a4f?text=HabitFlow'">
                </div>
                <div class="detail-info">
                    <div class="product-category"><i class="fas fa-tag"></i> ${product.category}</div>
                    <h1>${escapeHtml(product.name)}</h1>
                    <div class="rating-large">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))} ${product.rating} / 5</div>
                    <div class="price-large">${product.price === 0 ? "Бесплатно" : product.price + " ₽"}</div>
                    <p class="description-full">${escapeHtml(product.desc)}</p>
                    ${specsHtml}
                    <div class="quantity-selector">
                        <div class="qty-control">
                            <button id="qtyMinus">-</button>
                            <span id="detailQty">1</span>
                            <button id="qtyPlus">+</button>
                        </div>
                        <button id="detailAddBtn" class="btn-primary" data-id="${product.id}" data-name="${escapeHtml(product.name)}" data-price="${product.price}"><i class="fas fa-cart-plus"></i> Добавить в корзину</button>
                    </div>
                </div>
            </div>
            ${reviewsHtml}
            ${similarHtml}
        </div>
    `;
    
    const mainElement = document.getElementById("productDetailMain");
    if (mainElement) mainElement.innerHTML = html;
    
    document.getElementById("backToCatalog")?.addEventListener("click", function() {
        window.location.href = "catalog.html";
    });
    
    const minusBtn = document.getElementById("qtyMinus");
    const plusBtn = document.getElementById("qtyPlus");
    const qtySpan = document.getElementById("detailQty");
    
    if (minusBtn) {
        minusBtn.addEventListener("click", function() {
            if (qty > 1) {
                qty--;
                if (qtySpan) qtySpan.innerText = qty;
            }
        });
    }
    if (plusBtn) {
        plusBtn.addEventListener("click", function() {
            qty++;
            if (qtySpan) qtySpan.innerText = qty;
        });
    }
    
    const detailBtn = document.getElementById("detailAddBtn");
    if (detailBtn) {
        detailBtn.addEventListener("click", function() {
            addToCart(product.id, product.name, product.price, qty);
            qty = 1;
            if (qtySpan) qtySpan.innerText = "1";
        });
    }
    
    const similarCards = document.querySelectorAll(".similar-card");
    for (let i = 0; i < similarCards.length; i++) {
        const card = similarCards[i];
        card.addEventListener("click", function() {
            window.location.href = "product-detail.html?id=" + this.dataset.id;
        });
    }
}

// ===== ПРОФИЛЬ =====
function renderProfile() {
    const user = currentUser;
    const totalHabits = user.habits.reduce((sum, h) => sum + h.total, 0);
    const avgStreak = Math.round(user.habits.reduce((sum, h) => sum + h.streak, 0) / user.habits.length);
    const completionRate = Math.round((totalHabits / 200) * 100);
    
    let habitsHtml = '';
    for (let i = 0; i < user.habits.length; i++) {
        const habit = user.habits[i];
        habitsHtml += `
            <div class="habit-item" style="animation-delay: ${i * 0.05}s">
                <div class="habit-icon" style="background: ${habit.streak >= 10 ? 'linear-gradient(135deg, #2d6a4f, #40916c)' : 'linear-gradient(135deg, #f4a261, #e76f51)'}">
                    <i class="${habit.icon}"></i>
                </div>
                <div class="habit-info">
                    <div class="habit-name">${escapeHtml(habit.name)}</div>
                    <div class="habit-stats">
                        <span><i class="fas fa-bolt"></i> Серия: ${habit.streak} дней</span>
                        <span><i class="fas fa-check-circle"></i> Всего: ${habit.total}</span>
                    </div>
                    <div class="habit-progress">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${Math.min(100, (habit.streak / 30) * 100)}%"></div>
                        </div>
                    </div>
                </div>
                <button class="habit-check-btn" data-habit="${escapeHtml(habit.name)}">
                    <i class="fas fa-check"></i>
                </button>
            </div>
        `;
    }
    
    let ordersHtml = '';
    for (let i = 0; i < user.orders.length; i++) {
        const order = user.orders[i];
        let itemsHtml = '';
        for (let j = 0; j < order.items.length; j++) {
            itemsHtml += '<span class="product-tag"><i class="fas fa-box"></i> ' + escapeHtml(order.items[j]) + '</span>';
        }
        ordersHtml += `
            <div class="order-item">
                <div class="order-header">
                    <div class="order-id"><i class="fas fa-receipt"></i> ${escapeHtml(order.id)}</div>
                    <div class="order-date"><i class="fas fa-calendar-day"></i> ${new Date(order.date).toLocaleDateString('ru-RU')}</div>
                    <div class="order-status ${order.status === 'Доставлен' ? 'delivered' : 'shipping'}">${order.status}</div>
                </div>
                <div class="order-products">${itemsHtml}</div>
                <div class="order-footer">
                    <div class="order-price"><i class="fas fa-ruble-sign"></i> ${order.total} ₽</div>
                    <button class="order-repeat-btn"><i class="fas fa-repeat"></i> Повторить</button>
                </div>
            </div>
        `;
    }
    
    let calendarHtml = '';
    const activeDays = [1,3,5,7,8,10,12,14,15,17,19,21,22,24,26,28];
    for (let day = 1; day <= 28; day++) {
        const isActive = activeDays.includes(day);
        calendarHtml += `<div class="calendar-day ${isActive ? 'active' : ''}">${day}</div>`;
    }
    
    return `
        <div class="profile-page">
            <div class="profile-hero">
                <div class="profile-hero-content">
                    <div class="profile-hero-text">
                        <span class="hero-badge"><i class="fas fa-crown"></i> PREMIUM</span>
                        <h1>Привет, ${escapeHtml(user.name)}!</h1>
                        <p>Твой прогресс вдохновляет! Продолжай в том же духе</p>
                        <div class="hero-stats">
                            <div class="hero-stat">
                                <span class="hero-stat-value">${user.habits.filter(h => h.streak > 0).length}</span>
                                <span class="hero-stat-label">активных привычек</span>
                            </div>
                            <div class="hero-stat">
                                <span class="hero-stat-value">${avgStreak}</span>
                                <span class="hero-stat-label">дней streak</span>
                            </div>
                            <div class="hero-stat">
                                <span class="hero-stat-value">${completionRate}%</span>
                                <span class="hero-stat-label">выполнения</span>
                            </div>
                        </div>
                    </div>
                    <div class="profile-hero-avatar">
                        <div class="avatar-frame">
                            <img src="${user.avatar}" alt="${escapeHtml(user.name)}">
                            <button class="avatar-edit-btn"><i class="fas fa-camera"></i></button>
                        </div>
                        <div class="level-badge">
                            <i class="fas fa-star"></i> Уровень 7
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="user-info-card">
                <div class="user-info-row">
                    <div class="user-info-item">
                        <i class="fas fa-envelope"></i>
                        <div>
                            <span class="info-label">Email</span>
                            <span class="info-value">${escapeHtml(user.email)}</span>
                        </div>
                    </div>
                    <div class="user-info-item">
                        <i class="fas fa-calendar-alt"></i>
                        <div>
                            <span class="info-label">С нами с</span>
                            <span class="info-value">${new Date(user.joinDate).toLocaleDateString('ru-RU')}</span>
                        </div>
                    </div>
                    <div class="user-info-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <div>
                            <span class="info-label">Город</span>
                            <span class="info-value">Москва, Россия</span>
                        </div>
                    </div>
                </div>
                <div class="user-badges">
                    <span class="user-badge"><i class="fas fa-crown"></i> 3 месяца с нами</span>
                    <span class="user-badge"><i class="fas fa-fire"></i> ${avgStreak}-дневный streak</span>
                    <span class="user-badge"><i class="fas fa-check-circle"></i> Верифицирован</span>
                    <span class="user-badge"><i class="fas fa-sun"></i> Ранний пташка</span>
                </div>
                <div class="user-actions">
                    <button class="btn-outline edit-profile-btn"><i class="fas fa-user-edit"></i> Редактировать профиль</button>
                    <button class="btn-outline share-profile-btn"><i class="fas fa-share-alt"></i> Поделиться</button>
                </div>
            </div>
            
            <div class="xp-card">
                <div class="xp-header">
                    <div class="xp-title">
                        <i class="fas fa-chart-line"></i>
                        <span>Прогресс уровня</span>
                    </div>
                    <div class="xp-points">1,250 / 2,000 XP</div>
                </div>
                <div class="xp-bar-container">
                    <div class="xp-bar-fill" style="width: 62.5%"></div>
                </div>
                <div class="xp-rewards">
                    <div class="xp-reward-item">
                        <i class="fas fa-bullseye"></i>
                        <span>До следующего уровня: 750 XP</span>
                    </div>
                    <div class="xp-reward-item">
                        <i class="fas fa-tag"></i>
                        <span>Награда: Скидка 10%</span>
                    </div>
                </div>
            </div>
            
            <div class="stats-grid-modern">
                <div class="stat-card-modern">
                    <div class="stat-icon blue"><i class="fas fa-walking"></i></div>
                    <div class="stat-content">
                        <div class="stat-number">${totalHabits}</div>
                        <div class="stat-label">Выработано привычек</div>
                        <div class="stat-change positive"><i class="fas fa-arrow-up"></i> +12 за месяц</div>
                    </div>
                </div>
                <div class="stat-card-modern">
                    <div class="stat-icon orange"><i class="fas fa-fire"></i></div>
                    <div class="stat-content">
                        <div class="stat-number">${avgStreak}</div>
                        <div class="stat-label">Средний streak</div>
                        <div class="stat-change positive"><i class="fas fa-arrow-up"></i> +3 дня</div>
                    </div>
                </div>
                <div class="stat-card-modern">
                    <div class="stat-icon green"><i class="fas fa-shopping-bag"></i></div>
                    <div class="stat-content">
                        <div class="stat-number">${user.orders.length}</div>
                        <div class="stat-label">Заказов</div>
                        <div class="stat-change neutral"><i class="fas fa-tag"></i> экономия 1,490 ₽</div>
                    </div>
                </div>
                <div class="stat-card-modern">
                    <div class="stat-icon purple"><i class="fas fa-trophy"></i></div>
                    <div class="stat-content">
                        <div class="stat-number">${user.habits.filter(h => h.streak >= 7).length}</div>
                        <div class="stat-label">Достижений</div>
                        <div class="stat-change positive"><i class="fas fa-arrow-up"></i> +2 новые</div>
                    </div>
                </div>
            </div>
            
            <div class="section-card">
                <div class="section-card-header">
                    <div class="section-title">
                        <i class="fas fa-check-circle"></i>
                        <h2>Мои привычки</h2>
                    </div>
                    <button class="add-habit-btn-custom">
                        <i class="fas fa-plus-circle"></i>
                        <span>Добавить привычку</span>
                    </button>
                </div>
                
                <div class="activity-calendar-modern">
                    <div class="calendar-title">
                        <i class="fas fa-calendar-alt"></i>
                        <span>Февраль 2026</span>
                    </div>
                    <div class="calendar-header">
                        <span>Пн</span><span>Вт</span><span>Ср</span><span>Чт</span><span>Пт</span><span>Сб</span><span>Вс</span>
                    </div>
                    <div class="calendar-grid">
                        ${calendarHtml}
                    </div>
                </div>
                
                <div class="habits-list-modern">
                    ${habitsHtml}
                </div>
            </div>
            
            <div class="section-card">
                <div class="section-card-header">
                    <div class="section-title">
                        <i class="fas fa-medal"></i>
                        <h2>Мои достижения</h2>
                    </div>
                    <button class="view-all-link">Все достижения <i class="fas fa-arrow-right"></i></button>
                </div>
                <div class="achievements-grid-modern">
                    <div class="achievement-item achieved">
                        <div class="achievement-icon"><i class="fas fa-fire"></i></div>
                        <div class="achievement-info">
                            <div class="achievement-name">Огненный старт</div>
                            <div class="achievement-desc">7 дней подряд</div>
                            <div class="achievement-progress"><span>7/7</span><div class="progress-line"><div style="width:100%"></div></div></div>
                        </div>
                    </div>
                    <div class="achievement-item locked">
                        <div class="achievement-icon"><i class="fas fa-trophy"></i></div>
                        <div class="achievement-info">
                            <div class="achievement-name">Мастер привычек</div>
                            <div class="achievement-desc">30 дней подряд</div>
                            <div class="achievement-progress"><span>12/30</span><div class="progress-line"><div style="width:40%"></div></div></div>
                        </div>
                    </div>
                    <div class="achievement-item locked">
                        <div class="achievement-icon"><i class="fas fa-book"></i></div>
                        <div class="achievement-info">
                            <div class="achievement-name">Книголюб</div>
                            <div class="achievement-desc">50 часов чтения</div>
                            <div class="achievement-progress"><span>28/50</span><div class="progress-line"><div style="width:56%"></div></div></div>
                        </div>
                    </div>
                    <div class="achievement-item achieved">
                        <div class="achievement-icon"><i class="fas fa-tint"></i></div>
                        <div class="achievement-info">
                            <div class="achievement-name">Водный баланс</div>
                            <div class="achievement-desc">100 дней гидратации</div>
                            <div class="achievement-progress"><span>100/100</span><div class="progress-line"><div style="width:100%"></div></div></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="section-card">
                <div class="section-card-header">
                    <div class="section-title">
                        <i class="fas fa-history"></i>
                        <h2>История заказов</h2>
                    </div>
                    <button class="view-all-link">Смотреть все <i class="fas fa-arrow-right"></i></button>
                </div>
                <div class="orders-list-modern">
                    ${ordersHtml}
                </div>
            </div>
            
            <div class="section-card">
                <div class="section-card-header">
                    <div class="section-title">
                        <i class="fas fa-cog"></i>
                        <h2>Настройки</h2>
                    </div>
                </div>
                <div class="settings-list">
                    <div class="setting-item">
                        <div class="setting-left"><i class="fas fa-bell"></i><span>Уведомления</span></div>
                        <label class="toggle-switch"><input type="checkbox" checked><span class="toggle-slider"></span></label>
                    </div>
                    <div class="setting-item">
                        <div class="setting-left"><i class="fas fa-envelope"></i><span>Email-рассылка</span></div>
                        <label class="toggle-switch"><input type="checkbox"><span class="toggle-slider"></span></label>
                    </div>
                    <div class="setting-item">
                        <div class="setting-left"><i class="fas fa-moon"></i><span>Тёмная тема</span></div>
                        <label class="toggle-switch"><input type="checkbox" id="themeToggleProfile"><span class="toggle-slider"></span></label>
                    </div>
                    <div class="setting-item">
                        <div class="setting-left"><i class="fas fa-language"></i><span>Язык</span></div>
                        <select class="language-select"><option>Русский</option><option>English</option></select>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function attachProfileEvents() {
    const checkBtns = document.querySelectorAll(".habit-check-btn");
    for (let i = 0; i < checkBtns.length; i++) {
        const btn = checkBtns[i];
        btn.addEventListener("click", function(e) {
            e.stopPropagation();
            this.classList.add("checked");
            setTimeout(() => this.classList.remove("checked"), 300);
            showToast("Привычка отмечена! +10 XP");
        });
    }
    
    const addHabitBtn = document.querySelector(".add-habit-btn-custom");
    if (addHabitBtn) {
        addHabitBtn.addEventListener("click", function() {
            showToast("Новая привычка появится после короткого опроса!");
        });
    }
    
    const editProfileBtn = document.querySelector(".edit-profile-btn");
    if (editProfileBtn) {
        editProfileBtn.addEventListener("click", function() {
            showToast("Редактирование профиля откроется скоро");
        });
    }
    
    const shareBtn = document.querySelector(".share-profile-btn");
    if (shareBtn) {
        shareBtn.addEventListener("click", function() {
            showToast("Ссылка на профиль скопирована!");
        });
    }
    
    const repeatBtns = document.querySelectorAll(".order-repeat-btn");
    for (let i = 0; i < repeatBtns.length; i++) {
        repeatBtns[i].addEventListener("click", function() {
            showToast("Товары добавлены в корзину");
        });
    }
    
    const themeToggle = document.getElementById("themeToggleProfile");
    if (themeToggle) {
        const saved = localStorage.getItem("theme");
        themeToggle.checked = saved === "dark";
        themeToggle.addEventListener("change", function(e) {
            if (e.target.checked) {
                document.documentElement.setAttribute("data-theme", "dark");
                localStorage.setItem("theme", "dark");
            } else {
                document.documentElement.removeAttribute("data-theme");
                localStorage.setItem("theme", "light");
            }
        });
    }
}

// ===== АДМИН-ПАНЕЛЬ =====
let adminCurrentPage = 1;
const adminItemsPerPage = 5;

function renderAdminPanel() {
    const start = (adminCurrentPage - 1) * adminItemsPerPage;
    const paginated = adminProducts.slice(start, start + adminItemsPerPage);
    const totalPages = Math.ceil(adminProducts.length / adminItemsPerPage);
    
    let tableRows = '';
    for (let i = 0; i < paginated.length; i++) {
        const product = paginated[i];
        tableRows += `
            <tr>
                <td>${product.id}</td>
                <td><img src="${product.imgUrl}" style="width:40px;height:40px;object-fit:cover;border-radius:8px;" onerror="this.src='https://placehold.co/600x500/e8f3e8/2d6a4f?text=HabitFlow'"></td>
                <td>${escapeHtml(product.name)}</td>
                <td>${product.price} ₽</td>
                <td>${product.category}</td>
                <td>${product.stock || 0}</td>
                <td><button class="admin-edit" data-id="${product.id}"><i class="fas fa-edit"></i></button><button class="admin-delete" data-id="${product.id}"><i class="fas fa-trash-alt"></i></button></td>
            </tr>
        `;
    }
    
    let paginationHtml = '<div class="admin-pagination">';
    for (let i = 1; i <= totalPages; i++) {
        paginationHtml += `<button class="page-btn ${i === adminCurrentPage ? 'active' : ''}" data-page="${i}">${i}</button>`;
    }
    paginationHtml += '</div>';
    
    const totalRevenue = adminProducts.reduce((sum, p) => sum + p.price * (p.stock || 0), 0);
    const categoriesCount = [...new Set(adminProducts.map(p => p.category))].length;
    
    return `
        <div class="admin-header">
            <h1><i class="fas fa-shield-alt"></i> Админ-панель</h1>
            <button class="btn-primary" id="addProductBtn"><i class="fas fa-plus-circle"></i> Добавить товар</button>
        </div>
        <div class="admin-stats">
            <div class="admin-stat">
                <div class="admin-stat-icon"><i class="fas fa-boxes"></i></div>
                <div class="admin-stat-info">
                    <span class="admin-stat-label">Всего товаров</span>
                    <strong class="admin-stat-value">${adminProducts.length}</strong>
                </div>
            </div>
            <div class="admin-stat">
                <div class="admin-stat-icon"><i class="fas fa-chart-line"></i></div>
                <div class="admin-stat-info">
                    <span class="admin-stat-label">Общая выручка</span>
                    <strong class="admin-stat-value">${totalRevenue.toLocaleString()} ₽</strong>
                </div>
            </div>
            <div class="admin-stat">
                <div class="admin-stat-icon"><i class="fas fa-tags"></i></div>
                <div class="admin-stat-info">
                    <span class="admin-stat-label">Категорий</span>
                    <strong class="admin-stat-value">${categoriesCount}</strong>
                </div>
            </div>
        </div>
        <div class="admin-table-wrapper">
            <table class="admin-table">
                <thead>
                    <tr><th>ID</th><th>Изображение</th><th>Название</th><th>Цена</th><th>Категория</th><th>Остаток</th><th>Действия</th></tr>
                </thead>
                <tbody>${tableRows}</tbody>
            </table>
        </div>
        ${paginationHtml}
        <div id="adminModal" class="admin-modal" style="display:none;">
            <div class="admin-modal-content">
                <div class="admin-modal-header">
                    <h3 id="modalTitle"><i class="fas fa-edit"></i> Редактировать товар</h3>
                    <button class="close-admin-modal">&times;</button>
                </div>
                <div class="admin-modal-body">
                    <input type="hidden" id="editId">
                    <div class="form-group"><label><i class="fas fa-tag"></i> Название</label><input type="text" id="editName" class="admin-input" placeholder="Введите название товара"></div>
                    <div class="form-group"><label><i class="fas fa-ruble-sign"></i> Цена</label><input type="number" id="editPrice" class="admin-input" placeholder="0"></div>
                    <div class="form-group"><label><i class="fas fa-folder"></i> Категория</label><select id="editCategory" class="admin-input"><option value="Товары">Товары</option><option value="Услуги">Услуги</option><option value="Бесплатно">Бесплатно</option></select></div>
                    <div class="form-group"><label><i class="fas fa-align-left"></i> Описание</label><textarea id="editDesc" rows="3" class="admin-input" placeholder="Опишите товар..."></textarea></div>
                    <div class="form-group"><label><i class="fas fa-box"></i> Остаток на складе</label><input type="number" id="editStock" class="admin-input" placeholder="0"></div>
                    <div class="form-group"><label><i class="fas fa-image"></i> URL изображения</label><input type="text" id="editImgUrl" class="admin-input" placeholder="https://..."></div>
                </div>
                <div class="admin-modal-footer">
                    <button class="btn-outline" id="cancelAdminBtn"><i class="fas fa-times"></i> Отмена</button>
                    <button class="btn-primary" id="saveProductBtn"><i class="fas fa-save"></i> Сохранить</button>
                </div>
            </div>
        </div>
    `;
}

function attachAdminEvents() {
    const addBtn = document.getElementById("addProductBtn");
    if (addBtn) {
        addBtn.addEventListener("click", function() {
            document.getElementById("modalTitle").innerHTML = '<i class="fas fa-plus-circle"></i> Добавить товар';
            document.getElementById("editId").value = "";
            document.getElementById("editName").value = "";
            document.getElementById("editPrice").value = "";
            document.getElementById("editCategory").value = "Товары";
            document.getElementById("editDesc").value = "";
            document.getElementById("editStock").value = "10";
            document.getElementById("editImgUrl").value = "https://placehold.co/600x500/e8f3e8/2d6a4f?text=New";
            document.getElementById("adminModal").style.display = "flex";
        });
    }
    
    const editBtns = document.querySelectorAll(".admin-edit");
    for (let i = 0; i < editBtns.length; i++) {
        const btn = editBtns[i];
        btn.addEventListener("click", function() {
            const product = adminProducts.find(p => p.id === parseInt(this.dataset.id));
            if (product) {
                document.getElementById("modalTitle").innerHTML = '<i class="fas fa-edit"></i> Редактировать товар';
                document.getElementById("editId").value = product.id;
                document.getElementById("editName").value = product.name;
                document.getElementById("editPrice").value = product.price;
                document.getElementById("editCategory").value = product.category;
                document.getElementById("editDesc").value = product.desc;
                document.getElementById("editStock").value = product.stock || 0;
                document.getElementById("editImgUrl").value = product.imgUrl;
                document.getElementById("adminModal").style.display = "flex";
            }
        });
    }
    
    const deleteBtns = document.querySelectorAll(".admin-delete");
    for (let i = 0; i < deleteBtns.length; i++) {
        const btn = deleteBtns[i];
        btn.addEventListener("click", function() {
            if (confirm("Удалить товар?")) {
                const id = parseInt(this.dataset.id);
                adminProducts = adminProducts.filter(p => p.id !== id);
                products.length = 0;
                for (let j = 0; j < adminProducts.length; j++) {
                    products.push(adminProducts[j]);
                }
                const container = document.getElementById("adminContainer");
                if (container) {
                    container.innerHTML = renderAdminPanel();
                    attachAdminEvents();
                }
                updateCartCount();
                showToast("Товар удалён");
            }
        });
    }
    
    const pageBtns = document.querySelectorAll(".page-btn");
    for (let i = 0; i < pageBtns.length; i++) {
        const btn = pageBtns[i];
        btn.addEventListener("click", function() {
            adminCurrentPage = parseInt(this.dataset.page);
            const container = document.getElementById("adminContainer");
            if (container) {
                container.innerHTML = renderAdminPanel();
                attachAdminEvents();
            }
        });
    }
    
    const modal = document.getElementById("adminModal");
    const closeModal = function() { if (modal) modal.style.display = "none"; };
    const closeBtn = document.querySelector(".close-admin-modal");
    const cancelBtn = document.getElementById("cancelAdminBtn");
    const saveBtn = document.getElementById("saveProductBtn");
    
    if (closeBtn) closeBtn.addEventListener("click", closeModal);
    if (cancelBtn) cancelBtn.addEventListener("click", closeModal);
    
    if (saveBtn) {
        saveBtn.addEventListener("click", function() {
            const id = document.getElementById("editId").value;
            const newProduct = {
                id: id ? parseInt(id) : Date.now(),
                name: document.getElementById("editName").value,
                price: parseInt(document.getElementById("editPrice").value),
                category: document.getElementById("editCategory").value,
                desc: document.getElementById("editDesc").value,
                rating: 4.5,
                stock: parseInt(document.getElementById("editStock").value),
                imgUrl: document.getElementById("editImgUrl").value,
                specs: {}
            };
            if (id) {
                const index = adminProducts.findIndex(p => p.id === parseInt(id));
                if (index !== -1) adminProducts[index] = newProduct;
            } else {
                adminProducts.push(newProduct);
            }
            products.length = 0;
            for (let j = 0; j < adminProducts.length; j++) {
                products.push(adminProducts[j]);
            }
            closeModal();
            const container = document.getElementById("adminContainer");
            if (container) {
                container.innerHTML = renderAdminPanel();
                attachAdminEvents();
            }
            updateCartCount();
            showToast(id ? "Товар обновлён" : "Товар добавлен");
        });
    }
}

// ===== ОБЩИЕ ФУНКЦИИ =====
function showToast(msg) {
    const t = document.createElement("div");
    t.innerHTML = msg;
    t.className = "toast-notification";
    t.style.cssText = "position:fixed; bottom:25px; left:25px; background:var(--accent-green); color:white; padding:12px 28px; border-radius:50px; z-index:3000; font-weight:500; box-shadow:0 5px 15px rgba(0,0,0,0.2);";
    document.body.appendChild(t);
    setTimeout(function() {
        t.style.opacity = "0";
        t.style.transform = "translateX(-100px)";
        t.style.transition = "all 0.3s ease";
        setTimeout(function() { t.remove(); }, 300);
    }, 2200);
}

function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

function initTheme() {
    const btn = document.getElementById("themeSwitch");
    if (!btn) return;
    const saved = localStorage.getItem("theme");
    if (saved === "dark") document.documentElement.setAttribute("data-theme", "dark");
    btn.addEventListener("click", function() {
        const isDark = document.documentElement.getAttribute("data-theme") === "dark";
        if (isDark) {
            document.documentElement.removeAttribute("data-theme");
            localStorage.setItem("theme", "light");
        } else {
            document.documentElement.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark");
        }
    });
}

function initBurger() {
    const burger = document.getElementById("burgerBtn");
    const nav = document.getElementById("navLinks");
    const close = document.getElementById("closeBurger");
    if (burger) {
        burger.addEventListener("click", function() { if (nav) nav.classList.add("open"); });
    }
    if (close) {
        close.addEventListener("click", function() { if (nav) nav.classList.remove("open"); });
    }
    const links = document.querySelectorAll(".nav-links a");
    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener("click", function() { if (nav) nav.classList.remove("open"); });
    }
}

function initFaq() {
    const questions = document.querySelectorAll(".faq-question");
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener("click", function() {
            this.parentElement.classList.toggle("open");
        });
    }
}

function initTabs() {
    const tabBtns = document.querySelectorAll(".tab-btn");
    for (let i = 0; i < tabBtns.length; i++) {
        const btn = tabBtns[i];
        btn.addEventListener("click", function() {
            for (let j = 0; j < tabBtns.length; j++) {
                tabBtns[j].classList.remove("active");
            }
            this.classList.add("active");
            const tabId = this.dataset.tab;
            const contents = document.querySelectorAll(".tab-content");
            for (let j = 0; j < contents.length; j++) {
                contents[j].classList.remove("active-tab");
            }
            const target = document.getElementById("tab-" + tabId);
            if (target) target.classList.add("active-tab");
        });
    }
}

function renderTeamSection() {
    const team = [
        { name: "Алина Коваленко", role: "Product Lead", bio: "10+ лет в продуктовом дизайне", quote: "Привычки — это архитектура нашей повседневности.", img: "img/sotr1.avif" },
        { name: "Дмитрий Соколов", role: "UX-исследователь", bio: "Изучает поведение пользователей", quote: "Эмпатия — главный инструмент дизайнера.", img: "img/sotr2.jpg" },
        { name: "Екатерина Морозова", role: "UI-дизайнер", bio: "Создаёт визуальную эстетику", quote: "Красота должна приносить пользу.", img: "img/sotr3.jpg" },
        { name: "Игорь Васильев", role: "Эксперт", bio: "Клинический психолог", quote: "Маленькие победы ведут к большим изменениям.", img: "img/sotr4.jpg" }
    ];
    let html = '<div class="team-grid">';
    for (let i = 0; i < team.length; i++) {
        const m = team[i];
        html += `
            <div class="team-card">
                <div class="team-photo"><img src="${m.img}" alt="${escapeHtml(m.name)}"></div>
                <div class="team-name">${escapeHtml(m.name)}</div>
                <div class="team-role">${escapeHtml(m.role)}</div>
                <div class="team-bio">${escapeHtml(m.bio)}</div>
                <div class="team-quote"><i class="fas fa-quote-left"></i> ${escapeHtml(m.quote)}</div>
            </div>
        `;
    }
    html += '</div>';
    return html;
}

// ===== ЗАПУСК =====
document.addEventListener("DOMContentLoaded", function() {
    initBurger();
    initTheme();
    loadCartFromLocalStorage();
    updateCartCount();
    
    const page = window.location.pathname.split("/").pop();
    
    if (page === "index.html" || page === "" || page === "/") {
        initFaq();
        initTabs();
        const teamContainer = document.getElementById("teamGrid");
        if (teamContainer) teamContainer.innerHTML = renderTeamSection();
    } else if (page === "catalog.html") {
        const container = document.getElementById("catalogContainer");
        if (container) {
            container.innerHTML = renderCatalog();
            attachCatalogEvents();
        }
    } else if (page === "cart.html") {
        initCartPage();
    } else if (page === "profile.html") {
        const container = document.getElementById("profileContainer");
        if (container) {
            container.innerHTML = renderProfile();
            attachProfileEvents();
        }
    } else if (page === "admin.html") {
        const container = document.getElementById("adminContainer");
        if (container) {
            container.innerHTML = renderAdminPanel();
            attachAdminEvents();
        }
    } else if (page === "product-detail.html") {
        renderProductDetailPage();
    }
});